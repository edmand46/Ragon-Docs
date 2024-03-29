---
sidebar_position: 2
---

# Ragon Behaviour

## Description

It's basic class for working with Ragon Entity, inherited from MonoBehaviour class with additional callbacks, methods, and network state via ragon properties.

### Properties 

It's state of entity, which replicated non-ordered and unreliable way 

```cs showLineNumbers
public class Player : RagonBehaviour
{
    [SerializeField] private RagonString _name = new RagonString();
    [SerializeField] private RagonFloat _health = new RagonFloat();
    [SerializeField] private RagonVector3 _position = new();
}
```

More about properties [Ragon Properties](/docs/unity/components/ragon-property.md).

### OnAttachedEntity

Called then the object is created and attached to a network, there you can write your logic and also get spawn payload

```cs
public override void OnAttachedEntity()
{
    var characterPayload = Entity.GetSpawnPayload<CharacterPayload>(); 
    // Set properties values from payload
}
```

### OnDetachedEntity

Called then the object will be destroyed and detached from network, there you can write your logic and also get destroy the payload

```cs
public override void OnDetachedEntity()
{
    var payload = Entity.GetDestroyPayload<CharacterPayload>(); 
    // Show specific destroy effects configured by payload
}
```

### OnUpdateEntity / OnLateUpdateEntity / OnFixedUpdateEntity

Called only for owner of the object, so there are you can write logic for controlling state and game object

```cs
public override void OnLateUpdateEntity()
{
      
}

public override void OnUpdateEntity()
{
      
}

public override void OnFixedUpdateEntity()
{
      
}
```

### OnUpdateProxy / OnLateUpdateProxy / OnFixedUpdateProxy

Called only for non owner of object, so there are you can write visual logic like interpolation of object

```cs
public override void OnUpdateProxy()
{
      
}

public override void OnFixedUpdateProxy()
{
      
}

public override void OnLateUpdateProxy()
{
     
}
```