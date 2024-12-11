---
id: build-application
title: BUILD APPLICATION
slug: /commands/build-application
displayed_sidebar: docs
---

<!--REF #_command_.BUILD APPLICATION.Syntax-->**BUILD APPLICATION** {( *confCreacionApp* )}<!-- END REF-->
<!--REF #_command_.BUILD APPLICATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| confCreacionApp | Text | &#8594;  | Ruta de acceso completa del proyecto a utilizar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BUILD APPLICATION.Summary-->El comando BUILD APPLICATION lanza el proceso de generación de la aplicación teniendo en cuenta los parámetros definidos en el proyecto de aplicación actual o en el proyecto de aplicación designado por el parámetro *nomProyecto*.<!-- END REF-->

**Nota**: este comando solo puede funcionar con 4D Developer (mono usuario). No se puede llamar desde 4D Server, 4D en modo remoto o una aplicación fusionada.

Un archivo de configuración de creación de aplicación es un archivo XML que contiene todos los parámetros utilizados para generar una aplicación. La mayoría de estos parámetros son visibles en la caja de diálogo Generar aplicación... (Para mayor información, consulte la sección *El generador de aplicaciones* en el Manual de Diseño de 4D).

Por defecto, 4D crea para cada base un proyecto de aplicación llamado “buildapp.xml” (por defecto) para cada base y lo ubica en la subcarpeta BuildApp en la carpeta Preferencias de la base.

Si la base no ha sido compilada aún o si el código compilado está desactualizado, el comando lanza primero el proceso de compilación. En este caso, no aparece la ventana del compilador (a menos que ocurra un error), sólo se muestra una barra de progreso. Puede ocultar esta barra de progreso utilizando el comando [MESSAGES OFF](messages-off.md).

Si no pasa el parámetro opcional *confCreacionApp*, el comando muestra una caja de diálogo estándar de apertura de archivos, de manera que pueda designar un archivo de proyecto. Cuando la caja de diálogo se valida, la variable sistema Document contiene la ruta de acceso completa del archivo seleccionado.

Si pasa la ruta de acceso y el nombre de un archivo XML de proyecto de aplicación válido (codificación UTF-8), el comando utilizará los parámetros definidos en el archivo. Para mayor información sobre la estructura y las llaves utilizables en un archivo configuración de creación de aplicación, consulte el manual *4D Llaves XML BuildApplication*.

#### Ejemplo 

Este ejemplo crea dos aplicaciones en un solo método:

```4d
 BUILD APPLICATION("c:\\folder\\buildApp\\myclientApp.xml")
 If(OK=1)
    BUILD APPLICATION(File(Build application settings file).platformPath) //default settings
 End if
```

#### Variables y conjuntos sistema 

La variable sistema OK toma el valor 1 si el comando se ha ejecutado correctamente. De lo contrario, toma el valor 0\. La variable sistema Document contiene la ruta de acceso completa al archivo de configuración abierto.

#### Gestión de errores 

Si el comando falla, se genera un error que puede interceptar con la ayuda del comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[Compile project ](../commands/compile-project.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 871 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document, error |
| Prohibido en el servidor ||


