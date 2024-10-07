---
id: file
title: File
slug: /commands/file
displayed_sidebar: docs
---

<!--REF #_command_.File.Syntax-->**File** ( ruta | archivo4D {; tipoRuta | *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.File.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta &#124; archivo4D | Texto, Entero largo | &#x1F852; | Ruta de archivo o constante de archivo 4D |
| tipoRuta &#124; * | Entero largo, Operador | &#x1F852; | Si se pasó ruta: fk ruta posix (predeterminada) o fk ruta plataforma<br/>Si se pasó archivo4D: * para devolver el archivo de la base local |
| Resultado | Object | &#x1F850; | Nuevo objeto archivo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.File.Summary-->**Documentación trasladada**

Se ha trasladado la documentación de este comando.<!-- END REF--> Ver el [comando **File** en developer.4d.com](https://developer.4d.com/docs/API/FileClass#file) para obtener documentación actualizada.

El comando **File** crea y devuelve un nuevo objeto del tipo *File*. 

#### Ver también 

[Folder ](folder.md)  
[Get 4D file](get-4d-file.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  