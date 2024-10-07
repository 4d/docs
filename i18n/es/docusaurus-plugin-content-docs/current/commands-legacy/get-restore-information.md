---
id: get-restore-information
title: GET RESTORE INFORMATION
slug: /commands/get-restore-information
displayed_sidebar: docs
---

<!--REF #_command_.GET RESTORE INFORMATION.Syntax-->**GET RESTORE INFORMATION** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET RESTORE INFORMATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &srarr; | Tipo de información a recuperar |
| info1 | Integer, Date | &harr; | Valor 1 del selector |
| info2 | Text, Time | &harr; | Valor 2 del selector |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET RESTORE INFORMATION.Summary-->El comando GET RESTORE INFORMATION permite obtener información relacionada con la última restauración automática de la base.<!-- END REF-->

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