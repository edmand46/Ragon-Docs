---
sidebar_position: 2
---

# Ragon Behaviour

## Description

It's basic class for working with Ragon Entity, inherited from MonoBehaviour class with additional callbacks, methods, and network state via ragon properties.

### Properties 

```cs showLineNumbers
public class Player : RagonBehaviour
{
    [SerializeField] private RagonString _name = new RagonString("");
    [SerializeField] private RagonFloat _health = new RagonFloat(0.0f);
    [SerializeField] private RagonVector3 _position = new(Vector3.zero);
}
```

More about properties [Ragon Properties](/docs/unity/ragon-property.md).

### OnCreatedEntity

Called then object created and attached to network, there you can write your logic and also get spawn payload

```cs
public override void OnCreatedEntity()
{
    var characterPayload = Entity.GetSpawnPayload<CharacterPayload>(); 
    // Set properties values from payload
}
```

### OnDestroyedEntity

Called then object will destoyed and detached to network, there you can write your logic and also get destroy payload

```cs
public override void OnCreatedEntity()
{
    var payload = Entity.GetDestroyPayload<CharacterPayload>(); 
    // Show specific destroy effects configured by payload
}
```

### OnEntityTick

Called only for owner of object, so there are you can write logic for controlling state and game object

```cs
public override void OnEntityTick()
{
    var direction = Vector3.zero;

    if (Input.GetKey(KeyCode.A))
    {
       direction += transform.right * 10 * Time.deltaTime;
    }
    else if (Input.GetKey(KeyCode.D))
    {
       direction -= transform.right * 10 * Time.deltaTime;
    }
  
    // Feel free to change our properties
    _position.Value = transform.position;
     
    transform.position += direction;
}
```

### OnProxyTick

Called only for non owner of object, so there are you can write visual logic like interpolation of object

Simple Interpolation:

```cs
public override void OnProxyTick()
{
    transform.position = Vector3.Lerp(transform.position, _position.Value, Time.deltaTime * 5);
}
```

### Completed Example
```cs showLineNumbers
public class Player : RagonBehaviour
{
    [SerializeField] private RagonString _name = new RagonString("");
    [SerializeField] private RagonFloat _health = new RagonFloat(0.0f);
    [SerializeField] private RagonVector3 _position = new(Vector3.zero, RagonAxis.XZ);
  
    public override void OnCreatedEntity()
    {
    }

    public override void OnDestroyedEntity()
    {
    
    }

    public override void OnEntityTick()
    { 
        var direction = Vector3.zero;
  
        if  (Input.GetKey(KeyCode.A))
        {
            direction += transform.right;
        }
        
        if (Input.GetKey(KeyCode.D))
        {
            direction -= transform.right;
        }
      
        transform.position += direction  * 10 * Time.deltaTime;
     
        _position.Value = transform.position;
    }

    public override void OnProxyTick()
    {
        // Simple interpolation
        transform.position = Vector3.Lerp(transform.position, _position.Value, Time.deltaTime * 5);
    }
}
```