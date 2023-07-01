---
sidebar_position: 2
---

# Relay Server

### Ragon Relay Server

A small server that will process all replication of states, manage rooms, etc

Relay can be downloaded from releases from Github by the link below.

**Download**:
- [Releases](https://github.com/edmand46/Ragon/releases)

### Start server

First, start our server locally, unzip, and launch the executable depends on your OS:

- For MacOS **Ragon.Relay**
- For Windows **Ragon.Relay.exe**
- For Linux **Ragon.Relay**

### Configuration

- **Server Key** - Key for approve connection
- **Server Type** - Type of socket - (enet|websocket)
- **Server Tick Rate** - Tick rate of Relay Server
- **Game Protocol** - Current game version
- **Port** - Port
- **Limit Connections** - Limit Connections
- **Limit Players Per Room** - Limit Players Per Room
- **Limit Rooms** - Limit Rooms
- **Limit Buffered Events** - Limit Buffered Evented Per Entity

:::info Take care
For security reasons, be sure to change the ```serverKey``` in the production
:::

**Example**:
```csharp showLineNumbers
{
  "serverKey": "defaultkey",
  "serverType": "enet",
  "serverTickRate": 20,
  "gameProtocol": "1.0.0",
  "port": 5001,
  "limitConnections": 4095,
  "limitPlayersPerRoom": 20,
  "limitRooms": 200
}
```