---
id: fileClass
title: File 
---

## Overview

The `File` class provides properties and functions that allow you to create and manipulate `File` objects.

### Files

`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### ZIP Archives

The `File` class also allows you to create and manipulate 4D ZIP archives (one or more `File` objects compressed to be smaller than their original size). These archives are created with a ".zip" extension and can be used to:

*	Save disk space
*	Store data on a removable media device
*	Easily transfer files via mediums which may have size limitations (e.g., email or inter/intranet systems)

4D ZIP file archives are created and handled with the following 4D commands:

*	[ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html)
*	[ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html)

**Example**

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```



## Properties

A `File` object contains the following properties and functions:

<!-- INCLUDE document.properties -->


## Functions 

|Summary|
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #file.create().Syntax -->](#create-)| 
|<!-- INCLUDE #file.create().Summary --><p><!--INCLUDE file.create().Note -->|
|[<!-- INCLUDE #file.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #file.createAlias().Summary --><p><!--INCLUDE file.createAlias().Note --> |
|[<!-- INCLUDE #file.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #file.delete().Summary --><p><!--INCLUDE file.delete().Note --> |
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent-)|
|<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext-)|
|<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #file.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #file.moveTo().Summary --><p><!--INCLUDE file.moveTo().Note -->|
|[<!-- INCLUDE #file.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #file.rename().Summary --><p><!--INCLUDE file.rename().Note -->|
|[<!-- INCLUDE #file.setContent().Syntax -->](#setcontent-)|
|<!-- INCLUDE #file.setContent().Summary --><p><!--INCLUDE file.setContent().Note -->|
|[<!-- INCLUDE #file.setText().Syntax -->](#settext-)|
|<!-- INCLUDE #file.setText().Summary --><p><!--INCLUDE file.setText().Note -->|






<!-- INCLUDE document.copyTo().Desc -->

<!-- INCLUDE file.create().Desc -->

<!-- INCLUDE file.createAlias().Desc -->

<!-- INCLUDE file.delete().Desc -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE file.moveTo().Desc -->

<!-- INCLUDE file.rename().Desc -->

<!-- INCLUDE file.setContent().Desc -->

<!-- INCLUDE file.setText().Desc -->



