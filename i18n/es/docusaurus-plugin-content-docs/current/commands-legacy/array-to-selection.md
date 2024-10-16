---
id: array-to-selection
title: ARRAY TO SELECTION
slug: /commands/array-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO SELECTION.Syntax-->**ARRAY TO SELECTION** {( *array* ; *campo* {; *array2* ; *campo2* ; ... ; *arrayN* ; *campoN*}{; *} )}<!-- END REF-->
<!--REF #_command_.ARRAY TO SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a copiar en la selección |
| campo | Field | &#8592; | Campo a recibir los valores del array |
| * | Operador | &#8594;  | Esperar ejecución |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY TO SELECTION.Summary-->El comando **ARRAY TO SELECTION** copia uno o más arrays en una selección de registros.<!-- END REF--> Todos los campos listados deben pertenecer a la misma tabla.

Si una selección existe en el momento del llamado, los elementos del array se colocan en los registros, basados en el orden del array y en el orden de los registros. Si hay más elementos que registros, se crean nuevos registros. Los registros, bien sean nuevos o existentes, se guardan automáticamente.

**Nota**: dado que puede crear nuevos registros, este comando no tiene estado de sólo lectura de la tabla (si la hay) (ver *Record Locking*). 

Todos los arrays deben tener el mismo número de elementos. Si los arrays son de diferentes tamaños, se genera un error de sintaxis

Este comando efectúa la operación inversa de [SELECTION TO ARRAY](selection-to-array.md). Sin embargo, el comando **ARRAY TO SELECTION** no permite utilizar los campos de diferentes tablas, incluyendo tablas relacionadas, incluso cuando existe una relación automática.

Si pasa el parámetro *\**, 4D no ejecuta inmediatamente la línea de instrucción correspondiente pero la guarda en memoria; de esta forma puede apilar varias líneas que terminen en *\**. El conjunto de las líneas en espera es ejecutado por una instrucción **ARRAY TO SELECTION** final sin parámetro *\**. Por esta razón, ahora el comando puede llamarse sin parámetros.  
Como para el comando [QUERY](query.md), este principio permite romper una instrucción compleja en un conjunto de líneas, lo cual es más fácil de leer y mantener. También es posible insertar instrucciones intermediarias. 

**Advertencia:** utilice **ARRAY TO SELECTION** con precaución, porque este comando reemplaza la información de los registros existentes. Si un registro está bloqueado por otro proceso durante la ejecución de **ARRAY TO SELECTION**, ese registro no se modifica. Todos los registros bloqueados se colocan en LockedSet. Después de la ejecución de **ARRAY TO SELECTION**, puede probar el conjunto LockedSet para ver si contiene registros bloqueados. 

**Nota**: este comando no tiene en cuenta el estado de sólo lectura/lectura-escritura de la tabla que contiene el campo. 

**4D Server:** el comando es optimizado por 4D Server. Los arrays son enviados por el equipo cliente al servidor, y los registros son modificados o creados en el equipo servidor. Como tal solicitud es manejada de modo sincrónico, el equipo cliente debe esperar a que la operación se complete con éxito. En los entornos multiusuario o multiproceso, ningún registro bloqueado será sobrescrito.

#### Ejemplo 1 

En el siguiente ejemplo, los arrays *asApellidos* y *asEmpresas* escriben datos en la tabla *\[Personas\]*. Los valores del array *asApellidos* se ubican en el campo *\[Personas\]Apellido* y los valores del array *asEmpresas* se ubican en el campo *\[Personas\]Empresa*:

```4d
 ARRAY TO SELECTION(asApellidos;[Personas]Apellido;asEmpresas;[Personas]Empresa)
```

#### Ejemplo 2 

Usted desea copiar una selección de registros a una tabla archivo seleccionando los campos de acuerdo con el valor de opción:

```4d
 ARRAY TEXT($_name;0)
 ARRAY TEXT($_firstname;0)
 ARRAY TEXT($_cv;0)
 ARRAY PICTURE($_photo;0)
 
 SELECTION TO ARRAY([Candidate]Name;$_name;*)
 SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)
 If(withCV) //load the CV field
    SELECTION TO ARRAY([Candidate]cv;$_cv;*)
 End if
 If(withPhoto) //cargar campo de foto
    SELECTION TO ARRAY([Candidate]photo;$_photo;*)
 End if
 SELECTION TO ARRAY //ejecutar copia
 
 REDUCE SELECTION([Candidate_Archive];0)
 ARRAY TO SELECTION($_name;[Candidate_Archive]Name;*)
 ARRAY TO SELECTION($_prenom;[Candidate_Archive]Firstname;*)
 If(withCV)
    ARRAY TO SELECTION($_cv;[Candidate_Archive]cv;*)
 End if
 If(withPhoto)
    ARRAY TO SELECTION($_photo;[Candidate_Archive]photo;*)
 End if
 ARRAY TO SELECTION
```

#### Ver también 

[SELECTION TO ARRAY](selection-to-array.md)  
*Variables sistema*  