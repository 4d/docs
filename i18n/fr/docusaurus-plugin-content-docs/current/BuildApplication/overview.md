---
id: overview
title: Clés XML
sidebar_label: Clés XML
sidebar_position: 0
description: "Liste des clés XML du fichier buildApp.4DSettings utilisé par le Générateur d'applications de 4D."
keywords: ["BuildApplication", "XML key", "buildApp.4DSettings", "BUILD APPLICATION"]
---

Le Générateur d'applications de 4D stocke ses paramètres sous forme de clés XML dans le fichier [`buildApp.4DSettings`](../Desktop/building.md#buildapp4dsettings). Des clés supplémentaires proposent également des options en plus de celles disponibles dans la boîte de dialogue du Générateur d'applications.

Pour utiliser un fichier de paramètres personnalisé, passez son chemin à la commande [`BUILD APPLICATION`](../commands/build-application).

## Structure

Toutes les clés sont situées sous la racine `<Preferences4D><BuildApp>` :

```xml
<Preferences4D>
  <BuildApp>
    <!-- Clés générales -->
    <RuntimeVL/>       <!-- application monoposte -->
    <CS/>              <!-- application client/serveur -->
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

| Page | Nœuds XML |
|---|---|
| [Général](./general.md) | `BuildApp` |
| [RuntimeVL](./runtime-vl.md) | `RuntimeVL` |
| [Client/Serveur](./client-server.md) | `CS` |
| [Fichiers sources](./source-files.md) | `SourcesFiles/RuntimeVL`, `SourcesFiles/CS` |
| [Versionnage](./versioning.md) | `Versioning/Common`, `Versioning/RuntimeVL`, `Versioning/Client`, `Versioning/Server` |
| [AutoUpdate](./auto-update.md) | `AutoUpdate/RuntimeVL`, `AutoUpdate/CS` |
| [Licences & signature](./licenses-signature.md) | `Licenses`, `SignApplication` |

Les clés de type tableau (telles que `ArrayLicenseWin` ou `ArrayExcludedPluginName`) contiennent un élément `ItemsCount` suivi d'éléments `Item1`, `Item2`... :

```xml
<ArrayExcludedComponentName>
  <ItemsCount>2</ItemsCount>
  <Item1>MyComponent</Item1>
  <Item2>MyOtherComponent</Item2>
</ArrayExcludedComponentName>
```

## Index des clés

| Clé | Nœud | Page |
|---|---|---|
| AdHocSign | `SignApplication` | [Licences & signature](./licenses-signature.md#adhocsign) |
| ArrayExcludedComponentName | `BuildApp` | [Général](./general.md#arrayexcludedcomponentname) |
| ArrayExcludedModuleName | `BuildApp` | [Général](./general.md#arrayexcludedmodulename) |
| ArrayExcludedPluginID | `BuildApp` | [Général](./general.md#arrayexcludedpluginid) |
| ArrayExcludedPluginName | `BuildApp` | [Général](./general.md#arrayexcludedpluginname) |
| ArrayLicenseMac | `Licenses` | [Licences & signature](./licenses-signature.md#arraylicensemac) |
| ArrayLicenseWin | `Licenses` | [Licences & signature](./licenses-signature.md#arraylicensewin) |
| AutomaticLicenseIntegration | `Licenses` | [Licences & signature](./licenses-signature.md#automaticlicenseintegration) |
| BuildApplicationName | `BuildApp` | [Général](./general.md#buildapplicationname) |
| BuildApplicationSerialized | `BuildApp` | [Général](./general.md#buildapplicationserialized) |
| BuildCompiled | `BuildApp` | [Général](./general.md#buildcompiled) |
| BuildComponent | `BuildApp` | [Général](./general.md#buildcomponent) |
| BuildCSUpgradeable | `CS` | [Client/Serveur](./client-server.md#buildcsupgradeable) |
| BuildMacDestFolder | `BuildApp` | [Général](./general.md#buildmacdestfolder) |
| BuildServerApplication | `CS` | [Client/Serveur](./client-server.md#buildserverapplication) |
| BuildWinDestFolder | `BuildApp` | [Général](./general.md#buildwindestfolder) |
| CertificateAuthoritiesCertificates | `CS` | [Client/Serveur](./client-server.md#certificateauthoritiescertificates) |
| CertificateDomainName | `CS` | [Client/Serveur](./client-server.md#certificatedomainname) |
| ClientComment | `Versioning/Client` | [Versionnage](./versioning.md#comment) |
| ClientCompanyName | `Versioning/Client` | [Versionnage](./versioning.md#companyname) |
| ClientCopyright | `Versioning/Client` | [Versionnage](./versioning.md#copyright) |
| ClientCreator | `Versioning/Client` | [Versionnage](./versioning.md#creator) |
| ClientFileDescription | `Versioning/Client` | [Versionnage](./versioning.md#filedescription) |
| ClientInternalName | `Versioning/Client` | [Versionnage](./versioning.md#internalname) |
| ClientLegalTrademark | `Versioning/Client` | [Versionnage](./versioning.md#legaltrademark) |
| ClientMacFolderToMac | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientmacfoldertomac) |
| ClientMacFolderToWin | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientmacfoldertowin) |
| ClientMacIconForMacPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientmaciconformacpath) |
| ClientMacIconForWinPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientmaciconforwinpath) |
| ClientMacIncludeIt | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientmacincludeit) |
| ClientPrivateBuild | `Versioning/Client` | [Versionnage](./versioning.md#privatebuild) |
| ClientServerSystemFolderName | `CS` | [Client/Serveur](./client-server.md#clientserversystemfoldername) |
| ClientSpecialBuild | `Versioning/Client` | [Versionnage](./versioning.md#specialbuild) |
| ClientUserPreferencesFolderByPath | `CS` | [Client/Serveur](./client-server.md#clientuserpreferencesfolderbypath) |
| ClientVersion | `Versioning/Client` | [Versionnage](./versioning.md#version) |
| ClientWinFolderToMac | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientwinfoldertomac) |
| ClientWinFolderToWin | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientwinfoldertowin) |
| ClientWinIconForMacPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientwiniconformacpath) |
| ClientWinIconForWinPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientwiniconforwinpath) |
| ClientWinIncludeIt | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#clientwinincludeit) |
| ClientWinSingleInstance | `CS` | [Client/Serveur](./client-server.md#clientwinsingleinstance) |
| CommonComment | `Versioning/Common` | [Versionnage](./versioning.md#comment) |
| CommonCompanyName | `Versioning/Common` | [Versionnage](./versioning.md#companyname) |
| CommonCopyright | `Versioning/Common` | [Versionnage](./versioning.md#copyright) |
| CommonCreator | `Versioning/Common` | [Versionnage](./versioning.md#creator) |
| CommonFileDescription | `Versioning/Common` | [Versionnage](./versioning.md#filedescription) |
| CommonInternalName | `Versioning/Common` | [Versionnage](./versioning.md#internalname) |
| CommonLegalTrademark | `Versioning/Common` | [Versionnage](./versioning.md#legaltrademark) |
| CommonPrivateBuild | `Versioning/Common` | [Versionnage](./versioning.md#privatebuild) |
| CommonSpecialBuild | `Versioning/Common` | [Versionnage](./versioning.md#specialbuild) |
| CommonVersion | `Versioning/Common` | [Versionnage](./versioning.md#version) |
| CurrentVers | `CS` | [Client/Serveur](./client-server.md#currentvers) |
| DatabaseToEmbedInClientMacFolder | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#databasetoembedinclientmacfolder) |
| DatabaseToEmbedInClientWinFolder | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#databasetoembedinclientwinfolder) |
| DataFilePath | `BuildApp` | [Général](./general.md#datafilepath) |
| EvaluationMode | `Licenses` | [Licences & signature](./licenses-signature.md#evaluationmode) |
| HardLink | `CS` | [Client/Serveur](./client-server.md#hardlink) |
| HideAdministrationMenuItem | `CS` | [Client/Serveur](./client-server.md#hideadministrationmenuitem) |
| HideDataExplorerMenuItem | `CS` | [Client/Serveur](./client-server.md#hidedataexplorermenuitem) |
| HideRuntimeExplorerMenuItem | `CS` | [Client/Serveur](./client-server.md#hideruntimeexplorermenuitem) |
| IncludeAssociatedFolders | `BuildApp` | [Général](./general.md#includeassociatedfolders) |
| IPAddress | `CS` | [Client/Serveur](./client-server.md#ipaddress) |
| IsOEM | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#isoem) |
| IsOEM | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#isoem) |
| LastDataPathLookup | `CS` | [Client/Serveur](./client-server.md#lastdatapathlookup) |
| LastDataPathLookup | `RuntimeVL` | [RuntimeVL](./runtime-vl.md#lastdatapathlookup) |
| MacCertificate | `SignApplication` | [Licences & signature](./licenses-signature.md#maccertificate) |
| MacCompiledDatabaseToWin | `CS` | [Client/Serveur](./client-server.md#maccompileddatabasetowin) |
| MacCompiledDatabaseToWinIncludeIt | `CS` | [Client/Serveur](./client-server.md#maccompileddatabasetowinincludeit) |
| MacSignature | `SignApplication` | [Licences & signature](./licenses-signature.md#macsignature) |
| PackProject | `BuildApp` | [Général](./general.md#packproject) |
| PortNumber | `CS` | [Client/Serveur](./client-server.md#portnumber) |
| RangeVersMax | `CS` | [Client/Serveur](./client-server.md#rangeversmax) |
| RangeVersMin | `CS` | [Client/Serveur](./client-server.md#rangeversmin) |
| RuntimeVLComment | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#comment) |
| RuntimeVLCompanyName | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#companyname) |
| RuntimeVLCopyright | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#copyright) |
| RuntimeVLCreator | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#creator) |
| RuntimeVLFileDescription | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#filedescription) |
| RuntimeVLIconMacPath | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#runtimevliconmacpath) |
| RuntimeVLIconWinPath | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#runtimevliconwinpath) |
| RuntimeVLIncludeIt | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#runtimevlincludeit) |
| RuntimeVLInternalName | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#internalname) |
| RuntimeVLLegalTrademark | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#legaltrademark) |
| RuntimeVLMacFolder | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#runtimevlmacfolder) |
| RuntimeVLPrivateBuild | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#privatebuild) |
| RuntimeVLSpecialBuild | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#specialbuild) |
| RuntimeVLVersion | `Versioning/RuntimeVL` | [Versionnage](./versioning.md#version) |
| RuntimeVLWinFolder | `SourcesFiles/RuntimeVL` | [Fichiers sources](./source-files.md#runtimevlwinfolder) |
| ServerComment | `Versioning/Server` | [Versionnage](./versioning.md#comment) |
| ServerCompanyName | `Versioning/Server` | [Versionnage](./versioning.md#companyname) |
| ServerCopyright | `Versioning/Server` | [Versionnage](./versioning.md#copyright) |
| ServerCreator | `Versioning/Server` | [Versionnage](./versioning.md#creator) |
| ServerDataCollection | `CS` | [Client/Serveur](./client-server.md#serverdatacollection) |
| ServerEmbedsProjectDirectoryFile | `CS` | [Client/Serveur](./client-server.md#serverembedsprojectdirectoryfile) |
| ServerFileDescription | `Versioning/Server` | [Versionnage](./versioning.md#filedescription) |
| ServerIconMacPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#servericonmacpath) |
| ServerIconWinPath | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#servericonwinpath) |
| ServerIncludeIt | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#serverincludeit) |
| ServerInternalName | `Versioning/Server` | [Versionnage](./versioning.md#internalname) |
| ServerLegalTrademark | `Versioning/Server` | [Versionnage](./versioning.md#legaltrademark) |
| ServerMacFolder | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#servermacfolder) |
| ServerPrivateBuild | `Versioning/Server` | [Versionnage](./versioning.md#privatebuild) |
| ServerSelectionAllowed | `CS` | [Client/Serveur](./client-server.md#serverselectionallowed) |
| ServerSpecialBuild | `Versioning/Server` | [Versionnage](./versioning.md#specialbuild) |
| ServerStructureFolderName | `CS` | [Client/Serveur](./client-server.md#serverstructurefoldername) |
| ServerVersion | `Versioning/Server` | [Versionnage](./versioning.md#version) |
| ServerWinFolder | `SourcesFiles/CS` | [Fichiers sources](./source-files.md#serverwinfolder) |
| ShareLocalResourcesOnWindowsClient | `CS` | [Client/Serveur](./client-server.md#sharelocalresourcesonwindowsclient) |
| StartElevated | `AutoUpdate/CS/ClientUpdateWin` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Client` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Server` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/RuntimeVL` | [AutoUpdate](./auto-update.md#startelevated) |
| UseStandardZipFormat | `BuildApp` | [Général](./general.md#usestandardzipformat) |
