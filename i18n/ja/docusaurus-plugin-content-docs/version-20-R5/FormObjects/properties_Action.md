---
id: propertiesAction
title: 動作
---

---

## ドラッグ有効

ユーザーによるオブジェクトのドラッグを制御します。 デフォルトでは、ドラッグ操作は禁止されています。

二つのドラッグモードが提供されています:

- **カスタム**: このモードでは、オブジェクトに対しておこなわれたドラッグ操作は、当該オブジェクトのコンテキストにおいて `On Begin Drag` フォームイベントを発生させます。 これを利用して、開発者はメソッドを用いてドラッグアクションを管理しなければなりません。\
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 このモードは専用のプロパティ、イベント、`ペーストボード` テーマのコマンド等の組み合わせに基づいています。
- **自動**: このモードでは、ドラッグ元のフォームオブジェクトからテキストやピクチャーが 4D によって **コピー** されます。 このコピーは、同じ 4Dエリア内、2つの 4Dエリア間、4D と他のアプリケーション間で使用できます。 For example, automatic drag (and drop) lets you copy a value between two fields without using programming:\
  ![](../assets/en/FormObjects/property_automaticDragDrop.png)\
  ![](../assets/en/FormObjects/property_automaticDragDrop2.png)
  In this mode, the `On Begin Drag` form event is NOT generated. 自動ドラッグが有効のときに標準のドラッグを "強制" したい場合、アクションの間 **Alt** (Windows) または **Option** (macOS) キーを押しながら操作します。 このオプションはピクチャーでは利用できません。

詳細については _4Dランゲージリファレンス_ マニュアルの [ドラッグ＆ドロップ](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.ja.html) を参照してください。

#### JSON 文法

| 名称       | データタイプ | とりうる値                                                                                    |
| -------- | ------ | ---------------------------------------------------------------------------------------- |
| dragging | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [入力](input_overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [プラグインエリア](pluginArea_overview.md)

#### 参照

[Droppable](#droppable)

---

## ドロップ有効

ユーザーがドラッグ＆ドロップしたデータをオブジェクトが受け取ることができるかどうかを制御します。

二つのドロップモードが提供されています:

- **カスタム**: このモードでは、オブジェクトに対しておこなわれたドロップ操作は、当該オブジェクトのコンテキストにおいて `On Drag Over` と `On Drop` フォームイベントを発生させます。 これを利用して、開発者はメソッドを用いてドロップアクションを管理しなければなりません。\
  つまり、カスタムモードにおいては、ドラッグ＆ドロップ操作のすべてが開発者により管理されます。 このモードでは、ドラッグ＆ドロップに基づいたあらゆるインターフェースを実装することができます。これにはデータの転送を必ずしも伴わないものも含まれ、ファイルを開くや計算をトリガーするなどの任意のアクションを実行することができます。 このモードは専用のプロパティ、イベント、`ペーストボード` テーマのコマンド等の組み合わせに基づいています。
- **自動**: このモードでは、4D は可能な限り自動で、オブジェクトにドロップされたテキストやピクチャー型データの挿入を管理します (データはオブジェクトにペーストされます)。 このモードでは、`On Drag Over` と `On Drop` フォームイベントは生成されません。 他方、ドロップ中の `On After Edit` とオブジェクトがフォーカスを失った時の `On Data Change` イベントは生成されます。

詳細については _4Dランゲージリファレンス_ マニュアルの [ドラッグ＆ドロップ](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.ja.html) を参照してください。

#### JSON 文法

| 名称       | データタイプ | とりうる値                                                                                    |
| -------- | ------ | ---------------------------------------------------------------------------------------- |
| dropping | text   | "none" (デフォルト), "custom", "automatic" (リストボックスを除く) |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [入力](input_overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [プラグインエリア](pluginArea_overview.md)

#### 参照

[Draggable](#draggable)

---

## オブジェクトメソッド実行

このオプションを選択した場合、ユーザーがインジケーターの値を変更すると _同時に_ `On Data Change` イベントが生成され、オブジェクトメソッドが実行されます。 デフォルトでは、_変更後に_ メソッドが実行されます。

#### JSON 文法

| 名称                  | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| continuousExecution | boolean | true, false |

#### 対象オブジェクト

[進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [ステッパー](stepper.md)

---

## メソッド

オブジェクトに関連づけられたメソッドへの参照。 オブジェクトメソッドは通常、フォームが表示または印刷されている間、オブジェクトを "管理" します。 オブジェクトメソッドは呼び出す必要がありません。オブジェクトメソッドが関連づけられているオブジェクトに関わるイベントが発生した場合、4D は自動的にオブジェクトメソッドを呼び出します。

メソッド参照にはいくつかのタイプが利用可能です:

- a standard object method file path, i.e. that uses the following pattern:\
  `ObjectMethods/objectName.4dm`\
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). このタイプの参照は、当該メソッドファイルがデフォルトの場所 ("sources/forms/_formName_/ObjectMethods/") にあることを示します。 この場合、エディター上でフォームオブジェクトに対して操作 (名称変更、複製、コピー/ペーストなど) がおこなわれると、4D はこれらの変更を自動的にオブジェクトメソッドに反映させます。

- 拡張子を省いた既存のプロジェクトメソッド名: `myMethod`。この場合、フォームオブジェクトに対して操作がおこなわれても、4D はそれらの変更を自動で反映しません。

- a custom method file path including the .4dm extension, e.g.:\
  `../../CustomMethods/myMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Buttons/bOK.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### JSON 文法

| 名称     | データタイプ | とりうる値                                      |
| ------ | ------ | ------------------------------------------ |
| method | text   | オブジェクトメソッドの標準またはカスタムのファイルパス、またはプロジェクトメソッド名 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Forms](FormEditor/forms.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## 行の移動可

`Array type list boxes`

ランタイムにおける行の移動を許可します。 このオプションはデフォルトで選択されています。 [セレクション型のリストボックス](listbox_overview.md#セレクションリストボックス) および [階層リストボックス](properties_Hierarchy.md#階層リストボックス) では、このオプションは提供されていません。

#### JSON 文法

| 名称          | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| movableRows | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## 複数選択可

[階層リスト](list_overview.md) において、複数項目の選択を許可します。

#### JSON 文法

| 名称            | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | text   | "multiple", "single", "none" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md)

---

## ソート可

[リストボックス](listbox_overview.md) ヘッダーのクリックによる列データの並べ替えを有効にします。 このオプションはデフォルトで選択されています。 ピクチャー型配列 (列) はこのメカニズムではソートできません。

レコードセレクションに基づくリストボックスの場合、標準のソート機能は以下の場合のみ有効です:

- データソースが _カレントセレクション_ であり、
- その列にフィールドが割り当てられていること (文字、数値、日付、時間、およびブール型)。

他の場合 (命名セレクションに基づくリストボックスや、式が割り当てられた列)、標準のソート機能は動作しません。 標準のリストボックスソートは、データベースのカレントセレクションの順番を変更します。 しかし、ハイライトされたレコードとカレントレコードは変更されません。 標準の並び替えは、リストボックスのすべての列 (式が割り当てられた列も含む) を同期します。

#### JSON 文法

| 名称       | データタイプ  | とりうる値       |
| -------- | ------- | ----------- |
| sortable | boolean | true, false |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 標準アクション

Typical activities to be performed by active objects (_e.g._, letting the user accept, cancel, or delete records, move between records or from page to page in a multi-page form, etc.) have been predefined by 4D as standard actions. 詳細な情報に関しては、_デザインリファレンス_ の [標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) の章を参照ください。

フォームオブジェクトには、標準アクションとメソッドの両方を割り当てることができます。 この場合、標準アクションは通常、メソッドの後に実行されます。また、4D はこのアクションを使用して、カレントコンテキストに応じてオブジェクトを有効化/無効化します フォームオブジェクトが無効化されていると、関連づけられたメソッドは実行されません。

このプロパティは `OBJECT SET ACTION` コマンドによって設定することができます。

#### JSON 文法

| 名称     | データタイプ | とりうる値                                                                              |
| ------ | ------ | ---------------------------------------------------------------------------------- |
| action | string | 有効な [標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) |

#### 対象オブジェクト

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
