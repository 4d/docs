---
id: comments
title: Comments
---

## Overview


In project databases, you can comment your methods as well as your forms, tables, or fields. Using comments is particularly appropriate for databases being developed by multiple programmers and is generally good programming practice. It can contain a description of an element as well as any information necessary to understand how the element functions in the database. 

The following elements accept comments:

- Methods (database methods, component methods, project methods, form methods, 4D Mobile methods, triggers, and classes)
- Forms
- Tables and Fields

Your comments are written in markdown syntax (.md files) using any editor. They are stored as independant files withinh your project folder, and can be displayed in the right-side area of the Explorer.



## Project file access

When working on a project in 4D Developer, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

The 4D Developer framework includes a file access manager to control concurrent access:

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor:   
![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes:
![](assets/en/Project/projectReload.png)  
	- **Yes**: discard editor changes and reload
	- **No**: save changes and overwrite the other version
	- **Cancel**: do not save

This feature is enabled for all built-in editors:

- Structure editor
- Form editor
- Method editor
- Settings editor
- Toolbox editor
