---
id: propertiesPlugIns
title: プラグイン
---

---
## 詳細設定

If advanced options are provided by the author of the plug-in, an **Advanced Properties** button may be enabled in the Property list. この場合ボタンをクリックすると、プラグインの制作元によるカスタムダイアログにてそれらのオプションを設定することができます。

この詳細設定オプションはプラグインの制作元が制御するため、詳細設定オプションに関する情報はそのプラグインの製作者から提供されます。



#### JSON 文法

| 名                | データタイプ | とりうる値                                                                          |
| ---------------- | ------ | ------------------------------------------------------------------------------ |
| customProperties | テキスト   | プラグイン専用のプロパティです。オブジェクトの場合は JSON 文字列として、バイナリの場合は base64エンコードの文字列としてプラグインに渡されます。 |


#### 対象オブジェクト

[プラグインエリア](pluginArea_overview.md)
