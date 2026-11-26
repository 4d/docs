---
id: client-server
title: クライアント/サーバー
sidebar_label: クライアント/サーバー
sidebar_position: 3
description: "クライアント/サーバーアプリケーションに関連する、CS ノードの BuildApplication XML キー。"
keywords: ["BuildApplication", "XML key", "CS", "client/server"]
---

これらのキーは [クライアント/サーバーアプリケーション](../Desktop/building.md#clientserver-page) のオプションを設定します。これらは `<CS>` ノードの下に配置されます。

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

## 概要

| キー | 値 | 説明 |
|---|---|---|
| [BuildServerApplication](#buildserverapplication) | True / False | クライアント/サーバーアプリケーションをビルドします |
| [BuildCSUpgradeable](#buildcsupgradeable) | True / False | クライアント更新用アプリケーションをビルドします |
| [IPAddress](#ipaddress) | IP アドレスまたはホスト名 | クライアントが使用するサーバーのアドレス |
| [PortNumber](#portnumber) | ポート番号 | クライアントが使用するサーバーの TCP ポート |
| [ServerSelectionAllowed](#serverselectionallowed) | True / False | 接続失敗時にサーバー選択ダイアログボックスを許可します |
| [HardLink](#hardlink) | テキスト (最大 31文字) | クライアントおよびサーバーアプリケーションの署名 |
| [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) | パス | クライアントがサーバーの TLS 証明書を検証するために使用する、信頼できる認証局のリスト |
| [CertificateDomainName](#certificatedomainname) | テキスト | サーバーの TLS 証明書の信頼できるドメイン名 |
| [CurrentVers](#currentvers) | 数値 | ビルドされるアプリケーションの現在のバージョン |
| [RangeVersMin](#rangeversmin) | 数値 | 接続を許可するクライアントの最小バージョン |
| [RangeVersMax](#rangeversmax) | 数値 | 接続を許可するクライアントの最大バージョン |
| [LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | サーバーのデータリンクモード |
| [MacCompiledDatabaseToWin](#maccompileddatabasetowin) | パス | Silicon クライアント用の macOS コンパイル済みストラクチャー |
| [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) | True / False | macOS コンパイル済みストラクチャーを Windows サーバーに含めます |
| [ServerEmbedsProjectDirectoryFile](#serverembedsprojectdirectoryfile) | True / False | プロジェクトの directory.json ファイルをサーバーにコピーします |
| [ServerDataCollection](#serverdatacollection) | True / False | サーバーでのデータ収集を有効にします |
| [ServerStructureFolderName](#serverstructurefoldername) | フォルダー名 | サーバーキャッシュフォルダーの名前 |
| [ClientServerSystemFolderName](#clientserversystemfoldername) | フォルダー名 | クライアントキャッシュフォルダーの名前 |
| [ClientUserPreferencesFolderByPath](#clientuserpreferencesfolderbypath) | True / False | クライアントのパスごとにユーザー環境設定フォルダーを分けます |
| [ClientWinSingleInstance](#clientwinsingleinstance) | True / False | Windows でクライアントのインスタンスを 1つのみ許可します |
| [ShareLocalResourcesOnWindowsClient](#sharelocalresourcesonwindowsclient) | True / False | Windows でクライアントのローカルリソースを共有フォルダーに保存します |
| [HideAdministrationMenuItem](#hideadministrationmenuitem) | True / False | サーバーの管理ウィンドウを非表示にします |
| [HideDataExplorerMenuItem](#hidedataexplorermenuitem) | True / False | サーバーのデータエクスプローラーメニュー項目を非表示にします |
| [HideRuntimeExplorerMenuItem](#hideruntimeexplorermenuitem) | True / False | サーバーのランタイムエクスプローラーメニュー項目を非表示にします |

## ビルド

### BuildServerApplication

**値**: True / False (デフォルト)

True の場合、クライアント/サーバーアプリケーションがビルドされます。4D Server のパスは [ServerWinFolder](./source-files.md#serverwinfolder) または [ServerMacFolder](./source-files.md#servermacfolder) キーを使用して設定する必要があります。

### BuildCSUpgradeable

**値**: True / False (デフォルト)

True の場合、ダウンロード可能なクライアント更新用アプリケーションが macOS および Windows 用にビルドされます。

## 接続

### IPAddress

**値**: IP アドレスまたはホスト名

サーバーのアドレスです。4D には内部的なネットワーク機構が備わっているため、このキーは必須ではありませんが、場合によっては (WAN、特定のポート番号など) 必要となります。[クライアント接続の管理](../Desktop/merged-client-connections.md) を参照してください。

アドレスは、クライアントアプリケーションの Database フォルダー内にある "EnginedServer.4Dlink" ファイルに保存されます。

### PortNumber

**値**: ポート番号 (デフォルトは 19813)

サーバーの TCP ポートです。このキーは、サーバーのポートが変更されている場合にのみ必要です。ポートは、クライアントアプリケーションの "EnginedServer.4Dlink" ファイルに保存されたアドレスに追加されます。

:::caution

このキーはクライアント側のポート番号のみを変更します。サーバー側では、アプリケーションを生成する 4D データベースのポート番号が使用されます。カスタムポートを使用するサーバーをビルドするには、[`BUILD APPLICATION`](../commands/build-application) を呼び出す前に [`SET DATABASE PARAMETER`](../commands/set-database-parameter) を使用します:

```4d
tempport:=Get database parameter(Client Server Port ID)
SET DATABASE PARAMETER(Client Server Port ID;21000)
BUILD APPLICATION("")
SET DATABASE PARAMETER(Client Server Port ID;tempport)
```

:::

### ServerSelectionAllowed

**値**: True / False

自動接続の機構が失敗したときに表示されるエラーダイアログボックスを設定します:

- **True**: ダイアログボックスからサーバー選択ウィンドウにアクセスできます。
- **False**: ダイアログボックスからサーバー選択ウィンドウにアクセスできません。

起動時に **Alt** (Windows) または **Option** (macOS) キーを押すと、常にサーバー選択ダイアログボックスが表示されます。[エラー時のサーバー選択ダイアログボックス使用の可・不可](../Desktop/merged-client-connections.md#availability-of-the-server-selection-dialog-box-in-case-of-error) を参照してください。

:::note

バイナリーデータベースでは、このキーには **アプリケーション展開に新しいアーキテクチャーを使用** 互換性オプションが必要です。

:::

### HardLink

**値**: テキスト (最大 31文字)

クライアントおよびサーバーアプリケーションの署名です。

### CertificateAuthoritiesCertificates

**値**: パス

信頼できる認証局 (CA) のリストと、サーバー証明書のドメイン名を含むファイルのパスです。このリストはクライアントアプリケーションにコピーされ、接続時に 4D Server から送信される証明書の検証に使用されます。

このキーは、クライアント/サーバーアプリケーションに独自の [TLS](../Admin/tls.md) 証明書をインストールする場合に便利です:

1. カスタムの *key.pem* および *cert.pem* ファイルを、ビルドされたサーバーアプリケーションの **Resources** フォルダー (サーバー実行ファイルの隣) にコピーします:
   - Windows: `Client Server executable/<ApplicationName> Server/Resources`
   - macOS: `Client Server executable/<ApplicationName> Server.app` (Resources フォルダーはパッケージの第1階層にあります)
2. 認証局の証明書 (通常は認証局自身から提供されます) を PEM 形式の信頼できる CA のリストに追加し、このリストのパスを **CertificateAuthoritiesCertificates** キーに渡します。

   リストは 1つ以上の証明書を含むテキストファイルで、各証明書の前にはタイトルを付けることもできます。たとえば、ルート CA と中間 CA がある場合は次のようになります (証明書の内容は省略しています):

   ```text title="信頼できる CA のリスト (PEM)"
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

詳細については、[こちらのブログ記事](https://blog.4d.com/encryption-authentication-certificate-authority-validation) を参照してください。

### CertificateDomainName

**値**: テキスト (セミコロン区切りのドメイン名のリスト)

接続時に 4D Server から送信される証明書について、信頼できるドメイン名のリストです。クライアントアプリケーションは、[CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) で証明書の認証局を検証した後、このリストを使用して証明書のドメイン名をチェックします (事前に CA の検証をおこなわないと、ドメイン名はチェックできません)。

## バージョン

接続を許可するクライアントのバージョンは、以下のキーを使用してサーバーによってチェックされます。[現在のバージョン](../Desktop/building.md#current-version) を参照してください。

### CurrentVers

**値**: バージョン番号

ビルドされるアプリケーションの現在のバージョン番号です。[RangeVersMin](#rangeversmin) および [RangeVersMax](#rangeversmax) が使用されていない場合、この番号は情報としてのみ使用されます。使用されている場合、サーバーはこの番号を読み取り、クライアントが許可された範囲内にあるかどうかをチェックします。

### RangeVersMin

**値**: バージョン番号

クライアントの最小バージョンです (例: 2)。これより前のバージョンのクライアントには、更新が促されます。[RangeVersMax](#rangeversmax) および [CurrentVers](#currentvers) と組み合わせて使用します。

### RangeVersMax

**値**: バージョン番号

クライアントの最大バージョンです (例: 3)。これより後のバージョンのクライアントには、更新が促されます。[RangeVersMin](#rangeversmin) および [CurrentVers](#currentvers) と組み合わせて使用します。

## サーバー

### LastDataPathLookup

サーバーアプリケーションの [データリンクモード](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) を定義します:

| 値 | データファイルパスの検索 | データファイルパスの保存先 |
|---|---|---|
| InDbStruct | ストラクチャーファイルに保存されたパス | ストラクチャーファイル内 (以前の動作) |
| ByAppName | *LastDataPath.xml* 内の最新のエントリー | ユーザー環境設定 |
| ByAppPath | *executablePath* がアプリケーションのパスに合致するエントリー | ユーザー環境設定 |

シングルユーザーアプリケーションにも同じキーが存在します: [RuntimeVL/LastDataPathLookup](./runtime-vl.md#lastdatapathlookup)。

### MacCompiledDatabaseToWin

**値**: パス

macOS 上で Silicon および Intel 用にコンパイルされたストラクチャーを格納しているフォルダーのパスです。[MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) と組み合わせて使用し、Windows 上でビルドされたサーバーに [Silicon Mac クライアントからの接続を許可](../Desktop/building.md#allow-connection-of-silicon-mac-clients) します。

### MacCompiledDatabaseToWinIncludeIt

**値**: True / False (デフォルト)

Windows 上でサーバーをビルドする際、True の場合、[MacCompiledDatabaseToWin](#maccompileddatabasetowin) で指定された macOS 上でコンパイルされたストラクチャーがサーバーに含まれます。

### ServerEmbedsProjectDirectoryFile

**値**: True / False (デフォルト)

True の場合、プロジェクトのユーザー設定フォルダーにある [directory.json](../Users/handling_users_groups.md#directoryjson-file) ファイルが、ビルドされたサーバーのユーザー設定フォルダーにコピーされます。[ビルドしたサーバーアプリケーションにプロジェクトのユーザーとグループを埋め込む](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) を参照してください。

### ServerDataCollection

**値**: True (デフォルト) / False

False の場合、ビルドされたサーバーでは [自動データ収集](../Admin/data-collect.md) が無効になります。

### ServerStructureFolderName

**値**: フォルダー名

組み込みアプリケーションフォルダー内の Active 4D Folder に作成される、サーバーキャッシュフォルダーのカスタム名です。デフォルトでは、組み込みアプリケーションの名前が使用されます。名前は OS のフォルダー名の規則に従う必要があります。[サーバーキャッシュフォルダー](../Desktop/building.md#server-cache-folder) を参照してください。

```xml
<CS>
  <ServerStructureFolderName>MyCache_v1</ServerStructureFolderName>
</CS>
```

### HideAdministrationMenuItem

**値**: True / False (デフォルト)

True の場合、ビルドされたサーバーでは:

- **ウィンドウ** メニューから **管理** 項目が削除されます。
- 起動時に管理ウィンドウが表示されません ([`OPEN ADMINISTRATION WINDOW`](../commands/open-administration-window) を使用すれば表示できます)。

### HideDataExplorerMenuItem

**値**: True / False (デフォルト)

True の場合、ビルドされたサーバーから **データエクスプローラー** メニュー項目が削除されます。

### HideRuntimeExplorerMenuItem

**値**: True / False (デフォルト)

True の場合、ビルドされたサーバーから **ランタイムエクスプローラー** メニュー項目とそのショートカット (macOS では Cmd+Shift+F9、Windows では Ctrl+Shift+F9) が削除されます。

## クライアント

### ClientServerSystemFolderName

**値**: フォルダー名

組み込みクライアントのローカルキャッシュフォルダー ([`Get 4D folder`](../commands/get-4d-folder)`(4D Client database folder)` が返すフォルダー) のカスタム名です。デフォルトでは、名前はアプリケーションとサーバーの情報から作成されます。名前は OS のフォルダー名の規則に従う必要があります。[クライアントキャッシュフォルダー](../Desktop/building.md#client-cache-folder) を参照してください。

### ClientUserPreferencesFolderByPath

**値**: True / False (デフォルト)

同じマシン上にある同じ名前の複数の組み込みクライアントが、それぞれ異なるサーバーに接続する場合に便利です。True の場合、各クライアントのユーザー環境設定フォルダー名の末尾に、クライアントのフルパスから算出された 3桁のハッシュが付加されるため、各クライアントが専用のフォルダーを持つことになります:

- **macOS**: `/Users/{UserAccount}/Library/Application Support/{ApplicationName} Client_{hash}`
- **Windows**: `\Users\{UserAccount}\AppData\Roaming\{ApplicationName}_{hash}`

この場合、[`Folder`](../commands/folder)`(fk user preferences folder)` および [`Get 4D folder`](../commands/get-4d-folder)`(Active 4D Folder)` は、ハッシュ付きのパスを返します。

:::note

バイナリーデータベースでは、このキーには **アプリケーション展開に新しいアーキテクチャーを使用** 互換性オプションが必要です。

:::

### ClientWinSingleInstance

**値**: True (デフォルト) / False

Windows では、デフォルトで同じセッション内に開けるクライアントアプリケーションのインスタンスは 1つのみです。複数のインスタンスを許可するには、このキーを False に設定します:

```xml
<CS>
  <ClientWinSingleInstance>False</ClientWinSingleInstance>
</CS>
```

### ShareLocalResourcesOnWindowsClient

**値**: True / False (デフォルト)

Windows の組み込みクライアントが、サーバーからダウンロードした *ローカルリソース* (.4dz ファイル、Libraries フォルダー、Resources フォルダーなど) を保存する場所を定義します:

- **False**: ユーザーフォルダー内 `\Users\{UserAccount}\AppData\Local\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`
- **True**: 共有フォルダー内 `\ProgramData\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`

共有フォルダーを使用すると、リモートデスクトップサービスや Citrix 環境において、ダウンロード時間とディスク容量を節約できます。このキーは、プロジェクトにおいて、Windows 上の組み込みクライアントに対してのみ考慮されます。

このキーが True の場合、クライアントの更新には ProgramData フォルダーへの読み書きアクセス権が必要です。管理者は以下の手順をおこなう必要があります:

1. すべてのユーザーを切断し、組み込みクライアントへのアクセスを禁止します。
2. 組み込みサーバーを更新します。
3. リモートデスクトップサーバーの管理者セッションで組み込みクライアントを起動し、(自動または手動で) 更新させて、ローカルリソースを共有フォルダーにダウンロードさせます。
4. 組み込みクライアントへのユーザーアクセスを復元します。

これにより、共有ローカルリソースへの同時書き込みや、アクセス権のエラーを防ぐことができます。
