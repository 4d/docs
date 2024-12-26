---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *esquemaColor* )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| esquemaColor | Text | &#8594;  | "claro", "oscuro" o "heredado" |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->El comando **SET APPLICATION COLOR SCHEME** define el esquema de color a utilizar a nivel de la aplicación para la sesión actual.<!-- END REF--> Este esquema se aplicará a los formularios que no declaren ya un esquema específico (un esquema de color definido a nivel de formulario tiene prioridad sobre el nivel de aplicación).

**Nota:** este comando sólo funciona en macOS. En Windows, el único esquema disponible es "claro".

En el parámetro *esquemaColor*, pase un esquema de color a aplicar:

* **"claro"** \- la aplicación utilizará el tema claro por defecto
* **"oscuro"** \- la aplicación utilizará el tema oscuro por defecto
* **"** **heredado"** \- la aplicación heredará del nivel de prioridad más alto (es decir, en Configuración)

#### Ejemplo 

```4d
  // Forzar la aplicación actual a oscuro
 SET APPLICATION COLOR SCHEME("dark")
```

#### Ver también 

[FORM Get color scheme](form-get-color-scheme.md)  
[Get application color scheme](get-application-color-scheme.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1762 |
| Hilo seguro | &cross; |


