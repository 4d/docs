---
id: blob
title: BLOB
---

BLOB (Binary Large OBject) フィールド・変数・式とは、連続した可変長バイトであり、各バイトを個々にアドレス指定可能な 1つのまとまったオブジェクトとして取り扱うことができます。 サポートされている BLOB のサイズは空 (長さがNULL) から、最大 2,147,483,647 バイト (2GB) までです。

BLOB は全体がメモリにロードされます。 BLOB 変数はメモリ内にだけ保持され、存在します。 BLOB フィールドは、レコードの他フィールドと同様に、ディスクからメモリにロードされます。

大量のデータを保持できる他のフィールドタイプ (ピクチャーなど) と同様に、レコードを更新してもBLOBフィールドはメモリに複製されません。 したがって、`Old` および `Modified` コマンドをBLOBフィールドに適用しても、返される結果は意味を持ちません。

## Blob Types

4D supports two types of blobs:
* **4D.Blob**: Blob object that encapsulates a blob or part of it without altering the original blob (see [4D.Blob Class](../API/BlobClass.md))
* **C_BLOB**: Classical blob variable

We recommend using blob objects (4D.Blob) to manipulate blobs. Blob objects are optimized, shareable — when passed as method parameters, they are passed by reference — and usable in preemptive threads.

### Automatic conversion of blob type
4D automatically converts blob objects (4D.Blob) to classical blobs (C_BLOB) and vice versa. たとえば:

```4d
C_BLOB($myBlob)
$o:=New object("blob";$myBlob)
$type:=Value type($o.blob)  //object
```

Some commands alter the original blob, and thus do not support the 4D.Blob type:

* [DELETE FROM BLOB](https://doc.4d.com/4dv19R/help/command/en/page560.html)
* [INSERT IN BLOB](https://doc.4d.com/4dv19R/help/command/en/page559.html)
* [INTEGER TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page548.html)
* [LONGINT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page550.html)
* [REAL TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page552.html)
* [SET BLOB SIZE](https://doc.4d.com/4dv19R/help/command/en/page606.html)
* [TEXT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page554.html)
* [VARIABLE TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page532.html)
* [LIST TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page556.html)

## Passing blobs as parameters

Blobs can be passed as parameters to 4D commands or plug-in routines that expect blob parameters. blobs can also be passed as parameters to user methods, or returned by functions.

### Passing a 4D.Blob

```4d
var $myBlob: 4D.Blob.new
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a C_BLOB

To modify a blob, you need to use a C_BLOB variable and pass it to a command. たとえば:

```4d
C_BLOB($myBlob)
SET BLOB SIZE ($myBlob ; 16*1024)
```

### Passing a C_BLOB by reference using a pointer

To pass a C_BLOB to your own methods, you can also define a pointer to the C_BLOB and pass the pointer as parameter.

**例: **
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The blob is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The blob is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The blob is passed as a parameter to a method that returns a blob
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the blob is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**プラグイン開発にあたっての注意:** BLOB 引数は “&O” (数字の0ではなく、アルファベットの"O") として宣言します。

## 代入

You can assign blobs to each other.

**例: **
```4d
  // BLOB 型の変数を二つ宣言します
 C_BLOB(vBlobA;vBlobB)
// 一つ目の BLOB に10K のサイズを割り当てます
 SET BLOB SIZE(vBlobA;10*1024)
// 一つ目の BLOB を二つ目の BLOB に代入します
 vBlobB:=vBlobA
```

ただし、BLOB に演算子を適用することはできません。

## BLOB のアドレス指定

You can address each byte of a blob individually using the curly brackets symbols {...}. BLOB 内では、各バイトに 0 から N-1 の番号が割り当てられています。N は BLOB のサイズです。 例:
```4d
  // BLOB を定義します
 C_BLOB(vBlob)
// BLOB のサイズを 256バイトに設定します
 SET BLOB SIZE(vBlob;256)
// 次のループは、BLOB の 256バイトをゼロに初期化します
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Because you can address all the bytes of a blob individually, you can actually store whatever you want in a BLOB field or variable.
