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

** Define property** 

You should define inside [RagonBehaviour](/docs/unity/ragon-behaviour)

**Example with initial value**
```cs showLineNumbers
RagonFloat _health = new RagonFloat(0.0f)
```

**Example with initial value and priority**
```cs showLineNumbers
RagonFloat _health = new RagonFloat(0.0f, 10)
```

** Subscribe on changing value **
```cs showLineNumbers
_name.Value = "Player 100";
_health.Value = 100.0f
```


** Subscribe on changing value **
```cs showLineNumbers
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
        _health.OnChanged += () => 
        {
            // update healthbar for example 
        } 
    }
}
```


### Custom property

In this example we create custom property with two float fields, property has two rules:

- You should call **MaskAsChanged()** then would like to replicate changes by network
- Implement serialization methods **Serialize** and **Deserialize**

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
   
    public CustomProperty(float initialValue0, float initialValue1): base(0)  // 0 is priority 
    {
        _value0 = initialValue0;
        _value1 = initialValue1;
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

**Usage**

### Example with custom property
```cs showLineNumbers
public class Player : RagonBehaviour
{
    [SerializeField] private RagonString _name = new RagonString("");
    [SerializeField] private CustomProperty _customProperty = new CustomProperty(0.0f, 0.0f);
    [SerializeField] private RagonVector3 _position = new(Vector3.zero, RagonAxis.XZ);
    
    public override void OnCreatedEntity()
    {
        _customProperty.OnChanged += () => 
        {
            Debug.Log($"Custom property changed {_customProperty.Value0}-{_customProperty.Value1}");
        } 
    }
}
```
