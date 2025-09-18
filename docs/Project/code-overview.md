---
id: code-overview
title: Creating Methods and classes
---


The 4D code used across your project is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md). 

The 4D IDE provides you with various features to create, edit, export, or delete your code. You will usually use the included 4D [code editor](../code-editor/write-class-method.md) to work with your code. You can also use other editors such as **VS Code**, for which the [4D-Analyzer extension](https://github.com/4d/4D-Analyzer-VSCode) is available. 

## Creating methods

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder. 

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](../code-editor/write-class-method.md#shortcuts).
- Triggers can also be created or opened from the Structure editor.
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## Creating classes

A user class in 4D is defined by a specific method file (**.4dm**), stored in the [`/Project/Sources/Classes/`](../Project/architecture.md#sources) folder. The name of the file is the class name. 

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

For more information, please refer to the [Classes](../Concepts/classes.md) section.


## Deleting methods or classes

To delete an existing method or class, you can:

- on your disk, remove the *.4dm* file from the "Sources" folder,
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu. 

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).

