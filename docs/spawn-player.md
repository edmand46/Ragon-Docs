---
sidebar_position: 3
---

# Spawn Player

Create player state which will be replicated on network: 
```
public class PlayerState: IRagonSerializable
{
  private static BoundedRange _compressor = new BoundedRange(-100.0f, 100.0f, 0.01f);
  public Vector3 Position;
  public void Serialize(BitBuffer buffer)
  {
    buffer.AddUInt(_compressor.Quantize(Position.x));
    buffer.AddUInt(_compressor.Quantize(Position.y));
    buffer.AddUInt(_compressor.Quantize(Position.z));
  }

  public void Deserialize(BitBuffer buffer)
  {
    Position = new Vector3();

    Position.x = _compressor.Dequantize(buffer.ReadUInt());
    Position.y = _compressor.Dequantize(buffer.ReadUInt());
    Position.z = _compressor.Dequantize(buffer.ReadUInt());
  }
}
```

Create player entity with state:
```
public class PlayerEntity : RagonEntity<PlayerState>
{
  private void Update()
  {
    if (IsMine)
    {
      var direction = Vector3.zero;
      if (Input.GetKey(KeyCode.A))
      {
        direction -= transform.right * 10 * Time.deltaTime;
      }
      else if (Input.GetKey(KeyCode.D))
      {
        direction += transform.right * 10 * Time.deltaTime;
      }
      transform.position += direction;
    }
    else
    {
      transform.position = Vector3.Lerp(transform.position, State.Position, Time.deltaTime * 3);
    }
  }

  private void FixedUpdate()
  {
    if (IsMine)
    {
      State.Position = transform.position;
      ReplicateState();
    }
  }
}
```


Create GameObject **Player** with add attach PlayerEntity component:


![ragon-player](/img/ragon-player.png)

Convert **Player** into prefab by dragging GameObject into Assets folder


![ragon-prefab](/img/ragon-prefab.png)

Define player prefab field on top script and drag **Player** prefab into this field:
```
[SerializeField] private GameObject PlayerPrefab;
```

Add new method **GetPrefab** which will return prefab by type of entity:
```
private GameObject GetPrefab(ushort type)
{
  switch (type)
  {
    case 0:
    {
      return PlayerPrefab;
    }
  }
  return null;
}
```

Edit **Start** method at **Game Manager** script
```
    private void Start()
    {
      var entityManager = GetComponent<RagonEntityManager>();
      entityManager.PrefabCallback(GetPrefab);
      
      RagonNetwork.SetListeners(this, entityManager);
      RagonNetwork.ConnectToServer("127.0.0.1", 4444);
    }

```
Edit **Start** method at **Game Manager** script, add code for spawn our entity with type 0 and Empty Payload
```
public void OnJoined()
{
      Debug.Log("Joined");
      RagonNetwork.Room.CreateEntity(0, new EmptyPayload());
}
```

Complete script will looks like below:
```
[RequireComponent(typeof(RagonEntityManager))]
public class GameManager : MonoBehaviour, IRagonNetworkListener
{
    [SerializeField] private GameObject PlayerPrefab;
    
    private void Start()
    {
        var entityManager = GetComponent<RagonEntityManager>();
        entityManager.PrefabCallback(GetPrefab);
      
        RagonNetwork.SetListeners(this, entityManager);
        RagonNetwork.ConnectToServer("127.0.0.1", 4444);
    }

    private GameObject GetPrefab(ushort type)
    {
        switch (type)
        {
            case 0:
            {
                return PlayerPrefab;
            }
        }
        return null;
    }
    
    public void OnAuthorized(string playerId, string playerName)
    {
        RagonNetwork.CreateOrJoin("example", 1, 2);
    }

    public void OnJoined()
    {
        Debug.Log("Joined");
        RagonNetwork.Room.CreateEntity(0, new EmptyPayload());
    }

    public void OnFailed()
    {
        Debug.Log("Failed");
    }

    public void OnLeaved()
    { 
        Debug.Log("Leaved");
    }

    public void OnConnected()
    {
        Debug.Log("Authorizing");
        var randomName = $"Player {Random.Range(100, 999)}"; 
        RagonNetwork.AuthorizeWithKey("defaultkey", randomName, 1, Array.Empty<byte>());
    }

    public void OnDisconnected()
    {
        Debug.Log("Disconnected");
    }

    public void OnPlayerJoined(RagonPlayer player)
    {
        Debug.Log("On Joined " + player.Name);
    }

    public void OnPlayerLeft(RagonPlayer player)
    {
        Debug.Log("On Left " + player.Name);
    }

    public void OnOwnerShipChanged(RagonPlayer player)
    {
        Debug.Log("New room owner " + player.Name);
    }

    public void OnEvent(ushort evntCode, BitBuffer payload)
    {
        Debug.Log("Event " + evntCode);
    }

    public void OnLevel(string sceneName)
    {
        Debug.Log("Level " + sceneName);
        RagonNetwork.Room.SceneLoaded();
    }
}
```

Open Ragon Tools windows:


![ragon-tools-popup](/img/ragon-tools-popup.png)


Set Build true and Players count 2 


![ragon-tools](/img/ragon-tools.png)

And press **Play Only Clients**

![ragon-play](/img/ragon-play.gif)