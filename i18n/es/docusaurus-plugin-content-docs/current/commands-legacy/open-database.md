---
id: open-database
title: OPEN DATABASE
slug: /commands/open-database
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATABASE.Syntax-->**OPEN DATABASE** ( *rutaArchivo* )<!-- END REF-->
<!--REF #_command_.OPEN DATABASE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaArchivo | Text | &#8594;  | Nombre o ruta de acceso completa del archivo de base de datos a abrir (.4db, .4dc, .4dbase o .4dlink) |

<!-- END REF-->

#### Nota 

<!--REF #_command_.OPEN DATABASE.Summary-->El comando **OPEN DATABASE** cierra la base de datos 4D actual y abre sobre la marcha de la base definida por *rutaArchivo*.<!-- END REF--> Este comando es útil para realizar pruebas automáticas, para reabrir una base de forma automática después de una compilación, o para permitir fusionar una aplicación remota 4D para seleccionar el servidor de la base al cual conectar.

En el parámetro *rutaArchivo*, pase el nombre o la ruta de acceso completa de la base a abrir. Puede utilizar los archivos con una de las siguientes extensiones:

* .4db (archivo de estructura interpretado),
* .4dc (archivo de estructura compilado),
* .4dbase (paquete macOS),
* .4dproject (archivo de la base proyecto)
* .4dz (archivo de despliegue de las bases proyecto)
* .4dlink (archivo de acceso directo).

Si pasa únicamente el nombre de archivo, debe ser colocado en el mismo nivel que el archivo de estructura de la base actual.

Si la ruta de acceso define una base válida, 4D cierra la base en progreso y abre la base especificada. En el modo mono usuario, el [Método base On Exit](metodo-base-on-exit.md) de la base cerrada y el [Método base On Startup](metodo-base-on-startup.md) (o [Método base On Server Open Connection](metodo-base-on-server-open-connection.md)) de la base abierta se llaman sucesivamente.

**Atención:** dado que este comando hace que la aplicación se cierre antes de la reapertura con la base especificada, no se recomienda su uso en el [Método base On Startup](metodo-base-on-startup.md), o en un método llamado por este método base.

El comando se ejecuta de forma asíncrona: después de su llamada, 4D continúa ejecutando el resto del método. Luego, la aplicación se comporta como si el comando **Salir** del menú **Archivo** estuviera seleccionado: las cajas de diálogo de apertura se cancelan, todos los procesos abiertos tienen 10 segundos para terminar antes de ser terminados, etc.

Si el archivo de la base objetivo no se encuentra o es inválido, se devuelve un error sistema estándar del administrador de archivos y 4D no hace nada.

#### Ejemplo 1 

```4d
 OPEN DATABASE("C:\\databases\\Invoices\\Invoices.4db")
```

#### Ejemplo 2 

Desea seleccionar un servidor al inicio desde una aplicación mono usuario. Puede ejecutar este código desde un proceso lanzado por [Método base On Startup](metodo-base-on-startup.md):

```4d
 var $xml : Text
 $xml:=""
 $databaseName:="myServer"
 $IP:="192.168.6.7:19813"
 
 If(Shift down)
    $IP:=Request("IP address to connect to "+$databaseName;$IP)
 Else
    ok:=1
 End if
 
 If(ok=1)
    $xml:=Replace string($xml;"{databaseName}";$databaseName)
    $xml:=Replace string($xml;"{IP}";$IP)
    var $link : Object
    $link:=Folder(fk user preferences folder).file("server.4dlink")
    $link.setText($xml)
    OPEN DATABASE($link.platformPath)
 Else
    QUIT 4D
 End if
```
