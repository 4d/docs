---
id: execute-on-server
title: Execute on server
slug: /commands/execute-on-server
displayed_sidebar: docs
---

<!--REF #_command_.Execute on server.Syntax-->**Execute on server** ( *procedure* ; *stack* {; *name* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Execute on server.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| procedure | Text | &#8594;  | プロセス中で実行するメソッド |
| stack | Integer | &#8594;  | スタックサイズ (バイト) |
| name | Text | &#8594;  | 作成するプロセスの名前 |
| param | Expression | &#8594;  | メソッドの引数 |
| * | 演算子 | &#8594;  | 重複しないプロセス |
| 戻り値 | Integer | &#8592; | 新規プロセスのプロセス番号 または既存のプロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Execute on server.Summary-->Execute on server コマンドはサーバマシン上 (クライアント/サーバで実行された場合) 、または同じマシン上 (シングルユーザで実行された場合) で新しいプロセスを開始し、そのプロセスのプロセス番号を返します。<!-- END REF-->

Execute on serverコマンドを使用してストアドプロシージャを開始します。ストアドプロシージャについての詳細は4D Server Referenceマニュアルの*ストアドプロシージャ*の節を参照してください。

クライアントマシンでExecute on serverを実行した場合、負のプロセス番号が返されます。サーバマシンでExecute on serverを実行すると、正のプロセス参照番号が返されます。サーバマシン上で[New process](new-process.md "New process")コマンドを実行することは、Execute on serverを実行することと同じです。

プロセスが作成できない場合 (例えばメモリ不足) 、Execute on serverは0を返し、エラーが発生します。このエラーは[ON ERR CALL](on-err-call.md "ON ERR CALL")でインストールしたエラー処理メソッドを使用してとらえることができます。

##### プロセスメソッド 

*procedure*には、新しいプロセスのプロセスメソッド名を指定します。4Dは新規プロセスのコンテキストを設定した後、このメソッドの実行を開始します。したがって、これがプロセスメソッドになります。

##### プロセススタック 

*stack* 引数を使用すると、プロセスのスタックのために割り当てられたメモリ量を指定することができます。この空間が、メソッド呼び出し、ローカル変数、サブルーチンの変数、スタックされたレコードを”積み上げる”ためのメモリーです。

* デフォルトのスタックサイズを使用するためには*stack* に0を渡します。これはほとんどのアプリケーションに適しています(推奨設定)
* 一 部の特定の場合において、カスタムの値を使用したい場合があるかもしれません。その際には値はバイト単位で指定しなければなりません。この設定は、プロセスチェーンの呼び出しやプラットフォームなどによるため、注意して使用する必要があります。

**注:** スタックはプロセスの合計メモリではありません。各プロセスはレコードやインタープロセス変数等のためにメモリを共有します。またプロセスはプロセス変数 の保持に追加のメモリを使用します。スタックには4Dの情報のさまざまな項目が格納されます。スタックに格納される情報の量は、ネストしたメソッドの呼び出し数、前のフォームが閉じられる前に開かれたフォームの数、ネストしたメソッドで使用されるローカル変数のサイズに基づきます。

##### プロセス名 

*name*には新しいプロセスの名前を指定します。シングルユーザモードでは、ここで指定した名前が短タイムエクスプローラのプロセスリストに表示され、この新しいプロセスに対して[PROCESS PROPERTIES](process-properties.md "PROCESS PROPERTIES")コマンドを実行するとこの名前が返されます。クライアント/サーバモードでは、4D Serverのメインウインドウのストアドプロシージャリストに青字で表示されます。

この引数は省略することができます。省略した場合、プロセス名は空の文字列になります。

**警告:** [New Process](new-process.md "New Process")とは異なり、Execute on serverコマンドの実行時に、プロセス名の先頭にドル記号 ($) 記号を付けて、プロセスをローカルにしようとはしないでください。シングルユーザモードではExecute on serverコマンドは[New Process](new-process.md "New Process")コマンドと同じ処理を実行するため、プロセスをローカルにしても正常に動作します。しかし、クライアント/サーバモードではエラーが発生します。

##### プロセスメソッドの引数 

プロセスメソッドに引数を渡せるようになりました。サブルーチンにパラメータを渡すのと同じ要領でプロセスメソッドに引数を渡します。 しかし制約があります。ポインタ表現は渡すことができません。また、メソッドに対して配列を引数として受け渡すことができない点にも留意してください。プ ロセスメソッドは、新規プロセスのコンテキスト内で実行を開始する際に、*$1*, *$2*等に引数の値を受け取ります。 

**Note:** プロセスメソッドに引数を渡す場合、必ず*name*引数を指定しなければなりません。この場合、この引数は省略できません。

 param にオブジェクト(*C\_OBJECT*) またはコレクション (\[#cmd id="1488"/\]) を渡す場合、参照ではなくコピーが渡され、サーバーに対してはUTF-8のJSONフォームが使用されます。もしオブジェクトまたはコレクションにポインターが格納されている場合、そのポインターが参照している値が送られ、ポインターそのものは送られないことに注意してください。

##### オプションの \* 引数 

この最後の引数を指定した場合、4Dははじめに*name*に指定した名前を持つプロセスが既に実行されているかどうかを調べます。同一名のプロセスが存在する場合、4Dは新規プロセスを開始せずにその名前を持つプロセスのプロセス番号を返します。

#### 例題 1 

リモート側から情報のログを記録し、サーバーマシン側のテキストファイルに保存したい場合を考えます。

メソッドにローカルな情報を引数として渡し、リモートマシン側で実行します:

```4d
 $process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))
```

WriteLog メソッドはサーバー側で実行されます。メソッドの中身は、例えば以下のようになっています:

```4d
 var $1;$2;$3 : Text
 TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)
```

#### 例題 2 

以下の例は、クライアント/サーバにおいてデータ読み込みの処理速度を飛躍的に向上する方法を示しています。以下のRegular Importメソッドにより、クライアント側で[IMPORT TEXT](import-text.md "IMPORT TEXT")コマンドを使用したレコード読み込みに要する時間を調べることができます: 

```4d
  // Regular Import Project Method
 $vhDocRef:=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    FORM SET INPUT([Table1];"Import")
    $vhStartTime:=Current time
    IMPORT TEXT([Table1];Document)
    $vhEndTime:=Current time
    ALERT("It took "+String(0+($vhEndTime-$vhStartTime))+" seconds.")
 End if
```

通常のデータ読み込みでは、4D Clientがテキストファイルの解析を行った後、各レコードごとに新規レコードを作成し、読み込んだデータをフィールドに格納して、データベースに追加 するためにレコードをサーバマシンに送信します。この結果、ネットワーク上には大量のリクエストが行きかいます。この処理を最適化するには、ストアドプロ シージャを利用し、サーバマシン上でローカルにジョブを実行します。クライアントマシンではドキュメントファイルをBLOBにロードし、引数にこの BLOBを渡してストアドプロシージャを開始します。ストアドプロシージャはこのドキュメントファイルをサーバマシンに保存し、ドキュメントをローカルに 読み込みます。したがって、ネットワークリクエストの大部分が必要なくなるため、データ読み込みはシングルユーザ版並の速度でローカルに実行されます。次 にCLIENT IMPORTプロジェクトメソッドを示します。このメソッドはクライアントマシン上で実行され、後のSERVER IMPORTストアドプロシジャを開始します。

```4d
  // CLIENT IMPORT プロジェクトメソッド
  // CLIENT IMPORT ( ポインタ; 文字列 )
  // CLIENT IMPORT ( -> [table] ; Input form )
 
 var $1 : Pointer
 var $2 : Text
 var $vhDocRef : Time
 var $vxData : Blob
 var spErrCode : Integer
 
  // 読み込むドキュメントを選択
 $vhDocRef:=Open document("")
 If(OK=1)
  // ドキュメントが選択されたら、開いておく必要はない
    CLOSE DOCUMENT($vhDocRef)
    $vhStartTime:=Current time
  // ドキュメントをメモリにロード
    DOCUMENT TO BLOB(Document;$vxData)
    If(OK=1)
  // ドキュメントがBLOBに読み込めたら
  // サーバマシン上で読み込みを実行するストアドプロシージャを開始
       $spProcessID:=Execute on server("SERVER IMPORT";0;
       "Server Import Services";Table($1);$2;$vxData)
  // この時点でBLOBはもう必要ない
       CLEAR VARIABLE($vxData)
  // ストアドプロシージャの処理を待つ
       Repeat
          DELAY PROCESS(Current process;300)
          GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
          If(Undefined(spErrCode))
  // Note: ストアドプロシージャが自身の変数spErrCodeインスタンスをまだ初期化していない場合、
  // 未定義変数が返されることがある
             spErrCode:=1
          End if
       Until(spErrCode<=0)
  // ストアドプロシージャに結果を受け取ったことを通知
       spErrCode:=1
       SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
       $vhEndTime:=Current time
       ALERT("It took "+String(0+($vhEndTime-$vhStartTime))+" seconds.")
    Else
       ALERT("There is not enough memory to load the document.")
    End if
 End if
```

次に、ストアドプロシージャとして実行されるSERVER IMPORTプロジェクトメソッドを示します:

```4d
  // SERVER IMPORT プロジェクトメソッド
  // SERVER IMPORT ( 倍長整数; 文字列 ; BLOB )
  // SERVER IMPORT ( テーブル番号 ; 入力フォーム ; Iデータの入力 )
 
 var $1 : Integer
 var $2 : Text
 var $3 : Blob
 var spErrCode : Integer
 
  // Operation is not finished yet, set spErrCode to 1
 spErrCode:=1
 $vpTable:=Table($1)
 FORM SET INPUT($vpTable->;$2)
 $vsDocName:="Import File "+String(1+Random)
 DELETE DOCUMENT($vsDocName)
 BLOB TO DOCUMENT($vsDocName;$3)
 IMPORT TEXT($vpTable->;$vsDocName)
 DELETE DOCUMENT($vsDocName)
  // Operation is finished, set spErrCode to 0
 spErrCode:=0
  // Wait until the requester Client got the result back
 Repeat
    DELAY PROCESS(Current process;1)
 Until(spErrCode>0)
```

データベースにこの2つのプロジェクトメソッドを作成したら、例えば以下のようにストアドプロシージャベースのデータ読み込みを実行できます:

```4d
 CLIENT IMPORT(->[Table1];"Import")
```

ベンチマークテストによると、このメソッドを使用してレコード読み込みを実行すると通常の読み込みよりも60倍高速に処理されました。

#### 例題 3 

*4D Server リファレンスマニュアル*の*SPベースのサービス (例題)* の章を参照して下さい。

#### 参照 

[EXECUTE ON CLIENT](execute-on-client.md)  
[New process](new-process.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 373 |
| スレッドセーフである | &cross; |


