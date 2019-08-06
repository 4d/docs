---
id: subformOverview
title: Subform
---

## Overview

A subform is a form included in another form.


## Terminology  

In order to clearly define the concepts implemented with subforms, here are some definitions for certain terms used:

*	**Subform**: a form intended for inclusion in another form, itself called the parent form.
*	**Parent form**: a form containing one or more subform(s).
*	**Subform container**: an object included in the parent form, displaying an instance of the subform.
*	**Subform instance**: the representation of a subform in a parent form. This concept is important because it is possible to display several instances of the same subform in a parent form.
*	**List form**: instance of subform displayed as a list.
*	**Detail form**: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.

## Subform types

There are two main types of subforms and both have their own particular mechanisms and properties:

### List subforms

A list subform lets you enter, view, and modify data in other tables. You usually use list subforms in databases in which you have established One to Many relations. 

A list subform on a form in a related One table lets you view, enter, and modify data in a related Many table. You can have several subforms coming from different tables in the same form. However, it is not possible to place two subforms that belong to the same table on the same page of a form. 

For example, a Contacts manager database might use a list subform to display all the telephone numbers for a particular contact. Although the telephone numbers appear on the Contacts screen, the information is actually stored in a related table. Using a One to Many relation, this database design makes it easy to store an unlimited number of telephone numbers per contact. With automatic relations, you can support data entry directly into the related Many table without programming.

Although list subforms are generally associated with Many tables, a subform instance can display the records of any other database table.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an input form. In this configuration, the form used as the subform is referred to as the List form. The input form is referred to as the Detail form. 

You can also allow the user to enter data in the List form.

### Page subforms

Page subforms can display the data of the current subrecord or any type of pertinent value depending on the context (variables, pictures, and so on). One of the main advantages of using page subforms is that they can include advanced functionalities and can interact directly with the parent form (widgets). Page subforms also have their own specific properties and events; you can manage them entirely by programming.

**Note**: You can generate components providing additional functionalities through subforms. For more information about this, refer to [Developing and installing 4D components](https://doc.4d.com/4Dv17R6/4D/17-R6/Developing-and-installing-4D-components.200-4354607.en.html).

The page subform uses the input form indicated by the “Detail Form” property. Unlike a list subform, the form used can come from the same table as the parent form. It is also possible to use a project form. When executed, a page subform has the same standard display characteristics as an input form. The output form mechanisms (related more particularly to the management of markers) are not activated.


## Creating and defining a subform  

You can add a subform to a form in two ways: 

*	In the Form editor, using the Subform tool of the object bar ,
*	In the Form editor, by dragging and dropping from the [Forms Page](https://doc.4d.com/4Dv17R6/4D/17-R6/Forms-Page.300-4354855.en.html) of the Explorer.

**Note**: A subform type object (in page form) is also created when you add a Widget object from the preconfigured object library (see [Using the preconfigured library](https://doc.4d.com/4Dv17R6/4D/17-R6/Using-the-preconfigured-library.300-4354888.en.html)).

Of course, you can mix these different techniques according to your needs.

You specify the form type by checking (or unchecking) the **Output subform** option in the "Sub-Form" theme of the Property List. Checking or unchecking this option updates the other options displayed in the Property List so that they correspond to the chosen subform type. 

## Adding buttons for managing subrecords 
 
You can add custom buttons for handling data entry in a subform. Any kind of button — standard, highlight or invisible — can be used. You can set the action of these buttons using programming (see Data Entry) or using Standard actions. 

4D offers three standard actions to meet the basic needs for managing subrecords: `Edit Subrecord`, `Delete Subrecord`, and `Add Subrecord`. When the form includes several subform instances, the action will apply to the subform that has the focus. 

For more information about adding these buttons and their associated standard actions, refer to [Buttons](button_overview.md#overview) and [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

## Widgets

4D widgets are predefined compound objects. These widgets, which can be used with or without programming, give access to standard functionalities that are very simple to implement. The following widgets are available:

*	[SearchPicker](https://doc.4d.com/4Dv17R6/4D/17-R6/SearchPicker.201-4465258.en.html): search area with standard appearance.
*	[DatePicker](https://doc.4d.com/4Dv17R6/4D/17-R6/DatePicker.201-4465260.en.html): date selector.
*	[TimePicker](https://doc.4d.com/4Dv17R6/4D/17-R6/TimePicker.201-4465259.en.html): time selector.

4D widgets are page-type subforms endowed with specific functions. You can add them to your forms using the subform creation tool (see previous section) or using the integrated object library of 4D (see Using the preconfigured library).

The use of widgets is described in detail in a separate manual, [4D Widgets](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html).

## Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Detail Form](properties_Subform.md#detail-form) - [Expression Type ](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - 
[Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - 
[Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
