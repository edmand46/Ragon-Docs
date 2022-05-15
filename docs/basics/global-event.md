---
sidebar_position: 6
---

# Global Event

You can subscribe on global events, broadcasted on whole room.


:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

```
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