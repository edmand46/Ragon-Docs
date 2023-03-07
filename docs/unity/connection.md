---
sidebar_position: 2
---

# Connection

### Connect to lobby

To connect to a server, we need to create a component that will call the Ragon Network API

Create script ``Game Network`` and implement Ragon interface ```IRagonListener``` :

```cs showLineNumbers
public class Game Network: MonoBehaviour, IRagonListener
{
  public void OnConnected()
  {
    Debug.Log("Connected");
  }
    
  public void OnAuthorized(string playerId, string playerName)
  {
    Debug.Log("Authorized");
  }
    
  public void OnJoined()
  {
    Debug.Log("Joined");
  }

  public void OnFailed(string message)
  {
    Debug.LogError("Failed with " + message);
  }

  public void OnLeaved()
  {
    Debug.Log("Leaved");
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

  public void OnOwnershipChanged(RagonPlayer player)
  {
    Debug.Log("New room owner " + player.Name);
  }

  public void OnLevel(string sceneName)
  {
    Debug.Log("Level " + sceneName);
  }
}
```

In ```Start``` method we attach RagonEntityManager and connect to server

```cs
private void Start()
{  
  RagonNetwork.AddListener(this);
  RagonNetwork.Connect();
}
```

After we was connected will be called ```OnConnected``` in this place we should request authorization with a key and
would we like the name:

```cs
public void OnConnected(RagonClient client)
{
  Debug.Log("Connected!");
  var randomName = $"Player {Random.Range(100, 999)}";
  RagonNetwork.Session.AuthorizeWithKey("defaultkey", randomName, Array.Empty<byte>());
}
```

The next step is create or join to room, where specify the minimal amount of players, maximum and also map:

```cs
public void OnAuthorizationSuccess(RagonClient client, string playerId, string playerName)
{
  Debug.Log("Authorized!");
  RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
}
```

The last step, we should tell the server what is ready to receive updates for this map:

```cs
public void OnLevel(string sceneName)
{
  Debug.Log("Level " + sceneName);
  RagonNetwork.Room.SceneLoaded();
}
```

Now drag and drop GameManager on GameObject on the scene:

![img.png](/img/ragon-manager.png)

And press Play, after you should see next logs

![network-logs](/img/network-logs.png)

Success! You connected to **Ragon Relay Server** and authorized!
