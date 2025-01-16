---
id: webAreaOverview
title: Webエリア
---

Webエリアは、静的および動的な HTMLページ、ファイル、ピクチャー、JavaScript などの様々な Webコンテンツをフォーム中で表示することのできるオブジェクトです。 The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

同じフォーム内に複数の Webエリアを配置できます。 Note, however, that the use of web areas must follow [several rules](#web-area-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。

## 特有のプロパティ

### 割り当てられる変数

Webエリアには 2つの特別な変数が自動で割り当てられます:

- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

> As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

### Webレンダリングエンジン

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

"埋め込みWebレンダリングエンジンを使用" プロパティを選択している場合、"4Dメソッドコールを許可" プロパティが選択可能になり、また、macOS と Windows 上の動作が同様であるようにできます。 Webエリアがインターネットに接続されている場合には、最新のセキュリティアップデートの恩恵を受けられるため、システムレンダリングエンジンを選択することが推奨されます。

### 4Dメソッドコールを許可

When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

:::note 注記

- This property is only available if the web area [uses the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).
- このオプションは 4Dコードの実行を許可するため、セキュリティ上の理由から、アプリケーションによって生成されたページなど、信頼できるページに対してのみ有効にするべきです。

:::

### $4dオブジェクトの使用

The [4D embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```js
$4d.HelloWorld();
```

> JavaScript は大文字小文字を区別するため、オブジェクトの名前は $4d (dは小文字) であることに注意が必要です。

4Dメソッドへの呼び出しのシンタックスは以下のようになります:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method.
  これらの引数は、JavaScript にサポートされている型であればどんなものでも渡せます (文字列、数値、配列、オブジェクト)。

- `function(result)`: Function to pass as last argument. この "コールバック" 関数は、4Dメソッドが実行を終えると同時に呼び出されます。 It receives the `result` parameter.

- `result`: Execution result of the 4D method, returned in the "$0" expression. 戻り値は JavaScript でサポートされている型 (文字列、数値、配列、オブジェクト) のいずれかになります。 You can use the `C_OBJECT` command to return the objects.

> デフォルトとして、4Dは UTF-8 文字コードで動作しています。 (アクセントが付いた文字などの) 拡張文字を含むテキストを返す場合には、Webエリアで表示されるページの文字コードが UTF-8 に宣言されていることを確認してください。文字コードが UTF-8 でない場合、文字が正しく表示されない可能性があります。 In this case, add the following line in the HTML page to declare the encoding:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### 例題 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

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
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### 例題 2

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

4D code of `calcSum` method:

```4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
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

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. ボタンやメニューコマンドにこれらのアクションを割り当てることで、基本の Webインターフェースを素早く実装できます。 These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

## フォームイベント

特定のフォームイベントは、Webエリアをプログラミングで管理するこを目的としています。すなわち、リンクの起動に関連しています:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

更に、Webエリアは以下の汎用フォームイベントをサポートしています:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)

## Webエリアのルール

### ユーザーインターフェース

フォームが実行されると、他のフォームエリアとの対話を可能にする、標準のブラウザーインタフェース機能が Web エリア内で利用可能になります。

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.
  セキュリティ上の理由から、ファイルまたは URL のドラッグ＆ドロップによって Webエリアのコンテンツを変更することは、デフォルトで禁止されています。 In this case, the cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` statement to display a "drop" icon and generate the [`On Window Opening Denied`](Events/onWindowOpeningDenied.md) event. In this event, you can call the [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) command or set the [URL variable](properties_WebArea.md#url) in response to a user drop.

> Drag and drop features described above are not supported in web areas using the [macOS system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

### サブフォーム

ウィンドウの再描画機構に関わる理由から、サブフォームに Webエリアを挿入する場合には以下の制約がつきます:

- サブフォームをスクロール可能にしてはいけません。
- Webエリアのサイズがサブフォームのサイズを超えてはいけません。

> 他のフォームオブジェクトの上や下に Webエリアを重ねることはサポートされていません。

### Webエリアと Webサーバーのコンフリクト (Windows)

Windows においては、Webエリアから、同じ 4Dアプリケーションで起動中の Webサーバーへのアクセスはお勧めできません。これをおこなうとコンフリクトが発生し、アプリケーションがフリーズすることがあります。 もちろん、リモートの 4D から 4D Server の Webサーバーにアクセスすることはできます。自身の Webサーバーにアクセスできないということです。

### プロトコルの挿入 (macOS)

macOS 上の Webエリアで、プログラムにより処理される URL は、プロトコルで開始されていなければなりません。 つまり、"www.mysite.com" ではな、"http://www.mysite.com" 文字列を渡さなければならないということです。

## Webインスペクターへのアクセス

オフスクリーンの Webエリアや、フォームのWeb エリア内において、Webインスペクターを見たり使用したりすることができます。 Webインスペクターは、埋め込みWebエンジンによって提供されているデバッガーです。 Webページの情報の、コードとフローを解析します。

To display the Web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/>
  This command can be used directly with onscreen (form object) and offscreen web areas.

- **Use the web area context menu**<br/>
  This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - the [context menu](properties_Entry.md#context-menu) for the web area is enabled
  - インスペクターの使用が、以下の宣言を用いて明示的に有効化されている:
  ```4d
  	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
  ```

> With [Windows system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine), a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account.

For more information, refer to the description of the `WA SET PREFERENCE` command.

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. この項目を選択すると、Webインスペクターウィンドウが表示されます。

> このデバッガーの機能の詳細に関しては、Webレンダリングエンジンにより提供されているドキュメントを参照してください。

## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications.

[Default switches](#default-file) are provided, but you can override them by using a custom 4DCEFParameters.json file.

In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project.

:::warning

Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including [4D View Pro areas](../ViewPro/configuring.md#form-area-properties). It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application.

:::

The 4DCEFParameters.json file format is as the following:

```json

{
  "switches":{
     "key":value
  },
  "macOS":{
    "switches": {
     "key":value
    }
  },
  "windows": {
    "switches": {
     "key":value
    }
  }
}
```

The 4DCEFParameters.json file structure contains:

- **switches**: a list of CEF switches and their corresponding values applied for both macOS and Windows.
- **macOS.switches**: macOS-specific CEF switches.
- **windows.switches**: Windows-specific CEF switches.

The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.

:::note

The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community.

:::

### 例題

#### デフォルトファイル

The default 4DCEFParameters.json file contains the following switches:

```json
{
  "switches":{
     "enable-media-stream":true,
     "enable-print-preview":true
  },
  "macOS":{
    "switches": {
      "use-mock-keychain": true
    }
  },
  "windows": {
    "switches": {
      "disable-features": "WinUseBrowserSpellChecker"
    }
  }
}

```

#### Example of disabling default Switch

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Example for Autoplay

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

### 参照

[Specify your own parameters to initialize the embedded web area (blog post)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)
