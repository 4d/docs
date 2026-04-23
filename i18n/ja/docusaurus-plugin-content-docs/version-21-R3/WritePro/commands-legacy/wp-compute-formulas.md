---
id: wp-compute-formulas
title: WP COMPUTE FORMULAS
slug: /WritePro/commands/wp-compute-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP COMPUTE FORMULAS.Syntax-->**WP COMPUTE FORMULAS** ( *targetObj* : Object )<!-- END REF-->
<!--REF #_command_.WP COMPUTE FORMULAS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.WP COMPUTE FORMULAS.Summary-->**WP COMPUTE FORMULAS** コマンドは、*targetObj* 引数のターゲット内にあるフォーミュラを評価します。<!-- END REF-->

このコマンドは、カレントのコンテキストに基づいて*targetObj* 引数のターゲット内にあるフォーミュラの結果を計算、または更新し、取得した結果を表示します。例えば、挿入されたフォーミュラが時間の場合、その値は**WP COMPUTE FORMULAS** コマンドが呼び出されるたびに変更されます。フォーミュラの評価の詳細については、*フォーミュラの管理* の章を参照してください。

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素(表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / インライン画像またはアンカーされた画像 / テキストボックス)
* 4D Write Pro ドキュメント

**注意:** *targetObj* 引数にセクションを渡す場合、画像フォーミュラ、またはそのセクションか全てのセクションにアンカーされたテキストボックス内のフォーミュラのみが計算されます。ページ、もしくは埋め込みビューにアンカーされていた場合、それらのフォーミュラは計算されません。アンカーされた要素の全てのフォーミュラを計算するためには、*targetObj* 引数にドキュメントを渡します。

## 例題 

ドキュメント内のフォーミュラを更新したい場合:

```4d
 WP COMPUTE FORMULAS(WriteProArea)
```

ドキュメントの最初のセクション内にある全てのフォーミュラを更新したい場合:

```4d
 WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))
```

## 参照 

[WP FREEZE FORMULAS](../commands/wp-freeze-formulas)  
[WP Get formulas](../commands/wp-get-formulas)  
[WP INSERT FORMULA](../commands/wp-insert-formula)  
[WP SET DATA CONTEXT](../commands/wp-set-data-context)  
*フォーミュラの管理*  

