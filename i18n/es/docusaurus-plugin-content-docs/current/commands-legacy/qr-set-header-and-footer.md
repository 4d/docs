---
id: qr-set-header-and-footer
title: QR SET HEADER AND FOOTER
slug: /commands/qr-set-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HEADER AND FOOTER.Syntax-->**QR SET HEADER AND FOOTER** ( *area* ; *selector* ; *tituloIzq* ; *tituloCent* ; *tituloDer* ; *altura* {; *imagen* {; *alinImag*}} )<!-- END REF-->
<!--REF #_command_.QR SET HEADER AND FOOTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| selector | Integer | &#8594;  | 1 = Encabezado, 2 = Pie de página |
| tituloIzq | Text | &#8594;  | Texto mostrado a la izquierda |
| tituloCent | Text | &#8594;  | Texto mostrado en el centro |
| tituloDer | Text | &#8594;  | Texto mostrado a la derecha |
| altura | Integer | &#8594;  | Altura del encabezado o pie de página |
| imagen | Picture | &#8594;  | Imagen a mostrar |
| alinImag | Integer | &#8594;  | Atributo de alineación de la imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET HEADER AND FOOTER.Summary-->El comando QR SET HEADER AND FOOTER permite definir el contenido y el tamaño del encabezado y el pie de página de *area*.<!-- END REF-->

*selector* le permite seleccionar el encabezado o pie de página:

* si *selector* es igual a 1, se afectará el encabezado;
* si *selector* es igual a 2, se afectará el pie de página.

*tituloIzq*, *tituloCent* y *tituloDer* son los valores para los encabezados/pies de páginas izquierdo, centro y derecha, respectivamente.

*altura* es la altura del encabezado/pie de página, expresada en la unidad seleccionada para el informe rápido.

*imagen* contiene la imagen a mostrar en el encabezado o pie de página.

*alinImag* es el atributo de alineación para la imagen pasada en *imagen*.

* Si *alinImag* es igual a 1, la imagen se alinea a la izquierda.
* Si *alinImag* es igual a 2, la imagen se centra.
* Si *alinImag* es igual a 3, la imagen se alinea a la derecha.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *selector* es incorrecto, se genera el error -9852.

#### Ejemplo 

La siguiente instrucción coloca el título “Título del centro” en el encabezado del informe rápido en MiArea y define la altura del encabezado en 200 puntos:

```4d
 QR SET HEADER AND FOOTER(MiArea;1;"";"Título del centro";"";200)
```

#### Ver también 

[QR GET HEADER AND FOOTER](qr-get-header-and-footer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 774 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


