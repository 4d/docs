---
id: overview
title: XML keys
sidebar_label: xml-keys
sidebar_position: 0
description: "List of the XML keys of the buildApp.4DSettings file used by the 4D Application builder."
keywords: ["BuildApplication", "XML key", "buildApp.4DSettings", "BUILD APPLICATION"]
---

The 4D Application builder stores its parameters as XML keys in the [`buildApp.4DSettings`](../Desktop/building.md#buildapp4dsettings) file. Additional keys also provide options besides those available in the Build Application dialog box.

To use a custom settings file, pass its path to the [`BUILD APPLICATION`](../commands/build-application) command.

## Structure

All keys are located under the `<Preferences4D><BuildApp>` root:

```xml
<Preferences4D>
  <BuildApp>
    <!-- General keys -->
    <RuntimeVL/>       <!-- single-user application -->
    <CS/>              <!-- client/server application -->
    <SourcesFiles>
      <RuntimeVL/>
      <CS/>
    </SourcesFiles>
    <Versioning>
      <Common/>
      <RuntimeVL/>
      <Client/>
      <Server/>
    </Versioning>
    <AutoUpdate>
      <RuntimeVL/>
      <CS/>
    </AutoUpdate>
    <Licenses/>
    <SignApplication/>
  </BuildApp>
</Preferences4D>
```

| Page | XML nodes |
|---|---|
| [General](./general.md) | `BuildApp` |
| [RuntimeVL](./runtime-vl.md) | `RuntimeVL` |
| [Client/Server](./client-server.md) | `CS` |
| [Source files](./source-files.md) | `SourcesFiles/RuntimeVL`, `SourcesFiles/CS` |
| [Versioning](./versioning.md) | `Versioning/Common`, `Versioning/RuntimeVL`, `Versioning/Client`, `Versioning/Server` |
| [AutoUpdate](./auto-update.md) | `AutoUpdate/RuntimeVL`, `AutoUpdate/CS` |
| [Licenses & signature](./licenses-signature.md) | `Licenses`, `SignApplication` |

Array keys (such as `ArrayLicenseWin` or `ArrayExcludedPluginName`) contain an `ItemsCount` element followed by `Item1`, `Item2`... elements:

```xml
<ArrayExcludedComponentName>
  <ItemsCount>2</ItemsCount>
  <Item1>MyComponent</Item1>
  <Item2>MyOtherComponent</Item2>
</ArrayExcludedComponentName>
```

## Index of keys

| Key | Node | Page |
|---|---|---|
| AdHocSign | `SignApplication` | [Licenses & signature](./licenses-signature.md#adhocsign) |
| ArrayExcludedComponentName | `BuildApp` | [General](./general.md#arrayexcludedcomponentname) |
| ArrayExcludedModuleName | `BuildApp` | [General](./general.md#arrayexcludedmodulename) |
| ArrayExcludedPluginID | `BuildApp` | [General](./general.md#arrayexcludedpluginid) |
| ArrayExcludedPluginName | `BuildApp` | [General](./general.md#arrayexcludedpluginname) |
| ArrayLicenseMac | `Licenses` | [Licenses & signature](./licenses-signature.md#arraylicensemac) |
| ArrayLicenseWin | `Licenses` | [Licenses & signature](./licenses-signature.md#arraylicensewin) |
| AutomaticLicenseIntegration | `Licenses` | [Licenses & signature](./licenses-signature.md#automaticlicenseintegration) |
| BuildApplicationName | `BuildApp` | [General](./general.md#buildapplicationname) |
| BuildApplicationSerialized | `BuildApp` | [General](./general.md#buildapplicationserialized) |
| BuildCompiled | `BuildApp` | [General](./general.md#buildcompiled) |
| BuildComponent | `BuildApp` | [General](./general.md#buildcomponent) |
| BuildCSUpgradeable | `CS` | [Client/Server](./client-server.md#buildcsupgradeable) |
| BuildMacDestFolder | `BuildApp` | [General](./general.md#buildmacdestfolder) |
| BuildServerApplication | `CS` | [Client/Server](./client-server.md#buildserverapplication) |
| BuildWinDestFolder | `BuildApp` | [General](./general.md#buildwindestfolder) |
| CertificateAuthoritiesCertificates | `CS` | [Client/Server](./client-server.md#certificateauthoritiescertificates) |
| CertificateDomainName | `CS` | [Client/Server](./client-server.md#certificatedomainname) |
| ClientComment | `Versioning/Client` | [Versioning](./versioning.md#comment) |
| ClientCompanyName | `Versioning/Client` | [Versioning](./versioning.md#companyname) |
| ClientCopyright | `Versioning/Client` | [Versioning](./versioning.md#copyright) |
| ClientCreator | `Versioning/Client` | [Versioning](./versioning.md#creator) |
| ClientFileDescription | `Versioning/Client` | [Versioning](./versioning.md#filedescription) |
| ClientInternalName | `Versioning/Client` | [Versioning](./versioning.md#internalname) |
| ClientLegalTrademark | `Versioning/Client` | [Versioning](./versioning.md#legaltrademark) |
| ClientMacFolderToMac | `SourcesFiles/CS` | [Source files](./source-files.md#clientmacfoldertomac) |
| ClientMacFolderToWin | `SourcesFiles/CS` | [Source files](./source-files.md#clientmacfoldertowin) |
| ClientMacIconForMacPath | `SourcesFiles/CS` | [Source files](./source-files.md#clientmaciconformacpath) |
| ClientMacIconForWinPath | `SourcesFiles/CS` | [Source files](./source-files.md#clientmaciconforwinpath) |
| ClientMacIncludeIt | `SourcesFiles/CS` | [Source files](./source-files.md#clientmacincludeit) |
| ClientPrivateBuild | `Versioning/Client` | [Versioning](./versioning.md#privatebuild) |
| ClientServerSystemFolderName | `CS` | [Client/Server](./client-server.md#clientserversystemfoldername) |
| ClientSpecialBuild | `Versioning/Client` | [Versioning](./versioning.md#specialbuild) |
| ClientUserPreferencesFolderByPath | `CS` | [Client/Server](./client-server.md#clientuserpreferencesfolderbypath) |
| ClientVersion | `Versioning/Client` | [Versioning](./versioning.md#version) |
| ClientWinFolderToMac | `SourcesFiles/CS` | [Source files](./source-files.md#clientwinfoldertomac) |
| ClientWinFolderToWin | `SourcesFiles/CS` | [Source files](./source-files.md#clientwinfoldertowin) |
| ClientWinIconForMacPath | `SourcesFiles/CS` | [Source files](./source-files.md#clientwiniconformacpath) |
| ClientWinIconForWinPath | `SourcesFiles/CS` | [Source files](./source-files.md#clientwiniconforwinpath) |
| ClientWinIncludeIt | `SourcesFiles/CS` | [Source files](./source-files.md#clientwinincludeit) |
| ClientWinSingleInstance | `CS` | [Client/Server](./client-server.md#clientwinsingleinstance) |
| CommonComment | `Versioning/Common` | [Versioning](./versioning.md#comment) |
| CommonCompanyName | `Versioning/Common` | [Versioning](./versioning.md#companyname) |
| CommonCopyright | `Versioning/Common` | [Versioning](./versioning.md#copyright) |
| CommonCreator | `Versioning/Common` | [Versioning](./versioning.md#creator) |
| CommonFileDescription | `Versioning/Common` | [Versioning](./versioning.md#filedescription) |
| CommonInternalName | `Versioning/Common` | [Versioning](./versioning.md#internalname) |
| CommonLegalTrademark | `Versioning/Common` | [Versioning](./versioning.md#legaltrademark) |
| CommonPrivateBuild | `Versioning/Common` | [Versioning](./versioning.md#privatebuild) |
| CommonSpecialBuild | `Versioning/Common` | [Versioning](./versioning.md#specialbuild) |
| CommonVersion | `Versioning/Common` | [Versioning](./versioning.md#version) |
| CurrentVers | `CS` | [Client/Server](./client-server.md#currentvers) |
| DatabaseToEmbedInClientMacFolder | `SourcesFiles/CS` | [Source files](./source-files.md#databasetoembedinclientmacfolder) |
| DatabaseToEmbedInClientWinFolder | `SourcesFiles/CS` | [Source files](./source-files.md#databasetoembedinclientwinfolder) |
| DataFilePath | `BuildApp` | [General](./general.md#datafilepath) |
| EvaluationMode | `Licenses` | [Licenses & signature](./licenses-signature.md#evaluationmode) |
| HardLink | `CS` | [Client/Server](./client-server.md#hardlink) |
| HideAdministrationMenuItem | `CS` | [Client/Server](./client-server.md#hideadministrationmenuitem) |
| HideDataExplorerMenuItem | `CS` | [Client/Server](./client-server.md#hidedataexplorermenuitem) |
| HideRuntimeExplorerMenuItem | `CS` | [Client/Server](./client-server.md#hideruntimeexplorermenuitem) |
| IncludeAssociatedFolders | `BuildApp` | [General](./general.md#includeassociatedfolders) |
| IPAddress | `CS` | [Client/Server](./client-server.md#ipaddress) |
| IsOEM | `SourcesFiles/CS` | [Source files](./source-files.md#isoem) |
| IsOEM | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#isoem) |
| LastDataPathLookup | `CS` | [Client/Server](./client-server.md#lastdatapathlookup) |
| LastDataPathLookup | `RuntimeVL` | [RuntimeVL](./runtime-vl.md#lastdatapathlookup) |
| MacCertificate | `SignApplication` | [Licenses & signature](./licenses-signature.md#maccertificate) |
| MacCompiledDatabaseToWin | `CS` | [Client/Server](./client-server.md#maccompileddatabasetowin) |
| MacCompiledDatabaseToWinIncludeIt | `CS` | [Client/Server](./client-server.md#maccompileddatabasetowinincludeit) |
| MacSignature | `SignApplication` | [Licenses & signature](./licenses-signature.md#macsignature) |
| PackProject | `BuildApp` | [General](./general.md#packproject) |
| PortNumber | `CS` | [Client/Server](./client-server.md#portnumber) |
| RangeVersMax | `CS` | [Client/Server](./client-server.md#rangeversmax) |
| RangeVersMin | `CS` | [Client/Server](./client-server.md#rangeversmin) |
| RuntimeVLComment | `Versioning/RuntimeVL` | [Versioning](./versioning.md#comment) |
| RuntimeVLCompanyName | `Versioning/RuntimeVL` | [Versioning](./versioning.md#companyname) |
| RuntimeVLCopyright | `Versioning/RuntimeVL` | [Versioning](./versioning.md#copyright) |
| RuntimeVLCreator | `Versioning/RuntimeVL` | [Versioning](./versioning.md#creator) |
| RuntimeVLFileDescription | `Versioning/RuntimeVL` | [Versioning](./versioning.md#filedescription) |
| RuntimeVLIconMacPath | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#runtimevliconmacpath) |
| RuntimeVLIconWinPath | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#runtimevliconwinpath) |
| RuntimeVLIncludeIt | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#runtimevlincludeit) |
| RuntimeVLInternalName | `Versioning/RuntimeVL` | [Versioning](./versioning.md#internalname) |
| RuntimeVLLegalTrademark | `Versioning/RuntimeVL` | [Versioning](./versioning.md#legaltrademark) |
| RuntimeVLMacFolder | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#runtimevlmacfolder) |
| RuntimeVLPrivateBuild | `Versioning/RuntimeVL` | [Versioning](./versioning.md#privatebuild) |
| RuntimeVLSpecialBuild | `Versioning/RuntimeVL` | [Versioning](./versioning.md#specialbuild) |
| RuntimeVLVersion | `Versioning/RuntimeVL` | [Versioning](./versioning.md#version) |
| RuntimeVLWinFolder | `SourcesFiles/RuntimeVL` | [Source files](./source-files.md#runtimevlwinfolder) |
| ServerComment | `Versioning/Server` | [Versioning](./versioning.md#comment) |
| ServerCompanyName | `Versioning/Server` | [Versioning](./versioning.md#companyname) |
| ServerCopyright | `Versioning/Server` | [Versioning](./versioning.md#copyright) |
| ServerCreator | `Versioning/Server` | [Versioning](./versioning.md#creator) |
| ServerDataCollection | `CS` | [Client/Server](./client-server.md#serverdatacollection) |
| ServerEmbedsProjectDirectoryFile | `CS` | [Client/Server](./client-server.md#serverembedsprojectdirectoryfile) |
| ServerFileDescription | `Versioning/Server` | [Versioning](./versioning.md#filedescription) |
| ServerIconMacPath | `SourcesFiles/CS` | [Source files](./source-files.md#servericonmacpath) |
| ServerIconWinPath | `SourcesFiles/CS` | [Source files](./source-files.md#servericonwinpath) |
| ServerIncludeIt | `SourcesFiles/CS` | [Source files](./source-files.md#serverincludeit) |
| ServerInternalName | `Versioning/Server` | [Versioning](./versioning.md#internalname) |
| ServerLegalTrademark | `Versioning/Server` | [Versioning](./versioning.md#legaltrademark) |
| ServerMacFolder | `SourcesFiles/CS` | [Source files](./source-files.md#servermacfolder) |
| ServerPrivateBuild | `Versioning/Server` | [Versioning](./versioning.md#privatebuild) |
| ServerSelectionAllowed | `CS` | [Client/Server](./client-server.md#serverselectionallowed) |
| ServerSpecialBuild | `Versioning/Server` | [Versioning](./versioning.md#specialbuild) |
| ServerStructureFolderName | `CS` | [Client/Server](./client-server.md#serverstructurefoldername) |
| ServerVersion | `Versioning/Server` | [Versioning](./versioning.md#version) |
| ServerWinFolder | `SourcesFiles/CS` | [Source files](./source-files.md#serverwinfolder) |
| ShareLocalResourcesOnWindowsClient | `CS` | [Client/Server](./client-server.md#sharelocalresourcesonwindowsclient) |
| StartElevated | `AutoUpdate/CS/ClientUpdateWin` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Client` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Server` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/RuntimeVL` | [AutoUpdate](./auto-update.md#startelevated) |
| UseStandardZipFormat | `BuildApp` | [General](./general.md#usestandardzipformat) |
