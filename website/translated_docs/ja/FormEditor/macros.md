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

フォームエディター用のカスタム機能を定義するため、マクロコードは [クラス関数](Concepts/classes.md) と [JSON のフォームオブジェクトプロパティ](FormObjects/properties_Reference.md) を使用できます。

ホストプロジェクトおよび、プロジェクト内のコンポーネントにてマクロを定義することができます。 通常は開発用のコンポーネントにマクロをインストールして使用します。

マクロが呼び出されると、指定されている既存の動作はマクロによってオーバーライドされます。

## 例題

フォームの左上に "Hello World" アラートボタンを追加するマクロを作成します。

1. プロジェクトの `Sources` フォルダー内に配置された `formMacros.json` ファイルに、次のように書きます:

```
{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
```

2. 次に、`AddButton` という名前の 4Dクラスを作成します。

3. `AddButton` クラスに次の関数を定義します:

```code4d
Function onInvoke($editor : Object)->$result : Object

    var $btnHello : Object

    // "Hello" ボタンを作成します
    $btnHello:=New object("type"; "button"; \
    "text"; "Hello World!"; \
    "method"; New object("source"; "ALERT(\"Hello World!\")"); \
    "events"; New collection("onClick"); \
    "width"; 120; \
    "height"; 20; \
    "top"; 0; \
    "left"; 0)  

    // 現在のページにボタンを追加します
    $editor.editor.currentPage.objects.btnHello:=$btnHello  

    // フォームエディター上で新規作成したボタンを選択します
    $editor.editor.currentSelection.clear() //unselect elements
    $editor.editor.currentSelection.push("btnHello")    

    // 4D に変更内容を通知します
    $result:=New object("currentSelection"; $editor.editor.currentSelection;\  
        "currentPage"; $editor.editor.currentPage)
```

マクロを呼び出します: ![](assets/en/FormEditor/macroex1.png) ![](assets/en/FormEditor/macroex2.png)


## フォームエディターでマクロを呼び出す

4Dプロジェクトにマクロが定義されていると、フォームエディターのコンテキストメニューを使ってマクロを呼び出すことができます:

![](assets/en/FormEditor/macroSelect.png)

このメニューは `formMacros.json` [マクロ定義ファイル](#マクロファイルの場所) をもとに作成されています。 ファイル内で定義されている順にメニュー項目が表示されます。

プロジェクトとコンポーネントの両レベルでマクロが存在する場合、次の優先順位に従って表示されます:

1. プロジェクトマクロ
2. コンポーネントマクロ

このメニューは、フォームエディター内で右クリックにより開くことができます。 選択オブジェクトがある状態でマクロを呼び出した場合は、それらのオブジェクトはマクロの [`onInvoke`](#oninvoke) 関数の `$editor.currentSelection` や `$editor.target` パラメーターに受け渡されます。

1つのマクロによって複数の処理を実行することができます。 マクロで実行した処理は、フォームエディターの **取り消し** 機能でもとに戻すことができます。

## マクロファイルの場所

4Dフォームエディターマクロは、プロジェクトあるいはコンポーネントごとに 1つの JSONファイルによって定義されます: `FormMacros.json`。

このファイルは、ホストまたはコンポーネントプロジェクトの **Project** > **Sources** フィルダーに配置しなければなりません:

![](assets/en/FormEditor/macroStructure.png)



## マクロの宣言

`formMacros.json` ファイルの構造は次の通りです:

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

JSONファイルの説明です:

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
      定義されたマクロのリスト
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
      マクロ定義
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
      マクロクラス名
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
      (任意) コンストラクターによって取得するカスタム値
    </td>
  </tr>
</table>

カスタムプロパティはマクロの [constructor](#class-constructor) 関数に受け渡されます。

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

> このファイル内のマクロオブジェクトの順が、フォームエディターの [**マクロ** メニュー](#フォームエディターでマクロを呼び出す) の表示順を定義します。


## マクロのインスタンス化

プロジェクトおよびコンポーネントにおいてインスタンス化するマクロは、それぞれ [4Dクラス](Concepts/classes.md) として宣言する必要があります。

クラスの名称は、`formMacros.json` ファイルで [class](#マクロの宣言) 属性に定義した名前と同一でなくてはなりません。

マクロは、アプリケーションの起動時にインスタンス化されます。 そのため、関数の追加やパラメーターの編集など、マクロクラスになんらかの変更を加えた場合には、それらを反映するにはアプリケーションを再起動する必要があります。




## マクロ関数

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
