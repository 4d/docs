---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| Parámetros | Tipo         |                             | Descripción                                                                                                                                                                              |
| ---------- | ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Tabla        | &#8594; | Table owning the form, or Default table, if omitted                                                                                                                                      |
| form       | Text, Object | &#8594; | Name (string) of the form, or a POSIX path (string) to a .json file describing the form, or an object describing the form to print |
| formData   | Object       | &#8594; | Datos a asociar al formulario                                                                                                                                                            |
| areaStart  | Integer      | &#8594; | Marcador de impresión, o Área inicial (si se especifica areaEnd)                                                                                                      |
| areaEnd    | Integer      | &#8594; | Área final (si se especifica areaStart)                                                                                                                               |
| Resultado  | Integer      | &#8592; | Altura de la sección impresa                                                                                                                                                             |

<!-- END REF-->

## Descripción

<!--REF #_command_.Print form.Summary-->The **Print form** command simply prints *form* with the current values of fields and variables of *aTable*.<!-- END REF-->The **Print form** command simply prints *form* with the current values of fields and variables of *aTable*. It is usually used to print very complex reports that require complete control over the printing process. **Print form** does not do any record processing, break processing or page breaks. Estas operaciones son responsabilidad suya. **Print form*** imprime campos y variables solo en un marco de tamaño fijo.

En el parámetro *form*, puede pasar:

- el nombre de un formulario, o
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use (see *Form file path*), or
- un objeto que contiene la descripción del formulario.

Since **Print form** does not issue a page break after printing the form, it is easy to combine different forms on the same page. Thus, **Print form** is perfect for complex printing tasks that involve different tables and different forms. Para forzar un salto de página entre formularios, utilice el comando [PAGE BREAK](../commands-legacy/page-break.md). Para transferir la impresión a la página siguiente de un formulario cuya altura es superior al espacio disponible, invoque el comando [CANCEL](../commands-legacy/cancel.md) antes del comando [PAGE BREAK](../commands-legacy/page-break.md).

Se pueden utilizar tres sintaxis diferentes:

- **Impresión de área de detalle**

Sintaxis:

```4d
 height:=Print form(myTable;myForm)
```

In this case, **Print form** only prints the Detail area (the area between the Header line and the Detail line) of the form.

- **Impresión de área de formulario**

Sintaxis:

```4d
 height:=Print form(myTable;myForm;marker)
```

In this case, the command will print the section designated by the *marker*. Pass one of the constants of the *Form Area* theme in the marker parameter:

| Constante     | Tipo    | Valor |
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

- **Impresión de sección**

Sintaxis:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

In this case, the command will print the section included between the *areaStart* and *areaEnd* parameters. Los valores introducidos deben expresarse en píxeles.

**formData**

Opcionalmente, puede pasar parámetros al *form* usando el objeto *formData* o el objeto de clase form automáticamente instanciado por 4D si has [asociado una clase de usuario al formulario](../FormEditor/properties_FormProperties.md#form-class). Any properties of the form data object will then be available from within the form context through the [Form](form.md) command. Optionally, you can pass parameters to the *form* using either the *formData* object or the form class object automatically instantiated by 4D if you have [associated a user class to the form](../FormEditor/properties_FormProperties.md#form-class).

Para obtener información detallada sobre el objeto de datos del formulario, consulte el comando [`DIALOG`](dialog.md).

**Valor devuelto**

The value returned by **Print form** indicates the height of the printable area. Este valor será tomado en cuenta automáticamente por el comando [Get printed height](../commands-legacy/get-printed-height.md).

Las cajas de diálogo de la impresora no aparecen cuando se utiliza **Print form**. The report does not use the print settings that were assigned to the form in the Design environment. There are two ways to specify the print settings before issuing a series of calls to **Print form**:

- Llamar a [PRINT SETTINGS](../commands-legacy/print-settings.md). In this case, you let the user choose the settings.
- Llame a [SET PRINT OPTION](../commands-legacy/set-print-option.md) y [GET PRINT OPTION](../commands-legacy/get-print-option.md). In this case, print settings are specified programmatically.

**Print form** crea cada página impresa en la memoria. Cada página se imprime cuando la página en memoria está llena o cuando se llama a [PAGE BREAK](../commands-legacy/page-break.md). Para asegurar la impresión de la última página después de cualquier uso de **Print form**, debe concluir con el comando [PAGE BREAK](../commands-legacy/page-break.md) (excepto en el contexto de un [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), ver nota). Otherwise, if the last page is not full, it stays in memory and is not printed.

**Warning:** If the command is called in the context of a printing job opened with [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), you must NOT call [PAGE BREAK](../commands-legacy/page-break.md) for the last page because it is automatically printed by the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command. Si llama a [PAGE BREAK](../commands-legacy/page-break.md) en este caso, se imprime una página en blanco.

This command prints external areas and objects (for example, 4D Write or 4D View areas). El área se reinicializa cada vez que se ejecuta el comando.

**Warning:** Subforms are not printed with **Print form**. Para imprimir sólo un formulario con dichos objetos, utilice [PRINT RECORD](../commands-legacy/print-record.md) en su lugar.

**Print form** genera sólo un [evento [`On Printing Detail`](../Events/onPrintingDetail.md) para el método formulario.

**4D Server:** This command can be executed on 4D Server within the framework of a stored procedure. En este contexto:

- Make sure that no dialog box appears on the server machine (except for a specific requirement).
- In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated.

## Ejemplo 1

El siguiente ejemplo funciona como lo haría un comando [PRINT SELECTION](../commands-legacy/print-selection.md). However, the report uses one of two different forms, depending on whether the record is for a check or a deposit:

```4d
 QUERY([Register]) // Seleccionar los registros
 If(OK=1)
    ORDER BY([Register]) // Ordenar los registros
    If(OK=1)
       PRINT SETTINGS // Mostrar cuadros de diálogo de impresión
       If(OK=1)
          For($vlRecord;1;Records in selection([Register]))
             If([Register]Type ="Check")
                Print form([Register];"Check Out") // Utilice un formulario para cheques
             Else
                Print form([Register];"Deposit Out") // Utilice otro formulario para depósitos
             End if
             NEXT RECORD([Register])
          End for
          PAGE BREAK // Asegúrese de que se imprime la última página
       End if
    End if
 End if
```

## Ejemplo 2

Consulte el ejemplo del comando [SET PRINT MARKER](../commands-legacy/set-print-marker.md).

## Ejemplo 3

This form is used as dialog, then printed with modifications:

![](../assets/en/commands/pict6264975.en.png)

El método del formulario:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

El código que llama al diálogo imprime su cuerpo:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

## Ver también

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 5                           |
| Hilo seguro       | &cross; |


