---
id: generate-password-hash
title: Generate password hash
slug: /commands/generate-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Generate password hash.Syntax-->**Generate password hash** ( *password* {; *options*} ) : Text<!-- END REF-->
<!--REF #_command_.Generate password hash.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| password | Text | &#8594;  | ユーザーのパスワード。最初の72文字のみ使用。 |
| options | Object | &#8594;  | オプションを格納したオブジェクト |
| 戻り値 | Text | &#8592; | ハッシュされたパスワードを返します。 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Generate password hash.Summary-->**Generate password hash** ファンクションは*password* 引数のパスワードから暗号化ハッシュアルゴリズムによって生成された、安全なパスワードハッシュを返します。<!-- END REF-->引数には、文字列を渡します。**Generate password hash** はパスワードのハッシュ化された文字列を返します。同じパスワードを複数回渡した場合、ハッシュ化された文字列は毎回異なる結果が返されます。

*options* オブジェクト引数には、パスワードハッシュを生成する際に使用したいプロパティを渡します。利用可能な値は以下の表にまとめてあります:   

| **プロパティ** | **値の型** | **詳細**                                                | **デフォルト値** |
| --------- | ------- | ----------------------------------------------------- | ---------- |
| algorithm | 文字列     | 使用するアルゴリズム。現在サポートされているのは"bcrypt"のみです(大文字と小文字は区別されます)。 | bcrypt     |
| cost      | 数値      | 使用するスピード。bcryptでサポートされている値は4から31までの間の数値です。            | 10         |

**注**: *options* 引数オブジェクト内のどちらかの値が無効であった場合、エラーメッセージが生成され、空の文字列が返されます。

##### エラー管理 

以下のエラーが返される可能性があります。これらのエラーは[Last errors](last-errors.md)  および [ON ERR CALL](on-err-call.md) コマンドで分析することができます。  

| **番号** | **メッセージ**                                             |
| ------ | ----------------------------------------------------- |
| 850    | パスワード-ハッシュ: サポートされていないアルゴリズムです。                       |
| 852    | パスワード-ハッシュ: 利用不可なbcrypt cost 引数です。4から31の間の値を指定してください。 |

##### bcryptについて 

bcryptは、Blowfish暗号に基づいたパスワードハッシュ機能です。これは、レインボーテーブル攻撃に対するプロテクトとしてsaltと併用することでさらに有用な機能です。bcryptよりハッシュの反復回数を増やすことが可能で、計算結果に時間がかかりすぎて処理のコストがかかってしまうことから、速い計算速度におけるブルースフォース攻撃にも耐えうるようになります。

#### 例題 

以下の例題では、bcryptを使用して、cost factorを4で指定してパスワードハッシュを生成する場合を考えます:

```4d
 var $password : Text
 var $hash : Text
 var $options : Object
 
 $options:=New object("algorithm";"bcrypt";"cost";4)
 $password:=Request("Please enter your password")
 
 $hash:=Generate password hash($password;$options)
 [Users]hash:=$hash
 SAVE RECORD([Users])
```

**注**: 同じパスワードを複数回渡した場合、ハッシュ化された文字列は毎回異なる結果が返されます。これはbcryptのようなアルゴリズムにとっては仕様で、最適な方法は、毎回ハッシュを生成するごとに新しいランダムなソルトを作成することだからです。パスワードをどのようにチェックするかの例題については、[Verify password hash](verify-password-hash.md) の説明を参照してください。

#### 参照 

  
[Generate digest](generate-digest.md)  
[Verify password hash](verify-password-hash.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1533 |
| スレッドセーフである | &check; |


