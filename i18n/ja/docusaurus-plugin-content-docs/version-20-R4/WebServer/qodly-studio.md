---
id: qodly-studio
title: Qodly Studio in 4D
---

:::caution デベロッパー・プレビュー

4D の Qodly Studio は現在、**デベロッパー・プレビュー** の段階です。 本番環境で使用すべきではありません。

:::

**Qodly Studio** は Webアプリケーション用のインターフェースビルダーです。 Webブラウザーやスマートフォンで動作するアプリケーションを設計するためのグラフィカルなフォームエディターをデベロッパーに提供します。 Qodly Studio は [ORDAオブジェクト](../ORDA/overview.md) をネイティブにサポートします。

**4D環境** から直接 Qodly Studio を使用して、モダンで洗練されたインターフェースをビルドし、既存の 4Dプロジェクトに簡単に統合して、**オンプレミス** で運用することができます。

Qodly Studioは、Webビジネスアプリケーションの開発に特化した [**Qodly Cloud Platform**](https://qodly.com) でも使用できます。

Qodly Studio では、全く新しい WebUI を使い、データソースの概念に慣れ、次の操作を学ぶことができます:

- ページ上にコンポーネントを配置して Qodlyフォームを作成する
- コンポーネントをデータにマッピングする
- イベントを設定して 4Dコードをトリガーする
- さらに沢山のことが可能です

:::info

4D で Qodly Studio を使って開発するには、シルバー以上の [4Dパートナーライセンス](https://jp.4d.com/4d-partner-program) が必要です。 ライセンスが有効化されていない場合、Qodly Studio に関するオプションやメニュー項目は表示されません。

:::

## 設定

### 要件

#### ブラウザー

Qodly Studio は、以下の Webブラウザーをサポートしています:

- Chrome
- Edge
- FireFox

推奨解像度は 1920x1080 です。

#### 4Dアプリケーション

- 開発: 4D v20 R2 以上
- 運用: 4D Server v20 R2 以上
- Qodly Studio は 4Dプロジェクトでのみ動作します (バイナリデータベースはサポートされていません)。

### Qodly Studio へのアクセスを有効化する

デフォルトでは、Qodly Studio へのアクセスは許可されていません。

Qodly Studioは、[WebAdmin Webサーバー](../Admin/webAdmin.md) によって提供され、表示される 4Dプロジェクトのデータは [4D Webサーバー](webServer.md) によって処理されます。

Qodly Studio へのアクセスを有効化するには、2つのレベルで明示的に許可する必要があります:

- 4Dレベルで (4D または 4D Server)
- プロジェクトレベルで

2つのレベルのいずれか (または両方) が有効でない場合、Qodly Studio　へのアクセスは拒否されます (403ページが返されます)。

#### 4Dレベルで

最初のセキュリティレベルとして、[WebAdmin Webサーバーで Qodly Studio へのアクセスを許可](../Admin/webAdmin.md#qodly-studio-へのアクセスを有効化する) する必要があります。 この設定は、ホストマシンの 4Dアプリケーション (4D または 4D Server) が対象となります。 つまり、その 4Dアプリケーションで開くすべてのプロジェクトで、この設定が適用されます。

アプリケーション上で Qodly Studio へのアクセスを許可しない場合は、このオプションをオフにします。 このオプションにチェックを入れると、Qodly Studio にアクセスできるようになります。 さらに、各プロジェクトのレベルでも許可が必要です。

さらに、[WebAdmin Webサーバーの HTTP/HTTPS ポートを設定](../Admin/webAdmin.md#ローカルホストでhttp接続を受け入れる) することもできます。

:::note

これらの設定を変更した後、新しい設定を有効にするには、[WebAdmin Web サーバー](../Admin/webAdmin.md#開始と停止) を再起動する必要があります。

:::

#### プロジェクトレベルで

4Dレベルで Qodly Studio へのアクセスを有効にした後、アクセスできるプロジェクトをそれぞれ明示的に指定する必要があります。 **Qodly Studio へのアクセスを有効化する** オプションは、[プロジェクト設定の Web機能ページ](../settings/web.md#qodly-studio-へのアクセスを有効化する) で有効にする必要があります。

[ユーザー設定](../settings/overview.md) はいくつかのレベルで定義でき、優先順位が適用されることに留意してください。

### 認証を有効化する

WebAdmin Webサーバーでの認証には、アクセスキーを使用します。 詳しくは、[アクセスキー](../Admin/webAdmin.md#アクセスキー) を参照ください。

### プロジェクト管理

4Dプロジェクトの管理上、以下の使用法のみがサポートされます:

- Qodly Studio での開発は **4D** (シングルユーザー) でおこなう必要があります。
- Qodlyフォームを利用した 4Dアプリケーションの運用は、**4D Server** でおこなう必要があります。

## Qodly Studio を開く

Qodly Studio ページは、[WebAdmin Webサーバーが起動されており](../Admin/webAdmin.md#開始と停止)、認証が有効化されている場合に使用できます (上述参照)。

Qodly Studio にアクセスするには 2つの方法があります:

- 4Dシングルユーザーアプリケーションから、**デザイン** > **Qodly Studio...** を選択します。
  WebAdmin Webサーバーがすでに起動されている場合は、その設定に応じて、デフォルトのブラウザーが `IPaddress:HTTPPort/studio` または `IPaddress:HTTPSPort/studio` を開きます。 それ以外の場合は、最初に WebAdmin Webサーバーを起動するかどうかを尋ねるメッセージが表示されます。

- 4D または 4D Server から WebAdmin Webサーバーが起動されている状態で、ブラウザーに次のアドレスを入力します:

`IPaddress:HTTPPort/studio`

または:

`IPaddress:HTTPSPort/studio`

たとえば、ポート7080 でローカルWebサーバーを起動した後、ブラウザーに次のアドレスを入力します:

`localhost:7080/studio`

すると、Qodly Studio にアクセスするための [アクセスキー](../Admin/webAdmin.md#アクセスキー) の入力を求められます。

## Qodly Studio を使う

### ドキュメント

公式の Qodly Studio ドキュメントは、[Qodly ドキュメント Webサイト](https://developer.qodly.com/docs/studio/overview) から入手できます。

Qodlyフォームを利用した Webアプリケーションを開発するには、このドキュメントとその関連リソースを参照ください。 ただし、実装の段階に応じて、4Dデベロッパーは Qodly Studio または 4D IDE を使用します ([機能の比較](#機能の比較) 参照)。

コードの例は [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) で提供されていますが、QodlyScript は 4Dランゲージから継承しているため、困ることはありません。 詳細については、[QodlyScript から 4Dランゲージへ](#qodlyscript-から-4dランゲージへ) を参照ください。

:::info

4D で実装されたアプリと Qodly で実装されたアプリの間に直接の互換性はありません。

:::

### 機能の比較

|                                                                               | 4D IDE を使用する 4Dデベロッパー向けの Qodly Studio                                                                 | Qodlyデベロッパー向けの Qodly Studio                                                                     |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| テーブル (データクラス)、フィールド (属性)、リレーションの表示および編集 | 4Dストラクチャーエディター(1)                                                                  | Qodly Studio Model Editor                                                                       |
| Qodlyフォーム                                                                     | Qodly Studio Webform Editor                                                                           | Qodly Studio Webform Editor                                                                     |
| デスクトップフォーム                                                                    | 4D IDE                                                                                                | _サポートされていません_                                                                                   |
| プログラミング言語                                                                     | 4Dランゲージ (ORDA を使用)                                                                 | [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) (ORDA含) |
| コーディング IDE                                                                    | 4D IDE コードエディター / VS Code と [4D拡張機能](https://github.com/4d/4D-Analyzer-VSCode) (2) | Qodly Studio コードエディター                                                                           |
| デバッガー                                                                         | 4D IDE デバッガー                                                                                          | Qodly Studio デバッガー                                                                              |
| REST/Web ロールとアクセス権                                                            | roles.json の直接編集 / Qodly Studio ロールとアクセス権エディター                                                        | Qodly Studio ロールとアクセス権エディター                                                                     |

(1) Qodly Studio で **Model** ボタンをクリックしても、何も起こりません。
(2) Qodly Studio で 4Dコードを開くと、シンタックスの配色がサポートされておらず、"Lsp not loaded" という警告が表示されます。

### ランゲージ

以下のコマンドとクラスは、Qodlyフォームのサーバーサイド管理に特化しています:

- [`Web Form`](../API/WebFormClass.md#web-form) コマンド: Qodlyフォームをオブジェクトとして返します。
- [`Web Event`](../API/WebFormClass.md#web-event) コマンド: Qodlyフォームのコンポーネント内でトリガーされたイベントを返します。
- [`WebForm`](../API/WebFormClass.md) クラス: レンダリングされた Qodlyフォームを管理する関数とプロパティを持ちます。
- [`WebFormItem`](../API/WebFormItemClass.md) クラス: Qodlyフォームのコンポーネントを管理する関数とプロパティを持ちます。

### プロジェクトメソッドを使用する

推奨される方法は、プロジェクトメソッドではなく、クラス関数を使用することです。 コンポーネントから呼び出すことが可能なのは、クラス関数のみです。 それでも、次の 2つの方法で、Qodly Studio でもプロジェクトメソッドを使用できます:

- クラス関数からメソッドを呼び出すことができます。
- Qodly Explorer から直接 [メソッドを実行](https://developer.qodly.com/docs/studio/coding#methods-and-classes) できます。

### オフラインでの使用

コンピュータがインターネットに接続されていない状態でも、Qodly Studio を使って開発することができます。 ただしこの場合、以下の機能は使用できません:

- [テンプレート](https://developer.qodly.com/docs/studio/design-webforms/templates): テンプレートライブラリは空です。
- UI Tips: ![alt-text](../assets/en/WebServer/tips.png)アイコンをクリックしても表示されません。

## 運用

### レンダリングを有効化する

Qodly Studio は Qodlyフォームを (含まれるレイアウト、データの紐付け、イベント駆動ロジック情報とともに) 構造化された JSONファイルにカプセル化します。 この JSONファイルは **Qodly レンダラー** によって即座に処理され、完全に機能する Webページを提供します。

:::info

Qodly で Qodlyフォームをレンダリングする方法の詳細については [このページ](https://developer.qodly.com/docs/studio/rendering) を参照ください。

:::

Qodlyフォームのレンダリングを有効にするには、以下のオプションを設定する必要があります。

- 4Dプロジェクトの **設定** > **Web** > **Web機能** > [**RESTサーバーとして公開**](../settings/web.md#restサーバーとして公開) オプションを有効にする必要があります。
- [4D Webサーバー](webServer.md) を起動しておく必要があります。

:::note

設定オプションが有効になっていない場合、[レンダラー ボタン](https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform) は使用できません。

:::

### Qodlyフォームのスコープ

Qodly Studio で Qodlyフォームをレンダリングする際、レンダラーは設定により、[4D WebAdmin Webサーバー](../Admin/webAdmin.md#ローカルホストでhttp接続を受け入れる) と同じ HTTP/HTTPS 接続パターンに従って、HTTP または HTTPS で 4D Webサーバーに接続します。 URLスキームとライセンスの使い方については、[この段落](#ライセンスの使用について) も参照ください。

Qodly Studio は、4D WebAdmin Webサーバーを通して動作することに留意してください。 デベロッパーとして Qodly Studio を使用する場合、Qodlyフォームをプレビューするには、4D WebAdmin Webサーバーを使用することになります。 これにより、たとえば RESTリソースとして公開されていないデータクラス、関数、属性を (グレーアウトされた状態で) 見ることができます。

しかし、実際のフォームのレンダリングは Qodly Studio の外でおこなわれ、標準の 4D Webサーバーによって処理されます。 このような状況では、Webアプリケーションは RESTリソースとして公開されていないデータにアクセスできません。 [公開vs非公開関数](../ORDA/ordaClasses.md#公開vs非公開関数) および [テーブルの公開](../REST/configuration.md#テーブルの公開) を参照ください。

### Qodlyフォームへのアクセス

運用には、WebAdminサーバーは必要ありません。 Qodly Studio で作成された Webアプリケーションへのエンドユーザーアクセスは、4D RESTプロトコルに基づいているため、従来の 4Dリモートアプリケーションと同様に動作します。

Qodlyフォームは以下の URL からダウンロードできます:

```
IP:port/$lib/renderer/?w=QodlyFormName
```

_IP:port_ は Webサーバーのアドレスを表し、_QodlyFormName_ は Qodlyフォームの名前です。

例:

```
https://www.myWebSite.com/$lib/renderer/?w=welcome
```

## ライセンスの使用について

Qodlyフォームをレンダリングするには、プロジェクトデータベースのメインの Webサーバーでセッションが開かれるため、使用可能なライセンスが必要です。

### URLスキーム

Qodly Studio の URLスキーム設定 (HTTP および HTTPS) によって、Qodlyフォームのレンダリング時に使用されるライセンスの数が決まります。 適切な設定により、不要なライセンスの使用を回避できます。

[設定](#設定) セクションで説明したように、WebAdmin Webサーバーは Qodly Studio へのセキュアな Webアクセスを提供します。 一方、[レンダラー](#レンダリングを有効化する) は RESTリクエストを使用してデータベースの 4D Webサーバーと通信します。 そのため、従来の 4Dクライアントと同じように動作します。 そのため、従来の 4Dクライアントと同じように動作します。

Qodly Studio からレンダラーを実行する際、これら 2つの Webサーバーに同じ URLスキーム (HTTP または HTTPS) 経由でアクセスしていない場合には、ライセンスのカウントが正しくおこなわれない可能性があります。

#### 例題

1. Qodly Studio を HTTPS URLスキームで実行します (例: `https://127.0.0.1:7443/studio/`)

2. データベースの Webサーバーは HTTPポート上でのみ起動します。

![alt-text](../assets/en/WebServer/schemes.png)

3. Qodly Studioで、**Preview** アイコンをクリックします。 2つの Webサーバーが異なるスキームで起動されていることを警告されますが、それにもかかわらず、**Confirm** ボタンをクリックします。

![alt-text](../assets/en/WebServer/render-button.png)

結果、2つのライセンスが使用されます。

:::note

Qodly Studio のユーザー設定で、レンダラーのポップオーバーについて表示/非表示を切り替えることができます。

:::

### SameSite 属性

先に説明したふるまいは、4D Webサーバーのセッションcookie によるものです。 このセッションcookie には、`SameSite` 属性があり、セッションcookie が Webサーバーに送信されるかどうかを決定します。

`SameSite` 属性の値が `Strict` (デフォルト) の場合、セッションcookie は Webサーバーに送信されないため、ページが表示されたり更新されたりするたびに新しいセッションが開かれます。

`SameSite` 属性の詳細については、[このブログ記事](https://blog.4d.com/ja/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/) を参照ください。

### 推奨事項

必要以上のライセンスを使用しないため、次のいずれかをお勧めします:

- 別のブラウザータブでレンダラーを実行します (Qodlyフォームがレンダリングされた URL `IP:port/$lib/renderer/?w=QodlyFormName` を入力します)。
- Qodly Studio とデータベースが同じ URLスキームでアクセスされていることを確認します。
- プロジェクトデータベースの Webサーバーの [セッションcookie](webServerConfig.md#セッションcookie-samesite) には、`Lax` の値を使用してください。

## Hello, World

この 5分間のビデオでは "Hello World" の例を説明します。まず、Qodly Studio へのアクセスを有効にし、基本的なインターフェースを作成して、ユーザー名を使って挨拶をするイベントを設定します。

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
