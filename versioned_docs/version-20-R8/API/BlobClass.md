---
id: BlobClass
title: Blob
---

The Blob class lets you create and manipulate [blob objects](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Summary

||
|---|
|[<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)<br/><!-- INCLUDE #4D.Blob.new().Summary -->|
|[<!-- INCLUDE #Blob.size.Syntax -->](#size)<br/><!-- INCLUDE #Blob.size.Summary -->|
|[<!-- INCLUDE #Blob.slice().Syntax -->](#slice)<br/><!-- INCLUDE #Blob.slice().Summary -->|

## 4D.Blob.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R2|Added|

</details>

<!-- REF #4D.Blob.new().Syntax -->**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->


<!-- REF #4D.Blob.new().Params -->

| Parameter | Type            |     | Description  |
| --------- | --------------- | :-: | ------------ |
| blob      | Blob or 4D.Blob | ->  | Blob to copy |
| Result    | 4D.Blob         | <-  | New 4D.Blob  |
<!-- END REF -->

#### Description

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`)<!-- END REF -->.

If the `blob` parameter is omitted, the method returns an empty 4D.Blob.

## .size

<!-- REF #Blob.size.Syntax -->**.size** : Real<!-- END REF -->

#### Description
The `.size` property <!-- REF #Blob.size.Summary -->returns the size of a `4D.Blob`, expressed in bytes.<!-- END REF -->

## .slice()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R2|Added|

</details>

<!-- REF #Blob.slice().Syntax -->**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->


<!-- REF #Blob.slice().Params -->
| Parameter | Type ||Description |
| --------- | ------- | :-: | --- |
| start| Real    | ->  | index of the first byte to include in the new `4D.Blob`.               |
| end| Real    | ->  | index of the first byte that will not be included in the new `4D.Blob` |
| Result| 4D.Blob | <-  | New `4D.Blob`|
<!-- END REF -->

#### Description

`.slice()` <!-- REF #Blob.slice().Summary --> creates and returns a `4D.Blob ` that references data from a subset of the blob on which it's called. The original blob is not altered.<!-- END REF -->

The `start` parameter is an index into the blob indicating the first byte to include in the new `4D.Blob`. If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is 0. If you specify a value for start that is larger than the size of the source blob, the returned `4D.Blob`'s size is 0, and it contains no data.

The `end` parameter is an index into the blob indicating the first byte that will not be included in the new `4D.Blob` (i.e. the byte exactly at this index is not included). If you specify a negative value, 4D treats it as an offset from the end of the blob toward the beginning. For example, -10 would be the 10th from last byte in the blob. The default value is the size of the blob.

#### Example

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
