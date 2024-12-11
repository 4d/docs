---
id: document-to-text
title: Document to text
slug: /commands/document-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Document to text.Syntax-->**Document to text** ( *fileName* {; *charSet* {; *breakMode*}} ) : Text<!-- END REF-->
<!--REF #_command_.Document to text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | Document name or Pathname to document |
| charSet | Text, Integer | &#8594;  | Name or Number of character set |
| breakMode | Integer | &#8594;  | Processing mode for line breaks |
| Function result | Text | &#8592; | Text from the document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Document to text.Summary-->The **Document to text** command lets you retrieve the contents of a file directly on disk in a 4D text variable or text field.<!-- END REF-->

In *fileName*, pass the name or pathname of the file to be read. The file must exist on the disk, otherwise an error is generated. You can pass:

* just the file name, for example "myFile.txt": in this case, the file must be located next to the structure file of the application.
* a pathname relative to the structure file of the application, for example "\\\\docs\\\\myFile.txt" under Windows or "/docs/myFile.txt" under macOS.
* an absolute pathname, for example "c:\\\\app\\\\docs\\\\myFile.txt" under Windows or "MacHD/docs/myFile.txt" under macOS.

In *charSet*, you pass the character set to be used for reading the contents. You can pass a string containing the standard set name (for example “ISO-8859-1” or “UTF-8”) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the [CONVERT FROM TEXT](convert-from-text.md) command.

If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in *charSet* (this parameter is then ignored). 

If the document does not contain a BOM and if the *charSet* parameter is omitted, by default 4D uses the following character sets:

* under Windows: ANSI
* under OS X: MacRoman

In *breakMode*, you can pass a longint indicating the processing to apply to end-of-line characters in the document. You can pass one of the following constants, found in the "*System Documents*" theme:

| Constant                    | Type    | Value | Comment                                                                                                                                                        |
| --------------------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Integer | 0     | No processing                                                                                                                                                  |
| Document with CR            | Integer | 3     | Line breaks are converted to CR (carriage return), the default Classic Mac OS format.                                                                          |
| Document with CRLF          | Integer | 2     | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format.                                                                   |
| Document with LF            | Integer | 4     | Line breaks are converted to LF (line feed), the default Unix and macOS format.                                                                                |
| Document with native format | Integer | 1     | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows |

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Compatibility Note**: compatibility options are available for EOL and BOM management. See *Compatibility page*.

**Note:** This command does not modify the OK variable. In case of failure, an error is generated that you can intercept using a method installed by the [ON ERR CALL](on-err-call.md) command.

#### Example 

Given the following text document (fields are separated by tabs):

```RAW
id    name    price    vat3    4D Tags    99    19.6
```

When you execute this code:

```4d
 $Text:=Document to text("products.txt")
```

... you get:

```4d
  // $Text = "id\tname\tprice\tvat\r\n3\t4D Tags\t99 \t19.6"
  // \t = tab
  // \r = CR
```

#### See also 

*System Documents*  
[TEXT TO DOCUMENT](text-to-document.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1236 |
| Thread safe | &check; |
| Forbidden on the server ||


