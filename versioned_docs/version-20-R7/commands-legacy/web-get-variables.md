---
id: web-get-variables
title: WEB GET VARIABLES
slug: /commands/web-get-variables
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET VARIABLES.Syntax-->**WEB GET VARIABLES** ( *nameArray* ; *valueArray* )<!-- END REF-->
<!--REF #_command_.WEB GET VARIABLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| nameArray | Text array | &#8592; | Web form variable names |
| valueArray | Text array | &#8592; | Web form variable values |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET VARIABLES.Summary-->The **WEB GET VARIABLES** command fills the text arrays *nameArray* and *valueArray* with the variable names and values contained in the Web form “submitted” (i.e. sent to the Web server).<!-- END REF-->

This command gets the value for all the variables which can be included in HTML pages: text area, button, check box, radio button, pop up menu, choice list...

**Note:** Regarding check boxes, the variable name and value are returned only if the check box has been actually checked.

This command is valid regardless of the type of URL or form (POST or GET method) sent to the Web server.

This command can be called, if necessary, in the [QR SET DESTINATION](qr-set-destination.md) or any other 4D method resulting from a form submission.

##### About Web forms and their associated actions 

Each form contains named data entry area (text area, buttons, checkboxes).  
When a form is submitted (a request is sent to the Web server), the request contains (within others) the list of the data entry areas and their associated values.  
A form can be submitted through two methods (both can be used with 4D): 

* POST, usually used to add data into the Web server - to a database,
* GET, usually used to request the Web server - data coming from a database.

#### Example 

A form contains two fields, vName and vCity with “ROBERT” and “DALLAS” values. The action associated to the form is “/4DACTION/WEBFORM”.

* If the form method is POST (most frequently used), the data entered will not be visible in the URL (http://127.0.0.1/4DACTION/WEBFORM).
* If the form method is GET, the data entered will be visible in the URL (http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS).

The WEBFORM method can be as follows:

```4d
 ARRAY TEXT($anames;0)
 ARRAY TEXT($avalues;0)
 WEB GET VARIABLES($anames;$avalues)
```

The result will be:

```4d
 $anames{1}="vNAME"
 $anames{2}="vCITY"
 $avalues{1}="ROBERT"
 $avalues{2}="DALLAS"
```

The vNAME variable contains ROBERT and the vCITY variable contains DALLAS.

#### See also 

[WEB GET BODY PART](web-get-body-part.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 683 |
| Thread safe | &check; |


