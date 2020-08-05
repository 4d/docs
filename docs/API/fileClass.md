---
id: fileClass
title: File Class
---

## Overview

The `File` class provides properties and methods that allow you to create and manipulate `File` objects.

`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) method.


## Properties

A `File` object contains the following properties and methods:

<!-- INCLUDE document.properties -->


## Methods 

|Summary|
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #file.create().Syntax -->](#create-)| 
|<!-- INCLUDE #file.create().Summary -->|
|[<!-- INCLUDE #file.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #file.createAlias().Summary --> |
|[<!-- INCLUDE #file.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #file.delete().Summary --> |
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent-)|
|<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext-)|
|<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #file.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #file.moveTo().Summary -->|
|[<!-- INCLUDE #file.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #file.rename().Summary -->|
|[<!-- INCLUDE #file.setContent().Syntax -->](#setcontent-)|
|<!-- INCLUDE #file.setContent().Summary -->|
|[<!-- INCLUDE #file.setText().Syntax -->](#settext-)|
|<!-- INCLUDE #file.setText().Summary -->|



#### Example

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```




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



