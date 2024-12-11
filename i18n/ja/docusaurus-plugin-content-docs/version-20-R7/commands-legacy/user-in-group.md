---
id: user-in-group
title: User in group
slug: /commands/user-in-group
displayed_sidebar: docs
---

<!--REF #_command_.User in group.Syntax-->**User in group** ( *user* ; *group* ) : Boolean<!-- END REF-->
<!--REF #_command_.User in group.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| user | Text | &#8594;  | ユーザ名 |
| group | Text | &#8594;  | グループ名 |
| 戻り値 | Boolean | &#8592; | TRUE = ユーザがグループに存在する場合 FALSE = ユーザがグループに存在しない場合 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.User in group.Summary-->User in group コマンドは*user* が*group* に存在する場合、[True](true.md "True")を返します。<!-- END REF-->

**注意:** このコマンドは*user* 引数にはユーザーアカウント名を想定しています(ユーザーエイリアスはサポートしません)。アプリケーション内でユーザーエイリアスを定義してあった場合、[Current user](current-user.md) コマンドに4D user account 引数を渡して必ずユーザーアカウントを返すようにしてください(例題を参照してください)。

#### 例題 

以下の例題を使用して、特定の請求書を探します。カレントユーザがExecutive グループに属する場合、そのカレントユーザは機密情報を表示するフォームにアクセスすることができます。そのユーザがExecutiveグループに属しない場合、異なるフォームが表示されます:

```4d
 QUERY([Invoices];[Invoices]Retail>100)
 If(User in group(Current user(4D user account);"Executive"))
  // 4D user account 引数は、アプリケーション内で
  // エイリアスを使用している場合必須です
    FORM SET OUTPUT([Invoices];"Executive Output")
    FORM SET INPUT([Invoices];"Executive Input")
 Else
    FORM SET OUTPUT([Invoices];"Standard Output")
    FORM SET INPUT([Invoices];"Standard Input")
 End if
 MODIFY SELECTION([Invoices];*)
```

#### 参照 

[Current user](current-user.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 338 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


