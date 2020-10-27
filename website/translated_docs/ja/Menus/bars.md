---
id: bars
title: Menu bar features
---

メニューバーはカスタムアプリケーションにおいて主要なインターフェースを提供します。 各カスタムアプリケーションにおいて、最低1つのメニューを添付したメニューバーを1つ作成しなければなりません。 デフォルトで、メニューバー#1 がアプリケーションモードで表示されます。 `SET MENU BAR` コマンドを使用して、メニューバーを変更することができます。

各メニューバーにはカスタムスプラッシュスクリーンを関連付けることができます。またメニューバーとスプラッシュスクリーンはプレビューすることができます。


## スプラッシュスクリーン


各メニューバーにカスタムスラッシュスクリーンを関連付けることにより、アピアランスを拡張できます。 スプラッシュスクリーンを含むウィンドウは、メニューバーが表示されるとき、その下に表示されます。 ロゴなどのピクチャーを表示できます。 デフォルトで、4D はスプラッシュスクリーンに 4D ロゴを表示します:

![](assets/en/Menus/splash1.png)

任意の画像編集アプリケーションで作成したピクチャーをスプラッシュスクリーンで使用できます。 クリップボードにコピーした画像、あるいはハードディスク上の画像を使用できます。 4D がサポートする標準のピクチャータイプの画像を使用できます。

スプラッシュスクリーンピクチャーはメニューエディターでのみ設定できます: まず、カスタムスプラッシュスクリーンを割り当てたいメニューバーを選択します。 Note the "Background Image" area in the right-hand part of the window. To open a picture stored on your disk directly, click on the **Open** button or click in the "Background Image" area. A pop-up menu appears:
- To paste a picture from the clipboard, choose **Paste**.
- To open a picture stored in a disk file, choose **Open**. If you choose Open, a standard Open file dialog box will appear so that you can select the picture file to be used. Once set, the picture is displayed in miniature in the area. It is then associated with the menu bar.

![](assets/en/Menus/splash2.png)

You can view the final result by testing the menu bar (see the following section). In Application mode, the picture is displayed in the splash screen with the "Truncated (Centered)" type format.

> You can choose whether to display or hide this window using the **Display toolbar** option in the Settings.

To remove the custom picture and display the default one instead, click on the **Clear** button or select **Clear** in the area pop-up menu.


## Previewing menu bars

The Menu Bar editor lets you view the custom menus and splash screen at any time, without closing the toolbox window.

To do so, simply select the menu bar and choose **Test the menu bar "Menu Bar #X"** in the context menu or the options menu of the editor.

![](assets/en/Menus/splash3.png)

4D displays a preview of the menu bar as well as the splash screen. You can scroll down the menus and sub-menus to preview their contents. However, these menus are not active. To test the functioning of menus and the toolbar, you must use the **Test Application** command from the **Run** menu.


