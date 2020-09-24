---
id: webAreaOverview
title: Webエリア
---

## 概要

Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

It is possible to create several web areas in the same form. Note, however, that the use of web areas must follow [several rules](#web-areas-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。
> The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.


## 特有のプロパティ

### 割り当てられる変数

Two specific variables can be associated with each web area:
- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

### Webレンダリングエンジン

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

Selecting the embedded web rendering engine allows you to call 4D methods from the web area.

### 4Dメソッドコールを許可
When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

> This property is only available if the web area [uses the embedded web rendering engine](#use-embedded-web-rendering-engine).

### $4dオブジェクトの使用




The [4D embedded web rendering engine](#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

たとえば、`HelloWorld` という 4Dメソッドを呼び出す場合には、以下の宣言を実行します:

```codeJS
$4d.HelloWorld();
```
> JavaScript は大文字小文字を区別するため、オブジェクトの名前は $4d (dは小文字) であることに注意が必要です。

4Dメソッドへの呼び出しのシンタックスは以下のようになります:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN`: 4Dメソッドに対して必要なだけ引数を渡すことができます。 これらの引数は、JavaScript にサポートされている型であればどんなものでも渡せます (文字列、数値、配列、オブジェクト)。

- `function(result)`: 最後の引数として渡される関数です。 この "コールバック" 関数は、4Dメソッドが実行を終えると同時に呼び出されます。 この関数は `result` 引数を受け取ります:

- `result`: "$0" 式に返される、4Dメソッド実行の戻り値です。 戻り値は JavaScript でサポートされている型 (文字列、数値、配列、オブジェクト) のいずれかになります。 `C_OBJECT` コマンドを使用して、オブジェクトを返すことができます。

> デフォルトとして、4Dは UTF-8 文字コードで動作しています。 (アクセントが付いた文字などの) 拡張文字を含むテキストを返す場合には、Webエリアで表示されるページの文字コードが UTF-8 に宣言されていることを確認してください。文字コードが UTF-8 でない場合、文字が正しく表示されない可能性があります。 この場合、以下の 1行を HTMLページに追加して文字コードを宣言してください:<br /> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### 例題 1
`today` という名の 4Dプロジェクトメソッドがあり、そのメソッドは引数を受け付けず、カレントの日付を文字列として返す場合について考えてみます。

`today` メソッドの 4Dコードです:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

In the web area, the 4D method can be called with the following syntax:

```js
$4d.today()
```

この 4Dメソッドは引数を受け取りませんが、メソッドの実行後に $0 の値を、4Dによって呼び出されるコールバック関数へと返します。 We want to display the date in the HTML page that is loaded by the web area.

HTMLページのコードです:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>今日は: <div id="mydiv"></div>
</body>
</html>
```

#### 例題 2

`calcSum` という 4Dプロジェクトメソッドがあり、そのメソッドが (``$1...$n) という引数を受け取り、その合計を `$0` に返すという場合について考えます。

`calcSum` メソッドの 4Dコードです:

```4d
 C_REAL(${1}) // n個の実数型引数を受け取ります
 C_REAL($0) // 実数の値を返します
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

The JavaScript code run in the web area is:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // 結果は 262.5 です
    });
```


## 標準アクション

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. これらのアクションについては [標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) で説明しています。


## フォームイベント

Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

In addition, web areas support the following generic form events:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`


## Webエリアのルール

### ユーザーインターフェース

When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. コンテキストメニューの表示は、`WA SET PREFERENCE` コマンドを使用することで管理可能です。
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ![](assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the web area.

### Subforms
For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:

- The subform must not be able to scroll
- The limits of the web area must not exceed the size of the subform

> Superimposing a web area on top of or beneath other form objects is not supported.


### Web Area and Web server conflict (Windows)
In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server.

### Web plugins and Java applets
The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

### Insertion of protocol (macOS)
The URLs handled by programming in web areas in macOS must begin with the protocol. For example, you need to pass the string "http://www.mysite.com" and not just "www.mysite.com".


## Access to web inspector
You can view and use a web inspector within web areas in your forms or in offscreen web areas. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

### Displaying the web inspector
To display the web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br> This command can be used directly with onscreen (form object) and offscreen web areas. In the case of an onscreen web area, you must have [selected the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the web inspector is only available with this configuration).

- **Use the web area context menu**<br> This feature can only be used with onscreen web areas and requires that the following conditions are met:
    - the embedded web rendering engine is selected for the area
    - the [context menu](properties_Entry.md#context-menu) for the web area is enabled
    - the use of the inspector is expressly enabled in the area by means of the following statement:

```4d
    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

For more information, refer to the description of the `WA SET PREFERENCE` command.

### Using the web inspector
When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. When you select this option, the web inspector window is displayed.

> The web inspector is included in the embedded web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the web rendering engine.




## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





