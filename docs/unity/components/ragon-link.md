---
sidebar_position: 1
---

# Ragon Link

### Description 
Basic component for all game objects, responsible Linking GameObject with Ragon Entity.

Ragon Entity can be of two types:
* Dynamic - Created in realtime during game
* Static - Placed on the scene before the game

:::tip
If the current owner of the room is left, owning of static entities will be transferred to the next owner of the room.
:::

### Options
- Authority:
  * **None** - Non anyone can send an event to this entity
  * **All** - All can send events to this entity
  * **Owner** - Only the owner can send events to this entity
- Discovery:
  * **Root** - Find all Ragon Behaviours only on a root object
  * **Root With Nested** Find all Ragon Behaviours only on a root object and child
- Auto Destroy:
  * **Checked** - Destroy object on destroying entity
  * **Unchecked** - Keep object on destroying entity

### Ragon Entity Component in Unity Inspector 
![img.png](/images/ragon-entity-overview.png)
