---
id: select-rgb-color
title: Select RGB Color
slug: /commands/select-rgb-color
displayed_sidebar: docs
---

<!--REF #_command_.Select RGB Color.Syntax-->**Select RGB Color** {( *defaultColor* {; *message*} )} : Integer<!-- END REF-->
<!--REF #_command_.Select RGB Color.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| defaultColor | Integer | &#8594;  | 事前に選択されたRGBカラー |
| message | Text | &#8594;  | 選択ウィンドウのタイトル |
| 戻り値 | Integer | &#8592; | RGBカラー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Select RGB Color.Summary-->**Select RGB Color**コマンドはシステムカラー選択ウィンドウを表示し、ユーザによって選択された色のRGB値を返します。<!-- END REF-->

システムカラー選択ウィンドウは以下のように表示されます。

| **Macintosh**                                | **Windows**                                 |
| -------------------------------------------- | ------------------------------------------- |
| ![](../assets/en/commands/pict942577.fr.png) | ![](../assets/en/commands/pict43385.en.png) |

オプションの引数*defaultColor* を使用して、色を事前に選択できます。例えばこの引数を使用して、ユーザーが最後に設定した色をデフォルトで復元することができます。RGBのフォーマットカラーの値をこの引数に渡します ([OBJECT SET RGB COLORS](object-set-rgb-colors.md)コマンドの説明参照)。*SET RGB COLORS*テーマにある定数の一つを使用できます。  
引数*defaultColor*を省略したり0を渡すと、ダイアログボックスが開いたときに黒色が選択されます。

オプションの引数*message*を使用して、システムウィンドウのタイトルをカスタマイズできます。この引数が省略されると、タイトル"カラー" がデフォルトで表示されます。

このダイアログボックスを受け入れた後の動作はプラットフォームにより異なります:

* Windowsではユーザーが**OK**をクリックすると、コマンドから選択された色がRGBフォーマットで返され、OKシステム変数が1に設定されます。ユーザーがダイアログボックスをキャンセルするとコマンドは-1を返し、システム変数OKに0が設定されます。
* Mac OSではクローズボックスをクリックするか**Esc**キーを押してダイアログボックスを閉じます。ダイアログ内でのユーザーの操作に関わらず、いずれの場合もシステム変数OKは1に設定されます。コマンドは選択された色をRGBフォーマットで返します。ユーザーがカラーを選択しなかった場合、返される値は*defaultColor*が渡されていればその値、渡されていなければ0です。

**注:** サーバーマシンまたはWebプロセス内では、このコマンドを使用しないでください。

#### 参照 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 956 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


