---
sidebar_position: 1
---

# Ragon Entity
### Description 
Basic component for all game objects, responsible for state and event replication.

Ragon Entity can be two types:
* Dynamic - Created in realtime during game
* Static - Placed on scene before game

:::tip
If current **Owner** of room left, owning of static entities will be transfered to next **Owner** of room.
:::

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

### Ragon Entity Component in Unity Inspector 
![img.png](/images/ragon-entity-overview.png)
