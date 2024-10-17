---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumenes* )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| volumenes | Text array | &#8592; | Nombres de los volúmenes montados actualmente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VOLUME LIST.Summary-->El comando VOLUME LIST llena el array *volumenes*, de tipo texto, con los nombres de los volúmenes definidos (Windows) o montados (Mac OS) en su equipo.<!-- END REF--> 

* En Macintosh, devuelve la lista de volúmenes visibles al nivel del Finder. Sólo se devuelven los nombres de los volúmenes (por ejemplo "MacHD", "BootCamp", etc.).
* En Windows, devuelve la lista de los volúmenes actualmente definidos sin importar si el volumen está presente físicamente presente (por ejemplo el volumen E:\\ se devolverá sin importar si hay un CD o DVD en el drive). Los nombres de los volúmenes están seguidos por el carácter separador de carpetas ("C:\\").

#### Ejemplo 

Utilizando un área de desplazamiento llamada *atVolumenes,* usted quiere mostrar la lista de volúmenes definidos o montados en su equipo, entonces escribe:

```4d
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(atVolumes;0)
       VOLUME LIST(atVolumes)
 
  //...
 End case
```

#### Ver también 

[DOCUMENT LIST](document-list.md)  
[FOLDER LIST](folder-list.md)  
[VOLUME ATTRIBUTES](volume-attributes.md)  