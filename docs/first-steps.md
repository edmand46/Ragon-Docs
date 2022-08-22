---
sidebar_position: 3
---

# First steps

In this guide we will spawn cube and synchronize position of cube by network

Let's begin!

### Networked prefab

Every networked object must have RagonEntity component, this component containts information about network state of object.

Create GameObject **Player** with add attach PlayerEntity component:

![img.png](/img/ragon-player.png)

### Player Behaviour
Now we should create our own component for controlling and synchronization of player:
```cs showLineNumbers
public class Player : RagonBehaviour
{
  [SerializeField] private RagonVector3 _position = new(Vector3.zero, RagonAxis.XZ);
  [SerializeField] private RagonFloat _rotation = new(0.0f);
    
  public override void OnCreatedEntity()
  {

  }
    
  public override void OnEntityTick()
  {
    var direction = Vector3.zero;
    var rotation = transform.rotation.eulerAngles.y;

    if (Input.GetKey(KeyCode.A))
    {
      direction += transform.right * 10 * Time.deltaTime;
    }
    else if (Input.GetKey(KeyCode.D))
    {
      direction -= transform.right * 10 * Time.deltaTime;
    }
  
    _position.Value = transform.position;
    _rotation.Value = transform.rotation.eulerAngles.y;
      
    transform.rotation = Quaternion.Euler(0, rotation, 0);
    transform.position += direction;
  }

  public override void OnProxyTick()
  {
    transform.position = Vector3.Lerp(transform.position, _position.Value, Time.deltaTime * 5);
    transform.rotation = Quaternion.Euler(0, _rotation.Value, 0);
  }
}
```

### Defining player prefab
Define our player prefab in **Game Manager**:
```cs 
public class GameManager : MonoBehaviour, IRagonListener
{
  [SerializeField] private GameObject PlayerPrefab; 
```

### Prefab Registry

Ragon uses for mapping prefabs with they are network id Prefaby Registry

Create **Ragon Prefab Registry** in **Resources**:

![](/img/prefab-registry.png)

Edit **Start** method at **Game Manager** script, add code for spawn our player
```cs
public void OnJoined()
{
  Debug.Log("Joined");
  RagonNetwork.Room.CreateEntity(PlayerPrefab);
}
```

### Play

Open Ragon Tools windows:

![ragon-tools-popup](/img/ragon-tools-popup.png)

Set Build true and Players count 2

![ragon-tools](/img/ragon-tools.png)

And press **Play Only Clients**, it should build and open two clients like on gif below:

![ragon-play](/img/ragon-play.gif)