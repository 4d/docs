---
id: blob
title: BLOB
---

BLOB (Binary Large OBject) フィールド・変数・式とは、連続した可変長バイトであり、各バイトを個々にアドレス指定可能な 1つのまとまったオブジェクトとして取り扱うことができます。

BLOB は全体がメモリにロードされます。 BLOB変数はメモリ内にだけ保持され、存在します。 BLOBフィールドは、レコードの他フィールドと同様に、ディスクからメモリにロードされます。

大量のデータを保持できる他のフィールドタイプ (ピクチャーなど) と同様に、レコードを更新しても BLOBフィールドはメモリに複製されません。 したがって、`Old` および `Modified` コマンドを BLOBフィールドに適用しても、返される結果は意味を持ちません。

## BLOB の種類

4Dランゲージでは、BLOB を扱う方法が 2つあります:

- **スカラー値として**: BLOB は BLOB変数またはフィールドに格納され、変更することができます。
- **オブジェクト (`4D.Blob`)** として: `4D.Blob` は BLOBオブジェクトです。 オリジナルの BLOB を変更することなく、BLOBそのもの、またはその一部を `4D.Blob` に格納できます。 この方法を [ボクシング](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%8C%96) と呼びます。 `4D.Blob` をインスタンス化する方法については、[Blobクラス](../API/BlobClass.md) を参照ください。

各 BLOBタイプには、それぞれ利点があります。 次の表を参考にして、どちらがニーズに合うかを確認してください:

|                     | BLOB | 4D.Blob |
| ------------------- | :--: | :---------------------: |
| 変更可能                |   ◯  |            ×            |
| オブジェクトやコレクション内で共有可能 |   ×  |            ◯            |
| 参照渡し\*              |   ×  |            ◯            |
| バイトにアクセスする際のパフォーマンス |   -  |            *            |
| 最大サイズ               |  2GB |           メモリ           |

参照で渡される BLOBオブジェクトとは異なり、スカラーBLOB はメソッドに渡されるとメモリ内で複製されることに注意してください。 メソッドを使用する場合は、参照によって渡される BLOBオブジェクト (`4D.Blob`) を使用する方が効率的です。

> デフォルトで、4D はスカラーBLOB の最大サイズを 2GB に設定していますが、OSや空き容量によっては、この制限サイズが小さくなる場合があります。

BLOB に演算子を適用することはできません。

## 変数がスカラーBLOB と `4D.Blob` のどちらを格納しているかの確認

値が BLOB型またはオブジェクト型であるかどうかを確認するには、[Value type](https://doc.4d.com/4dv20/help/command/ja/page1509.html) コマンドを使用します。
特定のオブジェクトが BLOBオブジェクト (`4D.Blob`) であることを確認するには、[OB instance of](https://doc.4d.com/4dv20/help/command/ja/page1731.html) を使用します。

```4d
var $myBlob: Blob
var $myBlobObject: 4D.Blob
$myBlobObject:=4D.Blob.new()

$type:= Value type($myblobObject) // 38 (オブジェクト)
$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  // true
```

## BLOB を引数として渡す

スカラーBLOB や BLOBオブジェクトは、4Dコマンドまたは 4Dプラグインの引数として渡すことができます。

### BLOB および BLOBオブジェクトの 4Dコマンドへの受け渡し

BLOB を引数として受け取る 4Dコマンドには、スカラーBLOB または `4D.Blob` を渡すことができます:

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
```

4Dコマンドの中には、元の BLOB を変更するものがあり、これらは `4D.Blob` タイプをサポートしていません:

- [DELETE FROM BLOB](https://doc.4d.com/4dv19/help/command/ja/page560.html)
- [INSERT IN BLOB](https://doc.4d.com/4dv19/help/command/ja/page559.html)
- [INTEGER TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page548.html)
- [LONGINT TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page550.html)
- [REAL TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page552.html)
- [SET BLOB SIZE](https://doc.4d.com/4dv19/help/command/ja/page606.html)
- [TEXT TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page554.html)
- [VARIABLE TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page532.html)
- [LIST TO BLOB](https://doc.4d.com/4dv19/help/command/ja/page556.html)
- [SOAP DECLARATION](https://doc.4d.com/4dv19/help/command/ja/page782.html)
- [WEB SERVICE SET PARAMETER](https://doc.4d.com/4dv19/help/command/ja/page777.html)

### BLOB および BLOBオブジェクトのメソッドへの受け渡し

BLOB や BLOBオブジェクト (`4D.Blob`) は、メソッドに渡すことができます。 参照で渡される BLOBオブジェクトとは異なり、スカラーBLOB はメソッドに渡されるとメモリ内で複製されることに注意してください。

### ポインターを使ったスカラーBLOB の参照渡し

スカラーBLOB をメモリ上に複製することなくメソッドに渡すには、ポインターを使用します。 その場合は BLOB変数へのポインターを定義し、そのポインターを引数として渡します。

**例題:**

```4d
// BLOB型の変数を定義します
var $myBlobVar: Blob
// 4Dコマンドに引数として BLOB を渡します
 SET BLOB SIZE($myBlobVar;1024*1024)
```

```4d
// 外部ルーチンに BLOB を引数として渡します
 $errCode:=Do Something With This blob($myBlobVar)
```

```4d
// BLOB を引数としてメソッドに渡し、戻り値を BLOB で受け取ります
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
```

```4d
// BLOB のポインターをメソッドに渡します
COMPUTE BLOB(->$myBlobVar)
```

**プラグイン開発にあたっての注意**: BLOB 引数は “&O” (数字の "0" ではなく、アルファベットの "O") として宣言します。

## BLOB変数の代入

BLOB変数は相互に代入することができます:

**例題:**

```4d
// BLOB型の変数を二つ宣言します
 var $vBlobA; $vBlobB : Blob
// 一つ目の BLOB に10K のサイズを割り当てます
 SET BLOB SIZE($vBlobA;10*1024)
// 一つ目の BLOB を二つ目の BLOB に代入します
 $vBlobB:=$vBlobA
```

## BLOB の自動変換

スカラーBLOB が BLOBオブジェクトに (またはその逆) 割り当てられると、4Dはそれらを自動的に変換します。 例:

```4d
// BLOB型の変数とオブジェクト変数を作成します
var $myBlob: Blob
var $myObject : Object

// $myObject の "blob" というプロパティに BLOB変数を代入します
$myObject:=New object("blob"; $myBlob)

// $myBlob に格納される BLOB は自動的に 4D.Blob に変換されます
$type:= OB Instance of($myObject.blob; 4D.Blob)  // true

// 4D.Blob から スカラーBLOB への変換
$myBlob:= $myObject.blob
$type:=
```

> `4D.Blob` をスカラーBLOB に変換する際に、`4D.Blob` のサイズがスカラーBLOB の最大サイズを超える場合、結果のスカラーBLOB は空になります。
> たとえば、スカラーBLOB の最大サイズが 2GB の場合、2.5GB の `4D.Blob` をスカラーBLOB に変換すると、空の BLOB が得られます。

## スカラーBLOB の変更

BLOBオブジェクトとは異なり、スカラーBLOB は変更することができます。 例:

```4d
var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
```

## BLOB内バイトへの個別アクセス

#### スカラーBLOB のバイトへのアクセス

中カッコ `{}` を使用し、BLOB の各バイトを個別にアクセスすることができます。 BLOB 内では、各バイトに 0 から N-1 の番号が割り当てられています。 N は BLOB のサイズです:

```4d
  // BLOB型変数を定義します
 var $vBlob : Blob
  // BLOB のサイズを 256バイトに設定します
 SET BLOB SIZE($vBlob;256)
  // 次のループは、BLOB の各バイトをゼロに初期化します
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```

BLOB の各バイトはすべて個別にアドレス指定できるため、BLOB変数またはフィールドには何でも格納できます。

#### `4D.Blob` のバイトへのアクセス

大カッコ `[]` を使用し、`4D.Blob` の各バイトを個別にアクセスすることができます。

```4d
var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
```

`4D.Blob` は変更できないため、このシンタックスで `4D.Blob` のバイトを読むことはできますが、変更することはできません。
