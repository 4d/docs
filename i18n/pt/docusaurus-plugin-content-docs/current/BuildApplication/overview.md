---
id: overview
title: Chaves XML
sidebar_label: Chaves XML
sidebar_position: 0
description: "Lista das chaves XML do arquivo buildApp.4DSettings utilizado pelo gerador de aplicações 4D."
keywords: ["BuildApplication", "XML key", "buildApp.4DSettings", "BUILD APPLICATION"]
---

O gerador de aplicações 4D armazena seus parâmetros como chaves XML no arquivo [`buildApp.4DSettings`](../Desktop/building.md#buildapp4dsettings). Chaves adicionais também oferecem opções além das disponíveis na caixa de diálogo Criar aplicação.

Para usar um arquivo de configurações personalizado, passe seu caminho para o comando [`BUILD APPLICATION`](../commands/build-application).

## Estrutura

Todas as chaves estão localizadas sob a raiz `<Preferences4D><BuildApp>`:

```xml
<Preferences4D>
  <BuildApp>
    <!-- Chaves gerais -->
    <RuntimeVL/>       <!-- aplicação usuário único -->
    <CS/>              <!-- aplicação cliente/servidor -->
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

| Página | Nós XML |
|---|---|
| [Geral](./general.md) | `BuildApp` |
| [RuntimeVL](./runtime-vl.md) | `RuntimeVL` |
| [Cliente/Servidor](./client-server.md) | `CS` |
| [Arquivos fonte](./source-files.md) | `SourcesFiles/RuntimeVL`, `SourcesFiles/CS` |
| [Versionamento](./versioning.md) | `Versioning/Common`, `Versioning/RuntimeVL`, `Versioning/Client`, `Versioning/Server` |
| [AutoUpdate](./auto-update.md) | `AutoUpdate/RuntimeVL`, `AutoUpdate/CS` |
| [Licenças e assinatura](./licenses-signature.md) | `Licenses`, `SignApplication` |

As chaves de tipo array (como `ArrayLicenseWin` ou `ArrayExcludedPluginName`) contêm um elemento `ItemsCount` seguido dos elementos `Item1`, `Item2`...:

```xml
<ArrayExcludedComponentName>
  <ItemsCount>2</ItemsCount>
  <Item1>MyComponent</Item1>
  <Item2>MyOtherComponent</Item2>
</ArrayExcludedComponentName>
```

## Índice das chaves

| Chave | Nó | Página |
|---|---|---|
| AdHocSign | `SignApplication` | [Licenças e assinatura](./licenses-signature.md#adhocsign) |
| ArrayExcludedComponentName | `BuildApp` | [Geral](./general.md#arrayexcludedcomponentname) |
| ArrayExcludedModuleName | `BuildApp` | [Geral](./general.md#arrayexcludedmodulename) |
| ArrayExcludedPluginID | `BuildApp` | [Geral](./general.md#arrayexcludedpluginid) |
| ArrayExcludedPluginName | `BuildApp` | [Geral](./general.md#arrayexcludedpluginname) |
| ArrayLicenseMac | `Licenses` | [Licenças e assinatura](./licenses-signature.md#arraylicensemac) |
| ArrayLicenseWin | `Licenses` | [Licenças e assinatura](./licenses-signature.md#arraylicensewin) |
| AutomaticLicenseIntegration | `Licenses` | [Licenças e assinatura](./licenses-signature.md#automaticlicenseintegration) |
| BuildApplicationName | `BuildApp` | [Geral](./general.md#buildapplicationname) |
| BuildApplicationSerialized | `BuildApp` | [Geral](./general.md#buildapplicationserialized) |
| BuildCompiled | `BuildApp` | [Geral](./general.md#buildcompiled) |
| BuildComponent | `BuildApp` | [Geral](./general.md#buildcomponent) |
| BuildCSUpgradeable | `CS` | [Cliente/Servidor](./client-server.md#buildcsupgradeable) |
| BuildMacDestFolder | `BuildApp` | [Geral](./general.md#buildmacdestfolder) |
| BuildServerApplication | `CS` | [Cliente/Servidor](./client-server.md#buildserverapplication) |
| BuildWinDestFolder | `BuildApp` | [Geral](./general.md#buildwindestfolder) |
| CertificateAuthoritiesCertificates | `CS` | [Cliente/Servidor](./client-server.md#certificateauthoritiescertificates) |
| CertificateDomainName | `CS` | [Cliente/Servidor](./client-server.md#certificatedomainname) |
| ClientComment | `Versioning/Client` | [Versionamento](./versioning.md#comment) |
| ClientCompanyName | `Versioning/Client` | [Versionamento](./versioning.md#companyname) |
| ClientCopyright | `Versioning/Client` | [Versionamento](./versioning.md#copyright) |
| ClientCreator | `Versioning/Client` | [Versionamento](./versioning.md#creator) |
| ClientFileDescription | `Versioning/Client` | [Versionamento](./versioning.md#filedescription) |
| ClientInternalName | `Versioning/Client` | [Versionamento](./versioning.md#internalname) |
| ClientLegalTrademark | `Versioning/Client` | [Versionamento](./versioning.md#legaltrademark) |
| ClientMacFolderToMac | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientmacfoldertomac) |
| ClientMacFolderToWin | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientmacfoldertowin) |
| ClientMacIconForMacPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientmaciconformacpath) |
| ClientMacIconForWinPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientmaciconforwinpath) |
| ClientMacIncludeIt | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientmacincludeit) |
| ClientPrivateBuild | `Versioning/Client` | [Versionamento](./versioning.md#privatebuild) |
| ClientServerSystemFolderName | `CS` | [Cliente/Servidor](./client-server.md#clientserversystemfoldername) |
| ClientSpecialBuild | `Versioning/Client` | [Versionamento](./versioning.md#specialbuild) |
| ClientUserPreferencesFolderByPath | `CS` | [Cliente/Servidor](./client-server.md#clientuserpreferencesfolderbypath) |
| ClientVersion | `Versioning/Client` | [Versionamento](./versioning.md#version) |
| ClientWinFolderToMac | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientwinfoldertomac) |
| ClientWinFolderToWin | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientwinfoldertowin) |
| ClientWinIconForMacPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientwiniconformacpath) |
| ClientWinIconForWinPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientwiniconforwinpath) |
| ClientWinIncludeIt | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#clientwinincludeit) |
| ClientWinSingleInstance | `CS` | [Cliente/Servidor](./client-server.md#clientwinsingleinstance) |
| CommonComment | `Versioning/Common` | [Versionamento](./versioning.md#comment) |
| CommonCompanyName | `Versioning/Common` | [Versionamento](./versioning.md#companyname) |
| CommonCopyright | `Versioning/Common` | [Versionamento](./versioning.md#copyright) |
| CommonCreator | `Versioning/Common` | [Versionamento](./versioning.md#creator) |
| CommonFileDescription | `Versioning/Common` | [Versionamento](./versioning.md#filedescription) |
| CommonInternalName | `Versioning/Common` | [Versionamento](./versioning.md#internalname) |
| CommonLegalTrademark | `Versioning/Common` | [Versionamento](./versioning.md#legaltrademark) |
| CommonPrivateBuild | `Versioning/Common` | [Versionamento](./versioning.md#privatebuild) |
| CommonSpecialBuild | `Versioning/Common` | [Versionamento](./versioning.md#specialbuild) |
| CommonVersion | `Versioning/Common` | [Versionamento](./versioning.md#version) |
| CurrentVers | `CS` | [Cliente/Servidor](./client-server.md#currentvers) |
| DatabaseToEmbedInClientMacFolder | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#databasetoembedinclientmacfolder) |
| DatabaseToEmbedInClientWinFolder | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#databasetoembedinclientwinfolder) |
| DataFilePath | `BuildApp` | [Geral](./general.md#datafilepath) |
| EvaluationMode | `Licenses` | [Licenças e assinatura](./licenses-signature.md#evaluationmode) |
| HardLink | `CS` | [Cliente/Servidor](./client-server.md#hardlink) |
| HideAdministrationMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hideadministrationmenuitem) |
| HideDataExplorerMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hidedataexplorermenuitem) |
| HideRuntimeExplorerMenuItem | `CS` | [Cliente/Servidor](./client-server.md#hideruntimeexplorermenuitem) |
| IncludeAssociatedFolders | `BuildApp` | [Geral](./general.md#includeassociatedfolders) |
| IPAddress | `CS` | [Cliente/Servidor](./client-server.md#ipaddress) |
| IsOEM | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#isoem) |
| IsOEM | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#isoem) |
| LastDataPathLookup | `CS` | [Cliente/Servidor](./client-server.md#lastdatapathlookup) |
| LastDataPathLookup | `RuntimeVL` | [RuntimeVL](./runtime-vl.md#lastdatapathlookup) |
| MacCertificate | `SignApplication` | [Licenças e assinatura](./licenses-signature.md#maccertificate) |
| MacCompiledDatabaseToWin | `CS` | [Cliente/Servidor](./client-server.md#maccompileddatabasetowin) |
| MacCompiledDatabaseToWinIncludeIt | `CS` | [Cliente/Servidor](./client-server.md#maccompileddatabasetowinincludeit) |
| MacSignature | `SignApplication` | [Licenças e assinatura](./licenses-signature.md#macsignature) |
| PackProject | `BuildApp` | [Geral](./general.md#packproject) |
| PortNumber | `CS` | [Cliente/Servidor](./client-server.md#portnumber) |
| RangeVersMax | `CS` | [Cliente/Servidor](./client-server.md#rangeversmax) |
| RangeVersMin | `CS` | [Cliente/Servidor](./client-server.md#rangeversmin) |
| RuntimeVLComment | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#comment) |
| RuntimeVLCompanyName | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#companyname) |
| RuntimeVLCopyright | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#copyright) |
| RuntimeVLCreator | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#creator) |
| RuntimeVLFileDescription | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#filedescription) |
| RuntimeVLIconMacPath | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#runtimevliconmacpath) |
| RuntimeVLIconWinPath | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#runtimevliconwinpath) |
| RuntimeVLIncludeIt | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#runtimevlincludeit) |
| RuntimeVLInternalName | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#internalname) |
| RuntimeVLLegalTrademark | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#legaltrademark) |
| RuntimeVLMacFolder | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#runtimevlmacfolder) |
| RuntimeVLPrivateBuild | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#privatebuild) |
| RuntimeVLSpecialBuild | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#specialbuild) |
| RuntimeVLVersion | `Versioning/RuntimeVL` | [Versionamento](./versioning.md#version) |
| RuntimeVLWinFolder | `SourcesFiles/RuntimeVL` | [Arquivos fonte](./source-files.md#runtimevlwinfolder) |
| ServerComment | `Versioning/Server` | [Versionamento](./versioning.md#comment) |
| ServerCompanyName | `Versioning/Server` | [Versionamento](./versioning.md#companyname) |
| ServerCopyright | `Versioning/Server` | [Versionamento](./versioning.md#copyright) |
| ServerCreator | `Versioning/Server` | [Versionamento](./versioning.md#creator) |
| ServerDataCollection | `CS` | [Cliente/Servidor](./client-server.md#serverdatacollection) |
| ServerEmbedsProjectDirectoryFile | `CS` | [Cliente/Servidor](./client-server.md#serverembedsprojectdirectoryfile) |
| ServerFileDescription | `Versioning/Server` | [Versionamento](./versioning.md#filedescription) |
| ServerIconMacPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#servericonmacpath) |
| ServerIconWinPath | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#servericonwinpath) |
| ServerIncludeIt | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#serverincludeit) |
| ServerInternalName | `Versioning/Server` | [Versionamento](./versioning.md#internalname) |
| ServerLegalTrademark | `Versioning/Server` | [Versionamento](./versioning.md#legaltrademark) |
| ServerMacFolder | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#servermacfolder) |
| ServerPrivateBuild | `Versioning/Server` | [Versionamento](./versioning.md#privatebuild) |
| ServerSelectionAllowed | `CS` | [Cliente/Servidor](./client-server.md#serverselectionallowed) |
| ServerSpecialBuild | `Versioning/Server` | [Versionamento](./versioning.md#specialbuild) |
| ServerStructureFolderName | `CS` | [Cliente/Servidor](./client-server.md#serverstructurefoldername) |
| ServerVersion | `Versioning/Server` | [Versionamento](./versioning.md#version) |
| ServerWinFolder | `SourcesFiles/CS` | [Arquivos fonte](./source-files.md#serverwinfolder) |
| ShareLocalResourcesOnWindowsClient | `CS` | [Cliente/Servidor](./client-server.md#sharelocalresourcesonwindowsclient) |
| StartElevated | `AutoUpdate/CS/ClientUpdateWin` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Client` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Server` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/RuntimeVL` | [AutoUpdate](./auto-update.md#startelevated) |
| UseStandardZipFormat | `BuildApp` | [Geral](./general.md#usestandardzipformat) |
