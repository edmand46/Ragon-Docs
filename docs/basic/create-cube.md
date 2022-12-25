---
sidebar_position: 3
---

# Create Network Object

In this guide we will spawn cube and synchronize position of cube by network

Let's begin!

### Networked prefab

Every networked object must have a **Ragon Entity** component, this component contains information about the network state of the object do all replication work.

Create **GameObject** named **Player** and add attach **Ragon Entity** component:

![img.png](/images/create-player-entity.png)

### Player Behaviour
Now we should create our component for controlling and synchronization position and rotation by the network for player objects:

```cs showLineNumbers
public class Player : RagonBehaviour
{
  [SerializeField] private RagonVector3 _position = new(Vector3.zero);
  [SerializeField] private RagonFloat _rotation = new(0.0f);
    
  public override void OnAttachedEntity()
  {

  }
    
  public override void OnUpdateEntity()
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

  public override void OnUpdateProxy()
  {
    transform.position = Vector3.Lerp(transform.position, _position.Value, Time.deltaTime * 5);
    transform.rotation = Quaternion.Euler(0, _rotation.Value, 0);
  }
}
```

### Defining player prefab
Define our player prefab in **Game Manager** created in previeus step:
```cs 
public class GameManager : MonoBehaviour, IRagonListener
{
  [SerializeField] private GameObject PlayerPrefab; 
```

### Prefab Registry

Ragon uses for mapping prefabs with they are network id Prefaby Registry

Create **RagonPrefabRegistry** in **Resources**:

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