---
id: last-query-plan
title: Last query plan
slug: /commands/last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Last query plan.Syntax-->**Last query plan** ( *formatDesc* ) : Text<!-- END REF-->
<!--REF #_command_.Last query plan.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formatDesc | Integer | &#8594;  | Formato de descripción (Texto o XML) |
| Resultado | Text | &#8592; | Descripción del plan de la última búsqueda ejecutada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Last query plan.Summary-->El comando Last query plan devuelve la descripción interna del plan de ejecución de la última búsqueda llevada a cabo en los datos.<!-- END REF--> Para mayor información sobre las descripciones de búsquedas, por favor consulte la documentación del comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). 

Esta descripción se devuelve en formato Texto o XML dependiendo del valor pasado en el parámetro *formatDesc*. Puede pasar una de las siguientes constantes, ubicadas en el tema “Queries”: 

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| Description in text format | Entero largo | 0     |
| Description in XML format  | Entero largo | 1     |
  
  
Este comando devuelve un valor significativo si el comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") ha sido ejecutado durante la sesión. 

La descripción del plan de la última búsqueda puede compararse con la descripción de la ruta real de la última búsqueda (obtenido con la ayuda del comando [Last query path](last-query-path.md "Last query path")) con propósitos de optimización.

#### Ver también 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query path](last-query-path.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1046 |
| Hilo seguro | &check; |


