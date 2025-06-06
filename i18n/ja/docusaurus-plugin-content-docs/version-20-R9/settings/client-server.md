---
id: client-server
title: クライアント-サーバーページ
---

クライアント/サーバーページには、クライアント/サーバーモードでデータベースを使用する際に使用されるパラメーターが集められています。 これらの設定は、リモートモードでデータベースが使用されるときにのみ使用されます。

## ネットワークオプションページ

### ネットワーク

#### 起動時にデータベースを公開する

このオプションを使用して、起動された 4D Server データベースが公開データベースのリストに表示されるかどうかを指定できます。

- このオプションが選択されていると (デフォルト)、データベースは公開され、公開データベースの一覧に表示されます (リモート4D の **利用可能**タブ)。
- このオプションがチェックされていないと、データベースは公開されず、公開データベースの一覧に表示されません。 接続するには、接続ダイアログボックスの **カスタム** タブにデータベースのアドレスを手入力しなければなりません。

:::note

この設定を変更した場合、変更を反映するためサーバデータベースを再起動する必要があります。

:::

#### 公開名

This option lets you change the publication name of a 4D Server database, *i.e.*, the name displayed on the dynamic **Available** tab of the connection dialog box (see the [Opening a remote project](../Desktop/clientServer.md#opening-a-remote-project) paragraph). デフォルトで 4D Server はプロジェクトファイル名を使用します。 これを好きな名前に変更できます。

:::note

このパラメーターはカスタムのクライアント-サーバーアプリケーションでは使用されません。 クライアントアプリケーションは接続ダイアログを経由せずにサーバーに直接接続します。 しかしエラーが発生すると、このダイアログが表示されます。この場合、サーバーアプリケーションの公開名はコンパイルされたプロジェクトの名前です。

:::

#### ポート番号

このオプションで、4D Server がデータベースを公開する TCPポート番号を変更できます。 この情報は、プロジェクト及び各クライアントマシンに格納されます。 4D Server とリモートモードの 4D が使用するデフォルトの TCPポート番号は 19813 です。

TCPプロトコルを使用して、1台のマシン上で複数の 4Dアプリケーションを同時に使用したい場合にこの値の変更が必要です。この場合、アプリケーションごとに異なるポート番号を割り当てなければなりません。
4D Server または 4D からこの値を変更すると、データベースに接続しているすべての 4Dマシンに変更が通知されます。

接続していないクライアントを更新するには、次回の接続時に接続ダイアログボックスの **カスタム** ページにて、サーバーマシンの IPアドレスに続けてコロン、そして新しいポート番号を入力します。 たとえば、新しいポート番号が 19888 あるとき:

![](../assets/en/settings/client-server-network.png)

> 4Dクライアントと同じポート番号で公開されているデータベースだけが、接続ダイアログの利用可能ページに表示されます。

#### 4D Server とポート番号

4D Server は 3つの TCPポートを使用して、内部サーバーとクライアントの通信をおこないます:

- **SQLサーバー**: デフォルトで 19812 (設定の "SQL" ページで変更可)。
- **アプリケーションサーバー**: デフォルトで 19813 (設定の "クライアント-サーバー" ページで変更可)。
- **DB4Dサーバー** (データベースサーバー): デフォルトで 19814。 このポート番号は直接変更できませんが、常にアプリケーションサーバーのポート番号+1 です。\ 4Dクライアントが 4D Server に接続するとき、アプリケーションサーバーのポート番号 (19813 または接続ダイアログボックスの IPアドレス欄でコロンの後ろに指定された番号) を使用して接続します。 その後の、それぞれ対応するポートを介した他のサーバーへの接続は自動です。再度ポート番号を指定する必要はありません。\ ルーターやファイアウォール越しに接続する場合には、この 3つのポートを明示的に開く必要があります。
- [**リモートデバッガー**](../Debugging/debugging-remote.md): デフォルトで 19815。 このポート番号は直接変更できませんが、常にアプリケーションサーバーのポート番号+2 です。

#### ドメインサーバーによるユーザーの認証

このオプションは Windows上の 4D Server データベースにおいて SSO (*Single Sign On*) 機能の実装を可能にします。 このオプションを有効にすると、4D はバックグラウンドで Windows ドメインサーバーの Active Directory に接続し、提供されている認証トークンを取得します。 This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20/4D/20/Single-Sign-On-SSO-on-Windows.300-6330537.en.html) section.

#### サービスプリンシパル名 (SPN)

Single Sign On (SSO) が有効になっている場合 (上述参照)、認証プロトコルにケルベロスを使用するには、このフィールドを設定する必要があります。 This option is described in the [Single Sign On (SSO) on Windows](https://doc.4d.com/4Dv20/4D/20/Single-Sign-On-SSO-on-Windows.300-6330537.en.html) section.

#### ネットワークレイヤー

ここでは、ドロップダウンメニューにて 3つのネットワークオプションから選択できます: **Legacy**、**ServerNet** 、**QUIC** (プロジェクトモードのみ)。ネットワークレイヤーは、4D Server とリモートの 4Dマシン (クライアント) 間の通信を管理するのに使用されます。

- **旧式**: v15以前に作成されたデータベースとの互換性を確保するため、この旧式ネットワークレイヤーは引き続きサポートされています。 This network layer can also be enabled by programming using the [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) command.
- **ServerNet** (デフォルト): サーバーの ServerNet ネットワークレイヤーを有効にします (4D 15 以降で利用可能)。
- **QUIC** (プロジェクトモードでのみ利用可能): サーバー上で QUICネットワークレイヤーを有効にします。

    **注**:

    - Selecting this option overrides the Use legacy network layer option in case it has been set using the [SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md) command.
    - You can know if a 4D application is running with a QUIC network layer using the [Application info](../commands-legacy/application-info.md) command.
    - QUIC は UDPプロトコルを使用するため、ネットワークのセキュリティ設定で UDP が許可されている必要があります。
    - アプリケーションサーバーと DB4Dサーバーの両方で、QUIC は自動的にポート19813 に接続します。
    - QUICレイヤーオプションを選択すると:
        - ドロップダウンメニューの隣に、ベータ版である旨のメッセージと警告アイコンが表示されます。
        - [Client-server Connections Timeout settings](#client-server-connections-timeout) are hidden
        - The [Encrypt Client-Server communication checkbox](#encrypt-client-server-communications) is hidden (QUIC communications are always in TLS, whatever your secured mode is.).
    - **互換性**: QUICネットワークレイヤーに切り替えるには、まずクライアント/サーバーアプリケーションを 4D v20以上で運用する必要があります。

:::note

オプションを変更した場合、変更を反映するには 4Dアプリケーションを再起動する必要があります。 接続していたクライアントアプリケーションも、新しいネットワークレイヤーで接続するため再起動しなければなりません。

:::

#### クライアント/サーバー接続タイムアウト

このサーモメーターで、4D Server とクライアントマシン間の (一定時間活動がないときに接続を閉じる) タイムアウトを設定できます。 無制限オプションは、タイムアウトを設定しないことを意味します。 このオプションが選択されると、クライアントのアクティビティコントロールはおこなわれません。

タイムアウト時間が選択されると、その間にリクエストを受信しなかった場合、サーバーはそのクライアントとの接続を閉じます。

### クライアント-サーバー通信

#### Execute On Clientのために起動時にクライアント登録

このオプションが選択されていると、データベースに接続するすべての 4Dリモートマシン上でメソッドをリモート実行できます。 This mechanism is detailed in the section [Stored procedures on client machines](https://doc.4d.com/4Dv20/4D/20/Stored-procedures-on-client-machines.300-6330550.en.html).

#### クライアント-サーバー通信の暗号化

このオプションを使用して、サーバーマシンと 4Dリモートマシン間通信の保護モードを有効にできます。 This option is detailed in the [Encrypting Client/Server Connections](https://doc.4d.com/4Dv20/4D/20/Encrypting-ClientServer-Connections.300-6330533.en.html) section.

#### セッション中に "Resources" フォルダーを更新

この設定は、データベースの **Resources** フォルダーがセッション中に更新された場合について、接続中のクライアントマシンにおける同フォルダーのローカルインスタンスの更新モードを包括的に指定します (**Resources** フォルダーは、セッションが開かれるたびにリモートマシン上で自動的に同期されます)。 3つの選択肢があります:

- **しない**: ローカルの **Resources** フォルダーはセッション中に更新されません。 サーバーから送信される通知は無視されます。 The local **Resources** folder may be updated manually using the **Update Local Resources** action menu command (see [Using the Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html)).
- **常に**: セッション中にサーバーから通知が送信されると、ローカルの **Resources** フォルダーは自動で同期されます。
- **その都度指定**: サーバーから通知を受け取ると、クライアントマシン上でダイアログボックスが表示されます。 ユーザーはローカルの **Resources** フォルダーの同期を受け入れ、あるいは拒否できます。\ **Resources** フォルダーは、データベースインタフェースで使用されるカスタムファイルを格納しています (翻訳ファイルやピクチャーなど)。 このフォルダーの内容が更新されたときには、自動又は手動メカニズムを使用して各クライアントに通知できます。 For more information, please refer to the [Managing the Resources folder](https://doc.4d.com/4Dv20/4D/20/Managing-the-Resources-folder.300-6330534.en.html) section.

## IP設定ページ

### 許可-拒否設定表

この表を使用して、4Dリモートマシンの IPアドレスに基づき、データベースへのアクセスコントロールルールを設定できます。 このオプションを使用して、たとえば戦略アプリケーションなどのセキュリティを高めることができます。

> Web接続は、この設定表でコントロールされません。

設定表の動作は以下のとおりです:

- "許可-拒否" 列では、ポップアップメニューを使用して適用するルールを選択します (許可または拒否)。 ルールを追加するには、追加ボタンをクリックします。 すると、新しい行が表に追加されます。 **削除** ボタンで選択した行を削除できます。
- "IPアドレス" 列で、ルールに関連する IPアドレスを指定します。 アドレスを指定するには、選択した行のセルをクリックし、以下の形式でアドレスを入力します: 123.45.67.89 (IPv4) または 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6)。 \* (アスタリスク) 文字をアドレスの末尾に使用して、範囲を指定することもできます。 たとえば、192.168.\* は 192.168 で始まるすべてのアドレスを示します。
- ルールの適用は、表中の表示順に基づきます。 2つのルールが矛盾する設定の場合、より上に設定されているルールが優先されます。 行の順番を変更するには、列のヘッダーをクリックしてソートをおこなったり、 ドラッグ＆ドロップで移動したりすることができます。
- セキュリティのため、ルールにより明示的に許可されたアドレスのみが接続を許可されます。 言い換えれば、表に拒否ルールしか定義されていない場合、許可ルールに適合するアドレスがないため、すべてのアドレスからの接続が拒否されます。 特定のアドレスからの接続のみを拒否したい場合 (そして他を許可したい場合)、許可 \* ルールを表の最後に追加します。 例:
    - 拒否 192.168.\* (192.168 で始まるアドレスを拒否)
    - 許可 \* (他のアドレスはすべて許可)

デフォルトでは、4D Server にアクセス制限はありません。最初の行には \* (すべてのアドレス) に対する許可ルールが設定されています。
