---
id: set-list-item-properties
title: SET LIST ITEM PROPERTIES
slug: /commands/set-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PROPERTIES.Syntax-->**SET LIST ITEM PROPERTIES** ( {* ;} *list* ; *itemRef* ; *enterable* ; *styles* {; *icon* {; *color*}} )<br/>**SET LIST ITEM PROPERTIES** ( * ; *list* ; * ; *enterable* ; *styles* {; *icon* {; *color*}} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 演算子, 倍長整数 | &#8594;  | 項目参照番号, または 0: リストに最後に追加された項目, または *: リスト中のカレント項目 |
| enterable | Boolean | &#8594;  | TRUE = 入力可, FALSE = 入力不可 |
| styles | Integer | &#8594;  | 項目のフォントスタイル |
| icon | Text, Integer | &#8594;  | ピクチャー名または番号 (アイコンを使用しない場合は "" または 0) |
| color | Integer | &#8594;  | RGBカラー値 または -1 = 元のカラーにリセット |

<!-- END REF-->

## 説明 

<!--REF #_command_.SET LIST ITEM PROPERTIES.Summary-->**SET LIST ITEM PROPERTIES** コマンドは、引数*list*に渡された参照番号またはオブジェクト名のリスト内で、*itemRef*によって指定された項目を変更します。<!-- END REF-->

オプションの第一引数 *\** を渡すと、*list* 引数はフォーム上のリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。リストオブジェクトを一つしか使わない場合や、2番目の *\** を使用しない場合は、両方のシンタックスを使用できます。他方フォーム上に同じ階層リストを参照する複数のオブジェクトがある場合で、2番目の *\** を渡してカレント項目を参照する場合、それぞれのオブジェクトが個別にカレント項目をもつので、オブジェクト名に基づくシンタックスを使用しなければなりません。

*itemRef*には参照番号を渡すことができます。渡された項目参照番号を持つ項目が存在しない場合、コマンドは何も動作しません。オプションとして*itemRef*に0を渡すことによって、[APPEND TO LIST](append-to-list.md) コマンドを使用してリストに追加した最後の項目を変更することができます。

最後に、引数*itemRef*に *\** を渡すことができます。この場合、コマンドはリストのカレント項目に対して適用されます。手動で複数のリスト項目が選択されている場合、最後に選択された項目がカレントリスト項目となります。選択された項目が存在しない場合、コマンドは何も行いません。

項目参照番号を使用して作業を実行する場合、項目がユニークな参照番号を持つリストを作成します。そうでなければ、項目を区別できません。詳細については、*階層リストの管理* を参照してください。

**注:** 項目のテキストまたはそのサブリストを変更するには、[SET LIST ITEM](set-list-item.md) コマンドを使用します。

項目を入力可能にする場合は、*enterable*引数にTRUEを渡し、そうでない場合はFALSEを渡します。

**重要**: 項目を入力可にするには、その項目が入力可であるリストに属している必要があります。

[OBJECT SET ENTERABLE](object-set-enterable.md) コマンドを使用すると、リスト全体を入力可または入力不可にすることができます。**SET LIST ITEM PROPERTIES** コマンドを使用すると、個々のリスト項目を入力可または入力不可にすることができます。入力可プロパティをリストレベルで変更しても、項目の入力可プロパティは変更されません。しかし、項目に入力できるのは、そのリストが入力可な場合のみです。

項目のフォントスタイルは、*styles*引数で指定します。以下の定義済定数の1つ、または複数を組み合わせて渡します:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Plain     | 倍長整数 | 0 |
| Underline | 倍長整数 | 4 |

*icon* には、項目のアイコンとして使用するピクチャーを渡します。ピクチャーファイル参照、またはライブラリのピクチャー (バイナリデータベースのみ) が使用できます。

* ピクチャーファイル参照 (テキスト): この場合、 **path:<filesystem>** の形で記述します。詳細については *filesystem パス名* を参照ください。
* ライブラリピクチャー (倍長整数またはテキスト、バイナリデータベースのみ): ピクチャーの名前または番号を渡します。名前が重複することがあるのに対しピクチャー番号はユニークである(重複しない)ため、名前よりも番号を使用することが一般に推奨されます。番号を使用する場合は、*icon* 引数にUse PicRef+N を渡します。ここでのNは、ピクチャーライブラリでのピクチャーの参照番号を意味します。Use PicRef は、*Hierarchical Lists* テーマ内にある定義済み定数です。
* 項目に対してグラフィックを何も設定したくない場合には、*icon* に空の文字列 ("") またはゼロ (0) を渡します。

**注:**

* ピクチャーライブラリは プロジェクトモードのデータベースではサポートされないため、ピクチャーファイル参照を使った方法が推奨されます。
* 4D ピクチャー式 (フィールド, 変数, 等) を使用して項目アイコンを指定するには、[SET LIST ITEM ICON](set-list-item-icon.md) コマンドを使用します。

*color* 引数 (オプション) を使用して、項目テキストの色を変更することができます。この色はRGBフォーマット、例えば0x00RRGGBB形式の4バイトの倍長整数で指定しなくてはなりません。このフォーマットに関する詳細は、[OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドの説明を参照してください。項目をオリジナルの色にリセットするには、*color*引数に-1を渡します。

## 例題 1 

[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドの例題参照

## 例題 2 

以下の例題はカレント項目のテキストを太字の赤に変更します: 

```4d
 SET LIST ITEM PROPERTIES(list;*;True;Bold;0;0x00FF0000)
```

## 参照 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
*Hierarchical Lists*  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 386 |
| スレッドセーフである | &cross; |


