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

Joined successfully to room
```cs showLineNumbers
public void OnJoined()
{
  Debug.Log("Joined");
}
```

Failed to join to room with the error message
```cs showLineNumbers
public void OnFailed(string message)
{
    Debug.LogError("Failed with " + message);
}
```
Left successfully from the current room
```cs showLineNumbers
public void OnLeft()
{
  Debug.Log("Left");
}
```
Another player joined to current room
```cs showLineNumbers
public void OnPlayerJoined(RagonPlayer player)
{
  Debug.Log("On Joined " + player.Name);
}
```

Another player left the current room
```cs showLineNumbers
public void OnPlayerLeft(RagonPlayer player)
{
  Debug.Log("On Left " + player.Name);
}
```

New player become owner of room
```cs showLineNumbers
public void OnOwnershipChanged(RagonPlayer player)
{
  Debug.Log("New room owner " + player.Name);
}
```

The server requested to load a new map, you should load a new scene and call ```RagonNetwork.Room.SceneLoaded()```
```cs showLineNumbers
public void OnLevel(string sceneName)
{
  Debug.Log("Level " + sceneName);
  RagonNetwork.Room.SceneLoaded() // Ready to receive updates
}
```
