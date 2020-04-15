---
id: forms
title: Forms
---

## Overview

Forms provide the interface through which information is entered, modified, and printed. Users interact with the data in a database using forms and print reports using forms. In custom applications, forms can be used to create custom dialog boxes and palettes.

![](assets/en/FormObjects/form1.png)

In 4D projects, forms can be considered as meta-objects having their own properties and containing [form objects](formObjects_overview.md). 

Forms can also contain other forms through the following features:

- [subform objects](subform_overview.md)
- [inherited forms](propertiesForm.md#inherited-forms)


## Handling forms 
 
You can add or modify 4D forms in the following ways:

- **4D Developer interface:** you can create a new form from the **File** menu or the **Explorer**. You can modify a form using the **Form editor**.
- **JSON code:** Create and design your forms using JSON and save the form files at the [appropriate location](Project/architecture.md#sources-folder). 


## Form Types 
 
There are two categories of forms: 

*	**Table forms** - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Typically, a table has separate input and output forms. 

	- *Input form* - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record).   
![](assets/en/FormObjects/formInput.png)
	
	- *Output form* - displays a list of records, with a single line per record. The results of queries are shown in an output form andvusers can double-click a line to display the input form for that record.
![](assets/en/FormObjects/formOutput.png)	


*	**Project forms** - Independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components. Project forms can be used to create interfaces that easily comply with OS standards. 



## Supported Properties
[Associated Menu Bar](propertiesMenu.md#associated-menu-bar) - [Fixed Height](propertiesWindowSize.md#fixed-height) - [Fixed Width](propertiesWindowSize.md#fixed-width) - [Form Name](propertiesForm.md#form-name) - [Form Size](propertiesForm.md#form-size) - [Form Type](propertiesForm.md#form-type) - [Inherited Form Name](propertiesForm.md#inherited-form-name) - [Inherited Form Table](propertiesForm.md#inherited-form-table) - [Markers](propertiesForm.md#markers) - [Maximum Height](propertiesWindowSize.md#maximum-height) - [Maximum Width](propertiesWindowSize.md#maximum-width) - [Method](properties_Action.md#method) - [Minimum Height](propertiesWindowSize.md#minimum-height) - [Minimum Width](propertiesWindowSize.md#minimum-width) - [Pages](propertiesForm.md#pages) - [Print Settings](propertiesPrint.md#print-settings) - [Published as Subform](propertiesForm.md#published-as-subform) - [Save Geometry](propertiesForm.md#save-geometry) - [Window Title](propertiesForm.md#window-title)
