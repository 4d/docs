---
id: file
title: File 
---

## Overview

The `File` class provides properties and methods that allow you to create and manipulate `File` objects.

`File` objects are created with the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the <!-- INCLUDE #fileMethodsandProperties.create().method --> method.


## Properties

A `File` object contains the following properties and methods:

<!-- INCLUDE #Document.properties -->


## Methods 

|Summary|
|---|
|[<!-- INCLUDE #Document.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #Document.copyTo().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.create().Syntax -->](#create-)| 
|<!-- INCLUDE #fileMethodsandProperties.create().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #fileMethodsandProperties.createAlias().Summary --> |
|[<!-- INCLUDE #fileMethodsandProperties.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #fileMethodsandProperties.delete().Summary --> |
|[<!-- INCLUDE #Document.getContent().Syntax -->](#getcontent-)|
|<!-- INCLUDE #Document.getContent().Summary -->|
|[<!-- INCLUDE #Document.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #Document.getIcon().Summary -->|
|[<!-- INCLUDE #Document.getText().Syntax -->](#gettext-)|
|<!-- INCLUDE #Document.getText().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #fileMethodsandProperties.moveTo().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #fileMethodsandProperties.rename().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.setContent().Syntax -->](#setcontent-)|
|<!-- INCLUDE #fileMethodsandProperties.setContent().Summary -->|
|[<!-- INCLUDE #fileMethodsandProperties.setText().Syntax -->](#settext-)|
|<!-- INCLUDE #fileMethodsandProperties.setText().Summary -->|



#### Example

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```




<!-- INCLUDE #Document.copyTo().Info -->

<!-- INCLUDE #fileMethodsandProperties.create().Info -->

<!-- INCLUDE #fileMethodsandProperties.createAlias().Info -->

<!-- INCLUDE #fileMethodsandProperties.delete().Info -->

<!-- INCLUDE #Document.getContent().Info -->

<!-- INCLUDE #Document.getIcon().Info -->

<!-- INCLUDE #Document.getText().Info -->

<!-- INCLUDE #fileMethodsandProperties.moveTo().Info -->

<!-- INCLUDE #fileMethodsandProperties.rename().Info -->

<!-- INCLUDE #fileMethodsandProperties.setContent().Info -->

<!-- INCLUDE #fileMethodsandProperties.setText().Info -->



