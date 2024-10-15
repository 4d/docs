---
id: session-storage-by-id
title: Session storage by ID
slug: /commands/session-storage-by-id
displayed_sidebar: docs
---

<!--REF #_command_.Session storage by ID.Syntax-->**Session storage by ID** ( *id* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Session storage by ID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| id | Text | &rarr; | Identificador único (UUID) de la sesión en el servidor |
| Resultado | Object | &larr; | Objeto de almacenamiento de la sesión |

<!-- END REF-->

#### Nota 

<!--REF #_command_.Session storage by ID.Summary-->El comando **Session storage by ID** devuelve el objeto de almacenamiento de la sesión cuyo identificador único se pasó en el parámetro *id*.<!-- END REF--> 

En *id*, pase el UUID de la sesión para la que desea obtener el almacenamiento. El servidor lo asigna automáticamente y se almacena en la propiedad [**.id**](https://developer.4d.com/docs/API/SessionClass#id) del [objeto sesión](https://developer.4d.com/docs/API/SessionClass). Si la sesión no existe en el servidor, el comando devuelve **Null**. 

**Nota:** puede obtener los identificadores de sesión utilizando el comando [Get process activity](get-process-activity.md).

El objeto devuelto es la propiedad [**.storage**](https://developer.4d.com/docs/API/SessionClass#storage) de la sesión. Es un objeto compartido utilizado para almacenar información disponible para todos los procesos de la sesión.

#### Ejemplo 

Este método modifica el valor de una propiedad "settings" almacenada en el objeto de almacenamiento de una sesión específica:

```4d
  //Definir el almacenamiento de una sesión
  // La propiedad del método "Execute On Server" está definida
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage by ID($id)
 
 If($obj.settings=Null)
    Use($obj)
       $obj.settings:=New shared object("text";$text)
    End use
 Else
    Use($obj.settings)
       $obj.settings.text:=$text
    End use
 End if
```

#### Ver también 

  
[Get process activity](get-process-activity.md)  