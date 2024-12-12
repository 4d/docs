---
id: set-cursor
title: SET CURSOR
slug: /commands/set-cursor
displayed_sidebar: docs
---

<!--REF #_command_.SET CURSOR.Syntax-->**SET CURSOR** {( *cursor* )}<!-- END REF-->
<!--REF #_command_.SET CURSOR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| cursor | Integer | &#8594;  | Mac OS ベースのカーソルリソース番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET CURSOR.Summary-->SET CURSOR コマンド はマウスカーソルを、*cursor* 引数に渡したID番号のシステムカーソルへと変更します。<!-- END REF-->

このコマンドはOn Mouse Move [Form event code](form-event-code.md)のコンテキスト内で呼び出されなければなりません。

マウスカーソルは標準の矢印に戻すためには、引数を渡さずにコマンドを呼び出します。

以下は、引数 *cursor* に渡すことのできる基本カーソルです。

| **番号** | **カーソル**                                      |
| ------ | --------------------------------------------- |
| 1      | ![](../assets/en/commands/pict14679.en.png)   |
| 2      | ![](../assets/en/commands/pict14680.en.png)   |
| 4      | ![](../assets/en/commands/pict2478657.en.png) |
| 9000   | ![](../assets/en/commands/pict2478660.en.png) |
| 9001   | ![](../assets/en/commands/pict2478662.en.png) |
| 9003   | ![](../assets/en/commands/pict2478664.en.png) |
| 9004   | ![](../assets/en/commands/pict2478666.en.png) |
| 9005   | ![](../assets/en/commands/pict2478669.en.png) |
| 9006   | ![](../assets/en/commands/pict2478671.en.png) |
| 9021   | ![](../assets/en/commands/pict2478674.en.png) |
| 351    | ![](../assets/en/commands/pict2478676.en.png) |
| 9010   | ![](../assets/en/commands/pict2478688.en.png) |
| 9011   | ![](../assets/en/commands/pict2478678.en.png) |
| 9013   | ![](../assets/en/commands/pict2478680.en.png) |
| 9014   | ![](../assets/en/commands/pict2478682.en.png) |
| 9015   | ![](../assets/en/commands/pict2478686.en.png) |
| 9016   | ![](../assets/en/commands/pict2478684.en.png) |
| 9017   | ![](../assets/en/commands/pict2478690.en.png) |
| 9019   | ![](../assets/en/commands/pict2478692.en.png) |
| 9020   | ![](../assets/en/commands/pict2478694.en.png) |
| 559    | ![](../assets/en/commands/pict2478698.en.png) |
| 560    | ![](../assets/en/commands/pict2478696.en.png) |

**注:** カーソルが使用可能状況とその見た目はOSによって変化する場合があります。

#### 例題 

マウスがフォーム内の変数エリア上に来た際に、カーソルを![](../assets/en/commands/pict2478692.en.png) に表示させたい場合を考えます。この場合、変数のオブジェクトメソッド内に、以下の様に記述します:

```4d
 If(Form event code=On Mouse Move)
    SET CURSOR(9019)
 End if
```
