---
id: object-get-shortcut
title: OBJECT GET SHORTCUT
slug: /commands/object-get-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SHORTCUT.Syntax-->**OBJECT GET SHORTCUT** ( {* ;} *object* ; *key* ; *modifiers* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SHORTCUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| key | Text | &#8592; | オブジェクトに割り当てられたキー |
| modifiers | Integer | &#8592; | モディファイアーキーマスクまたはマスクの組み合わせ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET SHORTCUT.Summary-->**OBJECT GET SHORTCUT**コマンドは*object*と*\**引数で指定されたオブジェクトに割り当てられたカレントプロセスのキーボードショートカットを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

*key* 引数にはそのオブジェクトに割り当てられたキー (標準キーの場合)、またはキーの値を示すブラケットで囲まれた文字列 (ファンクションキーの場合) が返されます。この値を*Shortcut and Associated Keys*テーマの定数と比較できます ([OBJECT SET SHORTCUT](object-set-shortcut.md)コマンド参照)。

*modifiers* 引数にはそのショートカットに関連付けられたモディファイアーキーを表す値が返されます。複数のモディファイアーキーが組み合わせて指定されている場合、コマンドはその合計値を返します。この値を*Events (Modifiers)*テーマの以下の定数と比較できます:

| 定数               | 型    | 値    | コメント                                   |
| ---------------- | ---- | ---- | -------------------------------------- |
| Command key mask | 倍長整数 | 256  | WindowsでのCtrlキー、OS XでのCommandキー        |
| Control key mask | 倍長整数 | 4096 | OS XでのCtrlキー、あるいはWindowsおよびOS Xでの右クリック |
| Option key mask  | 倍長整数 | 2048 | Alt キー(OS XではOptionキーとも呼ばれます)          |
| Shift key mask   | 倍長整数 | 512  | WindowsおよびOS X                         |

ショートカットにモディファイアーキーが関連付けられていない場合、*modifiers* には0が返されます。 

**注:** *object* 引数がフォーム中の複数のオブジェクトに該当し、それらに異なる値が設定されている場合、*key* には空の文字列 ("") が、そして *modifiers* には0が返されます。 

#### 参照 

[OBJECT SET SHORTCUT](object-set-shortcut.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1186 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


