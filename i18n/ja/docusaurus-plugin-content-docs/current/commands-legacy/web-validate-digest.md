---
id: web-validate-digest
title: WEB Validate digest
slug: /commands/web-validate-digest
displayed_sidebar: docs
---

<!--REF #_command_.WEB Validate digest.Syntax-->**WEB Validate digest** ( *userName* ; *password* ) : Boolean<!-- END REF-->
<!--REF #_command_.WEB Validate digest.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userName | Text | &#8594;  | ユーザの名前 |
| password | Text | &#8594;  | ユーザのパスワード |
| 戻り値 | Boolean | &#8592; | True=認証はOK、 False=認証は失敗 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB Validate digest.Summary-->**WEB Validate digest**コマンドを使用して、Webサーバに接続しているユーザのID情報 (名前とパスワード) の有効性をチェックします。<!-- END REF-->必ずダイジェストモードのWeb認証のコンテキストで、 *On Web Authenticationデータベースメソッド* でこのコマンドを使用します (*接続セキュリティ* を参照)。

引数 *userName* と *password* には、ローカルに格納されているユーザ識別情報を渡します。コマンド はこの情報を使用して、Webブラウザによって送られた情報と同等な値を生成します。

値が同じである場合、コマンドはTrueを返します。その他の場合は、Falseを返します。

このメカニズムを使用して、Webサーバへアクセスする自身の安全なシステムをプログラミングによって維持、そして管理することができます。

**Note:** ブラウザがダイジェスト認証をサポートしていない場合、エラーが返されます (認証エラー) 。

#### 例題 

ダイジェストモードで *On Web Authenticationデータベースメソッド* を使用します:

```4d
  // On Web Authentication Database Method
 var $1;$2;$5;$6;$3;$4 : Text
 var $user : Text
 var $0 : Boolean
 $0:=False
 $user:=$5
  //セキュリティに関する理由のため、@を含む名前を拒否する
 If(WithWildcard($user))
    $0:=False
  //WithWildカードメソッドは、"On Web Authentication データベースメソッド" の節に記述されています
 Else
    QUERY([WebUsers];[WebUsers]User=$user)
    If(OK=1)
       $0:=WEB Validate digest($user;[WebUsers]password)
    Else
       $0:=False //ユーザーが存在しません
    End if
 End if
```

#### 参照 

[Generate digest](generate-digest.md)  
[Validate password](validate-password.md)  