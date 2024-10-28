---
id: advanced-programming
title: Javascript による高度なプログラミング
---

4D View Pro エリアは、[埋め込みWebレンダリングエンジン](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) を使用する [Webエリアフォームオブジェクト](../FormObjects/webArea_overview.md) です。 つまり、他のWebエリアと同様に、[`WA Evaluate Javascript`](https://doc.4d.com/4dv20/help/command/ja/page1029.html) 4Dコマンドを呼び出すことで、Javascript のコードを実行させることができます。

4D View Proは [SpreadJS スプレッドシートソリューション](https://developer.mescius.com/spreadjs) に基づいて動作するため、4D View Pro エリア内で SpreadJS の Javascriptメソッドを呼び出すことも可能です。

## 例題: リボンを非表示にする

4D View Pro は Webエリアであるため、Webページ要素を選択し、Javascript を使ってその動作を変更することができます。 以下の例では、spreadJS の [リボン](./configuring.md#リボン) を非表示にしています:

```4d
// ボタンのオブジェクトメソッド

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## SpreadJS の Javascriptメソッドの呼び出し

Javascript メソッドの SpreadJSライブラリを利用し、これらを直接呼び出してスプレッドシートを制御することができます。

4D は、4D View Pro エリア内のスプレッドシート (ワークブックとも呼ばれます) を指すビルトインの `Utils.spread` 式を提供しており、これを使うことでより簡単に SpreadJS の [Workbookメソッド](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Workbook) を呼び出すことができます。

#### 例題

次のコードは、スプレッドシートでの最後のアクションを元に戻します:

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## 4D View Pro Tips のリポジトリ

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) は GitHub のリポジトリで、フローティングピクチャーの管理、列や行のソート、カスタムカルチャの作成など、便利な機能を満載したプロジェクトが含まれています。 このリポジトリを自由にクローンして、プロジェクトで実験してください。
