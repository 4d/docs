---
id: st-insert-url
title: ST INSERT URL
slug: /commands/st-insert-url
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT URL.Syntax-->**ST INSERT URL** ( {* ;} *object* ; *urlText* ; *urlAddress* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| urlText | Text | &#8594;  | Visible text of URL |
| urlAddress | Text | &#8594;  | URL address |
| startSel | Integer | &#8594;  | Start of selection |
| endSel | Integer | &#8594;  | End of selection |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST INSERT URL.Summary-->The **ST INSERT URL** command inserts a URL link in the styled text field or variable designated by the *object* parameter.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *urlText* parameter, pass the visible text of the URL, as it should appear in the object. For example, text labels such as "4D Web Site" or "Follow this link for more information" can be used. You can also use the address itself, for instance "http://www.4d.com".

In the *urlAddress* parameter, pass the complete address you want the browser page to connect to, for example "http://www.4D.com".

The optional *startSel* and *endSel* parameters designate a selection of text in *object*. The *startSel* and *endSel* values express a plain text selection, without taking into account any style tags that may be present. 

* If you only pass *startSel*, *urlText* is inserted at the specified location.
* If you omit *startSel* and *endSel*, *urlText* is inserted at the location of the cursor.
* If you pass *startSel* and *endSel*, **ST INSERT URL** replaces the text in this selection with the *urlText*. If the value of *endSel* is greater than the total number of characters in the object, all the characters between *startSel* and the end of the text are replaced with the *urlText*.

4D provides predefined constants so that you can designate the selection limits automatically in the *startSel* and *endSel* parameters. These constants are found in the "*Multistyle Text*" theme: 

| Constant           | Type    | Value  | Comment                                                             |
| ------------------ | ------- | ------ | ------------------------------------------------------------------- |
| ST End highlight   | Integer | \-1001 | Designates last character of current text selection in object (\*)  |
| ST End text        | Integer | 0      | Designates last character of text contained in object               |
| ST Start highlight | Integer | \-1000 | Designates first character of current text selection in object (\*) |
| ST Start text      | Integer | 1      | Designates first character of text contained in object              |

(\*) You must pass an object name in *object* to be able to use this constant. If you pass a reference to a field or variable, the command is applied to all the text of the object.

**Note:** If *startSel* is greater than *endSel* (except when *endSel* is 0), the command does nothing and the *OK* variable is set to 0.

Once the link is inserted, it is active: using **Ctrl+click** (Windows) or **Command+click** (OS X) on its label opens a page of the default browser at the address specified in the *urlAddress* parameter.

#### Example 

You want to insert a link to the 4D Web site to replace the text selected in the object:

```4d
 vTitle:="4D Web Site"
 vURL:="http://www.4d.com/"
 ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)
```

#### See also 

[ST GET URL](st-get-url.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1280 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


