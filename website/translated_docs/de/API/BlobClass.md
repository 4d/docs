---
id: BlobClass
title: Blob
---

The Blob class lets you create and manipulate [blob objects](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Summary

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob](#4dblobnew)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`).|
| [**.size** : Real](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the size of a `4D.Blob`, expressed in bytes.|
| [**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp; creates and returns a `4D.Blob` that references data from a subset of the blob on which it's called. The original blob is not altered.|

## 4D.Blob.new()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v19 R2  | Added   |
</details>

**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob

| Parameter | Typ             |    | Beschreibung |
| --------- | --------------- |:--:| ------------ |
| blob      | Blob or 4D.Blob | -> | Blob to copy |
| Ergebnis  | 4D.Blob         | <- | New 4D.Blob  |

#### Beschreibung

`4D.Blob.new` creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`).
If the `blob` parameter is omitted, the method returns an empty 4D.Blob.

## .size

**.size** : Real
#### Beschreibung
The `.size` property returns the size of a `4D.Blob`, expressed in bytes.
## .slice()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v19 R2  | Added   |
</details>

**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob
| Parameter | Typ     |    | Beschreibung                                                           |
| --------- | ------- |:--:| ---------------------------------------------------------------------- |
| start     | Zahl    | -> | index of the first byte to include in the new `4D.Blob`.               |
| end       | Zahl    | -> | index of the first byte that will not be included in the new `4D.Blob` |
| Ergebnis  | 4D.Blob | <- | New `4D.Blob`|
|

#### Beschreibung

`.slice()`  creates and returns a `4D.Blob` that references data from a subset of the blob on which it's called. The original blob is not altered.
The `start` parameter is an index into the blob indicating the first byte to include in the new `4D.Blob`. If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is 0. If you specify a value for start that is larger than the size of the source blob, the returned `4D.Blob`'s size is 0, and it contains no data.

The `end` parameter is an index into the blob indicating the first byte that will not be included in the new `4D.Blob` (i.e. the byte exactly at this index is not included). If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is the size of the blob.

#### Beispiel

```4d
var $myBlob : 4D.Blob

// Store text in a 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contains "Hello, World!"

// Create a new 4D.Blob from $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString contains "Hello"
```
