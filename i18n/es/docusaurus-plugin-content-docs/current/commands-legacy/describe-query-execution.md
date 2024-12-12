---
id: describe-query-execution
title: DESCRIBE QUERY EXECUTION
slug: /commands/describe-query-execution
displayed_sidebar: docs
---

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Syntax-->**DESCRIBE QUERY EXECUTION** ( *estado* )<!-- END REF-->
<!--REF #_command_.DESCRIBE QUERY EXECUTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| estado | Boolean | &#8594;  | True=Activar análisis de búsquedas internas, False=Desactivar el análisis de búsquedas internas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Summary-->El comando DESCRIBE QUERY EXECUTION permite activar o desactivar el modo de análisis de la ejecución de búsquedas para el proceso actual.<!-- END REF--> El comando funciona únicamente en el contexto de los comandos de búsqueda del lenguaje 4D tal como [QUERY](query.md). 

La llamada del comando con el parámetro *estado* en [True](true.md "True") activa el modo del análisis de búsquedas. En este modo, el motor de 4D registra internamente dos series de informaciones específicas para cada búsqueda posterior efectuada sobre los datos:

* Una descripción interna detallada de la búsqueda justo antes de su ejecución, en otras palabras, la búsqueda previa (el plan de búsqueda),
* Una descripción interna detallada de la búsqueda que se ejecutó realmente (la ruta de búsqueda).

La información registrada incluye el tipo de búsqueda (indexada, secuencial), el número de registro encontrados y el tiempo necesario para cada criterio de búsqueda a ejecutar. Puede leer esta información utilizando los comandos [Last query plan](last-query-plan.md) y [Last query path](last-query-path.md).

Por lo general, la descripción del plan de una búsqueda y su ruta son idénticos, pero podrían eventualmente ser diferentes porque 4D podría implementar optimizaciones dinámicas durante la ejecución de la búsqueda para mejorar el rendimiento. Por ejemplo, una búsqueda índexada puede convertirse dinámicamente en una búsqueda secuencial si el motor 4D estima que sería más rápida, este es el caso, cuando el número de registros en los cuales se efectúa la búsqueda es bajo.

Pase [False](false.md "False") en el parámetro *estado* cuando no necesite analizar las búsquedas. El modo de análisis de la ejecución de las búsquedas puede volver lenta la aplicación.

#### Ejemplo 

El siguiente ejemplo ilustra el tipo de información obtenida utilizando estos comandos:

```4d
 var $vResultPlan;$vResultPath : Text
 DESCRIBE QUERY EXECUTION(True) //modo análisis
 QUERY([Employees];[Employees]LastName="T@";*) // Búsqueda de los empleados cuyo apellido comienza por T...
 QUERY([Employees];&;[Companies]Name="H@";*) // que trabajan para una empresa  cuyo nombre comienza por H
 QUERY([Employees];&;[Employees]Salary>2500;*) // cuyo salario es > 2500
 QUERY([Employees];&;[Cities]Pop<50000) // que viven en una ciudad con menos de 50 000 habitantes
 $vResultPlan:=Last query plan(Description in text format)
 $vResultPath:=Last query path(Description in text format)
 DESCRIBE QUERY EXECUTION(False) //Fin del modelo de análisis
```

Después de ejecutar este código, *$vResultPlan* y *$vResultPath* contienen descripciones de las búsquedas realizadas, por ejemplo: 

```RAW
$vResultPlan :    Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies  :   Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities  :  Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary  > 2500) And (Join on Table : Companies  :  Employees.Company  = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities  :  Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})   (3 registros encontrados en 1  minuto)
```

Si la constante Description in XML Format se pasa al comando [Last query path](last-query-path.md "Last query path"), *$vResultPath* contiene la descripción de la búsqueda expresada en XML:

```XML
$vResultPath : 
   <QueryExecution>
      <steps description="And" time="0" recordsfounds="1227">
         <steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">
            <steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>
         </steps>
      </steps>
   </QueryExecution>
```

#### Ver también 

[Last query path](last-query-path.md)  
[Last query plan](last-query-plan.md)  