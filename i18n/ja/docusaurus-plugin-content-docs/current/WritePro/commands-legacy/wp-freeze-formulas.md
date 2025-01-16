---
id: wp-freeze-formulas
title: WP FREEZE FORMULAS
slug: /WritePro/commands/wp-freeze-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP FREEZE FORMULAS.Syntax-->**WP FREEZE FORMULAS** ( *targetObj* {; *recompute*} )<!-- END REF-->
<!--REF #_command_.WP FREEZE FORMULAS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| recompute | Integer | &#8594;  | Option to control recomputing |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP FREEZE FORMULAS.Summary-->**WP FREEZE FORMULAS** コマンドは、*targetObj* 引数で指定したターゲット内のフォーミュラの中身を"固定化"させます。<!-- END REF-->

このコマンドは、*targetObj* 引数で指定したターゲット内にあるそれぞれのフォーミュラを、その計算された値(静的なテキストまたは画像)で置き換えます。これによって*targetObj* 引数のターゲット自身内にはフォーミュラへの参照しか残らないため、軽量なドキュメントを作成することができます。

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素 (表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / インライン画像またはアンカーされた画像 / テキストボックス)
* 4D Write Pro ドキュメント

**注:** 

* targetObj 引数のターゲットが、フォーミュラがまだ計算されていない、画面外のエリアを指定している場合、それらのフォーミュラは固定化される前に評価されます。言い換えると、画面外のドキュメントが読み込まれた場合、フォーミュラは計算されません。
* 引数にセクションを渡した場合、画像フォーミュラ、またはそのセクションか全てのセクションにアンカーされたテキストボックス内のフォーミュラのみが固定化されます。ページ、もしくは埋め込みビューにアンカーされていた場合、それらのフォーミュラは計算されません。アンカーされた要素の全てのフォーミュラを固定化するためには、*targetObj* 引数にドキュメントを渡します。

任意の*recompute* 引数を使用すると、*targetObj* 引数内のフォーミュラが固定化される前に再計算されるかどうかを定義することができます。"4D Write Pro" テーマ内の一つの定数を渡すことができます:

| 定数                              | 型    | 値 | コメント                                                       |
| ------------------------------- | ---- | - | ---------------------------------------------------------- |
| wk do not recompute expressions | 倍長整数 | 2 | ドキュメントまたは変数内の全てのフォーミュラが、印刷時または固定化時に再計算されないように指定します。        |
| wk recompute expressions        | 倍長整数 | 0 | ドキュメントまたは変数内の全てのフォーミュラが、印刷時または固定化時に再計算されるように指定します(デフォルト値)。 |

デフォルトでは、*recompute* が省略されていた場合、式は再計算されます。

**警告:** *キャリーオーバー行* があった場合には、これらはtargetObj を固定化したときに通常の行へと変換されます。結果として、ページサイズや向きが変更された場合、あるいはドキュメントが書き出された場合、最終的なレイアウトにおいてはこれらは移動している可能性があります。

#### 例題 

ドキュメント内のフォーミュラを固定化する場合:

```4d
 WP FREEZE FORMULAS(WriteProArea)
```

ドキュメントの最初のセクション内のフォーミュラを再計算せずに全て固定化する場合:

```4d
 WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)
```

#### 参照 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  