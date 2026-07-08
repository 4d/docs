---
id: picture-codec-list
title: PICTURE CODEC LIST
slug: /commands/picture-codec-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE CODEC LIST.Syntax-->**PICTURE CODEC LIST** ( *codecArray* : Text array {; *namesArray* : Text array}{; *} )<!-- END REF-->
<!--REF #_command_.PICTURE CODEC LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| codecArray | Text array | &#8592; | IDs of available picture Codecs |
| namesArray | Text array | &#8592; | Names of picture Codecs |
| * | Operator | &#8594;  | Return list of reading (decoding) Codecs |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.PICTURE CODEC LIST.Summary-->The **PICTURE CODEC LIST** command fills the *codecArray* array with the list of picture Codec IDs that are available on the machine where it is executed.<!-- END REF--> This list includes the Codec IDs of picture formats that are managed natively by 4D.

The Codec IDs can be returned in the *codecArray* array in the following forms:

* As an extension (for example, “.gif”)
* As a Mime type (for example, “image/jpeg”)

**Compatibility note:** If QuickTime has been enabled in the database (see the *Pictures* section), 4-character QuickTime codes can also be returned (for example “PNTG”).

The form returned by the command will depend on the way the Codec is recorded at the operating system level. The optional *namesArray* array can be used to retrieve the name of each Codec. These names are more explicit than the IDs. This array can be used, for example, to build and display a menu listing the available Codecs.

By default, if you do not pass the *\** parameter, the command returns only the Codecs that can be used to encode (write) pictures. These IDs can be used in the *format* parameter of the picture export commands [WRITE PICTURE FILE](../commands/write-picture-file) and [PICTURE TO BLOB](../commands/picture-to-blob).  
 If you pass the *\** parameter, the command also returns the list of codecs used for decoding (reading) the pictures. The two lists are not exclusive, certain reading and writing Codecs are identical. Codecs intended for encoding pictures may usually be used for decoding. On the other hand, decoding Codecs cannot necessarily be used for encoding. For example, the ".jpg" Codec will be found in both lists, whereas the ".xbmp" Codec will only be found in the list of reading (decoding) Codecs.

## See also 

[Is picture file](../commands/is-picture-file)  
*Pictures*  

## Properties

|  |  |
| --- | --- |
| Command number | 992 |
| Thread safe | yes |


