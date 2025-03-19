---
id: wp-import-document
title: WP Import document
slug: /WritePro/commands/wp-import-document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *rutaArchivo* {; *opcion*} ) -> Objeto<!-- END REF-->
<!--REF #_command_.WP Import document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaArchivo | Text | &#8594;  | Ruta a un documento 4D Write (.4w7 o .4wt) o un documento 4D Write Pro(.4wp) |
| opcion | Integer, Object | &#8594;  | Opción de importación para expresiones HTML |
| Object | Object | &#8592; | Objeto 4D Write Pro |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP Import document.Summary-->El comando **WP Import document** convierte un documento 4D Write Pro / 4D Write existente (extensión .4wp, .4w7 o .4wt) o MS Word (.docx) a un nuevo objeto 4D Write Pro.<!-- END REF-->

En el parámetro *rutaArchivo*, pase la ruta de acceso de un documento almacenado en el disco. Los siguientes tipos de documentos se soportan:

* antiguo documento 4D Write (.4w7 o .4wt). Para obtener una lista detallada de las funcionalidades 4D Write que actualmente son soportadas en los objetos 4D Write Pro, consulte la sección *Importar documentos 4D Write*.
* documentos en formato 4D Write Pro (.4wp). Para mayor información sobre el formato del documento 4D Write Pro, consulte *Formato del documento .4wp*.
* documentos en formato .docx. Para más información, consulte *Importar y Exportar al formato .docx*.

Debe pasar una ruta completa, a menos que el documento se encuentre en el mismo nivel que el archivo de estructura, en cuyo caso sólo puede pasar su nombre.

**Nota:** si desea importar un documento almacenado en un campo BLOB 4D, también puede considerar el uso del comando [WP New](wp-new.md).

Se devuelve un error si el parámetro *rutaArchivo* no es válido, si el archivo no está, o si el formato del archivo no se soporta.

El parámetro opcional *opcion* permite definir las opciones de importación para:

* **entero largo**  
    
De forma predeterminada, las expresiones HTML insertadas en los antiguos documentos 4D Write no se importan (no es soportado por 4D Write Pro). Si pasa la constante wk import html expressions as text, las expresiones HTML se importarán como texto sin procesar dentro de las etiquetas ##htmlBegin## y ##htmlEnd## tags -- lo que requerirá acciones de formateo posteriores. Por ejemplo:

```RAW
##htmlBegin##Imported titlebold##htmlEnd##
```

* **objeto**  
    
Puede pasar un objeto para definir cómo se manejan los siguientes atributos durante la operación de importación:

| **Atributo <br/>** | **Tipo** | **Descripción <br/>**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anchoredTextAreas          | Texto    | Sólo para documentos de MS Word (.docx). Especifica como se manejan las áreas de texto ancladas Word. Valores disponibles:<br/><br/> **anchored** (por defecto) - Las áreas de texto ancladas se tratan como cajas de texto. **inline** \- Las áreas de texto ancladas se tratan como texto en línea en la posición del ancla. **ignore** (por defecto) - Las áreas de texto ancladas se ignoran. **Nota**: el diseño y el número de páginas del documento pueden cambiar. Ver también *Cómo importar formato .docx*                                                                                                                                          |
| anchoredImages             | Texto    | Sólo para documentos MS Word (.docx). Especifica cómo se manejan las imágenes ancladas. Valores disponibles:<br/><br/> **all** (por defecto) - Todas las imágenes ancladas se importan como imágenes ancladas con sus propiedades de ajuste de texto (excepción: la opción de ajuste "apretado" de .docx se importa como ajuste cuadrado). **ignoreWrap** \- Las imágenes ancladas se importan, pero se ignora el texto que las envuelve. **ignore** \- Las imágenes ancladas no se importan.                                                                                                                                                                 |
| sections                   | Texto    | Sólo para documentos de MS Word (.docx). Especifica cómo se maneja la sección. Valores disponibles:<br/><br/> **all** (por defecto) - Se importan todas las secciones. Las secciones continuas, pares o impares se convierten en secciones estándar. **ignore** \- Las secciones se convierten en secciones predeterminadas de 4D Write Pro (diseño vertical A4 sin encabezado ni pie de página). **Nota**: los saltos de sección de todo tipo pero continuos se convierten en saltos de sección con salto de página. Los saltos de sección continuos se importan como saltos de sección continuos.                                                           |
| fields                     | Texto    | Sólo para documentos MS Word (.docx). Especifica cómo se manejan los campos .docx que no se pueden convertir a fórmulas de 4D Write Pro. Valores disponibles:<br/><br/> **ignore** \- los campos .docx son ignorados. **label** \- las referencias a los campos .docx se importan como etiquetas entre llaves dobles ("{{ }}"). Ejemplo: El campo "NombreCliente" se importaría como {{NombreCliente}}.<br/> **value** (por defecto) - Se importa el último calculado para el campo .docx (si está disponible). **Nota**: si un campo .docx corresponde a una variable de 4D Write Pro, el campo se importa como una fórmula y esta opción se ignora. |
| borderRules                | Texto    | Sólo para documentos MS Word (.docx). Especifica cómo se manejan los bordes de los párrafos. Valores disponibles:<br/><br/> **collapse** \- El formato de los párrafos se modifica para imitar los bordes colapsados automáticamente. Tenga en cuenta que la propiedad de colapso sólo se aplica durante la operación de importación. Si una hoja de estilo con un ajuste de colapso automático de bordes se vuelve a aplicar después de la operación de importación, el ajuste se ignorará. **noCollapse** (por defecto) - El formato de los párrafos no se modifica.                                                                                        |
| preferredFontScriptType    | Texto    | Sólo para documentos de MS Word (.docx). Especifica el tipo de letra preferido para utilizar cuando se definen diferentes tipos de letra para una sola propiedad de fuente en OOXML. Valores disponibles:<br/><br/> **latin** (por defecto) - Escritura latina **bidi** \- Escritura bidireccional. Adecuado si el documento es principalmente un texto bidireccional de izquierda a derecha (LTR) o de derecha a izquierda (RTL) (por ejemplo, árabe o hebreo). **eastAsia** \- Escritura de Asia Oriental. Adecuado si el documento es principalmente un texto asiático.                                                                                    |
| htmlExpressions            | Texto    | Sólo para documentos 4D Write (.4w7). Especifica cómo se manejan las expresiones HTML. Valores disponibles: <br/><br/> **rawText** \- Las expresiones HTML se importan como texto sin procesar dentro de las etiquetas ##htmlBegin## y ##htmlEnd## **ignore** (por defecto) - Las expresiones HTML se ignoran.                                                                                                                                                                                                                                                                                                                                                |
| importDisplayMode          | Texto    | <br/> Sólo para documentos 4D Write (.4w7). Especifica cómo se gestiona la visualización de la imagen. Valores disponibles: <br/><br/> **legacy -** El modo de visualización de la imagen 4W7 se convierte utilizando una imagen de fondo si es diferente a la escala de ajuste. **noLegacy** (predeterminado): el modo de visualización de la imagen 4W7 se convierte en el atributo *imageDisplayMode* si es diferente de la escala de ajuste.                                                                                                                                                                                                      |

**Notas de compatibilidad**

* *Las hojas de estilo de caracteres en los documentos heredados de 4D Write utilizan un mecanismo patentado, que no es soportado por 4D Write Pro. Para obtener el mejor resultado para el texto importado, los atributos de la hoja de estilo se convierten en atributos de estilo "codificados". Las hojas de estilo de caracteres heredadas no se importan y ya no se hace referencia a ellas en el documento.*
* *La compatibilidad con la importación en formato .docx sólo está certificada para Microsoft Word 2010 y versiones más recientes. Las versiones más antiguas, en particular Microsoft Word 2007, pueden no importar correctamente.*

## Ejemplo 1 

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Ejemplo 2 

Quiere importar un documento .docx y le gustaría que los bordes de los párrafos estuvieran contraídos como lo están en MS Word:

```4d
 $options:=New object
 $options.borderRules:="collapse" //colapsar los bordes de los párrafos durante la conversión
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

  
Quiere importar los campos originales del .docx como texto (para los campos no convertidos a fórmulas 4D):

```4d
 $options:=New object
 $options.fields:="label" //para los campos no convertidos, importar las referencias de los campos como texto entre {{ y }}
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Quiere importar un documento .docx cuyo texto está en su mayoría en japonés:

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //forzar la conversión para preferir los scripts de fuentes eastAsia
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Ver también 

[WP New](wp-new.md)  