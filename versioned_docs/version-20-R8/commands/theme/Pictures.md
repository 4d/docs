---
id: Pictures
title: Pictures
---
||
|---|
|[**BLOB TO PICTURE** ( *pictureBlob* ; *picture* {; *codec*} )](../../commands-legacy/blob-to-picture)<br/>The **BLOB TO PICTURE** command inserts a picture stored in a BLOB into a 4D picture variable or field, regardless its original format.|
|[**COMBINE PICTURES** ( *resultingPict* ; *pict1* ; *operator* ; *pict2* {; *horOffset* ; *vertOffset*} )](../../commands-legacy/combine-pictures)<br/>The **COMBINE PICTURES** command combines the *pict1* and *pict2* pictures in *operator* mode in order to produce a third, *resultingPict*.|
|[**CONVERT PICTURE** ( *picture* ; *codec* {; *compression*} )](../../commands-legacy/convert-picture)<br/>The **CONVERT PICTURE** command converts *picture* into a new type.|
|[**CREATE THUMBNAIL** ( *source* ; *dest* {; *width* {; *height* {; *mode* {; *depth*}}}} )](../../commands-legacy/create-thumbnail)<br/>The **CREATE THUMBNAIL** command returns a thumbnail from a given source picture.|
|[**Equal pictures** ( *picture1* ; *picture2* ; *mask* ) : Boolean](../../commands-legacy/equal-pictures)<br/>The **Equal pictures** command precisely compares both the dimensions and the contents of two pictures.|
|[**Get picture file name** ( *picture* ) : Text](../../commands-legacy/get-picture-file-name)<br/>The **Get picture file name** command returns the current default name of the picture passed as parameter.|
|[**GET PICTURE FORMATS** ( *picture* ; *codecIDs* )](../../commands-legacy/get-picture-formats)<br/>The **GET PICTURE FORMATS** command returns an array of all the codec IDs (picture formats) contained in the *picture* passed as parameter.|
|[**GET PICTURE FROM LIBRARY** ( picRef | picName ; *picture* )](../../commands-legacy/get-picture-from-library)<br/>The **GET PICTURE FROM LIBRARY** command returns in the *picture* parameter the Picture Library graphic whose reference number is passed in *picRef* or whose name is passed in *picName*.|
|[**GET PICTURE KEYWORDS** ( *picture* ; *arrKeywords* {; *} )](../../commands-legacy/get-picture-keywords)<br/>The **GET PICTURE KEYWORDS** command returns, in the *arrKeywords* array, the list of keywords associated with the picture passed as parameter.|
|[**GET PICTURE METADATA** ( *picture* ; *metaName* ; *metaContents* {; *metaName2* ; *metaContents2* ; ... ; *metaNameN* ; *metaContentsN*} )](../../commands-legacy/get-picture-metadata)<br/>The **GET PICTURE METADATA** command can be used to read the contents of the metadata (or meta-tags) found in *picture* (4D picture field or variable).|
|[**Is picture file** ( *filePath* {; *} ) : Boolean](../../commands-legacy/is-picture-file)<br/>The Is picture file command tests the file designated by the *filePath* parameter and returns True if it is a valid picture file.|
|[**PICTURE CODEC LIST** ( *codecArray* {; *namesArray*}{; *} )](../../commands-legacy/picture-codec-list)<br/>The **PICTURE CODEC LIST** command fills the *codecArray* array with the list of picture Codec IDs that are available on the machine where it is executed.|
|[**PICTURE LIBRARY LIST** ( *picRefs* ; *picNames* )](../../commands-legacy/picture-library-list)<br/>The **PICTURE LIBRARY LIST** command returns the reference numbers and names of the pictures currently stored in the Picture Library of the database.|
|[**PICTURE PROPERTIES** ( *picture* ; *width* ; *height* {; *hOffset* {; *vOffset* {; *mode*}}} )](../../commands-legacy/picture-properties)<br/>The PICTURE PROPERTIES command returns information about the picture you pass in *picture*.|
|[**Picture size** ( *picture* ) : Integer](../../commands-legacy/picture-size)<br/>Picture size returns the size of *picture* in bytes.|
|[**PICTURE TO BLOB** ( *picture* ; *pictureBlob* ; *codec* )](../../commands-legacy/picture-to-blob)<br/>The **PICTURE TO BLOB** command converts a picture stored in a 4D variable or field to another format and places the resulting picture in a BLOB.|
|[**READ PICTURE FILE** ( *fileName* ; *picture* {; *} )](../../commands-legacy/read-picture-file)<br/>The **READ PICTURE FILE** command opens the picture saved in the *fileName* disk file and loads it in the *picture* 4D field or variable.|
|[**REMOVE PICTURE FROM LIBRARY** ( picRef | picName )](../../commands-legacy/remove-picture-from-library)<br/>The REMOVE PICTURE FROM LIBRARY command removes from the Picture Library the picture whose reference number is passed in *picRef* or whose name is passed in *picName*.|
|[**SET PICTURE FILE NAME** ( *picture* ; *fileName* )](../../commands-legacy/set-picture-file-name)<br/>The **SET PICTURE FILE NAME** command sets or changes the default file name for the picture passed as parameter.|
|[**SET PICTURE METADATA** ( *picture* ; *metaName* ; *metaContents* {; *metaName2* ; *metaContents2* ; ... ; *metaNameN* ; *metaContentsN*} )](../../commands-legacy/set-picture-metadata)<br/>The SET PICTURE METADATA command lets you set or modify the contents of the metadata (or meta-tags) found in the *picture* (4D picture field or variable), when they are modifiable.|
|[**SET PICTURE TO LIBRARY** ( *picture* ; *picRef* ; *picName* )](../../commands-legacy/set-picture-to-library)<br/>The **SET PICTURE TO LIBRARY** command creates a new picture or replaces a picture in the Picture Library.|
|[**TRANSFORM PICTURE** ( *picture* ; *operator* {; *param1* {; *param2* {; *param3* {; *param4*}}}} )](../../commands-legacy/transform-picture)<br/>The TRANSFORM PICTURE command applies a transformation of the *operator* type to the picture passed in the *picture* parameter.|
|[**WRITE PICTURE FILE** ( *fileName* ; *picture* {; *codec*} )](../../commands-legacy/write-picture-file)<br/>The **WRITE PICTURE FILE** command saves the picture passed in the *picture* parameter in the defined *codec* to disk.|
