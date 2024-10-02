---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
slug: /WritePro/commands/wp-reset-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *attribName* {; *attribName2* ; ... ; *attribNameN*} )<!-- END REF-->
<!--REF #_command_.WP RESET ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | オブジェクト | &#x1F852; | 4D Write Pro ドキュメント、レンジ または 要素の参照 |
| attribName | 文字 | &#x1F852; | 除去したい属性の名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP RESET ATTRIBUTES.Summary-->**WP RESET ATTRIBUTES**コマンドは引数として渡された4D Write Proレンジ、要素あるいはドキュメント内の、一つ以上の属性の値をリセットします。<!-- END REF-->このコマンドは4D Write Proのどのような内部(文字、段落、ドキュメント、表または画像)の属性でも除去する事ができます。

第一引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素 (ヘッダー / フッター / 本文 / テーブル / 段落 / アンカーされた画像あるいはインライン画像 / セクション / サブセクション/スタイルシート)
* 4D Write Pro ドキュメント

**WP RESET ATTRIBUTES**コマンドを使用して属性の値が除去されたとき、*targetObj* オブジェクトにはデフォルト値が適用されます。デフォルト値については*4D Write Pro属性*の章に記されています。

**注:** 

* **WP RESET ATTRIBUTES** がセクション/サブセクションオブジェクトに対して適用された場合、属性は親セクションあるいはドキュメントのものを継承することになります。
* **WP RESET ATTRIBUTES** がスタイルシートオブジェクトに対して適用された場合、その属性はデフォルト("通常")スタイルシートである場合を除いて削除されます。削除された場合、デフォルトの値が属性に適用されます("通常"スタイルシートが全てのスタイルシート属性を定義します)。

引数として渡された要素内にリセットしたい属性が定義されていなかった場合、コマンドは何もしません。

#### 例題 

以下のセレクションから複数の属性を除去したい場合を考えます:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

以下のコードを実行します:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

その結果ドキュメントは以下のようになります:

![](../../assets/en/WritePro/commands/pict2643863.en.png)

#### 参照 

*4D Write Pro属性*  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  