---
id: tls
title: TLSプロトコル (HTTPS)
---

すべての 4Dサーバーは、TLS (Transport Layer Security) プロトコルを通じて、保護モードで通信する事ができます:

- HTTPサーバー
- アプリケーションサーバー (クライアントサーバー・デスクトップアプリケーション)
- SQLサーバー

さらに、4D HTTPクライアント (`HTTP get` コマンドなど) も TLSプロトコルもサポートしています。

## 概要

TLSプロトコル (SSLプロトコルの後継版) は 2つのアプリケーション、主に Webサーバーとブラウザー間でのデータ交換を保護するために設計されています。 このプロトコルは幅広く使用されていて、多くの Webブラウザーとの互換性があります。

ネットワークレベルにおいては、TLSプロトコルは TCP/IPレイヤー (低レベル) とHTTP高レベルプロトコルとの間に挿入されます。 TLS は主に HTTP で動作するように設計されました。

TLS を用いたネットワーク設定:

![](../assets/en/WebServer/tls1.png)

TLSプロトコルは、送信者と受信者を認証するために設計され、交換された情報の機密性と整合性を保証します:

- **認証**: 送信者と受信者の ID を確認します。
- **機密性**: 送信データを暗号化します。そのため第三者はメッセージを解読することができません。
- **整合性**: 受信データが偶発的にまたは故意に修正されることはありません。

TLS は公開鍵暗号化技術を用います。これは、暗号化と復号化の非対称鍵のペアである公開鍵と秘密鍵に基づいています。 秘密鍵はデータを暗号化するために使用されます。 送信者 (Webサイト) は、それを誰にも渡しません。

公開鍵は情報を復号化するために使用され、**証明書** を通して受信者 (Webブラウザー) へ送信されます。 The certificate is delivered through a Certification Authority. The website pays the certificate provider to deliver a certificate which guaranties the server authentication and contains the public key allowing to exchange data in a secured mode.

:::note

Web browsers authorize only the certificates issued by a Certification Authority referenced in their properties.

:::



## 最低バージョン

By default, the minimum version of the secured protocol accepted by the 4D servers is TLS 1.3. この値は `SET DATABASE PARAMETER` コマンドで `Min TLS version` セレクターを使用することで変更可能です。

:::note

You can control separately the [minimum TLS version](WebServer/webServerConfig.md#minimum-tls-version) for **webServer objects**.

:::



## Enabling TLS with the HTTP server

To be able to use the TLS protocol with the 4D HTTP server, you have to:

1. Get your certificate files.
2. Install your certificate files at the appropriate location(s)
3. Enable TLS.

### 証明書

#### 形式

4D が管理する TLS証明書は **PEM形式** でなければなりません。 If your certificate provider sends you a certificate that is in a binary format such as .crt, .pfx or .p12, you have to convert it to PEM format in order to be able to use it. There are web sites where you can do this conversion on-line.

#### 暗号化

4D は以下の標準的な暗号化形式の証明書をサポートしています:

- [**RSA**](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
- [**ECDSA**](https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9ADSA)

:::info 互換性

ECDSA形式は、4D の [Legacyネットワークレイヤー](../settings/client-server.md#ネットワークレイヤー) ではサポートされていません。

:::

:::note

4D では、RSA証明書のリクエストに役立つ 2つのコマンドを用意しています ([後述のチュートリアル参照](#rsa証明書の取得方法-チュートリアル))。

:::

### Installing certificate files

Certificate files include:

- **key.pem**: a document containing the private encryption key,
- **cert.pem**: a document containing the certificate.

Both **key.pem** and **cert.pem** files must be located:

- with 4D Server or 4D in local mode, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv20/help/command/en/page485.html) command). You must copy these files manually on the remote machine.

### TLSを有効にする

For TLS connections to be accepted by the HTTP server, you must enable HTTPS. Refer to the [**Enable HTTPS**](WebServer/webServerConfig.md#enable-https) paragraph to know the different ways to enable TLS for the HTTP server.

:::note

4D Webサーバーは、セキュアな HTTPS接続のみを許可するとブラウザーに対して宣言するための [HSTSオプション](WebServer/webServerConfig.md#hstsを有効にする) をサポートしています。

:::


### Perfect Forward Secrecy (PFS)

[PFS](https://ja.wikipedia.org/wiki/Forward_secrecy) は通信の中に新たなレイヤーのセキュリティを追加します。 事前準備された交換鍵を使用する代わりに、PFS は Diffie-Hellman (DH) アルゴリズムを用いて通信相手同士で協同的にセッションキーを作成します。 このように協同で鍵を作成することで "共有の秘密" が作成され、外部への漏洩を防ぐことができます。

サーバー上で TLS が有効化されているとき、PFS は自動的に有効されます。 *dhparams.pem* ファイル (サーバーの DH非公開鍵を含むドキュメント) がまだ存在していない場合、4D は 2048 の鍵サイズで自動的にそれを生成します。 このファイルの生成には数分間かかる可能性があります。 The file is placed with the [*key.pem* and *cert.pem* files](#installing-certificate-files).

[カスタムの暗号リスト](WebServer/webServerConfig.md#暗号リスト) を使用していて、PFS を有効化したい場合、DH あるいは ECDH (Elliptic-curve Diffie–Hellman) アルゴリズムのエントリーがそのリストに含まれている必要があります。



## Enabling TLS with the other servers

To use TLS with the 4D application server (client-server desktop applications) or the SQL server, you only have to enable TLS communications and the server automatically configures the connections at startup.

- With the application server, select the **Encrypt Client-Server Communications** option in the ["Client-server/Network options" page of the Settings dialog box](../settings/client-server#encrypt-client-server-communications).
- With the SQL server, select the **Enable TLS** option in the ["SQL" page of the Settings dialog box](../settings/sql#sql-server-publishing).




## RSA証明書の取得方法 (チュートリアル)

サーバーを保護モードで起動させるには、認証機関の電子証明書が必要です。 この証明書には、サイトID や、サーバーとの通信に使用する公開鍵など、様々な情報が格納されます。 そのサーバーに接続した際に、証明書がクライアント (例: Webブラウザー) へ送られます。 証明書が識別され受け入れられると、保護モードで通信が開始されます。
> ブラウザーは、ルート証明書がインストールされた認証機関によって発行された証明書のみを許可します。ルート証明書がインストールされていない場合、通常警告が表示されます。

![](../assets/en/WebServer/tls2.png)

認証機関は複数の条件によって選択されます。 認証機関が一般によく知られていると、証明書は多くのブラウザーによって許可されます。ただし、費用は高くなるかもしれません。

デジタル証明書の取得:

1. `GENERATE ENCRYPTION KEYPAIR` コマンドを使用して、秘密鍵を作成します。
> **警告**: セキュリティ上の理由により、秘密鍵は常に機密でなければなりません。 実際、秘密鍵は常にサーバーマシンと一緒に存在しているべきです。 Webサーバーの場合、Key.pem ファイルは Projectフォルダーに保存されていなければなりません。

2. 証明書のリクエストを発行するために `GENERATE CERTIFICATE REQUEST` コマンドを使用します。

3. その証明書リクエストを選択された認証機関へ送ります。 証明書リクエストを記入する際、認証機関への問い合わせが必要となる場合があります。 認証機関は送信されてきた情報が正確なものかを確認します。 その証明書リクエストは base64 で暗号化された PKCSフォーマット (PEMフォーマット) を用いて BLOB に作成さ れます。 この原理を使用すると、テキストとしてキーをコピー＆ペーストできます。キーの内容を修正せずに認証機関に提出します。 たとえば、テキストドキュメントに証明書リクエストを含んでいる BLOB を保存します (`BLOB TO DOCUMENT` コマンドを使用)。そして、コンテンツを開き、それをコピーして、認証機関へ送信するメールまたは Webフォームにペーストします。

4. 証明書を取得したら、"cert.pem" という名前でテキストファイルを作成し、その証明書の内容をそのファイルへコピーします。 証明書は様々な方法で受け取ることができます (通常は Eメールまたは HTML形式で受け取ります)。 4D は証明書に関しては全プラットフォームに関連したテキストフォーマットを受け付けます (OS X、Windows、Linux、等)。 However, the certificate must be in [PEM format](#format), *i.e.*, PKCS encoded in base64.
> CR改行コードは、それ単体ではサポートされていません。改行コードは CRLF または LF を使用してください。

5. Place the “cert.pem” file in the [appropriate location](#installing-certificate-files).

4Dサーバーが保護モードで動作するようになります。 A certificate is usually valid between 3 months to a year.
