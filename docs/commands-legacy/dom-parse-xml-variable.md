---
id: dom-parse-xml-variable
title: DOM Parse XML variable
slug: /commands/dom-parse-xml-variable
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML variable.Syntax-->**DOM Parse XML variable** ( *variable* {; *validation* {; dtd | schema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML variable.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Blob, Text | &#8594;  | Name of the variable |
| validation | Boolean | &#8594;  | True = Validation by the DTD, False = No validation |
| dtd &#124; schema | Text | &#8594;  | Location of the DTD or XML schema |
| Function result | Text | &#8592; | Reference of XML element |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Parse XML variable.Summary-->The DOM Parse XML variable command parses a BLOB or Text type variable containing an XML structure and returns a reference for this variable.<!-- END REF--> The command can validate (or not) the structure via a DTD or an XML schema (XML Schema Definition (XSD) document). 

Pass the name of the BLOB or Text variable containing the XML object in the *variable* parameter. 

The Boolean parameter *validation* indicates whether or not to validate the structure.

* If *validation* equals True, the structure is validated. In this case, the parser attempts to validate the XML structure of the document based either on the DTD or XSD reference included in the document, or via the DTD or XML schema designated by the third parameter when it is passed.
* If *validation* equals False, the structure is not validated.

If you pass True in *validation* and omit the third parameter, the command attempts to validate the XML structure via a DTD or XSD reference found in the structure itself. Validation can be indirect: if the structure contains a reference to a DTD file that itself contains a reference to an XSD file, the command attempts to carry out both validations.

The third parameter indicates a specific DTD or an XML schema for document parsing. If you use this parameter, the command does not take the DTD referred to in the XML document into account. 

**Validation by DTD**  
There are two ways to specify a DTD:

* As a reference. To do this, pass the complete pathname of the new DTD (“dtd” extension) in the *dtd* parameter. If the document indicated does not contain a valid DTD, the *dtd* parameter is ignored and an error is generated.
* Directly in a text. In this case, if the contents of the parameter begin with “<?xml”, 4D will consider that it is the DTD; otherwise, 4D will consider it as a pathname.

**Validation by schema**  
To validate the document via an XML schema, you just need to pass a file or URL with an “xsd” extension instead of a “dtd” one in the third parameter. Validation by XML schema is considered to be more flexible and more powerful than validation by DTD. The language of XSD documents is based on XML language. More particularly, XML schemas support data types. For more information about XML schemas, please refer to the following address: *http://www.w3.org/XML/Schema*.

If validation cannot be performed (no DTD or XSD, incorrect URL, etc.), an error is generated. The Error system variable indicates the error number. You can intercept this error using a method installed by the [ON ERR CALL](on-err-call.md) command.

The command returns a character string (ElementRef) making up the reference in the memory of the document virtual structure. This reference should be used with other XML parsing commands. 

**Important:** Once you no longer have any need for it, remember to call the [DOM CLOSE XML](dom-close-xml.md) command with this reference in order to free up the memory.

#### Example 1 

Opening an XML object located in a 4D Text variable, without validation:

```4d
 var myTextVar : Text
 var vDoc : Time
 var $xml_Struct_Ref : Text
 
 vDoc:=Open document("Document.xml")
 If(OK=1)
    RECEIVE PACKET(vDoc;myTextVar;32000)
    CLOSE DOCUMENT(vDoc)
    $xml_Struct_Ref:=DOM Parse XML variable(myTextVar)
 End if
```

#### Example 2 

Opening an XML document located in a 4D BLOB, without validation:

```4d
 var myBlobVar : Blob
 var $ref_XML_Struct : Text
 
 DOCUMENT TO BLOB(“c:\\import.xml”;myBlobVar)
 $xml_Struct_Ref:=DOM Parse XML variable(myBlobVar)
```

#### System variables and sets 

If the command has been correctly executed, the system variable OK is set to 1\. Otherwise, it is set to 0\. 

#### See also 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML source](dom-parse-xml-source.md)  