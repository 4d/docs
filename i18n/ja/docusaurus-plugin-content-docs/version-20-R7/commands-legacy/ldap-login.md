---
id: ldap-login
title: LDAP LOGIN
slug: /commands/ldap-login
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGIN.Syntax-->**LDAP LOGIN** ( *url* ; *login* ; *password* {; *digest*} )<!-- END REF-->
<!--REF #_command_.LDAP LOGIN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| url | Text | &#8594;  | 接続するLDAPサーバーのURL |
| login | Text | &#8594;  | ログインエントリー |
| password | Text | &#8594;  | ログインエントリーのパスワード |
| digest | Integer | &#8594;  | 0 = パスワードをMD5ダイジェストで送るMD5(デフォルト)、<br/>1 = パスワードを暗号化なしで送る |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LDAP LOGIN.Summary-->**LDAP LOGIN** コマンドは*url* 引数で指定したLDAPサーバーに対し、*login* 引数と *password* 引数に渡された識別子をもって読み込み専用の接続を開きます。<!-- END REF-->サーバーに受け入れられた場合、[LDAP LOGOUT](ldap-logout.md) コマンドが実行されるまで(あるいはプロセスが閉じられるまで)、カレントプロセスにおいてその後に実行される全てのLDAP検索にはこの接続が使用されます。

*url* 引数には、スキームとポート(デフォルトでは389)を含め、接続するLDAPサーバーへの完全なURLを渡します。この引数は[rfc2255](https://www.ietf.org/rfc/rfc2255.txt)に準拠している必要があります。  
*url* 引数に対し、"ldaps"で始まる、特定のポート番号(例: "ldaps://svr.ldap.acme.com:1389" 等)を使用した場合、TLS経由の安全な接続を開くことができます。LDAPサーバーは、(少なくともMicrosoft Active Directoryに対する)SSL証明書を持っている必要があります。パスワードが通常のテキストとして送信される場合にはTLS接続の使用が強く推奨 されます(以下を参照して下さい)。

**注:** *url* 引数に対して、空の文字列を渡した場合、コマンドはドメイン上で使用可能なデフォルトのLDAPサーバーへと接続しようとします(この機能は試験目的用のみのもので、パフォーマンス上の理由から製品で使用されるべきではありません)。

*login* 引数には、LDAPサーバー上のユーザーアカウントを渡し、*password* 引数にはパスワードを渡します。デフォルトで、*login* 引数にはLDAPサーバーの設定に応じて、以下の文字列のどれかを渡すことができます:

* 識別名(DN)。例えば、"CN=John Smith,OU=users,DC=example,DC=com"
* ユーザー名(CN)。例えば、"CN=John Smith"
* メールアドレス。例えば、"johnsmith@4d.fr"
* SAM-アカウント名。例えば、"jsmith"

*login* 引数で受け入れ可能な値は、*digest* 引数で定義された送信モードと関係しているという点に注意して下さい。例えば、MS Active Directoryのデフォルトの設定においては、以下のようになっています:

* 送信モードがLDAP password MD5 であるとき、ログインに受け入れ可能な値はSAM-アカウント名だけです。
* 送信モードがLDAP password plain text (通常のテキスト)であるとき、*login* 引数には、DN、CN、メールアドレスのどれかを渡すことができます。SAM-アカウント名も使用可能ですが、その後にドメイン名が着いていなければなりません(例： "dc-acme.com/jsmith")

*digest* 引数を使用すると、パスワードがネットワークでどのように送信されるかを変更することができます。"*LDAP*"テーマ内にある、以下の定数のどれか一つを渡すことができます:

| 定数                       | 型    | 値 | コメント                         |
| ------------------------ | ---- | - | ---------------------------- |
| LDAP password MD5        | 倍長整数 | 0 | (デフォルト) パスワードをMD5で暗号化して送信    |
| LDAP password plain text | 倍長整数 | 1 | パスワードを暗号化なしで送信(TLS接続が推奨されます) |

デフォルトでは、*password* 引数はMD5ダイジェストで送信されます。必要であればLDAP password plain text を渡して下さい(例えば、LDAPサーバーとは異なるログイン型の値を使用したい場合等)。製品環境に置いては、*url* 引数に対しTLS接続を使用することが推奨されます。

**注:** 空のパスワードでの認証をすると、匿名のバインディングモードになります(LDAPサーバーから認証された場合)。しかしながら、このモードにおいては、この種のバインドでは許可されていないオペレーションを実行しようとした場合にエラーが発声する可能性があります。

ログイン引数が有効であった場合、LDAPサーバーへの接続が4Dプロセスにおいて開かれます。その結果LDAPコマンドを使用して情報の検索・取得ができるようになります。

LDAPサーバーへの接続が必要なくなった倍には、必ず忘れずに[LDAP LOGOUT](ldap-logout.md) コマンドを呼び出して下さい。

#### 例題 1 

LDAPサーバーにログインして、検索をしたい場合を考えます:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")
 $vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";”cn=John Doe";LDAP all levels;$_tabAttributes)
 LDAP LOGOUT //ログアウトをお忘れなく
```

#### 例題 2 

以下の例は、アプリケーションへの接続を試みます:

```4d
 ON ERR CALL("ErrHdlr") //エラーをハンドル
 errOccured:=False
 errMsg:=""
 If(ppBindMode=1) //パスワードモードがデフォルトの場合
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)
 Else
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)
 End if
 
 Case of
    :(Not(errOccured))
       ALERT(" You are now connected to your LDAP server.  ")
 
    :(errOccured)
       ALERT("Error in your parameters")
 End case
 
 LDAP LOGOUT
 ON ERR CALL("")
```

#### 参照 

*LDAP*  
[LDAP LOGOUT](ldap-logout.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1326 |
| スレッドセーフである | &cross; |


