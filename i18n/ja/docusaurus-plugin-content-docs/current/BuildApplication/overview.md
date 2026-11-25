---
id: overview
title: XML キー
sidebar_label: XML キー
sidebar_position: 0
description: "4D アプリケーションビルダーが使用する buildApp.4DSettings ファイルの XML キーの一覧。"
keywords: ["BuildApplication", "XML key", "buildApp.4DSettings", "BUILD APPLICATION"]
---

4D のアプリケーションビルダーは、各パラメーターを XML キーの形で [`buildApp.4DSettings`](../Desktop/building.md#buildapp4dsettings) ファイルに保存します。また、追加のキーを使用すれば、アプリケーションビルドダイアログで利用可能なオプション以外の設定をおこなうこともできます。

カスタムの設定ファイルを使用するには、そのパスを [`BUILD APPLICATION`](../commands/build-application) コマンドに渡します。

## 構造

すべてのキーは `<Preferences4D><BuildApp>` ルートの下に配置されます:

```xml
<Preferences4D>
  <BuildApp>
    <!-- 一般キー -->
    <RuntimeVL/>       <!-- シングルユーザーアプリケーション -->
    <CS/>              <!-- クライアント/サーバーアプリケーション -->
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

| ページ | XML ノード |
|---|---|
| [一般](./general.md) | `BuildApp` |
| [RuntimeVL](./runtime-vl.md) | `RuntimeVL` |
| [クライアント/サーバー](./client-server.md) | `CS` |
| [ソースファイル](./source-files.md) | `SourcesFiles/RuntimeVL`, `SourcesFiles/CS` |
| [バージョン管理](./versioning.md) | `Versioning/Common`, `Versioning/RuntimeVL`, `Versioning/Client`, `Versioning/Server` |
| [AutoUpdate](./auto-update.md) | `AutoUpdate/RuntimeVL`, `AutoUpdate/CS` |
| [ライセンス＆署名](./licenses-signature.md) | `Licenses`, `SignApplication` |

配列キー (`ArrayLicenseWin` や `ArrayExcludedPluginName` など) は、`ItemsCount` 要素と、それに続く `Item1`、`Item2`... 要素を含みます:

```xml
<ArrayExcludedComponentName>
  <ItemsCount>2</ItemsCount>
  <Item1>MyComponent</Item1>
  <Item2>MyOtherComponent</Item2>
</ArrayExcludedComponentName>
```

## キーの索引

| キー | ノード | ページ |
|---|---|---|
| AdHocSign | `SignApplication` | [ライセンス＆署名](./licenses-signature.md#adhocsign) |
| ArrayExcludedComponentName | `BuildApp` | [一般](./general.md#arrayexcludedcomponentname) |
| ArrayExcludedModuleName | `BuildApp` | [一般](./general.md#arrayexcludedmodulename) |
| ArrayExcludedPluginID | `BuildApp` | [一般](./general.md#arrayexcludedpluginid) |
| ArrayExcludedPluginName | `BuildApp` | [一般](./general.md#arrayexcludedpluginname) |
| ArrayLicenseMac | `Licenses` | [ライセンス＆署名](./licenses-signature.md#arraylicensemac) |
| ArrayLicenseWin | `Licenses` | [ライセンス＆署名](./licenses-signature.md#arraylicensewin) |
| AutomaticLicenseIntegration | `Licenses` | [ライセンス＆署名](./licenses-signature.md#automaticlicenseintegration) |
| BuildApplicationName | `BuildApp` | [一般](./general.md#buildapplicationname) |
| BuildApplicationSerialized | `BuildApp` | [一般](./general.md#buildapplicationserialized) |
| BuildCompiled | `BuildApp` | [一般](./general.md#buildcompiled) |
| BuildComponent | `BuildApp` | [一般](./general.md#buildcomponent) |
| BuildCSUpgradeable | `CS` | [クライアント/サーバー](./client-server.md#buildcsupgradeable) |
| BuildMacDestFolder | `BuildApp` | [一般](./general.md#buildmacdestfolder) |
| BuildServerApplication | `CS` | [クライアント/サーバー](./client-server.md#buildserverapplication) |
| BuildWinDestFolder | `BuildApp` | [一般](./general.md#buildwindestfolder) |
| CertificateAuthoritiesCertificates | `CS` | [クライアント/サーバー](./client-server.md#certificateauthoritiescertificates) |
| CertificateDomainName | `CS` | [クライアント/サーバー](./client-server.md#certificatedomainname) |
| ClientComment | `Versioning/Client` | [バージョン管理](./versioning.md#comment) |
| ClientCompanyName | `Versioning/Client` | [バージョン管理](./versioning.md#companyname) |
| ClientCopyright | `Versioning/Client` | [バージョン管理](./versioning.md#copyright) |
| ClientCreator | `Versioning/Client` | [バージョン管理](./versioning.md#creator) |
| ClientFileDescription | `Versioning/Client` | [バージョン管理](./versioning.md#filedescription) |
| ClientInternalName | `Versioning/Client` | [バージョン管理](./versioning.md#internalname) |
| ClientLegalTrademark | `Versioning/Client` | [バージョン管理](./versioning.md#legaltrademark) |
| ClientMacFolderToMac | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientmacfoldertomac) |
| ClientMacFolderToWin | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientmacfoldertowin) |
| ClientMacIconForMacPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientmaciconformacpath) |
| ClientMacIconForWinPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientmaciconforwinpath) |
| ClientMacIncludeIt | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientmacincludeit) |
| ClientPrivateBuild | `Versioning/Client` | [バージョン管理](./versioning.md#privatebuild) |
| ClientServerSystemFolderName | `CS` | [クライアント/サーバー](./client-server.md#clientserversystemfoldername) |
| ClientSpecialBuild | `Versioning/Client` | [バージョン管理](./versioning.md#specialbuild) |
| ClientUserPreferencesFolderByPath | `CS` | [クライアント/サーバー](./client-server.md#clientuserpreferencesfolderbypath) |
| ClientVersion | `Versioning/Client` | [バージョン管理](./versioning.md#version) |
| ClientWinFolderToMac | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientwinfoldertomac) |
| ClientWinFolderToWin | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientwinfoldertowin) |
| ClientWinIconForMacPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientwiniconformacpath) |
| ClientWinIconForWinPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientwiniconforwinpath) |
| ClientWinIncludeIt | `SourcesFiles/CS` | [ソースファイル](./source-files.md#clientwinincludeit) |
| ClientWinSingleInstance | `CS` | [クライアント/サーバー](./client-server.md#clientwinsingleinstance) |
| CommonComment | `Versioning/Common` | [バージョン管理](./versioning.md#comment) |
| CommonCompanyName | `Versioning/Common` | [バージョン管理](./versioning.md#companyname) |
| CommonCopyright | `Versioning/Common` | [バージョン管理](./versioning.md#copyright) |
| CommonCreator | `Versioning/Common` | [バージョン管理](./versioning.md#creator) |
| CommonFileDescription | `Versioning/Common` | [バージョン管理](./versioning.md#filedescription) |
| CommonInternalName | `Versioning/Common` | [バージョン管理](./versioning.md#internalname) |
| CommonLegalTrademark | `Versioning/Common` | [バージョン管理](./versioning.md#legaltrademark) |
| CommonPrivateBuild | `Versioning/Common` | [バージョン管理](./versioning.md#privatebuild) |
| CommonSpecialBuild | `Versioning/Common` | [バージョン管理](./versioning.md#specialbuild) |
| CommonVersion | `Versioning/Common` | [バージョン管理](./versioning.md#version) |
| CurrentVers | `CS` | [クライアント/サーバー](./client-server.md#currentvers) |
| DatabaseToEmbedInClientMacFolder | `SourcesFiles/CS` | [ソースファイル](./source-files.md#databasetoembedinclientmacfolder) |
| DatabaseToEmbedInClientWinFolder | `SourcesFiles/CS` | [ソースファイル](./source-files.md#databasetoembedinclientwinfolder) |
| DataFilePath | `BuildApp` | [一般](./general.md#datafilepath) |
| EvaluationMode | `Licenses` | [ライセンス＆署名](./licenses-signature.md#evaluationmode) |
| HardLink | `CS` | [クライアント/サーバー](./client-server.md#hardlink) |
| HideAdministrationMenuItem | `CS` | [クライアント/サーバー](./client-server.md#hideadministrationmenuitem) |
| HideDataExplorerMenuItem | `CS` | [クライアント/サーバー](./client-server.md#hidedataexplorermenuitem) |
| HideRuntimeExplorerMenuItem | `CS` | [クライアント/サーバー](./client-server.md#hideruntimeexplorermenuitem) |
| IncludeAssociatedFolders | `BuildApp` | [一般](./general.md#includeassociatedfolders) |
| IPAddress | `CS` | [クライアント/サーバー](./client-server.md#ipaddress) |
| IsOEM | `SourcesFiles/CS` | [ソースファイル](./source-files.md#isoem) |
| IsOEM | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#isoem) |
| LastDataPathLookup | `CS` | [クライアント/サーバー](./client-server.md#lastdatapathlookup) |
| LastDataPathLookup | `RuntimeVL` | [RuntimeVL](./runtime-vl.md#lastdatapathlookup) |
| MacCertificate | `SignApplication` | [ライセンス＆署名](./licenses-signature.md#maccertificate) |
| MacCompiledDatabaseToWin | `CS` | [クライアント/サーバー](./client-server.md#maccompileddatabasetowin) |
| MacCompiledDatabaseToWinIncludeIt | `CS` | [クライアント/サーバー](./client-server.md#maccompileddatabasetowinincludeit) |
| MacSignature | `SignApplication` | [ライセンス＆署名](./licenses-signature.md#macsignature) |
| PackProject | `BuildApp` | [一般](./general.md#packproject) |
| PortNumber | `CS` | [クライアント/サーバー](./client-server.md#portnumber) |
| RangeVersMax | `CS` | [クライアント/サーバー](./client-server.md#rangeversmax) |
| RangeVersMin | `CS` | [クライアント/サーバー](./client-server.md#rangeversmin) |
| RuntimeVLComment | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#comment) |
| RuntimeVLCompanyName | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#companyname) |
| RuntimeVLCopyright | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#copyright) |
| RuntimeVLCreator | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#creator) |
| RuntimeVLFileDescription | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#filedescription) |
| RuntimeVLIconMacPath | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#runtimevliconmacpath) |
| RuntimeVLIconWinPath | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#runtimevliconwinpath) |
| RuntimeVLIncludeIt | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#runtimevlincludeit) |
| RuntimeVLInternalName | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#internalname) |
| RuntimeVLLegalTrademark | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#legaltrademark) |
| RuntimeVLMacFolder | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#runtimevlmacfolder) |
| RuntimeVLPrivateBuild | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#privatebuild) |
| RuntimeVLSpecialBuild | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#specialbuild) |
| RuntimeVLVersion | `Versioning/RuntimeVL` | [バージョン管理](./versioning.md#version) |
| RuntimeVLWinFolder | `SourcesFiles/RuntimeVL` | [ソースファイル](./source-files.md#runtimevlwinfolder) |
| ServerComment | `Versioning/Server` | [バージョン管理](./versioning.md#comment) |
| ServerCompanyName | `Versioning/Server` | [バージョン管理](./versioning.md#companyname) |
| ServerCopyright | `Versioning/Server` | [バージョン管理](./versioning.md#copyright) |
| ServerCreator | `Versioning/Server` | [バージョン管理](./versioning.md#creator) |
| ServerDataCollection | `CS` | [クライアント/サーバー](./client-server.md#serverdatacollection) |
| ServerEmbedsProjectDirectoryFile | `CS` | [クライアント/サーバー](./client-server.md#serverembedsprojectdirectoryfile) |
| ServerFileDescription | `Versioning/Server` | [バージョン管理](./versioning.md#filedescription) |
| ServerIconMacPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#servericonmacpath) |
| ServerIconWinPath | `SourcesFiles/CS` | [ソースファイル](./source-files.md#servericonwinpath) |
| ServerIncludeIt | `SourcesFiles/CS` | [ソースファイル](./source-files.md#serverincludeit) |
| ServerInternalName | `Versioning/Server` | [バージョン管理](./versioning.md#internalname) |
| ServerLegalTrademark | `Versioning/Server` | [バージョン管理](./versioning.md#legaltrademark) |
| ServerMacFolder | `SourcesFiles/CS` | [ソースファイル](./source-files.md#servermacfolder) |
| ServerPrivateBuild | `Versioning/Server` | [バージョン管理](./versioning.md#privatebuild) |
| ServerSelectionAllowed | `CS` | [クライアント/サーバー](./client-server.md#serverselectionallowed) |
| ServerSpecialBuild | `Versioning/Server` | [バージョン管理](./versioning.md#specialbuild) |
| ServerStructureFolderName | `CS` | [クライアント/サーバー](./client-server.md#serverstructurefoldername) |
| ServerVersion | `Versioning/Server` | [バージョン管理](./versioning.md#version) |
| ServerWinFolder | `SourcesFiles/CS` | [ソースファイル](./source-files.md#serverwinfolder) |
| ShareLocalResourcesOnWindowsClient | `CS` | [クライアント/サーバー](./client-server.md#sharelocalresourcesonwindowsclient) |
| StartElevated | `AutoUpdate/CS/ClientUpdateWin` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Client` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/CS/Server` | [AutoUpdate](./auto-update.md#startelevated) |
| StartElevated | `AutoUpdate/RuntimeVL` | [AutoUpdate](./auto-update.md#startelevated) |
| UseStandardZipFormat | `BuildApp` | [一般](./general.md#usestandardzipformat) |
