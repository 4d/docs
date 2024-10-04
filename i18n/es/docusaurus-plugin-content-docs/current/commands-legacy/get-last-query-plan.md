---
id: get-last-query-plan
title: Get last query plan
slug: /commands/get-last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Get last query plan.Syntax-->**Get last query plan** ( *formatDesc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get last query plan.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formatDesc | Entero largo | &#x1F852; | Formato de descripción (Texto o XML) |
| Resultado | Cadena | &#x1F850; | Descripción del plan de la última búsqueda ejecutada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get last query plan.Summary-->El comando Get Last Query Plan devuelve la descripción interna del plan de ejecución de la última búsqueda llevada a cabo en los datos.<!-- END REF--> Para mayor información sobre las descripciones de búsquedas, por favor consulte la documentación del comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). 

Esta descripción se devuelve en formato Texto o XML dependiendo del valor pasado en el parámetro *formatDesc*. Puede pasar una de las siguientes constantes, ubicadas en el tema “Queries”: 

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| Description in text format | Entero largo | 0     |
| Description in XML format  | Entero largo | 1     |
  
  
Este comando devuelve un valor significativo si el comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") ha sido ejecutado durante la sesión. 

La descripción del plan de la última búsqueda puede compararse con la descripción de la ruta real de la última búsqueda (obtenido con la ayuda del comando [Get Last Query Path](get-last-query-path.md "Get Last Query Path")) con propósitos de optimización.

#### Ver también 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query path](get-last-query-path.md)  