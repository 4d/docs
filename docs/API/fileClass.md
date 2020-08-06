---
id: fileClass
title: File 
---


`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### Example

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

## Functions & Properties

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #file.create().Syntax -->](#create-)| 
|<!-- INCLUDE #file.create().Summary -->|
|[<!-- INCLUDE #file.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #file.createAlias().Summary -->|
|[<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)|
|<!-- INCLUDE #document.creationDate.Summary -->|
|[<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)|
|<!-- INCLUDE #document.creationTime.Summary -->|
|[<!-- INCLUDE #file.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #file.delete().Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](#exists)|
|<!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](#extension)|
|<!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](#fullname)|
|<!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent-)|
|<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext-)|
|<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](#hidden)|
|<!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)|
|<!-- INCLUDE #document.isAlias.Summary -->|
|[<!-- INCLUDE #document.isFile.Syntax -->](#isfile)|
|<!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](#ifFolder)|
|<!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)|
|<!-- INCLUDE #document.isWritable.Summary -->|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)|
|<!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)|
|<!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #file.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #file.moveTo().Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](#name)|
|<!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](#original)|
|<!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](#parent)|
|<!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](#path)|
|<!-- INCLUDE #document.path.Summary -->|
|[<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)|
|<!-- INCLUDE #document.platformPath.Summary -->|
|[<!-- INCLUDE #file.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #file.rename().Summary -->|
|[<!-- INCLUDE #file.setContent().Syntax -->](#setcontent-)|
|<!-- INCLUDE #file.setContent().Summary -->|
|[<!-- INCLUDE #file.setText().Syntax -->](#settext-)|
|<!-- INCLUDE #file.setText().Summary -->|
|[<!-- INCLUDE #document.size.Syntax -->](#size)|
|<!-- INCLUDE #document.size.Summary -->|




<!-- INCLUDE document.copyTo().Desc -->

<!-- INCLUDE file.create().Desc -->

<!-- INCLUDE file.createAlias().Desc -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- INCLUDE file.delete().Desc -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- INCLUDE file.moveTo().Desc -->

<!-- INCLUDE document.name.Desc -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- INCLUDE file.rename().Desc -->

<!-- INCLUDE file.setContent().Desc -->

<!-- INCLUDE file.setText().Desc -->

<!-- INCLUDE document.size.Desc -->



