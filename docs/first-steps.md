---
sidebar_position: 3
---

# First Steps
After you installed Unity SDK, and downloaded **Ragon Simple Server**, let's begin

### Server
For first start our server, unzip and launch executable depends from your OS: 
- For MacOS **Ragon.SimpleServer**
- For Windows **Ragon.SimpleServer.exe**
- For Linux **Ragon.SimpleServer**

### Unity Client
### Setup scene

Create empty game object with name for example ``Network``, add next components:
- Ragon Network
- Ragon Entity Manager


![network-component](/img/network-component.png)

### Game Manager

Create script ``Game Manager`` with content below:

```
[RequireComponent(typeof(RagonEntityManager))]
  public class GameManager : MonoBehaviour, IRagonNetworkListener
  {
    
    private void Start()
    {
      var entityManager = GetComponent<RagonEntityManager>();
      
      RagonNetwork.SetListeners(this, entityManager);
      RagonNetwork.ConnectToServer("127.0.0.1", 4444);
    }

    public void OnAuthorized(string playerId, string playerName)
    {
      RagonNetwork.CreateOrJoin("example", 1, 2);
    }

    public void OnJoined()
    {
      Debug.Log("Joined");
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

Add this script on **Network** gameobject

![network-obje](/img/network-object.png)

And press Play, after you should see next logs

![network-logs](/img/network-logs.png)

Success! You connected to **Ragon Simple Server** and authorized!