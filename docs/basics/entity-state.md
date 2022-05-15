---
sidebar_position: 4
---

# Entity State

Each entity has a state that will be updated frequently, you need to write data to it that should be updated frequently and their loss will not be critical

## Example

:::tip Tip

Each state is implementing interface `IRagonSerializable`, more info in [Serialization](/)

:::


Let's create entity state with one parameter "Health":

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