---
id: web-form
title: Web Form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| 引数  | 型                          |                             | 説明                        |
| --- | -------------------------- | :-------------------------: | ------------------------- |
| 戻り値 | 4D.WebForm | &#8592; | 新しい `Web Form` プロキシオブジェクト |

<!-- END REF -->

## 説明

`Web Form` コマンドは、<!-- REF #_command_.Web Form.Summary -->ページのプロパティと関数を効率的にエミュレートするための手段を提供する `4D.WebForm` プロキシオブジェクトを返します<!-- END REF -->。

:::info

`4D.WebForm` オブジェクトは、 **プロキシオブジェクト** であり、Web フォームオブジェクト自身への直接的な参照ではないことに留意してください。 その結果として例えば、`4D.WebForm` オブジェクトはすべてのページプロパティをデバッガ上に表示するわけではありません。

:::

返されたオブジェクトの各プロパティは、[4D.WebFormItem](../API/WebFormItemClass.md) クラスのオブジェクトです。

このコマンドは、Qodly Studio 以外のリクエストから呼び出された場合には、`null` を返します。

## 参照

[Web Event](web-event.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1735                        |
| スレッドセーフ | &cross; |




