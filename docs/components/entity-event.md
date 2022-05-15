---
sidebar_position: 5
---

# Entity Event

Each entity can subscribe on events, and also invokes events on entities;

## How to subscribe on event


Let's create for our first entity state:

```cs title="Assets/EntityState.cs"
public class EntityState: IRagonSerializable
{
    public int Health;
    
    public void Serialize(BitBuffer buffer)
    {
      buffer.AddInt(Health);
    }

    public void Deserialize(BitBuffer buffer)
    {
      Health = buffer.ReadInt();
    }
}
```