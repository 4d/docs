---
id: Resources
title: Resources
---
||
|---|
|[**CLOSE RESOURCE FILE** ( *resFile* )](../../commands-legacy/close-resource-file)<br/>The **CLOSE RESOURCE FILE** command closes the resource file whose reference number is passed in *resFile*.|
|[**Get indexed string** ( *resID* ; *strID* {; *resFile*} ) : Text](../../commands-legacy/get-indexed-string)<br/>The **Get indexed string** command returns: 

* Either one of the strings stored in the string list (“STR#”) resource whose ID is passed in *resID*.|
|[**GET PICTURE RESOURCE** ( *resID* ; *resData* {; *resFile*} )](../../commands-legacy/get-picture-resource)<br/>The **GET PICTURE RESOURCE** command returns in the picture field or variable *resData* the picture stored in the picture (“PICT”) resource whose ID is passed in *resID*.|
|[**GET RESOURCE** ( *resType* ; *resID* ; *resData* {; *resFile*} )](../../commands-legacy/get-resource)<br/>The **GET RESOURCE** command returns in the BLOB field or variable *resData* the contents of the resource whose type and ID is passed in *resType* and *resID*.|
|[**Get resource name** ( *resType* ; *resID* {; *resFile*} ) : Text](../../commands-legacy/get-resource-name)<br/>The **Get resource name** command returns the name of the resource whose type is passed in *resType* and whose ID number is passed in *resID*.|
|[**Get resource properties** ( *resType* ; *resID* {; *resFile*} ) : Integer](../../commands-legacy/get-resource-properties)<br/>The **Get resource properties** command returns the attributes of the resource whose type is passed in *resType* and whose ID number is passed in *resID*.|
|[**Get string resource** ( *resID* {; *resFile*} ) : Text](../../commands-legacy/get-string-resource)<br/>The **Get string resource** command returns the string stored in the string (“STR ”) resource whose ID is passed in *resID*.|
|[**Get text resource** ( *resID* {; *resFile*} ) : Text](../../commands-legacy/get-text-resource)<br/>The **Get text resource** command returns the text stored in the text (“TEXT”) resource whose ID is passed in *resID*.|
|[**Open resource file** ( *resFilename* {; *fileType*} ) : Time](../../commands-legacy/open-resource-file)<br/>The **Open resource file** command opens the resource file whose name or pathname you pass in *resFileName*.|
|[**RESOURCE LIST** ( *resType* ; *resIDs* ; *resNames* {; *resFile*} )](../../commands-legacy/resource-list)<br/>The **RESOURCE LIST** command populates the arrays *resIDs* and *resNames* with the resource IDs and names of the resources whose type is passed in *resType*.|
|[**RESOURCE TYPE LIST** ( *resTypes* {; *resFile*} )](../../commands-legacy/resource-type-list)<br/>The RESOURCE TYPE LIST command populates the array *resTypes* with the resource types of the resources present in the resource files currently open.|
|[**STRING LIST TO ARRAY** ( *resID* ; *strings* {; *resFile*} )](../../commands-legacy/string-list-to-array)<br/>The **STRING LIST TO ARRAY** command populates the array *strings* with:

* Either the strings stored in the string list ("STR#") resource whose ID is passed in *resID*.|
