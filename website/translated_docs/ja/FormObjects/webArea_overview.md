---
id: webAreaOverview
title: Webエリア
---

## 概要

Webエリアは、静的および動的な HTMLページ、ファイル、ピクチャー、JavaScript などの様々な Webコンテンツをフォーム中で表示することのできるオブジェクトです。 Webエリアの描画エンジンは、アプリケーションの実行プラットフォームおよび [埋め込みWebレンダリングエンジンを使用](properties_WebArea.md#埋め込みWebレンダリングエンジンを使用) オプションの設定状態により異なります。

同じフォーム内に複数の Webエリアを配置できます。 しかしながら、Webエリアの挿入には [いくつかの制約](#webエリアのルール) がつく事に注意して下さい。

いくつかの専用の [標準アクション](#標準アクション)、多数の [ランゲージコマンド](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.ja.html)、そして汎用および専用の [フォームイベント](#フォームイベント) を使用して、Webエリアの動作を制御することができます。 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。
> Webエリアにおける Webプラグインおよび Javaアップレットの使用は推奨されていません。これらは、とくにイベント管理レベルにおいて 4D の動作を不安定にさせる可能性があります。


## 特有のプロパティ

### 割り当てられる変数

Webエリアには 2つの特別な変数が自動で割り当てられます:
- [`URL`](properties_WebArea.md#url) -- Webエリアに表示されている URL の管理に使用します。
- [`進捗状況変数`](properties_WebArea.md#進捗状況変数) -- Webエリアにロード中のページのパーセンテージを知るために使用します。

### Webレンダリングエンジン

Webエリアでは、[2つの描画エンジン](properties_WebArea.md#埋め込みWebレンダリングエンジンを使用) うちから使用するものを選択することができます。

"埋め込みWebレンダリングエンジンを使用" プロパティを選択している場合、"4Dメソッドコールを許可" プロパティが選択可能になります。

### 4Dメソッドコールを許可
[4Dメソッドコールを許可](properties_WebArea.md#4Dメソッドコールを許可) プロパティを選択している場合、Webエリアから 4Dメソッドを呼び出すことができます。

> この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](#埋め込みWebレンダリングエンジンを使用) している場合に限り、使用可能です。

### $4dオブジェクトの使用

[4Dの埋め込みWebレンダリングエンジン](#埋め込みWebレンダリングエンジンを使用) は、$4d という JavaScriptオブジェクトをエリアに提供します。$4dオブジェクトと "." (ドット) オブジェクト記法を使用することによって、任意の 4Dプロジェクトメソッドを呼び出すことができます。

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

Webエリアでは、 4Dメソッドは以下のシンタックスで呼び出し可能です:

```js
$4d.today()
```

この 4Dメソッドは引数を受け取りませんが、メソッドの実行後に $0 の値を、4Dによって呼び出されるコールバック関数へと返します。 Webエリアによってロードされた HTMLページ内にこの日付を表示します。

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

Webエリア内で実行される JavaScript コードです:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // 結果は 262.5 です
    });
```


## 標準アクション

Webエリアを自動で管理するために、4つの特別な自動アクション (`openBackURL`、`openForwardURL`、`refreshCurrentURL`、そして `stopLoadingURL`) を使用できます。 These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Form events

Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

In addition, Web areas support the following generic form events:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`


## Web area rules

### User interface

When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:

- **Edit menu commands**: When the Web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the Web area. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the mouse cursor displays a "forbidden" icon ![](assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the area.

### Subforms
For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:

- The subform must not be able to scroll
- The limits of the Web area must not exceed the size of the subform

> Superimposing a Web area on top of or beneath other form objects is not supported.


### Web Area and Web server conflict (Windows)
Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server.

### Web plugins and Java applets
Webエリアにおける Webプラグインおよび Javaアップレットの使用は推奨されていません。これらは、とくにイベント管理レベルにおいて 4D の動作を不安定にさせる可能性があります。

### Insertion of protocol (macOS)
The URLs handled by programming in Web areas under macOS must begin with the protocol. For example, you need to pass the string "http://www.mysite.com" and not just "www.mysite.com".


## Access to Web inspector
You can view and use a Web inspector within Web areas of your forms. The Web inspector is a debugger which is provided by the embedded Web engine. It allows to parse the code and the flow of information of the Web pages.

### Displaying the Web inspector
The following conditions must be met in order to view the Web inspector in a Web area:

- You must [select the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the Web inspector is only available with this configuration).
- You must enable the [context menu](properties_Entry.md#context-menu) for the area (this menu is used to call the inspector)
- You must expressly enable the use of the inspector in the area by means of the following statement:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Using the Web inspector
When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. When you select this option, the Web inspector window is displayed.

> The Web inspector is included in the embedded Web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine.




## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





