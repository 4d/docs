---
id: qr-get-header-and-footer
title: QR GET HEADER AND FOOTER
slug: /commands/qr-get-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR GET HEADER AND FOOTER.Syntax-->**QR GET HEADER AND FOOTER** ( *area* ; *selector* ; *tituloIzq* ; *tituloCent* ; *tituloDer* ; *alto* {; *imagen* {; *alinImag*}} )<!-- END REF-->
<!--REF #_command_.QR GET HEADER AND FOOTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| selector | Integer | &#8594;  | 1 = Encabezado, 2 = Pie de página |
| tituloIzq | Text | &#8592; | Texto mostrado a la izquierda |
| tituloCent | Text | &#8592; | Texto mostrado en el centro |
| tituloDer | Text | &#8592; | Texto mostrado a la derecha |
| alto | Integer | &#8592; | Altura del encabezado o pie de página |
| imagen | Picture | &#8592; | Imagen a mostrar |
| alinImag | Integer | &#8592; | Atributo de alineación para la imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR GET HEADER AND FOOTER.Summary-->El comando QR GET HEADER AND FOOTER permite recuperar el contenido y el tamaño del encabezado o pie de página.<!-- END REF-->

*selector* le permite seleccionar el encabezado o el pie de página:

* si *selector* es igual a 1, la información del encabezado se recuperará;
* si *selector* es igual a 2, la información del pie de página se recuperará.

*tituloIzq*, *tituloCent* y *tituloDer* devuelve los valores para los encabezados/pies de páginas izquierdo, centro y derecha, respectivamente.

*altura* devuelve la altura del encabezado/pie de página, expresada en la unidad seleccionada para el informe.

*imagen* devuelve una imagen que se muestra en el encabezado o pie de página.

*alinImag* es el atributo de alineación para la imagen mostrada en el encabezado/pie de página.

* Si *alinImag* devuelve 1, la imagen se alinea a la izquierda.
* Si *alinImag* devuelve 2, la imagen se centra.
* Si *alinImag* devuelve 3, la imagen se alinea a la derecha.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *selector* es incorrecto, se genera el error -9852.

#### Ejemplo 

El siguiente código recupera el contenido y la altura del título del encabezado y los muestra como alertas:

```4d
 QR GET HEADER AND FOOTER(MiArea;1;$textIzq;$textCent;$texDer;$altura)
 Case of
    :($textIzq#"")
       ALERT("El título a la izquierda es "+Char(34)+$textIzq+Char(34))
    :($textCent#"")
       ALERT("El título del centro es "+Char(34)+$textCent+Char(34))
    :($texDer#"")
       ALERT("El título de la derecha es "+Char(34)+$texDer+Char(34))
    Else
       ALERT("No hay título del encabezado en este informe.")
 End case
 ALERT("La altura del encabezado es "+String($altura))
```

#### Ver también 

[QR SET HEADER AND FOOTER](qr-set-header-and-footer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 775 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


