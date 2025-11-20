---
id: webAreaOverview
title: Webエリア
---

Webエリアは、静的および動的な HTMLページ、ファイル、ピクチャー、JavaScript などの様々な Webコンテンツをフォーム中で表示することのできるオブジェクトです。 Web エリアのレンダリングエンジンは、アプリケーションの実行プラットフォームと選択した[レンダリングエンジンオプション](properties_WebArea.md#use-embedded-web-rendering-engine) に応じて変化します。

同じフォーム内に複数の Webエリアを配置できます。 しかしながら、Webエリアの使用には [いくつかの制約](#webエリアのルール) がつく事に注意して下さい。

いくつかの専用の[標準アクション](#標準アクション) 、多数の [ランゲージコマンド](../category/web-area)、そして汎用および専用の [フォームイベント](#フォームイベント) を使用することで、Webエリアの機能を管理することができます。 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。

:::info Qodly ページを表示する

4D クライアント/サーバーアプリケーションでは、Web エリアを使用してQodly ページを表示し、[リモートユーザーセッションを共有する](../Desktop/clientServer.md#web-エリアのqodly-ページとセッションを共有する)ことができます。 この機能を使用することで、クライアント/サーバーアプリ用のWeb ベースのインターフェースをデザインすることができます。

:::

## 特有のプロパティ

### 割り当てられる変数

Webエリアには 2つの特別な変数が自動で割り当てられます:

- [`URL`](properties_WebArea.md#url) --Web エリアが表示するURL をコントロールします。
- [`Progression`](properties_WebArea.md#progression) -- Web エリア内に表示されているページのロード率をコントロールします。

> As of 4D 19 R5, the Progression variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

### Webレンダリングエンジン

アプリケーションの使用に応じて、Web エリアでは[2つのレンダリングエンジン](properties_WebArea.md#use-embedded-web-rendering-engine) からどちらを使用するかを選択することができます。

"埋め込みWebレンダリングエンジンを使用" プロパティを選択している場合、"4Dメソッドコールを許可" プロパティが選択可能になり、また、macOS と Windows 上の動作が同様であるようにできます。 Webエリアがインターネットに接続されている場合には、最新のセキュリティアップデートの恩恵を受けられるため、システムレンダリングエンジンを選択することが推奨されます。

### 4Dメソッドコールを許可

[4Dメソッドコールを許可](properties_WebArea.md#4Dメソッドコールを許可) プロパティが選択されている場合、Web エリアから4D メソッドを呼び出すことができます。

:::note 注記

- この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](#埋め込みwebレンダリングエンジンを使用) している場合に限り、使用可能です。
- このオプションは 4Dコードの実行を許可するため、セキュリティ上の理由から、アプリケーションによって生成されたページなど、信頼できるページに対してのみ有効にするべきです。

:::

## $4d オブジェクト

[`4D 埋め込みWebレンダリングエンジン`](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) はWeb エリア内にて **`$4d` という名前のJavaScript オブジェクト** を提供します。 デフォルトで、 `$4d` はドット記法を通して全ての4D プロジェクトメソッドへのアクセスを許可します。

例えば、4D 内の `HelloWorld` メソッドを呼び出したい場合:

```js
$4d.HelloWorld();
```

> **注意:** JavaScript は **大文字と小文字を区別します**ので、オブジェクト名は **`$4d`** となります(小文字の"d" となります)。

### $4d へのアクセスの管理

[`WA SET CONTEXT`](../commands/wa-set-context.md) を使用すると、デベロッパーはWeb エリアから `$4d` を通して何が利用可能かをコントロールすることができます。 このコマンドを使用することで、フォーミュラとクラスインスタンスを通して例えば4D メソッドを宣言する**コンテキストオブジェクト**を定義することができます。

現在定義されているコンテキストをチェックするためには、[`WA Get context`](../commands/wa-get-context.md) を使用します。

詳細な情報については、[`WA SET CONTEXT`](../commands/wa-set-context.md) を参照してください。

### JavaScript から4D メソッドを呼び出す

4Dメソッドへの呼び出しのシンタックスは以下のようになります:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: 4Dメソッドに対して必要なだけ引数を渡すことができます。
  これらの引数は、JavaScript にサポートされている型であればどんなものでも渡せます (文字列、数値、配列、オブジェクト)。

- `function(result)`: 最後の引数として渡される関数です。  この "コールバック" 関数は、4Dメソッドが実行を終えると同時に呼び出されます。 この関数は `result` 引数を受け取ります。

- `result`: 4D メソッドの実行結果。 戻り値は JavaScript でサポートされている型 (文字列、数値、配列、オブジェクト) のいずれかになります。

> デフォルトとして、4Dは UTF-8 文字コードで動作しています。 (アクセントが付いた文字などの) 拡張文字を含むテキストを返す場合には、Webエリアで表示されるページの文字コードが UTF-8 に宣言されていることを確認してください。文字コードが UTF-8 でない場合、文字が正しく表示されない可能性があります。 この場合、HTML ページに以下の行を追加してエンコーディングを宣言して下さい:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### 例題 1

`today` という名の 4Dプロジェクトメソッドがあり、そのメソッドは引数を受け付けず、カレントの日付を文字列として返す場合について考えてみます。

`today` メソッドの 4Dコードです:

```4d
#DECLARE -> $result : Text
$result := String(Current date;System date long)
```

Webエリアでは、 4Dメソッドは以下のシンタックスで呼び出し可能です:

```js
$4d.today()
```

この 4Dメソッドは引数を受け取りませんが、メソッドの実行後に結果を、4Dによって呼び出されるコールバック関数へと返します。  Webエリアによってロードされた HTMLページ内にこの日付を表示します。

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

Instead of using a standalone method, we can also use a class function to handle the calculation.

Define a "SumCalculator" 4D user class with a `calcSum` function which receives parameters and returns their sum:

```4d
// SumCalculator ユーザークラス

Function calcSum(... : Real) -> $sum : Real
   // n 個の実数型引数を受け取り
   // 実数を返します
  var $i; $n : Integer
  $n := Count parameters

  For ($i; 1; $n)
    $sum += ${$i}
  End for
```

他のメソッドにおいて、インスタンスを作成し、$4d へと割り当てます

```4d
var $myCalculator := cs.SumCalculator.new()
WA SET CONTEXT OBJECT(*; "myWebArea"; $myCalculator)
```

Webエリア内で実行される JavaScript コードです:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)
    {
        var result = theSum // 結果は 262.5
    });
```

## 標準アクション

Webエリアを自動で管理するために、4つの特別な自動アクションを使用できます: `Open Back URL`、 `Open Forward URL`、 `Refresh Current URL` そして`Stop Loading URL` です。 ボタンやメニューコマンドにこれらのアクションを割り当てることで、基本の Webインターフェースを素早く実装できます。 これらのアクションは、[標準アクション](https://doc.4d.com/4Dv20/4D/20.2/Standard-actions.300-6750239.en.html) のページに詳細な説明があります。

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
- **コンテキストメニュー**: Web エリアでは、システムの標準の[コンテキストメニュー](properties_Entry.md#コンテキストメニュー) を使用することができます。  コンテキストメニューの表示は[`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) コマンドを使用することによってコントロール可能です。
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

macOS 上の Webエリアで、プログラムにより処理される URL は、プロトコルで開始されていなければなりません。 つまり、"www.mysite.com" ではな、"http://www.mysite.com" 文字列を渡さなければならないということです。

## Webインスペクターへのアクセス

オフスクリーンの Webエリアや、フォームのWeb エリア内において、Webインスペクターを見たり使用したりすることができます。 Webインスペクターは、埋め込みWebエンジンによって提供されているデバッガーです。 Webページの情報の、コードとフローを解析します。

Webインスペクターを表示させるには、`WA OPEN WEB INSPECTOR` コマンドを実行するか、 Webエリアのコンテキストメニューを使用します。

- **`WA OPEN WEB INSPECTOR` コマンドを実行する**<br/>
  このコマンドは、オンスクリーンのWeb エリア(フォームオブジェクト)とオフスクリーンのWeb エリアでも直接使用することができます。

- **Web エリアのコンテキストメニューを使用する**<br/>
  この機能はオンスクリーンのWeb エリアでのみ使用することができ、以下の条件を満たしている必要があります:
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

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [CSSクラス](properties_Object.md#cssクラス) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [コンテキストメニュー](properties_Entry.md#コンテキストメニュー) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [メソッド](properties_Action.md#メソッド)

## 4DCEFParameters.json

4DCEFParameters.json は4D アプリケーション内でのWeb エリアの振る舞いを管理するためのCEF パラメーターをカスタマイズすることができる設定ファイルです。

[デフォルトスイッチ](#デフォルトファイル) は提供されていますが、カスタムの4DCEFParameters.json ファイルを使用することでこれらをオーバーライドすることができます。

(4D アプリケーションを使用した)開発フェーズにおいては、以下の場所に4DCEFParameters.json ファイルを作成してください:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

そして最終アプリケーションをビルドする前に、カスタムの4DCEFParameters.json ファイルを、プロジェクトのResources ファイルに追加してください。

:::warning

カスタムの4DCEFParameters.json ファイルを追加することは、[4D View Pro エリア](../ViewPro/configuring.md#フォームエリアプロパティ) を含め、基本的に4D の全ての埋め込みWeb エリアに影響し得ます。 このカスタムのスイッチが4D アプリケーションを不安定にしないようにするのは開発者の責任です。

:::

4DCEFParameters.json ファイルのフォーマットは以下のようになっています:

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

4DCEFParameters.json ファイルのストラクチャーには以下のものが含まれます:

- **switches**: macOS とWindows の両OS において適用されるCEF スイッチとそれに対応する値の一覧。
- **macOS.switches**: macOS 専用のCEF スイッチ。
- **windows.switches**: Windows 専用のCEF スイッチ。

カスタムファイル内のスイッチが優先されます。 カスタムファイル内のスイッチが優先されます。 同一ファイル内においてスイッチが重複して定義されていた場合、プラットフォーム固有のサブセクション内 ("macOS.switches" or "windows.switches")で定義されているスイッチが優先され、設定として使用されます。

:::note

サポートされているスイッチの一覧は常に進化しており、CEF 開発チームによって管理されています。  利用可能なスイッチ一覧については、CEF デベロッパーコミュニティを参照する必要があります。

:::

### 例題

#### デフォルトファイル

デフォルトの4DCEFParameters.json ファイルには以下のスイッチが格納されています:

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

#### デフォルトのスイッチを無効化する例題

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Autoplay の例題

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

:::info 関連したblog 記事

[Custom Parameters for Initializing Embedded Web Area](https://blog.4d.com/custom-parameters-for-initializing-embedded-web-area/)

:::




