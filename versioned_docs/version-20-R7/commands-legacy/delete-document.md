---
id: delete-document
title: DELETE DOCUMENT
slug: /commands/delete-document
displayed_sidebar: docs
---

<!--REF #_command_.DELETE DOCUMENT.Syntax-->**DELETE DOCUMENT** ( *document* )<!-- END REF-->
<!--REF #_command_.DELETE DOCUMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document name or Full document pathname |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE DOCUMENT.Summary-->The **DELETE DOCUMENT** command deletes the document whose name you pass in *document*.<!-- END REF-->

If the document name or the entered path name is incorrect, an error is generated. 

If the document is open when the command is called, the result depends on the OS:

* on Windows, an error is generated,
* on macOS, no error is generated and the document is deleted.

**DELETE DOCUMENT** doesn’t accept an empty string argument for *document*. If an empty string is used, the Open File dialog box is not displayed and an error is generated.

**WARNING:** **DELETE DOCUMENT** can delete any file on a disk. This includes documents created with other applications as well as the applications themselves. **DELETE DOCUMENT** should be used with extreme caution. Deleting a document is a permanent operation and cannot be undone.

#### Example 1 

The following example deletes the document named Note:

```4d
 DELETE DOCUMENT("Note") // Delete the document
```

#### Example 2 

See example for the [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md) command.

#### System variables and sets 

Deleting a document sets the OK system variable to 1\. If **DELETE DOCUMENT** can’t delete the document, the OK system variable is set to 0.

#### See also 

[Test path name](test-path-name.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 159 |
| Thread safe | &check; |
| Modifies variables | OK, error |


