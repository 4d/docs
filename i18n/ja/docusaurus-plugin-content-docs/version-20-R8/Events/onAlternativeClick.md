---
id: onAlternativeClick
title: On Alternative Click
---

| コード | 呼び出し元                                                                                                                                     | 定義                                                                                                               |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 38  | [ボタン](FormObjects/button_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | <li>ボタン: ボタンの "矢印" のエリアがクリックされた</li><li>リストボックス: オブジェクト配列のカラム内において、エリプシスボタン ("alternateButton" 属性) がクリックされた</li> |

## 説明

### ボタン

いくつかのボタンスタイルには、[ポップアップメニュー](FormObjects/properties_TextAndPicture.md#ポップアップメニューあり) をリンクし、矢印を表示させることができます。 この矢印をクリックすると、ボタンの主たるアクションの代わりのアクションを提供するポップアップを表示します。

4D では `On Alternative Click` イベントを使用してこの動作を管理できます。 このイベントは、ユーザーが矢印をクリックすると、マウスボタンが押されてすぐに生成されます:

- ポップアップメニューが **分離** されている場合、このイベントはボタン中で矢印のあるエリアがクリックされた場合のみ生成されます。 ボタンに適用されている [標準アクション](https://doc.4d.com/4Dv19R7/4D/19-R7/Standard-actions.300-6013479.ja.html) があったとしても、この場合には実行されないことに留意してください。
- ポップアップメニューが **リンク** されている場合、このイベントはボタン上どこをクリックしても生成されます。 このタイプのボタンでは [`On Long Click`](onLongClick.md) イベントが生成されないことに注意してください。

![](../assets/en/Events/clickevents.png)

### リストボックス

このイベントは [オブジェクト配列型のリストボックス](FormObjects/listbox_overview.md#オブジェクト配列カラムの設定) のカラムにおいて、ユーザーがウィジェットのエリプシスボタン ("alternateButton" 属性) をクリックしたときに生成されます。

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

["alternateButton" 属性の説明](FormObjects/listbox_overview.md#alternatebutton) を参照ください。
