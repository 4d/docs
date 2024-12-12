---
id: graph-settings
title: GRAPH SETTINGS
slug: /commands/graph-settings
displayed_sidebar: docs
---

<!--REF #_command_.GRAPH SETTINGS.Syntax-->**GRAPH SETTINGS** ( *graph* ; *xmin* ; *xmax* ; *ymin* ; *ymax* ; *xprop* ; *xgrid* ; *ygrid* ; *title* {; *title2* ; ... ; *titleN*} )<!-- END REF-->
<!--REF #_command_.GRAPH SETTINGS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| graph | Picture | &#8594;  | グラフエリアまたはピクチャ変数 |
| xmin | Integer, Date, Time | &#8594;  | 比例グラフのｘ軸の最小値  (線または点グラフのプロットのみ) |
| xmax | Integer, Date, Time | &#8594;  | 比例グラフのｘ軸の最大値  (線または点グラフのプロットのみ) |
| ymin | Integer | &#8594;  | ｙ軸の最小値 |
| ymax | Integer | &#8594;  | ｙ軸の最大値 |
| xprop | Boolean | &#8594;  | TRUE: プロポーショナルX軸;  FALSE: 通常のX軸 (線または点グラフのプロットのみ) |
| xgrid | Boolean | &#8594;  | TRUE: X軸グリッド; FALSE: X軸グリッドなし (xprop=TRUEの場合のみ) |
| ygrid | Boolean | &#8594;  | TRUE: Y軸グリッド; FALSE:Y軸グリッドなし |
| title | Text | &#8594;  | 凡例 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GRAPH SETTINGS.Summary-->GRAPH SETTINGS はフォームに表示されるグラフの設定を変更します。<!-- END REF-->グラフは [GRAPH](graph.md) コマンドで定義済みでなければなりません。 GRAPH SETTINGS は円グラフには効果ありません。このコマンドはフォームと同じプロセスで呼び出されていなければなりません。

**注:** グラフが[GRAPH](graph.md)コマンドの*graphSettings*引数にObject定数を渡して生成されていた際にはこのコマンドを呼び出してはいけません。詳細な情報については、[GRAPH](graph.md)コマンドの説明を参照して下さい。

*xmin*, *xmax*, *ymin*, そして *ymax* 引数はすべてそれぞれの軸の最小値と最大値を設定します。これらの引数ペアのいずれかがヌル値の場合 (0, ?00:00:00?, または !00/00/00!)、デフォルトのグラフ値が使用されます。 *xmin* と *xmax* 引数は、比例グラフに対してのみ(*xprop* が **True** のときのみ)有効になります。

引数*xprop*は、線グラフ(タイプ4) とエリアグラフ(タイプ5) と点グラフ(タイプ6) に対する比例プロットを有効にします。Trueであれば、点の値に従ってX軸上の各点をプロットします。ただし、値が数値、時間、日付の場合に限ります。

*xgrid*と*ygrid*はグリッドラインを表示または非表示にします。X軸のグリッドは、プロットが比例する点グラフまたは線グラフの場合にのみ表示されます。

引数*title*は、指定した文字列を凡例のラベルとして表示します。

#### 例題 

[GRAPH](graph.md "GRAPH") コマンドの例題を参照。

#### 参照 

[GRAPH](graph.md)  