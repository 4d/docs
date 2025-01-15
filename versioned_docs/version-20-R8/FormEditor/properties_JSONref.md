---
id: jsonReference
title: Form JSON property list
---

This page provides a comprehensive list of all form properties, sorted by their JSON name. Click on a property name to access its detailed description. 

>In the "Form Properties" chapter, properties are sorted according to their names and themes in the Property List. 

[b](#b) - [c](#c) - [d](#d) - [e](#e) - [f](#f) - [h](#h) - [i](#i) - [m](#m) - [p](#p) - [r](#r) - [s](#s) - [w](#w)

|Property|Description|Possible Values|
|---|---|---|
|<a name="b">**b**</a>|||
|[`bottomMargin`](properties_FormSize.md#vert-margin)|Vertical margin value (in pixels)|minimum: 0<a name="d"></a>|
|<a name="c">**c**</a>|||
|[`colorScheme`](properties_FormProperties.md#color-scheme)|Color scheme for the form|"dark", "light"|
|[`css`](properties_FormProperties.md#css)|CSS file(s) used by the form|CSS file path(s) provided as a string, a collection of strings, or a collection of objects with "path" and "media" properties|
|<a name="d">**d**</a>|||
|[`destination`](properties_FormProperties.md#form-type)|Form type|"detailScreen", "listScreen", "detailPrinter", "listPrinter"|
|<a name="e">**e**</a>|
|[`entryOrder`](formEditor.md#data-entry-order)|The order in which active objects are selected when the **Tab** or the **Carriage return** key is used in an input form |Collection of 4D Form object names |
|[`events`](Events/overview.md)|List of all events selected for the object or form|Collection of event names, e.g. ["onClick","onDataChange"...].|
|<a name="f">**f**</a>|||
|[`formSizeAnchor`](properties_FormSize.md#form-size)|Name of the object whose position determines the size of the form. (minimum length: 1)|Name of a 4D object|
|<a name="h">**h**</a>|||
|[`height`](properties_FormSize.md#height)|Height of the form|minimum: 0|
|<a name="i">**i**</a>|||
|[`inheritedForm`](properties_FormProperties.md#inherited-form-name)|Designates the form to inherit|Name (string) of table or project form OR a POSIX path (string) to a .json file describing the form OR an object describing the form|
|[`inheritedFormTable`](properties_FormProperties.md#inherited-form-table)|Designates the table an inherited form will use|A table name or number|
|<a name="m">**m**</a>|||
|[`markerBody`](properties_Markers.md#form-detail)|Detail marker position|minimum: 0 |
|[`markerBreak`](properties_Markers.md#form-break)|Break marker position(s)|minimum: 0 |
|[`markerFooter`](properties_Markers.md#form-footer)|Footer marker position|minimum: 0 |
|[`markerHeader`](properties_Markers.md#forrm-header)|Header marker position(s)|integer minimum: 0; integer array minimum: 0 |
|[`memorizeGeometry`](properties_FormProperties.md#memorize-geometry)|Saves the form parameters when the form window is closed |true, false |
|[`menuBar`](properties_Menu.md#associated-menu-bar)|Menu bar to associate to the form|Name of a valid menu bar |
|[`method`](properties_Action.md#method)|A project method name. |The name of an existing project method|
|<a name="p">**p**</a>|||
|[`pages`](properties_FormProperties.md#pages)|Collection of pages (each page is an object)|Page objects|
|[`pageFormat`](properties_Print.md#settings)|object|Available print properties|
|<a name="r">**r**</a>|||
|[`rightMargin`](properties_FormSize.md#hor-margin)|Horizontal margin value (in pixels)|minimum: 0|
|<a name="s">**s**</a>|||
|[`shared`](properties_FormProperties.md#published-as-subform)|Specifies if a form can be used as a subform|true, false|
|<a name="w">**w**</a>|||
|[`width`](properties_FormSize.md#width)|Width of the form|minimum: 0|
|[`windowMaxHeight`](properties_FormProperties.md#maximum-height)|Form window's largest allowable height|minimum: 0|
|[`windowMaxWidth`](properties_FormProperties.md#maximum-width)|Form window's largest allowable width|minimum: 0|
|[`windowMinHeight`](properties_FormProperties.md#minimum-height)|Form window's smallest allowable height|minimum: 0|
|[`windowMinWidth`](properties_FormProperties.md#minimum-width)|Form window's smallest allowable width|minimum: 0|
|[`windowSizingX`](properties_WindowSize.md#fixed-width)|Form window's vertical sizing|"fixed", "variable"|
|[`windowSizingY`](properties_WindowSize.md#fixed-height)|Form window's horizontal sizing|"fixed", "variable"|
|[`windowTitle`](properties_FormProperties.md#window-title)|Designates a form window's title|A name for the form window|