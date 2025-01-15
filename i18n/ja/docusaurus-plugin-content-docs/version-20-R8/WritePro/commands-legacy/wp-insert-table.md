---
id: wp-insert-table
title: WP Insert table
slug: /WritePro/commands/wp-insert-table
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert table.Syntax-->**WP Insert table** ( *targetObj* ; *mode* {; *rangeUpdate* {; *nbCols* {; *nbRows*}}} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Insert table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジオブジェクト |
| mode | Integer | &#8594;  | 挿入モード |
| rangeUpdate | Integer | &#8594;  | レンジ更新モード |
| nbCols | Integer | &#8594;  | テーブル内に設定するカラム数 |
| nbRows | Integer | &#8594;  | テーブル内に設定する行数 |
| 戻り値 | Object | &#8592; | テーブル参照オブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Insert table.Summary-->**WP Insert table** コマンドは*targetObj* 引数で指定したレンジに、*mode* 引数で指定した挿入モード新しいテーブルを挿入し、それに対応した新しいテーブルオブジェクトを返します。<!-- END REF-->オプションとして、*rangeUpdate* 引数や、規定のカラム数や行数を指定する*nbCols* や *nbRows* 引数を渡すことができます。

*targetObj* 引数には、以下のものを渡します:

* レンジ
* 要素(表 / 段落 / 本文 / ヘッダー / フッター / インライン画像 / セクション / サブセクション)
* 4D Write Pro ドキュメント

**注:** *targetObj* 引数が表であった場合、新たに挿入される表は、使用する*mode* 引数に応じて、元あった表を置き換えるか、元の表の前か後ろに挿入されます。表の内部に他の表を挿入することはできません。

*mode* 引数には、ドキュメント内のテーブルに対して使用される挿入モードを指定する以下の定数のいづれか一つを渡します:

| 定数         | 型    | 値 | コメント                 |
| ---------- | ---- | - | -------------------- |
| wk append  | 倍長整数 | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | 倍長整数 | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | 倍長整数 | 0 | ターゲットのコンテンツを置き換える    |

* *targetObj* 引数がレンジの場合、任意の*rangeUpdate* 引数を使用して以下の定数のいづれか一つを渡すことで、挿入した表が返されるレンジに含まれるかどうかを指定することができます:  
    
| 定数                    | 型    | 値 | コメント                      |  
| --------------------- | ---- | - | ------------------------- |  
| wk exclude from range | 倍長整数 | 1 | 更新されたレンジには、以前のコンテンツのみを含める |  
| wk include in range   | 倍長整数 | 0 | 更新されたレンジに挿入コンテンツを含める      |  
    
*rangeUpdate* 引数を渡さなかった場合、デフォルトでは挿入された表は返されるレンジに含まれます。
* *targetObj* 引数がレンジではなかった場合、*rangeUpdate* 引数は無視されます。

任意の*rangeUpdate* 引数には、以下の定数のいづれか一つを渡し、挿入されたテーブルがレンジに含まれるかどうかを指定します:

| 定数                    | 型    | 値 | コメント                      |
| --------------------- | ---- | - | ------------------------- |
| wk exclude from range | 倍長整数 | 1 | 更新されたレンジには、以前のコンテンツのみを含める |
| wk include in range   | 倍長整数 | 0 | 更新されたレンジに挿入コンテンツを含める      |

*rangeUpdate* 引数を渡さなかった場合、挿入されたテーブルはデフォルトではレンジに含まれます。

*nbCols* および *nbRows* 引数を渡して、テーブル内に定義したいカラムの数と行の数を指定することができます。デフォルトでは、引数が省略された場合、0列のカラムと0行を持った新しいテーブルが作成されます。すると[WP Table append row](../commands/wp-table-append-row.md) コマンドを使用してこれらの要素を追加することができるようになります。

このコマンドは新しいテーブルをテーブルオブジェクトとして返し、これはその後他のWP tableコマンドへと渡すことができます。テーブルはデフォルトのフォント、境界線、カラーで作成されますが、これらは[WP SET ATTRIBUTES](../commands/wp-set-attributes.md) コマンドを使用してカスタマイズすることが可能です。

#### 例題 

空のドキュメントに、3つのカラムと2つの行を持つ新しいテーブルを作成したい場合を考えます:

```4d
 var $WPRange;$WPTable : Object
 $WPRange:=WP Text range(WParea;wk start text;wk end text)
 $WPTable:=WP Insert table($WPRange;wk append;wk exclude from range;3;2)
```

結果:

![](../../assets/en/WritePro/commands/pict3306926.en.png)

#### 参照 

[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get rows](wp-table-get-rows.md)  