---
id: backup-info
title: BACKUP INFO
slug: /commands/backup-info
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP INFO.Syntax-->**BACKUP INFO** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.BACKUP INFO.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Tipo de información a obtener |
| info1 | Integer, Date | &#8592; | Valor 1 del selector |
| info2 | Time, Text | &#8592; | Valor 2 del selector |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BACKUP INFO.Summary-->El comando BACKUP INFO permite obtener información relacionada con el último backup efectuado en los datos de la base.<!-- END REF-->

Pase el tipo de información a obtener en *selector*. El tipo y el contenido de los parámetros *info1* e *info2* depende del valor del selector. Puede utilizar una de las siguientes constantes, ubicadas en el tema “*Backup*”:

| Constante               | Tipo         | Valor | Comentario                                                                                                                                                                                                                                          |
| ----------------------- | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | Entero largo | 0     | *info1* e *info2* devuelven respectivamente la fecha y la hora del último backup.                                                                                                                                                                   |
| Last backup information | Entero largo | 5     | *info1* devuelve la duración de la última copia de seguridad en milisegundos (entero largo) e *info2* la última estampa de tiempo de inicio de la copia de seguridad (cadena, ver los detalles de formato en el comando [Timestamp](timestamp.md)). |
| Last backup status      | Entero largo | 2     | *info1* devuelve el número e *info2* el texto del estado de la última copia de seguridad                                                                                                                                                            |
| Next backup date        | Entero largo | 4     | *info1* devuelve la fecha e *info2* la hora de la próxima copia de seguridad programada                                                                                                                                                             |

#### Ver también 

[RESTORE](restore.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 888 |
| Hilo seguro | &cross; |


