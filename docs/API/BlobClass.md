---
id: BlobClass
title: Blob
---

The Blob class lets you create and manipulate `4D.Blob` objects.

### Summary 
||
|---|
|[<!-- INCLUDE #4D.Blob.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.new().Summary --> |
|[<!-- INCLUDE #4D.Blob.size.Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.size.Summary --> |
|[<!-- INCLUDE #4D.Blob.slice().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.Blob.slice().Summary --> |

## 4D.Blob.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #4D.Blob.new().Syntax -->
**4D.Blob.new** ( { blob : 4D.Blob } ) : 4D.Blob<br>**4D.Blob.new** ( { blob : C_BLOB } ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|blob|4D.Blob or C_Blob|->|Blob to copy|
<!-- END REF -->

#### Description
`4D.Blob.new` <!-- REF #4D.Blob.new().Summary --> creates a new `4D.Blob` object optionally encapsulating a copy of the data from another blob (scalar blob or `4D.Blob`).<!-- END REF --> 

If the `blob` parameter is omitted, the method returns an empty blob.

#### Return Value

A `4D.Blob` object that optionally encapsulates a copy of the data from a scalar blob or another `4D.Blob`.

## .size

<!-- REF #4D.Blob.size.Syntax -->
**4D.Blob.size** : Integer<!-- END REF -->

#### Description
The `4D.Blob.size` property <!-- REF #4D.Blob.size.Summary --> returns the size of a `4D.Blob`, expressed in bytes.<!-- END REF -->

## .slice

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #4D.Blob.slice().Syntax -->
**4D.Blob.slice** ( { start : Integer {; end : Integer } } ) : 4D.Blob <!-- END REF -->

<!-- REF #4D.Blob.slice().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|start|Integer|->|index of the first byte to include in the new 4D.Blob.|
|end|Integer|->|index of the first byte that will not be included in the new 4D.Blob|
<!-- END REF -->


#### Description
The `4D.Blob.slice()` property <!-- REF #4D.Blob.slice().Summary --> creates and returns a blob object (4D.Blob) that contains data from a subset of the blob on which it's called.<!-- END REF --> 

The `start` parameter is an index into the Blob indicating the first byte to include in the new Blob. If you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob's size is 0, and it contains no data.

The `end` parameter is an index into the Blob indicating the first byte that will not be included in the new Blob (i.e. the byte exactly at this index is not included).  If you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is the size of the blob. the default value is the blob's size.

#### Return Value

A new `4D.Blob` object that contains the specified subset of the data contained within the blob on which this method was called. The original blob is not altered.

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


