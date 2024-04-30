---
id: overview
title: 環境設定
---

環境設定は、作業環境に影響する様々なオプションを指定します (例: デフォルトオプション、表示テーマ、コードエディター機能、ショートカット)。 これらの設定は、4D や 4D Server アプリケーションで開くすべてのプロジェクトに適用されます。

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. 一度に一人のユーザーのみが環境設定ダイアログボックスを使用できます。

> 4D offers a different set of parameters specific to the open projet: **Settings** (available from the **Design** menu). 詳細はデータベース設定の章を参照ください。

## アクセス

You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the **4D** Application menu (macOS):

![](../assets/en/Preferences/overviewAccess.png)

このメニューコマンドは、プロジェクトが開かれていない場合でも利用できます。

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## ストレージ

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

- Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
- macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## パラメーターのカスタマイズと初期設定

設定ダイアログボックスでは、変更された設定内容は太字で表示されます:

![](../assets/en/Preferences/overviewUser.png)

環境設定においては、ダイアログボックスで直接変更されたか、変換されたデータベースの場合以前のバージョンで変更された設定が、カスタマイズ箇所として扱われます。

パラメーターは手作業でデフォルト値に置き換えられたときにも太字で表示されます。 このように、カスタマイズされたパラメーターはすべて目視で識別することができます。

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](../assets/en/Preferences/overviewSettings.png)

このボタンをクリックすると、現在表示されているページの全パラメーターがリセットされます。 現在のページで最低でも一つのパラメーターが変更されると、このボタンはアクティブになります。
