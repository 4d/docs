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

Your comments are written in markdown syntax (.md files) using any editor. They are stored as independant files withinh your project folder, and can be displayed in the right-side area of the Explorer:

![](assets/en/Project/explorer_Comments.png)



## Comment files

### Comment file name

Comment files get the same name as their attached element, with the ".md" extension. For example, the comment file attached to the `myMethod.4dm` project method will be named `myMethod.md`.

In the Explorer, 4D will automatically display the comment file with the same name as the selected element (see below).  


### Comment file architecture 

All comment files are stored in the `Documentation` folder, located at the first level of the project folder.

The `Documentation` folder architecture is the following:

- **Documentation**
	+ **Classes**
		* myClass.md
	+ **DatabaseMethods**
		* onStartup.md
		* ...
	+ **Forms**
		* loginDial.md
		* ...
	+ **Methods**
		* myMethod.md
		* ...
	+ **TableForms**
		* **1**
			- input.md
			- ...
		* ...
	+ **Triggers**
		* table1.md
		* ...

- A project form and its project form method share the same comment file for form and method. 
- A table form and its table form method share the same comment file for form and method. 


## Viewing comments

In the 4D interface, you can view existing comments:

- in the right side of the Explorer,
- in the method editor tips (partial view).

### Explorer

To view an existing comment in the 4D Explorer:

1. Make sure the right side panel is displayed.
2. Select the documented element in the Explorer list.
3. Click the **Comments** button located below the preview area.
	- the existing documentation file is displayed in the area (the file is not editable)
	- if there is no comment file for the element, a **Create** button is displayed.
	






## Writing comments

