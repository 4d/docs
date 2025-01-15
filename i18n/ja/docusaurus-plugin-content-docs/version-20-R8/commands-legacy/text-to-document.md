---
id: text-to-document
title: TEXT TO DOCUMENT
slug: /commands/text-to-document
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO DOCUMENT.Syntax-->**TEXT TO DOCUMENT** ( *fileName* ; *text* {; *charSet* {; *breakMode*}} )<!-- END REF-->
<!--REF #_command_.TEXT TO DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | ドキュメント名またはドキュメントへのパス名 |
| text | Text | &#8594;  | ドキュメントに保存するテキスト |
| charSet | Text, Integer | &#8594;  | 文字コードの名前または数字 |
| breakMode | Integer | &#8594;  | 改行の処理モード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.TEXT TO DOCUMENT.Summary-->**TEXT TO DOCUMENT**コマンドは、 *text* を直接ディスク上のファイルへと書き込みます。<!-- END REF-->引数には書き込みたいファイルへのパス名を渡します。ファイルが存在しない場合には新たに作成されます。このファイルが既にディスク上に存在する場合、以前の内容は消去されます。ただし既に開かれていた場合にはその中身はロックされエラーが静背されます。*fileName* に渡せるものは以下の通りです:

* ファイル名のみ。例えば "myFile.txt" など。この場合、ファイルはアプリケーションのストラクチャーファイルの隣にある必要があります。
* アプリケーションのストラクチャファイルからの相対パス。例えばWindowsでは "\\\\docs\\\\myFile.txt" またはmacOS では ":docs:myFile.txt"
* 絶対パス。例えばWindowsでは "c:\\\\app\\\\docs\\\\myFile.txt" またはmacOS では "MacHD:docs:myFile.txt"

ユーザーにドキュメントの名前や場所を指定することを可能にしたい場合は、 [Open document](open-document.md) コマンドまたは [Create document](create-document.md) コマンドに加え、 *Document* システム変数を使用して下さい。

**Note:** デフォルトでは、このコマンドによって生成されたドキュメントは拡張子を持ちません。拡張子は *fileName* 内に含める必要があります。 *\_o\_SET DOCUMENT TYPE*コマンドを使用することもできます。

*text* 引数には、ディスクに書き込みたいテキストを渡します。文字の定数("my text")を渡す事もできますし、4D テキストフィールドまたは変数を渡す事もできます。

*charSet* 引数には、ドキュメントに書き込む際の文字コードを渡します。標準の文字コード名(例えば“ISO-8859-1” や “UTF-8”)を渡す事もできますし、文字コードの MIBEnum ID (倍長整数)を渡す事もできます。4Dによってサポートされている文字コードの一覧の詳細な情報に関しては、[CONVERT FROM TEXT](convert-from-text.md) コマンドの詳細を参照して下さい。文字コードに対してバイトオーダーマーク(BOM)が存在している場合、使用されている文字コードが接頭辞"-no-bom" を使用している場合(例:"UTF-8-no-bom")を除き、4Dはそれをドキュメント内に挿入します。文字コードを何も指定しなかった場合、4D はデフォルトでBOM なしの"UTF-8" 文字コードを使用します(ただし互換性モードを除く、*互換性ページ* 参照)。

*charSet* 引数で指定された文字コードのかわりにバイトオーダーマークが指定した文字コードを使用します(つまり、この引数は無視されます)。文字コードを指定しなかった場合、4Dはデフォルトで "UTF\_8"文字コードをBOMとともに使用します。

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

**Note:** このコマンドはOK変数を変更しません。失敗した場合には [ON ERR CALL](on-err-call.md) コマンドによって実装されたメソッドを使用することによって割り込み可能なエラーが生成されます。

#### 例題 1 

このコマンドの典型的な使用例:

```4d
 TEXT TO DOCUMENT("myTest.txt";"This is a test")
 TEXT TO DOCUMENT("myTest.xml";"This is a test")
```

#### 例題 2 

ユーザーがファイルを作成する場所を指示できる例:

```4d
 $MyTextVar:="This is a test"
 ON ERR CALL("IO ERROR HANDLER")
 $vhDocRef :=Create document("")
  // ドキュメントを ".txt" 拡張子で保存
  // この場合、 .txt拡張子は必ずファイル名に追加され、変更することはできません。
 If(OK=1) // ドキュメントが正常に作成された場合、
    CLOSE DOCUMENT($vhDocRef) //ドキュメントを閉じる
    TEXT TO DOCUMENT(Document;$MyTextVar )
  // ドキュメントに書き込みが行われます
 Else
  // エラー管理
 End ifi
```

#### 参照 

[Document to text](document-to-text.md)  
*System Documents*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1237 |
| スレッドセーフである | &check; |


