---
id: sax-add-xml-cdata
title: SAX ADD XML CDATA
slug: /commands/sax-add-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML CDATA.Syntax-->**SAX ADD XML CDATA** ( *document* ; *data* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML CDATA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| data | Blob, Text | &#8594;  | Text or BLOB to insert in the document between CData tags |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML CDATA.Summary-->In the XML document referenced by *document*, the SAX ADD XML CDATA command adds *data* of the text or BLOB type.<!-- END REF--> This *data* will be automatically framed between the *<!\[CDATA\[* and *\]\]> tags.*

The text included in a CData section is ignored by the XML interpreter. 

If you want to encode the contents of data, you must use the [BASE64 ENCODE](base64-encode.md) command. In this case, of course, you must pass a BLOB in *data*. 

In order for this command to operate correctly, an element must be open. Otherwise, an error will be generated. 

#### Example 

You want to insert the following lines in your XML document:

```XML
function matchwo(a,b)
{
if (a < b && a < 0) then
      {
      return 1
      }
else
      {
      return 0
      }
}
```

To do this, you just need to execute the following code:

```4d
 var vtMytext : Text
 ... // place the text in the vtMytext variable here
 SAX ADD XML CDATA($DocRef;vtMytext)
```

The result will thus be:

```XML
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
   {
   return 1
   }
else
   {
   return 0
   }
}
]]>
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0.

#### See also 

[SAX GET XML CDATA](sax-get-xml-cdata.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 856 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


