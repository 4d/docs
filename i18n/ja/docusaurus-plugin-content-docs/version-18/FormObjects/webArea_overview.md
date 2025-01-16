---
id: webAreaOverview
title: Webエリア
---

## 概要

Webエリアは、静的および動的な HTMLページ、ファイル、ピクチャー、JavaScript などの様々な Webコンテンツをフォーム中で表示することのできるオブジェクトです。 Webエリアの描画エンジンは、アプリケーションの実行プラットフォームおよび [埋め込みWebレンダリングエンジンを使用](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) オプションの設定状態により異なります。

同じフォーム内に複数の Webエリアを配置できます。 しかしながら、Webエリアの挿入には [いくつかの制約](#webエリアのルール) がつく事に注意して下さい。

いくつかの専用の [標準アクション](#標準アクション)、多数の [ランゲージコマンド](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.ja.html)、そして汎用および専用の [フォームイベント](#フォームイベント) を使用して、Webエリアの動作を制御することができます。 特別な変数を使用して、エリアと 4D環境間で情報を交換することも可能です。
> Webエリアにおける Webプラグインおよび Javaアプレットの使用は推奨されていません。これらは、とくにイベント管理レベルにおいて 4D の動作を不安定にさせる可能性があります。

## 特有のプロパティ

### 割り当てられる変数

Webエリアには 2つの特別な変数が自動で割り当てられます:

- [`URL`](properties_WebArea.md#url) -- Webエリアに表示されている URL の管理に使用します。
- [`進捗状況変数`](properties_WebArea.md#進捗状況変数) -- Webエリアにロード中のページのパーセンテージを知るために使用します。

### Webレンダリングエンジン

Webエリアでは、[2つの描画エンジン](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) うちから使用するものを選択することができます。

"埋め込みWebレンダリングエンジンを使用" プロパティを選択している場合、"4Dメソッドコールを許可" プロパティが選択可能になります。

### 4Dメソッドコールを許可

[4Dメソッドコールを許可](properties_WebArea.md#4dメソッドコールを許可) プロパティを選択している場合、Webエリアから 4Dメソッドを呼び出すことができます。

> この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) している場合に限り、使用可能です。

### $4dオブジェクトの使用

[4Dの埋め込みWebレンダリングエンジン](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) は、$4d という JavaScriptオブジェクトをエリアに提供します。 $4dオブジェクトと "." (ドット) オブジェクト記法を使用することによって、任意の 4Dプロジェクトメソッドを呼び出すことができます。

たとえば、`HelloWorld` という 4Dメソッドを呼び出す場合には、以下の宣言を実行します:

```js
$4d.HelloWorld();
```
> JavaScript は大文字小文字を区別するため、オブジェクトの名前は $4d (dは小文字) であることに注意が必要です。

4Dメソッドへの呼び出しのシンタックスは以下のようになります:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: 4Dメソッドに対して必要なだけ引数を渡すことができます。 これらの引数は、JavaScript にサポートされている型であればどんなものでも渡せます (文字列、数値、配列、オブジェクト)。

- `function(result)`: 最後の引数として渡される関数です。 この "コールバック" 関数は、4Dメソッドが実行を終えると同時に呼び出されます。 この関数は `result` 引数を受け取ります:

- `result`: "$0" 式に返される、4Dメソッド実行の戻り値です。 戻り値は JavaScript でサポートされている型 (文字列、数値、配列、オブジェクト) のいずれかになります。 `C_OBJECT` コマンドを使用して、オブジェクトを返すことができます。

> デフォルトとして、4Dは UTF-8 文字コードで動作しています。 (アクセントが付いた文字などの) 拡張文字を含むテキストを返す場合には、Webエリアで表示されるページの文字コードが UTF-8 に宣言されていることを確認してください。文字コードが UTF-8 でない場合、文字が正しく表示されない可能性があります。 この場合、以下の 1行を HTMLページに追加して文字コードを宣言してください: <br /> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

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

Webエリアを自動で管理するために、4つの特別な自動アクション (`openBackURL`、`openForwardURL`、`refreshCurrentURL`、そして `stopLoadingURL`) を使用できます。 ボタンやメニューコマンドにこれらのアクションを割り当てることで、基本の Webインターフェースを素早く実装できます。 これらのアクションについては [標準アクション](https://doc.4d.com/4Dv18/4D/18/Standard-actions.300-4575620.ja.html) で説明しています。

## フォームイベント

特定のフォームイベントは、Webエリアをプログラミングで管理するこを目的としています。すなわち、リンクの起動に関連しています:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

更に、Webエリアは以下の汎用フォームイベントをサポートしています:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`

## Webエリアのルール

### ユーザーインターフェース

フォームが実行されると、他のフォームエリアとの対話を可能にする、標準のブラウザーインタフェース機能が Web エリア内で利用可能になります。

- **編集メニューコマンド**: Webエリアにフォーカスがあるとき、**編集** メニューコマンドを使用してコピーやペースト、すべてを選択などのアクションを選択に応じて実行できます。
- **コンテキストメニュー**: Webエリアで、システム標準の [コンテキストメニュー](properties_Entry.md#コンテキストメニュー) を使用できます。 コンテキストメニューの表示は、`WA SET PREFERENCE` コマンドを使用することで管理可能です。
- **ドラッグ＆ドロップ**: 4D のオブジェクトプロパティに基づき、ユーザーは Webエリア内で、または Webエリアと 4Dフォームオブジェクト間で、テキストやピクチャー、ドキュメントをドラッグ＆ドロップできます。 セキュリティ上の理由から、ファイルまたは URL のドラッグ＆ドロップによって Webエリアのコンテンツを変更することは、デフォルトで禁止されています。 この場合、マウスカーソルは "禁止" アイコン ![](../assets/en/FormObjects/forbidden.png) を表示します。 エリアへのファイルや URL のドロップを許可するには、`WA SET PREFERENCE` コマンドを使用して明示的にドロップを許可する必要があります。

### サブフォーム

ウィンドウの再描画機構に関わる理由から、サブフォームに Webエリアを挿入する場合には以下の制約がつきます:

- サブフォームをスクロール可能にしてはいけません。
- Webエリアのサイズがサブフォームのサイズを超えてはいけません。

> 他のフォームオブジェクトの上や下に Webエリアを重ねることはサポートされていません。

### Webエリアと Webサーバーのコンフリクト (Windows)

Windows においては、Webエリアから、同じ 4Dアプリケーションで起動中の Webサーバーへのアクセスはお勧めできません。これをおこなうとコンフリクトが発生し、アプリケーションがフリーズすることがあります。 もちろん、リモートの 4D から 4D Server の Webサーバーにアクセスすることはできます。自身の Webサーバーにアクセスできないということです。

### Webプラグインと Javaアプレット

Webエリアにおける Webプラグインおよび Javaアプレットの使用は推奨されていません。これらは、とくにイベント管理レベルにおいて 4D の動作を不安定にさせる可能性があります。

### プロトコルの挿入 (macOS)

macOS 上の Webエリアで、プログラムにより処理される URL は、プロトコルで開始されていなければなりません。 つまり、"www.mysite.com" ではな、"http://www.mysite.com" 文字列を渡さなければならないということです。

## Webインスペクターへのアクセス

フォームのWeb エリア内において、Webインスペクターを見たり使用したりすることができます。 Webインスペクターは、埋め込みWebエンジンによって提供されているデバッガーです。 Webページの情報の、コードとフローを解析します。

### Webインスペクターの表示

Webエリア内に Webインスペクターを表示するには、次の条件を満たしていなければなりません:

- エリアに対して [埋め込みWebレンダリングエンジン](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) が選択されている (Webインスペクターはこの設定でのみ利用可能です)。
- エリアに対して [コンテキストメニュー](properties_Entry.md#コンテキストメニュー) が有効化されている (インスペクターを呼び出すのにこのメニューを使用します)。
- インスペクターの使用が、以下の宣言を用いて明示的に有効化されている:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Webインスペクターの使用

上記のとおり設定を完了すると、エリア内のコンテキストメニュー内に **要素を調査** という新しいオプションが追加されているはずです: この項目を選択すると、Webインスペクターウィンドウが表示されます。

> この Webインスペクターは、埋め込みWebレンダリングエンジンに含まれています。 このデバッガーの機能の詳細に関しては、Webレンダリングエンジンにより提供されているドキュメントを参照してください。

## プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [CSSクラス](properties_Object.md#cssクラス) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [コンテキストメニュー](properties_Entry.md#コンテキストメニュー) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [メソッド](properties_Action.md#メソッド) - [進捗状況変数](properties_WebArea.md#進捗状況変数) - [URL](properties_WebArea.md#url) - [埋め込みWebレンダリングエンジンを使用](properties_WebArea.md#埋め込みwebレンダリングエンジンを使用)
