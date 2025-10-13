---
id: object-set-data-source-formula
title: OBJECT SET DATA SOURCE FORMULA
---

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Syntax-->**OBJECT SET DATA SOURCE FORMULA** ( {* ;} *object* ; *formula* )<!-- END REF-->

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Params-->

| 引数      | 型                          |                             | 説明                                                                                      |
| ------- | -------------------------- | --------------------------- | --------------------------------------------------------------------------------------- |
| \*      | 演算子                        | &#8594; | 指定時、object はオブジェクト名(文字列)<br/>省略時: object は変数またはフィールド |
| object  | any                        | &#8594; | オブジェクト名( \* 指定時)、または<br/>変数やフィールド( \* 省略時)        |
| formula | 4D.Formula | &#8594; | データソースとして割り当てるフォーミュラ                                                                    |

<!-- END REF-->

## 説明

**OBJECT SET DATA SOURCE FORMULA** コマンドは、<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Summary--> *object* 引数と *\** で指定したオブジェクトのデータソースとしてフォーミュラ(式)を割り当てます<!-- END REF-->。 フォーミュラは [`4D.Formula`](../API/FunctionClass.md#formula-objects) オブジェクトとしてとして提供されていなければなりません。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。 この演算子を省略した場合には *object* 引数でフィールドまたは変数を指定します。 この場合、文字列ではなくてフィールドまたは変数参照を渡します(フィールドまたは変数オブジェクトのみ)。

*formula* 引数のフォーミュラは、ランタイムでオブジェクトが値を取得するためのソースとして機能します。 これによって、計算された値、条件付き表示、あるいは派生データなどの動的な動作が可能になります。

*formula* 引数に *Null* が渡された場合、4D はオブジェクトのデータソースを[ダイナミックフォーム変数](../FormObjects/properties_Object.md#ダイナミック変数)へとリセットします。

コマンドが、存在しないオブジェクトあるいはフォーミュラをサポートしないオブジェクトに対して適用された場合、何もしません。

:::note 注記

- フォーミュラは、オブジェクトが属するフォームのコンテキストにおいて実行されます。 ネストされたフォーム(例: サブフォーム)の場合、予期せぬ振る舞いを避けるため、フォーミュラが適切なフォームコンテキストで定義され割り当てられているようにしてください。
- フォーミュラを入力オブジェクトなどの値を変更可能なオブジェクトに対して割り当てた場合、フォーミュラが必ず[**代入可能**](../Concepts/quick-tour.md#代入可-vs-代入不可の式)なフォーミュラであることを確認してください。

:::

## 例題

入力オブジェクトに式を動的に割り当てたい場合を考えます。 例えば、基本価格と割引率に基づいて割引価格を表示したいとします:

```4d

Form.basePrice := 100
Form.discount := 0.2

$discountedFormula := Formula(Form.basePrice * (1 - Form.discount))

OBJECT SET DATA SOURCE FORMULA(*;"DiscountedPriceInput"; $discountedFormula)

```

## 参照

[OBJECT Get data source formula](object-get-data-source-formula.md)<br/>
[LISTBOX SET COLUMN FORMULA](../commands-legacy/listbox-set-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT SET VALUE](../commands-legacy/object-set-value.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1851                        |
| スレッドセーフ | &cross; |


