---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| Parámetros | Tipo   |                             | Descripción                                                |
| ---------- | ------ | --------------------------- | ---------------------------------------------------------- |
| id         | Text   | &#8594; | Identificador único (UUID) de la sesión |
| Resultado  | Object | &#8592; | Objeto de almacenamiento de la sesión                      |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                |
| ----------- | ----------------------------- |
| 20 R8       | Soporte de sesiones autónomas |
| 20 R6       | Añadidos                      |

</details>

## Descripción

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

En *id*, indique la UUID de la sesión para la que desea obtener el almacenamiento. Se asigna automáticamente por 4D (4D Server o, para sesiones independientes, 4D mono-usuario) y se almacena en [**.id**](../API/SessionClass.md#id) propiedad del [objeto de sesión](../API/SessionClass.md). Si la sesión no existe, el comando devuelve **Null**.

**Nota:** puede obtener los identificadores de sesión usando el comando [Process activity](process-activity.md).

El objeto devuelto es la propiedad [**.storage**](../API/SessionClass.md#storage) de la sesión. Es un objeto compartido utilizado para almacenar información disponible para todos los procesos de la sesión.

## Ejemplo

Este método modifica el valor de una propiedad "settings" almacenada en el objeto de almacenamiento de una sesión específica:

```4d
//Configuración del almacenamiento de una sesión
//Configuración de la propiedad del método "Ejecutar en el servidor"

 #DECLARE($id : Text; $text : Text)
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

## Ver también

[Process activity](process-activity.md)\
[Session](./session.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1839                        |
| Hilo seguro       | &check; |


