---
id: folder
title: Folder
slug: /commands/folder
displayed_sidebar: docs
---

<!--REF #_command_.Folder.Syntax-->**Folder**  ( ruta| carpeta4D  {; tipoRuta | *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Folder.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta&#124; carpeta4D | Texto, Entero largo | &#x1F852; | Ruta de la carpeta o de la constante de la carpeta 4D |
| tipoRuta &#124; * | Entero largo, Operador | &#x1F852; | Si se pasa ruta: fk ruta posix (predeterminada) o fk ruta plataforma<br/>Si se pasó carpeta4D: * para devolver la carpeta de la base local |
| Resultado | Object | &#x1F850; | Nuevo objeto carpeta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Folder.Summary-->**Documentación trasladada**

Se ha trasladado la documentación de este comando.<!-- END REF--> Ver el [comando **Folder** en developer.4d.com](https://developer.4d.com/docs/API/FolderClass#folder) para obtener documentación actualizada.

El comando **Folder**  crea y devuelve un nuevo objeto de tipo Folder.

#### Ver también 

[File](file.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  