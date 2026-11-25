---
id: auto-update
title: AutoUpdate
sidebar_label: AutoUpdate
sidebar_position: 6
description: "BuildApplication XML keys of the AutoUpdate node: elevate installation privileges of the updater."
keywords: ["BuildApplication", "XML key", "AutoUpdate", "StartElevated", "updater"]
---

These keys elevate the installation privileges, so that the "updater" utility can install [updated merged applications](../Desktop/managing-updates.md) in protected system locations. They are located under the `<AutoUpdate>` node.

When a key is set to True and the updater has to update an application in a protected location, a dialog box informs the user that administrator privileges are required, and allows them to log on with an administrator account.

:::note

It is not recommended to install merged applications in the "Program Files" folder on Windows, since this folder includes specific mechanisms that are incompatible with 4D applications.

:::

```xml
<Preferences4D>
  <BuildApp>
    <AutoUpdate>
      <CS>
        <Client>
          <StartElevated>True</StartElevated>
        </Client>
        <Server>
          <StartElevated>True</StartElevated>
        </Server>
      </CS>
    </AutoUpdate>
  </BuildApp>
</Preferences4D>
```

## StartElevated

**Values**: True / False (default)

When True, the update is performed with the administrator privileges of the machine. When False, the update is performed without elevating privileges.

| XML path | Updated application | Platform |
|---|---|---|
| `AutoUpdate/RuntimeVL/StartElevated` | Single-user application | Windows only (always False on macOS) |
| `AutoUpdate/CS/Server/StartElevated` | Server application | Windows only (always False on macOS) |
| `AutoUpdate/CS/Client/StartElevated` | Client application | Windows only (always False on macOS) |
| `AutoUpdate/CS/ClientUpdateWin/StartElevated` | Windows client application, built on macOS | macOS only (ignored on Windows) |
