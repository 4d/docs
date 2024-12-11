---
id: get-group-properties
title: GET GROUP PROPERTIES
slug: /commands/get-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP PROPERTIES.Syntax-->**GET GROUP PROPERTIES** ( *groupID* ; *name* ; *owner* {; *members*} )<!-- END REF-->
<!--REF #_command_.GET GROUP PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| groupID | Integer | &#8594;  | ユニークなグループID番号 |
| name | Text | &#8592; | グループの名前 |
| owner | Integer | &#8592; | グループオーナーのユーザーID番号 (バイナリデータベースのみ) |
| members | Integer array | &#8592; | グループメンバー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET GROUP PROPERTIES.Summary-->GET GROUP PROPERTIES コマンドは、引数 *groupID* に渡したユニークなグループID番号を持つグループのプロパティを返します。<!-- END REF-->[GET GROUP LIST](get-group-list.md) コマンドによって返される有効なグループID番号を必ず渡さなければなりません。

有効なグループID番号を渡さなかった場合、GET GROUP PROPERTIES は空の引数を返します。

呼び出し後、引数 *name* にグループ名が返されます。

(バイナリデータベースのみ) グループのオーナーは引数 *owner* に返されます。プロジェクトデータベースの場合は常に0が返されます。

任意の引数 *members* を渡すと、グループに属するユーザーとグループのユニークなID番号が返されます。

**バイナリデータベースに関する注記:** グループおよびユーザーIDの値は、その作成者に依存します (デザイナー、管理者、または関連したグループオーナー)。詳細については *ユーザーとグループ ID の範囲* を参照ください。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET GROUP LIST](get-group-list.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 613 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


