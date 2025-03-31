---
id: verify-password-hash
title: Verify password hash
slug: /commands/verify-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Verify password hash.Syntax-->**Verify password hash** ( *password* ; *hash* ) : Boolean<!-- END REF-->
<!--REF #_command_.Verify password hash.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| password | Text | &#8594;  | ユーザーのパスワード。最初の72文字のみ使用。 |
| hash | Text | &#8594;  | パスワードのハッシュ |
| 戻り値 | Boolean | &#8592; | パスワードとハッシュが合致する場合にはTRUE、それ以外の場合にはFALSE。 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Verify password hash.Summary-->**Verify password hash** ファンクションは、*hash* 引数で渡されたハッシュ値が、*password* 引数のパスワードと合致するかどうかを検証します。<!-- END REF-->

このファンクションは*password* 引数のパスワードを、[Generate password hash](generate-password-hash.md) ファンクションで生成された*hash* 引数のハッシュと比較します。

##### エラー管理 

以下のエラーが返される可能性があります。これらのエラーは[Last errors](last-errors.md)  および [ON ERR CALL](on-err-call.md) コマンドで分析することができます。

| **番号** | **メッセージ**                       |
| ------ | ------------------------------- |
| 850    | パスワード-ハッシュ: サポートされていないアルゴリズムです。 |
| 851    | パスワード-ハッシュ: 一貫性のチェックに失敗しました。    |

**注:** サポートされるアルゴリズムはbcrypt アルゴリズムのみです。ハッシュがbcrypt を使用して生成されたものではなかった場合、エラーが返されます。

#### 例題 

この例題では[Generate password hash](generate-password-hash.md) コマンドで作成済みで\[Users\] テーブルに保存されているパスワードハッシュを、新たに入力されたパスワードと検証する場合を考えます:   

```4d
 var $password : Text
 $password:=Request("Please enter your password")
 
 If(Verify password hash($password;[Users]hash))
    ALERT("Good password")
 Else
    ALERT("Password error")
 End if
```

**注:** パスワードはディスク上に保存されることはありません。保存されるのはハッシュのみです。リモート4D アプリケーションを使用している場合、ハッシュはクライアント側で生成されることもあります。4D の代わりに例えばJavaScriptベースの(あるいはそれに類似した)フロントエンドを使用している場合、セキュリティ的な観点からみた最適な方法は、ハッシュをサーバー側で生成することです。無論、セキュリティのためにTLS 暗号化ネットワーク接続を使用するべきです。この場合ネットワーク上でパスワードを通信する必要があるからです。

#### 参照 

  
[Generate password hash](generate-password-hash.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1534 |
| スレッドセーフである | &check; |


