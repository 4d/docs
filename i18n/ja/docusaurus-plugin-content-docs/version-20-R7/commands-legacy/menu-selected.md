---
id: menu-selected
title: Menu selected
slug: /commands/menu-selected
displayed_sidebar: docs
---

<!--REF #_command_.Menu selected.Syntax-->**Menu selected** {( *subMenu* )} : Integer<!-- END REF-->
<!--REF #_command_.Menu selected.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| subMenu | Text | &#8592; | 選択された項目を含むメニューの参照 |
| 戻り値 | Integer | &#8592; | 選択されたメニューコマンド 上位バイトにメニュー番号 下位バイトにメニュー項目番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Menu selected.Summary-->**Menu selected** はフォームが表示されているときのみ使用できます。<!-- END REF-->このコマンドはメニューから選択されたメニュー項目を検出し、階層サブメニューの場合はサブメニューの参照を返します。

**Tip:** 可能な限り、**Menu selected** を使用しないで、(負のメニューバー番号を用いた) 関連メニューバーのメニューに割り当てられたメソッドを使用してください。いずれのメニューが選択されたかを調べる必要がないため、関連メニューバーはより簡単に管理できます。

**Menu selected** コマンドを階層サブメニューに対して使用できます。第一レベルより下の階層のメニュー項目を選択すると、コマンドは*subMenu* 引数に、選択された項目が属するサブメニューの参照 (MenuRef 型, 16文字の文字列) を返します。メニューコマンドが階層サブメニューを含まない場合、この引数には空の文字列が返されます。  
  
**Menu selected** コマンドは、選択されたメニューの番号を倍長整数型で返します。選択されたメニュー番号を知るためには、返された数値を65536で割り、その結果を整数型に変換します。選択されたメニューコマンド番号を知るには、係数65536を使い、返された数値のモジューロを計算します。メニュー番号とメニューコマンド番号を計算するには以下のフォーミュラを使用します:

```4d
 menu:=Menu selected\ 65536
 menuCommand:=Menu selected% 65536
```

*ビットワイズ演算子* を使用してこれらの値を取得することもできます:

```4d
 menu:=(Menu selected & 0xFFFF0000)>>16
 menuCommand:=Menu selected & 0xFFFF
```

メニューが選択されていない場合、**Menu selected** は0を返します。

#### 例題 

以下の例は[SET MENU ITEM MARK](set-menu-item-mark.md) コマンドのメニューとメニュー項目引数を求めるためにMenu selected を使用しています:

```4d
 Case of
    :(Form event code=On Menu Selected) //v17 以前ではFrom event を使用すること
       C_STRING(16;$refMenuIncludingItem)
       var $ref;$MenuNum;$MenuItemNum : Integer
       $ref:=Menu selected($refMenuIncludingItem)
       $MenuNum:=$ref\65536
       $MenuItemNum:=$ref%65536
       SET MENU ITEM MARK($refMenuIncludingItem;$MenuItemNum;Char(18))
 End case
```

**Note:** 項目が選択されていなければ、On Menu Selectedフォームイベントは有効にされません。メニューが、メニューバー中のメニューの一つでない場合、*$refMenuIncludingItem* には常に値が与えられ、*$MenuNum* は0となります。

#### 参照 

*メニューの管理*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 152 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


