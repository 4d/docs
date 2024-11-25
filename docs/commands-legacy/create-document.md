---
id: create-document
title: Create document
slug: /commands/create-document
displayed_sidebar: docs
---

<!--REF #_command_.Create document.Syntax-->**Create document** ( *document* {; *fileType*} ) : Time<!-- END REF-->
<!--REF #_command_.Create document.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document name or Full document pathname or Empty string for standard file dialog box |
| fileType | Text | &#8594;  | List of types of documents to be screened, or "*" to not screen the documents |
| Function result | Time | &#8592; | Document reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Create document.Summary-->The**Create document** command creates a new document and returns its document reference number.<!-- END REF--> 

Pass the name or full pathname of the new document in *document*. If *document* already exists on the disk, it is overwritten. However, if *document* is locked or already open, an error is generated.

If you pass an empty string in *document*, the Save As dialog box appears and you can then enter the name of the document you want to create. If you cancel the dialog, no document is created; **Create document** returns a null DocRef and sets the OK variable to 0.

If the document is correctly created and opened, **Create document** returns its document reference number and sets the OK variable to 1\. The system variable Document is updated and returns the complete access path of the created document.

Whether or not you use the Save As dialog box, **Create document** creates a .TXT (Windows) or TEXT (Macintosh) document by default. If you want to create another type of document, pass the *fileType* parameter.

In the *fileType* parameter, pass the type(s) of file(s) that can be selected in the opening dialog box. You can pass a list of several types separated by a ; (semi-colon). For each type set, an item will be added to the menu used for choosing the type in the dialog box. 

Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTIs are defined by Apple in order to meet standardization needs for file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, refer to the following address: *https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html*. 

Under Windows, you can also pass a standard Mac OS file type — 4D makes the correspondence internally — or file extensions (.txt, .exe, etc.). Note that under Windows, the user can “force” the display of all file types by entering \*.\* in the dialog box. However, in this case, 4D will carry out an additional check of the selected file types: if the user selects an unauthorized file type, the command returns an error. 

If you do not want to restrict the displayed files to one or more types, pass the "\*" (star) string or ".\*" in *fileType*. 

On Windows you pass a Windows file extension or Macintosh file type mapped through the *\_o\_MAP FILE TYPES* mechanism. If you want to create a document without an extension, a document containing several extensions, or a document containing an extension with more than three characters, do not use the *type* parameters and pass the full name in *document* (see example2).

Once you have created and opened a document, you can write and read the document using the [RECEIVE PACKET](receive-packet.md) and [SEND PACKET](send-packet.md) commands that you can combine with the [Get document position](get-document-position.md) and [SET DOCUMENT POSITION](set-document-position.md) commands in order to directly access any part of the document.

Do not forget to eventually call [CLOSE DOCUMENT](close-document.md) for the document.

#### Example 1 

The following example creates and opens a new document called Note, writes the string “Hello” into it, and closes the document:

```4d
 var vhDoc : Time
 vhDoc:=Create document("Note.txt") // Create new document called Note
 If(OK=1)
    SEND PACKET(vhDoc;"Hello") // Write one word in the document
    CLOSE DOCUMENT(vhDoc) // Close the document
 End if
```

#### Example 2 

The following example creates documents with non-standard extensions under Windows:

```4d
 $vtMyDoc:=Create document("Doc.ext1.ext2") //Several extensions
 $vtMyDoc:=Create document("Doc.shtml") //Long extension
 $vtMyDoc:=Create document("Doc.") //No extension (the period "." is mandatory)
```

#### System variables and sets 

If the document has been created correctly, the system variable OK is set to 1 and the system variable Document contains the full pathname and the name of *document*. 

#### See also 

[Append document](append-document.md)  
[Open document](open-document.md)  