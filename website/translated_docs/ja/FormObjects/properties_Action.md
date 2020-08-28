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

ユーザーがドラッグ＆ドロップしたデータをオブジェクトが受け取ることができるかどうかを制御します。

二つのドロップモードが提供されています:

- **カスタム**: このモードでは、オブジェクトに対しておこなわれたドロップ操作は、当該オブジェクトのコンテキストにおいて `On Drag Over` と `On Drop` フォームイベントを発生させます。 これを利用して、開発者はメソッドを用いてドロップアクションを管理しなければなりません。    
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 このモードは専用のプロパティ、イベント、`ペーストボード` テーマのコマンド等の組み合わせに基づいています。
- **自動**: このモードでは、4D は可能な限り自動で、オブジェクトにドロップされたテキストやピクチャー型データの挿入を管理します (データはオブジェクトにペーストされます)。 このモードでは、`On Drag Over` と `On Drop` フォームイベントは生成されません。 他方、ドロップ中の `On After Edit` とオブジェクトがフォーカスを失った時の `On Data Change` イベントは生成されます。

詳細については *4Dランゲージリファレンス* マニュアルの [ドラッグ＆ドロップ](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.ja.html) を参照してください。


#### JSON 文法

| 名        | データタイプ | とりうる値                                              |
| -------- | ------ | -------------------------------------------------- |
| dropping | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [入力](input_overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [プラグインエリア](pluginArea_overview.md)


#### 参照
[ドラッグ有効](#draggable)


---
## オブジェクトメソッド実行
このオプションを選択した場合、ユーザーがインジケーターの値を変更すると *同時に* `On Data Change` イベントが生成され、オブジェクトメソッドが実行されます。 デフォルトでは、*変更後に* メソッドが実行されます。

#### JSON 文法

| 名                   | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| continuousExecution | boolean | true, false |

#### 対象オブジェクト

[進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [ステッパー](stepper.md)






---
## メソッド

オブジェクトに関連づけられたメソッドへの参照。 オブジェクトメソッドは通常、フォームが表示または印刷されている間、オブジェクトを "管理" します。 オブジェクトメソッドは呼び出す必要がありません。オブジェクトメソッドが関連づけられているオブジェクトに関わるイベントが発生した場合、4D は自動的にオブジェクトメソッドを呼び出します。

メソッド参照にはいくつかのタイプが利用可能です:

- 標準のオブジェクトメソッドファイルパス:   
  `ObjectMethods/objectName.4dm`  
  (`objectName` には実際の [オブジェクト名](properties_Object.md#オブジェクト名) が入ります)。 このタイプの参照は、当該メソッドファイルがデフォルトの場所 ("sources/forms/*formName*/ObjectMethods/") にあることを示します。 この場合、エディター上でフォームオブジェクトに対して操作 (名称変更、複製、コピー/ペーストなど) がおこなわれると、4D はこれらの変更を自動的にオブジェクトメソッドに反映させます。

- 拡張子を省いた既存のプロジェクトメソッド名: `myMethod`。この場合、フォームオブジェクトに対して操作がおこなわれても、4D はそれらの変更を自動反映しません。

- .4dm 拡張子を含むカスタムのメソッドファイルパス:   
  `ObjectMethods/objectName.4dm`。 ファイルシステムも使用できます:  
  `/RESOURCES/Buttons/bOK.4dm`。 この場合、フォームオブジェクトに対して操作がおこなわれても、4D はそれらの変更を自動反映しません。


#### JSON 文法

| 名      | データタイプ | とりうる値                                      |
| ------ | ------ | ------------------------------------------ |
| method | text   | オブジェクトメソッドの標準またはカスタムのファイルパス、またはプロジェクトメソッド名 |


#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)




---
## 行の移動可
`配列型リストボックス`

ランタイムにおける行の移動を許可します。 このオプションはデフォルトで選択されています。 [セレクション型のリストボックス](listbox_overview.md#セレクションリストボックス) および [階層リストボックス](properties_Hierarchy.md#階層リストボックス) では、このオプションは提供されていません。

#### JSON 文法

| 名           | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| movableRows | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)





---
## 複数選択可

[階層リスト](list_overview.md) において、複数項目の選択を許可します。

#### JSON 文法

| 名             | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | text   | "multiple", "single", "none" |

#### 対象オブジェクト

[階層リスト](list_overview.md)




---
## ソート可

Allows sorting column data by clicking a [listbox](listbox_overview.md) header. このオプションはデフォルトで選択されています。 Picture type arrays (columns) cannot be sorted using this feature.

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
