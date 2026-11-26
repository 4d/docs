---
id: source-files
title: Sources files
sidebar_label: Sources files
sidebar_position: 4
description: "BuildApplication XML keys of the SourcesFiles node: 4D Volume Desktop and 4D Server locations, icons, OEM licenses."
keywords: ["BuildApplication", "XML key", "SourcesFiles", "4D Volume Desktop", "icon"]
---

These keys designate the source applications (4D Volume Desktop, 4D Server) and the icons used for the build. They are located under the `<SourcesFiles>` node, in a `<RuntimeVL>` sub-node for single-user applications and a `<CS>` sub-node for client/server applications.

All paths can be absolute or relative to the structure file. An `...IncludeIt` key set to True is required for the corresponding application to be included in the build.

## Single-user application (RuntimeVL)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <RuntimeVL>
        <RuntimeVLIncludeIt>True</RuntimeVLIncludeIt>
        <RuntimeVLWinFolder>C:\4D\4D Volume Desktop\</RuntimeVLWinFolder>
        <RuntimeVLIconWinPath>C:\MyApp\MyApp.ico</RuntimeVLIconWinPath>
      </RuntimeVL>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

| Key | Values | Description |
|---|---|---|
| <a name="runtimevlincludeit"></a>RuntimeVLIncludeIt | True / False | Must be True to include the 4D Volume Desktop designated by the following keys |
| <a name="runtimevlwinfolder"></a>RuntimeVLWinFolder | Path | Folder of 4D Volume Desktop for Windows |
| <a name="runtimevlmacfolder"></a>RuntimeVLMacFolder | Path | Package of 4D Volume Desktop for macOS |
| <a name="runtimevliconwinpath"></a>RuntimeVLIconWinPath | Path | Application icon for Windows (.ico) |
| <a name="runtimevliconmacpath"></a>RuntimeVLIconMacPath | Path | Application icon for macOS (.icns, the info.plist file is updated) |
| [IsOEM](#isoem) | True / False | Include OEM deployment licenses |

RuntimeVLWinFolder and RuntimeVLMacFolder are mandatory if [BuildApplicationSerialized](./general.md#buildapplicationserialized) is True. Otherwise, an error is returned and the build is stopped.

If an icon key is omitted, the default 4D Volume Desktop icon is used. See also [Customizing application icons](../Desktop/building.md#customizing-application-icons).

## Client/server application (CS)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <CS>
        <ServerIncludeIt>True</ServerIncludeIt>
        <ServerWinFolder>C:\4D\4D Server\</ServerWinFolder>
        <ClientWinIncludeIt>True</ClientWinIncludeIt>
        <ClientWinFolderToWin>C:\4D\4D Volume Desktop\</ClientWinFolderToWin>
      </CS>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

### Server

| Key | Values | Description |
|---|---|---|
| <a name="serverincludeit"></a>ServerIncludeIt | True / False | Must be True to include the 4D Server designated by the following keys |
| <a name="serverwinfolder"></a>ServerWinFolder | Path | Folder of 4D Server for Windows |
| <a name="servermacfolder"></a>ServerMacFolder | Path | Folder of 4D Server for macOS |
| <a name="servericonwinpath"></a>ServerIconWinPath | Path | Server icon for Windows (.ico) |
| <a name="servericonmacpath"></a>ServerIconMacPath | Path | Server icon for macOS (.icns, the info.plist file is updated) |

ServerWinFolder and ServerMacFolder are mandatory if [BuildServerApplication](./client-server.md#buildserverapplication) is True. Otherwise, an error is returned and the build is stopped.

If an icon key is omitted, the default 4D Server icon is used.

### Clients

The client keys are named according to the platform of the client application (`ClientWin...`, `ClientMac...`) and to the platform of the build machine (`...ToWin`, `...ToMac`, `...ForWinPath`, `...ForMacPath`).

| Key | Values | Description |
|---|---|---|
| <a name="clientwinincludeit"></a>ClientWinIncludeIt | True / False | Must be True to include the Windows client designated by ClientWinFolderToWin or ClientWinFolderToMac |
| <a name="clientwinfoldertowin"></a>ClientWinFolderToWin | Path | 4D Volume Desktop for Windows, when building on Windows |
| <a name="clientwinfoldertomac"></a>ClientWinFolderToMac | Path | 4D Volume Desktop for Windows or Windows **.4darchive** file, when building on macOS |
| <a name="clientmacincludeit"></a>ClientMacIncludeIt | True / False | Must be True to include the macOS client designated by ClientMacFolderToMac or ClientMacFolderToWin |
| <a name="clientmacfoldertomac"></a>ClientMacFolderToMac | Path | 4D Volume Desktop for macOS, when building on macOS |
| <a name="clientmacfoldertowin"></a>ClientMacFolderToWin | Path | macOS **.4darchive** file, when building on Windows |
| <a name="clientwiniconforwinpath"></a>ClientWinIconForWinPath | Path | Icon of the Windows client (.ico), when building on Windows |
| <a name="clientwiniconformacpath"></a>ClientWinIconForMacPath | Path | Icon of the Windows client (.ico), when building on macOS |
| <a name="clientmaciconforwinpath"></a>ClientMacIconForWinPath | Path | Icon of the macOS client (.icns), when building on Windows |
| <a name="clientmaciconformacpath"></a>ClientMacIconForMacPath | Path | Icon of the macOS client (.icns), when building on macOS |
| <a name="databasetoembedinclientwinfolder"></a>DatabaseToEmbedInClientWinFolder | Path | Windows folder containing the compiled structure to [embed in a single-user client](../Desktop/building.md#embedding-a-single-user-client-application) |
| <a name="databasetoembedinclientmacfolder"></a>DatabaseToEmbedInClientMacFolder | Path | macOS folder containing the compiled structure to [embed in a single-user client](../Desktop/building.md#embedding-a-single-user-client-application) |
| [IsOEM](#isoem) | True / False | Include OEM deployment licenses |

If an icon key is omitted, the default 4D Volume Desktop icon is used. See also [Selecting client archive for the concurrent platform](../Desktop/building.md#selecting-client-archive-for-the-concurrent-platform).

## IsOEM

```text title="XML paths"
/Preferences4D/BuildApp/SourcesFiles/RuntimeVL/IsOEM
/Preferences4D/BuildApp/SourcesFiles/CS/IsOEM
```

**Values**: True / False (default)

If True, the built application (single-user or client/server, depending on the node) includes the OEM deployment licenses. Otherwise, the application is built in demo mode. This key requires an OEM license.
