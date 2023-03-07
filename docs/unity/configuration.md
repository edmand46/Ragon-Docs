---
sidebar_position: 1
---

# Configuration

### Create configuration
Create empty game object with name for example **Ragon Network**, add next component:

- **Ragon Network**

Create **Ragon Connection Configuration**:

<img src="/images/create-configuration.png"></img>

### Ragon Configuration:

Configuration has several fields

- **Type** - Type of connection (UDP|WebSocket)
- **Address** - Address your Ragon Relay Server
- **Protocol** - Protocol version of your game
- **Port** - Port your Ragon Relay Server
- **Fallback** - Fallback configuration on failed connection to current

**Example**: 

<img src="/images/udp-configuration.png"></img>

Set configuration at **Ragon Network**

<img src="/images/network-component-with-config.png"></img>

### Prefab Registry

Ragon uses for mapping prefabs with they are network id in prefab registry

Create registry with name ```RagonPrefabRegistry``` in folder **Resources**:

**Example**:

![](/img/prefab-registry.png)

Set configuration at **Ragon Network**

<img src="/images/network-component-with-registry.png"></img>

