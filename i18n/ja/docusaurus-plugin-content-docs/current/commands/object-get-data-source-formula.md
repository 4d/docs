---
id: object-get-data-source-formula
title: OBJECT Get data source formula
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ) : *formula*<!-- END REF-->

<!--REF #_command_.OBJECT Get data source formula.Params-->

| 引数      | 型                          |                             | 説明                                                                                      |
| ------- | -------------------------- | --------------------------- | --------------------------------------------------------------------------------------- |
| \*      | 演算子                        | &#8594; | 指定時、object はオブジェクト名(文字列)<br/>省略時: object は変数またはフィールド |
| object  | any                        | &#8594; | オブジェクト名( \* 指定時)、または<br/>変数やフィールド( \* 省略時)        |
| formula | 4D.Formula | &#8592; | フォームオブジェクトに割り当てられているフォーミュラ(フォーミュラが何も割り当てられていない場合には `Null`)           |

<!-- END REF-->

## 説明

**OBJECT Get data source formula** コマンドは<!--REF #_command_.OBJECT Get data source formula.Summary--> *object* 引数と *\** で指定したオブジェクトに割り当てられたフォーミュラを(あれば)返します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。 この演算子を省略した場合には *object* 引数でフィールドまたは変数を指定します。 この場合、文字列ではなくてフィールドまたは変数参照を渡します(フィールドまたは変数オブジェクトのみ)。

フォームオブジェクトにフォーミュラが割り当てられている場合、それはランタイムにオブジェクトのデータソースとして振る舞います。

もしこのコマンドがフォーミュラが割り当てられていないオブジェクトに対して適用された場合、コマンドは自動的に割り当てられている[ダイナミックフォーム変数](../FormObjects/properties_Object.md#ダイナミック変数)を返します。\
フォームオブジェクトが存在しないかフォーミュラをサポートしていない場合、 `Null` を返します。

## 例題

オブジェクトに割り当てられているフォーミュラ(あれば)をチェックしたい場合を考えます:

```4d
$formula:=OBJECT Get data source formula(*; "myInput")

```

## 参照

[OBJECT SET DATA SOURCE FORMULA](object-set-data-source-formula.md)<br/>
[LISTBOX GET COLUMN FORMULA](../commands-legacy/listbox-get-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT GET VALUE](../commands-legacy/object-get-value.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1852                        |
| スレッドセーフ | &cross; |


