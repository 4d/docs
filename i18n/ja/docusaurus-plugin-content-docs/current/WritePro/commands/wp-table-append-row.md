---
id: wp-table-append-row
title: WP Table append row
displayed_sidebar: docs
---

<!--REF #_command_.WP Table append row.Syntax-->**WP Table append row** ( *tableRef* ; *value* {; *value2* ; ... ; *valueN*} )  : Object<br/>**WP Table append row** ( *tableRef* ; *valueColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Table append row.Params-->

| 引数        | 型                                         |                             | 説明              |
| --------- | ----------------------------------------- | --------------------------- | --------------- |
| tableRef  | Object                                    | &#8594; | 表組の参照           |
| value     | Text, Number, Time, Date, Picture, Object | &#8594; | 行内に設定する値        |
| valueColl | Collection                                | &#8594; | 行内に設定する値のコレクション |
| 戻り値       | Object                                    | &#8592; | 行レンジオブジェクト      |

<!-- END REF-->

#### 説明

**WP Table append row** コマンドは<!--REF #_command_.WP Table append row.Summary-->*tableRef* 引数で指定した表組に行を一つ追加し、その中に*value* or a *valueColl* で指定した値を入れ、それに対応する行レンジオブジェクトを返します<!-- END REF-->

このコマンドは2種類のシンタックスをサポートします:

- **引数として値を使用:**
  *value* 引数を使用して追加した値の分だけ行内にセルが追加されます。 異なる型の、任意の数の値を渡すことができます。

- **引数として値のコレクションを使用(*valueColl)*:**
  *valueColl* コレクション内の値を使用して行内に値を入れます。 コレクション内の各要素が行内のセルに対応します。

  以下の型の値が両シンタックスにおいてサポートされます: テキスト、数値、時間、日付、ピクチャー、(行の要素を返すフォーミュラまたは命名フォーミュラを格納した)オブジェクト。

デフォルトのセルの揃えは値の型によります:

- テキスト: 左揃え
- ピクチャー: 中央揃え
- その他の型(数値、日付、時間): 右揃え

:::note 注記

- 配列型の値はサポートされていません。
- 予期せぬ結果にならないように、値の数またはコレクションのサイズが表組内のセルの数と合致するようにしてください。

:::

コマンドは新しい行を行レンジオブジェクトとして返します。

#### 例題 1

空の表組を作成し、異なるサイズの行を複数追加したい場合を考えます。 以下のように書くことができます:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")
```

![](../../assets/en/WritePro/commands/pict3306976.en.png)

#### 例題 2

空の表組を作成し、コレクションを使用して行を追加したい場合を考えます:

```4d
$table:=WP Insert table(WParea; wk replace; wk include in range)

$row:=WP Table append row($table; "Reference"; "Date"; "Time"; "rnd 1"; "rdn 2")
WP SET ATTRIBUTES($row; wk background color; "lightgrey")

$colItems:=[]
$colItems.push("KX-825")
$colItems.push(Formula(Current date))
$colItems.push(Formula(String(Current time; HH MM SS)))
$colItems.push(Formula(Random))
$colItems.push({name: "RND NUMBER"; formula: Formula(Random)})

$row:=WP Table append row($table; $colItems)
```

![](../../assets/en/WritePro/commands/WPpic2.png)

#### 例題 3

請求書アプリケーションにおいて、関連した請求書項目を自動的に表示する表組を作成したい場合を考えます:

```4d
 var $wpTable;$wpRange : Object
 
 $wpRange:=WP Text range(4DWPArea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append) // テーブルを作成します
 
  // ヘッダー行を追加します
 $row:=WP Table append row($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")
 WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)
 
  // apply to selection コマンドを使います
 APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))
 
  // フッター行を追加します
 $row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))
 
  // 表組の書式を設定します
 $range:=WP Table get columns($wpTable;1;5)
 WP SET ATTRIBUTES($range;wk width;"80pt")
 WP SET ATTRIBUTES($wpTable;wk font size;10)
```

![](../../assets/en/WritePro/commands/pict3369663.en.png)

#### 参照

[WP Insert table](../commands-legacy/wp-insert-table.md)</br>
[WP Table get rows](../commands-legacy/wp-table-get-rows.md)
