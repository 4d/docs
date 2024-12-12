---
id: qr-get-document-property
title: QR Get document property
slug: /commands/qr-get-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get document property.Syntax-->**QR Get document property** ( *area* ; *propiedad* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get document property.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| propiedad | Integer | &#8594;  | 1 = Diálogo de impresión, 2 = Unidad del documento |
| Resultado | Integer | &#8592; | Valor de la propiedad |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR Get document property.Summary-->El comando QR Get document property permite recuperar el estado mostrado para la caja de diálogo de impresión o la unidad utilizada para el documento presente en *area*.<!-- END REF-->

En *propiedad* puede utilizar una de las constantes del tema : 

| Constante           | Tipo         | Valor | Comentario                                                                                                                                                                                                                                          |
| ------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Entero largo | 3     | Código de caracteres del separador de campos. El valor por defecto es la variable del sistema FldDelimit (Tab por defecto).                                                                                                                         |
| qr printing dialog  | Entero largo | 1     | Visualización de la caja de diálogo de impresión:<br/>Si valor = 0, la caja de diálogo de impresión no se muestra antes de la impresión.Si valor = 1, la caja de diálogo de impresión se muestra antes de la impresión (valor por defecto). |
| qr record separator | Entero largo | 4     | Código de caracteres del separador de registros. El valor por defecto es la variable del sistema RecDelimit (Retorno de carro por defecto).                                                                                                         |
| qr unit             | Entero largo | 2     | Unidad del documento: <br/>Si valor = 0, la unidad del documento es el punto.Si valor = 1, la unidad del documento es el centímetro.Si valor = 2, la unidad del documento es la pulgada.                                                    |

* Si *propiedad* es igual a 1, el comando aplica a la visualización de la caja de diálogo de impresión.

 \- Si valor es igual a 1, la caja de diálogo de impresión se muestra antes de la impresión.  
 \- Si valor es igual a 0, la caja de diálogo de impresión no se muestra antes de la impresión.  
 El valor por defecto es 1.

* Si *propiedad* es igual a 2, el comando aplica a la unidad del documento.  
\- Si valor es igual a 0, la unidad del documento es el punto.  
\- Si valor es igual a 1, la unidad del documento es el centímetro.  
\- Si valor es igual a 2, la unidad del documento es la pulgada.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si pasa un valor incorrecto del parámetro *propiedad*, se genera el error -9852.

#### Ver también 

[QR SET DOCUMENT PROPERTY](qr-set-document-property.md)  