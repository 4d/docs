---
id: set-external-data-path
title: SET EXTERNAL DATA PATH
slug: /commands/set-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.SET EXTERNAL DATA PATH.Syntax-->**SET EXTERNAL DATA PATH** ( *aCampo* ; *ruta* )<!-- END REF-->
<!--REF #_command_.SET EXTERNAL DATA PATH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aCampo | Text, Blob, Picture | &#8594;  | Campo para el cual definir el lugar de almacenamiento |
| ruta | Text, Integer | &#8594;  | Ruta de acceso y nombre del archivo de almacenamiento externo o0 = utilizar la definición en estructura 1 = utilizar la carpeta por defecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET EXTERNAL DATA PATH.Summary-->El comando **SET EXTERNAL DATA PATH** define o modifica, para el registro actual, la ubicación de almacenamiento externo del campo *aCampo* pasado como parámetro.<!-- END REF-->

4D autoriza almacenar datos de campos de tipo texto, BLOB e Imagen *fuera* del archivo de datos. Para una descripción completa de esta funcionalidad, consulte el *Manual de Diseño*.

La configuración definida por este comando sólo se aplica cuando el registro actual se guarda en el disco. Los parámetros de almacenamiento definidos en la estructura de la aplicación no cambian. Si el registro actual se cancela, el comando no hace nada. Los parámetros de almacenamiento definidos en la estructura de la aplicación no se modifican.

En *ruta*, puede pasar una ruta de acceso personalizada o una constante designando un lugar automático:

* **ruta de acceso personalizada al archivo**  
En este caso, utilice el almacenamiento externo en "modo personalizado". En este modo ciertas funciones de base de datos 4D no están disponibles automáticamente (ver el Manual de Diseño). En particular, debe administrar usted mismo la creación o modificación de los archivos.  
Puede pasar una ruta relativa al archivo de datos o un ruta absoluta, que debe incluir el nombre y la extensión del archivo de almacenamiento. Debe utilizar la sintaxis del sistema. Para definir una ruta relativa, pase "../" (en Windows) o "..:" (OS X) al inicio de la cadena. Puede designar toda carpeta, incluyendo la carpeta por defecto de los archivos externos de la base (*nomBase*.ExternalData), en este caso, estos archivos se incluyen en el backup de la base. El archivo designado por el parámetro *ruta* debe existir y ser accesible en el momento de la ejecución del comando. Tenga en cuenta que si la ruta no es válida (archivo o carpeta inexistentes), se devuelve un error sólo en los casos en que se definió la *ruta* como absoluta. Cuando se especifica una *ruta* relativa, debe asegurar su validez ya que no se genera un error si no se encuentra el archivo.  
Si guarda el archivo externo en la misma carpeta que el archivo de datos o una de sus subcarpetas, 4D considera que la ruta especificada es relativa al archivo de datos y mantiene la relación, incluso cuando se mueve o se cambia el nombre de la carpeta de archivos de datos.  
Tenga en cuenta que esto significa que es posible "compartir" el mismo archivo externo entre varios registros. Todo cambio realizado en este archivo externo está disponibles en todos los registros. En este caso, si varios procesos pueden escribir los mismos campos al mismo tiempo, hay que tener cuidado para evitar accesos concurrentes a través de semáforos, con el fin de no afectar los archivos externos.
* **ubicación automática**  
Puede designar dos lugares automáticamente con las siguientes constantes, que se encuentra en el tema *Mantenimiento archivo de datos*:  

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                |  
| ------------------------ | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Use default folder       | Entero largo | 1     | Los datos pasado en parámetro se almacenarán en la carpeta por defecto, llamada *nomBase.ExternalData* y ubicada al lado del archivo de datos. En este modo, los datos externos son generados por 4D como si estuvieran al interior del archivo de datos. |  
| Use structure definition | Entero largo | 0     | 4D utilizará los parámetros definidos en la estructura para el almacenamiento del campo (ver manual *Modo Diseño*). Si pasa de un almacenamiento externo a un almacenamiento interno, el archivo externo no se elimina.                                   |

Una vez que se ejecuta este comando, 4D mantiene automáticamente el enlace entre el campo del registro y el archivo en el disco. No es necesario para ejecutar el comando de nuevo (excepto si necesita cambiar la ruta). Si 4D ya no puede acceder a los datos del campo (archivo de almacenamiento renombrado o eliminado, ruta modificada, etc.), el campo está vacío, pero no se genera ningún error.

**Nota:** el comando **SET EXTERNAL DATA PATH** sólo se puede ejecutar en 4D local o 4D Server. No hace nada cuando se ejecuta en un 4D remoto.

#### Ejemplo 

Usted desea guardar el contenido de un archivo existente en el campo imagen, almacenado fura de los datos, en la carpeta de la base:

```4d
 CREATE RECORD([Photos])
 [Photos]Name:="Paris.png"
 SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)
  //"/custom/Paris.png" debe existir junto al archivo de estructura
 SAVE RECORD([Photos])
```

#### Ver también 

[Get external data path](get-external-data-path.md)  
[RELOAD EXTERNAL DATA](reload-external-data.md)  