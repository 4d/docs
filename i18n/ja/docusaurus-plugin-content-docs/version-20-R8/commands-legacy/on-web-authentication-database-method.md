---
id: on-web-authentication-database-method
title: On Web Authentication database method
slug: /commands/on-web-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Authentication database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Authenticationデータベースメソッド : Boolean<!-- END REF-->
<!--REF #_command_.On Web Authentication database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | テキスト | &#8592; | URL |
| $2 | テキスト | &#8592; | HTTPヘッダー + HTTPボディ(32 KBまで) |
| $3 | テキスト | &#8592; | Webクライアント (ブラウザー) のIPアドレス |
| $4 | テキスト | &#8592; | サーバーのIPアドレス |
| $5 | テキスト | &#8592; | ユーザー名 |
| $6 | テキスト | &#8592; | パスワード |
| 戻り値 | Boolean | &#8592; | True = リクエストを受け入れる, False = リクエストを拒否する |

<!-- END REF-->

#### 説明 

<!--REF #_command_.On Web Authentication database method.Summary-->**On Web Authenticationデータベースメソッド**はWebサーバーエンジンへのアクセス管理を担当します。<!-- END REF-->このデータベースメソッドは、Webブラウザーからのリクエストがサーバー上の4Dメソッド (**4DACTION** URLや**4DSCRIPT** などを使用して呼び出されるメソッド) の実行を必要とするとき、4Dから呼ばれます。

このメソッドは6つのテキスト引数$1, $2, $3, $4, $5, $6を受け取り、ブール値を$0に返します。これらの引数の意味は以下のとおりです:

| **引数** | **型** | **説明**                                 |
| ------ | ----- | -------------------------------------- |
| $1     | テキスト  | URL                                    |
| $2     | テキスト  | HTTPヘッダー + HTTPボディ (32 KBまで)           |
| $3     | テキスト  | Webクライアント (ブラウザー) のIPアドレス              |
| $4     | テキスト  | サーバーのIPアドレス                            |
| $5     | テキスト  | ユーザー名                                  |
| $6     | テキスト  | パスワード                                  |
| $0     | ブール   | True = リクエストを受け入れる, False = リクエストを拒否する |

これらの引数を以下のように宣言しなければなりません:

```4d
  // On Web Authentication データベースメソッド
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
  // メソッドコード
```

**注:** **On Web Authenticationデータベースメソッド**のすべての引数が必ず値を受け取るわけではありません。データベースメソッドが受け取る情報はデータベース設定ダイアログボックスでの設定により異なります (*接続セキュリティ*参照)。

* **URL**  
    
最初の引数 (*$1*) はユーザーがWebブラウザーのアドレスエリアに入力した**URL** (からホストのアドレスを取り除いたもの) です。  
    
イントラネット接続の場合をみてみましょう。4D WebサーバーのIPアドレスを123.45.67.89とします。以下の表はWebブラウザーに入力された**URL**により、*$1*が受け取る値を示しています:  
    
| **Webブラウザーのアドレスに入力された値**              | $1の値                      |  
| ------------------------------------- | ------------------------- |  
| 123.45.67.89                          | /                         |  
| http://123.45.67.89                   | /                         |  
| 123.45.67.89/Customers                | /Customers                |  
| http://123.45.67.89/Customers         | /Customers                |  
| http://123.45.67.89/Customers/Add     | /Customers/Add            |  
| 123.45.67.89/Do\_This/If\_OK/Do\_That | /Do\_This/If\_OK/Do\_That |

* **HTTPリクエストのヘッダ**ー**とボディ**  
    
2番目の引数 (*$2*) はWebブラウザーから送信されたHTTPリクエストのヘッダーとボディです。この情報は**On Web Authenticationデータベースメソッド**にそのまま渡されることに留意してください。その内容は接続を試みたWebブラウザーの仕様により異なります。  
    
アプリケーションでこの情報を使用するには、開発者がヘッダーとボディを解析しなければなりません。  
    
**注:**  
   * パフォーマンスの理由から、このデータのサイズは32KBで切り取られます。  
   * この引数に関する詳細は[QR SET DESTINATION](qr-set-destination.md)の説明を参照してください。
* **WebクライアントのIPアドレス**  
    
$3 引数はブラウザマシンのIPアドレスを受け取ります。この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。  
**注:** 4DはIPv4アドレスを、96-bitの接頭辞付きのハイブリッド型のIPv6/IPv4フォーマットで返します。例えば、 ffff:192.168.2.34は、192.168.2.34というIPv4アドレスを意味します。詳細な情報については、*IPv6のサポート*の章を参照して下さい。
* **サーバーIPアドレス**  
    
$4 引数はWebサーバを呼び出すために使用されたIPアドレスを受け取ります。4Dバージョン6.5以降マルチホーミングがサポートされ、複数のIPアドレスを持つマシンで使用できるようになりました。詳細は[QR DELETE COLUMN](qr-delete-column.md)を参照してください。
* **ユーザー名とパスワード**  
    
$5 と $6 引数は、ブラウザーが表示する標準の認証ダイアログにユーザーが入力したユーザー名とパスワードを受け取ります。このダイアログはデータベース設定でパスワード管理オプションが指定されていると、接続のたびに表示されます (*接続セキュリティ*参照)。

**注:** ブラウザーから送信されたユーザー名が4Dに存在する場合、$6 引数 (ユーザーパスワード) はセキュリティのため渡されません。

* **$0 引数** **On Web Authenticationデータベースメソッド**はブール値を$0に返します:  
   * $0=**True**: 接続を受け入れる  
   * $0=**False**: 接続を受け入れない

[QR SET DESTINATION](qr-set-destination.md)は、接続が**On Web Authenticationデータベースメソッド**により受け入れられた時にのみ実行されます。

**警告:** *$0*に値が設定されないか、*$0*が**On Web Authenticationデータベースメソッド**内で定義されていない場合、接続は受け入れるものとされ、[QR SET DESTINATION](qr-set-destination.md)が実行されます。

**注:**

* **On Web Authenticationデータベースメソッド**内でインターフェース要素を呼び出さないでください ([ALERT](alert.md), [DIALOG](../commands/dialog.md)等)。そうでなければメソッドの実行が中断され、接続は拒否されます。処理中にエラーが発生した場合も同じことが言えます。
* メソッドプロパティダイアログオックスのオプション"4DタグとURL (4DACTION...) で利用可"を使用して、プロジェクトメソッドごとに、**4DACTION** や **4DSCRIPT**にからメソッドを実行させないようにできます。この点に関する詳細は*接続セキュリティ*を参照してください。

#### On Web Authentication データベースメソッドの呼び出し 

**On Web Authenticationデータベースメソッド**は、リクエストや処理が4Dメソッドの実行を必要とするとき自動で呼び出されます。またWebサーバーが無効なスタティックURLを受け取ったときにも呼び出されます (例えばリクエストされたスタティックページが存在しない場合)。

まとめると**On Web Authenticationデータベースメソッド**は以下のケースで呼び出されます:

* 4Dが /4DACTION/ で始まるURLを受信したとき。
* 4Dが /4DCGI/ で始まるURLを受信したとき。
* 4Dが /4DSYNC/ で始まるURLを受信したとき。
* 4Dが、存在しないスタティックページをリクエストするURLを受信したとき。
* 4Dが、データベース設定もしくは[WEB SET HOME PAGE](web-set-home-page.md) コマンドを利用してホームページが設定されていない状態でルートアクセスURLを受信したとき。
* 4Dがセミダイナミックページで 4DSCRIPT タグを処理するとき。
* 4D がセミダイナミックページでメソッドに基づく 4DLOOP タグを処理するとき。

**互換性に関する注意:** このデータベースメソッドは4Dが/4DMETHOD/ で始まるURLを受信したときにも実行されます。このURLは廃止予定であり、互換性の目的で保持されています。

有効なスタティックページをリクエストするURLを受信したとき、**On Web Authenticationデータベースメソッド**は呼び出されないことに注意してください。

#### 例題 1 

BASIC認証モードの**On Web Authenticationデータベースメソッド**の例題:

```4d
  //On Web Authentication データベースメソッド
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
 
 var $user;$password;$BrowserIP;$ServerIP : Text
 var $4Duser : Boolean
 ARRAY TEXT($users;0)
 ARRAY LONGINT($nums;0)
 var $upos : Integer
 
 $0:=False
 
 $user:=$5
 $password:=$6
 $BrowserIP:=$3
 $ServerIP:=$4
 
  //セキュリティのため@を含むユーザー名とパスワードは拒否
 If(WithWildcard($user)|WithWildcard($password))
    $0:=False
  //WithWildcard メソッドは後述
 Else
  //4Dユーザーかチェック
    GET USER LIST($users;$nums)
    $upos:=Find in array($users;$user)
    If($upos >0)
       $4Duser:=Not(Is user deleted($nums{$upos}))
    Else
       $4Duser:=False
    End if
 
    If(Not($4Duser))
  //4Dに定義されたユーザーでない場合、Webusersテーブルを検索
       QUERY([WebUsers];[WebUsers]User=$user;*)
       QUERY([WebUsers];&[WebUsers]Password=$password)
       $0:=(Records in selection([WebUsers])=1)
    Else
       $0:=True
    End if
 End if
  //イントラネット接続か?
 If(Substring($BrowserIP;1;7)#"192.100.")
    $0:=False
 End if
```

#### 例題 2 

DIGESTモードのの例題:

```4d
  //On Web Authentication データベースメソッド
 var $1;$2;$5;$6;$3;$4 : Text
 var $user : Text
 var $0 : Boolean
 $0:=False
 $user:=$5
  //セキュリティのため@を含むユーザ名とパスワードは拒否
 If(WithWildcard($user))
    $0:=False
  //WithWildcard メソッドは後述
 Else
    QUERY([WebUsers];[WebUsers]User=$user)
    If(OK=1)
       $0:=WEB Validate digest($user;[WebUsers]password)
    Else
       $0:=False //User does not exist
    End if
 End if
```

  
WithWildcard メソッド:

```4d
  //WithWildcard Method
  //WithWildcard ( 文字列 ) -> ブール
  //WithWildcard ( Name ) -> @を含む
 
 C_INTEGER($i)
 var $0 : Boolean
 var $1 : Text
 
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```
