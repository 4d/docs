---
id: sdi
title: Windows での SDIモード
---


On Windows, 4D developers can test and configure their 4D merged applications to work as SDI (Single-Document Interface) applications. SDIアプリケーションでは、それぞれのウィンドウが互いに独立し、それぞれが独自のメニューバーを持つことができます。 SDIアプリケーションは MDI (マルチドキュメントインターフェース) に対する概念で、MDI ではすべてのウィンドウが一つのメインウィンドウの中に含まれ、それに依存した作りになっています。

:::info

SDI/MDI という概念は macOS には存在しません。 この機能は Windows用アプリケーション専用のもので、関連オプションは macOS においてはすべて無視されます。

:::

## SDIモード利用条件

The SDI mode is available in the following execution environments only:

- Windows
- Merged [stand-alone](../Desktop/building.md#build-stand-alone-application) or [client](../Desktop/building.md#build-client-application) 4D application
- [**Test application** feature](bars.md#previewing-menu-bars) available from the **Run** menu.

## SDIモードの有効化

To enable the SDI mode in your application, just check the **Use SDI mode on Windows** option in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows).

Once enabled, to actually run your application in SDI mode, you can either:

- build a merged application (standalone and/or client application) and execute it on Windows, or
- select **Test Application in SDI Mode** from the **Run** menu on Windows to test the development.

:::info

Because the development environment is executed in MDI, switching from development mode to runtime mode using the **Test Application in SDI Mode** menu item is equivalent to restarting your application.

:::


## SDIモードでのアプリケーションの管理

4Dアプリケーションを SDIモードで実行するために、特別な実装は必要ありません。既存のメニューバーは自動的に SDIウィンドウへと移されます。 しかしながら、以下に挙げられている特定の原則に注意する必要があります。

### ウィンドウ内のメニュー

SDIモードでは、同プロセス中に開かれたすべてのドキュメントタイプウィンドウ (たとえばフローティングパレットはこれに含まれません) には自動的にプロセスメニューバーが表示されます。 ただし、プロセスメニューバーが非表示の状態でも、メニュー項目のショートカットは有効です。

メニューは、コンテンツのサイズを変更することなくウィンドウの上部に追加されます:

![](../assets/en/Menus/sdi1.png)

このため、ウィンドウは MDIモードあるいは SDIモードのどちらにおいてもオブジェクトの位置を再計算することなく使用することができます。

#### スプラッシュスクリーン

- If the **Splash screen** interface option was [selected in the Settings](../settings/interface.md#display-windows), the splash window will contain any menus that would have been displayed in the MDI window. MDIモード同様、スプラッシュスクリーンを閉じるとアプリケーションを終了することになるという点に注意してください。
- スプラッシュスクリーンオプションが選択されていなかった場合、メニューは開かれているウィンドウにおいて、プログラマーの選択に応じて表示されます。

### デバッガー

When displayed in SDI mode, the [debugger window](../Debugging/debugger.md) does not contain [editing buttons](../Debugging/debugger.md#tool-bar-buttons), because switching to development environment requires to abort execution and restart the application in MDI mode.

### 自動終了

MDIモードで実行時、ユーザーによってアプリケーションウィンドウ (MDIウィンドウ) が閉じられると、4Dアプリケーションが終了します。 しかしながら、SDIモードで実行時、4Dアプリケーションにはアプリケーションウィンドウがなく、また開いているウィンドウをすべて閉じたとしても、必ずしもユーザーがアプリケーションを終了したいと思っているとは限りません (たとえばフェイスレスプロセスが熟考中かもしれません) が、場合によっては終了したいという場合もあります。

こういった場合を管理するため、SDIモードで実行されている 4Dアプリケーションには、以下の条件が満たされた場合に自動的に (`QUIT 4D` コマンドを呼び出して) 終了する機構が含まれています:

- ユーザーがこれ以上アプリケーションとやりとりすることができない
- 生きているユーザープロセスがない
- 4Dプロセスあるいはワーカープロセスはイベント待機中である
- the Web server is not started
- the [WebAdmin server](../Admin/webAdmin.md) is not started.

:::note

*quit* (終了) 標準アクションが割り当てられているメニューが呼び出された場合、そのメニューがどこから呼ばれたものであろうと、アプリケーションは終了し、すべてのウィンドウが閉じられます。

:::

## ランゲージ

4D によって透過的に管理されるとはいえ、SDIモードではアプリケーションインターフェースの管理に関してこれまでと若干の差異が存在します。 4Dランゲージにおける特異性は以下の表にある通りです。

| コマンド/機能                           | Windows での SDIモードの特徴                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Open form window`                | SDIモードにおけるフローティングウィンドウのサポート (`Controller form window`) およびメニューバーの削除 (`Form has no menu bar`) のオプション                                                                      |
| `Menu bar height`                 | メニューバーが 2行以上に折り返されている場合でも単一行のメニューバーのピクセル単位での高さを返します。 フォームウィンドウをともなわないプロセスからコマンドが呼ばれている場合には 0 を返します。                                                                      |
| `SHOW MENU BAR` / `HIDE MENU BAR` | カレントの (コードが実行されている場所の) フォームウィンドウにのみ適用されます                                                                                                                                |
| `MAXIMIZE WINDOW`                 | ウィンドウはスクリーンサイズいっぱいまで最大化されます                                                                                                                                              |
| `CONVERT COORDINATES`             | `XY Screen` はメインスクリーンが (0,0) に位置するグローバルな座標系です。 座標系の左側、あるいは上側にあるスクリーンについては、負の値の座標を持つことができ、右側、あるいは下側にあるスクリーンについては `Screen height` や `Screen width` から返される値より大き値を持つことができます。 |
| `GET MOUSE`                       | グローバル座標はスクリーンからの相対位置になります                                                                                                                                                |
| `GET WINDOW RECT`                 | window パラメーターに -1 を渡した場合、コマンドは 0;0;0;0 を返します                                                                                                                             |
| `On Drop database method`         | サポートされていません                                                                                                                                                              |

:::info

You can use the [**Get application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::