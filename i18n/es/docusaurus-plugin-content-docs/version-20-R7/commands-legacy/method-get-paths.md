---
id: method-get-paths
title: METHOD GET PATHS
slug: /commands/method-get-paths
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS.Syntax-->**METHOD GET PATHS** ( {*nomCarpeta* ;} *tipoMetodo* ; *arrRutas* {; *marcador*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomCarpeta | Text | &#8594;  | Nombre de carpeta de la página Inicio |
| tipoMetodo | Integer | &#8594;  | Selector de tipo de método a recuperar |
| arrRutas | Text array | &#8592; | Array de rutas y nombres de los métodos |
| marcador | Real | &#8594;  | Valor mínimo de marcador |
| &#8592; | Nuevo valor actual |
| * | Operador | &#8594;  | Si se pasa = comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.METHOD GET PATHS.Summary-->El comando **METHOD GET PATHS** llena el array *arrRutas* con las rutas de acceso internas y los nombres de los métodos de la aplicación del tipo definido por el parámetro *tipoMetodo*.<!-- END REF-->  
  
Si su código está organizado en "carpetas" en el Explorador de 4D (página Inicio), puede pasar un nombre de carpeta en el parámetro opcional *nomCarpeta*. En este caso, el array *arrRutas* sólo contiene las rutas de los métodos ubicados en esta ubicación.   
  
**Nota**: no puede utilizar el carácter comodín, "@" en *nomCarpeta*.  
  
Pase en el parámetro *tipoMetodo* el tipo de método del cual quiere obtener la rutas en el array *arrRutas*. Puede utilizar las siguientes constantes (individualmente o combinadas), del tema *Acceso objetos diseño*:

| Constante            | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path all objects     | Entero largo | \-1   | Combinación de las rutas de todos los métodos de la base                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path class           | Entero largo | 32    | Ruta de la definición de clase. Ejemplo:<br/>\[class\]/Persona<br/>\[class\]/Estudiante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Path database method | Entero largo | 2     | Ruta de los métodos base definidos. Lista de estos métodos:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entero largo | 4     | Ruta de los métodos formularo proyecto y de todos su métodos objeto. Ejemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path project method  | Entero largo | 1     | Nombre del método.<br/>Ejemplo: MiMetodoProyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path table form      | Entero largo | 16    | Ruta de los métodos formulario tabla y de todos sus métodos objeto. Ejemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path trigger         | Entero largo | 8     | Ruta de los triggers de la base. Ejemplos:<br/>*\[trigger\]/tabla\_1<br/>\[trigger\]/tabla\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

El parámetro *marcador* permite recuperar las rutas de los métodos modificados a partir de un momento específico. Como parte de un sistema de control de versión, esto significa que puede actualizar sólo los métodos modificados desde el último backup.  
El funcionamiento es el siguiente: 4D mantiene un contador de modificación de métodos. Cada vez que un método se crea o se vuelve a guardar, este contador se incrementa y su valor actual se guarda en el marcador interno del método.  
Si pasa el parámetro *marcador*, el comando sólo devuelve los métodos cuyo marcador es superior o igual al valor pasado en este parámetro. Además, el comando devuelve en *marcador* el nuevo valor actual del contador de modificación, es decir el valor más alto. Si guarda este valor, puede pasarlo la próxima vez que este comando se llame de manera que usted sólo recupera los métodos nuevos o modificados.  
  
Si se ejecuta este comando desde un componente, devuelve por defecto las rutas de los métodos del componente. Si pasa el parámetro *\**, el array contendrá las rutas de los métodos de la base local.

Si el comando detecta un nombre de método duplicado, se genera el error -9802 ("Object path not unique"). En este caso, es aconsejable utilizar el CSM con el fin de verificar la estructura de la base de datos.

#### Ejemplo 1 

Recuperación de los métodos de proyecto ubicados en una carpeta "web":

```4d
 METHOD GET PATHS("web";Path project method;arrPaths)
```

#### Ejemplo 2 

Recuperación de los métodos base y de los triggers:

```4d
 METHOD GET PATHS(Path trigger+Path database method;arrPaths)
```

#### Ejemplo 3 

Recuperación de los métodos de proyecto modificados desde el último backup:

```4d
  // cargamos el último valor almacenado
 $stamp :=Max([Backups]cur_stamp)
 METHOD GET PATHS(Path project method;arrPaths;$stamp)
  // guardamos el nuevo valor
 CREATE RECORD([Backups])
 [Backups]cur_stamp :=$stamp
 SAVE RECORD([Backups])
```

#### Ejemplo 4 

Consulte el ejemplo del comando [METHOD SET CODE](method-set-code.md).

#### Ver también 

[Current method path](current-method-path.md)  
[METHOD GET FOLDERS](method-get-folders.md)  