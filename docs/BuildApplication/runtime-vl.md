---
id: runtime-vl
title: RuntimeVL
sidebar_label: RuntimeVL
sidebar_position: 2
description: "RuntimeVL key"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

The `<RuntimeVL>` node contains a single key, [LastDataPathLookup](#lastdatapathlookup).

```xml
<Preferences4D>
  <BuildApp>
    <RuntimeVL>
      <LastDataPathLookup>ByAppPath</LastDataPathLookup>
    </RuntimeVL>
  </BuildApp>
</Preferences4D>
```

## Summary

| Key | Values | Description |
|---|---|---|
| [RuntimeVL/LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Data linking mode of the single-user application |


## Single-user application (RuntimeVL)

### LastDataPathLookup

```text title="XML path"
/Preferences4D/BuildApp/RuntimeVL/LastDataPathLookup
```

Defines the [data linking mode](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) of the single-user application:

| Value | Data file path lookup | Data file path storage |
|---|---|---|
| InDbStruct | Path stored in the structure file | Inside the structure file (legacy behavior) |
| ByAppName | Most recent entry in *LastDataPath.xml* | User preferences |
| ByAppPath | Entry whose *executablePath* matches the application path | User preferences |

The same key exists for client/server applications: [CS/LastDataPathLookup](./client-server.md#lastdatapathlookup).
