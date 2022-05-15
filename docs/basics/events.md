---
sidebar_position: 6
---

# Events
# Entity Event

Entities can be sen

## How to subscribe on event


Let's create for our first entity state:

```cs title="Assets/EntityState.cs"
public class DamageEvent : IRagonSerializable
{
    public int Value;

    public void Serialize(BitBuffer buffer)
    {
      buffer.AddInt(Value);
    }

    public void Deserialize(BitBuffer buffer)
    {
      Value = buffer.ReadInt();
    }
}
```