---
id: on-sql-authentication-database-method
title: On SQL Authentication database method
slug: /commands/on-sql-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On SQL Authentication database method.Syntax-->$user, $pw, $ip -> On SQL Authenticationデータベースメソッド : Boolean<!-- END REF-->
<!--REF #_command_.On SQL Authentication database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $user | テキスト | &#8592; | ユーザー名 |
| $pw | テキスト | &#8592; | パスワード |
| $ip | テキスト | &#8592; | (オプション) リクエスト送信元クライアントのIPアドレス |
| 戻り値 | Boolean | &#8592; | True = リクエストを受け入れる、False = リクエストを拒否する |

<!-- END REF-->

## 

<!--REF #_command_.On SQL Authentication database method.Summary-->**On SQL Authenticationデータベースメソッド**は4Dに統合されたSQLサーバへ送られたリクエストを選別します。<!-- END REF-->この選別は、名前とパスワー ド、そしてユーザのIPアドレス (オプション) に基づいて実行されます。開発者は独自のユーザーテーブルや、4Dのユーザーテーブルを使用して、接続を識別できます。接続を認証したら、[CHANGE CURRENT USER](change-current-user.md "CHANGE CURRENT USER") コマンドを呼び出して、4Dのデータベース内のリクエストへのアクセスをコントロールしなければなりません。

**On SQL Authenticationデータベースメソッド**が存在する場合、4Dまたは4D ServerのSQLサーバに外部からSQL接続が行われると、自動的にこのメソッドが呼び出されます。4Dユーザを管理する内部システムは起動しません。データベースメソッドが$resultに[True](true.md "True")を返しかつ、[CHANGE CURRENT USER](change-current-user.md "CHANGE CURRENT USER")コマンドの実行が成功した場合のみ、接続が受け入れられます。これらの条件を満たさない場合リクエストは拒否されます。

**Note**: [SQL LOGIN](sql-login.md "SQL LOGIN")(SQL\_INTERNAL;$user;$password)ステートメントは内部接続となるため、*On SQL Authenticationデータベースメソッド*を呼び出しません。

データベースメソッドは最大3つのテキストタイプの引数を4Dより受け取り、$resultにブール値を返します。以下はこれらの引数の説明です。

| **引数** | **型** | **説明**                            |
| ------ | ----- | --------------------------------- |
| $user     | テキスト  | ユーザ名                              |
| $pw     | テキスト  | パスワード                             |
| $ip     | テキスト  | (オプション) リクエスト元のクライアントのIPアドレス(\*)  |
| $result     | ブール   | True = リクエストを許可, False = リクエストを拒否 |

(\*) 4DはIPv4アドレスを、96-bitの接頭辞付きのハイブリッド型のIPv6/IPv4フォーマットで返します。例えば、ffff:192.168.2.34は、192.168.2.34というIPv4アドレスを意味します。詳細な情報については、*IPv6のサポート*の章を参照して下さい。

以下のようにこれらの引数を宣言しなければなりません:

```4d
  // On Web Authentication データベースメソッド
 
 #DECLARE($user : Text ; $pw : Text ; $ip : Text) -> $result : Boolean
  // メソッドコード
```

標準テキストとして、パスワード($pw)を受け取ります。

**On SQL Authenticationデータベースメソッド**でSQL接続の識別子を確認します。例えば、ユーザのカスタムテーブルを使用して名前とパスワードをチェックします。識別子が有効な場合は、$resultに[True](true.md "True")を返して接続を受け入れます。その他の場合は$resultに、[False](false.md "False")を返して接続が拒否されます。 

**Note:** **On SQL Authenticationデータベースメソッド**が存在しない場合、4Dの統合されたユーザ管理システムを使用 して、接続を決定します (有効になっている場合、つまりDesignerにパスワードが割り当てられている場合)。このシステムが起動していない場合、ユーザはDesigner アクセス権 (フリーアクセス) で接続されます。

$resultに[True](true.md "True")を渡す場合、リクエストを受け入れ、ユーザのためにSQLのセッションを開くためには、**On SQL Authenticationデータベースメソッド**で[CHANGE CURRENT USER](change-current-user.md "CHANGE CURRENT USER") コマンドを呼び出し、その実行が成功しなければなりません。  
  
[CHANGE CURRENT USER](change-current-user.md "CHANGE CURRENT USER") コマンドは、仮想の認証システムを実行するために使用されます。この認証システムには、2つの利点があります。1つは接続動作をコントロールできること。もう1つは4DのSQLセッションで接続の識別子を外部から見えないようにします。

以下の例で**On SQL Authenticationデータベースメソッド**は、接続リクエストが内部ネットワークからのものであることを確認し、識別子を検証、SQLセッションへのアクセス権に"sql\_user" ユーザを割り当てます。

```4d
 #DECLARE($user : Text ; $pw : Text ; $ip : Text) -> $result : Boolean
  //$user: user
  //$pw: password
  //{$ip: IP address of client}
 ON ERR CALL("SQL_error")
 If(checkInternalIP($ip))
  //checkInternalIPメソッドはIPアドレスが内部のものか確認します。
    If($user="victor") & ($pw="hugo")
       CHANGE CURRENT USER("sql_user";"")
       If(OK=1)
          $result:=True
       Else
          $result:=False
       End if
    Else
       $result:=False
    End if
 Else
    $result:=False
 End if
```
