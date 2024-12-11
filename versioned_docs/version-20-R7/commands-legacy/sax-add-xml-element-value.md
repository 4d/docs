---
id: sax-add-xml-element-value
title: SAX ADD XML ELEMENT VALUE
slug: /commands/sax-add-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Syntax-->**SAX ADD XML ELEMENT VALUE** ( *document* ; *data* {; *} )<!-- END REF-->
<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Reference of open document |
| data | Text, Variable | &#8594;  | Text or variable to insert in the document |
| * | Operator | &#8594;  | If passed: encoding of special characters If omitted: no encoding |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Summary-->In the XML document referenced by *document*, the **SAX ADD XML ELEMENT VALUE** command adds *data* directly without converting them.<!-- END REF--> This command is equivalent, for instance, to inserting an attachment in the body of an e-mail. 

In *data*, you can either pass a character string directly, or a 4D variable. The variable contents will be converted into text before being included in the XML document. If *data* is evaluated to *undefined*, 4D uses an empty string. If you want to encode the contents of *data*, you must use the [BASE64 ENCODE](base64-encode.md) command. In this case, of course, you must passs a BLOB in *data*.

By default, the command encodes special characters (< > ” ’...) contained in the *data* parameter unless you have disabled this mechanism for the current process using the [XML SET OPTIONS](xml-set-options.md) command by passing the XML raw data value to the XML string encoding option. For example:  

```4d
 XML SET OPTIONS($docRef;XML string encoding;XML raw data)
```

  
In this context, to force the encoding of special parameters when calling **SAX ADD XML ELEMENT VALUE**, you must pass the optional *\** parameter. 

In order for this command to operate correctly, an element must be open. Otherwise, an error will be generated.

#### Example 

This example inserts the *whitepaper.pdf* file into the open XML element:

```4d
 var vBMyBLOB : Blob
 DOCUMENT TO BLOB("c:\\whitepaper.pdf";vBMyBLOB)
 SAX ADD XML ELEMENT VALUE($DocRef;vBMyBLOB)
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1; otherwise, it is set to 0 and an error is generated. 

#### See also 

[SAX GET XML ELEMENT VALUE](sax-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 855 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


