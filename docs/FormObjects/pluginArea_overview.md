---
id: pluginAreaOverview
title: Plug-in Areas 
---

## Overview

A plug-in area is an area on the form that is completely controlled by a 4D plug-in. When opening a database, 4D creates an internal list of the plug-ins installed in your database. Once you have inserted a Plug-in Area in a form, you can assign a plug-in to the area directly in the Type list in the Property List:

![](assets/en/FormObjects/pluginArea.png)

**Notes**:

<li>Some plug-ins, such as 4D Internet Commands, cannot be used in forms or external windows. When a plug-in cannot be used in a form, it does not appear in the plug-in list of the Property List.
<li>By default, the list does not contain any plug-in.
<li>When the object type chosen is Plugin Area, an Advanced button may be enabled if advanced options are provided by the author of the plug-in. In this case, you can click this button to set these options. Because the Advanced options dialog box is under the control of the author of the plug-in, information about these Advanced options is the responsibility of the distributor of the plug-in. 

If you draw a plug-in area that is too small, 4D will display it as a button whose title is the name of the variable associated with the area. During execution, the user can click on this button in order to open a specific window displaying the plug-in.

## Installing plug-ins

To add a plug-in in your 4D environment, you first need to quit 4D. Plug-ins are loaded when you launch 4D. For more information about the installation of plug-ins, refer to [Installing plugins or components](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).

## Using plug-ins

The ability to incorporate plug-ins into forms gives you unlimited possibilities when creating custom applications. A plug-in can perform a simple task such as displaying a digital clock on a form, or a complex task such as providing full-featured word processing, spreadsheet, or graphics capabilities.

If you are interested in designing your own plug-ins, you can receive extensive information about writing and implementing plug-ins. 4D provides a [complete kit (on github)](https://github.com/4d/4D-Plugin-SDK) to help you write custom plug-ins.