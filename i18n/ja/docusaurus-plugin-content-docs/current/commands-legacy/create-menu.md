---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** {( *menu* )} : Text<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Text, Integer, Text | &#8594;  | メニュー参照 または 番号 または メニューバー名 |
| 戻り値 | Text | &#8592; | メニュー参照 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Create menu.Summary-->Create menu コマンドはメモリに新しいメニューを作成するために使用します。<!-- END REF-->このメニューはメモリ上にのみ存在し、デザインモードの メニューバーには追加されません。セッション中にこのメニューに対して行われた更新は、データベースのすべてのプロセスの、このメニューすべてのインスタ ンスに即座に反映されます。

コマンドは新しいメニューの[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")型のIDを返します。

* オプションの*menu*引数を渡さない場合、空のメニューが作成されます。[RELEASE MENU](release-menu.md) や[SET MENU ITEM](set-menu-item.md)などのコマンドを使用して、メニューを構築、管理しなくてはなりません。
* *menu* 引数を渡すと、作成されるメニューはソースメニューの完全なコピーとなります。サブメニューを含む、ソースメニューのすべてのプロパティが、新しいメニューに適用されます。新しい[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")参照がソースメニューと既存のサブメニューに作成されることに注意してください。

*menu* 引数には、有効なメニュー参照、またはデザインモードで定義したメニュー名やメニュー番号を渡すことができます。最後のケースでは、新しいメニューはソースメニューバーのメニューやサブメニューで構成されます。

**注:** *menu* 引数に無効な値を渡した場合、空のメニューが作成されます。

このコマンドで作成されたメニューは、[SET MENU BAR](set-menu-bar.md) コマンドでメニューバーとして使用できます。

[Create menu](create-menu.md)で作成したメニューが必要なくなったときには、[RELEASE MENU](release-menu.md)コマンドを呼び出して使用されているメモリを解放してください。

#### 例題 

[SET MENU BAR](set-menu-bar.md "SET MENU BAR") コマンドの例題を参照。

#### 参照 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[SET MENU BAR](set-menu-bar.md)  