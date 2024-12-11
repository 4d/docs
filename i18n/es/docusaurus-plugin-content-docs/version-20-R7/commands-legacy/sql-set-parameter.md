---
id: sql-set-parameter
title: SQL SET PARAMETER
slug: /commands/sql-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET PARAMETER.Syntax-->**SQL SET PARAMETER** ( *objeto* ; *tipoParam* )<!-- END REF-->
<!--REF #_command_.SQL SET PARAMETER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto 4D a utilizar (variable, array o campo) |
| tipoParam | Integer | &#8594;  | Tipo de parámetro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL SET PARAMETER.Summary-->El comando SQL SET PARAMETER permite el uso del valor de una variable, array o campo 4D en las peticiones SQL.<!-- END REF-->

**Nota:** igualmente es posible insertar directamente el nombre de un objeto 4D a utilizar (variable, array o campo) entre los caracteres *<<* y *\>>* en el texto de la petición (ver ejemplo 1). Para mayor información, consulte la sección *Presentación de los comandos del tema SQL*.

* En el parámetro *objeto*, pase el objeto 4D (variable, array o campo) a utilizar en la petición.
* En el parámetro *tipoParam*, pase el tipo SQL del parámetro. Puede pasar un valor o utilizar una de las siguientes constantes, ubicadas en el tema “*SQL*”:  

| Constante        | Tipo         | Valor | Comentario                                                                                                                                 |  
| ---------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------ |  
| SQL param in     | Entero largo | 1     |                                                                                                                                            |  
| SQL param in out | Entero largo | 2     | Utilizable únicamente en el contexto de un procedimiento almacenado SQL (entrada-salida parámetro definido en el procedimiento almacenado) |  
| SQL param out    | Entero largo | 4     | Utilizable únicamente en el contexto de un procedimiento almacenado SQL (parámeto salida definido en el procedimiento almacenado)          |
El valor del objeto 4D reemplaza al carácter *?* en la petición SQL (sintaxis estándar). Si la petición contiene más de un carácter *?*, serán necesarias varias llamadas a SQL SET PARAMETER. Los valores de los objetos 4D serán asignados secuencialmente en la petición, en el orden de ejecución de los comandos.   

**Atención:** este comando se utiliza para manejar los *parámetros* pasados a la petición SQL. No es posible utilizar el tipo SQL param out para asociar un objeto 4D al resultado de una petición SQL. El resultado de una petición SQL se recupera, por ejemplo, utilizando el parámetro *objAsoc* del comando [SQL EXECUTE](sql-execute.md) (ver *Presentación de los comandos del tema SQL*). El comando **SQL SET PARAMETER** se utiliza por lo general para definir los parámetros pasados a la petición (SQL param in); los tipos SQL param out y SQL param in out están reservados para ser utilizados en el contexto de los procedimientos almacenados SQL que pueden devolver parámetros. 

#### Ejemplo 1 

Este ejemplo se utiliza para ejecutar una petición SQL la cual llama directamente a las variables 4D asociadas:

```4d
 var MiTexto : Text
 var MiEnteroLargo : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"
 For(vContador;1;10)
    MiTexto:="Text"+String(vContador)
    MiEnteroLargo:=vContador
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Ejemplo 2 

El mismo ejemplo anterior, pero utilizando el comando SQL SET PARAMETER: 

```4d
 var MiTexto : Text
 var MiEnteroLargo : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"
 For(vCounter;1;10)
    MiTexto:="Text"+String(vContador)
    MiEnteroLargo:=vCounter
    SQL SET PARAMETER(MyText;SQL param in)
    SQL SET PARAMETER(MyLongint;SQL param in)
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1\. De lo contrario, devuelve 0.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 823 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


