---
id: open-document
title: Open document
slug: /commands/open-document
displayed_sidebar: docs
---

<!--REF #_command_.Open document.Syntax-->**Open document** ( *document* {; *fileType*}{; *mode*} ) : DocRef<!-- END REF-->
<!--REF #_command_.Open document.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document name or Full document pathname or Empty string for standard file dialog box |
| fileType | Text | &#8594;  | List of types of documents to be screened, or "*" to not screen the documents |
| mode | Integer | &#8594;  | Document’s opening mode |
| Function result | DocRef | &#8592; | Document reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open document.Summary-->The **Open document** command opens the document whose name or pathname you pass in *document*.<!-- END REF--> 

If you pass an empty string in *document*, the Open File dialog box is presented, and you then select the document to be open. If you cancel the dialog, no document is opened; **Open document** returns a null DocRef and sets the OK variable to 0.

* If the document is correctly opened, **Open document** returns its document reference number and sets the OK variable to 1\.
* If the document is already open in Read mode and the *mode* parameter is omitted, **Open document** opens the document in Read/Write mode by default and sets the OK variable to 1.
* If the document is already open in Read/Write mode and you try to open it in Write mode, an error (-43) is generated. However, you can open it in Read only mode, then the OK variable is set to 1.
* If the document does not exist, an error is generated.

In the *fileType* parameter, pass the type(s) of file(s) that can be selected in the opening dialog box. You can pass a list of several types separated by a ; (semi-colon). For each type set, an item will be added to the menu used for choosing the type in the dialog box. 

Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTIs are defined by Apple in order to meet standardization needs for file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, refer to the *Introduction to Uniform Type Identifiers Overview page* in the *developer.apple.com* web site. 

Under Windows, you can also pass a standard Mac OS file type — 4D makes the correspondence internally — or file extensions (.txt, .exe, etc.). Note that under Windows, the user can “force” the display of all file types by entering \*.\* in the dialog box. However, in this case, 4D will carry out an additional check of the selected file types: if the user selects an unauthorized file type, the command returns an error. 

If you do not want to restrict the displayed files to one or more types, pass the "\*" (star) string or ".\*" in *fileType*. 

The optional *mode* parameter allows you to define how *document* is to be opened. Four different open file modes are possible. 4D offers the following predefined constants, located in the "*System Documents*" theme:

| Constant       | Type    | Value |
| -------------- | ------- | ----- |
| Get Pathname   | Integer | 3     |
| Read and Write | Integer | 0     |
| Read Mode      | Integer | 2     |
| Write Mode     | Integer | 1     |

If a document is open, **Open document** initially sets the file position at the beginning of the document while [Append document](append-document.md) sets it at the end of the document.

Once you have opened a document, you can read and write in the document using the [RECEIVE PACKET](receive-packet.md) and [SEND PACKET](send-packet.md) commands that you can combine with the [Get document position](get-document-position.md) and [SET DOCUMENT POSITION](set-document-position.md) commands in order to directly access any part of the document.

Do not forget to eventually call [CLOSE DOCUMENT](close-document.md) for the document.

#### Example 1 

The following example opens an existing document called Note, writes the string "Good-bye" into it, and closes the document. Any existing content in the document will be overwritten: 

```4d
 var vhDoc : Time
 vhDoc:=Open document("Note.txt";Read and Write) //Open a document called Note
 If(OK=1)
    SEND PACKET(vhDoc;"Good-bye") //Write one word into the document
    CLOSE DOCUMENT(vhDoc) //Close the document
 End if
```

#### Example 2 

You can read a document even if it is already open in write mode:

```4d
 vDoc:=Open document("PassFile";"TEXT") // The file is open
  // Before the file is closed, it is possible to consult it in read-only mode:
 vRef:=Open document("PassFile";"TEXT";Read Mode)
```

#### System variables and sets 

If the document is correctly opened, the OK system variable is set to 1; otherwise, it is set to 0\. After the call, the Document system variable contains the full name of the document.   
If you call **Open document** with a mode of 3, the function returns ?00:00:00? (no document reference). The document is not opened but the Document and OK system variables are updated:

* OK is equal to 1.
* Document contains the full pathname and the name of *document*.

**Note:** If you pass an empty string in *document*, an open file dialog box appears. If the user chooses a document and clicks the OK button, *document* is set to the path of the document the user selected and OK is set to 1\. If the user clicked the Cancel button, OK is set to 0.

#### See also 

[Append document](append-document.md)  
[Create document](create-document.md)  