---
id: sql-execute
title: SQL EXECUTE
slug: /commands/sql-execute
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE.Syntax-->**SQL EXECUTE** ( *instruccionSQL* {; *objAsoc*}{; *objAsoc2* ; ... ; *objAsocN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| instruccionSQL | Text | &#8594;  | Comando SQL a ejecutar |
| objAsoc | Variable, Field | &#8592; | Recibe el resultado (si es necesario) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SQL EXECUTE.Summary-->El comando SQL EXECUTE se utiliza para ejecutar un comando SQL y asociar el resultado a objetos 4D (arrays, variables o campos).<!-- END REF-->

Para que el comando pueda ejecutarse, se requiere una conexión válida en el proceso actual. 

El parámetro *instruccionSQL* contiene el comando SQL a ejecutar. *objAsoc* recibe los resultados. Las variables están asociadas en el orden de secuencia de la columna, lo que significa que las columnas restantes se ignoren. 

:::note

El comando admite hasta 127 parámetros *objAsoc*.

:::

Si los campos 4D se pasan como parámetros en *objAsoc*, el comando creará registros y los guardará automáticamente. Los campos 4D deben venir de la misma tabla (no es posible pasar un campo de la tabla 1 y un campo de la tabla 2 en la misma llamada). Si se pasan campos de diferentes tablas, se genera un error. 

**Atención:** cuando pase los campos 4D en los parámetros *objAsoc* y ejecute el comando *SELECT*, siempre son los datos de la fuente 4D remota los que se modifican. Si quiere recuperar datos de una fuente remota localmente, debe utilizar arrays locales intermediarios y llamar al comando *INSERT* (ver el ejemplo 6). 

Si pasa arrays 4D en el parámetro *objAsoc*, se recomienda declararlos antes de llamar el comando para verificar el tipo de datos procesados. Los arrays se redimensionan automáticamente cuando es necesario. 

En el caso de una variable 4D, se recupera un sólo registro a la vez. Los otros resultados se ignoran. 

**Nota:** para mayor información sobre el referenciamiento de expresiones 4D en búsquedas SQL, consulte la sección *Presentación de los comandos del tema SQL*.

#### Ejemplo 1 

En este ejemplo, obtendremos la columna ename de la tabla emp de la fuente de datos externos. El resultado se almacena en el campo 4D \[Empleados\]Nombre. Los registros 4D se crean automáticamente: 

```4d
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;[Empleados]Nombre)
 SQL LOAD RECORD(SQL all records)
```

#### Ejemplo 2 

Para controlar la creación de registros, es posible incluir el código en una transacción y validarla únicamente si la operación prueba ser satisfactoria: 

```4d
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="SELECT campo _alfa FROM ap_Tabla_Prueba"
 START TRANSACTION
 SQL EXECUTE(SQLStmt;[Tabla 2]Campo1)
 While(Not(SQL End selection))
    SQL LOAD RECORD
    ... //Escribir el código de validación de datos aquí
 End while
 VALIDATE TRANSACTION //Validación de la transacción
```

#### Ejemplo 3 

En este ejemplo, queremos obtener la columna ename de la tabla emp de la fuente de datos externos. El resultado se almacenará en un array *aNombre*. Obtenemos los registros de 10 en 10\. 

```4d
 ARRAY STRING(30;aNombre;20)
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;aNombre)
 While(Not(SQL End selection))
    SQL LOAD RECORD(10)
 End while
```

#### Ejemplo 4 

En este ejemplo, queremos obtener las columnas ename y job de la tabla emp para un ID especifico ID (cláusula WHERE) de la fuente de datos externa. El resultado se almacena en las variables 4D *vNombre* y *vJob*. Sólo se recupera el primer registro. 

```4d
 SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"
 SQL EXECUTE(SQLStmt;vNombre;vJob)
 SQL LOAD RECORD
```

#### Ejemplo 5 

En este ejemplo, queremos obtener la columna Campo\_Blob de la tabla Test en la fuente de datos. El resultado se almacena en una variable BLOB cuyo valor se actualiza cada vez que se carga un registro.

```4d
 var MiBlob : Blob
 SQL LOGIN
 SQL EXECUTE("SELECT Campo_Blob FROM Test";MiBlob)
 While(Not(SQL End selection))
  //Buscamos en los resultados
    SQL LOAD RECORD
  //El valor de MiBlob se actualiza en cada llamada
```

#### Ejemplo 6 

Usted quiere recuperar localmente los datos almacenados en una base 4D Server remota. Para hacerlo, deber utilizar arrays intermediarios:

```4d
  // Conexión a la base remota
 SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)
 If(OK=1)
  // A partir de este punto las peticiones se direccionan a la base remota
    var $LastName_value : Text // variable 4D utilizada en la cadena de búsqueda
    ARRAY TEXT($a_LastName;0) // Almacenamiento temporal de los valores remotos de LastName
    ARRAY TEXT($a_FirstName;0) // Almacenamiento temporal de los valores remotos de FirstName
    var $UseSQL : Boolean //Elección del medio de almacenamiento de datos en local de la base remota
  // (demo only)
 
    $LastName_value:="Smith" // Inicialización de una variable 4D
 
  // Asociar la variable 4D $LastName_value variable con el primer "?" en la petición SQL
    SQL SET PARAMETER($LastName_value;SQL param in)
 
  // De la tabla remota PERSONS, recuperar los valores de los campos LastName y FirstName
  // donde "LastName = Smith" y almacenarlos en los arrays $a_LastName y $a_FirstName
    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)
    If(Not(SQL End selection)) // Si al menos se encuentra un registro
 
       SQL LOAD RECORD(SQL all records) // Cargar todos los registros
 
       $UseSQL:=True // Elija la forma de integrar los datos (demo únicamente)
 
       If($UseSQL) // Uso de las peticiones SQL
          SQL LOGOUT // Desconexión de la base remota
          SQL LOGIN(SQL_INTERNAL;"user";"password") // Conexión a la base local
  // A partir de este punto las peticiones SQL se direccionan a la base local 
  // Guarde los arrays $a_LastName y $a_FirstName en la tabla local PERSONS
          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")
 
       Else // Uso de comandos 4D
          For($i;1;Size of array($a_LastName))
             CREATE RECORD([PERSONS])
             [PERSONS]LastName:=$a_LastName{$i}
             [PERSONS]FirstName:=$a_FirstName{$i}
             SAVE RECORD([PERSONS])
          End for
       End if
    End if
    SQL LOGOUT // Cierre de la conexión
 End if
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK devuelve 1, de lo contrario devuelve 0.

#### Ver también 

[SQL LOAD RECORD](sql-load-record.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 820 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


