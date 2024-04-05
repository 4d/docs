---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( _vpAreaName_ : Text  { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

The `VP PRINT` command <!-- REF #_method_.VP PRINT.Summary -->opens a print dialog window to print _vpAreaName_<!-- END REF -->.

Pase el área 4D View Pro a imprimir en _vpAreaName_. El comando abrirá la ventana de diálogo de impresión del sistema donde se puede definir la impresora y las propiedades de la página.

> Las propiedades definidas en la ventana de diálogo de impresión son para el papel de la impresora, no son las propiedades de impresión para el área 4D View Pro. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](vp-set-print-info.md) command. Se recomienda encarecidamente que las propiedades de la impresora y del área 4D View Pro coincidan, de lo contrario el documento impreso podría no corresponder a sus expectativas.

In the optional _sheet_ parameter, you can designate a specific spreadsheet to print (counting begins at 0). Si se omite, la hoja actual se utiliza por defecto. Puedes seleccionar explícitamente la hoja de cálculo actual o todo el libro de trabajo con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

> * 4D View Pro areas can only be printed with the `VP PRINT` command.
> * Los comandos del tema de lenguaje 4D **Impresión** no son compatibles con `VP PRINT`.
> * Este comando está destinado a la impresión individual por parte del usuario final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](vp-export-document.md) method.

#### Ejemplo

El código siguiente:

```4d
 VP PRINT("myVPArea")
```

... abrirá una ventana de diálogo de impresión:

![](../../assets/en/ViewPro/cmd_vpPrint.PNG)

#### Ver también

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
