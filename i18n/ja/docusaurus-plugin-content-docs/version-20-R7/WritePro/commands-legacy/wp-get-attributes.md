---
id: wp-get-attributes
title: WP GET ATTRIBUTES
slug: /WritePro/commands/wp-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP GET ATTRIBUTES.Syntax-->**WP GET ATTRIBUTES** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.WP GET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro ドキュメント、レンジ または要素 |
| attribName | Text | &#8594;  | 取得する属性の名前 |
| attribValue | テキスト, 数値, 配列, コレクション, ピクチャー, 日付 | &#x1F858; | テキストのレンジの属性のカレント値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP GET ATTRIBUTES.Summary-->**WP GET ATTRIBUTES**コマンドは、4D Write Proレンジ、ヘッダー/フッター/本文/表、あるいはドキュメント内のあらゆる属性の値を返します。<!-- END REF-->このコマンドを使用すると4D Write Proのどのような内部属性(文字、段落、ドキュメント、テーブル、画像など)にもアクセスすることができます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素 (ヘッダー / フッター / 本文 / 表 / 段落 / アンカー画像あるいはインライン画像/セクション/サブセクション/スタイルシート)
* 4D Write Pro ドキュメント

*attribName* 引数に渡すことのできる属性の包括的な一覧と、そのスコープおよび値については、*4D Write Pro属性* の章を参照してください。

引数として渡した要素内の同じ属性に対して異なる値があった場合、コマンドは以下のように対応します:

* 数値に対しては、wk mixed を返します。
* 配列の場合、空の配列を返します(*attribValue*が配列として定義されていた場合にはタブストップ、カラー)。ただしwk text shadow offset に関しては、配列の値は常に2つのエントリーを含みます。これらのエントリーは水平方向あるいは垂直方向のオフセット(あるいはその両方)がミックスされていた場合にはwk mixedが返されます。
* 文字列の値に対しては、空の文字列を返します。
* ピクチャーの値に対しては、空のピクチャーを返します。

**注**: *targetObj* オブジェクトに段落スタイルシートと文字スタイルシートが格納されていた場合、段落スタイルシート名が返されます。

#### 例題 

選択されたエリアの背景色を取得したい場合を考えます:

```4d
 $range:=WP Selection range(*;"WParea")
 WP GET ATTRIBUTES($range;wk background color;$bcol)
```

#### 参照 

*4D Write Pro*  
*4D Write Pro属性*  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  