---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *userID* )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | 削除するユーザのID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE USER.Summary-->DELETE USER コマンドは、引数 *userID* に渡したユニークなユーザID番号を持つユーザを削除します。<!-- END REF--> この場合、必ず[GET USER LIST](get-user-list.md "GET USER LIST") コマンドによって返された有効なユーザID番号を渡さなければなりません。 

ユーザアカウントが存在しない場合や既に削除されている場合は、エラーコード -9979が生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドを用いてインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

DesignerとAdministratorのみがユーザを削除できます。AdministratorはDesignerによって作成されたユーザを削除するこはできません。

削除されたユーザー名は、[EDIT ACCESS](edit-access.md "EDIT ACCESS")コマンドやデザインモードで表示されるユーザーエディターに表示されなくなります。削除されたユーザーの番号は、新しいユーザーアカウントが作成される際に再割り当てされることがあることに留意してください。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。ON ERR CALL コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 615 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


