---
sidebar_position: 4
---

# Create Network Event

### Define structure of event
```cs showLineNumbers
public class MyEvent: IRagonEvent
{
    public string Message;
    
    public void Serialize(RagonSerializer serializer)
    {
        serializer.WriteString(Message);
    }

    public void Deserialize(RagonSerializer serializer)
    {
        Message = serializer.ReadString();
    }
}
```

### Register event in Game Manager 

```cs showLineNumbers
public class GameNetwork : MonoBehaviour, IRagonListener
{
    [SerializeField] private GameObject CharacterPrefab;

    private void Start()
    {
        RagonNetwork.Event.Register<MyEvent>();  // Here
         
        RagonNetwork.AddListener(this);
        RagonNetwork.Connect();
    }
```


### Subscribe on event in Ragon Behaviour
```cs showLineNumbers
public override void OnAttachedEntity()
{
    Entity.OnEvent<MyEvent>((player, evnt) =>
    {
        Debug.Log($"{player.Name} sent MyEvent with message {evnt.Message}");
    });
}   
```

### Replicate Event
```cs showLineNumbers
 public override void OnUpdateEntity()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        Entity.ReplicateEvent(new MyEvent() { Message = "Test event"});
    }
}
```

Press play, and then you spawned, press **Space**, you will see next logs
![event-log](/images/replicate-event-log.png)