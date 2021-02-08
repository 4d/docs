---
id: macros
title: フォームエディターマクロ
---


4D のフォームエディターはマクロをサポートしています。 1つ以上のアクションを実行するための指示をマクロと呼びます。 呼び出されると、マクロは登録された指示を実行し、自動的に指定のアクションをおこないます。

たとえば、定期レポートに特定のフォーマットが指定されている場合 (例: テキストによってフォントカラーが赤や緑であるなど)、マクロを作成してフォントカラーの設定を自動でおこなうことができます。 4Dフォームエディターのマクロでは、次のことがおこなえます:

*   4Dコードを作成・実行する
*   ダイアログを表示する
*   オブジェクトを選択する
*   フォームやフォームオブジェクトおよびそれらのプロパティを追加・編集・削除する
*   プロジェクトファイルを編集する (更新・削除)

フォームエディター用にカスタム機能を定義するため、マクロコードは [クラス関数](Concepts/classes.md) と [JSON のフォームオブジェクトプロパティ](FormObjects/properties_Reference.md) を使用できます。

ホストプロジェクトおよび、プロジェクト内のコンポーネントにてマクロを定義することができます。 通常は開発用のコンポーネントにマクロをインストールして使用します。

マクロが呼び出されると、指定されている既存の動作はマクロによってオーバーライドされます。

## 例題

In this short example, you'll see how to create and call a macro that adds a "Hello World!" alert button in the top left corner of your form.

1. In a `formMacros.json` file within the `Sources` folder of your project, you write:

```
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. Create a 4D class named `AddButton`.

3. Within the `AddButton` class, write the following function:

```code4d
Function onInvoke($editor : Object)->$result : Object

    var $btnHello : Object

    // Create a "Hello" button
    $btnHello:=New object("type"; "button"; \
    "text"; "Hello World!"; \
    "method"; New object("source"; "ALERT(\"Hello World!\")"); \
    "events"; New collection("onClick"); \
    "width"; 120; \
    "height"; 20; \
    "top"; 0; \
    "left"; 0)  

    // Add button in the current page
    $editor.editor.currentPage.objects.btnHello:=$btnHello  

    // Select the new button in the form editor
    $editor.editor.currentSelection.clear() //unselect elements
    $editor.editor.currentSelection.push("btnHello")    

    // Notify the modification to the 4D Form editor
    $result:=New object("currentSelection"; $editor.editor.currentSelection;\  
        "currentPage"; $editor.editor.currentPage)
```

You can then call the macro: ![](assets/en/FormEditor/macroex1.png) ![](assets/en/FormEditor/macroex2.png)


## Calling macros in the Form editor

When macros are defined in your 4D project, you can call a macro using the contextual menu of the Form editor:

![](assets/en/FormEditor/macroSelect.png)

This menu is built upon the `formMacros.json` [macro definition file(s)](#location-of-macros). Macros items are sorted in the order macro objects are defined in the file.

When macros exist at both the project and component levels, the following order is applied:

1. project macros
2. component macros

This menu can be called in an empty area or a selection in the form. Selected object are passed to `$editor.currentSelection` or `$editor.target` in the [`onInvoke`](#oninvoke) function of the macro.

A single macro can execute several operations. If selected, the **Undo** feature of the Form editor can be used to reverse macro operations globally.

## Location of macro file

All 4D Form Editor macros are defined within a single JSON file per project or component: `FormMacros.json`.

This file must be located in the host or component's **Project** > **Sources** folder:

![](assets/en/FormEditor/macroStructure.png)



## Declaring macros

The structure of the `formMacros.json` file is the following:

```js
{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
```

Here is the description of the JSON file contents:

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      属性
    </th>
    
    <th>
    </th>
    
    <th>
    </th>
    
    <th>
      タイプ
    </th>
    
    <th>
      説明
    </th>
  </tr>
  
  <tr>
    <td>
      macros
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      object
    </td>
    
    <td>
      list of defined macros
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
      \<macroName>
    </td>
    
    <td>
    </td>
    
    <td>
      object
    </td>
    
    <td>
      macro definition
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      class
    </td>
    
    <td>
      string
    </td>
    
    <td>
      macro class name
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
      \<customProperty>
    </td>
    
    <td>
      any
    </td>
    
    <td>
      (optional) custom value to retrieve in the constructor
    </td>
  </tr>
</table>

Custom properties, when used, are passed to the [constructor](#class-constructor) function of the macro.

### 例題

```js
{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

> Keep in mind that the order of macros objects in the file defines the [**Macros** menu](#calling-macros-in-the-form-editor) organization in the Form editor.


## Instantiating macros in 4D

Each macro you want to instantiate in your project or component must be declared as a [4D class](Concepts/classes.md).

The class name must match the name defined using the [class](#creating-macros) attribute of the `formMacros.json` file.

Macros are instantiated at application startup. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the [constructor](#class-constructor), you will have to restart the application to apply the changes.




## Macro Functions

Every macro class can contain a `Class constructor` and two functions: `onInvoke()` and `onError()`.


### Class constructor

#### Class constructor($macro : object)

| 参照     | タイプ    | 説明                                                       |
| ------ | ------ | -------------------------------------------------------- |
| $macro | オブジェクト | Macro declaration object (in the `formMacros.json` file) |

Macros are instantiated using a [class constructor](Concepts/classes.md#class-constructor) function, if it exists.

The class constructor is called once during class instantiation, which occurs at application startup.

Custom properties added to the [macro declaration](#declaring-macros) are returned in the parameter of the class contructor function.



#### 例題

In the `formMacros.json` file:

```js
{
   "macros": {
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
```

以下のように書くことができます:

```code4d  
// Class "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //left
    ...
```


### onInvoke()

#### onInvoke($editor : object) -> $result : object

| 参照      | タイプ    | 説明                                               |
| ------- | ------ | ------------------------------------------------ |
| $editor | オブジェクト | Form properties                                  |
| $result | オブジェクト | Form properties modified by the macro (optional) |

The `onInvoke` function is automatically executed each time the macro is called.

When the function is called, it receives in the `$editor` parameter a copy of all the elements of the form with their current values. You can then execute any operation on these properties.

Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `$result`. The macro processor will parse the returned properties and apply necessary operations in the form. Obviously, the less properties you return, the less time processing will require.

Here are the properties of the `$editor` object:

| プロパティ                     | タイプ    | 説明                                                                                |
| ------------------------- | ------ | --------------------------------------------------------------------------------- |
| $editor.form              | オブジェクト | The entire form                                                                   |
| $editor.file              | File   | File object of the form file                                                      |
| $editor.name              | 文字列    | Name of the form                                                                  |
| $editor.table             | number | Table number of the form, 0 for project form                                      |
| $editor.currentPageNumber | number | The number of the current page                                                    |
| $editor.currentPage       | オブジェクト | The current page, containing all the form objects and the entry order of the page |
| $editor.currentSelection  | コレクション | Collection of names of selected objects                                           |
| $editor.formProperties    | オブジェクト | Properties of the current form                                                    |
| $editor.target            | string | Name of the object under the mouse when clicked on a macro                        |

Here are the properties that you can pass in the `$result` object if you want the macro processor to execute a modification. All properties are optional:

| プロパティ             | タイプ    | 説明                                                          |
| ----------------- | ------ | ----------------------------------------------------------- |
| currentPage       | オブジェクト | currentPage including objects modified by the macro, if any |
| currentSelection  | コレクション | currentSelection if modified by the macro                   |
| formProperties    | オブジェクト | formProperties if modified by the macro                     |
| editor.groups     | オブジェクト | group info, if groups are modified by the macro             |
| editor.views      | オブジェクト | view info, if views are modified by the macro               |
| editor.activeView | 文字列    | Active view name                                            |




#### `method` attribute

When handling the `method` attribute of form objects, you can define the attribute value in two ways in macros:

- Using a [string containing the method file name/path](FormObjects/properties_Action.md#method).

- Using an object with the following structure:

| プロパティ | タイプ | 説明 |
| ----- | --- | -- |
|       |     |    |
 source|String|method code|

4D will create a file using the object name in the "objectMethods" folder with the content of `source` attribute. This feature is only available for macro code.

#### `$4dId` property in `currentPage.objects`

The `$4dId` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `$result.currentPage`:

- if the `$4dId` key is missing in both the form and an object in `$result`, the object is created.
- if the `$4dId` key exists in the form but is missing in `$result`, the object is deleted.
- if the `$4dId` key exists in both the form and an object in `$result`, the object is modified.


#### 例題

You want to define a macro function that will apply the red color and italic font style to any selected object(s).

```code4d
Function onInvoke($editor : Object)->$result : Object
    var $name : Text

    If ($editor.editor.currentSelection.length>0)       
        // Set stroke to red and style to italic for each selected object
        For each ($name; $editor.editor.currentSelection)
            $editor.editor.currentPage.objects[$name].stroke:="red"
            $editor.editor.currentPage.objects[$name].fontStyle:="italic"

        End for each 

    Else 
        ALERT("Please select a form object.")
    End if 

    // Notify to 4D the modification
    $result:=New object("currentPage"; $editor.editor.currentPage)
```


### onError()

#### onError($editor : object; $resultMacro : Object ; $error : Collection)

| 参照           |                       | タイプ    | 説明                                       |
| ------------ | --------------------- | ------ | ---------------------------------------- |
| $editor      |                       | オブジェクト | Object send to [onInvoke](#oninvoke)     |
| $resultMacro |                       | オブジェクト | Object returned by [onInvoke](#oninvoke) |
| $error       |                       | コレクション | Error stack                              |
|              | [].errCode            | 数値     | Error code                               |
|              | [].message            | テキスト   | Description of the error                 |
|              | [].componentSignature | テキスト   | Internal component signature             |

The `onError` function is executed when the macros processor encounters an error.

When executing a macro, if 4D encounters an error which prevents the macro from being cancelled, it does not execute the macro. It is the case for example if executing a macro would result in:

- deleting or modifying a script whose file is read-only.
- creating two objects with the same internal ID.

#### 例題

In a macro class definition, you can write the following generic error code:

```4d
Function onError($editor : Object; $resultMacro : Object; $error : Collection)
    var $obj : Object
    var $txt : Text
    $txt:=""

    For each ($obj; $error)
        $txt:=$txt+$obj.message+" \n"
    End for each 

    ALERT($txt)
```
