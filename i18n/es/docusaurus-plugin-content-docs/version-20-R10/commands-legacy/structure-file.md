---
id: structure-file
title: Structure file
slug: /commands/structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Structure file.Syntax-->**Structure file** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Structure file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Devuelve el archivo de estructura de la base local |
| Resultado | Text | &#8592; | Nombre largo del archivo de estructura de la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Structure file.Summary-->El comando **Structure file** devuelve la ruta de acceso del archivo de estructura de la base en la cual está trabajando actualmente.<!-- END REF-->

* Con bases binarias, el comando devuelve la ruta del archivo **.4db**.
* Con las bases proyecto, el comando devuelve la ruta del archivo **.4dproject**.

**Nota:** en el caso particular de una base compilada y fusionada con 4D Volume Desktop, este comando devuelve la ruta de acceso al archivo de la aplicación (archivo ejecutable) bajo Windows y macOS. Bajo macOS, este archivo está ubicado dentro del paquete del programa, en la carpeta \[Contents:MacOS\]. Este funcionamiento viene de un antiguo mecanismo y se conserva por razones de compatibilidad. Si quiere obtener el nombre completo del paquete del programa, es preferible utilizar el comando [Application file](application-file.md). La técnica consiste en probar la aplicación utilizando el comando [Application type](application-type.md), luego se ejecuta **Structure file** o [Application file](application-file.md) en función del contexto.

**Advertencia:** si llama este comando cuandoutiliza 4D en modo remoto, sólo devuelve el nombre del archivo de estructura; no el nombre largo.

El parámetro opcional \* es útil en el caso de una arquitectura que utilice componentes: permite determinar la estructura (local o componente) para la cual usted quiere obtener el nombre de acceso en función del contexto en el cual se llama el comando:

* Cuando se llama el comando desde un componente:  
   * si se pasa el parámetro \*, el comando devuelve la ruta de acceso del archivo de estructura de la base local,  
   * si no se pasa el parámetro \*, el comando devuelve la ruta de acceso del archivo de estructura del componente.  
   El archivo de estructura del componente corresponde al archivo de estructura (.4db, .4dc, .4dproject, .4dz) del componente que se encuentra en la carpeta "Components" de la base. Sin embargo, un componente también puede instalarse como un alias/atajo o un carpeta/paquete .4dbase:  
         * en el caso de un componente instalado en forma de alias/atajo, el comando devuelve la ruta de acceso del archivo original (el alias o atajo es resuelto).  
         * en el caso de un componente instalado en forma de carpeta/paquete .4dbase, el comando devuelve la ruta de acceso del archivo al interior de esta carpeta/paquete.
* Cuando el comando se llama desde un método de una base local, siempre devuelve la ruta de acceso del archivo de estructura/proyecto de la base local, sin importar si se pasa o no el parámetro \*.

#### Ejemplo 1 

Este ejemplo muestra el nombre y la ubicación del archivo de estructura que está utilizando:

```4d
 var $fullpath : Object
 var $name;$path : Text
 If(Application type#4D Remote mode)
    $fullpath:=Path to object(Structure file)
    $name:=$fullpath.name
    $path:=$fullpath.parentFolder
    ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")
 Else
    ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))
 End if
```

#### Ejemplo 2 

El siguiente ejemplo puede utilizarse para saber si el método se llama desde un componente:

```4d
 var $0 : Boolean
 $0:=(Structure file#Structure file(*))
  // $0=True si el método es llamado desde un componente
```

#### Ver también 

[Application file](application-file.md)  
[COMPONENT LIST](component-list.md)  
[Data file](data-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 489 |
| Hilo seguro | &check; |


