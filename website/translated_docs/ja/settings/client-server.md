---
id: client-server
title: クライアント-サーバーページ
---

クライアント/サーバーページには、クライアント/サーバーモードでデータベースを使用する際に使用されるパラメーターが集められています。 これらの設定は、リモートモードでデータベースが使用されるときにのみ使用されます。

## ネットワークオプションページ

### ネットワーク

#### 起動時にデータベースを公開する

このオプションを使用して、起動された 4D Server データベースが公開データベースのリストに表示されるかどうかを指定できます。

-   このオプションが選択されていると (デフォルト)、データベースは公開され、公開データベースの一覧に表示されます (リモート4D の **利用可能**タブ)。
-   このオプションがチェックされていないと、データベースは公開されず、公開データベースの一覧に表示されません。 接続するには、接続ダイアログボックスの **カスタム** タブにデータベースのアドレスを手入力しなければなりません。

> この設定を変更した場合、変更を反映するためサーバデータベースを再起動する必要があります。

#### 公開名

このオプションでは、4D Server データベースの公開名を変更できます。この名前は接続ダイアログボックスの **利用可能** ページに表示されます ([4D Serverデータベースへの接続](https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.ja.html) 参照)。 デフォルトで 4D Server はプロジェクトファイル名を使用します。 これを好きな名前に変更できます。

> このパラメーターはカスタムのクライアント-サーバーアプリケーションでは使用されません。 クライアントアプリケーションは接続ダイアログを経由せずにサーバーに直接接続します。 しかしエラーが発生すると、このダイアログが表示されます。この場合、サーバーアプリケーションの公開名はコンパイルされたプロジェクトの名前です。

#### ポート番号

このオプションで、4D Server がデータベースを公開する TCPポート番号を変更できます。 この情報は、プロジェクト及び各クライアントマシンに格納されます。 4D Server とリモートモードの 4D が使用するデフォルトの TCPポート番号は 19813 です。

TCPプロトコルを使用して、1台のマシン上で複数の 4Dアプリケーションを同時に使用したい場合にこの値の変更が必要です。この場合、アプリケーションごとに異なるポート番号を割り当てなければなりません。 4D Server または 4D からこの値を変更すると、データベースに接続しているすべての 4Dマシンに変更が通知されます。

接続していないクライアントを更新するには、次回の接続時に接続ダイアログボックスの **カスタム** ページにて、サーバーマシンの IPアドレスに続けてコロン、そして新しいポート番号を入力します。 たとえば、新しいポート番号が 19888 あるとき:

![](assets/en/settings/client-server-network.png)

> 4Dクライアントと同じポート番号で公開されているデータベースだけが、接続ダイアログの利用可能ページに表示されます。

#### 4D Server とポート番号

4D Server は 3つの TCPポートを使用して、内部サーバーとクライアントの通信をおこないます:

-   **SQLサーバー**: デフォルトで 19812 (設定の "SQL" ページで変更可)。
-   **アプリケーションサーバー**: デフォルトで 19813 (設定の "クライアント-サーバー" ページで変更可)。
-   **DB4Dサーバー** (データベースサーバー): デフォルトで 19814。 このポート番号は直接変更できませんが、常にアプリケーションサーバのポート番号+1 です。<br/> 4Dクライアントが 4D Server に接続するとき、アプリケーションサーバのポート番号 (19813 または接続ダイアログボックスの IPアドレス欄でコロンの後ろに指定された番号) を使用して接続します。 その後の、それぞれ対応するポートを介した他のサーバーへの接続は自動です。再度ポート番号を指定する必要はありません。<br/> ルーターやファイアウォール越しに接続する場合には、この 3つのポートを明示的に開く必要があります。

#### ドメインサーバーによるユーザーの認証

このオプションは Windows上の 4D Server データベースにおいて SSO (*Single Sign On*) 機能の実装を可能にします。 このオプションを有効にすると、4D はバックグラウンドで Windows ドメインサーバーの Active Directory に接続し、提供されている認証トークンを取得します。 このオプションの詳細については [Windowsでのシングルサインオン(SSO)](https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.ja.html) を参照ください。

#### サービスプリンシパル名 (SPN)

Single Sign On (SSO) が有効になっている場合 (上述参照)、認証プロトコルにケルベロスを使用するには、このフィールドを設定する必要があります。 このオプションの詳細については [Windowsでのシングルサインオン(SSO)](https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.ja.html) を参照ください。

#### クライアント/サーバー接続タイムアウト

このサーモメーターで、4D Server とクライアントマシン間の (一定時間活動がないときに接続を閉じる) タイムアウトを設定できます。 The Unlimited option removes the timeout. When this option is selected, client activity control is eliminated.

When a timeout is selected, the server will close the connection of a client if it does not receive any requests from the latter during the specified time limit.

### Client-Server Communication

#### Register Clients at Startup For Execute On Client

When this option is checked, all the 4D remote machines connecting to the database can execute methods remotely. This mechanism is detailed in the section [Stored procedures on client machines](https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html).

#### Encrypt Client-Server Communications

This option lets you activate the secured mode for communications between the server machine and the 4D remote machines. This option is detailed in the [Encrypting Client/Server Connections](https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html) section.

#### Update Resources folder during a session

This setting can be used to globally set the updating mode for the local instance of the **Resources** folder on the connected 4D machines when the **Resources** folder of the database is modified during the session (the **Resources** folder is automatically synchronized on the remote machine each time a session is opened). Three settings are available:

-   **Never**: The local **Resources** folder is not updated during the session. The notification sent by the server is ignored. The local **Resources** folder may be updated manually using the **Update Local Resources** action menu command (see [Using the Resources explorer](https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html)).
-   **Always**: The synchronization of the local **Resources** folder is automatically carried out during the session whenever notification is sent by the server.
-   **Ask**: When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local **Resources** folder.\ The **Resources** folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Automatic or manual mechanisms can be used to notify each client when the contents of this folder have been modified. For more information, please refer to the [Managing the Resources folder](https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html) section.


## IP configuration page

### Allow-Deny Configuration Table

This table allows you to set access control rules for the database depending on 4D remote machine IP addresses. This option allows reinforcing security, for example, for strategic applications.

> This configuration table does not control Web connections.

The behavior of the configuration table is as follows:

- The "Allow-Deny" column allows selecting the type of rule to apply (Allow or Deny) using a pop-up menu. To add a rule, click on the Add button. A new row appears in the table. The **Delete** button lets you remove the current row.
- The "IP Address" column allows setting the IP address(es) concerned by the rule. To specify an address, click in the column and enter the address in the following form: 123.45.67.89 (IPv4 format) or 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6 format). You can use an * (asterisk) character to specify "starts with" type addresses. For example, 192.168.* indicates all addresses starting with 192.168.
- The application of rules is based on the display order of the table. If two rules are contradictory, priority is given to the rule located highest in the table. You can re-order rows by modifying the current sort (click the header of the column to alternate the direction of the sort). You can also move rows using drag and drop.
- For security reasons, only addresses that actually match a rule will be allowed to connect. In other words, if the table only contains one or more Deny rules, all addresses will be refused because none will match at least one rule. If you want to deny only certain addresses (and allow others), add an Allow * rule at the end of the table. たとえば:
    - Deny 192.168.* (deny all addresses beginning with 192.168)
    - Allow * (but allow all other addresses)

By default, no connection restrictions are applied by 4D Server: the first row of the table contains the Allow label and the * (all addresses) character.