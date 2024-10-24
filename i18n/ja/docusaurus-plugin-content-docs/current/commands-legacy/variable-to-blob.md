---
id: variable-to-blob
title: VARIABLE TO BLOB
slug: /commands/variable-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO BLOB.Syntax-->**VARIABLE TO BLOB** ( *variable* ; *BLOB* {; offset | *} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | BLOBに格納する変数 |
| Blob | Blob | &#8594;  | 変数を受け取るBLOB |
| offset &#124; * | 変数, 演算子 |&#8596; | BLOB内のオフセット (バイト単位) または値を追加する場合 * |
| ||| *でない場合、書き込み後の新しいオフセット |

<!-- END REF-->

#### 説明 

<!--REF #_command_.VARIABLE TO BLOB.Summary-->**VARIABLE TO BLOB**コマンドは、*variable*を*blob*に格納します。<!-- END REF-->

オプション引数 *\** を指定した場合には、変数はBLOBの最後に追加され、これに合わせてBLOBのサイズも拡張されます。オプション引数 *\** を使用すれば、BLOBがメモリ容量内であれば変数やリスト（他のBLOBコマンドを参照してください）をいくつでも順番にBLOBの中に格納できます。

オプション引数 *\** や*offset*変数引数を指定しない場合、変数はBLOBの先頭に格納され、それ以前にそこにあった内容を上書きします。これに合わせてBLOBのサイズも調整されます。

*offset*に変数引数を渡すと、変数値のオフセット位置（ゼロから始めます）からBLOBに書き込まれます。変数を書き込む位置にかかわらず、BLOBのサイズは渡した場所に応じて増やされます (必要に応じ変数のサイズも)。新しく割り当てられたバイトは、ゼロに初期化されます。

呼び出し後、*offset*変数引数は書き込まれたバイト数だけインクリメントされます。その後同じ変数を他のBLOB書き込みコマンドで使用してさらに変数やリストを書き込めます。

**VARIABLE TO BLOB**コマンドは、以下のものを除いて、どのようなタイプの変数でも（他のBLOBも）受け付けます:

* ポインタ
* ポインタ配列
以下の点に注意して下さい:
* 階層リスト ([ListRef](# "階層リストへの参照")) への参照である倍長整数の変数を保存した場合には、**VARIABLE TO BLOB**コマンドは階層リストではなく倍長整数変数を格納します。BLOB内に階層リストを格納、またはBLOBから階層リストを取り出すには、[LIST TO BLOB](list-to-blob.md) と [BLOB to list](blob-to-list.md) を使用します。
* オブジェクトまたはコレクションが*variable*引数として渡された場合、コマンドはそのコピーを（参照ではなく）BLOBに格納する。。オブジェクトまたはコレクションがポインターを含んでいた場合、ポインター自身ではなくそれが参照していた値が保存されます。

ただし、階層リスト ([ListRef](# "階層リストへの参照")) への参照である倍長整数の変数を格納した場合には、**VARIABLE TO BLOB**コマンドは階層リストではなく倍長整数変数を格納します。BLOB内に階層リストを格納、またはBLOBから階層リストを取り出すには、[LIST TO BLOB](list-to-blob.md) と [BLOB to list](blob-to-list.md) を使用します。 

**警告:** 変数を格納するためにBLOBを使用したら、格納されたBLOBの内容を読み出すには[BLOB TO VARIABLE](blob-to-variable.md) コマンドを使用しなければなりません。変数は4D内部形式を使用してBLOBに格納されるためです。

呼び出し後、変数が正常に格納された場合には、システム変数OKは1に設定されます。変数を格納するために必要なメモリがない等の理由で処理が実行できなかった場合には、システム変数OKは0に設定されます。

**プラットフォーム独立互換性に関する注意**

**VARIABLE TO BLOB** と [BLOB TO VARIABLE](blob-to-variable.md) は4Dの内部フォーマットを使用してBLOBに格納された変数を取り扱います。この利点として、これら二つのコマンドを使用する際、プラットフォーム間の バイトスワップを気にする必要はありません。言い換えればこれらのコマンドを使用してWindowsで作成されたBLOBを Mac OS で使用す る、あるいはその逆を行うことができます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### システム変数およびセット 

変数が正しく格納されるとOK変数は1に設定されます。そうでなければ0に設定されます。

#### 例題 1 

以下の2つのプロジェクトメソッドを使用すると、任意の変数（1～n個）をすばやく、BLOBへ格納／復元することができます: 

```4d
  // STORE VARIABLES INTO BLOB project method
  // STORE VARIABLES INTO BLOB ( Pointer { ; Pointer ... { ; Pointer } } )
  // STORE VARIABLES INTO BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam : Integer
 
 SET BLOB SIZE($1->;0)
 For($vlParam;2;Count parameters)
    VARIABLE TO BLOB(${$vlParam}->;$1->;*)
 End for
 
 
  // RETRIEVE VARIABLES FROM BLOB project method
  // RETRIEVE VARIABLES FROM BLOB ( Pointer { ; Pointer ... { ; Pointer } } )
  // RETRIEVE VARIABLES FROM BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam;$vlOffset : Integer
 
 $vlOffset:=0
 For($vlParam;2;Count parameters)
    BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)
 End for
```

これらのメソッドをアプリケーションに追加すれば、以下のように記述することができます:

```4d
 STORE VARIABLES INTO BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)
  // ...
 RETRIEVE VARIABLES FROM BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)
```

#### 例題 2 

以下の2つのプロジェクトメソッドを使用すると、ディスク上のドキュメントへすばやく配列を格納、またはドキュメントからすばやく配列を取得できます: 

```4d
  // SAVE ARRAY プロジェクトメソッド
  // SAVE ARRAY ( 文字列 ; ポインター )
  // SAVE ARRAY ( ドキュメント ; -> 配列 )
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 VARIABLE TO BLOB($2->;$vxArrayData) // 配列をBLOBに保存
 COMPRESS BLOB($vxArrayData) // BLOBを圧縮
 BLOB TO DOCUMENT($1;$vxArrayData) // BLOB をディスクに保存
 
  // LOAD ARRAY プロジェクトメソッド
  // LOAD ARRAY ( 文字列 ; ポインター )
  // LOAD ARRAY ( ドキュメント ; -> 配列 )
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 DOCUMENT TO BLOB($1;$vxArrayData) // BLOB ディスクから読み出し
 EXPAND BLOB($vxArrayData) // BLOBを展開
 BLOB TO VARIABLE($vxArrayData;$2->) // 配列をBLOBから取得する
```

上記のメソッドをアプリケーションに追加すれば、以下のように記述することができます:

```4d
 ARRAY STRING(...;asAnyArray;...)
  // ...
 SAVE ARRAY($vsDocName;->asAnyArray)
  // ...
 LOAD ARRAY($vsDocName;->asAnyArray)
```

#### 参照 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[LIST TO BLOB](list-to-blob.md)  