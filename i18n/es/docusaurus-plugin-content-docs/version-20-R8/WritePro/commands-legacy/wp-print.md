---
id: wp-print
title: WP PRINT
slug: /WritePro/commands/wp-print
displayed_sidebar: docs
---

<!--REF #_command_.WP PRINT.Syntax-->**WP PRINT** ( *wpDoc* {; *opcImpr*} )<!-- END REF-->
<!--REF #_command_.WP PRINT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| opcImpr | Integer | &#8594;  | Opciones de impresión para el documento 4D Write Pro |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP PRINT.Summary-->El comando **WP PRINT** lanza una tarea de impresión para el documento 4D Write Pro especificado en *wpDoc*, o agrega el documento al trabajo de impresión actual si se llama entre los comandos [OPEN PRINTING JOB](../../commands-legacy/open-printing-job.md) y [CLOSE PRINTING JOB](../../commands-legacy/close-printing-job.md).<!-- END REF--> **WP PRINT** utiliza la configuración de impresión definida por los comandos 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md) o [SET PRINT OPTION](../../commands-legacy/set-print-option.md), excepto para los márgenes de las páginas que siempre se basan en la configuración de la página del documento 4D Write Pro. **WP PRINT** utiliza las opciones actuales de configuración de página (como el tamaño y orientación de página), o los del documento si [WP USE PAGE SETUP](wp-use-page-setup.md) se llamó anteriormente.

El parámetro opcional *opcImpr* se puede utilizar para establecer la vista WYSIWYG HTML para las salidas de impresión, así como también para los cálculos de fórmulas. Puede pasar una de las siguientes constantes del tema "4D Write Pro":

| Constante                       | Tipo         | Valor | Comentario                                                                                                               |
| ------------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------ |
| wk 4D Write Pro layout          | Entero largo | 0     | Formato 4D Write Pro estándar, puede incluir algunos atributos de estilo específicos                                     |
| wk do not recompute expressions | Entero largo | 2     | Especifica que todas las extpresiones en el documento no se vuelvan a calcular para imprimir o congelar.                 |
| wk html wysiwyg                 | Entero largo | 1     | En este formato, los atributos avanzados 4D Write Pro que no son compatibles con todos los navegadores se eliminan       |
| wk recompute expressions        | Entero largo | 0     | Indica que todas las expresiones en el documento se vuelvan a calcular antes de imprimir o congelar. (valor por defecto) |

Si se omite *opcImpr*, por defecto se utiliza el formato 4D Write Pro y las expresiones se vuelven a calcular (si es que hay alguna).

**Nota:** cuando se imprime con **WP PRINT**, los documentos 4D Write Pro siempre se imprimen como en modo de vista Página, sea cual sea la configuración de la propiedad Vista para el área (ver *Configurar propiedades Vista*).

**Nota de compatibilidad**: la capa de impresión heredada basada en GDI (que puede definirse utilizando el comando [SET PRINT OPTION](../../commands-legacy/set-print-option.md)) **es obsoleta** y no debe utilizarse con **WP PRINT**, ya que puede provocar artefactos de renderizado. Se recomienda utilizar únicamente la capa de impresión por defecto con este comando. 

#### Ejemplo 

Usted desea imprimir un documento 4D Write Pro en formato estándar o wysiwyg HTML en función del valor de una variable:

```4d
  // impresión en modo wysiwyg HTML o 4D Write Pro estándar
 If(rb_htmlwysiwyg=1)
    WP PRINT(writeProDoc;wk html wysiwyg)
 Else
    WP PRINT(writeProDoc;wk 4D Write Pro layout)
 End if
```

#### Ver también 

[WP Get position](wp-get-position.md)  
[WP USE PAGE SETUP](wp-use-page-setup.md)  