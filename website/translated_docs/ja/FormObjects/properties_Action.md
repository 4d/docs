---
id: propertiesAction
title: 動作
---


---
## ドラッグ有効

ユーザーによるオブジェクトのドラッグを制御します。 デフォルトでは、ドラッグ操作は禁止されています。

二つのドラッグモードが提供されています:

- **カスタム**: このモードでは、オブジェクトに対しておこなわれたドラッグ操作は、当該オブジェクトのコンテキストにおいて `On Begin Drag` フォームイベントを発生させます。 これを利用して、開発者はメソッドを用いてドラッグアクションを管理しなければなりません。   
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 このモードは専用のプロパティ、イベント、`ペーストボード` テーマのコマンド等の組み合わせに基づいています。
- **自動**: このモードでは、ドラッグ元のフォームオブジェクトからテキストやピクチャーが 4D によって **コピー** されます。 このコピーは、同じ 4Dエリア内、2つの 4Dエリア間、4D と他のアプリケーション間で使用できます。 たとえば、自動ドラッグ (＆ドロップ) を使用して、プログラムを使用せず、2つのフィールド間で値をコピーできます:  
  ![](assets/en/FormObjects/property_automaticDragDrop.png) ![](assets/en/FormObjects/property_automaticDragDrop2.png) このモードでは、`On Begin Drag` フォームイベントは生成されません。 自動ドラッグが有効のときに標準のドラッグを "強制" したい場合、アクションの間 **Alt** (Windows) または **Option** (macOS) キーを押しながら操作します。 このオプションはピクチャーでは利用できません。

詳細については *4Dランゲージリファレンス* マニュアルの [ドラッグ＆ドロップ](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.ja.html) を参照してください。

#### JSON 文法

| 名        | データタイプ | とりうる値                                              |
| -------- | ------ | -------------------------------------------------- |
| dragging | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |


#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [入力](input_overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [プラグインエリア](pluginArea_overview.md)




#### 参照
[ドロップ有効](#droppable)


---
## ドロップ有効

Control whether and how the object can be the destination of a drag and drop operation.

Two drop modes are available:

- **Custom**: In this mode, any drop operation performed on the object triggers the `On Drag Over` and `On Drop` form events in the context of the object. You then manage the drop action using a method.    
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 このモードは専用のプロパティ、イベント、`ペーストボード` テーマのコマンド等の組み合わせに基づいています。
- **Automatic**: In this mode, 4D automatically manages — if possible — the insertion of dragged data of the text or picture type that is dropped onto the object (the data are pasted into the object). The `On Drag Over` and `On Drop` form events are NOT generated. On the other hand, the `On After Edit` (during the drop) and `On Data Change` (when the object loses the focus) events are generated.

詳細については *4Dランゲージリファレンス* マニュアルの [ドラッグ＆ドロップ](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.ja.html) を参照してください。


#### JSON 文法

| 名        | データタイプ | とりうる値                                              |
| -------- | ------ | -------------------------------------------------- |
| dropping | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Input](input_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Plug-in Area](pluginArea_overview.md#overview)


#### 参照
[ドラッグ有効](#draggable)


---
## オブジェクトメソッド実行
When this option is enabled, the object method is executed with the `On Data Change` event *at the same moment* the user changes the value of the indicator. When the option is disabled, the method is executed *after* the modification.

#### JSON 文法

| 名                   | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| continuousExecution | boolean | true, false |

#### 対象オブジェクト

[Progress bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)






---
## メソッド

Reference of a method attached to the object. Object methods generally "manage" the object while the form is displayed or printed. You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

Several types of method references are supported:

- a standard object method file path, i.e. that uses the following pattern:  
  `ObjectMethods/objectName.4dm`  
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/*formName*/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:  
  `ObjectMethods/objectName.4dm` You can also use a filesystem:  
  `/RESOURCES/Buttons/bOK.4dm` In this case, 4D does not provide automatic support for object operations.


#### JSON 文法

| 名      | データタイプ | とりうる値                                                              |
| ------ | ------ | ------------------------------------------------------------------ |
| method | text   | Object method standard or custom file path, or project method name |


#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)




---
## 行の移動可
`Array type list boxes`

Authorizes the movement of rows during execution. This option is selected by default. It is not available for [selection type list boxes](listbox_overview.md#selection-list-boxes) nor for [list boxes in hierarchical mode](properties_Hierarchy.md#hierarchical-list-box).

#### JSON 文法

| 名           | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| movableRows | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)





---
## 複数選択可

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### JSON 文法

| 名             | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | text   | "multiple", "single", "none" |

#### 対象オブジェクト

[階層リスト](list_overview.md)




---
## ソート可

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. This option is selected by default. Picture type arrays (columns) cannot be sorted using this feature.

In list boxes based on a selection of records, the standard sort function is available only:
*   When the data source is *Current Selection*,
*   With columns associated with fields (of the Alpha, Number, Date, Time or Boolean type).

In other cases (list boxes based on named selections, columns associated with expressions), the standard sort function is not available. A standard list box sort changes the order of the current selection in the database. However, the highlighted records and the current record are not changed. A standard sort synchronizes all the columns of the list box, including calculated columns.

#### JSON 文法

| 名        | データタイプ  | とりうる値       |
| -------- | ------- | ----------- |
| sortable | boolean | true, false |

#### 対象オブジェクト
[リストボックス](listbox_overview.md)






---
## 標準アクション
Typical activities to be performed by active objects (*e.g.*, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the *Design Reference*.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed.

You can also set this property using the `OBJECT SET ACTION` command.

#### JSON 文法

| 名      | データタイプ | とりうる値                                                                                                            |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| action | string | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### 対象オブジェクト

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
