---
sidebar_position: 3
---

# Ragon Behaviour

MonoBehaviour with additional callbacks, methods, and user defined properties by Ragon

Ragon has builtin properties:

- RagonInt
- RagonVector3
- RagonString
- RagonBool
- RagonFloat

### Example
```
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
      
    }

    public override void OnProxyTick()
    {
      
    }
  }
```