---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| Parâmetro | Tipo         |                             | Descrição                                                                                                                                                                                |
| --------- | ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable    | Tabela       | &#8594; | Table owning the form, or Default table, if omitted                                                                                                                                      |
| form      | Text, Object | &#8594; | Name (string) of the form, or a POSIX path (string) to a .json file describing the form, or an object describing the form to print |
| formData  | Object       | &#8594; | Data to associate to the form                                                                                                                                                            |
| areaStart | Integer      | &#8594; | Print marker, or Beginning area (if areaEnd is specified)                                                                                                             |
| areaEnd   | Integer      | &#8594; | Área final (se for especificado pela areaStart)                                                                                                                       |
| Resultado | Integer      | &#8592; | Height of printed section                                                                                                                                                                |

<!-- END REF-->

## Descrição

<!--REF #_command_.Print form.Summary-->**Print form** simply prints *form* with the current values of fields and variables of *aTable*.<!-- END REF-->**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*.**Print form** simply prints *form* with the current values of fields and variables of *aTable*. It is usually used to print very complex reports that require complete control over the printing process. **Print form** does not do any record processing, break processing or page breaks. These operations are your responsibility. **Print form** prints fields and variables in a fixed size frame only.

In the *form* parameter, you can pass:

- the name of a form, or
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use (see *Form file path*), or
- an object containing a description of the form.

Since **Print form** does not issue a page break after printing the form, it is easy to combine different forms on the same page. Thus, **Print form** is perfect for complex printing tasks that involve different tables and different forms. Para forçar uma quebra de página entre os formulários, use o comando [PAGE BREAK](../commands-legacy/page-break.md). In order to carry printing over to the next page for a form whose height is greater than the available space, call the [CANCEL](../commands-legacy/cancel.md) command before the [PAGE BREAK](../commands-legacy/page-break.md) command.

Three different syntaxes may be used:

- **Detail area printing**

Sintaxe:

```4d
 height:=Print form(myTable;myForm)
```

In this case, **Print form** only prints the Detail area (the area between the Header line and the Detail line) of the form.

- **Form area printing**

Sintaxe:

```4d
 height:=Print form(myTable;myForm;marker)
```

In this case, the command will print the section designated by the *marker*. Pass one of the constants of the *Form Area* theme in the marker parameter:

| Parâmetros    | Tipo    | Valor |
| ------------- | ------- | ----- |
| Form break0   | Integer | 300   |
| Form break1   | Integer | 301   |
| Form break2   | Integer | 302   |
| Form break3   | Integer | 303   |
| Form break4   | Integer | 304   |
| Form break5   | Integer | 305   |
| Form break6   | Integer | 306   |
| Form break7   | Integer | 307   |
| Form break8   | Integer | 308   |
| Form break9   | Integer | 309   |
| Form detail   | Integer | 0     |
| Form footer   | Integer | 100   |
| Form header   | Integer | 200   |
| Form header1  | Integer | 201   |
| Form header10 | Integer | 210   |
| Form header2  | Integer | 202   |
| Form header3  | Integer | 203   |
| Form header4  | Integer | 204   |
| Form header5  | Integer | 205   |
| Form header6  | Integer | 206   |
| Form header7  | Integer | 207   |
| Form header8  | Integer | 208   |
| Form header9  | Integer | 209   |

- **Section printing**

Sintaxe:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

In this case, the command will print the section included between the *areaStart* and *areaEnd* parameters. The values entered must be expressed in pixels.

**formData**

Optionally, you can pass parameters to the *form* using either the *formData* object or the form class object automatically instantiated by 4D if you have [associated a user class to the form](../FormEditor/properties_FormProperties.md#form-class). Any properties of the form data object will then be available from within the form context through the [Form](form.md) command. Optionally, you can pass parameters to the *form* using either the *formData* object or the form class object automatically instantiated by 4D if you have [associated a user class to the form](../FormEditor/properties_FormProperties.md#form-class).

Para obter informações detalhadas sobre o objeto de dados do formulário, consulte o comando [`DIALOG`](dialog.md).

**Valor retornado**

The value returned by **Print form** indicates the height of the printable area. Esse valor será automaticamente levado em conta pelo comando [Get printed height](../commands-legacy/get-printed-height.md).

The printer dialog boxes do not appear when you use **Print form**. The report does not use the print settings that were assigned to the form in the Design environment. There are two ways to specify the print settings before issuing a series of calls to **Print form**:

- Chame [PRINT SETTINGS](../commands-legacy/print-settings.md). In this case, you let the user choose the settings.
- Call [SET PRINT OPTION](../commands-legacy/set-print-option.md) and [GET PRINT OPTION](../commands-legacy/get-print-option.md). In this case, print settings are specified programmatically.

**Print form** builds each printed page in memory. Each page is printed when the page in memory is full or when you call [PAGE BREAK](../commands-legacy/page-break.md). To ensure the printing of the last page after any use of **Print form**, you must conclude with the [PAGE BREAK](../commands-legacy/page-break.md) command (except in the context of an [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), see note). Otherwise, if the last page is not full, it stays in memory and is not printed.

**Warning:** If the command is called in the context of a printing job opened with [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), you must NOT call [PAGE BREAK](../commands-legacy/page-break.md) for the last page because it is automatically printed by the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command. Se você chamar [PAGE BREAK](../commands-legacy/page-break.md) nesse caso, uma página em branco será impressa.

This command prints external areas and objects (for example, 4D Write or 4D View areas). The area is reset for each execution of the command.

**Warning:** Subforms are not printed with **Print form**. To print only one form with such objects, use [PRINT RECORD](../commands-legacy/print-record.md) instead.

**Print form** gera apenas um evento [`On Printing Detail`](../Events/onPrintingDetail.md) para o método formulário.

**4D Server:** This command can be executed on 4D Server within the framework of a stored procedure. Neste contexto:

- Make sure that no dialog box appears on the server machine (except for a specific requirement).
- In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

## Exemplo 1

O exemplo a seguir funciona como um comando [PRINT SELECTION] (../commands-legacy/print-selection.md). However, the report uses one of two different forms, depending on whether the record is for a check or a deposit:

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

## Exemplo 2

Consulte o exemplo do comando [SET PRINT MARKER](../commands-legacy/set-print-marker.md).

## Exemplo 3

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

## Veja também

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)

## Propriedades

|                |                             |
| -------------- | --------------------------- |
| Command number | 5                           |
| Thread safe    | &cross; |


