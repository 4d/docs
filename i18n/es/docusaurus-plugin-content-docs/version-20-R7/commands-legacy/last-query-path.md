---
id: last-query-path
title: Last query path
slug: /commands/last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Last query path.Syntax-->**Last query path** ( *formatDesc* ) : Text<!-- END REF-->
<!--REF #_command_.Last query path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formatDesc | Integer | &#8594;  | Formato de descripción (Texto o XML) |
| Resultado | Text | &#8592; | Descripción de la ruta de la última búsqueda ejecutada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Last query path.Summary-->El comando Last query path devuelve la descripción interna detallada de la ruta real de la última búsqueda efectuada en los datos.<!-- END REF--> Para mayor información sobre las descripciones de búsquedas, consulte la documentación del comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). 

Esta descripción se devuelve en formato Texto o XML dependiendo del valor pasado en el parámetro *formatDesc*. Puede pasar una de las siguientes constantes, ubicadas en el tema “Queries”: 

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| Description in text format | Entero largo | 0     |
| Description in XML format  | Entero largo | 1     |

Este comando devuelve un valor significativo si el comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") ha sido ejecutado durante la sesión.

La descripción de la ruta de la última búsqueda puede compararse con la descripción del plan de búsqueda de la última búsqueda (obtenido utilizando el comando [Last query plan](last-query-plan.md "Last query plan")) con propósitos de optimización.

#### Ver también 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query plan](last-query-plan.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1045 |
| Hilo seguro | &check; |


