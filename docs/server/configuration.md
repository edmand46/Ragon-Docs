---
sidebar_position: 1
---

# Configuration
- **Server Key** - Key for approve connection
- **Server Type** - Type of socket - (enet|websocket)
- **Server Tick Rate** - Tick rate of Relay Server
- **Game Protocol** - Current game version
- **Port** - Port
- **Limit Connections** - Limit Connections
- **Limit Players Per Room** - Limit Players Per Room
- **Limit Rooms** - Limit Rooms



**Example**:
```csharp showLineNumbers
{
  "serverKey": "defaultkey",
  "serverType": "udp",
  "serverTickRate": 20,
  "gameProtocol": "1.0.0",
  "port": 5000,
  "limitConnections": 4095,
  "limitPlayersPerRoom": 20,
  "limitRooms": 200
}
```