---
id: vp-convert-from-4d-view
title: VP Convert from 4D View
---

<!-- REF #_method_.VP Convert from 4D View.Syntax -->

**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->

<!-- REF #_method_.VP Convert from 4D View.Params -->

| 引数             | 型      |                             | 説明                                 |
| -------------- | ------ | --------------------------- | ---------------------------------- |
| 4DViewDocument | BLOB   | ->                          | 4D View ドキュメント                     |
| 戻り値            | Object | <- | 4D View Pro オブジェクト<!-- END REF --> |

#### 説明

`VP Convert from 4D View` コマンドを使用すると、<!-- REF #_method_.VP Convert from 4D View.Summary -->旧式の 4D View ドキュメントを 4D View Pro オブジェクトへと変換することができます<!-- END REF -->。

> 旧式の 4D View プラグインが現環境にインストールされていなくても、このコマンドは使用可能です。

*4DViewDocument* には変換する 4D View ドキュメントを格納する BLOB変数やフィールドを渡します。 コマンドは、4D View ドキュメントに保存されていた情報をすべて 4D View Pro 属性へと変換した 4D View Pro オブジェクトを返します。

#### 例題

BLOB に保存されている 4D View エリアから 4D View Pro オブジェクトを取得します:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```
