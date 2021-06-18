---
id: 4DBlobClass
title: 4D.Blob
---

The 4D.Blob class lets you create and manipulate blob objects (4D.Blob) that can later be passed as method parameters.

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
**4D.Blob.new**( { blob } ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|blob|4D.Blob or C_Blob|->|Blob to copy|
<!-- END REF -->

#### Description
`4D.Blob.new` <!-- REF #4D.Blob.new().Summary --> creates a new 4D.Blob object optionally encapsulating a copy of the data from another blob (object or scalar).<!-- END REF --> 

If the *blob* parameter is omitted, the method returns an empty blob.

#### Return Value

A 4D.Blob object that encapsulates a copy of the data from another blob (object or scalar).

#### Access to bytes 

To directly access a specific byte, use brackets:

```4d 
$b:=$blobObj[3]
// Equivalent with a c_blob:
$b:=$blob{3}
```

## .size

<!-- REF #4D.Blob.size.Syntax -->
**4D.Blob.size** : Number<!-- END REF -->

#### Description
The `4D.Blob.size` property <!-- REF #4D.Blob.size.Summary --> returns the size of the blob, expressed in bytes.<!-- END REF -->

## .slice

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #4D.Blob.slice().Syntax -->
**4D.Blob.slice** ( { start } {;} { end } ) : 4D.Blob <!-- END REF -->

<!-- REF #4D.Blob.slice().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|start|number|->|index of the first byte to include in the new Blob.|
|end|number|->|index of the first byte that will not be included in the new Blob (the byte exactly at this index is not included).|
<!-- END REF -->


#### Description
The `4D.Blob.slice()` property <!-- REF #4D.Blob.slice().Summary --> creates and returns a 4D.Blob object that contains data from a subset of the blob on which it's called. <!-- END REF -->

In the *start* parameter, if you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is 0. If you specify a value for start that is larger than the size of the source Blob, the returned Blob's size is 0, and it contains no data.

In the *end* parameter, if you specify a negative value, 4D treats it as an offset from the end of the Blob toward the beginning. For example, -10 would be the 10th from last byte in the Blob. The default value is the size of the blob.

#### Return Value

A new Blob object that contains the specified subset of the data contained within the blob on which this method was called. The original blob is not altered.

#### Example 

```4d
var $myBlob = new Object
var $myString = BLOB to text sur myBlob.
// $myString contains "XXXXXXXXXXXXXXXXXXXX"
var $myNewBlob = myBlob.slice(5,10)
myString = BLOB to text sur myNewBlob
// $myString contains "XXXXX"
```


