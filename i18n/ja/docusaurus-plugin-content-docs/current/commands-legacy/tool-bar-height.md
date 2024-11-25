---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | ツールバーの高さ(ピクセル単位で表示) または、ツールバーが非表示の場合、 0 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Tool bar height.Summary-->Tool bar height コマンドはカレントの表示されているツールバーの高さを、ピクセル単位で返します。<!-- END REF-->コンテキストに応じて、4Dデザイ ンモードツールバーの場合と、[Open form window](open-form-window.md) コマンドを使用して作成されたカスタムのツールバーの場合があります(デザインモードのツールバーはカスタムのツールバーが表示されている場合には自動的 に非表示になります)。

どのツールバーも表示されていない場合には、コマンドは0を返します。

#### 参照 

[HIDE TOOL BAR](hide-tool-bar.md)  
[Menu bar height](menu-bar-height.md)  
[SHOW TOOL BAR](show-tool-bar.md)  