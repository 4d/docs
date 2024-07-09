---
id: propertiesPlugIns
title: Plug-ins 
---

## Advanced Properties

If advanced options are provided by the author of the plug-in, an **Advanced Properties** button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box.

Because the Advanced properties feature is under the control of the author of the plug-in, information about these Advanced options is the responsibility of the distributor of the plug-in.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|customProperties|text|Plugin specific properties, passed to plugin as a JSON string if an object, or as a binary buffer if a base64 encoded string|

#### Objects Supported

[Plug-in Area](pluginArea_overview.md)
