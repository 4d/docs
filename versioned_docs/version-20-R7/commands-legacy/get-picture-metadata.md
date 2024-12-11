---
id: get-picture-metadata
title: GET PICTURE METADATA
slug: /commands/get-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE METADATA.Syntax-->**GET PICTURE METADATA** ( *picture* ; *metaName* ; *metaContents* {; *metaName2* ; *metaContents2* ; ... ; *metaNameN* ; *metaContentsN*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE METADATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture whose metadata you want to get |
| metaName | Text | &#8594;  | Name or path of block to get |
| metaContents | Variable | &#8592; | Metadata contents |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE METADATA.Summary-->The **GET PICTURE METADATA** command can be used to read the contents of the metadata (or meta-tags) found in *picture* (4D picture field or variable).<!-- END REF--> For more information about metadata, please refer to the description of the [SET PICTURE METADATA](set-picture-metadata.md) command.

In the *metaName* parameter, pass a string specifying the type of metadata to retrieve. You can pass:

* a constant from the *Picture Metadata Names* theme containing a tag path,
* the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),
* an empty string ("").

Pass the variable intended to receive the metadata in the *metaContents* parameter. 

* If you passed a tag path in *metaName*, the *metaContents* parameter will directly contain the value to get. The value will be converted to the type of the variable (if the variable type is not defined, the Text type is used by default). Variables of the Text type will be formatted in XML (XMP standard). You can pass an array when the metadata contains more than one value (this is the case, more particularly, for the IPTC Keywords tags).
* If you passed a block name or an empty string in *metaName*, the *metaContents* parameter must be a valid XML DOM element reference. In this case, the contents of the designated block (or all the blocks if you passed an empty string in *metaName*) is recopied into the element referenced.

#### Example 1 

Use of DOM tree structures

```4d
 $xml:=DOM Create XML Ref("Root") //Creation of an XML DOM tree
 
  //Reception of TIFF metadata
 $_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")
 GET PICTURE METADATA(vPicture;"TIFF";$_Xml_TIFF)
 
  //Reception of GPS metadata
 $_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")
 GET PICTURE METADATA(vPicture;"GPS";$_Xml_GPS)
```

#### Example 2 

Use of variables

```4d
 var $dateAsDate : Date
 GET PICTURE METADATA(vPicture;TIFF date time;$dateAsDate)
  //only returns the date since $dateAsDate is of the Date type
 
 var $dateAsText : Text
 GET PICTURE METADATA(vPicture;TIFF date time;$dateAsText)
  //only returns the date but in XML format
 
 C_INTEGER($urgency)
 GET PICTURE METADATA(vPicture;IPTC urgency;$urgency)
```

#### Example 3 

Reception of tags with multiple values in arrays

```4d
 ARRAY TEXT($tTkeywords;0)
 GET PICTURE METADATA(vPicture;IPTC keywords;$tTkeywords)
```

After execution of the command, arrTkeywords contains for example:   

```4d
 $arrTkeywords{1}="France"
 $arrTkeywords{2}="Europe"
```

#### Example 4 

Reception of tags with multiple values in a Text variable

```4d
 var $vTwords;0 : Text
 GET PICTURE METADATA(vPicture;IPTC keywords;$vTwords)
```

After execution of the command, *vTwords* contains for example "France;Europe".

#### System variables and sets 

The *OK* system variable returns 1 if the retrieval of the metadata has proceeded correctly and 0 if an error occurs or if at least one of the tags is not found. In all cases, the any values that can be read are returned.

#### See also 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
*Picture Metadata Names*  
*Picture Metadata Values*  
[SET PICTURE METADATA](set-picture-metadata.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1122 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


