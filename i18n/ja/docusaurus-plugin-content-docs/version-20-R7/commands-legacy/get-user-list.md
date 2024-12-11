---
id: get-user-list
title: GET USER LIST
slug: /commands/get-user-list
displayed_sidebar: docs
---

<!--REF #_command_.GET USER LIST.Syntax-->**GET USER LIST** ( *userNames* ; *userNumbers* )<!-- END REF-->
<!--REF #_command_.GET USER LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userNames | Text array | &#8592; | パスワードエディターに表示されるユーザー名 |
| userNumbers | Integer array | &#8592; | 対応するユニークなユーザーID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET USER LIST.Summary-->GET USER LIST コマンドは、パスワードエディターに表示されるユーザー名とユニークなユーザーID番号を配列 *userNames* と *userNumbers* に返します。<!-- END REF-->

配列 *userNames* には、パスワードウィンドウで表示されるユーザー名が代入されます。これには、無効となったアカウントを持つユーザーも含まれます (パスワードウィンドウではユーザー名が緑色で表示されます) 。

**注:** 削除されたユーザーを検出するには、[Is user deleted](is-user-deleted.md) コマンドを使用してください。

配列 *userNames* と同期されている配列 *userNumbers* には、対応するユニークなユーザーID番号が代入されます。

**バイナリデータベースに関する注記:** グループおよびユーザーのID番号は、その作成者 (デザイナー、管理者、および関連したグループオーナー) に依存します。詳細については *ユーザーとグループ ID の範囲* を参照ください。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。ON ERR CALL コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET GROUP LIST](get-group-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 609 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


