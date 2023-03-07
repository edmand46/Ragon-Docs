---
sidebar_position: 3
---

# Ragon Property

Ragon Property it's a small of piece of data replicated by a network, you can use built-in properties or build your custom which will fit your game architecture

:::info Take care
Property by default can change only owner, in future it will configurable
:::

Ragon has built-in properties:

- **RagonInt**
- **RagonVector3**
- **RagonString**
- **RagonBool**
- **RagonFloat**

**Define property** 

You should define inside [RagonBehaviour](/docs/unity/ragon-behaviour)

**Example**
```cs showLineNumbers
RagonFloat _health = new RagonFloat()
```

** Set value **
```cs showLineNumbers
_health.Value = 100.0f
```

** Subscribe on changing value **
```cs showLineNumbers
_health.Changed += () => healhBar.SetHealth(_healh.Value)  
```

### Example
```cs showLineNumbers
public class Player : RagonBehaviour
{
    [SerializeField] private RagonString _name = new RagonString();
    [SerializeField] private RagonFloat _health = new RagonFloat();
    
    public override void OnAttachedEntity()
    {
        _health.OnChanged += () => 
        {
            // update healthbar for example 
        } 
    }
}
```