---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *picture* ; *arrKeywords* {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture, Picture | &#8594;  | Picture for which to get associated keywords |
| arrKeywords | Text array | &#8592; | Array containing extracted keywords |
| * | Operator | &#8594;  | If passed = use distinct values |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->The **GET PICTURE KEYWORDS** command returns, in the *arrKeywords* array, the list of keywords associated with the picture passed as parameter.<!-- END REF-->

Only keywords set using **IPTC/Keywords** metadata are taken into account. Other types of metadata are ignored by the command. The command only works with picture types that support this type of metadata (JPEG, TIFF, etc.).

**Note:** Metadata of the IPTC/Keywords type are now indexable in 4D (see the *Design Reference* manual). 

If you pass the *\** parameter, the method only returns "distinct values" of keywords, in other words, a list with no duplicates.

If the picture does not contain keywords or IPTC/Keywords metadata, the command returns an empty array and no error is generated.

**Note:** Results returned by this command can differ according to the current value of the "Consider only non-alphanumeric chars for keywords" database setting (see the [DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)). 

#### See also 

[GET PICTURE METADATA](get-picture-metadata.md)  
[SET PICTURE METADATA](set-picture-metadata.md)  