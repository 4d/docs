---
id: test-path-name
title: Test path name
slug: /commands-legacy/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *pathname* ) -> Function result<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pathname | String | &#x1F852; | Pathname to directory, folder or document |
| Function result | Longint | &#x1F850; | 1, pathname refers to an existing document 0, pathname refers to an existing directory or folder <0, invalid pathname, OS file manager error code |

<!-- END REF-->

#### Description 

<!--REF #_command_.Test path name.Summary-->The **Test path name** function checks if a document or folder whose name or pathname you pass in *pathname* is present on the disk.<!-- END REF--> You can pass either a relative or absolute pathname, expressed in the syntax of the current system.

If a document is found, **Test path name** returns 1\. If a folder found, **Test path name** returns 0.

The following predefined constants are provided by 4D:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is a document | Longint | 1     |
| Is a folder   | Longint | 0     |

If no document nor folder is found, **Test path name** returns a negative value (i.e. -43 for File not found).

#### Example 

The following tests if the document “Journal” is present in the folder of the database, then creates it if it was not found: 

```4d
 If(Test path name("Journal")#Is a document)
    $vhDocRef:=Create document("Journal")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

#### See also 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Create document](create-document.md)  
[CREATE FOLDER](create-folder.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  