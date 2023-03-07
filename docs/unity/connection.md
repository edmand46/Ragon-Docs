---
sidebar_position: 2
---

# Connection

### Connect to a relay server

To connect to a server, we need to create a component that will call the Ragon Network API

Create script ``Game Network`` and implement Ragon interface ```IRagonListener``` :

```cs showLineNumbers
using System;
using Ragon.Client;
using Ragon.Client.Unity;
using UnityEngine;
using Random = UnityEngine.Random;

public class GameNetwork : MonoBehaviour, IRagonListener
{
  private void Start()
  { 
    RagonNetwork.AddListener(this);
    RagonNetwork.Connect();
  }

  public void OnAuthorizationSuccess(RagonClient client, string playerId, string playerName)
  {
    Debug.Log("Authorized");
    RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
  }

  public void OnAuthorizationFailed(RagonClient client, string message)
  {
    Debug.Log("Unauthorized");
  }

  public void OnConnected(RagonClient client)
  {
    Debug.Log("Connected");
    
    var randomName = $"Player {Random.Range(100, 999)}";
    RagonNetwork.Session.AuthorizeWithKey("defaultkey", randomName, Array.Empty<byte>());
  }

  public void OnDisconnected(RagonClient client)
  {
    Debug.Log("Disconnected");
  }

  public void OnFailed(RagonClient client, string message)
  {
    Debug.Log("Failed");
  }

  public void OnJoined(RagonClient client)
  {
    Debug.Log("Joined");
  }

  public void OnLeft(RagonClient client)
  {
    Debug.Log("Left");
  }

  public void OnLevel(RagonClient client, string sceneName)
  {
    Debug.Log($"Level: {sceneName}");
    RagonNetwork.Room.SceneLoaded();
  }

  public void OnOwnershipChanged(RagonClient client, RagonPlayer player)
  {
    Debug.Log($"Room ownership changed");
  }

  public void OnPlayerJoined(RagonClient client, RagonPlayer player)
  {
    Debug.Log($"Player joined");
  }

  public void OnPlayerLeft(RagonClient client, RagonPlayer player)
  {
    Debug.Log($"Player left");
  }
}
```

In ```Start``` method we connect to server

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
    Debug.Log("Authorized");
    RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
}
```

The last step, we should tell the server what is ready to receive updates for this map:

```cs
public void OnLevel(RagonClient client, string sceneName)
{
  Debug.Log($"Level: {sceneName}");
  RagonNetwork.Room.SceneLoaded();
}
```

Now drag and drop GameManager on GameObject on the scene:

![img.png](/images/game-network.png)

And press Play, after you should see next logs

**Client Logs**:

![network-logs](/images/client-logs.png)

**Server Logs**:

![network-logs](/images/server-logs.png)

Success! You connected to **Ragon Relay Server** and authorized!
