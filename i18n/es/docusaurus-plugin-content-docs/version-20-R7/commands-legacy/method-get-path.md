---
id: method-get-path
title: METHOD Get path
slug: /commands/method-get-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get path.Syntax-->**METHOD Get path** ( *tipoMetodo* {; *laTabla*}{; *nomObjeto*{; *nomObjetoForm*}}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.METHOD Get path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoMetodo | Integer | &#8594;  | Selector de tipo de objeto |
| laTable | Table | &#8594;  | Referencia de tabla |
| nomObjeto | Text | &#8594;  | Nombre de formulario o método base |
| nomObjetoForm | Text | &#8592; | Nombre del objeto de formulario |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |
| resultado | Text | &#8592; | Ruta de acceso completa del objeto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.METHOD Get path.Summary-->El comando **METHOD Get path** devuelve la ruta de acceso interna completa de un método.<!-- END REF-->

Pase en *tipoMetodo*, el tipo de método cuya ruta quiere obtener. Puede utilizar las siguientes constantes, del tema *Acceso objetos diseño*:

| Constante            | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path database method | Entero largo | 2     | Ruta de los métodos base definidos. Lista de estos métodos:<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entero largo | 4     | Ruta de los métodos formularo proyecto y de todos su métodos objeto. Ejemplos:<br/>*\[projectForm\]/myForm/{formMethod}<br/>\[projectForm\]/myForm/button1<br/>\[projectForm\]/myForm/mylist<br/>\[projectForm\]/myForm/button1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path project method  | Entero largo | 1     | Nombre del método.<br/>Ejemplo: MiMetodoProyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Path table form      | Entero largo | 16    | Ruta de los métodos formulario tabla y de todos sus métodos objeto. Ejemplos:<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/button1<br/>\[tableForm\]/table\_1/Form1/mylist<br/>\[tableForm\]/table\_2/Form1/mylist*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Path trigger         | Entero largo | 8     | Ruta de los triggers de la base. Ejemplos:<br/>*\[trigger\]/tabla\_1<br/>\[trigger\]/tabla\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

Pase los valores en los parámetros *laTabla*, *nomObjeto* y *nomObjetoForm* en función del tipo de objeto del cual quiere obtener la ruta de acceso del método:  

| **Tipo de objeto**       | *laTabla* | *nomObjeto*  | *nomObjetoForm* |
| ------------------------ | --------- | ------------ | --------------- |
| Ruta Formulario proyecto | X         | X (opcional) |                 |
| Ruta Formulario tabla    | X         | X            | X (opcional)    |
| Ruta Método base         | X         |              |                 |
| Ruta Método proyecto     | X         |              |                 |
| Ruta Trigger             | X         |              |                 |

**Nota:** el comando no verifica si el método existe realmente en la base. Sin embargo, se genera un error si se pasa un nombre de método base no válido con el selector Path database method. 

Si el comando se ejecuta desde un componente, devuelve por defecto las rutas de los métodos del componente. Si pasa el parámetro *\**, el array contendrá las rutas de los métodos de la base local.

#### Ejemplo 

```4d
  //Recuperar la ruta de acceso del método base "On Startup":
 $path:=METHOD Get path(Path database method;"onStartup")
 
  //Recuperar la ruta de acceso del trigger de la tabla [Empleados]:
 $path:=METHOD Get path(Path trigger;[Empleados])
 
  //Recuperar la ruta de acceso del método del objeto "OK" del formulario "input" de la tabla [Empleados]:
 $path:=METHOD Get path(Path table form;[Empleados];"input";"OK")
```

#### Ver también 

[Current method path](current-method-path.md)  
[METHOD OPEN PATH](method-open-path.md)  
[METHOD RESOLVE PATH](method-resolve-path.md)  