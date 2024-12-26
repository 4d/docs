---
id: print-form
title: Print form
slug: /commands/print-form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*tabla* ;} *formulario* {; *dataForm*} {; *area1*{; *area2*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Print form.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a imprimir, o Tabla por defecto, si se omite |
| formulario | Text, Object | &#8594;  | Formulario a imprimir |
| dataForm | Object | &#8594;  | Datos a asociar al formulario |
| area1 | Integer | &#8594;  | Marcador de impresión, o Área de inicio (si area2 se especifica) |
| area2 | Integer | &#8594;  | Área de fin (si área1 se especifica) |
| Resultado | Integer | &#8592; | Altura de la sección impresa |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Print form.Summary-->Print form simplemente imprime *formulario* con los valores actuales de los campos y variables.<!-- END REF--> Generalmente este comando se utiliza para imprimir informes muy complejos que necesiten un control total del proceso de impresión. Print form no procesa registros, ni rupturas o saltos de páginas. Estas operaciones son su responsabilidad. Print form imprime campos y variables en un marco de tamaño fijo únicamente.

En el parámetro *formulario*, puede pasar:

* el nombre de un formulario, o
* la ruta (en sintaxis POSIX) a un archivo .json válido que contiene una descripción del formulario a usar (ver *Ruta de archivo del formulario*), o
* un objeto que contiene una descripción del formulario.

Como Print form no genera un salto de página después de imprimir el formulario, es fácil combinar diferentes formularios en la misma página. Entonces, Print form es ideal para efectuar tareas de impresión complejas que involucren diferentes tablas y diferentes formularios. Para forzar un salto de página entre formularios, utilice el comando [PAGE BREAK](page-break.md). Para pasar a la siguiente página de un formulario cuya altura es mayor que el espacio disponible, llame el comando [CANCEL](cancel.md "CANCEL") antes del comando [PAGE BREAK](page-break.md).

Se pueden utilizar tres sintaxis diferentes:

* **Impresión del área de detalle**

Sintaxis:

```4d
 height:=Print form(myTable;myForm)
```

En este caso, Print form sólo imprime el área de detalle (el área entre la línea encabezado y la línea detalle) del formulario.

* **Impresión del área del formulario**

Sintaxis:

```4d
 height:=Print form(myTable;myForm;marker)
```

En este caso, el comando imprimirá la sección designada por el *marcador*. Pase en el parámetro *marcador* una de las constantes del tema *Área de formulario* :

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Form break0   | Entero largo | 300   |
| Form break1   | Entero largo | 301   |
| Form break2   | Entero largo | 302   |
| Form break3   | Entero largo | 303   |
| Form break4   | Entero largo | 304   |
| Form break5   | Entero largo | 305   |
| Form break6   | Entero largo | 306   |
| Form break7   | Entero largo | 307   |
| Form break8   | Entero largo | 308   |
| Form break9   | Entero largo | 309   |
| Form detail   | Entero largo | 0     |
| Form footer   | Entero largo | 100   |
| Form header   | Entero largo | 200   |
| Form header1  | Entero largo | 201   |
| Form header10 | Entero largo | 210   |
| Form header2  | Entero largo | 202   |
| Form header3  | Entero largo | 203   |
| Form header4  | Entero largo | 204   |
| Form header5  | Entero largo | 205   |
| Form header6  | Entero largo | 206   |
| Form header7  | Entero largo | 207   |
| Form header8  | Entero largo | 208   |
| Form header9  | Entero largo | 209   |

**• Impresión de sección**

Sintaxis:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

En este caso, el comando imprimirá la sección incluida entre los parámetros *areaInicio* y *areaFin* Parámetros. Los valores introducidos deben expresarse en píxeles.

El valor devuelto por Print form indica la altura del área de impresión. Este valor será tomado en cuenta automáticamente por el comando [Get printed height](get-printed-height.md).

Las cajas de diálogo de impresión no aparecen cuando utiliza Print form. El informe no utiliza los parámetros de impresión definidos para el formulario en el entorno Diseño. Hay dos formas de especificar los parámetros de impresión antes de efectuar una serie de llamadas a Print form:

* Llamar [PRINT SETTINGS](print-settings.md). En este caso, usted le permite al usuario elegir los parámetros.
* Llamar [SET PRINT OPTION](set-print-option.md) y [GET PRINT OPTION](get-print-option.md). En este caso, los parámetros de impresión se especifican por programación.

Print form crea cada página impresa en memoria. Cada página se imprime cuando la página en memoria está llena o cuando usted llama a [PAGE BREAK](page-break.md). Para asegurar la impresión de la última página después de utilizar Print form, debe concluir con el comando [PAGE BREAK](page-break.md) (excepto en el contexto de un [OPEN PRINTING JOB](open-printing-job.md), ver nota). De lo contrario, si la última página no está llena, permanece en memoria y no se imprime.

**Atención:** si el comando se llama en el contexto de un trabajo de impresión abierto con [OPEN PRINTING JOB](open-printing-job.md), NO debe llamar a [PAGE BREAK](page-break.md) para la última página porque se imprime automáticamente por el comando [CLOSE PRINTING JOB](close-printing-job.md). Si llama [PAGE BREAK](page-break.md) en este caso, se imprime una página vacía.

Este comando imprime las áreas y objetos externos (por ejemplo, las áreas 4D Write o 4D View). El área se reinicializa para cada ejecución del comando.

**Atención:** Print form no imprime subformularios. Para imprimir sólo un formulario con tales objetos, utilice mejor [PRINT RECORD](print-record.md).

Print form genera sólo un evento On Printing Detail para el método formulario.

**4D Server:** este comando puede ejecutarse en 4D Server dentro del framework de un procedimiento almacenado. En este contexto:

* Asegúrese de que no aparezca ninguna caja de diálogo en el equipo servidor (excepto para un requerimiento específico).
* En el caso de un problema relacionado con la impresora (sin papel, impresora desconectada, etc.), no se genera un mensaje de error.

#### Ejemplo 1 

Print form no imprime subformularios. Para imprimir sólo un formulario con tales objetos, utilice mejor [PRINT RECORD](print-record.md "PRINT RECORD").  
  
Print form genera únicamente un evento On Printing Detail por método de formulario.

**4D Server:** este comando puede ejecutarse en 4D Server en el marco de un procedimiento almacenado. En este contexto:

* Asegúrese de que no aparezca ninguna caja de diálogo en el equipo servidor (excepto para una necesidad específica).
* En el caso de un problema relacionado con la impresora (sin papel, impresora desconectada, etc.), no se genera un mensaje de error.

#### Ejemplo 2 

El siguiente ejemplo funciona como lo haría un comando [PRINT SELECTION](print-selection.md "PRINT SELECTION"). Sin embargo, el informe utiliza uno de los dos formularios diferentes, dependiendo de si el registro es para un cheque o para un depósito:

```4d
 QUERY([Registro]) // Select the records
 If(OK=1)
    ORDER BY([Registro]) // Ordenar los registros
    If(OK=1)
       PRINT SETTINGS // Mostrar las cajas de diálogo de impresión
       If(OK=1)
          For($vlRegistro;1;Records in selection([Registro]))
             If([Registro]Tipo ="Cheque")
                Print form([Registro];"SalidaCheque") // Utilice un formulario de cheques
             Else
                Print form([Registro];"SalidaDeposito") // Utilizar otro formulario de depósitos
             End if
             NEXT RECORD([Registro])
          End for
          PAGE BREAK // Asegúrese de que la última página se imprima
       End if
    End if
 End if
```

#### Ejemplo 3 

Este formulario se utiliza como diálogo y luego se imprime con modificaciones:

![](../assets/en/commands/pict6264975.en.png)

El método formulario:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

El código que llama al diálogo luego imprime su cuerpo:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

#### Ver también 

[CANCEL](cancel.md)  
[PAGE BREAK](page-break.md)  
[PRINT SETTINGS](print-settings.md)  
[SET PRINT OPTION](set-print-option.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 5 |
| Hilo seguro | &cross; |


