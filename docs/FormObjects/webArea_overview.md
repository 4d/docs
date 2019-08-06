---
id: webAreaOverview
title: Web Area
---

## Overview

The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc.

>The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

The rendering engine of the Web area will depend on the execution platform of the application and the selected rendering engine option.

It is possible to create several Web areas in the same form. Note, however, that the insertion of Web areas is subject to a few limitations (see [Locations not supported](#locations-not-supported) below).

Several standard actions, numerous language commands as well as generic and specific form events allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment. 

This paragraph details the principles concerning the use and configuration of Web Area type objects in the Form editor. For more information about programmed management of these objects, refer to the [Web Area](https://doc.4d.com/4Dv17R6/4D/17-R6/Web-Area.201-4310240.en.html) commands in the [4D Language Reference](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Language-Reference.100-4310216.en.html) manual.

Also note that the use of Web areas is subject to several rules which are described in the [Notes about use of Web areas](https://doc.4d.com/4Dv17R6/4D/17-R6/Programmed-management-of-Web-Areas.300-4310788.en.html#37137) section of the [4D Language Reference](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Language-Reference.100-4310216.en.html) manual.

## Standard actions  

Four specific standard actions are available for managing Web areas automatically: `Open Back URL`, `Open Next URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html). 

## Events and language commands  

Web areas can also be controlled using form events and specific language commands. These are described in the [Web Area](https://doc.4d.com/4Dv17R6/4D/17-R6/Web-Area.201-4310240.en.html) chapter of the [4D Language Reference](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Language-Reference.100-4310216.en.html) manual. 

## Locations not supported  

Since the display of Web areas is managed by an external rendering engine, their location within 4D forms is subject to limitations. When defining the location of Web areas, you need to consider the following constraints:

*	Web areas are not supported in "scrollable" subforms (scrolling will not have the desired effect).
*	The limits of the Web areas must not exceed those of the subforms that contain them (they must be entirely visible).
*	Superimposing a Web area on top of or beneath other form objects is not supported.

## Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url)
[Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





