---
id: edit-access
title: EDIT ACCESS
slug: /commands/edit-access
displayed_sidebar: docs
---

<!--REF #_command_.EDIT ACCESS.Syntax-->**EDIT ACCESS**<!-- END REF-->
<!--REF #_command_.EDIT ACCESS.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EDIT ACCESS.Summary-->EDIT ACCESS コマンドを使用して、ユーザにパスワードシステムの編集環境を提供します。<!-- END REF-->このコマンドが実行されると、ユーザとユーザグループページのみから成るツールボックスウィンドウが表示されます。

**Note:** このコマンドはモーダルウィンドウを開きます。従って、他のモーダルウィンドウからこのコマンドを呼び出すことはできません。呼び出した場合、コマンドは何も行いません。

Designer、Administrator、およびグループオーナーはグループを編集することができます。DesignerとAdministratorはすべてのグループを編集できますが、グループオーナーは所有するグループのみ編集できます。ユーザをグループへ追加したり、削除したりすることが可能です。グループが指定されていない場合、コマンドは機能しません。

DesignerとAdministratorは新規ユーザの追加、およびグループへの割り当てができます。

#### 例題 

以下の例は、ユーザに対してユーザグループ管理ウィンドウを表示します。

```4d
 EDIT ACCESS
```

#### 参照 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 281 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


