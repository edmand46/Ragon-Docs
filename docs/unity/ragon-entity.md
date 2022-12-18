---
sidebar_position: 2
---

# Ragon Entity

Basic component for all game objects, responsible for state and event replication.

### Options
- Authority:
    * **None** - Non anyone can send event on this entity
    * **All** - All can send events to this entity
    * **Owner** - Only owner can send events to this entity
- Discovery:
    * **Root** - Find all Ragon Behaviours only on root object
    * **Root With Nested** Find all Ragon Behaviours only on root object and childs 
- Auto Destroy:
    * **Checked** - Destroy object on destroying entity
    * **Unchecked** - Keep object on destroying entity

![img.png](/img/ragon-entity.png)

### Lifecycle

```cs showLineNumbers
public override void OnCreatedEntity()
{
   // Do your stuff
}
```

```cs showLineNumbers
public virtual void OnDestroyedEntity()
{
  // Do your stuff
}
```

```cs showLineNumbers
public virtual void OnEntityTick()
{
  // Do your stuff
}
```

```cs showLineNumbers
public virtual void OnProxyTick()
{ 
  // Do your stuff
}
```
