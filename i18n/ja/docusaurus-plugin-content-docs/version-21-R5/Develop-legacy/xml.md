---
id: xml
title: XML 処理
slug: /Develop/XML
displayed_sidebar: docs
---


## XML コマンドの概要

### XML、DOM、および SAX

[**XML テーマ**](../commands/theme/XML.md) は、4D の汎用的な XML「ユーティリティ」コマンドをまとめたものです。これらはオプション管理およびエラー管理のコマンドです。

4D はさらに、2 つの別々の XML コマンドセットを提供しています：[**DOM**](../commands/theme/XML_DOM.md)（Document Object Model）と [**SAX**](../commands/theme/XML_SAX.md)（Simple API XML）は、XML ドキュメントに対する 2 つの異なる解析モードです。

- DOM モードは、XML ソースを解析し、その構造（その「ツリー」）をメモリ内に構築します。このため、ソースの各要素へのアクセスは極めて高速です。ただし、ツリー構造全体がメモリ内に格納されるため、大きな XML ドキュメントの処理はメモリ容量の超過につながり、エラーを引き起こす可能性があります。
- SAX モードは、メモリ内にツリー構造を構築しません。このモードでは、ソースの解析時に「イベント」（要素の開始や終了など）が生成されます。このモードでは、利用可能なメモリ量に関係なく、あらゆるサイズの XML ドキュメントを解析できます。

### 参考資料

http://www.saxproject.org/?selected=event <br/>
http://www.w3schools.com/xml/

:::note

XML のサポートのために、4D は Apache Foundation 社によって開発された [Xerces.dll ライブラリ](../Notes/updates.md#library-table) を使用しています。

:::


### プリエンプティブモード

[プリエンプティブプロセス](../Develop/preemptive.md) によって作成された XML 参照は、その特定のプロセス内でのみ使用できます。逆に、協調的プロセスによって作成された XML 参照は、他の任意の協調的プロセスで使用できますが、いかなるプリエンプティブプロセスでも使用できません。


### 文字セット

4D の XML DOM および XML SAX コマンドでは、次の文字セットがサポートされています：

- ASCII
- UTF-8
- UTF-16（ビッグ/スモールエンディアン）
- UCS4（ビッグ/スモールエンディアン）
- EBCDIC コードページ IBM037、IBM1047、IBM1140 エンコーディング、
- ISO-8859-1（または Latin1）
- Windows-1252。


### 用語集

この非網羅的なリストは、4D のコマンドおよび関数で使用される主な XML 概念を詳述しています。

- **属性（Attribute）**：要素に関連付けられた XML サブタグ。属性は常に名前と値を含みます。
- **子（Child）**：XML 構造において、別の要素の直下のレベルにある要素。
- **DTD**：*Document Type Declaration*。DTD は、XML が従わなければならない特定のルールとプロパティのセットを記録します。これらのルールは、より具体的には、各タグの名前と内容、およびそのコンテキストを定義します。この要素の形式化は、XML ドキュメントが準拠しているかどうかをチェックするために使用できます（準拠している場合、「有効（valid）」と宣言されます）。DTD は XML ドキュメント内（内部 DTD）または別のドキュメント内（外部 DTD）に含めることができます。DTD は必須ではないことに注意してください。
- **要素（Element）**：XML タグ。要素は常に名前と値を含みます。オプションで、要素は属性を含むことができます。
- **ElementRef**：XML 構造を指定するために 4D の XML コマンドで使用される XML 参照。この参照は 16 進数形式でコード化された 8 文字で構成されており、64 ビットシステムではその長さは 32 文字になります。XML 参照はテキストとして宣言することが推奨されます。
- **親（Parent）**：XML 構造において、別の要素の直上のレベルにある要素。
- **解析（Parsing）、パーサー（parser）**：構造化オブジェクトの内容を解析して有用な情報を抽出する行為。
- **ルート（Root）**：XML 構造の第 1 レベルに位置する要素。
- **兄弟（Sibling）**：別の要素と同じレベルにある要素。
- **構造（Structure）**：構造化された XML オブジェクト。このオブジェクトは、ドキュメント、変数、または要素にできます。
- **検証（Validation）**：XML ドキュメントは、「整形式（well-formed）」であり DTD 仕様に準拠している場合に、パーサーによって「検証済み」となります。
- **整形式（Well-formed）**：XML ドキュメントは、汎用的な XML 仕様に準拠している場合に、パーサーによって「整形式」と宣言されます。
- **XML**：eXtensible Markup Language。データおよびその構造の転送を可能にするコンピューター化されたデータ交換標準。XML 言語は、HTML 言語と同様に、タグと特定の構文の使用に基づいています。ただし、後者とは異なり、XML 言語ではカスタマイズされたタグの定義が可能です。
- **XSL**：eXtensible Stylesheet Language。XSL ドキュメントの内容を処理して表示するために使用されるスタイルシートの定義を可能にする言語。


## XML DOM コマンド

### DOM 経由での XML ドキュメントの作成、オープン、クローズ

[4D の XML DOM コマンド](../commands/theme/XML_DOM.md) によって作成、変更、または解析されるオブジェクトは、テキスト、URL、ドキュメント、または BLOB にできます。4D で XML オブジェクトを開くために使用される DOM コマンドは、[`DOM Parse XML source`](../commands/dom-parse-xml-source) および [`DOM Parse XML variable`](../commands/dom-parse-xml-variable) です。

その後、多くのコマンドを使用して要素と属性を読み取り、解析し、書き込むことができます。エラーは [`XML GET ERROR`](../commands/xml-get-error) コマンドを使用して回復されます。最後にソースを閉じるために [`DOM CLOSE XML`](../commands/dom-close-xml) コマンドを呼び出すことを忘れないでください。

XML BLOB パラメーターの使用に関する注記：歴史的な理由から、[`DOM Parse XML variable`](../commands/dom-parse-xml-variable) などの XML コマンドは BLOB 型のパラメーターを受け付けます。ただし、XML 構造はテキストとして格納することを強く推奨します。BLOB の使用はバイナリデータの処理のために予約されています。XML 仕様に従い、BLOB がテキストを含む場合でも、バイナリデータは自動的に Base64 でエンコードされます。


### XPath 記法のサポート

いくつかの XML DOM コマンド（[`DOM Create XML element`](../commands/dom-create-xml-element)、[`DOM Find XML element`](../commands/dom-find-xml-element)、[`DOM Create XML element arrays`](../commands/dom-create-xml-element-arrays)、[`DOM SET XML ELEMENT VALUE`](../commands/dom-set-xml-element-value)）は、XML 要素にアクセスするための一部の XPath 式をサポートしています。

XPath 記法は、XML 構造内をナビゲートするために設計された XPath 言語に由来します。これにより、要素に到達するために完全なパス名を指定する必要が必ずしもなく、「パス名」型の構文を介して XML 構造内で要素を直接指定できます。

たとえば、次の構造が与えられたとします：

```xml
   <RootElement>
      <Elem1>
         <Elem2>
            <Elem3 Font=Verdana Size=10> </Elem3>
         </Elem2>
      </Elem1>
   </RootElement>
```

XPath 記法を使用すると、*/RootElement/Elem1/Elem2/Elem3* 構文を使用して要素 3 にアクセスできます。

4D は、*Element[ElementNum]* 構文を使用したインデックス付き XPath 要素も受け付けます。たとえば、次の構造が与えられたとします：

```xml
   <RootElement>
      <Elem1>
         <Elem2>aaa</Elem2>
         <Elem2>bbb</Elem2>
         <Elem2>ccc</Elem2>
      </Elem1>
   </RootElement>
```

XPath 記法を使用すると、*/RootElement/Elem1/Elem2[3]* 構文を使用して "ccc" 値にアクセスできます。

サポートされている XPath 式の包括的なリストについては、[`DOM Find XML element`](../commands/dom-find-xml-element) コマンドの説明を参照してください。

:::note 互換性

4D 18 R3 以降、XPath の実装は、より準拠性を高め、より広範な式のセットをサポートするように変更されました。変換されたデータベースで拡張機能を利用したい場合は、[互換性ページ](../settings/compatibility.md) の **標準 XPath を使用** オプションを選択する必要があります。

:::

### エラー処理

このテーマの多くの関数は XML 要素参照を返します。関数の実行中にエラーが発生した場合（たとえば、ルート要素参照が有効でない場合）、*OK* 変数は 0 に設定され、エラーが生成されます。

さらに、この場合に返される参照は、32 個のゼロ "0" 文字のシーケンスです。


## XML SAX コマンド

### SAX 経由での XML ドキュメントの作成、オープン、クローズ

[XML SAX コマンド](../commands/theme/XML_SAX.md) は、4D の標準ドキュメント参照（**DocRef**、時間型の参照）で動作します。したがって、これらのコマンドは、[`SEND PACKET`](../commands/send-packet) や [`Append document`](../commands/append-document) など、ドキュメントを管理するために使用される 4D コマンドと組み合わせて使用できます。

プログラミングによる XML ドキュメントの作成とオープンは、[`Create document`](../commands/create-document) および [`Open document`](../commands/open-document) コマンドを使用しておこなわれます。その後、これらのドキュメントで XML コマンドを使用すると、エンコーディングなどの XML メカニズムが自動的に有効化されます。たとえば、`<?xml version="1.0" encoding="… エンコーディング …" standalone = "no "?>` ヘッダーがドキュメントに自動的に書き込まれます。

:::note

SAX コマンドで読み取られるドキュメントは、[`Open document`](../commands/open-document) コマンドによって読み取り専用モードで開く必要があります。これにより、「通常の」ドキュメントと XML ドキュメントを同時に開くときに、4D と Xerces ライブラリの間の競合を回避できます。読み書きモードで開いているドキュメントに対して SAX 解析コマンドを実行すると、警告メッセージが表示され、解析は不可能になります。

:::

XML ドキュメントのクローズは、[`CLOSE DOCUMENT`](../commands/close-document) コマンドを使用しておこなう必要があります。XML 要素が開いていた場合、それらは自動的に閉じられます。

### 行末文字と BOM 管理について

SAX ドキュメントを書き込む際、4D は行末文字と BOM（バイトオーダーマスク）の使用について、次のデフォルト設定を使用します：

- 行末文字として、Windows では CRLF 文字、macOS では LF 文字
- ファイルは BOM なしで書き込まれます。

:::note 互換性

4D バージョン 19.x までで作成されたプロジェクトでは、デフォルトで 4D は SAX に対して macOS 上の行末文字として CRLF を使用し、BOM を使用します。[`XML SET OPTIONS`](../commands/xml-set-options) コマンドと [互換性設定](../settings/compatibility.md) を使用して、`XML line ending` および `XML BOM` の管理を制御できます。重要：SAX ファイルの行は各ステートメントで直接書き込まれるため、BOM および/または行末オプションを設定する必要がある場合は、最初の SAX 書き込みコマンドの前に [`XML SET OPTIONS`](../commands/xml-set-options) コマンドを呼び出す必要があります。

:::
