---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->

<!--REF #_command_.Process activity.Params-->

| Parámetros | Tipo    |                             | Descripción                                                                                          |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| sessionID  | Text    | &#8594; | ID de sesión                                                                                         |
| options    | Integer | &#8594; | Opciones de retorno                                                                                  |
| Resultado  | Object  | &#8592; | Instantánea de los procesos en ejecución y/o sesiones de usuario (sólo 4D Server) |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R7       | Soporte del parámetro *sessionID* |

</details>

## Descripción

<!--REF #_command_.Process activity.Summary-->El comando **Process activity** devuelve una instantánea de los procesos en ejecución y/o (sólo en 4D Server) de las sesiones de usuario conectadas en un momento dado.<!-- END REF--> Este comando devuelve todos los procesos, incluidos los procesos internos a los que no se puede acceder mediante el comando [Process info](process-info.md). 

Por defecto, cuando se utiliza sin ningún parámetro, **Process activity** devuelve un objeto que contiene las siguientes propiedades:

- "processes", una colección de todos los procesos
- "sessions" (sólo 4D Server), una colección de todas las sesiones

En 4D Server, puede filtrar la información a devolver utilizando los parámetros opcionales *sessionID* y *options*:

- Si pasa un ID de sesión usuario en el parámetro *sessionID*, el comando sólo devuelve información relacionada con esta sesión. Por defecto, si se omite el parámetro *options*, el objeto devuelto contiene una colección con todos los procesos relacionados con la sesión y una colección con un único objeto que describe la sesión. Si se pasa un ID de sesión inválido, se devuelve un objeto **null**.
- Puede seleccionar la(s) colección(es) a devolver pasando una de las siguientes constantes en el parámetro *options*:

| Constante              | Valor | Comentario                                                                          |
| ---------------------- | ----- | ----------------------------------------------------------------------------------- |
| Processes and sessions | 0     | Devuelve las listas "processes" y "sessions" (valor por defecto) |
| Processes only         | 1     | Devuelve sólo la lista "processes"                                                  |
| Sólo sesiones          | 2     | Devuelve solo la lista "sessions"                                                   |

:::note

Cuando se ejecuta en 4D en modo remoto o local, `Process activity` siempre devuelve la lista de procesos en ejecución (se ignoran los parámetros *sessionID* y *options*).

:::

**Sessions**

La propiedad "sessions" contiene una colección de objetos que describen todas las sesiones en ejecución en el servidor. Para una descripción de las propiedades del objeto de sesión, por favor consulte el comando [`Session info`](session-info.md).

:::note Notas

- Puede obtener el objeto de una sesión utilizando el comando [Session](session.md).
- `Process activity` devuelve sesiones de clientes remotos, sesiones de procedimientos almacenados y sesiones restantes pero no sesiones Web (limitación).

:::

**Processes**

La propiedad "processes" contiene una colección de objetos de proceso que describen todos los procesos en ejecución. Para una descripción de las propiedades del objeto de proceso, por favor consulte el comando [`Process info`](process-info.md).

En el servidor, el comando `Process activity` devuelve una propiedad adicional "session":

| Propiedad adicional | Tipo   | Descripción                                                                                                                                                                                   |   |
| ------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| session             | Object | La propiedad [`.info`](../API/SessionClass.md#info) de la sesión en la que se está ejecutando el proceso. Undefined si se pasa el parámetro `Processes only`. |   |

## Ejemplo 1

Desea obtener la colección de todas las sesiones usuario:

```4d
  //A ejecutar en el servidor
 
 var $o : Object
 var $i : Integer
 var $processName;$userName : Text

 
 $o:=Process activity //Obtener información de proceso y sesión
 For($i;0;($o.processes.length)-1) //Iterar sobre la colección "processes"
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // Acceso fácil a userName
  //Utilizar String porque el objeto session puede estar indefinido
 End for
```

## Ejemplo 2

Desea obtener todos los procesos relacionados con la sesión actual:

```4d
  // a ejecutar en el servidor
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

## Ver también

[`Process info`](process-info.md)
[`Session info`](session-info.md)
[Session storage](session-storage.md)  
[WEB Get server info](../commands-legacy/web-get-server-info.md)