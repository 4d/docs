---
id: soap-declaration
title: SOAP DECLARATION
slug: /commands/soap-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SOAP DECLARATION.Syntax-->**SOAP DECLARATION** ( *variable* ; *type* ; input_output {; *alias*} )<!-- END REF-->
<!--REF #_command_.SOAP DECLARATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | 入出力SOAP引数を参照する変数 |
| type | Integer | &#8594;  | 引数が指す4Dの型 |
| input_output | Integer | &#8594;  | 1 = SOAP入力, 2 = SOAP出力 |
| alias | Text | &#8594;  | SOAP交換の間 この引数用に公開される名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SOAP DECLARATION.Summary-->SOAP DECLARATION コマンドを使用して、Webサービスとして公開された4Dメソッドで使用される引数の型を明示的に宣言できます。<!-- END REF-->

メソッドがWebサービスとして公開されると、標準の引数*$0*, *$1*... *$n*が外部へのWebサービス引数の定義に使用されます (特にWSDLファイル内で)。SOAPプロトコルは、引数が明示的に命名されていることを要求します。4Dは“FourD\_arg0, FourD\_arg1 ... FourD\_argN”をデフォルトで使用します。

このデフォルトの動作は、以下の理由で問題となる場合があります:

* *$0* や *$1*, *$2*を配列として宣言できません。ゆえにポインタを使用する必要がありますが、この場合、値の型はWSDLファイル生成時に分かっていなければなりません。
* 入出力引数の名前を変更したい、あるいは変更しなければならない時があります。
* XML構造とDOM参照を引数として使用したい場合があります。
* 32 KBを超えるサイズの値を返したい時があります (非Unicodeモードのテキストサイズの上限)。
* 最後に、この動作だとRPC呼び出しごとに複数の値を返すことができません (*$0*に)。

SOAP DECLARATION コマンドを使用すればこれらの制限から解放されます。このコマンドを入出力引数毎に実行し、名前と型を割り当てます。

**Note:** SOAP DECLARATION コマンドが使用されていても、依然として4Dの変数と配列をCompiler\_Webメソッド内で“コンパイラ”テーマのコマンドを使用して宣言する必要があります。

*variable*には、Webサービスを呼び出すときに参照される4D変数を渡します。

**警告:** プロセス変数または4D引数 (*$0* から *$n*) のみを参照できます。ローカルおよびインタープロセス変数は使用できません。

デフォルトで、テキスト型の引数のみが使用できるため、非Unicodeモードのデータベースでは、SOAPサーバのレスポンスは32KBに制限されます。しかしBLOBを使用すれば32KBを超えるレスポンスを返信できます。この制限を超えるには、SOAP DECLARATION コマンドを呼び出す前に引数をBLOBとして宣言します (例題 4参照)。

**Note:** クライアント側では、このタイプのWebサービスを4Dから呼び出した場合、Webサービスウィザードはテキスト型の変数を生成します。これを使用可能にするには、プロクシメソッド内の値を受け取る変数をBLOB型に変更します。

**Notes:** 

* クライアント側では、このタイプのWebサービスを4Dから呼び出した場合、Webサービスウィザードはテキスト型の変数を生成します。これを使用可能にするには、プロクシメソッド内の値を受け取る変数をBLOB型に変更します。
* このコマンドはBlobオブジェクト(4D.Blob 型)をサポートしません。詳細はdeveloper.4d.com の *Passing blobs and blob objects to 4D commands* を参照してください。

*type*には対応する4Dのデータ型を渡します。ほとんどのタイプの4D変数と配列を使用できます。 テーマの以下の定義済み定数と、XMLタイプの場合テーマの2つの定数を使用できます:

| 定数            | 型    | 値  |
| ------------- | ---- | -- |
| Boolean array | 倍長整数 | 22 |
| Date array    | 倍長整数 | 17 |
| Integer array | 倍長整数 | 15 |
| Is BLOB       | 倍長整数 | 30 |
| Is Boolean    | 倍長整数 | 6  |
| Is date       | 倍長整数 | 4  |
| Is integer    | 倍長整数 | 8  |
| Is longint    | 倍長整数 | 9  |
| Is real       | 倍長整数 | 1  |
| Is string var | 倍長整数 | 24 |
| Is text       | 倍長整数 | 2  |
| Is time       | 倍長整数 | 11 |
| LongInt array | 倍長整数 | 16 |
| Real array    | 倍長整数 | 14 |
| String array  | 倍長整数 | 21 |
| Text array    | 倍長整数 | 18 |

| 定数               | 型    | 値  |
| ---------------- | ---- | -- |
| Is DOM reference | 倍長整数 | 37 |
| Is XML           | 倍長整数 | 36 |

  
*input\_output*には、処理される引数が“入力” (例. メソッドが値を受け取る場合に対応) または “出力” (例. メソッドが値を返す場合に対応) であるかを示す値を渡します。テーマの以下の定義済み定数を使用できます:

| 定数          | 型    | 値 |
| ----------- | ---- | - |
| SOAP input  | 倍長整数 | 1 |
| SOAP output | 倍長整数 | 2 |

##### XML タイプの利用 

Is XML と Is DOM reference 定数を使用して、入出力共に変数を"XML structure" と "DOM reference" 型に宣言できます。このタイプの引数が指定されると、引数への処理やエンコードは行われず、データはそのまま送信されます (例題 5参照)。

* 出力引数:  
   * Is XML は引数がXML構造であることを示します。  
   * Is DOM reference はXML構造のDOM参照であることを示します。この場合、XML構造をSOAPメッセージに挿入することは、[DOM EXPORT TO VAR](dom-export-to-var.md "DOM EXPORT TO VAR") コマンドを実行することと同じです。

**Note:** 出力引数としてを使用するDOM参照の場合、例えばOn Startupで作成し、アプリケーションの終了時に廃棄されるグローバルな参照を使用することをお勧めします。実際Webサービス内で作成されるDOM参照は、[DOM CLOSE XML](dom-close-xml.md "DOM CLOSE XML")で閉じることはできません。これはメソッドの実行が終了して、値が実際にWebサービスクライアントに返されるときにも、XML参照が存在していなければならないためです。Webサービスを複数回呼び出せば、閉じられないDOM参照が複数できることになり、メモリ不足を引き起こすかもしれません。

* 入力引数:  
   * Is XML はSOAPクライアントから送信されたXML引数を受け取ることを示します  
   * Is DOM reference はSOAPクライアントから送信されたXML引数に対応するXML構造のDOM参照を受け取ることを示します。
* WSDLの変更: これらのXML構造は4Dにより"anyType" 型 (不定) としてWSDL内で宣言されます。XML構造を明確に型宣言したい場合、WSDLファイルを保存して、手作業によりWSDLの<types>部に適切なデータスキーマを追加します。

##### COMPILER\_WEB メソッド 

 4D変数を参照する入力SOAP引数 (4Dメソッド引数を除く) はまずCOMPILER\_WEBプロジェクトメソッド内で宣言されなければなりません。実際Webサービスメソッド内でプロセス変数を使用するには、メソッドが呼び出される前にそれらが宣言されていることを必要とします。COMPILER\_WEBプロジェクトメソッドは、存在すれば、SOAPリクエストが受け入れられるたびに呼び出されます。デフォルトでCOMPILER\_WEBメソッドは存在しません。明示的に作成する必要があります。

COMPILER\_WEBメソッドはWebサーバでも使用されます (参照)。 

*alias*には、WSDLとSOAP交換時に表示される引数の名前を渡します。

**警告:** この名前はRPC内でユニークでなければなりません (入力、出力引数両方で)。そうでなければ最後の宣言のみが有効になります。

**Note:** 引数名は数字で始まっていてはならず、スペースを含むことはできません。さらに互換性の問題を避けるため、アクセント文字などの拡張文字は使用しないことをお勧めします。  
*alias* 引数が省略されると、4Dはデフォルトで変数名または4Dメソッド引数にはFourD\_argNを使用します。

**Note:** SOAP DECLARATION コマンドはWebサービスとして公開されるメソッドに含まれていなければなりません。他のメソッドから呼び出すことはできません。

#### 例題 1 

この例題は引数名を指定します:

```4d
  // Webサービスメソッド内で
  // WSDLファイルの生成時とSOAP呼び出し時に、
  // zipcode が fourD_arg1の代わりに使用されます。
 SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")
```

#### 例題 2 

この例題は郵便番号の配列を倍長整数型で受け取ります:

```4d
  //COMPILER_WEB メソッド
 ARRAY LONGINT(codes;0)
 
  //Webサービスメソッド
 SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")
```

#### 例題 3 

この例題では、引数名を指定せずに、2つの戻り値を参照しています: 

```4d
 SOAP DECLARATION(ret1;Is longint;SOAP output)
 SOAP DECLARATION(ret2;Is longint;SOAP output)
```

#### 例題 4 

この例題は、非Unicodeモードのデータベースにおいて、32KBを超える値を返すことを可能にします: 

```4d
 var $0 : Blob
 SOAP DECLARATION($0;Is text;SOAP output)
```

  
Note タイプ Is Text (Is BLOBではなく)を使用していることに留意してください。これにより引数が正しく処理されます。

#### 例題 5 

以下の例題では様々なタイプの宣言を示しています: 

```4d
 ALL RECORDS([Contact])
 
  //XML構造をContactsのセレクションから構築し、XMLをBLOBに格納
 var ws_vx_xmlBlob : Blob
 getContactsXML(->ws_vx_xmlBlob)
  //XML構造をテキスト変数に取り出す
 var ws_vt_xml : Text
 ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)
  //XML構造のDOM参照を取得
 var ws_vt_xmlRef : Text
 ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)
 
  //さまざまな宣言をテスト
 SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")
  //XMLは4DによりBase64に変換される
 
 SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")
  //XMLはテキストに変換される (< > は実体参照になる)
 
 SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")
  //XMLはXMLテキストとして渡される
 
 SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")
  //XMLはXML BLOBとして渡される
 
 SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")
  //XML参照を渡す
```

#### 参照 

[Is data file locked](is-data-file-locked.md)  
[SOAP Get info](soap-get-info.md)  
[SOAP SEND FAULT](soap-send-fault.md)  