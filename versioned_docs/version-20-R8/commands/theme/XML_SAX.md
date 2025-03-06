---
id: XML_SAX
title: XML SAX
---
||
|---|
|[**SAX ADD PROCESSING INSTRUCTION** ( *document* ; *statement* )](../../commands-legacy/sax-add-processing-instruction)<br/>In the XML document referenced by *document*, the SAX ADD PROCESSING INSTRUCTION command adds an XML processing *statement*.|
|[**SAX ADD XML CDATA** ( *document* ; *data* )](../../commands-legacy/sax-add-xml-cdata)<br/>In the XML document referenced by *document*, the SAX ADD XML CDATA command adds *data* of the text or BLOB type.|
|[**SAX ADD XML COMMENT** ( *document* ; *comment* )](../../commands-legacy/sax-add-xml-comment)<br/>The SAX ADD XML COMMENT command adds a *comment* in the XML document referenced by *document*.|
|[**SAX ADD XML DOCTYPE** ( *document* ; *docType* )](../../commands-legacy/sax-add-xml-doctype)<br/>The SAX ADD XML DOCTYPE command adds a DocType statement set by the *docType* parameter in the XML document referenced by *document*.|
|[**SAX ADD XML ELEMENT VALUE** ( *document* ; *data* {; *} )](../../commands-legacy/sax-add-xml-element-value)<br/>In the XML document referenced by *document*, the **SAX ADD XML ELEMENT VALUE** command adds *data* directly without converting them.|
|[**SAX CLOSE XML ELEMENT** ( *document* )](../../commands-legacy/sax-close-xml-element)<br/>The SAX CLOSE XML ELEMENT command writes the statements necessary for closing the last element opened using the [SAX OPEN XML ELEMENT](sax-open-xml-element.md) command in the XML document referenced by *document*

The use of this command is optional.|
|[**SAX GET XML CDATA** ( *document* ; *value* )](../../commands-legacy/sax-get-xml-cdata)<br/>The **SAX GET XML CDATA** command gets the CDATA *value* of an XML element that exists in the XML document referenced in the *document* parameter.|
|[**SAX GET XML COMMENT** ( *document* ; *comment* )](../../commands-legacy/sax-get-xml-comment)<br/>The **SAX GET XML COMMENT** command returns a *comment* if an XML Comment SAX event is generated in the XML document referenced in the *document* parameter.|
|[**SAX GET XML DOCUMENT VALUES** ( *document* ; *encoding* ; *version* ; *standalone* )](../../commands-legacy/sax-get-xml-document-values)<br/>The **SAX GET XML DOCUMENT VALUES** command gets basic information from the XML header of the XML document referenced in the *document* parameter.|
|[**SAX GET XML ELEMENT** ( *document* ; *name* ; *prefix* ; *attrNames* ; *attrValues* )](../../commands-legacy/sax-get-xml-element)<br/>The **SAX GET XML ELEMENT** command returns various information about the element *name* that is present in the XML document reference in the *document* parameter.|
|[**SAX GET XML ELEMENT VALUE** ( *document* ; *value* )](../../commands-legacy/sax-get-xml-element-value)<br/>The **SAX GET XML ELEMENT VALUE** command allows you to get the *value* of an XML element that exists in the XML document referenced in the *document* parameter.|
|[**SAX GET XML ENTITY** ( *document* ; *name* ; *value* )](../../commands-legacy/sax-get-xml-entity)<br/>The **SAX GET XML ENTITY** command allows you to get the *name* and *value* of an XML entity that exists in the XML document referenced in the *document* parameter.|
|[**SAX Get XML node** ( *document* ) : Integer](../../commands-legacy/sax-get-xml-node)<br/>The **SAX Get XML node** command returns a long integer that indicates the type of SAX event returned while the XML document referenced in *document* is parsed.|
|[**SAX GET XML PROCESSING INSTRUCTION** ( *document* ; *name* ; *value* )](../../commands-legacy/sax-get-xml-processing-instruction)<br/>The **SAX GET XML PROCESSING INSTRUCTION** command returns the *name* and *value* of the XML instruction processed in the XML document referenced in the *document* parameter.|
|[**SAX OPEN XML ELEMENT** ( *document* ; *tag* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )](../../commands-legacy/sax-open-xml-element)<br/>The **SAX OPEN XML ELEMENT** command adds a new element in the XML document referenced by *document* as well as, optionally, attributes and their values.|
|[**SAX OPEN XML ELEMENT ARRAYS** ( *document* ; *tag* {; *attribNamesArray* ; *attribValuesArray*} {; *attribNamesArray2* ; *attribValuesArray2* ; ... ; *attribNamesArrayN* ; *attribValuesArrayN*} )](../../commands-legacy/sax-open-xml-element-arrays)<br/>The **SAX OPEN XML ELEMENT ARRAYS** command is used to add a new element in the XML document whose reference is passed in *document* as well as, optionally, attributes and their values in the form of arrays.|
|[**SAX SET XML DECLARATION** ( *document* ; *encoding* {; *standalone*} )](../../commands-legacy/sax-set-xml-declaration)<br/>The **SAX SET XML DECLARATION** command initializes the XML document referenced in *document* using the specified *encoding*.|
