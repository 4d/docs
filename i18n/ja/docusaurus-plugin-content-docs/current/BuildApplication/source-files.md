---
id: source-files
title: ソースファイル
sidebar_label: ソースファイル
sidebar_position: 4
description: "SourcesFiles ノードの BuildApplication XML キー: 4D Volume Desktop および 4D Server の場所、アイコン、OEM ライセンス。"
keywords: ["BuildApplication", "XML key", "SourcesFiles", "4D Volume Desktop", "icon"]
---

これらのキーは、ビルドに使用するソースアプリケーション (4D Volume Desktop、4D Server) とアイコンを指定します。これらは `<SourcesFiles>` ノードの下に配置され、シングルユーザーアプリケーションの場合は `<RuntimeVL>` サブノード、クライアント/サーバーアプリケーションの場合は `<CS>` サブノードに置かれます。

すべてのパスは、絶対パス、またはストラクチャーファイルからの相対パスで指定できます。対応するアプリケーションをビルドに含めるには、`...IncludeIt` キーを True に設定する必要があります。

## シングルユーザーアプリケーション (RuntimeVL)

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

| キー | 値 | 説明 |
|---|---|---|
| <a name="runtimevlincludeit"></a>RuntimeVLIncludeIt | True / False | 以下のキーで指定された 4D Volume Desktop を含めるには True でなければなりません |
| <a name="runtimevlwinfolder"></a>RuntimeVLWinFolder | パス | Windows 用 4D Volume Desktop のフォルダー |
| <a name="runtimevlmacfolder"></a>RuntimeVLMacFolder | パス | macOS 用 4D Volume Desktop のパッケージ |
| <a name="runtimevliconwinpath"></a>RuntimeVLIconWinPath | パス | Windows 用のアプリケーションアイコン (.ico) |
| <a name="runtimevliconmacpath"></a>RuntimeVLIconMacPath | パス | macOS 用のアプリケーションアイコン (.icns、info.plist ファイルが更新されます) |
| [IsOEM](#isoem) | True / False | OEM 運用ライセンスを含めます |

[BuildApplicationSerialized](./general.md#buildapplicationserialized) が True の場合、RuntimeVLWinFolder および RuntimeVLMacFolder は必須です。指定されていない場合、エラーが返され、ビルドは中止されます。

アイコンのキーが省略された場合、4D Volume Desktop のデフォルトアイコンが使用されます。[アプリケーションアイコンのカスタマイズ](../Desktop/building.md#customizing-application-icons) も参照してください。

## クライアント/サーバーアプリケーション (CS)

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

### サーバー

| キー | 値 | 説明 |
|---|---|---|
| <a name="serverincludeit"></a>ServerIncludeIt | True / False | 以下のキーで指定された 4D Server を含めるには True でなければなりません |
| <a name="serverwinfolder"></a>ServerWinFolder | パス | Windows 用 4D Server のフォルダー |
| <a name="servermacfolder"></a>ServerMacFolder | パス | macOS 用 4D Server のフォルダー |
| <a name="servericonwinpath"></a>ServerIconWinPath | パス | Windows 用のサーバーアイコン (.ico) |
| <a name="servericonmacpath"></a>ServerIconMacPath | パス | macOS 用のサーバーアイコン (.icns、info.plist ファイルが更新されます) |

[BuildServerApplication](./client-server.md#buildserverapplication) が True の場合、ServerWinFolder および ServerMacFolder は必須です。指定されていない場合、エラーが返され、ビルドは中止されます。

アイコンのキーが省略された場合、4D Server のデフォルトアイコンが使用されます。

### クライアント

クライアントのキーは、クライアントアプリケーションのプラットフォーム (`ClientWin...`、`ClientMac...`) と、ビルドをおこなうマシンのプラットフォーム (`...ToWin`、`...ToMac`、`...ForWinPath`、`...ForMacPath`) に応じて命名されています。

| キー | 値 | 説明 |
|---|---|---|
| <a name="clientwinincludeit"></a>ClientWinIncludeIt | True / False | ClientWinFolderToWin または ClientWinFolderToMac で指定された Windows クライアントを含めるには True でなければなりません |
| <a name="clientwinfoldertowin"></a>ClientWinFolderToWin | パス | Windows 上でビルドする場合の、Windows 用 4D Volume Desktop |
| <a name="clientwinfoldertomac"></a>ClientWinFolderToMac | パス | macOS 上でビルドする場合の、Windows 用 4D Volume Desktop または Windows 用 **.4darchive** ファイル |
| <a name="clientmacincludeit"></a>ClientMacIncludeIt | True / False | ClientMacFolderToMac または ClientMacFolderToWin で指定された macOS クライアントを含めるには True でなければなりません |
| <a name="clientmacfoldertomac"></a>ClientMacFolderToMac | パス | macOS 上でビルドする場合の、macOS 用 4D Volume Desktop |
| <a name="clientmacfoldertowin"></a>ClientMacFolderToWin | パス | Windows 上でビルドする場合の、macOS 用 **.4darchive** ファイル |
| <a name="clientwiniconforwinpath"></a>ClientWinIconForWinPath | パス | Windows 上でビルドする場合の、Windows クライアントのアイコン (.ico) |
| <a name="clientwiniconformacpath"></a>ClientWinIconForMacPath | パス | macOS 上でビルドする場合の、Windows クライアントのアイコン (.ico) |
| <a name="clientmaciconforwinpath"></a>ClientMacIconForWinPath | パス | Windows 上でビルドする場合の、macOS クライアントのアイコン (.icns) |
| <a name="clientmaciconformacpath"></a>ClientMacIconForMacPath | パス | macOS 上でビルドする場合の、macOS クライアントのアイコン (.icns) |
| <a name="databasetoembedinclientwinfolder"></a>DatabaseToEmbedInClientWinFolder | パス | [シングルユーザークライアントに埋め込む](../Desktop/building.md#embedding-a-single-user-client-application) コンパイル済みストラクチャーを格納している Windows フォルダー |
| <a name="databasetoembedinclientmacfolder"></a>DatabaseToEmbedInClientMacFolder | パス | [シングルユーザークライアントに埋め込む](../Desktop/building.md#embedding-a-single-user-client-application) コンパイル済みストラクチャーを格納している macOS フォルダー |
| [IsOEM](#isoem) | True / False | OEM 運用ライセンスを含めます |

アイコンのキーが省略された場合、4D Volume Desktop のデフォルトアイコンが使用されます。[別プラットフォームのクライアントアーカイブの選択](../Desktop/building.md#selecting-client-archive-for-the-concurrent-platform) も参照してください。

## IsOEM

```text title="XML パス"
/Preferences4D/BuildApp/SourcesFiles/RuntimeVL/IsOEM
/Preferences4D/BuildApp/SourcesFiles/CS/IsOEM
```

**値**: True / False (デフォルト)

True の場合、ビルドされるアプリケーション (ノードに応じてシングルユーザーまたはクライアント/サーバー) に OEM 運用ライセンスが含まれます。False の場合、アプリケーションはデモモードでビルドされます。このキーには OEM ライセンスが必要です。
