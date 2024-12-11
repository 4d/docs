---
id: qr-set-report-kind
title: QR SET REPORT KIND
slug: /commands/qr-set-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT KIND.Syntax-->**QR SET REPORT KIND** ( *area* ; *tipo* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT KIND.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| tipo | Integer | &#8594;  | Tipo del informe |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET REPORT KIND.Summary-->El comando QR SET REPORT KIND define el *tipo* del informe presente en *area*.<!-- END REF-->

* Si *tipo* es igual a 1, el informe es de tipo lista.
* Si *tipo* es igual a 2, el informe es de tipo tabla cruzada.

Igualmente puede utilizar las constantes del tema : 

| Constante       | Tipo         | Valor |
| --------------- | ------------ | ----- |
| qr cross report | Entero largo | 2     |
| qr list report  | Entero largo | 1     |
  
  
Si define un nuevo tipo para un informe existente, se eliminan los parámetros anteriores y se crea un nuevo informe vacío. 

Si pasa un número de *area* inválido, se genera el error -9850.

Si pasa un valor incorrecto del parámetro *propiedad*, se genera el error -9852.

#### Ver también 

[QR Get report kind](qr-get-report-kind.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 738 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


