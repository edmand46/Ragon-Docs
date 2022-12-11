---
sidebar_position: 1
---

# Ragon Entity

Basic required component for all networked gameobjects, contains type of entity, id, and other ragon network information

Entity options:
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