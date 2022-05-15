---
sidebar_position: 2
---

# Player

Player is connected and authorized connection, and also contains in one rooms on server, he doesn't have state, only 

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