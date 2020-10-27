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

1. データベース設定ダイアログボックスの "インターフェース" ページ内にある **WindowsでSDIモードを使用する** オプションをチェックします。
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

- データベース設定において **スプラッシュスクリーン** インターフェースオプションが選択されていた場合、スプラッシュウィンドウは、MDIウィンドウであれば表示されていたメニューをすべて格納します。 MDIモード同様、スプラッシュスクリーンを閉じるとアプリケーションを終了することになるという点に注意してください。
- スプラッシュスクリーンオプションが選択されていなかった場合、メニューは開かれているウィンドウにおいて、プログラマーの選択に応じて表示されます。

### 自動終了

MDIモードで実行時、ユーザーによってアプリケーションウィンドウ (MDIウィンドウ) が閉じられると、4Dアプリケーションが終了します。 しかしながら、SDIモードで実行時、4Dアプリケーションにはアプリケーションウィンドウがなく、また開いているウィンドウをすべて閉じたとしても、必ずしもユーザーがアプリケーションを終了したいと思っているとは限りません (たとえばフェイスレスプロセスが熟考中かもしれません) が、場合によっては終了したいという場合もあります。

こういった場合を管理するため、SDIモードで実行されている 4Dアプリケーションには、以下の条件が満たされた場合に自動的に (`QUIT 4D` コマンドを呼び出して) 終了する機構が含まれています:

- ユーザーがこれ以上アプリケーションとやりとりすることができない
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
