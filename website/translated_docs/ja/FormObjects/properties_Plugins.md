---
id: propertiesPlugIns
title: プラグイン
---

* * *

## Advanced Properties

If advanced options are provided by the author of the plug-in, an **Advanced Properties** button may be enabled in the Property list. この場合ボタンをクリックすると、プラグインの制作元によるカスタムダイアログにてそれらのオプションを設定することができます。

Because the Advanced properties feature is under the control of the author of the plug-in, information about these Advanced options is the responsibility of the distributor of the plug-in.

#### JSON 文法

| 名                | データタイプ | とりうる値                                                                                                                        |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| customProperties | テキスト   | Plugin specific properties, passed to plugin as a JSON string if an object, or as a binary buffer if a base64 encoded string |


#### 対象オブジェクト

[プラグインエリア](pluginArea_overview.md)