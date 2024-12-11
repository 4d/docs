---
id: print-label
title: PRINT LABEL
slug: /commands/print-label
displayed_sidebar: docs
---

<!--REF #_command_.PRINT LABEL.Syntax-->**PRINT LABEL** ( {*aTable* }{;}{ *document* {; * | >}} )<!-- END REF-->
<!--REF #_command_.PRINT LABEL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to print, or Default table, if omitted |
| document | Text | &#8594;  | Name of disk label document |
| * &#124; > | &#8594;  | * to suppress the printing dialog box, or > to not reinitialize print settings |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINT LABEL.Summary-->**PRINT LABEL** enables you to print labels with the data from the selection of *aTable*.<!-- END REF-->

If do not specify the *document* parameter, **PRINT LABEL** prints the current selection of *aTable* as labels, using the current output form. You cannot use this command to print subforms. For details about creating forms for labels, refer to the *4D Design Reference* manual.

If you specify the *document* parameter, **PRINT LABEL** enables you to access the Label Wizard (shown below) or to print an existing Label document stored on disk. See the following discussion.

![](../assets/en/commands/pict2980390.en.png)

By default, **PRINT LABEL** displays the Print job dialog box before printing. If the user cancels the dialog box, the command is canceled and the labels are not printed. You can suppress these dialog box by using either the optional asterisk (*\**) parameter or the optional “greater than” (*\>*) parameter:

* The *\** parameter causes a print job using the current print parameters.
* Furthermore, the *\>* parameter causes a print job without reinitializing the current print parameters. This setting is useful for executing several successive calls to **PRINT LABEL** (ex. inside a loop) while maintaining previously set customized print parameters. For an example of use of this parameter, refer to the [PRINT RECORD](print-record.md) command description.

Note that this parameter has no effect if the Label Wizard is involved.

If the Label Wizard is not involved, the OK variable is set to 1 if all labels are printed; otherwise, it is set to 0 (zero) (i.e., if user clicked **Cancel** in the printing dialog box).

If you specify the *document* parameter, the labels are printed with the label setup defined in *document*. If *document* is an empty string (""), **PRINT LABEL** will present an Open File dialog box so the user can specify the file to use for the label setup. If *document* is the name of a document that does not exist (for example, pass *char(1)* in *document)*, the Label Wizard is displayed and the user can define the label setup.

**Note:** If the *table* has been declared “invisible” in Design mode, the Label Wizard will not be displayed.

**4D Server:** This command can be executed on 4D Server in a stored procedure. In this context:

* Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the *\** or *\>* parameter.
* The syntax which makes the label editor appear does not work with 4D Server; in this case, the system variable OK is set to 0.
* In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

#### Example 1 

The following example prints labels using the output form of a table. The example uses two methods. The first is a project method that sets the correct output form and then prints labels: 

```4d
 ALL RECORDS([Addresses]) // Select all records
 FORM SET OUTPUT([Addresses];"Label Out") // Select the output form
 PRINT LABEL([Addresses]) // Print the labels
 FORM SET OUTPUT([Addresses];"Output") // Restore default output form
```

The second method is the form method for the form *"Label Out"*. The form contains one variable named *vLabel*, which is used to hold the concatenated fields. If the second address field (Addr2) is blank, it is removed by the method. Note that this task is performed automatically with the Label Wizard. The form method creates the label for each record:

```4d
  // [Addresses]; "Label Out" form method
 Case of
    :(FORM Event=On Load)
       vLabel:=[Addresses]Name1+" "+[Addresses]Name2+Char(13)+[Addresses]Addr1+Char(13)
       If([Addresses]Addr2 #"")
          vLabel:=vLabel+[Addresses]Addr2+Char(13)
       End if
       vLabel:=vLabel+[Addresses]City+", "+[Addresses]State+" "+[Addresses]ZipCode
 End case
```

#### Example 2 

The following example lets the user query the \[People\] table, and then automatically prints the labels “My Labels”:

```4d
 QUERY([People])
 If(OK=1)
    PRINT LABEL([People];"My Labels";*)
 End if
```

#### Example 3 

The following example lets the user query the \[People\] table, and then lets the user choose the labels to be printed:

```4d
 QUERY([People])
 If(OK=1)
    PRINT LABEL([People];"")
 End if
```

#### Example 4 

The following example lets the user query the \[People\] table, and then displays the Label Wizard so the user can design, save, load and print any labels:

```4d
 QUERY([People])
 If(OK=1)
    PRINT LABEL([People];Char(1))
 End if
```

#### See also 

[PRINT SELECTION](print-selection.md)  
[QR REPORT](qr-report.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 39 |
| Thread safe | &check; |
| Modifies variables | OK |


