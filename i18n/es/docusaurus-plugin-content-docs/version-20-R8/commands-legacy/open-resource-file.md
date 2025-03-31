---
id: open-resource-file
title: Open resource file
slug: /commands/open-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.Open resource file.Syntax-->**Open resource file** ( *resNomArchivo* {; *tipo*} ) : Time<!-- END REF-->
<!--REF #_command_.Open resource file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNomArchivo | Text | &#8594;  | Nombre o ruta de acceso completa del archivo de recursos o Cadena vacía para mostrar la caja de diálogo estándar de apertura de archivos |
| tipo | Text | &#8594;  | Tipo de archivo Mac OS (cadena de 4 caracteres) o extensión del archivo Windows (cadena de 1 a 3 caracteres) o archivo de recursos ("res " / .RES) si se omite |
| Resultado | Time | &#8592; | Número de referencia del archivo de recursos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Open resource file.Summary-->El comando **Open resource file** abre el archivo de recursos cuyo nombre o ruta de acceso completa se pasa en *resNomArchivo*.<!-- END REF-->

Si pasa un nombre de archivo, el archivo debe estar ubicado en la misma carpeta que el archivo de estructura de la base. Para abrir un archivo de recursos ubicado en otra carpeta, pase una ruta de acceso completa. 

Si pasa una cadena vacía en *resNomArchivo*, la caja de diálogo estándar de apertura de archivos aparece, permitiendo al usuario seleccionar el archivo a abrir. Si el usuario hace clic en Cancelar en esta caja de diálogo, no se abre ningún archivo de recursos; **Open resource file** devuelve un valor nulo en DocRef y la variable OK toma el valor 0.

Si el archivo de recursos se abre correctamente, **Open resource file** devuelve su número de referencia de archivo y la variable OK toma el valor 1\. Si el archivo de recursos no existe o si el archivo que intenta abrir no es un archivo de recursos, se genera un error.

* En Macintosh, si utiliza la caja de diálogo estándar de apertura de archivos, todos los archivos se presentan por defecto. Para mostrar archivos de un tipo en particular, especifique el tipo del archivo en el parámetro opcional *tipoArchivo*.
* En Windows, si utiliza la caja de diálogo estándar de apertura de archivos, todos los archivos se presentan por defecto. Para mostrar archivos de un tipo particular, pase en *tipoArchivo*, una extensión de archivo Windows de 1 a 3 caracteres o un tipo de archivo Macintosh asociado a una extensión Windows utilizando el comando *\_o\_MAP FILE TYPES*.

Recuerde llamar [CLOSE RESOURCE FILE](close-resource-file.md) para el archivo de recursos. Note, sin embargo, que 4D cierra automáticamente todos los archivos de recursos abiertos utilizando **Open resource file** cuando sale de la aplicación o abre otra base de datos. 

A diferencia del comando [Open document](open-document.md), que abre por defecto un documento con un acceso exclusivo en lectura escritura, **Open resource file** permite abrir un archivo de recursos ya abierto desde la sesión 4D. Por ejemplo, si trata de abrir el mismo documento dos veces con [Open document](open-document.md), un error de E/S será devuelto al segundo intento. Por otra parte, si trata de abrir un archivo de recursos ya abierto desde la sesión 4D, **Open resource file** devolverá su número de referencia. Incluso si abre un archivo de recursos varias veces, sólo necesita llamar [CLOSE RESOURCE FILE](close-resource-file.md) una vez para cerrar ese archivo. Note que este funcionamiento es válido sólo si el archivo de recursos está abierto desde la sesión 4D; si trata de abrir un archivo de recursos ya abierto por otra aplicación, obtendrá un error E/S.

**Advertencia:**

* Está prohibido acceder a los archivos de recursos de las aplicaciones 4D y de las bases fusionadas con 4D Desktop.
* Aunque es técnicamente posible, no es recomendable utilizar el archivo de recursos de la estructura de la base porque su código no funcionará si la base está compilada y fusionada con 4D Desktop.  
Sin embargo, si accede al archivo de recursos de la estructura y quiere añadir, borrar o modificar los recursos por programación, asegúrese de probar el entorno en el cual se ejecuta la base. Con 4D Server, esto probablemente llevará a serios problemas. Por ejemplo, si modifica un recurso en el equipo del servidor (vía un método de base de datos o un procedimiento almacenado), definitivamente afectará el sistema de administración integrado de 4D Server que distribuye recursos (de manera transparente) a las estaciones de trabajo. Note que con 4D Client, usted no tiene acceso directo al archivo de estructura; está ubicado en el equipo servidor.
* Por todas estas razones, si utiliza los recursos, guárdelos en sus propios archivos.
* Cuando trabaje con sus propios recursos, NO utilice números de recursos negativos; los números negativos están reservados para el sistema operativo. NO utilice números de recursos entre 0 y 14 999; este rango está reservado para 4D. Utilice el rango entre 15 000 y 32 767 para sus propios recursos. Recuerde que una vez haya abierto un archivo de recursos, será el primer archivo donde se buscará en la cadena de archivos de recursos. Si guarda un recurso en ese archivo con un número que pertenece a los rangos reservados para el sistema o para 4D, este recurso será utilizado no sólo por comandos como [GET RESOURCE](get-resource.md)  si no también por rutinas internas de la aplicación 4D. Este puede podría ser el resultado que usted quiere obtener, pero si no está seguro, NO utilice estos rangos, ya que pueden producir errores del sistema.
* Un archivo de recursos es altamente estructurado y no puede aceptar más de 2 700 recursos por archivo. Si quiere trabajar con archivos que contengan un gran número de recursos, es recomendable probar ese número antes de añadir nuevos recursos a un archivo. Consulte los ejemplos de ***Count resources*** en la descripción del comando [RESOURCE TYPE LIST](resource-type-list.md).

Una vez haya abierto una archivo de recursos, puede analizar su contenido utilizando los comandos [RESOURCE TYPE LIST](resource-type-list.md) y [RESOURCE LIST](resource-list.md).

#### Ejemplo 1 

El siguiente ejemplo trata de abrir, en Windows, el archivo de recursos “MyPrefs.res” ubicado en la carpeta de la base:

```4d
 $vhResArchivo:=Open resource file("MisPrefs";"res ")
```

En Macintosh, el ejemplo trata de abrir el archivo “MisPrefs”.

#### Ejemplo 2 

El siguiente ejemplo trata de abrir en Windows el archivo de recursos “MisPrefs.rsr” ubicado en la carpeta de la base:

```4d
 $vhResArchivo:=Open resource file("MisPrefs";"rsr")
```

En Mac OS, el ejemplo tratará de abrir el archivo “MisPrefs”.

#### Ejemplo 3 

El siguiente ejemplo muestra la caja de diálogo estándar de apertura de archivos, en la cual se muestran todos los tipos de documentos:

```4d
 $vhResArchivo:=Open resource file("")
```

#### Ejemplo 4 

El siguiente ejemplo muestra la caja de diálogo estándar de apertura de archivos, en la cual sólo se muestran los documentos creados con la ayuda de la función Create resource file, y que utilizan el tipo por defecto:

```4d
 $vhResArchivo:=Open resource file("";"res ")
 If(OK=1)
    ALERT("Acaba de abrir“"+Document+"”.")
    CLOSE RESOURCE FILE($vhResArchivo)
 End if
```

#### Variables y conjuntos del sistema 

Si el archivo de recursos se abre correctamente, la variable sistema OK toma el valor 1\. Si el archivo de recursos no se pudo abrir o si el usuario hace clic en Cancelar en la caja de diálogo estándar de apertura de archivos, la variable OK toma el valor 0 (cero).

Si el archivo de recursos se abre correctamente utilizando la caja de diálogo estándar de apertura de archivos, la variable sistema Document contiene la ruta de acceso al archivo.

#### Gestión de errores 

Si el archivo de recursos no se pudo abrir por un problema del recurso o de E/S, se genera un error. Puede interceptar este error con un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[CLOSE RESOURCE FILE](close-resource-file.md)  
*Recursos*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 497 |
| Hilo seguro | &cross; |
| Modifica variables | OK, Document, error |


