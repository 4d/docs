---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP PRINT` <!-- REF #_method_.VP PRINT.Summary -->abre una ventana de diálogo de impresión para imprimir *vpAreaName*<!-- END REF -->.

Pase el área 4D View Pro a imprimir en *vpAreaName*. El comando abrirá la ventana de diálogo de impresión del sistema donde se puede definir la impresora y las propiedades de la página.

> Las propiedades definidas en la ventana de diálogo de impresión son para el papel de la impresora, no son las propiedades de impresión para el área 4D View Pro. Las propiedades de impresión para áreas 4D View Pro se definen utilizando el comando [VP SET PRINT INFO](vp-set-print-info.md). Se recomienda encarecidamente que las propiedades de la impresora y del área 4D View Pro coincidan, de lo contrario el documento impreso podría no corresponder a sus expectativas.

En el parámetro opcional *sheet*, puede designar una hoja específica a imprimir (la numeración comienza en 0). Si se omite, la hoja actual se utiliza por defecto. Puedes seleccionar explícitamente la hoja de cálculo actual o todo el libro de trabajo con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

> * Las áreas 4D View Pro sólo pueden imprimirse con el comando `VP PRINT`.
> * Los comandos del tema de lenguaje 4D **Impresión** no son compatibles con `VP PRINT`.
> * Este comando está destinado a la impresión individual por parte del usuario final. Para trabajos de impresión automatizados, se aconseja exportar el área de 4D View Pro como PDF con el método [VP EXPORT DOCUMENT](vp-export-document.md).

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
