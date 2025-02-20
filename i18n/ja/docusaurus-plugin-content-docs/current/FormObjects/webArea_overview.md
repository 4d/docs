---
id: webAreaOverview
title: Webエリア
---

Webエリアは、静的および動的な HTMLページ、ファイル、ピクチャー、JavaScript などの様々な Webコンテンツをフォーム中で表示することのできるオブジェクトです。 Web エリアのレンダリングエンジンは、アプリケーションの実行プラットフォームと選択した[レンダリングエンジンオプション](properties_WebArea.md#use-embedded-web-rendering-engine) に応じて変化します。

同じフォーム内に複数の Webエリアを配置できます。 しかしながら、Webエリアの使用には [いくつかの制約](#webエリアのルール) がつく事に注意して下さい。

いくつかの専用の[標準アクション](#標準アクション) 、多数の [ランゲージコマンド](../category/web-area)、そして汎用および専用の[フォームイベント](#フォームイベント) を使用することで、Webエリアの機能を管理することができます。 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。

## 特有のプロパティ

### 割り当てられる変数

Webエリアには 2つの特別な変数が自動で割り当てられます:

- [`URL`](properties_WebArea.md#url) --Web エリアが表示するURL をコントロールします。
- [`Progression`](properties_WebArea.md#progression) -- Web エリア内に表示されているページのロード率をコントロールします。

> 4D v19 R5 以降、Progression 変数は、[Windows のシステムレンダリングエンジン](./webArea_overview.md#Webレンダリングエンジン) を使用しているWeb エリアにおいては更新されなくなりました。

### Webレンダリングエンジン

アプリケーションの使用に応じて、Web エリアでは[2つのレンダリングエンジン](properties_WebArea.md#use-embedded-web-rendering-engine) からどちらを使用するかを選択することができます。

"埋め込みWebレンダリングエンジンを使用" プロパティを選択している場合、"4Dメソッドコールを許可" プロパティが選択可能になり、また、macOS と Windows 上の動作が同様であるようにできます。 Webエリアがインターネットに接続されている場合には、最新のセキュリティアップデートの恩恵を受けられるため、システムレンダリングエンジンを選択することが推奨されます。

### 4Dメソッドコールを許可

[4Dメソッドコールを許可](properties_WebArea.md#4Dメソッドコールを許可) プロパティが選択されている場合、Web エリアから4D メソッドを呼び出すことができます。

:::note 注記

- この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](#埋め込みwebレンダリングエンジンを使用) している場合に限り、使用可能です。
- このオプションは 4Dコードの実行を許可するため、セキュリティ上の理由から、アプリケーションによって生成されたページなど、信頼できるページに対してのみ有効にするべきです。

:::

### $4dオブジェクトの使用

[4D の埋め込みWebレンダリングエンジン](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) は、 $4d という JavaScriptオブジェクトをエリアに提供します。 $4dオブジェクトと "." (ドット) オブジェクト記法を使用することによって、任意の 4Dプロジェクトメソッドを呼び出すことができます。

たとえば、`HelloWorld` という 4Dメソッドを呼び出す場合には、以下の宣言を実行します:

```js
$4d.HelloWorld();
```

> JavaScript は大文字小文字を区別するため、オブジェクトの名前は **$4d** (dは小文字) であることに注意が必要です。

4Dメソッドへの呼び出しのシンタックスは以下のようになります:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: 4Dメソッドに対して必要なだけ引数を渡すことができます。
  これらの引数は、JavaScript にサポートされている型であればどんなものでも渡せます (文字列、数値、配列、オブジェクト)。

- `function(result)`: 最後の引数として渡される関数です。 この "コールバック" 関数は、4Dメソッドが実行を終えると同時に呼び出されます。 この関数は `result` 引数を受け取ります。

- `result`: 4D メソッドの実行結果。 戻り値は JavaScript でサポートされている型 (文字列、数値、配列、オブジェクト) のいずれかになります。

> デフォルトとして、4Dは UTF-8 文字コードで動作しています。 (アクセントが付いた文字などの) 拡張文字を含むテキストを返す場合には、Webエリアで表示されるページの文字コードが UTF-8 に宣言されていることを確認してください。文字コードが UTF-8 でない場合、文字が正しく表示されない可能性があります。 この場合、HTML ページに以下の行を追加してエンコーディングを宣言して下さい:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### 例題 1

`today` という名の 4Dプロジェクトメソッドがあり、そのメソッドは引数を受け付けず、カレントの日付を文字列として返す場合について考えてみます。

`today` メソッドの 4Dコードです:

```4d
 #DECLARE : Text
 return String(Current date;System date long)
```

Webエリアでは、 4Dメソッドは以下のシンタックスで呼び出し可能です:

```js
$4d.today()
```

この 4Dメソッドは引数を受け取りませんが、メソッドの実行後に結果を、4Dによって呼び出されるコールバック関数へと返します。 Webエリアによってロードされた HTMLページ内にこの日付を表示します。

HTMLページのコードです:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(result)
{
    var curDate = result;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### 例題 2

`calcSum` という 4Dプロジェクトメソッドがあり、そのメソッドが引数を受け取り、その合計を返すという場合について考えます:

`calcSum` メソッドの4Dコード:

```4d
 #DECLARE (... : Real) -> $sum : Real 
  // 不定数の実数型の引数を受け取り
  // 実数の結果を返します
 var $i; $n : Integer
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

Webエリア内で実行される JavaScript コードです:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)
    {
        var result = theSum // 結果は 262.5
    });
```

## 標準アクション

Webエリアを自動で管理するために、4つの特別な自動アクションを使用できます: `Open Back URL`、 `Open Forward URL`、 `Refresh Current URL` そして `Stop Loading URL` です。 ボタンやメニューコマンドにこれらのアクションを割り当てることで、基本の Webインターフェースを素早く実装できます。 これらのアクションは、[標準アクション](https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html) のページに詳細な説明があります。

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

- **編集メニューコマンド**: Webエリアにフォーカスがあるとき、**編集** メニューコマンドを使用してコピーやペースト、すべてを選択などのアクションを選択に応じて実行できます。
- **コンテキストメニュー**: Web エリアでは、システムの標準の[コンテキストメニュー](properties_Entry.md#コンテキストメニュー) を使用することができます。 コンテキストメニューの表示は[`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) コマンドを使用することによってコントロール可能です。
- **ドラッグ＆ドロップ**: 4D のオブジェクトプロパティに基づき、ユーザーは Webエリア内で、または Webエリアと 4Dフォームオブジェクト間で、テキストやピクチャー、ドキュメントをドラッグ＆ドロップできます。
  セキュリティ上の理由から、ファイルまたは URL のドラッグ＆ドロップによって Webエリアのコンテンツを変更することは、デフォルトで禁止されています。 この場合、カーソルは"禁止"アイコン![](../assets/en/FormObjects/forbidden.png) を表示します。 "ドロップ" アイコンを表示し、[`On Window Opening Denied`](Events/onWindowOpeningDenied.md) イベントを発生させるには、`WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` 文を使う必要があります。 このイベントにおいては、[`WA OPEN URL`](../commands-legacy/wa-open-url.md) コマンドを呼び出すか、または[URL 変数](properties_WebArea.md#url) を設定することでユーザードロップに対応することができます。

> 上記のドラッグ&ドロップ機能は[macOS のシステムレンダリングエンジン](properties_WebArea.md#use-embedded-web-rendering-engine) を使用したWeb エリアではサポートされていません。

### サブフォーム

ウィンドウの再描画機構に関わる理由から、サブフォームに Webエリアを挿入する場合には以下の制約がつきます:

- サブフォームをスクロール可能にしてはいけません。
- Webエリアのサイズがサブフォームのサイズを超えてはいけません。

> 他のフォームオブジェクトの上や下に Webエリアを重ねることはサポートされていません。

### Webエリアと Webサーバーのコンフリクト (Windows)

Windows においては、Webエリアから、同じ 4Dアプリケーションで起動中の Webサーバーへのアクセスはお勧めできません。これをおこなうとコンフリクトが発生し、アプリケーションがフリーズすることがあります。 もちろん、リモートの 4D から 4D Server の Webサーバーにアクセスすることはできます。自身の Webサーバーにアクセスできないということです。

### プロトコルの挿入 (macOS)

macOS 上の Webエリアで、プログラムにより処理される URL は、プロトコルで開始されていなければなりません。 つまり、"www.mysite.com" ではなく、"http://www.mysite.com" 文字列を渡さなければならないということです。

## Webインスペクターへのアクセス

オフスクリーンの Webエリアや、フォームのWeb エリア内において、Webインスペクターを見たり使用したりすることができます。 Webインスペクターは、埋め込みWebエンジンによって提供されているデバッガーです。 Webページの情報の、コードとフローを解析します。

Webインスペクターを表示させるには、`WA OPEN WEB INSPECTOR` コマンドを実行するか、 Webエリアのコンテキストメニューを使用します。

- **`WA OPEN WEB INSPECTOR` コマンドを実行する**<br/>
  このコマンドは、オンスクリーンのWeb エリア(フォームオブジェクト)とオフスクリーンのWeb エリアでも直接使用することができます。

- **Web エリアのコンテキストメニューを使用する**<br/>
  この機能はオンスクリーンのWeb エリアでのみ使用することができ、以下の条件を見たいしてる必要があります:
  - Web エリアにおいて[コンテキストメニュー](properties_Entry.md#コンテキストメニュー) が有効化されている
  - インスペクターの使用が、以下の宣言を用いて明示的に有効化されている:
  ```4d
  	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
  ```

> [Windows のシステムレンダリングエンジン](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) の場合にこの環境設定を変更すると、変更を反映するのにエリア内でのナビゲーション操作 (たとえば、ページの更新など) が必要です。

より詳細な情報については、[`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) コマンドの説明を参照して下さい。

上記のとおり設定を完了すると、エリア内のコンテキストメニュー内に **要素を調査** という新しいオプションが追加されているはずです: この項目を選択すると、Webインスペクターウィンドウが表示されます。

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
