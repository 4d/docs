---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| Paramètres | Type         |                             | Description                                                                                                                                                                              |
| ---------- | ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Table        | &#8594; | Table owning the form, or Default table, if omitted                                                                                                                                      |
| form       | Text, Object | &#8594; | Name (string) of the form, or a POSIX path (string) to a .json file describing the form, or an object describing the form to print |
| formData   | Object       | &#8594; | Données à associer au formulaire                                                                                                                                                         |
| areaStart  | Integer      | &#8594; | Print marker, or Beginning area (if areaEnd is specified)                                                                                                             |
| areaEnd    | Integer      | &#8594; | Ending area (if areaStart specified)                                                                                                                                  |
| Résultat   | Integer      | &#8592; | Height of printed section                                                                                                                                                                |

<!-- END REF-->

## Description

<!--REF #_command_.Print form.Summary-->**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.<!-- END REF--> It is usually used to print very complex reports that require complete control over the printing process. **Print form** does not do any record processing, break processing or page breaks. These operations are your responsibility. **Print form** prints fields and variables in a fixed size frame only.

Dans le paramètre *form*, vous pouvez passer soit :

- le nom d'un formulaire,
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use (see *Form file path*), or
- un objet contenant la description du formulaire à utiliser.

Since **Print form** does not issue a page break after printing the form, it is easy to combine different forms on the same page. Thus, **Print form** is perfect for complex printing tasks that involve different tables and different forms. To force a page break between forms, use the [PAGE BREAK](../commands-legacy/page-break.md) command. In order to carry printing over to the next page for a form whose height is greater than the available space, call the [CANCEL](../commands-legacy/cancel.md) command before the [PAGE BREAK](../commands-legacy/page-break.md) command.

Three different syntaxes may be used:

- **Detail area printing**

Syntaxe :

```4d
 height:=Print form(myTable;myForm)
```

In this case, **Print form** only prints the Detail area (the area between the Header line and the Detail line) of the form.

- **Form area printing**

Syntaxe :

```4d
 height:=Print form(myTable;myForm;marker)
```

In this case, the command will print the section designated by the *marker*. Pass one of the constants of the *Form Area* theme in the marker parameter:

| Constante     | Type    | Valeur |
| ------------- | ------- | ------ |
| Form break0   | Integer | 300    |
| Form break1   | Integer | 301    |
| Form break2   | Integer | 302    |
| Form break3   | Integer | 303    |
| Form break4   | Integer | 304    |
| Form break5   | Integer | 305    |
| Form break6   | Integer | 306    |
| Form break7   | Integer | 307    |
| Form break8   | Integer | 308    |
| Form break9   | Integer | 309    |
| Form detail   | Integer | 0      |
| Form footer   | Integer | 100    |
| Form header   | Integer | 200    |
| Form header1  | Integer | 201    |
| Form header10 | Integer | 210    |
| Form header2  | Integer | 202    |
| Form header3  | Integer | 203    |
| Form header4  | Integer | 204    |
| Form header5  | Integer | 205    |
| Form header6  | Integer | 206    |
| Form header7  | Integer | 207    |
| Form header8  | Integer | 208    |
| Form header9  | Integer | 209    |

- **Section printing**

Syntaxe :

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

In this case, the command will print the section included between the *areaStart* and *areaEnd* parameters. The values entered must be expressed in pixels.

**formData**

Optionnellement, vous pouvez passer des paramètres au formulaire *form* en utilisant soit l'objet *formData*, soit l'objet de classe de formulaire automatiquement instancié par 4D si vous avez [associé une classe utilisateur au formulaire](../FormEditor/properties_FormProperties.md#form-class). Toutes les propriétés de l'objet de données du formulaire seront alors disponibles dans le contexte du formulaire par le biais de la commande [Form](form.md). Optionally, you can pass parameters to the *form* using either the *formData* object or the form class object automatically instantiated by 4D if you have [associated a user class to the form](../FormEditor/properties_FormProperties.md#form-class).

Pour des informations détaillées sur l'objet de données formulaire, veuillez vous référer à la commande [`DIALOG`](dialog.md).

**Valeur retournée**

The value returned by **Print form** indicates the height of the printable area. This value will be automatically taken into account by the [Get printed height](../commands-legacy/get-printed-height.md) command.

The printer dialog boxes do not appear when you use **Print form**. The report does not use the print settings that were assigned to the form in the Design environment. There are two ways to specify the print settings before issuing a series of calls to **Print form**:

- Call [PRINT SETTINGS](../commands-legacy/print-settings.md). In this case, you let the user choose the settings.
- Call [SET PRINT OPTION](../commands-legacy/set-print-option.md) and [GET PRINT OPTION](../commands-legacy/get-print-option.md). In this case, print settings are specified programmatically.

**Print form** builds each printed page in memory. Each page is printed when the page in memory is full or when you call [PAGE BREAK](../commands-legacy/page-break.md). To ensure the printing of the last page after any use of **Print form**, you must conclude with the [PAGE BREAK](../commands-legacy/page-break.md) command (except in the context of an [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), see note). Otherwise, if the last page is not full, it stays in memory and is not printed.

**Warning:** If the command is called in the context of a printing job opened with [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), you must NOT call [PAGE BREAK](../commands-legacy/page-break.md) for the last page because it is automatically printed by the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command. If you call [PAGE BREAK](../commands-legacy/page-break.md) in this case, a blank page is printed.

This command prints external areas and objects (for example, 4D Write or 4D View areas). The area is reset for each execution of the command.

**Warning:** Subforms are not printed with **Print form**. To print only one form with such objects, use [PRINT RECORD](../commands-legacy/print-record.md) instead.

**Print form** generates only one [`On Printing Detail` event](../Events/onPrintingDetail.md) for the form method.

**4D Server:** This command can be executed on 4D Server within the framework of a stored procedure. In this context:

- Make sure that no dialog box appears on the server machine (except for a specific requirement).
- In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

## Exemple 1

The following example performs as a [PRINT SELECTION](../commands-legacy/print-selection.md) command would. However, the report uses one of two different forms, depending on whether the record is for a check or a deposit:

```4d
 QUERY([Register]) // Select the records
 If(OK=1)
    ORDER BY([Register]) // Sort the records
    If(OK=1)
       PRINT SETTINGS // Display Printing dialog boxes
       If(OK=1)
          For($vlRecord;1;Records in selection([Register]))
             If([Register]Type ="Check")
                Print form([Register];"Check Out") // Use one form for checks
             Else
                Print form([Register];"Deposit Out") // Use another form for deposits
             End if
             NEXT RECORD([Register])
          End for
          PAGE BREAK // Make sure the last page is printed
       End if
    End if
 End if
```

## Exemple 2

Refer to the example of the [SET PRINT MARKER](../commands-legacy/set-print-marker.md) command.

## Exemple 3

This form is used as dialog, then printed with modifications:

![](../assets/en/commands/pict6264975.en.png)

The form method:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

The code that calls the dialog then prints its body:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

## Voir également

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 5                           |
| Thread safe        | &cross; |


