---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | マーカーの位置 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get printed height.Summary-->**Get printed height** コマンドは、 [Print form](print-form.md) コマンドを使って印刷された部分全体の高さ（ピクセル単位）を返します。<!-- END REF-->

返される値は、0（ページ上端）から[GET PRINTABLE AREA](get-printable-area.md) コマンドによって返される全体の高さ（印刷可能領域の最大サイズ）までの間の値です。 

[Print form](print-form.md) コマンドを使って新しいセクションを印刷する場合は、新しいセクションの高さがこの値に加えられます。使用できる印刷可能領域がこのセクションの印刷に不十分である場合は、新しいページが作成され、値0が返されます。

右および左の印刷可能マージンは、上および下のマージン（[SET PRINTABLE MARGIN](set-printable-margin.md) コマンドを使って指定可能）とは異なり、返される値に影響を与えません。

**注:** 印刷管理ならびに4D用語に関する詳細は、[GET PRINTABLE MARGIN](get-printable-margin.md) コマンドの説明を参照してください。

#### 参照 

[GET PRINTABLE AREA](get-printable-area.md)  
[Print form](print-form.md)  
[SET PRINTABLE MARGIN](set-printable-margin.md)  