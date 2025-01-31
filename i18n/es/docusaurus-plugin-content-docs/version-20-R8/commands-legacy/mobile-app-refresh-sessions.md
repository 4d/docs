---
id: mobile-app-refresh-sessions
title: MOBILE APP REFRESH SESSIONS
slug: /commands/mobile-app-refresh-sessions
displayed_sidebar: docs
---

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Syntax-->**MOBILE APP REFRESH SESSIONS**<!-- END REF-->
<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Summary-->El comando **MOBILE APP REFRESH SESSIONS** comprueba todos los archivos de sesión de la aplicación móvil ubicados en la carpeta MobileApps del servidor y actualiza el contenido de sesión existente en la memoria para todo archivo editado.<!-- END REF-->

Este comando está diseñado para ser utilizado por los desarrolladores de 4D for iOS y de 4D for Android para "forzar" la recarga de la información de la sesión del usuario después de que se hayan editado sus archivos locales. Por ejemplo, si una sesión necesita reiniciarse, puede eliminar el archivo de sesión y luego llamar a **MOBILE APP REFRESH SESSIONS**. Para más información sobre las sesiones de aplicaciones móviles, consulte la [documentación Go Mobile](https://developer.4d.com/go-mobile).

El comando verifica el cumplimiento de cada archivo de sesión en la carpeta MobileApps (sintaxis json, esquema json, datos de sesión). Si el archivo es compatible y se ha modificado, la sesión correspondiente se actualiza en la memoria (si ya existe) con los contenidos editados.

Si un archivo de sesión no es válido o ha sido eliminado, la sesión correspondiente se elimina de la memoria.

El comando puede devolver uno de los siguientes errores, que se puede manejar a través de los comandos [ON ERR CALL](on-err-call.md) y [Last errors](last-errors.md) :

| **Nombre del componente** | **Código de error** | **Descripción**                                            |
| ------------------------- | ------------------- | ---------------------------------------------------------- |
| mobi                      | 1                   | La ubicación del archivo json no coincide con su contenido |
| mobi                      | 2                   | El archivo json no está formado correctamente              |
| mobi                      | 3                   | El archivo json no valida el esquema json                  |
| mobi                      | 4                   | El token de conexión no cumple con la información actual   |

#### Ejemplo 

Usted desea restablecer todas las sesiones actuales para todas las aplicaciones móviles:

```4d
 var $sessionsPath : Text
 $sessionsPath:=Get 4D folder(MobileApps folder)
 DELETE FOLDER(sessionsPath;Delete with contents)
 MOBILE APP REFRESH SESSIONS
```

#### Ver también 

[Método base On Mobile App Authentication](metodo-base-on-mobile-app-authentication.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1596 |
| Hilo seguro | &check; |


