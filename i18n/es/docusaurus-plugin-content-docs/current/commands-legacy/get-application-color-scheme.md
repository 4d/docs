---
id: get-application-color-scheme
title: Get application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get application color scheme.Syntax-->**Get application color scheme** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Get application color scheme.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devuelve el esquema de color de la base local |
| Resultado | Text | &#8592; | Esquema de color de la aplicación actual |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get application color scheme.Summary-->El comando **Get application color scheme** devuelve el nombre del esquema de color real en uso en el nivel de la aplicación.<!-- END REF--> 

**Nota:** en Windows, este comando siempre devuelve "claro".

El esquema de color real está definido por:

* una llamada al comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md);
* si [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) no fue llamado o llamado con un valor de parámetro "heredado", la Configuración (Configuración de la base local en el caso de un componente);
* si la configuración se define como "heredada", las preferencias del usuario del sistema operativo.

El parámetro *\** es útil cuando se llama al comando desde un componente: cuando se pasa, el comando devuelve el esquema de color de la base local.

Consulte la descripción del comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) para obtener detalles sobre los nombres de los esquemas de color.

#### Ejemplo 

```4d
 var $colorScheme : Text
 
  // Recuperar el esquema de color de la base local
 $colorScheme:=Get application color scheme(*)
```

#### Ver también 

[FORM Get color scheme](form-get-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  