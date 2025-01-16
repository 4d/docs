---
id: get-menu-bar-reference
title: Get menu bar reference
slug: /commands/get-menu-bar-reference
displayed_sidebar: docs
---

<!--REF #_command_.Get menu bar reference.Syntax-->**Get menu bar reference** {( *process* )} : Text<!-- END REF-->
<!--REF #_command_.Get menu bar reference.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | プロセス参照番号 |
| 戻り値 | Text | &#8592; | メニューバーID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get menu bar reference.Summary-->**Get menu bar reference** コマンドはカレントのメニューバーあるいは指定されたプロセスのメニューバーのIDを返します。<!-- END REF-->

メニューバーが[Create menu](create-menu.md) コマンドで作成された場合、このIDは作成されたメニューの参照IDに対応します。そうでなければ、コマンドは特定の内部ID(\*)を返します。いずれの場合も、この[MenuRef](# "Unique ID (16-character alphanumeric) of a menu") IDは、このテーマの他のすべてのコマンドでメニュー参照として使用できます。

(\*) この特定のID は一時的なものであり、[SET MENU BAR](set-menu-bar.md) で他のメニューバーが呼び出されるとそのIDは無効なものになります。メニューエディターで作成したメニューの参照を保持したい場合には、[Create menu](create-menu.md) を使用してそれをメモリ内にコピーする必要があります:  

```4d
 $vEditorRef:=Get menu bar reference(Frontmost process) //メニューバーエディターで作成されたメニュー
 $vMenuRef:=Create menu($vEditorRef) //メニューをコピーしておく
 SET MENU BAR(2) //他のメニューバーを実装する
 ... // コードを実行
 SET MENU BAR($vMenuRef) //元のメニューバーに戻る
```

*process* 引数は、カレントのメニューバーIDを取得するプロセスを指定するために使用できます。この引数を省略すると、コマンドはカレントプロセスのメニューバーIDを返します。

#### 例題 

[GET MENU ITEMS](get-menu-items.md "GET MENU ITEMS") コマンドの例題参照

#### 参照 

[SET MENU BAR](set-menu-bar.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 979 |
| スレッドセーフである | &cross; |


