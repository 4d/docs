---
id: set-menu-item-icon
title: SET MENU ITEM ICON
slug: /commands/set-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM ICON.Syntax-->**SET MENU ITEM ICON** ( *menu* ; *menuItem* ; *iconRef* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM ICON.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| iconRef | Text, Integer | &#8594;  | メニュー項目に関連付けられたピクチャーの番号または名称 |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET MENU ITEM ICON.Summary-->**SET MENU ITEM ICON** コマンドは、*menu*と*menuItem*引数で指定されたメニュー項目に関連付けるアイコンを変更するために使用します。<!-- END REF-->  
*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することができます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、*process* 引数は必要なく、渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューを考慮します。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

メニュー項目に関連付けられたアイコンは、アプリケーションのツールバーに追加されます。ピクチャは20 x 20ピクセルのフレームに表示されます。

*iconRef*には、アイコンとして使用するピクチャーを渡します。ピクチャーファイル参照、またはライブラリのピクチャー (バイナリデータベースのみ) が使用できます。

* ピクチャーファイル参照:  
二つのパターンで渡すことができます:  
   * **path:<filesystem>** (*推奨*)。例: "path:/RESOURCES/icon.png"。詳細については *filesystem パス名* を参照ください。  
   * **file:<relativePathname>** (*廃止予定*)。例: "file:icon.png"。ピクチャーはデータベースの**Resources**フォルダーに格納されている必要があります。
* ライブラリピクチャー (バイナリデータベースのみ): ピクチャーの名前または番号を渡します。名前が重複することがあるのに対しピクチャー番号はユニークであるため、名前よりも番号を使用することが一般に推奨されます。

**注:** ピクチャーライブラリは プロジェクトモードのデータベースではサポートされないため、ピクチャーファイル参照を使った方法が推奨されます。また、*file:<relativePathname>* という記述法も廃止予定なため、*path:<filesystem>* の記述法で指定することが推奨されます。

#### 例題 

データベースのResourcesフォルダーにあるピクチャーを使用する:

```4d
 SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")
```

#### 参照 

[GET MENU ITEM ICON](get-menu-item-icon.md)  