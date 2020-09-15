---
id: propertiesWebArea
title: Webエリア
---

---
## 4Dメソッドコールを許可

Webエリアで実行される JavaScripe コードから 4Dメソッドを呼び出して、戻り値を取得することができます。 4Dメソッドを Webエリアから呼び出せるようにするには、プロパティリストの "4Dメソッドコールを許可" にチェックをする必要があります。

> この機能は Webエリアが [埋め込みWebレンダリングエンジンを使用](#埋め込みWebレンダリングエンジンを使用) している場合に限り、使用可能です。

このプロパティがチェックされている場合、特別な JavaScript オブジェクト `$4d` が Webエリア内にインスタンス化され、これを使用して[4Dプロジェクトメソッドの呼び出しを管理](webArea_overview.md#4dオブジェクトの使用) できるようになります。



#### JSON 文法

| 名                    | データタイプ | とりうる値                 |
| -------------------- | ------ | --------------------- |
| methodsAccessibility | string | "none" (デフォルト), "all" |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)


---
## 進捗状況変数

倍長整数型変数の名前です。 この変数には 0 から 100 までの値が格納され、この数値は Webエリアに表示されるページのロードされたパーセンテージを表します。 この変数は 4D が自動で更新します。手動で変更することはできません。

#### JSON 文法

| 名              | データタイプ | とりうる値      |
| -------------- | ------ | ---------- |
| progressSource | string | 倍長整数型変数の名前 |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)




---
## URL

文字列型の変数で、Webエリアにロードされた URL またはロード中の URL が格納されます。 変数と Webエリア間の連携は双方向でおこなわれます。

*   ユーザーが新しい URL を変数に割り当てると、その URL は自動で Webエリアにロードされます。
*   Webエリアでブラウズされると、自動で変数の内容が更新されます。

このエリアは Webブラウザーのアドレスバーのように機能します。 Webエリアの上側にテキストエリアを置いて、内容を表示させることができます。

### URL変数と WA OPEN URL コマンド

URL変数は [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドと同じ効果をもたらします。 しかしながら、以下の違いに注意してください。
- ドキュメントにアクセスする場合、この変数は RFC準拠 ("file://c:/My%20Doc") な URL のみを受け付け、システムパス名 ("c:\MyDoc") は受け付けません。 [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドは両方の記法を受け付けます。
- URL変数が空の文字列の場合、Webエリアは URL をロードしません。 [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドはこの場合にエラーを生成します。
- URL変数がプロトコル (http, mailto, file など) を含まない場合、Webエリアは "http://" を付加します。[WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドはこれを付加しません。
- Webエリアがフォーム上で表示されていない場合 (フォームの別ページに Webエリアがある場合等)、[WA OPEN URL](https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.ja.html) コマンドを実行しても効果はありません。一方、URL変数に値を代入すると、カレントURL が更新されます。

#### JSON 文法

| 名         | データタイプ | とりうる値 |
| --------- | ------ | ----- |
| urlSource | string | URL   |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)






---
## 埋め込みWebレンダリングエンジンを使用

このオプションを使用して、Webエリアで使用する描画エンジンを 2つのうちから選択することができます:

*   **チェックなし** - `JSON値: system` (デフォルト): この場合、4Dはシステムの最適なエンジンを使用します。 On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari). This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and Web Kit ones.
*   **checked** - `JSON value: embedded`: In this case, 4D uses Blink engine from Google. Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D.

    Note that the Blink engine has the following limitations:
    *   [WA SET PAGE CONTENT](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PAGE-CONTENT.301-4310783.en.html): using this command requires that at least one page is already loaded in the area (through a call to [WA OPEN URL](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-OPEN-URL.301-4310772.en.html) or an assignment to the URL variable associated to the area).
    *   Execution of Java applets, JavaScripts and plug-ins is always enabled and cannot be disabled in Web areas in Blink. The following selectors of the [WA SET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) and [WA GET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-GET-PREFERENCE.301-4310763.en.html) commands are ignored:
        *   `WA enable Java applets`
        *   `WA enable JavaScript`
        *   `WA enable plugins`
    *   When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-OPEN-URL.301-4310772.en.html) or one assignment to the URL variable associated to the area.

#### JSON 文法

| 名         | データタイプ | とりうる値                |
| --------- | ------ | -------------------- |
| webEngine | string | "embedded", "system" |

#### 対象オブジェクト

[Webエリア](webArea_overview.md)
