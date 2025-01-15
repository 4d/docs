---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *unCampo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo a evaluar |
| Resultado | Boolean | &#8592; | True = campo es NULL, False = campo no es NULL |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is field value Null.Summary-->El comando Is field value Nulldevuelve **True** si el campo designado por el parámetro *unCampo* contiene el valor NULL y de lo contrario **False**.<!-- END REF-->

El valor NULL es utilizado por el motor SQL de 4D. Para mayor información, consulte el manual *Manual de SQL*.

El valor devuelto por este comando sólo tiene sentido si la opción "*Mapear valores NULOS a valores vacíos*" no está seleccionada en la definición del campo del editor de estructura. De lo contrario, siempre devuelve **False**.

**Nota:** este comando no se puede utilizar con objetos y propiedades de objetos. Los valores nulos en los campos objeto se manejan a través del comando [Null](null.md), 

#### Ver también 

[Null](null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 964 |
| Hilo seguro | &check; |


