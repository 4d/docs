---
id: properties
title: メニュープロパティ
---

アクション、フォントスタイルや区切り線、キーボードショートカット、アイコンなど様々なメニュー項目プロパティを設定できます。


## タイトル

**タイトル** プロパティには、アプリケーションインターフェースに表示されるメニュー/メニュー項目のラベルを指定します。

メニューエディターを使って、テキストリテラルを直接、ラベルとして入力することができます。 または、変数参照、xliff参照を使用することもできます。これによりアプリケーションの翻訳が容易になります。 次のの参照タイプを使用できます:

- :xliff:MyLabel という形の XLIFFリソース参照。 XLIFF参照についての詳細は、*4D デザインリファレンス* の [XLIFF アーキテクチャー](https://doc.4d.com/4Dv18/4D/18/Appendix-B-XLIFF-architecture.300-4575737.ja.html) の章を参照ください。
- :<>vlang,3 という形のインタープロセス変数名と、それに続く数値。 この変数の内容を変更すると、メニューが表示される際にラベルも変更されます。 この場合、ラベルは XLIFFリソースを呼び出します。 <>vlang 変数に含まれる値は *group* 要素の *id* 属性値に対応します。 二つ目の値 (例では3) は *trans-unit* 要素の *id* 属性の値を指定します。

4Dランゲージを使う場合は、`APPEND MENU ITEM`、`INSERT MENU ITEM`、および `SET MENU ITEM` コマンドの *itemText* パラメーターでタイトルプロパティを設定します。

### 制御文字の使用

メニュータイトルに制御文字 (メタ文字) を直接使用し、メニューのプロパティをいくつか設定することができます。 たとえば、メニュータイトルに "/G" という文字を入れると、キーボードショートカットである Ctrl+G (Windows) または Command+G (macOS) を割り当てることができます。

制御文字は、表示されるメニューラベルには含まれません。 したがって、制御文字として利用しない場合は、これらの文字の並びをタイトルに使用しないことが推奨されます。 制御文字には次のようなものがあります:

| 文字  | 説明               | 効果                                            |
| --- | ---------------- | --------------------------------------------- |
| (   | 開く括弧             | 項目を無効化                                        |
| <B  | 小なりB             | 太字                                            |
| <I  | 小なりI             | イタリック                                         |
| <U  | 小なりU             | 下線                                            |
| !文字 | エクスクラメーションマーク+文字 | 文字をチェックマークとして追加 (macOS); チェックマークを追加 (Windows) |
| /文字 | スラッシュ+文字         | 文字をショートカットとして追加                               |



## 参照

各メニュー項目にカスタムパラメーターを関連付けることができます。 メニュー項目パラメーターは、その内容を自由に設定できる文字列です。 メニュエディターで設定するほかに、`SET MENU ITEM PARAMETER` コマンドを使う方法もあります。

メニュー項目パラメーターは、とくに `Dynamic pop up menu`、`Get menu item parameter`、そして `Get selected menu item parameter` コマンドを使用する際など、メニューをプログラムで管理するのに便利です。

## 動作

メニューにはプロジェクトメソッドや標準アクションを割り当てることができます。 メニュー項目が選択されると、4D は割り当てられた標準アクションまたはプロジェクトメソッドを実行します。 例えば、**月次報告書** メニューコマンドを設定し、財務データを格納したテーブルをもとに月次報告書を作成するプロジェクトメソッドを呼び出すことができます。 **カット** メニューコマンドは、`cut` 標準アクションを呼び出して、選択項目をクリップボードへ移動し、それを前面にあるウインドウから消去します。

標準アクションやメソッドをメニューに割り当てていない場合、そのメニューを選択すると、4D はアプリケーション環境からデザインモードに戻ります。 デザインモードに移行できない場合は、4D を終了します。

Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the database (add record, select all, etc.).

標準アクションとプロジェクトメソッドの両方をメニューに割り当てることも可能です。 この場合、標準アクションが実行されることはありません。しかし、4D はこのアクションを使用し、状況に合わせてメニューコマンドを使用可／使用不可に設定します。 メニューが使用不可の場合、割り当てられたプロジェクトメソッドは実行されません。

求める結果の種類によって、標準アクションまたはプロジェクトメソッドのいずれを割り当てるかを選択します。 原則として、標準アクションは最適化された方法で実行される (コンテキストに応じたメニューの有効/無効の自動切り替え) ため、できるだけこちらを選ぶ方が良いでしょう。

### プロジェクトメソッドまたは標準アクションの割り当て

メニューエディターにて、標準アクション/プロジェクトメソッドをメニューに割り当てることができます:
- **メソッド名**: 既存のプロジェクトメソッドをコンボボックスで選択します。 プロジェクトメソッドがまだ存在しない場合、"メソッド名" コンボボックスにメソッド名を入力し、[...] ボタンをクリックします。 すると、4D はメソッド作成ダイアログボックスを表示し、メソッドエディターを開きます。
- **Associated Standard Action**: Choose or write the action you want to assign in the "Associated Standard Action" combo box. You can enter any supported action and (optionally) parameter you want in the area. For a comprehensive list of standard actions, please refer to the **Standard actions** section in the *Design Reference*. **Note for macOS:** Under macOS, the custom menu commands associated with the *Quit* action are automatically placed in the application menu, in compliance with the platform interface standards.

Using the 4D language, you can associate a project method using the `SET MENU ITEM METHOD` command, and a standard action using the `SET MENU ITEM PROPERTY` command.

### Start a new process
The **Start a New Process** option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the *property* parameter of the `SET MENU ITEM PROPERTY` command.

When the **Start a New Process** option is enabled, a new process is created when the menu command is chosen. Normally, a method attached to a menu command executes within the current process unless you explicitly call a new process in your code. The **Start a New Process** option makes it easier to start a new process. When enabled, 4D will create a new process when the menu command is chosen.

In the Process list, 4D assigns the new process a default name using the format "ML_ProcessNumber". The names of processes started from a menu are created by combining the prefix "ML_" with the process number.

### Execute without validating
The **Execute without validating** option is available for menu commands associated to standard actions in the Menu editor only.

When this option is checked, 4D does not trigger the "validation" of the field where the cursor is located before executing the associated action. This option is mainly intended for **Edit** menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `On Data Change` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `On Data Change` form event is generated unexpectedly. In this case, it is useful to check the **Execute without validating** option.


## Remote access privileges

This Menu editor option allows defining a group to a menu command so that only users in that group can use the menu command from a 4D remote application (see Users and groups).

## Options

### Separator lines

Groups of menu commands in a menu can be divided by a separator line. This convention is useful for grouping associated menu commands by function.

![](assets/en/Menus/separator.png)

You add a separator line by creating a specific menu command.

In the Menu editor, instead of entering the menu command’s text in the title area, you simply select the **Separator Line** option. Instead of text, a line appears in the current menu bar area. When this option is checked, the other properties have no effect. **Note:** Under macOS, if you use the dash “-” as the first character of a menu item, it will appear as a separator line.

In the 4D language, you insert a separator line by entering `-` or `(-` as itemText for `APPEND MENU ITEM`, `INSERT MENU ITEM`, or `SET MENU ITEM` commands.


### Keyboard shortcuts

You can add keyboard shortcuts to any menu command. If a menu command has one of these keyboard shortcuts, users will see it next to the menu command. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the **Copy** menu command in the **Edit** menu.

You can also add the **Shift** key as well as the **Alt** key (Windows) or **Option** key (macOS) to the shortcut associated with a menu command. This multiplies the number of shortcuts that can be used. The following types of keyboard shortcuts can therefore be defined:

- Under Windows:
    - Ctrl+character
    - Ctrl+Shift+character
    - Ctrl+Alt+character
    - Ctrl+Shift+Alt+character

- Under macOS:
    - Command+character
    - Command+Shift+character
    - Command+Option+character
    - Command+Shift+Option+character

> We recommend that you keep the default keyboard shortcuts that are associated with standard actions.

You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the **Edit** and **File** menus, and the keys reserved for 4D menu commands.

These reserved key combinations are listed in the following table:

| Key (Windows)   | Key (macOS)        | 演算子         |
| --------------- | ------------------ | ----------- |
| Ctrl+C          | Command+C          | Copy        |
| Ctrl+Q          | Command+Q          | Quit        |
| Ctrl+V          | Command+V          | Paste       |
| Ctrl+X          | Command+X          | Cut         |
| Ctrl+Z          | Command+Z          | Undo        |
| Ctrl+. (period) | Command+. (period) | Stop action |

To assign a keyboard shortcut in the Menu editor:

Select the menu item to which you want to assign a keyboard shortcut. Click on the [...] button to the right of the "Shortcut" entry area. The following window appears:

![](assets/en/Menus/Shortcut.png)

Enter the character to use then (optional) click the **Shift** and/or **Alt** (**Option**) checkboxes according to the combination desired. You can also directly press the keys that make up the desired combination (do not press the **Ctrl/Command** key).

> You cannot deselect the Ctrl/Command key, which is mandatory for keyboard shortcuts for menus. To start over, click on **Clear**. Click **OK** to validate the changes. The shortcut defined is shown in the "Shortcut" entry area.

To assign a keyboard shortcut using the 4D language, use the `SET ITEM SHORTCUT` command.

> An active object can also have a keyboard shortcut. If the **Ctrl/Command** key assignments conflict, the active object takes precedence.


### Enabled item

In the Menu editor, you can specify whether a menu item will appear enabled or disabled. An enabled menu command can be chosen by the user; a disabled menu command is dimmed and cannot be chosen. When the **Enabled Item** check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.

Unless you specify otherwise, 4D automatically enables each menu item you add to a custom menu. You can disable an item in order, for example, to enable it only using programming with `ENABLE MENU ITEM` and `DISABLE MENU ITEM` commands.


### Check mark

This Menu editor option can be used to associate a system check mark with a menu item. You can then manage the display of the check mark using language commands (`SET MENU ITEM MARK` and `Get menu item mark`).

Check marks are generally used for continuous action menu items and indicate that the action is currently underway.

### Font styles

4D lets you customize menus by applying different font styles to the menu commands. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `SET MENU ITEM STYLE` language command.

As a general rule, apply font styles sparingly to your menus — too many styles will be distracting to the user and give a cluttered look to your application.
> You can also apply styles by inserting special characters in the menu title (see [Using control characters](properties.md#using-control-characters) above).


### Item icon

You can associate an icon with a menu item. It will displayed directly in the menu, next to the item:

![](assets/en/Menus/iconMenu.png)

To define the icon in the Menu editor, click on the "Item icon" area and select **Open** to open a picture from the disk. If you select a picture file that is not already stored in the project resources folder, it is automatically copied in that folder. Once set, the item icon appears in the preview area:

![](assets/en/Menus/iconpreview.png)

To remove the icon from the item, choose the **No Icon** option from the "Item Icon" area.

To define item icons using the 4D language, call the `SET MENU ITEM ICON` command. 