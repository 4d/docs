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
- **標準アクション**: 割り当てたいアクションを "標準アクション" コンボボックスから選択するか、記述します。 サポートされているアクションと引数 (任意) であれば、エリア内に入力することができます。 標準アクションの一覧については、*デザインリファレンス* の [標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) を参照してください。 **macOS に関する注記:** macOS の場合、プラットフォームインタフェース標準に合わせるために、*quit* (終了) アクションが割り当てられたカスタムメニューコマンドは自動でアプリケーションメニュー内に置かれます。

4Dランゲージで割り当てをおこなう場合、プロジェクトメソッドには `SET MENU ITEM METHOD` コマンド、標準アクションには `SET MENU ITEM PROPERTY` コマンドを使います。

### 新規プロセスで開始
メソッドを割り当てたメニューの場合、**新規プロセスで開始** オプションが利用可能です。 このオプションは、メニューエディターのチェックボックスによって設定するほかに、`SET MENU ITEM PROPERTY` コマンドに *property* 引数を渡して設定することもできます。

**新規プロセスで開始** チェックボックスを選択した場合、4D はそのメニューコマンドが選択されると新しいプロセスを作成します。 通常、メニューコマンドに割り当てたメソッドは、明示的にプログラムから新規プロセスを作成しない限り、カレントプロセスで実行されます。 **新規プロセスで開始** チェックボックスを選択すると、新規プロセスを簡単に開始することができます。 このチェックボックスを選択した場合は、このメニューコマンドを選択すると新規プロセスが作成されます。

プロセスリストにおいて、4D は "ML_プロセス番号" というフォーマットのデフォルト名を新規プロセスに割り当てます。 このように、メニューから開始されたプロセスの名前は、接頭辞 "ML_" とプロセス番号を組み合わせて設定されます。

### イベントを発生させない
標準アクションを割り当てたメニューの場合、**イベントを発生させない** オプションがメニューエディター内で利用可能です。

このオプションを選択すると、4D は関連アクションを実行する前に、カーソルが置かれているフィールドの "確定 (バリデート)" をおこないません。 このオプションは主に **編集** メニューコマンドに使用されます。 デフォルトでは、4D はフィールド内容を処理し、"確定" してから、標準アクションを実行します (メニューコマンドやショートカットを使用)。これにより、`On Data Change` フォームイベントが発生します。 しかし、コピー＆ペーストタイプのコマンドの場合、コマンドを呼び出すたびに `On Data Change` フォームイベントが予想外に生成されてしまい、処理に差し支える可能性があります。 その場合は、**イベントを発生させない** オプションを選択するのが有効です。


## アクセス権

このメニューエディターのオプションを使って、メニューコマンドにアクセスグループを設定することができます。4Dリモートアプリケーションで接続する場合、当該アクセスグループのユーザーのみがこのメニューを使うことができます (ユーザー＆グループ参照)。

## オプション

### 区切り線

メニュー内のメニューコマンドグループは区切り線を使って分割できます。 この表示方法は、機能ごとにメニューコマンドをグループ化するのに便利です。

![](assets/en/Menus/separator.png)

区切り線を追加するには、専用のメニューコマンドを作成します。

メニューエディターでは、メニューのタイトルエリアにテキストを入力する代わりに、**区切り線** オプションを選択します。 すると、カレントメニューバーのエリアに線が表示されます。 このオプションが選択されると、ほかのプロパティは無効になります。 **注:** macOS ではメニュー項目タイトルの一文字目を "-" にすると、その行が区切り線になります。

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