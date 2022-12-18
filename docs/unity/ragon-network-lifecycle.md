---
sidebar_position: 2
---

# Ragon Event Listener

For listening network events such as player connections, leave, etc, you should implement IRagonEventListener interface

#### Example:
```cs showLineNumbers
[RequireComponent(typeof(RagonEntityManager))]
public class GameManager : MonoBehaviour, IRagonListener
{
```

```cs showLineNumbers
public void OnConnected()
{

}
```

```cs showLineNumbers
public void OnAuthorized(string playerId, string playerName)
{
  Debug.Log("Authorized");
  RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
}
```

```cs showLineNumbers
public void OnJoined()
{
  Debug.Log("Joined");
}
```

```cs showLineNumbers
public void OnFailed(string message)
{
    Debug.LogError("Failed with " + message);
}
```

```cs showLineNumbers
public void OnAuthorized(string playerId, string playerName)
{
  Debug.Log("Authorized");
  RagonNetwork.Session.CreateOrJoin("Example", 1, 20);
}
```


```cs showLineNumbers
 public void OnLeaved()
  {
    Debug.Log("Leaved");
  }
```

```cs showLineNumbers
  public void OnDisconnected()
  {
    Debug.Log("Disconnected");
  }
```

```cs showLineNumbers
 public void OnPlayerJoined(RagonPlayer player)
  {
    Debug.Log("On Joined " + player.Name);
  }
```

```cs showLineNumbers
  public void OnPlayerLeft(RagonPlayer player)
  {
    Debug.Log("On Left " + player.Name);
  }
```

```cs showLineNumbers
  public void OnOwnerShipChanged(RagonPlayer player)
  {
    Debug.Log("New room owner " + player.Name);
  }
```

:::tip      
Dont' forgive call ```RagonNetwork.Room.SceneLoaded()``` !
:::

```cs showLineNumbers
  public void OnLevel(string sceneName)
  {
    Debug.Log("Level " + sceneName);
    sRagonNetwork.Room.SceneLoaded() // Ready to receive updates
  }
```
