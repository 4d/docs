---
id: qr-report
title: QR REPORT
slug: /commands/qr-report
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT.Syntax-->**QR REPORT** ( {*aTable* ;} *document* {; *methodName*}{; *} )<!-- END REF-->
<!--REF #_command_.QR REPORT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to use for the report, or Default table if omitted |
| document | Text | &#8594;  | Quick Report document to load |
| methodName | Text | &#8594;  | Name of method to call |
| * | Operator | &#8594;  | Deletion of printing dialog boxes |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR REPORT.Summary-->**QR REPORT** prints a report for *aTable*, created with the Quick Report editor.<!-- END REF--> This editor allows users to create their own reports. For more information about creating reports with the Quick Report editor, refer to the *Quick reports* section of the 4D *Design Reference* manual.

**Notes:**

* The editor does not appear if the *table* has been declared “Invisible.”
* When the editor is called using the **QR REPORT** command, relations between tables keep their manual status, where applicable. This allows the developer to manage this status himself using the [SET AUTOMATIC RELATIONS](set-automatic-relations.md) and [SET FIELD RELATION](set-field-relation.md) command. However, keep in mind that automatic features are disabled when related tables are being viewed in a list form displayed using [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md), or a subform. See *Automatic and manual relations*.
* The editor is called in an external window and it is not possible to use the [QR ON COMMAND](qr-on-command.md) command in this context. However, you can use the *methodName* parameter to execute custom code when an interface command is activated (see below).

The *document* parameter is a report document that was created with the Quick Report editor and saved on disk. The document stores the specifications of the report, not the records to be printed.   
If an empty string ("") is specified for *document*, **QR REPORT** displays an Open File dialog box and the user can select the report to print.  
If the *document* parameter specifies a document that does not exist (for example, pass [Char](char.md)**(1)** in *document*), the Quick Report editor is displayed.

The *methodName* parameter designates a 4D project method that will be executed each time a document management command of the Quick Report editor is called by a user click on a button. Using this parameter is equivalent to using [QR ON COMMAND](qr-on-command.md) in the context of the Quick Report editor window ([QR ON COMMAND](qr-on-command.md) only works within the context of an included area). For example, you can use this parameter to change the character set used by the quick report. The *methodName* method receives two parameters:  

| **Parameter** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $1            | Integer  | Area reference                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| $2            | Integer  | Number of the command selected. To compare with the following constants of the *QR Commands* theme (only listed events are supported): <table> <thead> <tr> <td>Constant</td> <td>Value</td> <td>Comment</td> </tr> </thead> <tbody> <tr> <td>qr cmd generate</td> <td>2008</td> <td>Use of command [QR RUN](qr-run.md) recommended</td> </tr><tr> <td>qr cmd open</td> <td>2001</td> <td></td> </tr><tr> <td>qr cmd page setup</td> <td>2006</td> <td></td> </tr><tr> <td>qr cmd print preview</td> <td>2007</td> <td></td> </tr><tr> <td>qr cmd save</td> <td>2002</td> <td></td> </tr><tr> <td>qr cmd save as</td> <td>2003</td> <td></td> </tr> </tbody> </table> |

**Note:** If you want to compile your database, you must declare the $1 et $2 parameters explicitly as longints, even if you do not use them.

If you want to execute the initial command chosen by the user, use the following statement in the *methodName* method:

```4d
 QR EXECUTE COMMAND($1;$2)
```

If the *methodName* parameter is an empty string ("") or is omitted, no method is called and the standard operation of **QR REPORT** is applied.

After a report is selected, the dialog boxes for printing are displayed, unless the *\** parameter is specified. If this parameter is specified, these dialog boxes are not displayed. The report is then printed.

If the Quick Report editor is not involved, the OK variable is set to 1 if a report is printed; otherwise, it is set to 0 (zero) (i.e., if the user clicked **Cancel** in the printing dialog boxes).

**4D Server:** This command can be executed on 4D Server within the framework of a stored procedure. In this context:

* Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the *\** parameter.
* The syntax which makes the Quick Report editor appear does not work with 4D Server; in this case, the system variable OK is set to 0.
* In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

#### Example 1 

The following example lets the user query the \[People\] table, and then automatically prints the report “Detailed Listing”:

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"Detailed Listing";*)
 End if
```

#### Example 2 

The following example lets the user query the \[People\] table, and then lets the user choose which report to print:

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"")
 End if
```

#### Example 3 

The following example lets the user query the \[People\] table, and then displays the Quick Report editor so the user can design, save, load and print any reports:

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];Char(1))
 End if
```

#### Example 4 

Refer to the example of the [SET FIELD RELATION](set-field-relation.md) command. 

#### Example 5 

You want to convert the character set used in a quick report called using **QR REPORT** into Mac Roman:

```4d
 QR REPORT([MyTable];Char(1);"myCallbackMeth")
```

The myCallbackMeth method converts the report when it is generated:

```4d
 var $1;$2 : Integer
 If($2=qr cmd generate) //if we generated a report
    var $myblob : Blob
    var $path;$text : Text
    var $type : Integer
    QR EXECUTE COMMAND($1;$2) //execution of command
    QR GET DESTINATION($1;$type;$path) //retrieval of destination
    If(($type=qr HTML file)|($type=qr text file))
       DOCUMENT TO BLOB($path;$myblob)
  //conversion to text using UTF-8
       $text:=Convert to text($myblob;"UTF-8")
  //use of MacRoman set
       CONVERT FROM TEXT($text;"MacRoman";$myblob)
  //Return of converted report
       BLOB TO DOCUMENT($path;$myblob)
    End if
 Else //otherwise, execution of the command
    QR EXECUTE COMMAND($1;$2)
 End if
```

#### See also 

[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 197 |
| Thread safe | &check; |
| Modifies variables | OK |


