---
id: client-server
title: Client/Server
sidebar_label: Client/Server
sidebar_position: 3
description: "BuildApplication XML keys of the CS node, related to client/server applications."
keywords: ["BuildApplication", "XML key", "CS", "client/server"]
---

These keys set options for [client/server applications](../Desktop/building.md#clientserver-page). They are located under the `<CS>` node.

```xml
<Preferences4D>
  <BuildApp>
    <CS>
      <BuildServerApplication>True</BuildServerApplication>
      <BuildCSUpgradeable>True</BuildCSUpgradeable>
      <IPAddress>myserver.example.com</IPAddress>
      <CurrentVers>3</CurrentVers>
    </CS>
  </BuildApp>
</Preferences4D>
```

## Summary

| Key | Values | Description |
|---|---|---|
| [BuildServerApplication](#buildserverapplication) | True / False | Build a client/server application |
| [BuildCSUpgradeable](#buildcsupgradeable) | True / False | Build client update applications |
| [IPAddress](#ipaddress) | IP address or host name | Server address used by clients |
| [PortNumber](#portnumber) | Port number | Server TCP port used by clients |
| [ServerSelectionAllowed](#serverselectionallowed) | True / False | Allow the server selection dialog box when connection fails |
| [HardLink](#hardlink) | Text (31 chars max) | Signature of client and server applications |
| [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) | Path | List of trusted certificate authorities, used by clients to validate the server TLS certificate |
| [CertificateDomainName](#certificatedomainname) | Text | Trusted domain names of the server TLS certificate |
| [CurrentVers](#currentvers) | Number | Current version of the built application |
| [RangeVersMin](#rangeversmin) | Number | Minimum client version allowed to connect |
| [RangeVersMax](#rangeversmax) | Number | Maximum client version allowed to connect |
| [LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Data linking mode of the server |
| [MacCompiledDatabaseToWin](#maccompileddatabasetowin) | Path | macOS compiled structure for Silicon clients |
| [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) | True / False | Include the macOS compiled structure in a Windows server |
| [ServerEmbedsProjectDirectoryFile](#serverembedsprojectdirectoryfile) | True / False | Copy the project directory.json file to the server |
| [ServerDataCollection](#serverdatacollection) | True / False | Enable data collection on the server |
| [ServerStructureFolderName](#serverstructurefoldername) | Folder name | Name of the server cache folder |
| [ClientServerSystemFolderName](#clientserversystemfoldername) | Folder name | Name of the client cache folder |
| [ClientUserPreferencesFolderByPath](#clientuserpreferencesfolderbypath) | True / False | Separate user preferences folder per client path |
| [ClientWinSingleInstance](#clientwinsingleinstance) | True / False | Allow a single client instance on Windows |
| [ShareLocalResourcesOnWindowsClient](#sharelocalresourcesonwindowsclient) | True / False | Store client local resources in a shared folder on Windows |
| [HideAdministrationMenuItem](#hideadministrationmenuitem) | True / False | Hide the Administration window of the server |
| [HideDataExplorerMenuItem](#hidedataexplorermenuitem) | True / False | Hide the Data Explorer menu item of the server |
| [HideRuntimeExplorerMenuItem](#hideruntimeexplorermenuitem) | True / False | Hide the Runtime Explorer menu item of the server |

## Build

### BuildServerApplication

**Values**: True / False (default)

If True, a client/server application is built. The 4D Server path must be set using the [ServerWinFolder](./source-files.md#serverwinfolder) or [ServerMacFolder](./source-files.md#servermacfolder) key.

### BuildCSUpgradeable

**Values**: True / False (default)

If True, client update applications, ready to download, are built for macOS and Windows.

## Connection

### IPAddress

**Values**: IP address or host name

Address of the server. This key is not mandatory since 4D features internal network mechanisms, but it is required in some cases (WAN, specific port numbers, etc.). See [Management of client connections](../Desktop/merged-client-connections.md).

The address is stored in the "EnginedServer.4Dlink" file, in the Database folder of the client application.

### PortNumber

**Values**: port number (default 19813)

TCP port of the server. This key is required only when the server port has been modified. The port is added to the address stored in the "EnginedServer.4Dlink" file of the client application.

:::caution

This key only modifies the port number on the client side. On the server side, the port number of the 4D database generating the application is used. To build a server with a custom port, use [`SET DATABASE PARAMETER`](../commands/set-database-parameter) before calling [`BUILD APPLICATION`](../commands/build-application):

```4d
tempport:=Get database parameter(Client Server Port ID)
SET DATABASE PARAMETER(Client Server Port ID;21000)
BUILD APPLICATION("")
SET DATABASE PARAMETER(Client Server Port ID;tempport)
```

:::

### ServerSelectionAllowed

**Values**: True / False

Configures the error dialog box displayed when the automatic connection mechanisms fail:

- **True**: the dialog box gives access to the server selection window.
- **False**: the dialog box does not give access to the server selection window.

Pressing **Alt** (Windows) or **Option** (macOS) at startup always displays the server selection dialog box. See [Availability of the server selection dialog box in case of error](../Desktop/merged-client-connections.md#availability-of-the-server-selection-dialog-box-in-case-of-error).

:::note

In binary databases, this key requires the **Use new architecture for application deployments** compatibility option.

:::

### HardLink

**Values**: text (31 characters maximum)

Signature of the client and server applications.

### CertificateAuthoritiesCertificates

**Values**: path

Path of a file containing the list of trusted certificate authorities (CA) and the domain name of the server certificate. This list is copied into the client application and is used to validate the certificate sent by 4D Server on connection.

This key is useful when you install your own [TLS](../Admin/tls.md) certificate in a client/server application:

1. Copy your custom *key.pem* and *cert.pem* files in the **Resources** folder of the built server application (next to the server executable):
   - Windows: `Client Server executable/<ApplicationName> Server/Resources`
   - macOS: `Client Server executable/<ApplicationName> Server.app` (the Resources folder is at the first level of the package)
2. Add the certificate of your certification authority (usually provided by the CA itself) to a list of trusted CAs in PEM format, and pass the path of this list to the **CertificateAuthoritiesCertificates** key.

   The list is a text file containing one or more certificates, each one optionally preceded by a title. For example, with a root CA and an intermediate CA (certificate contents are shortened):

   ```text title="Trusted CA list (PEM)"
   Root CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
   ...
   -----END CERTIFICATE-----

   Server CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIEkjCCA3qgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChML
   ...
   -----END CERTIFICATE-----
   ```

For more information, see [this blog post](https://blog.4d.com/encryption-authentication-certificate-authority-validation).

### CertificateDomainName

**Values**: text (semicolon-separated list of domain names)

List of trusted domain names for the certificate sent by 4D Server on connection. Client applications use this list to check the domain name of the certificate, after validating its certificate authority with [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) (the domain name cannot be checked without a prior CA validation).

## Versions

Client versions allowed to connect are checked by the server using the following keys. See [Current version](../Desktop/building.md#current-version).

### CurrentVers

**Values**: version number

Current version number of the built application. If [RangeVersMin](#rangeversmin) and [RangeVersMax](#rangeversmax) are not used, this number is only informative. Otherwise, the server reads it to check whether the client belongs to the allowed range.

### RangeVersMin

**Values**: version number

Minimum client version (for example 2). Earlier clients are prompted to upgrade. Used with [RangeVersMax](#rangeversmax) and [CurrentVers](#currentvers).

### RangeVersMax

**Values**: version number

Maximum client version (for example 3). Later clients are prompted to upgrade. Used with [RangeVersMin](#rangeversmin) and [CurrentVers](#currentvers).

## Server

### LastDataPathLookup

Defines the [data linking mode](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) of the server application:

| Value | Data file path lookup | Data file path storage |
|---|---|---|
| InDbStruct | Path stored in the structure file | Inside the structure file (legacy behavior) |
| ByAppName | Most recent entry in *LastDataPath.xml* | User preferences |
| ByAppPath | Entry whose *executablePath* matches the application path | User preferences |

The same key exists for single-user applications: [RuntimeVL/LastDataPathLookup](./runtime-vl.md#lastdatapathlookup).

### MacCompiledDatabaseToWin

**Values**: path

Path of the folder containing the structure compiled on macOS for Silicon and Intel. Used with [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) to [allow Silicon Mac clients](../Desktop/building.md#allow-connection-of-silicon-mac-clients) to connect to a server built on Windows.

### MacCompiledDatabaseToWinIncludeIt

**Values**: True / False (default)

When building a server on Windows, if True, the structure compiled on macOS designated by [MacCompiledDatabaseToWin](#maccompileddatabasetowin) is included in the server.

### ServerEmbedsProjectDirectoryFile

**Values**: True / False (default)

If True, the [directory.json](../Users/handling_users_groups.md#directoryjson-file) file of the project user settings folder is copied to the user settings folder of the built server. See [Embed the project Users and Groups in built server application](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).

### ServerDataCollection

**Values**: True (default) / False

When False, [automatic data collection](../Admin/data-collect.md) is disabled in the built server.

### ServerStructureFolderName

**Values**: folder name

Custom name of the server cache folder, created in the Active 4D Folder within the merged application folder. By default, the name is the merged application name. The name must comply with OS rules for folder names. See [Server cache folder](../Desktop/building.md#server-cache-folder).

```xml
<CS>
  <ServerStructureFolderName>MyCache_v1</ServerStructureFolderName>
</CS>
```

### HideAdministrationMenuItem

**Values**: True / False (default)

If True, in the built server:

- the **Administration** item is removed from the **Window** menu,
- the Administration window is not displayed at startup (it can still be displayed using [`OPEN ADMINISTRATION WINDOW`](../commands/open-administration-window)).

### HideDataExplorerMenuItem

**Values**: True / False (default)

If True, the **Data Explorer** menu item is removed from the built server.

### HideRuntimeExplorerMenuItem

**Values**: True / False (default)

If True, the **Runtime Explorer** menu item and its shortcut (Cmd+Shift+F9 on macOS, Ctrl+Shift+F9 on Windows) are removed from the built server.

## Client

### ClientServerSystemFolderName

**Values**: folder name

Custom name of the local cache folder of merged clients (the folder returned by [`Get 4D folder`](../commands/get-4d-folder)`(4D Client database folder)`). By default, the name is built from application and server information. The name must comply with OS rules for folder names. See [Client cache folder](../Desktop/building.md#client-cache-folder).

### ClientUserPreferencesFolderByPath

**Values**: True / False (default)

Useful when several merged clients with the same name, on the same machine, connect to different servers. If True, the user preferences folder of each client is suffixed with a 3-digit hash of the client full path, so that each client has its own folder:

- **macOS**: `/Users/{UserAccount}/Library/Application Support/{ApplicationName} Client_{hash}`
- **Windows**: `\Users\{UserAccount}\AppData\Roaming\{ApplicationName}_{hash}`

[`Folder`](../commands/folder)`(fk user preferences folder)` and [`Get 4D folder`](../commands/get-4d-folder)`(Active 4D Folder)` then return the path with the hash.

:::note

In binary databases, this key requires the **Use new architecture for application deployments** compatibility option.

:::

### ClientWinSingleInstance

**Values**: True (default) / False

On Windows, by default only one instance of a client application can be opened in the same session. Set this key to False to allow multiple instances:

```xml
<CS>
  <ClientWinSingleInstance>False</ClientWinSingleInstance>
</CS>
```

### ShareLocalResourcesOnWindowsClient

**Values**: True / False (default)

Defines where Windows merged clients store the *local resources* downloaded from the server (.4dz file, Libraries folder, Resources folder...):

- **False**: in the user folder, `\Users\{UserAccount}\AppData\Local\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`
- **True**: in a shared folder, `\ProgramData\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`

A shared folder saves download time and disk space in Remote Desktop Services or Citrix environments. This key is only taken into account in projects, for merged clients on Windows.

When this key is True, updating clients requires read/write access to the ProgramData folder. An administrator should:

1. Disconnect all users and forbid access to the merged client.
2. Update the merged server.
3. In the Remote Desktop Server administrator session, launch the merged client so that it updates (automatically or manually) and downloads the local resources to the shared folder.
4. Restore user access to the merged client.

This prevents concurrent writes to the shared local resources and access right errors.
