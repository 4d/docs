---
id: wp-get-formulas
title: WP Get formulas
slug: /WritePro/commands/wp-get-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP Get formulas.Syntax-->**WP Get formulas** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get formulas.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| 戻り値 | Collection | &#8592; | フォーミュラのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get formulas.Summary-->**WP Get formulas** コマンドは、*targetObj* 引数内で定義されている全てのフォーミュラをコレクションとして返します。<!-- END REF-->

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素(表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / インライン画像またはアンカーされた画像 / テキストボックス)
* 4D Write Pro ドキュメント

**注意:** *targetObj* 引数にセクションを渡した場合、画像フォーミュラ、またはそのセクションまたは全てのセクションにアンカーされているテキストボックス内のフォーミュラのみが返されます。ページまたは埋め込みビューにアンカーされていた場合、それらのフォーミュラは返されません。アンカーされた要素のフォーミュラを全て取得するためには、*targetObj* にドキュメントを渡してください。

  
**返される値**

**WP Get formulas** はフォーミュラオブジェクトのコレクションを返します。このオブジェクトにはそれぞれ以下のプロパティが一つまたはそれ以上格納されています:

| **プロパティ**        | **型**  | **詳細**                                                                                                                                     |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| \[ \].formula    | オブジェクト | フォーミュラの文字列は**\[ \].formula.source** から取得可能です。フォーミュラは、ターゲット内にあるフォーミュラの**コピー**です。フォーミュラを編集したい場合、編集したものをドキュメントに再度挿入しないと有効になはりません。             |
| \[ \].range      | オブジェクト | フォーミュラのレンジ(アンカーされたピクチャーのフォーミュラに対しては返されません)                                                                                                 |
| \[ \].anchoredID | テキスト   | アンカーされた画像のID(アンカーされた画像のフォーミュラに対してのみ返されます)                                                                                                  |
| \[ \].name       | Text   | Name of the formula, if a name was defined (not returned otherwise). Names can be defined using [WP INSERT FORMULA](../commands/wp-insert-formula.md). |
| \[ \].name       | テキスト   | フォーミュラの名前。定義されていた場合のみ返されます(そうでない場合は返されません)。名前は[WP INSERT FORMULA](../commands/wp-insert-formula.md) を使用することで定義できます。                                    |
| \[ \].owner      | オブジェクト | 4D Write Pro ドキュメント                                                                                                                        |

**注:**

* ターゲットとしてサブセクションを渡した場合、親セクションのフォーミュラが返されます。
* 複数のフォーミュラが返された場合、コレクションはターゲット内のフォーミュラの順番に基づいて並べられます(ただしドキュメントとセクションがターゲットの場合を除く、この場合任意の順番となる)

#### 例題 

ドキュメント内の全てのフォーミュラを取得したい場合を考えます:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea)
```

ドキュメントの最初のセクション内にある全てのフォーミュラを取得したい場合を考えます:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WP Get section(WriteProArea;1))
```

ドキュメント内の全てのアンカーされた画像のフォーミュラを取得したい場合を考えます:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")
```

#### 参照 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get links](wp-get-links.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  
*フォーミュラの管理*  