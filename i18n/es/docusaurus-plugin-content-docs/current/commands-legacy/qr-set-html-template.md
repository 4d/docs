---
id: qr-set-html-template
title: QR SET HTML TEMPLATE
slug: /commands/qr-set-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HTML TEMPLATE.Syntax-->**QR SET HTML TEMPLATE** ( *area* ; *plantilla* )<!-- END REF-->
<!--REF #_command_.QR SET HTML TEMPLATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| plantilla | Text | &#8594;  | Código de la plantilla HTML |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR SET HTML TEMPLATE.Summary-->El comando QR SET HTML TEMPLATE define la plantilla HTML a utilizar para el área de informe rápido referenciada por *area*.<!-- END REF--> Esta plantilla se utilizará durante la creación del informe en formato HTML. 

La plantilla utiliza un conjunto de etiquetas para procesar los datos. Este funcionamiento permite generar documentos HTML cercanos al informe original o documentos con apariencia totalmente personalizada. 

**Nota:** primero debe llamar [QR SET DESTINATION](qr-set-destination.md "QR SET DESTINATION") para definir el formato HTML como destino de salida.

#### Etiquetas HTML 

*<!--#4DQRheader--> ... <!--/#4DQRheader-->*  
Los títulos de las columnas se insertarán entre las etiquetas. Estas etiquetas generalmente son utilizadas para definir la línea del título del informe.

*<!--#4DQRrow--> ... <!--/#4DQRrow-->*  
La información insertada entre estas etiquetas se repite para cada línea de datos (incluyendo las líneas de detalle y subtotal).

*<!--#4DQRcol--> ... <!--/#4DQRcol-->*  
La información insertada entre estas etiquetas se repite para cada columna de datos dentro de una línea. El orden de la columna permanecerá idéntico al orden en el informe. Cuando se utilizan conjuntamente con *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*, las etiquetas *<!--#4DQRcol--> ... <!--/#4DQRcol-->* no serán efectivas a través de las columnas cuyos contenidos no son insertados utilizando *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*.

Por ejemplo, en un informe que tiene cinco columnas, usted utiliza las etiquetas *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->* para insertar los datos de la segunda columna, *<!--#4DQRcol--> ... <!--/#4DQRcol-->* irán por cada fila, a través de las columnas 1, 3, 4, y 5\. Estas últimas etiquetas ignoran la columna cuyo contenido se publica utilizando *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->*. 

*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*  
La información insertada entre estas etiquetas se extrae de la columna del informe cuyo número es “n”. Si quiere mostrar por ejemplo las columnas en un orden diferente al del informe inicial, puede escribir:  
*<!--#4DQRrow--> <!--#4DQRcol;3--> ... <!--/#4DQRcol;3--><!--#4DQRcol;2--> ... <!--/#4DQRcol;2--><!--#4DQRcol;1--> ... <!--/#4DQRcol;1--> <!--/#4DQRrow-->*  

En este ejemplo, las columnas se insertan en el orden inverso del informe.

*<!--#4DQRfont--> ... <!--/#4DQRfont-->*  
El contenido HTML insertado entre estas etiquetas será utilizada para la definición de la fuente de la columna o celda actual. 

*<!--#4DQRfont-->* se reemplazará por una definición de fuente HTML y *<!--/#4DQRfont-->* se reemplazará por la etiqueta de cierre estándar (*</font>*).

*<!--#4DQRface--> ... <!--/#4DQRface-->*  
El contenido HTML insertado entre estas etiquetas será utilizará para la definición del estilo de la columna o celda actual.

*<!--#4DQRface-->* se reemplazará por una definición de estilo HTML *<!--#4DQRface-->* se reemplazará por la etiqueta de cierre estándar (*</face>*).

*<!--#4DQRbgcolor-->*  
Esta etiqueta de color se reemplazará por la definición de color de la celda actual. 

*<!--#4DQRdata-->*  
Esta etiqueta se reemplazará por los datos de la celda actual.

*<!--#4DQRlHeader--><!--#4DQRdata--><!--/#4DQRlHeader-->*  
*<!--#4DQRcHeader--><!--#4DQRdata--><!--/#4DQRcHeader-->*  
*<!--#4DQRrHeader--><!--#4DQRdata--><!--/#4DQRrHeader-->*  
Esas etiquetas se reemplazarán respectivamente por los datos en el encabezado de la izquierda, centro y derecha.

*<!--#4DQRlFooter--><!--#4DQRdata--><!--/#4DQRlFooter-->*  
*<!--#4DQRcFooter--><!--#4DQRdata--><!--/#4DQRcFooter-->*  
*<!--#4DQRrFooter--><!--#4DQRdata--><!--/#4DQRrFooter-->*  
  
Estas etiquetas se reemplazarán respectivamente por los datos del pie de página de la izquierda, centro o derecha. 

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR Get HTML template](qr-get-html-template.md)  