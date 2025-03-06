---
id: set-user-properties
title: Set user properties
slug: /commands/set-user-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set user properties.Syntax-->**Set user properties** ( *userID* ; *name* ; *startup* ; *password* ; *nbLogin* ; *lastLogin* {; *memberships* {; *groupOwner*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Set user properties.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userID | Integer | &#8594;  | ユーザーアカウントのユニークなID番号、<br/>または -1= デザイナーに関連した新規ユーザーの追加 -2= 管理者に関連した新規ユーザーの追加 |
| &#8592; | 追加したユーザーアカウント (あれば) のユニークなID番号 |
| name | Text | &#8594;  | 新規ユーザーの名前 |
| startup | Text | &#8594;  | 新規ユーザースタートアップメソッドの名前 |
| password | Text | &#8594;  | 新しい (暗号化されていない) パスワード、または * を指定すると、パスワードは以前のまま |
| nbLogin | Integer | &#8594;  | データベースへログインした回数 (バイナリデータベースのみ) |
| lastLogin | Date | &#8594;  | データベースに最後にログインした日付 (バイナリデータベースのみ) |
| memberships | Integer array | &#8594;  | ユーザーが属するグループのID番号 |
| groupOwner | Integer | &#8594;  | ユーザーグループオーナーの参照番号 (バイナリデータベースのみ) |
| 戻り値 | Integer | &#8592; | 新規ユーザーのユニークなID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Set user properties.Summary-->Set user properties コマンドは、引数 userID に渡したユニークなユーザーID番号を持つ既存のユーザーアカウントのプロパティを変更・更新するか、新規ユーザーを追加します。<!-- END REF-->また、デザイナーあるいは管理者に関連する新規ユーザを追加することもできます。

既存のユーザーアカウントのプロパティを変更する場合は、[GET USER LIST](get-user-list.md) コマンドによって返される有効なユーザーID番号を渡さなければなりません。ユーザーアカウントが存在しない場合や削除されている場合、エラーコード -9979が返されます。[ON ERR CALL](on-err-call.md) コマンドを用いて実装されたエラー処理メソッドでこのエラーを検知することができます。また、あらかじめ [Is user deleted](is-user-deleted.md) でユーザーアカウントを検証してから、Set user properties コマンドを呼び出す方法もあります。

新規ユーザーを追加するには userID に -1 を受け渡します (後述のバイナリデータベースに関する注記も参照ください)。

ユーザーの追加・更新に成功した場合、そのユーザーのユニークなID番号が *userID* に返されます。

\-1、-2 または有効なユーザーID番号が渡されなかった場合、Set user properties コマンドは何も行いません。

引数 *name*、*startup、[password](# "新しい (暗号化されていない) パスワード、または  を指定すると、パスワードは以前のまま")、* *nbLogin* と *lastLogin* には、ユーザーの新しい名前、スタートアップメソッド、パスワード、ログインした回数と最後にログインした日付を渡します。引数 *password* には暗号化されていないパスワードを渡します。すると、4Dはそのパスワードを暗号化してユーザーアカウントに保存します。  
引数 *name* に渡されたユーザーの新しい名前がユニークでない (同じ名前を持つユーザーが既に存在している) 場合 、コマンドは何も行わず、エラーコード-9979が返されます。[ON ERR CALL](on-err-call.md)コマンドを用いて実装されたエラー処理メソッドでこのエラーを検知することができます。

**注:** *nbLogin* および *lastLogin* パラメーターはバイナリデータベースでのみ使用され、プロジェクトデータベースにおいては無視されます。

ユーザーのすべてのプロパティを変更したいわけではない場合 (メンバーシップ以外、後述参照) 、変更したくないプロパティに関しては、あらかじめ [GET USER PROPERTIES](get-user-properties.md) コマンドを使って取得した値を受け渡します。

アカウントのパスワードを変更したくない場合、引数 *password* の値として、\* 記号を渡します。これを実行することにより、アカウント用のパスワードを変更することなく、ユーザーアカウントの他のプロパティを変更することができます。

任意の引数 *memberships* が渡されない場合、ユーザーのメンバーシップは変更されません。新規ユーザーを追加する際に引数 *memberships* を渡さない場合には、そのユーザーはどのグループにも属しません。

任意の引数 *memberships* を渡すと、そのユーザーのすべてのメンバーシップを上書きします。呼び出す前に、そのユーザーが属するグループのユニークなID番号を配列 *memberships* に割り当てておかなければなりません。

(バイナリデータベースのみ) 任意の引数 *groupOwner* を渡すと、ユーザーグループ "オーナー" のID番号、つまり、このユーザーによって作成されたオブジェクトのデフォルトのオーナーグループを指定します。ユーザーのすべてのメンバーシップを無効にするには、空の配列 *memberships* を渡します。

**バイナリデータベースに関する注記:** グループおよびユーザーIDの値は、その作成者に依存します (デザイナー、管理者、または関連したグループオーナー)。詳細については *ユーザーとグループ ID の範囲* を参照ください。デザイナーに関連した新規ユーザーを追加するには、引数 userID に -1を渡します。管理者に関連した新規ユーザーを追加するには、引数 userID に -2を渡します。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[DELETE USER](delete-user.md)  
[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Validate password](validate-password.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 612 |
| スレッドセーフである | &cross; |


