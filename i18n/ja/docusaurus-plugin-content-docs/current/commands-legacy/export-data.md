---
id: export-data
title: EXPORT DATA
slug: /commands/export-data
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT DATA.Syntax-->**EXPORT DATA** ( *fileName* {; *project* {; *}} )<!-- END REF-->
<!--REF #_command_.EXPORT DATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | エクスポートファイルのフルパス名 |
| project | Text, Blob | &#8594;  | エクスポートプロジェクト |
| &#8592; | エクスポートプロジェクトの新しい内容 (*引数指定時) |
| * | 演算子 | &#8594;  | エクスポートダイアログを表示し プロジェクトの内容を更新 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.EXPORT DATA.Summary-->**EXPORT DATA**コマンドは、データを*fileName*ファイルに書き出します。<!-- END REF-->4Dからは以下のフォーマットでデータの書き出しを行えます: テキスト、固定長テキスト、XML、SYLK、DIF、DBF（dBase）および4Dフォーマット

*fileName*に空の文字列を渡すと、**EXPORT DATA**は標準のファイルを保存ダイアログボックスを表示して、書き出すファイルの名前、タイプおよび場所をユーザーが指定できるようにします。ダイアログボックスが受け入れられると、Documentシステム変数にファイルパスがセットされます。ユーザが**キャンセル**をクリックすると、コマンドの実行は停止されて、システム変数OKは0になります。

オプション引数*project*を使用すると、データ書き出しにプロジェクトを使用できます。この引数を渡すと、書き出しはユーザーの操作を経ることなく直接行われます (後述の *\** 引数を指定しない限り)。 この引数を渡さないと、書き出しダイアログボックスが表示されます。ユーザーは書き出しパラメターを指定するか、既存の書き出しプロジェクトをロードできます。

書き出しプロジェクトには、書き出しテーブルやフィールド、区切り符号のような書き出しに関するすべてのパラメターが含まれています。*project*引 数にはXMLで記述されたテキスト変数、定義済みのDOM要素への参照を格納したテキスト変数、またはBLOBのいずれかを渡せます。プロジェクトはプロ グラム (XMLフォーマットのプロジェクトのみ)、または書き出しダイアログボックスで事前に定義済みのパラメターをロードすることで作成できます。後者の場 合、2つの方法を利用できます:

* 空のプロジェクト引数およびオプションの *\** 付きで**EXPORT DATA**コマンドを使用し、ダイアログでの設定内容を*project*引数に受け取って、それをテキストまたはBLOBフィールドに格納します (後述)。この方法ではプロジェクトをデータファイルに保存できます。
* プロジェクトをディスクに保存し、[DOM Parse XML source](dom-parse-xml-source.md)コマンド等を使用してロードします。そしてその参照を*project*引数に渡します。

**互換性に関する注意:** 4D v12より、読み込みプロジェクトはXMLにエンコードされるようになりました。4Dは以前のバージョンで作成された書き出しプロジェクト (BLOB形式) を開くことができます。しかし4D v12以降で作成されたプロジェクトをv11以前で開くことはできません。書き出しファイルを扱う際は、以降テキスト変数を使用することをお勧めします。

オプションの引数 *\** が指定されていれば、*project*に定義されたパラメターと共にデータ書き出しダイアログボックスを表示します。これは、定義済みのプロジェクトを使用しつつ、いくつかのパラメターを変更できるようにするものです。さらに、データ書き出しダイアログボックスを閉じた後に、project引数には、新しいプロジェクトのパラメターが格納され、この新しいプロジェクトをBLOBフィールドやディスク等に保存することができます。

データ書き出しが正常に終了すると、システム変数OKは1になります。

#### 例題 1 

この例題ではバイナリーフォーマットでデータを書き出すために**EXPORT DATA**コマンドを使用する方法を示します。

* このメソッドはループ中ですべてのテーブルに対しExportBinaryメソッドを呼び出します:

```4d
 var $ExportPath : Text
 var $i : Integer
 $ExportPath:=Select folder("書き出しフォルダーを選択:")
 If(OK=1)
    For($i;1;Last table number)
       If(Is table number valid($i))
          ExportBinary(Table($i);$ExportPath+Table name($i);True)
       End if
    End for
 End if
```

* ExportBinary メソッドのコードは以下の通りです:

```4d
 var $1 : Pointer //テーブルポインター
 var $2 : Text //書き出し先ファイルのパス名
 var $3 : Boolean //True: すべてのレコードを書き出し
 var $i : Integer
 var $ref : Text
 $ref:=DOM Create XML Ref("settings-import-export")
  // "$1"テーブルの全レコードまたはカレントセレクションを'4D'バイナリーフォーマットで書き出す。
 DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)
  // 書き出すフィールドの指定
 For($i;1;Last field number($1))
    If(Is field number valid($1;$i))
       $elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)
    End if
 End for
 EXPORT DATA($2;$ref)
 If(OK=0)
    ALERT(Table name($1)+"テーブルを書き出し中にエラーが発生しました。")
 End if
 DOM CLOSE XML($ref)
```

#### 例題 2 

この例題は、空のプロジェクトを作成し、ユーザが書き出しダイアログボックスで設定した各パラメターを保存します: 

```4d
 var $exportParams : Text
 EXPORT DATA("DocExport.txt";$exportParams;*) // 書き出しダイアログボックスを表示する
```

#### システム変数およびセット 

標準のファイルを開くまたは書き出しダイアログボックスでユーザがキャンセルをクリックするとOKシステム変数は0に設定されます。書き出しが行われると1に設定されます。

#### 参照 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DATA](import-data.md)  