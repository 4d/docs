---
id: overview
title: Llaves XML
sidebar_label: Llaves XML
sidebar_position: 0
description: "Lista de las llaves XML del archivo buildApp.4DSettings utilizadas por el Creador de aplicaciones de 4D."
keywords: ["BuildApplication", "XML key", "buildApp.4DSettings", "BUILD APPLICATION"]
---

El Creador de aplicaciones de 4D almacena sus parámetros como llaves XML en el archivo [`buildApp.4DSettings`](../Desktop/building.md#buildapp4dsettings). Llaves adicionales también ofrecen opciones además de las disponibles en la caja de diálogo Generar aplicación.

Para utilizar un archivo de parámetros personalizado, pase su ruta al comando [`BUILD APPLICATION`](../commands/build-application).

## Estructura

Todas las llaves se encuentran bajo la raíz `<Preferences4D><BuildApp>`:

```xml
<Preferences4D>
  <BuildApp>
    <!-- Llaves generales -->
    <RuntimeVL/>       <!-- aplicación monopuesto -->
    <CS/>              <!-- aplicación cliente/servidor -->
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

| Página | Nodos XML |
|---|---|
| [General](./general.md) | `BuildApp` |
| [RuntimeVL](./runtime-vl.md) | `RuntimeVL` |
| [Cliente/Servidor](./client-server.md) | `CS` |
| [Archivos fuente](./source-files.md) | `SourcesFiles/RuntimeVL`, `SourcesFiles/CS` |
| [Versiones](./versioning.md) | `Versioning/Common`, `Versioning/RuntimeVL`, `Versioning/Client`, `Versioning/Server` |
| [AutoUpdate](./auto-update.md) | `AutoUpdate/RuntimeVL`, `AutoUpdate/CS` |
| [Licencias y firma](./licenses-signature.md) | `Licenses`, `SignApplication` |

Las llaves de tipo array (como `ArrayLicenseWin` o `ArrayExcludedPluginName`) contienen un elemento `ItemsCount` seguido de los elementos `Item1`, `Item2`...:

```xml
<ArrayExcludedComponentName>
  <ItemsCount>2</ItemsCount>
  <Item1>MyComponent</Item1>
  <Item2>MyOtherComponent</Item2>
</ArrayExcludedComponentName>
```

## Índice de llaves

| Llave | Nodo | Página |
|---|---|---|
| AdHocSign | `SignApplication` | [Licencias y firma](./licenses-signature.md#adhocsign) |
| ArrayExcludedComponentName | `BuildApp` | [General](./general.md#arrayexcludedcomponentname) |
| ArrayExcludedModuleName | `BuildApp` | [General](./general.md#arrayexcludedmodulename) |
| ArrayExcludedPluginID | `BuildApp` | [General](./general.md#arrayexcludedpluginid) |
| ArrayExcludedPluginName | `BuildApp` | [General](./general.md#arrayexcludedpluginname) |
| ArrayLicenseMac | `Licenses` | [Licencias y firma](./licenses-signature.md#arraylicensemac) |
| ArrayLicenseWin | `Licenses` | [Licencias y firma](./licenses-signature.md#arraylicensewin) |
| AutomaticLicenseIntegration | `Licenses` | [Licencias y firma](./licenses-signature.md#automaticlicenseintegration) |
| BuildApplicationName | `BuildApp` | [General](./general.md#buildapplicationname) |
| BuildApplicationSerialized | `BuildApp` | [General](./general.md#buildapplicationserialized) |
| BuildCompiled | `BuildApp` | [General](./general.md#buildcompiled) |
| BuildComponent | `BuildApp` | [General](./general.md#buildcomponent) |
| BuildCSUpgradeable | `CS` | [Cliente/Servidor](./client-server.md#buildcsupgradeable) |
| BuildMacDestFolder | `BuildApp` | [General](./general.md#buildmacdestfolder) |
| BuildServerApplication | `CS` | [Cliente/Servidor](./client-server.md#buildserverapplication) |
| BuildWinDestFolder | `BuildApp` | [General](./general.md#buildwindestfolder) |
| CertificateAuthoritiesCertificates | `CS` | [Cliente/Servidor](./client-server.md#certificateauthoritiescertificates) |
| CertificateDomainName | `CS` | [Cliente/Servidor](./client-server.md#certificatedomainname) |
| ClientComment | `Versioning/Client` | [Versiones](./versioning.md#comment) |
| ClientCompanyName | `Versioning/Client` | [Versiones](./versioning.md#companyname) |
| ClientCopyright | `Versioning/Client` | [Versiones](./versioning.md#copyright) |
| ClientCreator | `Versioning/Client` | [Versiones](./versioning.md#creator) |
| ClientFileDescription | `Versioning/Client` | [Versiones](./versioning.md#filedescription) |
| ClientInternalName | `Versioning/Client` | [Versiones](./versioning.md#internalname) |
| ClientLegalTrademark | `Versioning/Client` | [Versiones](./versioning.md#legaltrademark) |
| ClientMacFolderToMac | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientmacfoldertomac) |
| ClientMacFolderToWin | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientmacfoldertowin) |
| ClientMacIconForMacPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientmaciconformacpath) |
| ClientMacIconForWinPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientmaciconforwinpath) |
| ClientMacIncludeIt | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientmacincludeit) |
| ClientPrivateBuild | `Versioning/Client` | [Versiones](./versioning.md#privatebuild) |
| ClientServerSystemFolderName | `CS` | [Cliente/Servidor](./client-server.md#clientserversystemfoldername) |
| ClientSpecialBuild | `Versioning/Client` | [Versiones](./versioning.md#specialbuild) |
| ClientUserPreferencesFolderByPath | `CS` | [Cliente/Servidor](./client-server.md#clientuserpreferencesfolderbypath) |
| ClientVersion | `Versioning/Client` | [Versiones](./versioning.md#version) |
| ClientWinFolderToMac | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientwinfoldertomac) |
| ClientWinFolderToWin | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientwinfoldertowin) |
| ClientWinIconForMacPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientwiniconformacpath) |
| ClientWinIconForWinPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientwiniconforwinpath) |
| ClientWinIncludeIt | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#clientwinincludeit) |
| ClientWinSingleInstance | `CS` | [Cliente/Servidor](./client-server.md#clientwinsingleinstance) |
| CommonComment | `Versioning/Common` | [Versiones](./versioning.md#comment) |
| CommonCompanyName | `Versioning/Common` | [Versiones](./versioning.md#companyname) |
| CommonCopyright | `Versioning/Common` | [Versiones](./versioning.md#copyright) |
| CommonCreator | `Versioning/Common` | [Versiones](./versioning.md#creator) |
| CommonFileDescription | `Versioning/Common` | [Versiones](./versioning.md#filedescription) |
| CommonInternalName | `Versioning/Common` | [Versiones](./versioning.md#internalname) |
| CommonLegalTrademark | `Versioning/Common` | [Versiones](./versioning.md#legaltrademark) |
| CommonPrivateBuild | `Versioning/Common` | [Versiones](./versioning.md#privatebuild) |
| CommonSpecialBuild | `Versioning/Common` | [Versiones](./versioning.md#specialbuild) |
| CommonVersion | `Versioning/Common` | [Versiones](./versioning.md#version) |
| CurrentVers | `CS` | [Cliente/Servidor](./client-server.md#currentvers) |
| DatabaseToEmbedInClientMacFolder | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#databasetoembedinclientmacfolder) |
| DatabaseToEmbedInClientWinFolder | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#databasetoembedinclientwinfolder) |
| DataFilePath | `BuildApp` | [General](./general.md#datafilepath) |
| EvaluationMode | `Licenses` | [Licencias y firma](./licenses-signature.md#evaluationmode) |
| HardLink | `CS` | [Cliente/Servidor](./client-server.md#hardlink) |
| HideAdministrationMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hideadministrationmenuitem) |
| HideDataExplorerMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hidedataexplorermenuitem) |
| HideRuntimeExplorerMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hideruntimeexplorermenuitem) |
| IncludeAssociatedFolders | `BuildApp` | [General](./general.md#includeassociatedfolders) |
| IPAddress | `CS` | [Cliente/Servidor](./client-server.md#ipaddress) |
| IsOEM | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#isoem) |
| IsOEM | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#isoem) |
| LastDataPathLookup | `CS` | [Cliente/Servidor](./client-server.md#lastdatapathlookup) |
| LastDataPathLookup | `RuntimeVL` | [RuntimeVL](./runtime-vl.md#lastdatapathlookup) |
| MacCertificate | `SignApplication` | [Licencias y firma](./licenses-signature.md#maccertificate) |
| MacCompiledDatabaseToWin | `CS` | [Cliente/Servidor](./client-server.md#maccompileddatabasetowin) |
| MacCompiledDatabaseToWinIncludeIt | `CS` | [Cliente/Servidor](./client-server.md#maccompileddatabasetowinincludeit) |
| MacSignature | `SignApplication` | [Licencias y firma](./licenses-signature.md#macsignature) |
| PackProject | `BuildApp` | [General](./general.md#packproject) |
| PortNumber | `CS` | [Cliente/Servidor](./client-server.md#portnumber) |
| RangeVersMax | `CS` | [Cliente/Servidor](./client-server.md#rangeversmax) |
| RangeVersMin | `CS` | [Cliente/Servidor](./client-server.md#rangeversmin) |
| RuntimeVLComment | `Versioning/RuntimeVL` | [Versiones](./versioning.md#comment) |
| RuntimeVLCompanyName | `Versioning/RuntimeVL` | [Versiones](./versioning.md#companyname) |
| RuntimeVLCopyright | `Versioning/RuntimeVL` | [Versiones](./versioning.md#copyright) |
| RuntimeVLCreator | `Versioning/RuntimeVL` | [Versiones](./versioning.md#creator) |
| RuntimeVLFileDescription | `Versioning/RuntimeVL` | [Versiones](./versioning.md#filedescription) |
| RuntimeVLIconMacPath | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#runtimevliconmacpath) |
| RuntimeVLIconWinPath | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#runtimevliconwinpath) |
| RuntimeVLIncludeIt | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#runtimevlincludeit) |
| RuntimeVLInternalName | `Versioning/RuntimeVL` | [Versiones](./versioning.md#internalname) |
| RuntimeVLLegalTrademark | `Versioning/RuntimeVL` | [Versiones](./versioning.md#legaltrademark) |
| RuntimeVLMacFolder | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#runtimevlmacfolder) |
| RuntimeVLPrivateBuild | `Versioning/RuntimeVL` | [Versiones](./versioning.md#privatebuild) |
| RuntimeVLSpecialBuild | `Versioning/RuntimeVL` | [Versiones](./versioning.md#specialbuild) |
| RuntimeVLVersion | `Versioning/RuntimeVL` | [Versiones](./versioning.md#version) |
| RuntimeVLWinFolder | `SourcesFiles/RuntimeVL` | [Archivos fuente](./source-files.md#runtimevlwinfolder) |
| ServerComment | `Versioning/Server` | [Versiones](./versioning.md#comment) |
| ServerCompanyName | `Versioning/Server` | [Versiones](./versioning.md#companyname) |
| ServerCopyright | `Versioning/Server` | [Versiones](./versioning.md#copyright) |
| ServerCreator | `Versioning/Server` | [Versiones](./versioning.md#creator) |
| ServerDataCollection | `CS` | [Cliente/Servidor](./client-server.md#serverdatacollection) |
| ServerEmbedsProjectDirectoryFile | `CS` | [Cliente/Servidor](./client-server.md#serverembedsprojectdirectoryfile) |
| ServerFileDescription | `Versioning/Server` | [Versiones](./versioning.md#filedescription) |
| ServerIconMacPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#servericonmacpath) |
| ServerIconWinPath | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#servericonwinpath) |
| ServerIncludeIt | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#serverincludeit) |
| ServerInternalName | `Versioning/Server` | [Versiones](./versioning.md#internalname) |
| ServerLegalTrademark | `Versioning/Server` | [Versiones](./versioning.md#legaltrademark) |
| ServerMacFolder | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#servermacfolder) |
| ServerPrivateBuild | `Versioning/Server` | [Versiones](./versioning.md#privatebuild) |
| ServerSelectionAllowed | `CS` | [Cliente/Servidor](./client-server.md#serverselectionallowed) |
| ServerSpecialBuild | `Versioning/Server` | [Versiones](./versioning.md#specialbuild) |
| ServerStructureFolderName | `CS` | [Cliente/Servidor](./client-server.md#serverstructurefoldername) |
| ServerVersion | `Versioning/Server` | [Versiones](./versioning.md#version) |
| ServerWinFolder | `SourcesFiles/CS` | [Archivos fuente](./source-files.md#serverwinfolder) |
| ShareLocalResourcesOnWindowsClient | `CS` | [Cliente/Servidor](./client-server.md#sharelocalresourcesonwindowsclient) |
| StartElevated | `AutoUpdate/CS/ClientUpdateWin` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Client` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Server` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/RuntimeVL` | [AutoUpdate](./auto-update.md#startelevated) |
| UseStandardZipFormat | `BuildApp` | [General](./general.md#usestandardzipformat) |
