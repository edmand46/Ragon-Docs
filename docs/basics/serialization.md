---
sidebar_position: 7
---

# Serialization

Ragon uses BitBuffer library for serialization of state, events, etc. 

BitBuffer is part of libraries pack named <b>[NetStack](https://github.com/nxrighthere/NetStack)</b>

Every struct which will be serialized, should implement IRagonSerializable interface

```
public class MySimpleData: IRagonSerializable
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

