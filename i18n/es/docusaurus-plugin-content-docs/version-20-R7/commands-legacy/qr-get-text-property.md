---
id: qr-get-text-property
title: QR Get text property
slug: /commands/qr-get-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get text property.Syntax-->**QR Get text property** ( *area* ; *numColumna* ; *numLinea* ; *propiedad* ) : any<!-- END REF-->
<!--REF #_command_.QR Get text property.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| numColumna | Integer | &#8594;  | Número de columna |
| numLinea | Integer | &#8594;  | Número de línea |
| propiedad | Integer | &#8594;  | Número de la propiedad |
| Resultado | Text, Integer | &#8592; | Valor de la propiedad seleccionada |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR Get text property.Summary-->El comando QR Get text property devuelve el valor de la propiedad de los atributos texto en la celda determinada por *numColumna* y *numLinea*.<!-- END REF-->

*area* es la referencia del área del informe rápido.

*numColumna* es el número de la columna de la celda.

*numLinea* es la referencia de la línea de la celda. Puede pasar:

* un valor positivo designando el nivel de ruptura del subtotal correspondiente.
* una de las constantes del tema :  

| Constante      | Tipo         | Valor | Comentario                  |  
| -------------- | ------------ | ----- | --------------------------- |  
| qr detail      | Entero largo | \-2   | Área de detalle del informe |  
| qr footer      | Entero largo | \-5   | Pie de página               |  
| qr grand total | Entero largo | \-3   | Área total general          |  
| qr header      | Entero largo | \-4   | Encabezado de página        |  
| qr title       | Entero largo | \-1   | Título del informe          |

**Nota:** cuando pasa -4 ó -5 en *numLinea*, necesita pasar un número de columna en *numColumna*, incluso si no se utiliza. 

**Nota:** en modo tabla cruzada, el principio es similar excepto para los valores de las líneas, que siempre son positivos. 

*propiedad* es el valor de la propiedad de texto a obtener. Puede utilizar las constantes del tema *QR Propiedades de texto* y los siguientes valores pueden ser devueltos: 

| Constante                     | Tipo         | Valor | Comentario                                                                                |
| ----------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------- |
| \_o\_qr font                  | Entero largo | 1     | Obsoleto desde 4D v14R3 (utilice qr font name)                                            |
| qr alternate background color | Entero largo | 9     | Número de color de fondo alterno                                                          |
| qr background color           | Entero largo | 8     | Número de color de fondo                                                                  |
| qr bold                       | Entero largo | 3     | Atributo negrita (0 ó 1)                                                                  |
| qr font name                  | Entero largo | 10    | Nombre de la fuente como la devuelve por ejemplo el comando [FONT LIST](font-list.md)     |
| qr font size                  | Entero largo | 2     | Tamaño de fuente expresado en puntos (9 a 255)                                            |
| qr italic                     | Entero largo | 4     | Atributo itálica (0 ó 1)                                                                  |
| qr justification              | Entero largo | 7     | Atributo de justificación (0 por defecto, 1 a la izquierda, 2 al centro y 3 a la derecha) |
| qr text color                 | Entero largo | 6     | Atributo de número de color (Entero largo)                                                |
| qr underline                  | Entero largo | 5     | Atributo de estilo subrayado (0 ó 1)                                                      |

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *numColumna* es incorrecto, se genera el error -9852.  
Si el parámetro *numLinea* es incorrecto, se genera el error -9853.  
Si el parámetro *propiedad* es incorrecto, se genera el error -9854

#### Ver también 

[QR SET TEXT PROPERTY](qr-set-text-property.md)  