---
id: set-group-properties
title: Set group properties
slug: /commands/set-group-properties
displayed_sidebar: docs
---

<!--REF #_command_.Set group properties.Syntax-->**Set group properties** ( *groupID* ; *name* ; *owner* {; *members*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.Set group properties.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| groupID | Integer | &rarr; | グループのユニークなID番号、または、 -1= デザイナーグループの追加 -2= 管理者グループの追加 |
| &larr; | 追加したグループ (あれば) のユニークなID番号 |
| name | Text | &rarr; | 新規グループの名前 |
| owner | Integer | &rarr; | 新規グループオーナーのユーザーID番号 (バイナリデータベースのみ) |
| members | Integer array | &rarr; | 新規グループのメンバー |
| 戻り値 | Integer | &larr; | 新規グループのユニークなID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Set group properties.Summary-->Set group properties コマンドは、引数 *groupID* に渡したユニークなグループID番号を持つ既存のグループのプロパティを変更・更新するか、新規グループを追加します。<!-- END REF-->

既存グループのプロパティを変更する場合は、[GET GROUP LIST](get-group-list.md) コマンドによって返される有効なグループID番号を渡さなければなりません。

新規グループを追加するには *groupID* に -1 を受け渡します (後述のバイナリデータベースに関する注記も参照ください)。

グループの追加に成功した場合、そのグループのユニークなID番号が *groupID* に返されます。

\-1、 -2 または有効なグループID番号が渡されない場合、Set group properties コマンドは何も行いません。

引数 *name* にはグループの新しい名前を渡します。

(バイナリデータベースのみ) 引数 *owner* には新しいグループオーナー のID番号を渡します。プロジェクトデータベースにおいて、このパラメーターは無視されます。

グループのすべてのプロパティを変更したいわけではない場合 (メンバーリスト以外、後述参照) 、変更したくないプロパティに関しては、あらかじめ [GET GROUP PROPERTIES](get-group-properties.md) コマンドを使って取得した値を受け渡します。

任意の引数 *members* が渡されない場合、グループのメンバーリストは変更されません。新規グループを追加する際に引数 *members* を渡さない場合には、そのグループはメンバーを持ちません。

任意の引数 *members* を渡すと、そのグループのメンバーリストをすべて上書きします。呼び出す前に、そのグループがメンバーとして持っているユーザーやグループのユニークなID番号を配列 *members* に割り当てておかなければなりません。

グループからメンバーをすべて削除するには、空の配列 *members* を渡します。

**バイナリデータベースに関する注記**

* グループおよびユーザーIDの値は、その作成者に依存します (デザイナー、管理者、または関連したグループオーナー)。詳細については *ユーザーとグループ ID の範囲* を参照ください。デザイナーに関連した新規グループを追加するには、引数 groupID に -1を渡します。管理者に関連した新規グループを追加するには、引数 groupID に -2を渡します。
* グループオーナーは自身が所有するグループのメンバーとして自動的に設定されるわけではありません。グループオーナーをそのグループに含めるには引数 *members* を使って設定します。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。ON ERR CALL コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET GROUP LIST](get-group-list.md)  
[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  