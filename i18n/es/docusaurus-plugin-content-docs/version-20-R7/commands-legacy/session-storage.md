---
id: session-storage
title: Session storage
slug: /commands/session-storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->
<!--REF #_command_.Session storage.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| id | Text | &#8594;  | Identificador único (UUID) de la sesión en el servidor |
| Resultado | Object | &#8592; | Objeto de almacenamiento de la sesión |

<!-- END REF-->

#### Nota 

<!--REF #_command_.Session storage.Summary-->El comando **Session storage** devuelve el objeto de almacenamiento de la sesión cuyo identificador único se pasó en el parámetro *id*.<!-- END REF--> 

En *id*, pase el UUID de la sesión para la que desea obtener el almacenamiento. El servidor lo asigna automáticamente y se almacena en la propiedad [**.id**](../API/SessionClass.md#id) del [objeto sesión](../API/SessionClass.md). Si la sesión no existe en el servidor, el comando devuelve **Null**. 

**Nota:** puede obtener los identificadores de sesión utilizando el comando [Process activity](../commands/process-activity.md).

El objeto devuelto es la propiedad [**.storage**](../API/SessionClass.md#storage) de la sesión. Es un objeto compartido utilizado para almacenar información disponible para todos los procesos de la sesión.

#### Ejemplo 

Este método modifica el valor de una propiedad "settings" almacenada en el objeto de almacenamiento de una sesión específica:

```4d
  //Definir el almacenamiento de una sesión
  // La propiedad del método "Execute On Server" está definida
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage($id)
 
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

  
[Process activity](../commands/process-activity.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1839 |
| Hilo seguro | &cross; |


