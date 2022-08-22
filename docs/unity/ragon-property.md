---
sidebar_position: 3
---

# Ragon Property

Ragon Property it's small of piece of data replicated by network, you can use builtin properties or build your custom which will fit to your game achitecture

:::info Take care
Property by default can change only owner, in future it will configurable
:::

Ragon has builtin properties:

- **RagonInt**
- **RagonVector3**
- **RagonString**
- **RagonBool**
- **RagonFloat**

You can set or get value via public property:
```cs
_name.Value = "Player 100";
_health.Value = 100.0f
```

And also you can subscribe on changing of property
```cs
_health.OnChanged += () => healhBar.SetHealth(_healh.Value)  
```

### Example
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
      
  }

  public override void OnProxyTick()
  {
      
  }
}
```


### Custom property

In this example we create custom property with two float fields, property has two rules:

- You should call MaskAsChanged() then would like to replicate changes by network
- Implement serialization values

```cs showLineNumbers
public class CustomProperty: RagonProperty
{
  public float Value0
  {
    get => _value0;
    set
    {
      _value0 = value;
      MarkAsChanged();
      OnChanged?.Invoke();
    }
  }

  public float Value1
  {
    get => _value1;
    set
    {
      _value1 = value;
      MarkAsChanged();
      OnChanged?.Invoke();
    }
  }


  private float _value0;
  private float _value1;
    
  public override void Serialize(RagonSerializer serializer)
  {
    serializer.WriteFloat(_value0);
    serializer.WriteFloat(_value1);
  }

  public override void Deserialize(RagonSerializer serializer)
  {
    _value0 = serializer.ReadFloat();
    _value1 = serializer.ReadFloat();
  }
}
```