---
id: restore-info
title: RESTORE INFO
slug: /commands/restore-info
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE INFO.Syntax-->**RESTORE INFO** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.RESTORE INFO.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Tipo de información a recuperar |
| info1 | Integer, Date | &#8592; | Valor 1 del selector |
| info2 | Text, Time | &#8592; | Valor 2 del selector |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESTORE INFO.Summary-->El comando RESTORE INFO permite obtener información relacionada con la última restauración automática de la base.<!-- END REF-->

Pase el tipo de información a obtener en *selector*. Puede utilizar una de las siguientes constantes, ubicadas en el tema “Backup and Restore”:

| Constante           | Tipo         | Valor |
| ------------------- | ------------ | ----- |
| Last restore date   | Entero largo | 0     |
| Last restore status | Entero largo | 2     |

El tipo y el contenido de los parámetros *info1* e *info2* dependen del valor de *selector*.  
• Si *selector* \= 0 (Last Restore Date), *info1* devuelve la fecha e *info2* la hora de la última restauración automática de la base.   
• Si *selector* \= 2 (Last Restore Status), *info1* devuelve el número e *info2* el texto del estado de la última restauración automática de la base. 

**Nota:** este comando no tiene en cuenta restauraciones manuales de la base.

#### Ver también 

[RESTORE](restore.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 889 |
| Hilo seguro | &cross; |


