---
sidebar_position: 0
---

# Ragon Event Listener

For listening network events such as player connections, leave, etc, you should implement IRagonEventListener interface

#### Example setup:
```cs showLineNumbers
public class GameNetwork : MonoBehaviour, IRagonListener
{
   private void Start()
   {
       RagonNetwork.AddListener(this);
       RagonNetwork.Connect("127.0.0.1", 4444);   
   }
}
```

Connected to Relay Server
```cs showLineNumbers
public void OnConnected()
{

}
```

Disconnected from Ragon Relay
```cs showLineNumbers
public void OnDisconnected()
{
  Debug.Log("Disconnected");
}
```

Authorized on Relay Server, received server assigned **playerId** and **playerName**, and we can join/create room. 
```cs showLineNumbers
public void OnAuthorized(string playerId, string playerName)
{
  Debug.Log("Authorized");
  RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
}
```

Joined successful joined to room
```cs showLineNumbers
public void OnJoined()
{
  Debug.Log("Joined");
}
```

Failed joined to room with error message 
```cs showLineNumbers
public void OnFailed(string message)
{
    Debug.LogError("Failed with " + message);
}
```

Leaved successful from current room
```cs showLineNumbers
public void OnLeaved()
{
  Debug.Log("Leaved");
}
```
Another player joined to current room
```cs showLineNumbers
public void OnPlayerJoined(RagonPlayer player)
{
  Debug.Log("On Joined " + player.Name);
}
```

Another player left to current room
```cs showLineNumbers
public void OnPlayerLeft(RagonPlayer player)
{
  Debug.Log("On Left " + player.Name);
}
```

New player become owner of room
```cs showLineNumbers
public void OnOwnerShipChanged(RagonPlayer player)
{
  Debug.Log("New room owner " + player.Name);
}
```

```cs showLineNumbers
public void OnLevel(string sceneName)
{
  Debug.Log("Level " + sceneName);
  RagonNetwork.Room.SceneLoaded() // Ready to receive updates
}
```
