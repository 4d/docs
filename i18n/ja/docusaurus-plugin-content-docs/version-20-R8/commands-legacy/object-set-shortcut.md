---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *object* ; *key* {; *modifiers*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| key | Text | &#8594;  | オブジェクトに割り当てるキー |
| modifiers | Integer | &#8594;  | モディファイアーキーマスクまたはマスクの組み合わせ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->**OBJECT SET SHORTCUT**コマンドは*object* と*\** で指定したオブジェクトのキーボードショートカットをカレントプロセスで動的に変更します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

*key* 引数にはオブジェクトに関連付けるキーを指定する文字列を渡します。以下のいずれかを渡すことができます:

* "B"のような標準のキーの名前
* *Shortcut and Associated Keys*テーマの定数やその値:  

| 定数                            | 型   | 値               |  
| ----------------------------- | --- | --------------- |  
| Shortcut with Backspace       | 文字列 | \[backspace\]   |  
| Shortcut with Carriage Return | 文字列 | \[return\]      |  
| Shortcut with Delete          | 文字列 | \[del\]         |  
| Shortcut with Down arrow      | 文字列 | \[down arrow\]  |  
| Shortcut with End             | 文字列 | \[end\]         |  
| Shortcut with Enter           | 文字列 | \[enter\]       |  
| Shortcut with Escape          | 文字列 | \[esc\]         |  
| Shortcut with F1              | 文字列 | \[F1\]          |  
| Shortcut with F10             | 文字列 | \[F10\]         |  
| Shortcut with F11             | 文字列 | \[F11\]         |  
| Shortcut with F12             | 文字列 | \[F12\]         |  
| Shortcut with F13             | 文字列 | \[F13\]         |  
| Shortcut with F14             | 文字列 | \[F14\]         |  
| Shortcut with F15             | 文字列 | \[F15\]         |  
| Shortcut with F2              | 文字列 | \[F2\]          |  
| Shortcut with F3              | 文字列 | \[F3\]          |  
| Shortcut with F4              | 文字列 | \[F4\]          |  
| Shortcut with F5              | 文字列 | \[F5\]          |  
| Shortcut with F6              | 文字列 | \[F6\]          |  
| Shortcut with F7              | 文字列 | \[F7\]          |  
| Shortcut with F8              | 文字列 | \[F8\]          |  
| Shortcut with F9              | 文字列 | \[F9\]          |  
| Shortcut with Help            | 文字列 | \[help\]        |  
| Shortcut with Home            | 文字列 | \[home\]        |  
| Shortcut with Left arrow      | 文字列 | \[left arrow\]  |  
| Shortcut with Page down       | 文字列 | \[page down\]   |  
| Shortcut with Page up         | 文字列 | \[page up\]     |  
| Shortcut with Right arrow     | 文字列 | \[right arrow\] |  
| Shortcut with Tabulation      | 文字列 | \[tab\]         |  
| Shortcut with Up arrow        | 文字列 | \[up arrow\]    |

*modifiers* 引数にはショートカットに割り当てるひとつ以上のモディファイアーキーを渡します。*modifiers* 引数を設定するには、*Events (Modifiers)*テーマのひとつ以上の"mask"タイプ定数を渡します:

| 定数               | 型    | 値    | コメント                                   |
| ---------------- | ---- | ---- | -------------------------------------- |
| Command key mask | 倍長整数 | 256  | WindowsでのCtrlキー、OS XでのCommandキー        |
| Control key mask | 倍長整数 | 4096 | OS XでのCtrlキー、あるいはWindowsおよびOS Xでの右クリック |
| Option key mask  | 倍長整数 | 2048 | Alt キー(OS XではOptionキーとも呼ばれます)          |
| Shift key mask   | 倍長整数 | 512  | WindowsおよびOS X                         |

**注:** *modifiers* 引数を省略した場合、設定されたキーが押されるとそのオブジェクトが即座に有効になります。例えばボタンに"H"キーを関連付けた場合、Hキーを押すとボタンが押されたことになります。このような機能は特定のインターフェースに使用されます。

#### 例題 

アプリケーションの言語に基づき、異なるショートカットを割り当てたいとします。On Loadフォームイベントで以下のコードを実行します:

```4d
 Case of
    :(vLang="JA")
       OBJECT SET SHORTCUT(*;"SortButton";"T";Command key mask+Shift key mask) // 日本語の場合Ctrl+Shift+T
    :(vLang="US")
       OBJECT SET SHORTCUT(*;"SortButton";"O";Command key mask+Shift key mask) // 英語の場合Ctrl+Shift+O
 End case
```

#### 参照 

[OBJECT GET SHORTCUT](object-get-shortcut.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1185 |
| スレッドセーフである | &cross; |


