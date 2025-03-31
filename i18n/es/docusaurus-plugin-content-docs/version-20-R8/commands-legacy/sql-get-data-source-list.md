---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *tipoFuente* ; *arrayNomsFuentes* ; *arraydrivers* )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoFuente | Integer | &#8594;  | Tipo de fuente: usuario o sistema |
| arrayNomsFuentes | Text array | &#8592; | Array de nombres de fuentes de datos |
| arraydrivers | Text array | &#8592; | Array de drivers de las fuentes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->El comando *GET DATA SOURCE LIST* devuelve en los arrays *arrayNomsFuentes* y *arrayDrivers*, los nombres y drivers de las fuentes de datos de tipo *tipoFuente* definidas en el administrador ODBC del sistema operativo.<!-- END REF--> 

4D le permite conectarse directamente vía el lenguaje a una fuente de datos ODBC externa y ejecutar búsquedas SQL dentro de una estructura [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL"). Este principio funciona de esta forma: el comando *GET DATA SOURCE LIST* permite obtener la lista de fuentes de datos presentes en el equipo. El comando [SQL LOGIN](sql-login.md "SQL LOGIN") permite designar la fuente a utilizar. Luego puede ejecutar las búsquedas SQL utilizando una estructura [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL") en la fuente “actual”. Para llevar a cabo nuevas búsquedas utilizando nuevamente el motor interno de 4D, simplemente pase el comando *USE INTERNAL DATABASE*. Para mayor información sobre los comandos SQL en el editor de métodos, consulte el manual 4D SQL.

En *tipoFuente*, pase el tipo de fuente de datos que quiere obtener. Puede utilizar una de las siguientes constantes del tema “*SQL*”:

| Constante          | Tipo         | Valor |
| ------------------ | ------------ | ----- |
| User data source   | Entero largo | 1     |
| System data source | Entero largo | 2     |

**Nota:** este comando tiene en cuenta las fuentes de datos de tipo archivo.

El comando llena y dimensiona los arrays *arrayNomsFuentes* y *arrayDrivers* con los valores correspondientes.

**Nota:** si quiere conectarse a una fuente de datos 4D externa vía ODBC, necesitará tener instalado 4D ODBC Driver en su equipo. Para mayor información, consulte el manual de instalación del driver 4D ODBC.

#### Ejemplo 

Este ejemplo utiliza una fuente de datos usuario:

```4d
 ARRAY TEXT(arrDSN;0)
 ARRAY TEXT(arrDSNDrivers;0)
 GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error.

#### Ver también 

[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 989 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


