---
id: overview
title: 設定
---

ストラクチャー設定では、カレントプロジェクトがどのように機能するかを設定します。 これらのパラメーターは、各プロジェクトごとに異なる設定を保存できます。 設定内容には待ち受けポート、バックアップ設定、セキュリティオプション、Webパラメーターなどが含まれます。

![](../assets/en/settings/main.png)

> 4D provides another set of parameters, called **Preferences**, that apply to the 4D IDE application. For more information, refer to [Preferences](../Preferences/general.md).

## ストラクチャー設定を開く

ストラクチャー設定ダイアログを開くには、以下のいずれかの手順をおこないます:

- using the **Design > Settings...** menu option
- by clicking **Settings** on the 4D toolbar
- on 4D Server, using the **Edit > Settings...** menu option

When [**User settings** mode is enabled](../Desktop/user-settings.md), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

- **User Settings...** gives you access to settings that can be stored externally in a user file. これらの設定が変更されていると、ストラクチャー設定の代わりに使用されます。
- **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. これらの設定が変更されていると、ユーザー設定やストラクチャー設定の代わりに使用されます。

### ロック情報

プロジェクトモードおよびクライアント/サーバーモードの両方において、以下のような場合にロックは起こりえます:

- The _settings.4DSettings_ file is 'Read-only' (Projects only). この場合に設定を変更しようとすると、(それが可能である場合には) アンロックするためのアラートが表示されます。
- 2人以上のユーザーが同じ設定を同時に編集しようとしたとき。 最初のユーザーがウィンドウを閉じてロックを解除するまで、その設定は使用することができません。 (クライアント/サーバーモードのみ)

どちらのケースにおいても、設定は "読み取り専用" として開くことはできますが、ロックが解除されるまでは使用することができません。

## パラメーターのカスタマイズ

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](../assets/en/settings/customize-settings.png)

ダイアログボックスで直接変更されたか、変換されたプロジェクトの場合は以前変更された設定が、カスタマイズ箇所として扱われます。

パラメーターは手作業でデフォルト値に置き換えられたときにも太字で表示されます。 このように、カスタマイズされたパラメーターはすべて目視で識別することができます。

ほとんどの設定は即座に有効になります。 しかし、(起動時モードの設定など) いくつかはデータベースが再起動されたときに有効となります。 この場合、変更した設定が次回起動時から有効になることを知らせるダイアログボックスが表示されます。

## 設定のリセット

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Reset to factory settings**.

このボタンをクリックすると、現在表示されているページの全パラメーターがリセットされます。 現在のページで最低でも一つのパラメーターが変更されると、このボタンはアクティブになります。
