---
id: fileClass
title: File 
---


`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create-) function.

### Example

The following example creates a preferences file in the project folder:

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

## Summary

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #file.create().Syntax -->](#create-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.create().Summary -->|
|[<!-- INCLUDE #file.createAlias().Syntax -->](#createalias-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.createAlias().Summary -->|
|[<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
|[<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
|[<!-- INCLUDE #file.delete().Syntax -->](#delete-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.delete().Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent-)<p><!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->
|[<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](#ifFolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #file.moveTo().Syntax -->](#moveto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.moveTo().Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
|[<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
|[<!-- INCLUDE #file.rename().Syntax -->](#rename-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.rename().Summary -->|
|[<!-- INCLUDE #file.setContent().Syntax -->](#setcontent-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.setContent().Summary -->|
|[<!-- INCLUDE #file.setText().Syntax -->](#settext-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #file.setText().Summary -->|
|[<!-- INCLUDE #document.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|


---

<!-- INCLUDE document.copyTo().Desc -->

---

<!-- INCLUDE file.create().Desc -->

---


<!-- INCLUDE file.createAlias().Desc -->

---


<!-- INCLUDE document.creationDate.Desc -->

---


<!-- INCLUDE document.creationTime.Desc -->

---


<!-- INCLUDE file.delete().Desc -->

---


<!-- INCLUDE document.exists.Desc -->

---


<!-- INCLUDE document.extension.Desc -->

---


<!-- INCLUDE document.fullName.Desc -->

---


<!-- INCLUDE document.getContent().Desc -->

---


<!-- INCLUDE document.getIcon().Desc -->

---


<!-- INCLUDE document.getText().Desc -->

---


<!-- INCLUDE document.hidden.Desc -->

---


<!-- INCLUDE document.isAlias.Desc -->

---


<!-- INCLUDE document.isFile.Desc -->

---


<!-- INCLUDE document.isFolder.Desc -->

---


<!-- INCLUDE document.isWritable.Desc -->

---


<!-- INCLUDE document.modificationDate.Desc -->

---


<!-- INCLUDE document.modificationTime.Desc -->

---


<!-- INCLUDE file.moveTo().Desc -->

---


<!-- INCLUDE document.name.Desc -->

---


<!-- INCLUDE document.original.Desc -->

---


<!-- INCLUDE document.parent.Desc -->

---


<!-- INCLUDE document.path.Desc -->

---


<!-- INCLUDE document.platformPath.Desc -->

---


<!-- INCLUDE file.rename().Desc -->

---


<!-- INCLUDE file.setContent().Desc -->

---


<!-- INCLUDE file.setText().Desc -->

---


<!-- INCLUDE document.size.Desc -->



