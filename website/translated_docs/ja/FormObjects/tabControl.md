---
id: tabControl
title: タブコントロール
---

タブコントロールは、ユーザーが複数の仮想画面の中から選択することのできるオブジェクトを作成します。この画面はタブコントロールオブジェクトにより囲まれています。 タブをクリックすることで、各画面にアクセスします。

次の複数ページフォームではタブコントロールオブジェクトが使用されています:

![](assets/en/FormObjects/tabControl1.png)

各画面を移動するには、目的のタブをクリックします。

これらの画面は、マルチページフォームの各ページを表わしたり、またはユーザーがタブがクリックすると変化するオブジェクトを表わすこともできます。 If the tab control is used as a page navigation tool, then the [`FORM GOTO` PAGE](https://doc.4d.com/4dv19/help/command/en/page247.html) command or the `gotoPage` standard action would be used when a user clicks a tab.

タブコントロールの他の利用法は、サブフォームやリストボックスに表示されるデータを制御することです。 たとえば、名刺帳はタブコントロールを用いて実現することができます。 タブにはひらがなの各文字を表示し、タブコントロールの動作としてはユーザーがクリックした文字と一致するデータをロードします。

各タブにはラベルだけ、またはラベルと小さなアイコンを表示することができます。 アイコンが含まれる場合、そのアイコンは各ラベルの左側に表示されます。 次の図はアイコンを使用するタブコントロールの例です:

![](assets/en/FormObjects/tabControl2.png)

タブコントロールを作成すると、4Dがタブの間隔と配置を管理します。 ラベルは配列形式で定義し、アイコンとラベルは階層リスト形式で定義します。

タブコントロールが十分大きく、ラベルとアイコンが設定されたタブをすべて表示できる場合は、その両方が表示されます。 タブコントロールの大きさが足らず、ラベルとアイコンを両方とも表示できない場合には、4Dはアイコンだけを表示します。 すべてのアイコンが収まりきらない場合、表示される最後のタブの右側にスクロール矢印が置かれます。 このスクロール矢印を使用し、アイコンを左右にスクロールできます。

macOSの場合、タブコントロールを標準位置 (上) だけでなく、下にも配置することができます。


### JSON 例:

```4d
    "myTab": {
        "type": "tab",
        "left": 60, 
        "top": 160,  
        "width": 100,   
        "height": 20,   
        "labelsPlacement": "bottom" // タブコントロールの位置
    }
```



## タブコントロールへのラベルの追加

To supply the labels for a tab control, you can use:

- オブジェクト
- a choice list
- an array

### Using an object

You can assign an [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) as the [data source](properties_Object.md#variable-or-expression) of the tab control. The object must contain the following properties:

| プロパティ          | タイプ    | 説明                                                                                                                                    |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | コレクション | Mandatory - Collection of scalar values. Only string values are supported. If invalid, empty or not defined, the tab control is empty |
| `index`        | number | Index of the currently tab control page (value between 0 and `collection.length-1`)                                                   |
| `currentValue` | テキスト   | Currently selected value                                                                                                              |

The initialization code must be executed before the form is presented to the user.

In the following example, `Form.tabControl` has been defined as tab control [expression](properties_Object.md#variable-or-expression). You can associate the [`gotoPage` standard action](#goto-page-action) to the form object:

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //start on page 3
```


### 選択リストの使用

You can assign a [choice list](properties_DataSource.md#choice-list-static-list) to the tab control, either through a collection (static list) or a JSON pointer to a json list ("$ref"). Icons associated with list items in the Lists editor will be displayed in the tab control.

### Using a Text array

フォームの各ページの名前を格納するテキスト配列を作成することができます。 このコードはユーザーにフォームを表示する前に実行しなければなりません。 たとえば、このコードをタブコントロールのオブジェクトメソッドに置いて、`On Load` イベントが生じたときにこのメソッドを実行します。

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```
> You can also store the names of the pages in a hierarchical list and use the [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) command to load the values into the array.


## Goto page features

### FORM GOTO PAGE コマンド

You can use the [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) command in the tab control’s method:

```4d
FORM GOTO PAGE(arrPages)
```

The command is executed when the [`On Clicked`](Events/onClicked.md) event occurs. You should then clear the array when the [`On Unload`](Events/onUnload.md) event occurs.

オブジェクトメソッドの例を次に示します:

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### gotoPage 標準アクション

タブコントロールに `gotoPage` [標準アクション](properties_Action.md#標準アクション) を割り当てることができます。すると、4Dはクリックされたタブコントロールの番号に相当するフォームのページを自動的に表示します。

たとえば、ユーザーが 3番目のタブをクリックすると、4Dはカレントフォームの 3ページ目 (存在する場合) を表示します。



## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [値を記憶](properties_Object.md#値を記憶) - [CSSクラス](properties_Object.md#CSSクラス) - [選択リスト](properties_DataSource.md#選択リスト-静的リスト) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [表示状態](properties_Display.md#表示状態) - [タブコントロールの位置](properties_Appearance.md#タブコントロールの位置) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [ヘルプTips](properties_Help.md#ヘルプTips) - [標準アクション](properties_Action.md#標準アクション) 
