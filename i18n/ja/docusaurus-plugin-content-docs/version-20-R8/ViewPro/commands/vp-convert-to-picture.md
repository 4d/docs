---
id: vp-convert-to-picture
title: VP Convert to picture
---

<!-- REF #_method_.VP Convert to picture.Syntax -->

**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->

<!-- REF #_method_.VP Convert to picture.Params -->

| 引数       | 型       |                             | 説明                              |                  |
| -------- | ------- | --------------------------- | ------------------------------- | ---------------- |
| vpObject | Object  | ->                          | 変換するエリアを格納した 4D View Pro オブジェクト |                  |
| rangeObj | Object  | ->                          | レンジオブジェクト                       |                  |
| 戻り値      | Picture | <- | エリアの SVGピクチャー                   | <!-- END REF --> |

#### 説明

`VP Convert to picture` コマンドは、<!-- REF #_method_.VP Convert to picture.Summary -->*vpObject* 引数で指定した 4D View Pro オブジェクト (あるいは *vpObject* 内にある、*rangeObj* 引数で指定したレンジ) を、SVGピクチャーに変換します<!-- END REF -->。

このコマンドは以下のような場合に有用です:

- 4D View Pro ドキュメントを 4D Write Pro ドキュメントなど、他のドキュメントに埋め込みたい場合
- 4D View Pro ドキュメントを、4D View Pro エリアに読み込まずに印刷したい場合

*vpObject* 引数には、変換したい 4D View Pro オブジェクトを渡します。 このオブジェクトは事前に [VP Export to object](vp-export-to-object.md) コマンドで解析するか、または [VP EXPORT DOCUMENT](vp-export-document.md) コマンドにより保存してある必要があります。

> 4D View Pro エリアに含まれている式や書式 ([セルフォーマット](../configuring.md#セルフォーマット) 参照) が正常に書き出されるよう、少なくともそれらが一度は評価されていることが SVG変換プロセスには必要です。 事前に評価されていないドキュメントを変換した場合、式や書式が予期せぬ形にレンダリングされている可能性があります。

*rangeObj* には、変換するセルのレンジを渡します。 この引数が省略された場合のデフォルトでは、ドキュメントのコンテンツ全体が変換されます。

書式 (上の注記参照)、ヘッダーの表示状態、カラムと行などを含めた表示属性に準じて、ドキュメントコンテンツは変換されます。 以下の要素の変換がサポートされます:

- テキスト: スタイル / フォント / サイズ / 文字揃え / 向き / 回転 / 書式
- セルの背景: カラー / 画像
- セルの罫線: 太さ / カラー / スタイル
- セルの結合
- ピクチャー
- 行高さ
- カラム幅
- 非表示のカラム / 行
  \> 枠線の表示状態は <a href="#vp-set-print-info">VP SET PRINT INFO</a> で定義されたドキュメント属性に依存します。

> 枠線の表示状態は [VP SET PRINT INFO](vp-set-print-info.md) で定義されたドキュメント属性に依存します。

#### 戻り値

コマンドは SVGフォーマットのピクチャーを返します。

#### 例題

4D View Pro エリアを SVG に変換し、結果をプレビューするためピクチャー変数に戻り値を代入します:

```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) // エリア全体を書き出します
```

#### 参照

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP Export to object](vp-export-to-object.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
