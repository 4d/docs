---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *userNumber* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userNumber | Integer | &#8594;  | ユーザーID番号 |
| 戻り値 | Boolean | &#8592; | TRUE = ユーザーアカウントが削除されている、または存在しない場合；FALSE = ユーザーアカウントがアクティブな場合 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is user deleted.Summary-->Is user deleted コマンドを使用して、引数 *userID* に渡したユニークなユーザーID番号を持つユーザーアカウントをテストします。<!-- END REF-->

ユーザーアカウントが存在しない場合や削除されてしまっている場合、Is user deleted コマンドはTRUEを返します。その他の場合は FALSEを返します。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[DELETE USER](delete-user.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 616 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


