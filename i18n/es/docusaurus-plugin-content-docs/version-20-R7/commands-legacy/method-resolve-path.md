---
id: method-resolve-path
title: METHOD RESOLVE PATH
slug: /commands/method-resolve-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD RESOLVE PATH.Syntax-->**METHOD RESOLVE PATH** ( *ruta* ; *tipoMetodo* ; *prtTabla* ; *nomObjeto* ; *nomObjForm* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD RESOLVE PATH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text | &#8594;  | Ruta a resolver |
| tipoMetodo | Integer | &#8592; | Selector de tipo de objeto |
| prtTabla | Pointer | &#8592; | Referencia de tabla |
| nomObjeto | Text | &#8592; | Nombre de formulario o de método base |
| nomObjForm | Text | &#8592; | Nombre de objeto del formulario |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD RESOLVE PATH.Summary-->El comando **METHOD RESOLVE PATH** analiza la ruta de acceso interna pasada en el parámetro *ruta* y devuelve sus diferentes componentes en los parámetros *tipoMetodo*, *ptrTabla*, *nomObjeto* y *nomObjetoForm*.<!-- END REF-->  
  
En el parámetro *tipoMetodo* devuelve un valor que indica el tipo del método. Puede comparar este valor con las siguientes constantes del tema *Acceso objetos diseño*:

| Constante            | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | Entero largo | 2     | Ruta de los métodos base definidos. Lista de estos métodos:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entero largo | 4     | Ruta de los métodos formularo proyecto y de todos su métodos objeto. Ejemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path project method  | Entero largo | 1     | Nombre del método.<br/>Ejemplo: MiMetodoProyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path table form      | Entero largo | 16    | Ruta de los métodos formulario tabla y de todos sus métodos objeto. Ejemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path trigger         | Entero largo | 8     | Ruta de los triggers de la base. Ejemplos:<br/>*\[trigger\]/tabla\_1<br/>\[trigger\]/tabla\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

**Nota:** el comando no comprueba si el método existe realmente en la base de datos/proyecto. Sólo se genera un error cuando se pasa un nombre de tabla inválido. 

El parámetro *ptrTabla* contiene un puntero a una tabla de la base cuando la ruta referencia un método formulario tabla o un trigger.   
  
El parámetro *nomObjeto* contiene:

* un nombre de formulario si la ruta referencia un formulario tabla o proyecto.
* un nombre de método base si la ruta referencia un método base.

El parámetro *nomObjetoForm* contiene un nombre de objeto de formulario si la ruta referencia un método objeto.  
  
Si el comando se ejecuta desde un componente, considera por defecto que *ruta* designa un método del componente. Si pasa el parámetro *\**, considera que *ruta* designa un método de la base local.

#### Ejemplo 1 

Resolución de una ruta de método base:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 2
  // $tablePtr: Nil pointer
  // $objectName: "onStartup"
  // $formObjectName: ""
```

#### Ejemplo 2 

Resolución de una ruta de objeto de método formulario tabla:

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $formObjectName : Text
 
 METHOD RESOLVE PATH("[tableForm]/Table1/output%2A1/myVar%2A1";$methodType;$tablePtr;$objectName;$formObjectName)
  // $methodType: 16
  // $tablePtr: -> [Table1]
  // $objectName: "output1"
  // $formObjectName: "Btn1"
```

#### Ver también 

[METHOD Get path](method-get-path.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1165 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


