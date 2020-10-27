---
id: sdi
title: Windows での SDIモード
---

## 概要

Windows において、組みこみ 4Dアプリケーションを SDI (シングルドキュメントインターフェース) アプリケーションとして設定することができます。 SDIアプリケーションでは、それぞれのウィンドウが互いに独立し、それぞれが独自のメニューバーを持つことができます。 SDIアプリケーションは MDI (マルチドキュメントインターフェース) に対する概念で、MDI ではすべてのウィンドウが一つのメインウィンドウの中に含まれ、それに依存した作りになっています。

> SDI/MDI という概念は macOS には存在しません。 この機能は Windows用アプリケーション専用のもので、関連オプションは macOS においてはすべて無視されます。

### SDIモード利用条件
SDIモードは以下の実行環境に限り利用可能です:

- Windows
- 組み込みスタンドアロン4Dアプリケーション、またはクライアント4Dアプリケーション

## SDIモードの有効化

アプリケーションにおいて SDIモードを有効化し使用する手順は次の通りです:

1. Check the **Use SDI mode on Windows** option in the "Interface" page of the Settings dialog box.
2. 組み込みアプリケーションをビルドします (スタンドアロンまたはクライアントアプリケーション)。

その後、サポートされているコンテキスト (上記参照) において実行されると、組み込みアプリケーションは自動的に SDIモードで実行されます。

## SDIモードでのアプリケーションの管理

4Dアプリケーションを SDIモードで実行するために、特別な実装は必要ありません。既存のメニューバーは自動的に SDIウィンドウへと移されます。 しかしながら、以下に挙げられている特定の原則に注意する必要があります。

### ウィンドウ内のメニュー

SDIモードでは、同プロセス中に開かれたすべてのドキュメントタイプウィンドウ (たとえばフローティングパレットはこれに含まれません) には自動的にプロセスメニューバーが表示されます。 ただし、プロセスメニューバーが非表示の状態でも、メニュー項目のショートカットは有効です。

メニューは、コンテンツのサイズを変更することなくウィンドウの上部に追加されます:

![](assets/en/Menus/sdi1.png)

このため、ウィンドウは MDIモードあるいは SDIモードのどちらにおいてもオブジェクトの位置を再計算することなく使用することができます。

#### スプラッシュスクリーンについての注意:

- If the **Splash screen** interface option was selected in the Settings, the splash window will contain any menus that would have been displayed in the MDI window. Note also that closing the splash screen window will result in exiting the application, just like in MDI mode.
- If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices.

### Automatic quit

When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- the user cannot interact anymore with the application
- there are no live user processes
- 4D processes or worker processes are waiting for an event
- the Web server is not started.

> When a menu with an associated *quit* standard action is called, the application quits and all windows are closed, wherever the menu was called from.

## Language

Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below.

| Command/feature                   | Specificity in SDI mode on Windows                                                                                                                                                                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)                                                                                                                                                                                       |
| `Menu bar height`                 | Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window                                                                                                                    |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Applied to the current form window only (from where the code is executed)                                                                                                                                                                                                                                       |
| `MAXIMIZE WINDOW`                 | The window is maximized to the screen size                                                                                                                                                                                                                                                                      |
| `CONVERT COORDINATES`             | `XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`. |
| `GET MOUSE`                       | Global coordinates are relative to the screen                                                                                                                                                                                                                                                                   |
| `GET WINDOW RECT`                 | When -1 is passed in window parameter, the command returns 0;0;0;0                                                                                                                                                                                                                                              |
| `On Drop database method`         | Not supported                                                                                                                                                                                                                                                                                                   |
