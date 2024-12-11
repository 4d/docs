---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *groupNames* ; *groupNumbers* )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| groupNames | Text array | &#8592; | パスワードエディター表示されるグループ名 |
| groupNumbers | Integer array | &#8592; | 対応するユニークなグループID番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST コマンドは、パスワードエディターに表示されるグループ名とユニークなID番号を配列 *groupNames* と *groupNumbers* に返します。<!-- END REF-->

配列 *groupNames* と同期されている配列 *groupNumbers* には、対応するユニークなグループID番号が代入されます。これらの番号は以下の値および範囲を持っています。

* プロジェクトデータベースにおいて、グループID番号は 15001 から始まり、起動時に動的に割り当てられたものがセッション中は維持されます。
* バイナリデータベースにおいて、グループID番号は保存されており、グループ作成者に応じた特定の範囲内にあります。詳細については *ユーザーとグループ ID の範囲* を参照ください。

#### エラー管理 

 コマンドを呼び出すための特定のアクセス権を持っていない場合や、パスワードシステムが他のプロセスによって既にアクセスされている場合は、アクセス権エラーが生成されます。ON ERR CALL コマンドを使ってインストールされたエラー処理メソッドでこのエラーを受け取ることができます。

#### 参照 

[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 610 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


