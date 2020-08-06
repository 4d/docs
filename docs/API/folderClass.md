---
id: folderClass
title: Folder 
---

## Overview

The `Folder` class provides properties and functions that allow you to create and manipulate `Folder` objects.

### Folders

`Folder` objects are created with the [`Folder`](https://doc.4d.com/4Dv18R4/4D/18-R4/Folder.301-4982248.en.html) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) function.

### ZIP Archives

The `File` class also allows you to create and manipulate 4D ZIP archives (one or more `Folder` objects compressed to be smaller than their original size). These archives are created with a ".zip" extension and can be used to:

*	Save disk space
*	Store data on a removable media device
*	Easily transfer files via mediums which may have size limitations (e.g., email or inter/intranet systems)

4D ZIP folder archives are created and handled with the following 4D commands:

*	[ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html)
*	[ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html)

**Example**

The following example creates a "John Smith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\"; fk platform path)
```




## Properties

A `Folder` object contains the following properties and functions:

<!-- INCLUDE directory.properties -->


## Functions 

|Summary|
|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #directory.copyTo().Summary -->|
|[<!-- INCLUDE #folder.create().Syntax -->](#create-)| 
|<!-- INCLUDE #folder.create().Summary -->|
|[<!-- INCLUDE #folder.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #folder.createAlias().Summary --> |
|[<!-- INCLUDE #folder.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #folder.delete().Summary --> |
|[<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #directory.getIcon().Summary -->|
|[<!-- INCLUDE #folder.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #folder.moveTo().Summary -->|
|[<!-- INCLUDE #folder.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #folder.rename().Summary -->|





<!-- INCLUDE directory.copyTo().Desc -->

<!-- INCLUDE folder.create().Desc -->

<!-- INCLUDE folder.createAlias().Desc -->

<!-- INCLUDE folder.delete().Desc -->

<!-- INCLUDE directory.file().Desc -->

<!-- INCLUDE directory.files().Desc -->

<!-- INCLUDE directory.folder().Desc -->

<!-- INCLUDE directory.folders().Desc -->


<!-- INCLUDE directory.getIcon().Desc -->

<!-- INCLUDE folder.moveTo().Desc -->

<!-- INCLUDE folder.rename().Desc -->





