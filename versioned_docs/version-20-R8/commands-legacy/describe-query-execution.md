---
id: describe-query-execution
title: DESCRIBE QUERY EXECUTION
slug: /commands/describe-query-execution
displayed_sidebar: docs
---

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Syntax-->**DESCRIBE QUERY EXECUTION** ( *status* )<!-- END REF-->
<!--REF #_command_.DESCRIBE QUERY EXECUTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| status | Boolean | &#8594;  | True=Enable internal query analysis, False=Disable internal query analysis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Summary-->The **DESCRIBE QUERY EXECUTION** command enables or disables the query analysis mode for the current process.<!-- END REF--> The command only works in the context of 4D language query commands such as [QUERY](query.md). 

Calling the command with the *status* parameter set to **True** enables the query analysis mode. In this mode, the 4D engine records internally two specific pieces of information for each subsequent query carried out on the data:

* A detailed internal description of the query just before its execution, in other words, what was planned to be executed (the query plan),
* A detailed internal description of the query that was actually executed (the query path).

The information recorded includes the type of query (indexed, sequential), the number of records found and the time needed for every query criteria to be executed. Y ou can then read this information using the [Last query plan](last-query-plan.md) and [Last query path](last-query-path.md) commands.

Usually, the description of the query plan and its path are the same, but they may nevertheless differ because 4D might implement dynamic optimizations during the query execution in order to improve performance. For example, an indexed query may be converted dynamically into a sequential query if the 4D engine estimates that this might be faster — this is sometimes the case, more particularly, when the number of records being queries is low.

Pass **False** in the *status* parameter when you no longer need to analyze queries. The query analysis mode can slow down the application.

#### Example 

The following example illustrates the type of information obtained using these commands:

```4d
 var $vResultPlan;$vResultPath : Text
 DESCRIBE QUERY EXECUTION(True) //analysis mode
 QUERY([Employees];[Employees]LastName="T@";*) // Search for employees whose last name starts with T...
 QUERY([Employees];&;[Companies]Name="H@";*) // that work for a company whose name starts with H
 QUERY([Employees];&;[Employees]Salary>2500;*) // whose salary is > 2500
 QUERY([Employees];&;[Cities]Pop<50000) // that live in a city with less than 50,000 inhabitants
 $vResultPlan:=Last query plan(Description in text format)
 $vResultPath:=Last query path(Description in text format)
 DESCRIBE QUERY EXECUTION(False) //End of analysis mode
```

After executing this code, *$vResultPlan* and *$vResultPath* contain descriptions of the queries performed, for example: 

```RAW
$vResultPlan :    Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies  :   Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities  :  Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary  > 2500) And (Join on Table : Companies  :  Employees.Company  = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities  :  Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})   (3 records found in 1  ms)
```

If the Description in XML Format constant is passed to the [Last query path](last-query-path.md) command, *$vResultPath* contains the description of the query expressed in XML:

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

#### See also 

[Last query path](last-query-path.md)  
[Last query plan](last-query-plan.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1044 |
| Thread safe | &check; |


