---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| 引数          | 型                                              |                             | 説明                             |
| ----------- | ---------------------------------------------- | --------------------------- | ------------------------------ |
| targetObj   | Object                                         | &#8594; | レンジまたは要素または4D Write Pro ドキュメント |
| attribName  | Text                                           | &#8594; | 取得する属性の名前                      |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | ターゲットの属性のカレントの値                |
| attribColl  | Collection                                     | &#8594; | 取得する属性名のコレクション                 |
| 戻り値         | Object                                         | &#8592; | 属性名と値                          |

<!-- END REF-->

#### 説明

**WP Get attributes** コマンドは、<!--REF #_command_.WP Get attributes.Summary-->4D Write Proレンジ、ヘッダー/フッター/本文/表、あるいはドキュメント内のあらゆる属性の値を返します。<!-- END REF--> このコマンドを使用すると4D Write Proのどのような内部属性(文字、段落、ドキュメント、表組み、画像など)にもアクセスすることができます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

- レンジ
- 要素(ヘッダー / フッター / 本文 / 表 / 段落 / アンカーされた画像またはインラインの画像 / セクション / サブセクション / スタイルシート)
- 4D Write Pro ドキュメント

*attribName* 引数には、取得したい属性の名前を渡します。

また、*attribColl* 引数には属性名のコレクションを渡すこともできます。この場合、コマンドは*attribColl* 引数に渡した属性とそれに対応する値を格納したオブジェクトを返します。

渡すことのできる属性の包括的な一覧と、そのスコープおよび値については、*4D Write Pro属性* の章を参照してください。

引数として渡した要素内の同じ属性に対して異なる値があった場合、コマンドは以下のように対応します:

- 数値に対しては、wk mixed を返します。
- 配列の場合、空の配列を返します(attribValue が配列として定義されていた場合にはタブストップ、カラー)。ただしwk text shadow offset に関しては、配列の値は常に2つのエントリーを含みます。これらのエントリーは水平方向あるいは垂直方向のオフセット(あるいはその両方)がミックスされていた場合にはwk mixed が返されます。
- 文字列の値に対しては、空の文字列を返します。
- ピクチャーの値に対しては、空のピクチャーを返します。

**注意**: *targetObj* オブジェクトに段落スタイルシートと文字スタイルシートが格納されていた場合、段落スタイルシート名が返されます。

#### 例題 1

選択されたエリアの背景色を取得したい場合を考えます:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

#### 例題 2

選択したエリアのフォントサイズ、背景色と背景スタイルを、コレクションを使用して取得したい場合を考えます:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

#### 参照

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)