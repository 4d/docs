---
id: set-field-value-null
title: SET FIELD VALUE NULL
slug: /commands/set-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD VALUE NULL.Syntax-->**SET FIELD VALUE NULL** ( *unCampo* )<!-- END REF-->
<!--REF #_command_.SET FIELD VALUE NULL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo al cual atribuir el valor NULL |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET FIELD VALUE NULL.Summary-->El comando **SET FIELD VALUE NULL** asigna el valor NULL al campo designado por el parámetro *unCampo*.<!-- END REF-->

El valor NULL es utilizado por el motor SQL de 4D. Para mayor información, consulte el manual de 4D SQL.

**Notas:** 

* Es posible no permitir el valor Null para los campos 4D al nivel del editor de Estructura (ver el manual de Diseño).
* **SET FIELD VALUE NULL** borra el contenido de los campos objeto.

#### Ver también 

[Is field value Null](is-field-value-null.md)  
[Null](null.md)  