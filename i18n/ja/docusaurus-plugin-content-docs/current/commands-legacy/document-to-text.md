---
id: document-to-text
title: Document to text
slug: /commands/document-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Document to text.Syntax-->**Document to text** ( *fileName* {; *charSet* {; *breakMode*}} ) : Text<!-- END REF-->
<!--REF #_command_.Document to text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | ドキュメント名またはドキュメントへのパス名 |
| charSet | Text, Integer | &#8594;  | 文字コード名の名前または数字 |
| breakMode | Integer | &#8594;  | 改行の処理モード |
| 戻り値 | Text | &#8592; | ドキュメントから取得したテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Document to text.Summary-->**Document to text**コマンドは、ディスク上のファイルの中身を、4Dのテキスト変数またはテキストフィールドへと直接取り出すことができます。<!-- END REF-->

*fileName* 引数には、読みだしたいファイル名またはパス名を渡します。ファイルはディスク上に存在している必要があり、そうでない場合にはエラーが生成されます。渡せるものは以下の通りです:

* ファイル名のみ。例えば "myFile.txt" など。この場合、ファイルはアプリケーションのストラクチャーファイルの隣にある必要があります。
* アプリケーションのストラクチャファイルからの相対パス。例えばWindowsでは "\\\\docs\\\\myFile.txt" またはmacOS では ":docs:myFile.txt"
* 絶対パス。例えばWindowsでは "c:\\\\app\\\\docs\\\\myFile.txt" またはmacOS では "MacHD:docs:myFile.txt"

*charSet* 引数には、ファイルの中身を読みだす際の文字コードを渡します。標準の文字コード名(例えば“ISO-8859-1” や “UTF-8”)を渡す事もできますし、文字コードの MIBEnum ID (倍長整数)を渡す事もできます。4Dによってサポートされている文字コードの一覧の詳細な情報に関しては、[CONVERT FROM TEXT](convert-from-text.md) コマンドの詳細を参照して下さい。

ドキュメントがバイトオーダーマーク(BOM)を含んでいる場合、4Dは*charSet* 引数で指定された文字コードのかわりにバイトオーダーマークが指定した文字コードを使用します(つまり、この引数は無視されます)。

ドキュメントがBOMを含まず、 *charSet*  set引数が省略されていた場合、4Dはデフォルトで以下の文字コードを使用します。

* Windows: ANSI
* OS X: MacRoman

*breakMode* 引数には、ドキュメントの改行文字の処理を指示する倍長整数を渡します。 "*System Documents*"テーマ内にある、以下の定数のどれかを渡すことが出きます。

| 定数                          | 型    | 値 | コメント                                                                                                 |
| --------------------------- | ---- | - | ---------------------------------------------------------------------------------------------------- |
| Document unchanged          | 倍長整数 | 0 | 何も処理をしません。                                                                                           |
| Document with CR            | 倍長整数 | 3 | 改行はクラシックmacOS のデフォルトのフォーマットであるCR (キャリッジリターン)へと変換されます。                                                |
| Document with CRLF          | 倍長整数 | 2 | 改行はデフォルトのWindows フォーマットであるCRLF (キャリッジリターン＋ラインフィード)へと変換されます。                                          |
| Document with LF            | 倍長整数 | 4 | 改行はUnixおよびmacOS のデフォルトのフォーマットであるLF (ラインフィード)へと変換されます。                                                |
| Document with native format | 倍長整数 | 1 | (デフォルト)改行はOSのネイティブフォーマットに変換されます。macOS 環境下ではLF(ラインフィード)に、Windows 環境下ではCRLF(キャリッジリターン+ラインフィード)に変換されます。 |

デフォルトでは、 *breakMode* 引数を省略した場合、改行はネイティブモード(1)にて処理されます。

**互換性に関する注意**: EOL とBOM 管理に関する互換性オプションが利用可能です。*互換性ページ* を参照して下さい。

**注:** このコマンドはOK変数を変更しません。失敗した場合には [ON ERR CALL](on-err-call.md) コマンドによって実装されたメソッドを使用することによって割り込み可能なエラーが生成されます。

#### 例題 

以下のテキストドキュメントが与えられている場合を考えます(フィールドはtabによって分けられています)。

```RAW
id    name    price    vat3    4D Tags    99    19.6
```

以下のコードを実行すると、  

```4d
 $Text:=Document to text("products.txt")
```

... 次のような結果が得られます。

```4d
  // $Text = "id\tname\tprice\tvat\r\n3\t4D Tags\t99 \t19.6"
  // \t = tab
  // \r = CR
```

#### 参照 

*System Documents*  
[TEXT TO DOCUMENT](text-to-document.md)  