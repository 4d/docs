---
id: open-data-file
title: OPEN DATA FILE
slug: /commands/open-data-file
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATA FILE.Syntax-->**OPEN DATA FILE** ( *rutaAcceso* )<!-- END REF-->
<!--REF #_command_.OPEN DATA FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaAcceso | Text | &#8594;  | Nombre o ruta de acceso completa del archivo de datos a abrir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OPEN DATA FILE.Summary-->El comando OPEN DATA FILEpermite cambiar el archivo de datos abierto por la aplicación 4D.<!-- END REF-->

Pase el nombre o la ruta de acceso completa del archivo de datos a abrir en el parámetro *rutaAcceso* (archivo con el sufijo ".4DD"). Si pasa sólo el nombre del archivo, debe estar ubicado junto al archivo de estructura de la base.

Si la ruta de acceso establece un archivo de datos válido, 4D sale de la base y abre nuevamente con el archivo de datos especificado. En modo mono usuario [Método base On Exit](metodo-base-on-exit.md) y [Método base On Startup](metodo-base-on-startup.md) se llaman sucesivamente.

**Advertencia:** como este comando hace que la aplicación se cierre antes de abrir nuevamente con el archivo de datos especificado, debe utilizarse con precaución en el [Método base On Exit](metodo-base-on-exit.md) o en un método llamado por este método base con el fin de no generar un bucle sin fin.

El comando se ejecuta de una manera asincrónica: después de su llamada, 4D continua ejecutando el resto del método. Luego, la aplicación se comporta como si el comando **Salir** hubiera sido seleccionado en el menú **Archivo** las cajas de diálogo abiertas son canceladas, los procesos abiertos tienen 10 segundos para terminar antes de que sean terminados, etc.

Antes de lanzar la operación, el comando verifica la validez del archivo de datos especificado. También, si el archivo ya estaba abierto, el comando verifica que corresponda a la estructura actual.

Si pasa una cadena vacía en *rutaAcceso*, el comando abrirá nuevamente la base de datos sin cambiar el archivo de datos.

**4D Server:** a partir de 4D v13, este comando puede utilizarse con 4D Server. En este contexto, hace una llamada interna a [QUIT 4D](quit-4d.md) en el servidor (lo que produce la aparición de una caja de diálogo en cada equipo remoto, indicando que el servidor está en proceso de salir) antes de abrir el archivo designado.

#### Ejemplo 

En el contexto del despliegue de una aplicación fusionada, usted desea abrir o crear el archivo de datos usuario en el método base On Startup. En este ejemplo se utiliza el archivo de datos por defecto (ver *Gestión de archivo de datos en las aplicaciones finales* ):

```4d
 If(Data file="@default.4dd")
    If(Version type?? Merged application)
       If(Is data file locked)
          $dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"
  //Si un archivo de datos local ya existe
          If(Test path name($dataPath)=Is a document)
             OPEN DATA FILE($dataPath) //abrirlo
          Else
             CREATE DATA FILE($dataPath) //crearlo
          End if
       End if
    End if
 End if
```

#### Ver también 

[CREATE DATA FILE](create-data-file.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 312 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


