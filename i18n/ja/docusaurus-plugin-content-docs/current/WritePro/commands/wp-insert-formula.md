---
id: wp-insert-formula
title: WP Insert formula
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert formula.Syntax-->**WP Insert formula** ( *targetObj* ; *formula* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert formula.Params-->

| 引数          | 型      |                             | 説明                                           |
| ----------- | ------ | --------------------------- | -------------------------------------------- |
| targetObj   | Object | &#8594; | レンジまたは要素または4D Write Pro ドキュメント               |
| formula     | Object | &#8594; | フォーミュラオブジェクト、またはformula とname プロパティを持つオブジェクト |
| mode        | Number | &#8594; | 挿入モード                                        |
| rangeUpdate | Number | &#8594; | 挿入されたコンテンツをレンジ内に含めるか含めないかを指定                 |
| 戻り値         | Object | &#8592; | フォーミュラの結果を表すテキストレンジオブジェクト                    |

<!-- END REF-->

#### 説明

**WP Insert formula** コマンドは、<!--REF #_command_.WP Insert formula.Summary-->*targetObj* 引数で指定したターゲット内に*formula* 引数のフォーミュラを、*mode* 引数で指定したモードで挿入しその結果のテキストレンジを返します。<!-- END REF-->

*targetObj* 引数には、以下のものを渡すことができます:

- レンジ
- 要素(表組 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / インライン画像)
- 4D Write Pro ドキュメント

*formula* 引数には、評価される4D フォーミュラを渡します。 以下のものを渡すことができます: 以下のものを渡すことができます:

- [**Formula**](../../API/FunctionClass.md#formula) または [**Formula from string**](../../API/FunctionClass.md#formula-from-string) コマンドで作成された[フォーミュラオブジェクト](../../API/FunctionClass.md#formula-objects)
- または以下の2つのプロパティを格納しているオブジェクト:

| **プロパティ** | **型**  | **Description**                                                                                                                                                                                      |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | Text   | ドキュメント内で表示するフォーミュラの名前                                                                                                                                                                                |
| formula   | Object | [**Formula**](../../API/FunctionClass.md#formula) または [**Formula from string**](../../API/FunctionClass.md#formula-from-string) コマンドで作成された[フォーミュラオブジェクト](../../API/FunctionClass.md#formula-objects) |

フォーミュラの*name* プロパティがあるオブジェクトを使用する場合、ドキュメント内で、フォーミュラが参照として表示される場合にはフォーミュラ参照ではなくそのname の名前が表示され、値または記号として表示される場合にはフォーミュラtip に名前が表示されます。 *name* プロパティが空の文字列を格納しているか省略されている場合、それはオブジェクトから削除され、デフォルトでフォーミュラが表示されます。 詳細な情報については、[フォーミュラの管理](../managing-formulas.md) のページを参照してください。

*mode* 引数には、使用する挿入モードを指定する、以下の定数のいずれか一つを渡します:

| 定数         | 型       | 値 | 説明                   |
| ---------- | ------- | - | -------------------- |
| wk append  | Integer | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | Integer | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | Integer | 0 | ターゲットのコンテンツを置き換える    |

- *targetObj* がレンジである場合、オプションの*rangeUpdate* 引数に以下の定数のいづれか一つを渡すことで挿入された*formula* 引数のフォーミュラが結果のレンジに含まれるかどうかを指定することができます:

| 定数                    | 型       | 値 | 説明                                                |
| --------------------- | ------- | - | ------------------------------------------------- |
| wk exclude from range | Integer | 1 | 挿入されたコンテンツを更新されたレンジに含めない                          |
| wk include in range   | Integer | 0 | 挿入されたコンテンツを更新されたレンジに含める(デフォルト) |

*rangeUpdate* 引数を渡さなかった場合、デフォルトでは挿入された*formula* 引数のフォーミュラは結果のレンジに含まれます。

- *targetObj* がレンジではない場合、*rangeUpdate* は無視されます。

:::note

フォーミュラオブジェクトは、呼び出されたときに、そのフォーミュラオブジェクトを作成したデータベースまたはコンポーネントのコンテキスト内で評価されるという点に注意してください。

:::

#### 例題 1

全てのCurrent date フォーミュラを、フォーマットされた文字列で置き換えたい場合を考えます:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // 検索するフォーミュラを定義
 $find:=Formula(Current date)
 
  // 置換するフォーミュラを定義
 $newFormula:=Formula(String(Current date;System date long))
 
  // ドキュメント内にあるフォーミュラを全て検索
 $_formulas:=WP Get formulas(WriteProArea)
 
  // WP Get formulas から取得したコレクション内をクエリする
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)
 
  // WP Get formulas から取得したコレクション内をクエリする
 For each($formula;$_formulas)
    WP Insert formula($formula.range;$newFormula;wk replace)
 End for each
```

#### 例題 2

顧客の名前にフォーミュラによる名前を使用したい場合を考えます:

```4d
  // データを追加する
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  // name プロパティを持つフォーミュラオブジェクトを作成する
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  // テキストとして挿入
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP Insert formula($range;$o;wk append)
```

結果:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

#### 例題 3

フォーミュラを黄色でハイライトしたい場合を考えます:

```4d
WParea:=WP New
WP SET TEXT(WParea; "The project was completed on: "; wk append)
$range1:=WP Insert formula(WParea; Formula(Current date); wk append)

WP SET ATTRIBUTES($range1; wk background color; "yellow")

```

結果:

![](../../assets/en/WritePro/commands/WPpic1.png)

#### 参照

*Managing formulas*\
[WP COMPUTE FORMULAS](../commands-legacy/wp-compute-formulas.md)</br>
[WP FREEZE FORMULAS](../commands-legacy/wp-freeze-formulas.md)</br>
[WP Get formulas](../commands-legacy/wp-get-formulas.md)