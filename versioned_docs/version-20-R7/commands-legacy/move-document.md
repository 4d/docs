---
id: move-document
title: MOVE DOCUMENT
slug: /commands/move-document
displayed_sidebar: docs
---

<!--REF #_command_.MOVE DOCUMENT.Syntax-->**MOVE DOCUMENT** ( *srcPathname* ; *dstPathname* )<!-- END REF-->
<!--REF #_command_.MOVE DOCUMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| srcPathname | Text | &#8594;  | Full pathname to existing document |
| dstPathname | Text | &#8594;  | Destination pathname |

<!-- END REF-->

#### Description 

<!--REF #_command_.MOVE DOCUMENT.Summary-->The **MOVE DOCUMENT** command moves or renames a document.<!-- END REF-->

You specify the full pathname to the document in *srcPathname* and the new name and/or new location for the document in *dstPathname*.

**Warning:** Using **MOVE DOCUMENT**, you can move a document from and to any directory on the same volume. If you want to move a document between two distinct volumes, use [COPY DOCUMENT](copy-document.md) to “move” the document then delete the original copy of the document using [DELETE DOCUMENT](delete-document.md).

#### Example 1 

The following example renames the document DocName:

```4d
 MOVE DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\NewDocName")
```

#### Example 2 

The following example moves and renames the document DocName:

```4d
 MOVE DOCUMENT("C:\\FOLDER1\\DocName";"C:\\FOLDER2\\NewDocName")
```

#### Example 3 

The following example moves the document DocName:

```4d
 MOVE DOCUMENT("C:\\FOLDER1\\DocName";"C:\\FOLDER2\\DocName")
```

**Note:** In the last two examples, the destination folder *"C:\\\\FOLDER2"* must exist. The MOVE DOCUMENT command only moves a document; it does not create folders.

#### See also 

[COPY DOCUMENT](copy-document.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 540 |
| Thread safe | &check; |
| Modifies variables | OK, error |


