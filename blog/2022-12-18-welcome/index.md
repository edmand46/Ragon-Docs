---
slug: update
title: Update Ragon v1.2.0!
authors: [ed]
tags: [ragon]
---

After much refactoring, was made rollback and now functionality is gradually restored, in version 1.2.0 returned the functionality of the extension plugins

Ragon v1.1.0
- Effective data compression
- New faster serialization
- Rewritten client SDK from scratch and split into two modules C# SDK and Unity SDK
- New C# SDK allows integration with other game engines which also use C# language, or integration with Unity itself into its own architecture
- C# SDK is completely free from the monoblock and Unity lifecycle
- New Unity SDK superstructure over the C# SDK, with improved integration for unity and out-of-the-box components
- First off-the-shelf components, for synchronizing positions and animations
- Modifiable transport layer (ENet, LNL, KCP, WS)
- Modify logging

Ragon v1.2.0:
- Added plugin system to extend Ragon.Relay Server
- Added web hooks for basic operations and authorization