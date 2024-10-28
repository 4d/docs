---
id: sql-cancel-load
title: SQL CANCEL LOAD
slug: /commands/sql-cancel-load
displayed_sidebar: docs
---

<!--REF #_command_.SQL CANCEL LOAD.Syntax-->**SQL CANCEL LOAD**<!-- END REF-->
<!--REF #_command_.SQL CANCEL LOAD.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SQL CANCEL LOAD.Summary-->El comando SQL CANCEL LOAD finaliza la solicitud SELECT actual e inicializa los parámetros.<!-- END REF--> 

Este comando se utiliza para ejecutar varias peticiones SELECT dentro de la misma conexión (es decir el mismo cursor) iniciada por el comando [SQL LOGIN](sql-login.md "SQL LOGIN"). 

#### Ejemplo 

En este ejemplo, se ejecutan dos peticiones en la misma conexión: 

```4d
 var Miblob : Blob
 var MiTexto : Text
 SQL LOGIN("mysql";"root";"")
 
 SQLStmt:="SELECT blob_field FROM app_testTable"
 SQL EXECUTE(SQLStmt;Myblob)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
 
  //Reinicialización del cursor
 SQL CANCEL LOAD
 
 SQLStmt:="SELECT Nombre FROM Empleado"
 SQL EXECUTE(SQLStmt;MyText)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
```

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1\. De lo contrario, devuelve 0.

#### Ver también 

[SQL LOAD RECORD](sql-load-record.md)  
[SQL LOGIN](sql-login.md)  