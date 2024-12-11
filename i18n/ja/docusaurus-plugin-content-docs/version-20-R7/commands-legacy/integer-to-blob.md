---
id: integer-to-blob
title: INTEGER TO BLOB
slug: /commands/integer-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.INTEGER TO BLOB.Syntax-->**INTEGER TO BLOB** ( *entier* ; *BLOB* ; *ordreOctet* {; offset | *} )<!-- END REF-->
<!--REF #_command_.INTEGER TO BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| entier | Integer | &#8594;  | BLOBに書き込む整数値 |
| Blob | Blob | &#8594;  | 整数値を受け取るBLOB |
| ordreOctet | Integer | &#8594;  | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset &#124; * | 変数, 演算子 | &#8596; | BLOB内のオフセット (バイト単位) または値を追加する場合 * |
| || | *でない場合、書き込み後の新しいオフセット |

<!-- END REF-->

#### 説明 

<!--REF #_command_.INTEGER TO BLOB.Summary-->INTEGER TO BLOB コマンドは、*blob*に2バイトの*integer*値を書き込みます。<!-- END REF-->

*byteOrder*引数は、2バイト整数値が書き込まれる際のバイトオーダーを決定します。4Dが提供する以下の定義済み定数のうち、いずれか1つを渡します:

| 定数                      | 型    | 値 |
| ----------------------- | ---- | - |
| Macintosh byte ordering | 倍長整数 | 1 |
| Native byte ordering    | 倍長整数 | 0 |
| PC byte ordering        | 倍長整数 | 2 |

**プラットフォーム独立性に関する注意**  

MacintoshとPCプラットフォーム間でBLOBを交換する場合、このコマンドを使用する際のバイトスワップの管理は開発者に任されています。

オプションの \* 引数を渡すと、2バイト整数値はBLOBの最後に追加され、BLOBサイズはそれに従い拡張されます。オプションの \* 引数を使用することで、BLOBがメモリに収まる限り、整数, 倍長整数, 実数 あるいは テキスト値 (他のBLOBコマンド参照) をBLOBに連続して格納できます。 

オプション引数 \* や*offset*変数引数を指定しない場合、2バイトの整数値はBLOBの最初に格納され、それ以前の内容を上書きします。これに合わせてBLOBのサイズも調整されます。

*offset*変数引数を渡した場合、2バイト整数値はBLOB内のオフセット（ゼ ロから開始）に書き込まれます。2バイトの整数の値を書き込む位置に関わらず、BLOBのサイズは渡した位置に従って（必要に応じてさらに最大2バイトま で）増加します。現在書き込んでいるバイト以外の新しく割り当てられるバイトは、ゼロに初期化されます。

呼び出し後、*offset*変数引数は、書き込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数引数を別のBLOB書き込みコマンドにも使用し、別の値をBLOBに追加できます。

##### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com でのの *Passing blobs and blob objects to 4D commands* のページを参照して下さい。

#### 例題 1 

以下のコードを実行すると: 

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering;vlOffset)
```

* *vxBlob*のサイズは100バイトになります。
* すべてのプラットフォーム: *vxBLOB{50}* \= *$02* で *vxBLOB{51}* \= *$06*
* BLOBの他のバイトは変更されない
* 変数*vlOffset*は2インクリメントされ52となる

#### 例題 2 

以下のコードを実行すると:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)
```

* *vxBlob*のサイズは2バイトになります。
* すべてのプラットフォーム: *vxBLOB{0}* \= *$06* で *vxBLOB{1}* \= *$02*

#### 例題 3 

以下のコードを実行すると:

```4d
 SET BLOB SIZE(vxBlob;100)
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)
```

* *vxBlob*のサイズは102バイトになります。
* すべてのプラットフォーム: *vxBLOB{100}* \= *$06* で *vxBLOB{101}* \= *$02*
* BLOBの他のバイトは変更されない

#### 例題 4 

以下のコードを実行すると: 

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)
```

* *vxBlob*のサイズは2バイトになります。
* Power PCプラットフォーム: *vxBlob{0}* \= *$02* で *vxBLOB{1}* \= *$06*
* Intelプラットフォーム: *vxBLOB{0}* \= *$06* で *vxBLOB{1}* \= *$02*

#### 例題 5 

以下のコードを実行すると:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)
```

* *vxBlob*のサイズは2バイトになります。
* すべてのプラットフォーム: *vxBLOB{0}* \= *$02* で *vxBLOB{1}* \= *$06*

#### 参照 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 548 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


