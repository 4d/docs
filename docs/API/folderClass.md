---
id: folderClass
title: Folder 
---

`Folder` objects are created with the [`Folder`](https://doc.4d.com/4Dv18R4/4D/18-R4/Folder.301-4982248.en.html) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### Example

The following example creates a "John Smith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\"; fk platform path)
```

## Summary

||
|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
|[<!-- INCLUDE #folder.create().Syntax -->](#create-)| 
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folder.create().Summary -->|
|[<!-- INCLUDE #folder.createAlias().Syntax -->](#createalias-) |
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folder.createAlias().Summary --> |
|[<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
|[<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
|[<!-- INCLUDE #folder.delete().Syntax -->](#delete-) |
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folder.delete().Summary -->|
|[<!-- INCLUDE #directory.exists.Syntax -->](#exists)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
|[<!-- INCLUDE #directory.extension.Syntax -->](#extension)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
|[<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
|[<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
|[<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
|[<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
|[<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
|[<!-- INCLUDE #directory.isFolder.Syntax -->](#ifFolder)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
|[<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
|[<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
|[<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
|[<!-- INCLUDE #directory.name.Syntax -->](#name)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
|[<!-- INCLUDE #directory.original.Syntax -->](#original)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
|[<!-- INCLUDE #directory.parent.Syntax -->](#parent)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
|[<!-- INCLUDE #directory.path.Syntax -->](#path)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
|[<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
|[<!-- INCLUDE #folder.moveTo().Syntax -->](#moveto-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folder.moveTo().Summary -->|
|[<!-- INCLUDE #folder.rename().Syntax -->](#rename-)|
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #folder.rename().Summary -->|


---


<!-- INCLUDE directory.copyTo().Desc -->

---

<!-- INCLUDE folder.create().Desc -->

---

<!-- INCLUDE folder.createAlias().Desc -->

---

<!-- INCLUDE directory.creationDate.Desc -->

---

<!-- INCLUDE directory.creationTime.Desc -->

---

<!-- INCLUDE folder.delete().Desc -->

---

<!-- INCLUDE directory.exists.Desc -->

---

<!-- INCLUDE directory.extension.Desc -->

---

<!-- INCLUDE directory.file().Desc -->

---

<!-- INCLUDE directory.files().Desc -->

---

<!-- INCLUDE directory.folder().Desc -->

---

<!-- INCLUDE directory.folders().Desc -->

---

<!-- INCLUDE directory.fullName.Desc -->

---

<!-- INCLUDE directory.getIcon().Desc -->

---

<!-- INCLUDE directory.hidden.Desc -->

---


<!-- INCLUDE directory.isAlias.Desc -->

---


<!-- INCLUDE directory.isFile.Desc -->

---


<!-- INCLUDE directory.isFolder.Desc -->

---


<!-- INCLUDE directory.isPackage.Desc -->

---


<!-- INCLUDE directory.modificationDate.Desc -->

---


<!-- INCLUDE directory.modificationTime.Desc -->

---


<!-- INCLUDE folder.moveTo().Desc -->

---


<!-- INCLUDE directory.name.Desc -->

---


<!-- INCLUDE directory.original.Desc -->

---


<!-- INCLUDE directory.parent.Desc -->

---


<!-- INCLUDE directory.path.Desc -->

---


<!-- INCLUDE directory.platformPath.Desc -->

---


<!-- INCLUDE folder.rename().Desc -->





