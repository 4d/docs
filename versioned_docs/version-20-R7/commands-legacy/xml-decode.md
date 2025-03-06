---
id: xml-decode
title: XML DECODE
slug: /commands/xml-decode
displayed_sidebar: docs
---

<!--REF #_command_.XML DECODE.Syntax-->**XML DECODE** ( *xmlValue* ; *4Dvar* )<!-- END REF-->
<!--REF #_command_.XML DECODE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| xmlValue | Text | &#8594;  | Text type value coming from an XML structure |
| 4Dvar | Field, Variable | &#8592; | 4D variable or field receiving the converted XML value |

<!-- END REF-->

#### Description 

<!--REF #_command_.XML DECODE.Summary-->The XML DECODE command converts a value stored as an XML string into a 4D typed value.<!-- END REF--> The conversion is carried out automatically according to the following rules: 

| **Value** | **Examples**                                                                          | Conversion on English system                                                                                                                                                                          |
| --------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number    | <Price>8,5</Price><Price>8.5</Price>                                                  | Real: 8.5                                                                                                                                                                                             |
| Boolean   | <Double>1</Double> <Double>0</Double> or <Double>true</Double> <Double>false</Double> | Boolean: True/False                                                                                                                                                                                   |
| BLOB      | Base64 decoding                                                                       |                                                                                                                                                                                                       |
| Picture   | Base64 decoding + BLOB to picture command                                             |                                                                                                                                                                                                       |
| Dates     | 2009-10-25T01:03:20+01:00                                                             | !10/25/2009! -> Deletion of time part as well as time zone                                                                                                                                            |
| Time      | 2009-10-25T01:03:20+01:00                                                             | ?01:03:20? -> Deletion of date part. *Warning*: time zone is taken into account if different from local time. For example: "2009-10-25T01:03:20+05:00" will be decoded ?21:03:20? in UTC+1 local time |

If the *4Dvar* parameter type is not defined, the text type is used by default. 

#### Example 

Importing data from an XML document in which values are stored as attributes.  
Example of XML document:  
  
```4d
 Repeat
    MyEvent:=SAX Get XML node(DocRef)
 
    Case of
       :(MyEvent=XML Start Element)
          ARRAY TEXT(arrAttrNames;0)
          ARRAY TEXT(arrAttrValues;0)
          SAX GET XML ELEMENT(DocRef;vName;vPrefix;arrAttrNames;arrAttrValues)
          If(vName="CD")
             CREATE RECORD([CD])
             For($i;1;Size of array(arrAttrNames))
                $attrName:=arrAttrNames{$i}
                Case of
                   :($attrName="CD_ID")
                      XML DECODE(arrAttrValues{$i};[CD]CD_ID)
                   :($attrName="Title")
                      [CD]Work:=arrAttrValues{$i}
                   :($attrName="Price")
                      XML DECODE(arrAttrValues{$i};[CD]Price)
                   :($attrName="Date")
                      XML DECODE(arrAttrValues{$i};[CD]Date entered)
                   :($attrName="Duration")
                      XML DECODE(arrAttrValues{$i};[CD]Total_duration)
                   :($attrName="Double")
                      XML DECODE(arrAttrValues{$i};[CD]Double_CD)
                End case
             End for
          End if
          ...
    End case
 Until(MyEvent=XML End Document)
```

#### See also 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1091 |
| Thread safe | &check; |


