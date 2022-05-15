---
sidebar_position: 5
---

# Entity Event

Each entity can subscribe on events, and also invokes events on entities;

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