---
id: qr-set-document-property
title: QR SET DOCUMENT PROPERTY
slug: /commands/qr-set-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Syntax-->**QR SET DOCUMENT PROPERTY** ( *area* ; *propiedad* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET DOCUMENT PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| propiedad | Integer | &#8594;  | 1 = Diálogo de impresión, 2 = Unidad del documento |
| valor | Integer | &#8594;  | Valor de la propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Summary-->El comando **QR SET DOCUMENT PROPERTY**  permite mostrar la caja de diálogo de impresión o definir la unidad utilizada por el documento.<!-- END REF-->

En *propiedad*, puede pasar unas de las constantes del tema *QR Propiedades de documento*: 

| Constante           | Tipo         | Valor | Comentario                                                                                                                                                                                                                                          |
| ------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| qr field separator  | Entero largo | 3     | Código de caracteres del separador de campos. El valor por defecto es la variable del sistema FldDelimit (Tab por defecto).                                                                                                                         |
| qr printing dialog  | Entero largo | 1     | Visualización de la caja de diálogo de impresión:<br/>Si valor = 0, la caja de diálogo de impresión no se muestra antes de la impresión.Si valor = 1, la caja de diálogo de impresión se muestra antes de la impresión (valor por defecto). |
| qr record separator | Entero largo | 4     | Código de caracteres del separador de registros. El valor por defecto es la variable del sistema RecDelimit (Retorno de carro por defecto).                                                                                                         |
| qr unit             | Entero largo | 2     | Unidad del documento: <br/>Si valor = 0, la unidad del documento es el punto.Si valor = 1, la unidad del documento es el centímetro.Si valor = 2, la unidad del documento es la pulgada.                                                    |

* Si *propiedad* es igual a 1, el comando aplica a la visualización del diálogo de impresión.

 \- Si *valor* es igual a 1, la caja de diálogo de impresión se muestra antes de la impresión (valor por defecto).  
 \- Si *valor* es igual a 0, la caja de impresión no se muestra antes de la impresión.

* Si *propiedad* es igual a 2, el comando se aplica a la unidad del documento.  
    
\- Si *valor* es igual a 0, la unidad del documento es el punto.  
\- Si *valor* es igual a 1, la unidad del documento es el centímetro.  
\- Si *valor* es igual a 2, la unidad del documento es la pulgada.

Si pasa un número de *area* incorrecto, se genera el error -9850.  
Si pasa un valor incorrecto en *propiedad* o *valor*, se genera el error correspondiente (-9852 o -9853).

#### Ver también 

[QR Get document property](qr-get-document-property.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 772 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


