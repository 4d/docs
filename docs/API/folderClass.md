---
id: folderClass
title: Folder Class
---

## Overview

The `Folder` class provides properties and methods that allow you to create and manipulate `Folder` objects.

`Folder` objects are created with the [`Folder`](https://doc.4d.com/4Dv18R4/4D/18-R4/Folder.301-4982248.en.html) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `Folder` command to create a new folder, a valid `Folder` object is created but nothing is actually stored on disk until you call the [`create( )`](#create-) method.


## Properties

A `Folder` object contains the following properties and methods:

<!-- INCLUDE document.properties -->


## Methods 

|Summary|
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto-)|
|<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #folder.create().Syntax -->](#create-)| 
|<!-- INCLUDE #folder.create().Summary -->|
|[<!-- INCLUDE #folder.createAlias().Syntax -->](#createalias-) |
|<!-- INCLUDE #folder.createAlias().Summary --> |
|[<!-- INCLUDE #folder.delete().Syntax -->](#delete-) |
|<!-- INCLUDE #folder.delete().Summary --> |
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent-)|
|<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](#geticon-)|
|<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext-)|
|<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #folder.moveTo().Syntax -->](#moveto-)|
|<!-- INCLUDE #folder.moveTo().Summary -->|
|[<!-- INCLUDE #folder.rename().Syntax -->](#rename-)|
|<!-- INCLUDE #folder.rename().Summary -->|




#### Example

The following example creates a "John Smith" folder:

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\"; fk platform path)
```




<!-- INCLUDE document.copyTo().Desc -->

<!-- INCLUDE folder.create().Desc -->

<!-- INCLUDE folder.createAlias().Desc -->

<!-- INCLUDE folder.delete().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE folder.moveTo().Desc -->

<!-- INCLUDE folder.rename().Desc -->





