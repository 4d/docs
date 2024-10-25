---
id: get-user-properties
title: GET USER PROPERTIES
slug: /commands/get-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET USER PROPERTIES.Syntax-->**GET USER PROPERTIES** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} )<!-- END REF-->
<!--REF #_command_.GET USER PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | ユニークなユーザーID番号 |
| name | Text | &#8592; | ユーザー名 |
| startup | Text | &#8592; | スタートアップメソッドの名前 |
| password | Text | &#8592; | 常に空の文字列 |
| nbLogin | Integer | &#8592; | データベースにログインした回数 (バイナリデータベースのみ) |
| lastLogin | Date | &#8592; | データベースに最後にログインした日付 (バイナリデータベースのみ) |
| memberships | Integer array | &#8592; | ユーザーが属するグループのID番号 |
| groupOwner | Integer | &#8592; | ユーザーのグループオーナーのID番号 (バイナリデータベースのみ) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET USER PROPERTIES.Summary-->GET USER PROPERTIES コマンドは、引数 *userID* に渡したユニークなユーザーID番号を持つユーザーに関する情報を返します。<!-- END REF-->必ず [GET USER LIST](get-user-list.md) コマンドによって返される有効なユーザーID番号を渡さなければなりません。

ユーザーアカウントが存在しない場合や削除されている場合、エラーコード -9979が返されます。[ON ERR CALL](on-err-call.md) コマンドを用いて実装されたエラー処理メソッドでこのエラーを検知することができます。また、あらかじめ [Is user deleted](is-user-deleted.md) でユーザーアカウントを検証してから、GET USER PROPERTIES コマンドを呼び出す方法もあります。

呼び出し後、引数 *name*、*startup、* *nbLogin* と *lastLogin* には、ユーザー名、スタートアップメソッド、ログインした回数と最後にログインした日付が返されます。

**注:** 

* *nbLogin* および *lastLogin* パラメーターはバイナリデータベースでのみ使用され、プロジェクトデータベースにおいては常に 0 および 00/00/00 が返されます。
* *password* 引数は廃止予定となりました (常に空の文字列を返します)。ユーザーのパスワードをチェックしたい場合、[Validate password](validate-password.md) を使用して下さい。

任意の引数 *memberships* を渡すと、ユーザーが属するグループのユニークなID番号が返されます。

(バイナリデータベースのみ) 任意の引数 *groupOwner* を渡すと、ユーザーグループ "オーナー" のID番号、つまり、このユーザーによって作成されたオブジェクトのデフォルトのオーナーグループを取得します。

**注:** プロジェクトデータベースにおいては、*groupOwner* 配列には 0 の値が返されます。

**バイナリデータベースに関する注記:** グループおよびユーザーIDの値は、その作成者に依存します (デザイナー、管理者、または関連したグループオーナー)。詳細については *ユーザーとグループ ID の範囲* を参照ください。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。ON ERR CALL コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  
[Validate password](validate-password.md)  