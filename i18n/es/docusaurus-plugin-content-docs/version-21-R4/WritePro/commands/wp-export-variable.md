---
id: wp-export-variable
title: WP EXPORT VARIABLE
slug: /WritePro/commands/wp-export-variable
displayed_sidebar: docs
---

<!--REF #_command_.WP EXPORT VARIABLE.Syntax-->**WP EXPORT VARIABLE** ( *wpDoc* : Object ; *destination* : Text, Blob ; *format* : Integer {; *option* : Object, Integer} )<!-- END REF-->

<!--REF #_command_.WP EXPORT VARIABLE.Params-->

<div class="no-index">

| Parámetros  | Tipo            |                             | Descripción                                     |
| ----------- | --------------- | --------------------------- | ----------------------------------------------- |
| wpDoc       | Object          | &#8594; | Variable 4D Write Pro                           |
| destination | Text, Blob      | &#8594; | Variable para recibir los contenidos exportados |
| format      | Integer         | &#8594; | Formato de salida variable                      |
| option      | Object, Integer | &#8594; | Opciones de exportación                         |

</div>
<!-- END REF-->

## Descripción

<!--REF #_command_.WP EXPORT VARIABLE.Summary-->El comando **WP EXPORT VARIABLE** exporta el objeto *wpDoc* 4D Write Pro a la variable *destination* 4D en el *format* especificado.<!-- END REF-->

En *wpDoc*, pase el objeto 4D Write Pro que desea exportar.

En *destination*, pase la variable que quiere llenar con el objeto exportado de 4D Write Pro. El tipo de esta variable depende del formato de exportación especificado en el parámetro *format*:

- Si pasa el formato .4wp nativo o el formato .docx, la variable será de tipo Blob,
- Si pasa un formato HTML o SVG, la variable será de tipo Text.

En el parámetro *format*, pase una constante del tema *4D Write Pro Constants* para definir el formato de exportación que desea utilizar. Cada formato está relacionado con un uso específico. Se soportan los siguientes formatos:

| Constante           | Tipo    | Valor | Comentario |
| ------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4wp              | Integer | 4     | El documento 4D Write Pro se guarda en un formato de archivo nativo (HTML comprimido e imágenes guardadas en una carpeta separada). Se incluyen las etiquetas específicas 4D y no se calculan las expresiones 4D. |
| wk docx             | Integer | 7     | Extensión .docx. Compatibilidad certificada con Microsoft Word 2010 y versiones posteriores; incluye cuerpo/encabezados/pies/secciones, configuración de página, imágenes, hojas de estilo, variables compatibles y enlaces. |
| wk mime html        | Integer | 1     | El documento 4D Write Pro se guarda como HTML MIME estándar con documentos HTML e imágenes anidadas como partes MIME (base64). |
| wk pdf              | Integer | 5     | Extensión .pdf. El documento 4D Write Pro se guarda en PDF según modo vista Página. |
| wk svg              | Integer | 8     | Exporta la página del documento en SVG (una página por exportación). |
| wk web page html 4D | Integer | 3     | El documento se guarda como HTML con etiquetas específicas 4D; formato sin pérdidas para almacenamiento. |

**Notas:**

- "Etiquetas específicas 4D" significa XHTML 4D con un espacio de nombres 4D y estilos CSS 4D.
- Para más información sobre el formato de documento 4D Write Pro, consulte el [formato del documento .4wp](https://doc.4d.com/4Dv20/4D/20/Using-a-4D-Write-Pro-area.200-6229460.en.html#2895813).
- Para ver una lista de las diferencias o incompatibilidades conocidas al utilizar el formato .docx, consulte [Importación y exportación en formato .docx](../user-legacy/importing-and-exporting-in-docx-format.md).
- Cuando se exporta al formato SVG con este comando, las imágenes se integran en formato base64.
- Para obtener más información sobre la exportación a formato SVG, consulte [Exportar a formato SVG](https://doc.4d.com/4Dv20/4D/20/Exporting-to-SVG-format.200-6229468.en.html).

### Parámetro option

Pase en *option* un objeto que contenga los valores para definir las propiedades del documento exportado. Las siguientes propiedades están disponibles:

| Constante                                   | Valor              | Comentario |
| ------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | cidHostDomain      | Nombre de dominio CID para URLs generadas en `wk mime html`. |
| wk embedded pictures                        | embeddedPictures   | Sólo SVG: controla incrustación de imágenes en el .svg exportado. |
| wk factur x                                 | facturX            | Sólo PDF: objeto de configuración Factur-X. |
| wk files                                    | Histórico          | Sólo PDF: colección de archivos para adjuntar al PDF final. |
| wk google fonts tag                         | googleFontsTag     | Sólo SVG: regla de importación de Google Fonts. |
| wk HTML pretty print                        | htmlPrettyPrint    | Formatea el HTML para facilitar lectura. |
| wk max picture DPI                          | maxPictureDPI      | Resolución máxima de imagen para exportación. |
| wk optimized for                            | optimizedFor       | Optimización por destino (`wk print` / `wk screen`). |
| wk page index                               | pageIndex          | Sólo SVG: índice de página a exportar. |
| wk pdfa version                             | pdfaVersion        | Versión PDF/A (`wk pdfa2` / `wk pdfa3`). |
| wk recompute formulas                       | recomputeFormulas  | Recalcular o no fórmulas durante exportación. |
| wk visible background and anchored elements | visibleBackground  | Mostrar/exportar fondo e imágenes/elementos anclados. |
| wk visible empty images                     | visibleEmptyImages | Mostrar/exportar marcador para imágenes no cargables. |
| wk visible footers                          | visibleFooters     | Mostrar/exportar pies. |
| wk visible headers                          | visibleHeaders     | Mostrar/exportar encabezados. |
| wk visible references                       | visibleReferences  | Mostrar/exportar expresiones 4D como referencias. |
| wk whitespace                               | whitespace         | Valor CSS white-space para `wk mime html`. |

La siguiente tabla indica la *option* disponible por *format* de exportación:

|                                             | **wk 4wp**                                                                                                        | **wk docx**                                                                                                      | **wk mime html**                                                                                                       | **wk pdf**                                                                                                        | **wk web page html 4d**                                                                                           | **wk svg**                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| wk CID host domain name                     | \-                                                                                                               | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                              | \-                                                                                                               | \-                                                                                                               | \-                                                                                                                  |
| wk embedded pictures                        | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | \-                                                                                                               | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk factur x                                 | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                         | \-                                                                                                               | \-                                                                                                                  |
| wk files                                    | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                         | \-                                                                                                               | \-                                                                                                                  |
| wk google fonts tag                         | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | \-                                                                                                               | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: false)    |
| wk HTML pretty print                        | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: false) | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: False)      | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: False) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: false)    |
| wk max picture DPI                          | \-                                                                                                               | siempre 300                                                                                                      | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: 300)   | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: 300)      |
| wk optimized for                            | \-                                                                                                               | always wk print                                                                                                  | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: wk screen)  | always wk print                                                                                                   | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: wk print) |
| wk page index                               | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | \-                                                                                                               | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: 1)        |
| wk pdfa version                             | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png)                                                         | \-                                                                                                               | \-                                                                                                                  |
| wk recompute formulas                       | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)  | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk visible background and anchored elements | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true) | siempre true                                                                                                           | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)  | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk visible empty images                     | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true) | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)       | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)  | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk visible footers                          | \-                                                                                                               | siempre true                                                                                                     | siempre false                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)  | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk visible headers                          | \-                                                                                                               | siempre true                                                                                                     | siempre false                                                                                                          | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)  | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: true)     |
| wk visible references                       | \-                                                                                                               | \-                                                                                                              | \-                                                                                                                    | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: false) | \-                                                                                                               | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: false)    |
| wk whitespace                               | \-                                                                                                               | \-                                                                                                              | ![](../../assets/en/WritePro/commands/pict5058606.en.png) (por defecto: "pre-wrap") | \-                                                                                                               | \-                                                                                                               | \-                                                                                                                  |

**Nota de compatibilidad:** pasar un valor *longint* en *option* se soporta por razones de compatibilidad, pero se recomienda usar un parámetro object.

## Ejemplo 1

Quiere exportar el contenido del objeto *myArea* 4D Write Pro en formato MIME y añadir "gmail.com" como dominio host:

```4d
 var $option;$export : Object
 
 $option[wk CID host domain name]:="gmail.com"
 
 WP EXPORT VARIABLE(myArea;$export;wk mime html;$option)
```

## Ejemplo 2

Desea enviar un correo electrónico que contenga texto con estilo, referencias 4D e imágenes. Puede utilizar una zona 4D Write Pro exportada en formato MIME y enviada mediante SMTP:

```4d
  // crea el transportador
 $server:=New object
 $server.host:="smtp.gmail. om"
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server. assword:="XXX"
 
 $transporter:=SMTP New transporter($server)
 
 WP EXPORT VARIABLE(WParea;$mime;wk mime html)
 
 $mailTmp:=MAIL Convert from MIME($mime)
 
  // añadir imágenes (si las hay)
 If($mailTmp.attachments#Null)
    $email.attachments:=$mailTmp.attachments
 End if
 
 $email.bodyStructure:=$mailTmp.bodyStructure
 $email.bodyValues:=$mailTmp.bodyValues
 
 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred: "+$status.statusText)
 End if
```

## Ejemplo 3

Para exportar la primera página de un 4D Write Pro como SVG en una variable Text y ocultar los encabezados:

```4d
 var $options : Object
 var $destination : Text
 
 $options:=New object
 $options[wk optimized for]:=wk screen
 $options[wk visible headers]:=False
 WP EXPORT VARIABLE(WPArea;$destination;wk svg;$options)
```

## Ver también

[4D QPDF (Component) - PDF Get attachments](https://github.com/4d/4D-QPDF)
[Blog - 4D Write Pro: generación de facturas electrónicas](https://blog.4d.com/4d-write-pro-electronic-invoice-generation)  
[Blog post - 4D Write Pro: Exportar a PDF con cerrados](https://blog.4d.com/4d-write-pro-export-to-pdf-with-enclosures)  
[Exportar a formatos HTML y MIME HTML](../user-legacy/exporting-to-html-and-mime-html-formats.md)<br/>
[Importar y exportar al formato docx](../user-legacy/importing-and-exporting-in-docx-format.md)<br/>
[WP EXPORT DOCUMENT](../commands/wp-export-document)
