---
id: tls
title: TLSプロトコル (HTTPS)
---

すべての 4Dサーバーは、TLS (Transport Layer Security) プロトコルを通じて、保護モードで通信する事ができます:

- Webサーバー
- アプリケーションサーバー (クライアントサーバー・デスクトップアプリケーション）
- SQLサーバー

## 概要

TLSプロトコル (SSLプロトコルの後継版) は 2つのアプリケーション、主に Webサーバーとブラウザー間でのデータ交換を保護するために設計されています。 このプロトコルは幅広く使用されていて、多くの Webブラウザーとの互換性があります。

ネットワークレベルにおいては、TLSプロトコルは TCP/IPレイヤー (低レベル) とHTTP高レベルプロトコルとの間に挿入されます。 TLS は主に HTTP で動作するように設計されました。

TLS を用いたネットワーク設定:

![](assets/en/WebServer/tls1.png)

TLSプロトコルは、送信者と受信者を認証するために設計され、交換された情報の機密性と整合性を保証します:

*   **認証**: 送信者と受信者の ID を確認します。
*   **機密性**: 送信データを暗号化します。そのため第三者はメッセージを解読することができません。
*   **整合性**: 受信データが偶発的にまたは故意に修正されることはありません。

TLS は公開鍵暗号化技術を用います。これは、暗号化と復号化の非対称鍵のペアである公開鍵と秘密鍵に基づいています。 秘密鍵はデータを暗号化するために使用されます。 送信者 (Webサイト) は、それを誰にも渡しません。 公開鍵は情報を復号化するために使用され、証明書を通して受信者 (Webブラウザー) へ送信されます。 インターネットで TLS を使用する際、証明書は Verisign® などの認証機関を通して発行されます。 Webサイトは証明書を認証機関 から購入します。この証明書はサーバー認証を保証し、保護モードでのデータ交換を許可する公開鍵を格納しています。
> 暗号化メソッドと公開鍵および秘密鍵に関する詳細は、`ENCRYPT BLOB` コマンドの記述を参照してください。

## 最低バージョン

デフォルトで、4D でサポートされている最低限のバージョンは TLS 1.2 となります。 この値は `SET DATABASE PARAMETER` コマンドで `Min TLS version` セレクターを使用することで変更可能です。

接続時に受け入れる [最低TLSバージョン](WebServer/webServerConfig.md#最低TLSバージョン) を定義することで、Webサーバーのセキュリティレベルを制御することができます。

## 証明書の取得方法

サーバーを保護モードで起動させるには、認証機関の電子証明書が必要です。 This certificate contains various information such as the site ID as well as the public key used to communicate with the server. This certificate is transmitted to the clients (e.g. Web browsers) connecting to this server. Once the certificate has been identified and accepted, the communication is made in secured mode.
> ブラウザーは、ルート証明書がインストールされた認証機関によって発行された証明書のみを許可します。ルート証明書がインストールされていない場合、通常警告が表示されます。

![](assets/en/WebServer/tls2.png)

The certification authority is chosen according to several criteria. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive.

To get a digital certificate:

1. Generate a private key using the `GENERATE ENCRYPTION KEYPAIR` command.
> **Warning**: For security reasons, the private key should always be kept secret. Actually, it should always remain with the server machine. For the Web server, the Key.pem file must be placed in the Project folder.

2. Use the `GENERATE CERTIFICATE REQUEST` command to issue a certificate request.

3. Send the certificate request to the chosen certificate authority.<p> To fill in a certificate request, you might need to contact the certification authority. The certification authority checks that the information transmitted are correct. The certificate request is generated in a BLOB using the PKCS format encoded in base64 (PEM format). This principle allows you to copy and paste the keys as text and to send them via E-mail without modifying the key content. For example, you can save the BLOB containing the certificate request in a text document (using the `BLOB TO DOCUMENT` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.

4. Once you get your certificate, create a text file named “cert.pem” and paste the contents of the certificate into it.<p> You can receive a certificate in different ways (usually by email or HTML form). 4D accepts all platform-related text formats for certificates (OS X, PC, Linux, etc.). However, the certificate must be in PEM format, *i.e.*, PKCS encoded in base64.
> CR line-ending characters are not supported on their own; you must use CRLF or LF.

5. Place the “cert.pem” file in the [appropriate location](#installation-and-activation).

The 4D server can now work in a secured mode. A certificate is valid between 3 months to a year.

## インストールとアクティベーション

### Installing `key.pem` and `cert.pem` files

To be able to use the TLS protocol with the server, you must install the **key.pem** (document containing the private encryption key) and **cert.pem** (document containing the certificate) at the appropriate location(s). Different locations are required depending on the server on which you want to use TLS.
> Default *key.pem* and *cert.pem* files are provided with 4D. For a higher level of security, we strongly recommend that you replace these files with your own certificates.

#### With the web server

To be used by the 4D web server, the **key.pem** and **cert.pem** files must be placed:

- with 4D in local mode or 4D Server, next to the [project folder](Project/architecture.md#project-folder)
- with 4D in remote mode, in the client database folder on the remote machine (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html) command).

これらのファイルをリモートマシンに手動でコピーする必要があります。

#### With the application server (client-server desktop applications)

To be used by the 4D application server, the **key.pem** and **cert.pem** files must be placed:

- in the [**Resources** folder](Project/architecture.md#resources) of the 4D Server application
- and in the **Resources** folder on each remote 4D application (for more information about the location of this folder, see the [`Get 4D folder`](https://doc.4d.com/4dv19/help/command/en/page485.html) command).

#### With the SQL server

To be used by the 4D SQL server, the **key.pem** and **cert.pem** files must be placed next to the [project folder](Project/architecture.md#project-folder).


### Enabling TLS

The installation of **key.pem** and **cert.pem** files makes it possible to use TLS with the 4D server. However, in order for TLS connections to be accepted by the server, you must enable them:

- With the 4D web server, you must [enable HTTPS](WebServer/webServerConfig.md#enable-https). You can set the [HSTS option](WebServer/webServerConfig.md#enable-hsts) to redirect browsers trying to connect in http mode.
- With the application server, you must select the **Encrypt Client-Server Communications** option in the "Client-server/Network options" page of the Settings dialog box.
- With the SQL server, you must select the **Enable TLS** option in the "SQL" page of the Settings dialog box.

> The 4D web server also supports [HSTS option](WebServer/webServerConfig.md#enable-hsts) to declare that browsers should only interact with it via secure HTTPS connections.

## Perfect Forward Secrecy (PFS)

[PFS](https://en.wikipedia.org/wiki/Forward_secrecy) adds an additional layer of security to your communications. Rather than using pre-established exchange keys, PFS creates session keys cooperatively between the communicating parties using Diffie-Hellman (DH) algorithms. The joint manner in which the keys are constructed creates a "shared secret" which impedes outside parties from being able to compromise them.

When TLS is enabled on the server, PFS is automatically enabled. If the *dhparams.pem* file (document containing the server's DH private key) does not already exist, 4D will automatically generate it with a key size of 2048. The initial generation of this file could take several minutes. The file is placed with the [*key.pem* and *cert.pem* files](#key-pem-and-cert-pem-files).

If you use a [custom cipher list](WebServer/webServerConfig.md##cipher-list) and want to enable PFS, you must verify that it contains entries with DH or ECDH (Elliptic-curve Diffie–Hellman) algorithms.
