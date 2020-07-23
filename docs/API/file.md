---
id: file
title: File 
---

## Overview

The `File` class provides properties and methods that allow you to create and manipulate `File` objects.

`File` objects are created with the `File` command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the [`File`](https://doc.4d.com/4Dv18R4/4D/18-R4/File.301-4982190.en.html) command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the <!-- INCLUDE fileMethods.create --> method.


## `File` object properties

A `File` object contains the following properties and methods:

<!-- INCLUDE fileProperties.properties -->


## `File` Methods 



|Name|Syntax|Description|
|----|-----|------|
|<!-- INCLUDE fileMethods.copyTo -->|<!-- INCLUDE fileMethods.copyTo.Syntax -->|<!-- INCLUDE fileMethods.copyTo.Summary -->|
|<!-- INCLUDE fileMethods.create -->|<!-- INCLUDE fileMethods.create.Syntax -->|<!-- INCLUDE fileMethods.create.Summary -->|
|<!-- INCLUDE fileMethods.createAlias -->|<!--INCLUDE fileMethods.createAlias.Syntax -->|<!-- INCLUDE fileMethods.createAlias.Summary -->|
|<!-- INCLUDE fileMethods.delete -->|<!--INCLUDE fileMethods.delete.Syntax -->|<!-- INCLUDE fileMethods.delete.Summary -->|
|<!-- INCLUDE fileMethods.getContent -->|<!--INCLUDE fileMethods.getContent.Syntax -->|<!-- INCLUDE fileMethods.getContent.Summary -->|
|<!-- INCLUDE fileMethods.getIcon -->|<!--INCLUDE fileMethods.getIcon.Syntax -->|<!-- INCLUDE fileMethods.getIcon.Summary -->|
|<!-- INCLUDE fileMethods.getText -->|<!--INCLUDE fileMethods.getText.Syntax -->|<!-- INCLUDE fileMethods.getText.Summary -->|
|<!-- INCLUDE fileMethods.moveTo -->|<!--INCLUDE fileMethods.moveTo.Syntax -->|<!-- INCLUDE fileMethods.moveTo.Summary -->|
|<!-- INCLUDE fileMethods.rename -->|<!--INCLUDE fileMethods.rename.Syntax -->|<!-- INCLUDE fileMethods.rename.Summary -->|
|<!-- INCLUDE fileMethods.setContent -->|<!--INCLUDE fileMethods.setContent.Syntax -->|<!-- INCLUDE fileMethods.setContent.Summary -->|
|<!-- INCLUDE fileMethods.setText -->|<!--INCLUDE fileMethods.setText.Syntax -->|<!-- INCLUDE fileMethods.setText.Summary -->|


### Example

The following example creates a preferences file in the database folder:

```code4d
C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```




<!-- INCLUDE fileMethods.copyTo.Info -->

<!-- INCLUDE fileMethods.create.Info -->

<!-- INCLUDE fileMethods.createAlias.Info -->

<!-- INCLUDE fileMethods.delete.Info -->

<!-- INCLUDE fileMethods.getContent.Info -->

<!-- INCLUDE fileMethods.getIcon.Info -->

<!-- INCLUDE fileMethods.getText.Info -->

<!-- INCLUDE fileMethods.moveTo.Info -->

<!-- INCLUDE fileMethods.rename.Info -->

<!-- INCLUDE fileMethods.setContent.Info -->

<!-- INCLUDE fileMethods.setText.Info -->



