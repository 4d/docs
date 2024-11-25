---
id: qr-set-text-property
title: QR SET TEXT PROPERTY
slug: /commands/qr-set-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TEXT PROPERTY.Syntax-->**QR SET TEXT PROPERTY** ( *area* ; *numColumna* ; *numLinea* ; *propiedad* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET TEXT PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| numColumna | Integer | &#8594;  | Número de columna |
| numLinea | Integer | &#8594;  | Número de línea |
| propiedad | Integer | &#8594;  | Número de propiedad |
| valor | Integer, Text | &#8594;  | Valor de la propiedad seleccionada |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR SET TEXT PROPERTY.Summary-->El comando QR SET TEXT PROPERTY permite definir las propiedades de texto de la celda determinada por los parámetros *numColumna* y *numLinea*.<!-- END REF-->

*area* es la referencia del área del informe rápido.

*numColumna* es el número de la columna de la celda.

*numLinea* es la referencia de la línea de la celda. Puede pasar: 

* un valor positivo, designando la línea del subtotal correspondiente.
* una de las constantes del tema *QR Filas para propiedades*:  

| Constante      | Tipo         | Valor | Comentario                  |  
| -------------- | ------------ | ----- | --------------------------- |  
| qr detail      | Entero largo | \-2   | Área de detalle del informe |  
| qr footer      | Entero largo | \-5   | Pie de página               |  
| qr grand total | Entero largo | \-3   | Área total general          |  
| qr header      | Entero largo | \-4   | Encabezado de página        |  
| qr title       | Entero largo | \-1   | Título del informe          |

**Nota:** cuando pasa -4 o -5 en *numLinea*, necesita pasar un número de columna en *numColumna*, incluso si no lo utiliza.

**Nota:** en modo tablas cruzadas, el principio es similar excepto para los valores de las líneas, que siempre son positivos.

*propiedad* es el valor del atributo de texto a asignar. Puede utilizar las constantes del tema *QR Propiedades de texto* y los siguientes valores pueden definirs  

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
Si el parámetro *numColumna* incorrecto, se genera el error -9852.  
Si el parámetro *numLinea* incorrecto, se genera el error -9853.  
Si el parámetro *propiedad* incorrecto, se genera el error -9854.

#### Ejemplo 

Este método define varios atributos para el título de la primera columna:

```4d
  //Asigna la fuente Times:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")
  //asigna el tamaño de fuente de 10 puntos:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)
  //asigna el atributo de fuente negrita:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)
  //asigna el atributo de fuente Italica:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)
  //asigna el atributo de fuente subrayado:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)
  //asigna el color verde claro:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)
```

#### Ver también 

[QR Get text property](qr-get-text-property.md)  