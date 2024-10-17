---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Begin SQL.Summary-->Begin SQL es una palabra clave que permite indicar en el editor de métodos el inicio de una secuencia de comandos SQL que debe ser interpretada por la fuente de datos actual del proceso (el motor SQL integrado de 4D o toda fuente especificada vía el comando [SQL LOGIN](sql-login.md "SQL LOGIN")).<!-- END REF-->

Una secuencia de comandos SQL comienza por Begin SQL y debe terminar con la palabra clave [End SQL](end-sql.md "End SQL").

Estas palabras claves funcionan de esta forma:

* Puede poner uno o más bloques de etiquetas Begin SQL/[End SQL](end-sql.md "End SQL") en el mismo método. Puede generar métodos totalmente compuestos por código SQL o mezclar código 4D y código SQL en el mismo método.
* Puede escribir varias *instrucciones SQL* en la misma línea o en diferentes líneas separándolas con punto y coma “;”. Por ejemplo, puede escribir::

```4d
 Begin SQL
    INSERT INTO SALESREPS (NOMBRE, EDAD) VALUES (‘Enrique’,40);
    INSERT INTO SALESREPS (NOMBRE, EDAD) VALUES (‘Bernardo’,35)
 End SQL
```

o:

```4d
 Begin SQL
    INSERT INTO SALESREPS (NOMBRE, EDAD) VALUES (‘Enrique’,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bernardo’,35)
 End SQL
```

Note que el *Depurador* 4D evaluará el código SQL línea por línea. En algunos casos, puede ser mejor utilizar más de una línea.

#### Ver también 

[End SQL](end-sql.md)  
[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  