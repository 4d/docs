---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* ) -> Resultado<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#x1F852; | Referencia del área |
| Resultado | Integer | &#x1F850; | Tipo del informe |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Get report kind.Summary-->El comando QR Get report kind devuelve el tipo del informe presente en *area*.<!-- END REF-->

* Si el comando devuelve 1, el informe es de tipo lista.
* Si el comando devuelve 2, el informe es de tipo tabla cruzada.

Igualmente puede comparar el resultado de la función con las constantes del tema :

| Constante       | Tipo         | Valor |
| --------------- | ------------ | ----- |
| qr cross report | Entero largo | 2     |
| qr list report  | Entero largo | 1     |
  
  
Si pasa un número de *area* incorrecto, se genera el error -9850. 

#### Ver también 

[QR SET REPORT KIND](qr-set-report-kind.md)  