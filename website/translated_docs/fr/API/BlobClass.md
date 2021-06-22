---
id: BlobClass
title: Blob
---

The Blob class lets you create and manipulate `4D.Blob` objects.

### Sommaire
|                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.new().Summary --> |
| [<!-- INCLUDE #4D.Blob.size.Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.size.Summary --> |
| [<!-- INCLUDE #4D.Blob.slice().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.slice().Summary --> |

## 4D.Blob.new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R2  | Ajoutées      |
</details>

<!-- REF #4D.Blob.new().Syntax -->
**4D.Blob.new** ( { blob : 4D.Blob } ) : 4D.Blob<br>**4D.Blob.new** ( { blob : C_BLOB } ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->
| Paramètres | Type              |    | Description  |
| ---------- | ----------------- |:--:| ------------ |
| blob       | 4D.Blob or C_Blob | -> | Blob to copy |
<!-- END REF -->

#### Description
`4D.Blob.new` <!-- REF #4D.Blob.new().Summary --> creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (`C_Blob` or `4D.Blob`).<!-- END REF --> 

If the `blob` parameter is omitted, the method returns an empty blob.

#### Return Value

A `4D.Blob` object that optionally encapsulates a copy of the data from a C_BLOB or another `4D.Blob`.

#### Access to bytes

To directly access a specific byte in a blob, use brackets:

```4d 
$b:=$blobObj[3]
// Equivalent with a c_blob:
$b:=$blob{3}
```

## .size

<!-- REF #4D.Blob.size.Syntax -->
**4D.Blob.size** : Integer<!-- END REF -->

#### Description
The `4D.Blob.size` property <!-- REF #4D.Blob.size.Summary --> returns the size of a `4D.Blob`, expressed in bytes.<!-- END REF -->

## .slice

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R2  | Ajoutées      |
</details>

<!-- REF #4D.Blob.slice().Syntax -->
**4D.Blob.slice** ( { start : Integer {; end : Integer } } ) : 4D.Blob <!-- END REF -->

<!-- REF #4D.Blob.slice().Params -->
| Paramètres | Type        |    | Description                                                          |
| ---------- | ----------- |:--:| -------------------------------------------------------------------- |
| start      | Entier long | -> | index of the first byte to include in the new 4D.Blob.               |
| end        | Entier long | -> | index of the first byte that will not be included in the new 4D.Blob |
<!-- END REF -->


#### Description
The `4D.Blob.slice()` property <!-- REF #4D.Blob.slice().Summary --> creates and returns a blob object (4D.Blob) that contains data from a subset of the blob on which it's called.<!-- END REF --> 

The `start` parameter is an index into the Blob indicating the first byte to include in the new Blob. If you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob's size is 0, and it contains no data.

The `end` parameter is an index into the Blob indicating the first byte that will not be included in the new Blob (i.e. the byte exactly at this index is not included).  If you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is the size of the blob. the default value is the blob's size.

#### Return Value

A new `4D.Blob` object that contains the specified subset of the data contained within the blob on which this method was called. The original blob is not altered.

#### Exemple

```4d
var $myBlob : Object
var $myString : Text
var $myNewBlob : Object
var $initialBlob : Blob

TEXT TO BLOB("Hello, World!"; $initialBlob)

$myBlob:=4D.Blob.new($initialBlob)
$myString:=BLOB to text($myBlob; UTF8)
// $myString contains "Hello World!"
$myNewBlob:=$myBlob.slice(0; 5)
$myString:=BLOB to text($myNewBlob; UTF8)
// $myString contains "Hello"
```


