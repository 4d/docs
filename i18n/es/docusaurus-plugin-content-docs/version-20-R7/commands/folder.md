---
id: folder
title: Folder
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones              |
| ----------- | --------------------------- |
| 19 R8       | Soporte de `fk home folder` |
| 17 R5       | Añadidos                    |

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->

<!-- REF #_command_.Folder.Params -->

| Parámetros     | Tipo                      |     | Descripción                                                           |
| -------------- | ------------------------- | :-: | --------------------------------------------------------------------- |
| path           | Text                      |  →  | Ruta de la carpeta                                                    |
| folderConstant | Integer                   |  →  | Constante de la carpeta 4D                                            |
| pathType       | Integer                   |  →  | `fk posix path` (por defecto) o `fk platform path` |
| \*             | operator                  |  →  | \* para devolver la carpeta de la base local                          |
| Result         | 4D.Folder |  ←  | Nuevo objeto de carpeta                                               |

<!-- END REF -->

#### Descripción

Comentario El comando acepta dos sintaxis:

**Folder ( path { ; pathType } { ; \* } )**

En el parámetro *path*, pase una ruta de carpeta. Puede utilizar una cadena personalizada o un [filesystem](../Concepts/paths.md#filesystem-pathnames) (por ejemplo, "/DATA").

> Sólo se soportan los nombres de ruta absolutos con el comando `Folder`.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el parámetro *pathType*. Las siguientes constantes están disponibles:

| Constante        | Valor | Comentario                                                                                                                           |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**Folder ( folderConstant { ; \* } )**

En el parámetro *folderConstant*, pase una carpeta 4D interna o sistema, utilizando una de las siguientes constantes:

| Constante                  | Valor | Comentario                                                                                                                   |
| -------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116   |                                                                                                                              |
| fk data folder             | 9     | Filesystem asociado: "/DATA"                                                                                 |
| fk database folder         | 4     | Filesystem asociado: "/PACKAGE"                                                                              |
| fk desktop folder          | 115   |                                                                                                                              |
| fk documents folder        | 117   | Carpeta Documentos del usuario                                                                                               |
| fk home folder             | 118   | Carpeta personal actual del usuario (generalmente `/Users/<username>/`)                                   |
| fk licenses folder         | 1     | Carpeta que contiene los archivos de licencia 4D de la máquina                                                               |
| fk logs folder             | 7     | Filesystem asociado: "/LOGS"                                                                                 |
| fk mobileApps folder       | 10    |                                                                                                                              |
| fk remote database folder  | 3     | Carpeta de la base de datos 4D creada en cada máquina 4D remota                                                              |
| fk resources folder        | 6     | Filesystem asociado: "/RESOURCES"                                                                            |
| fk system folder           | 100   |                                                                                                                              |
| fk user preferences folder | 0     | Carpeta 4D que almacena los archivos de preferencias del usuario en la carpeta personal del usuario                          |
| fk web root folder         | 8     | Carpeta raíz web actual de la base de datos: si está dentro del paquete "/PACKAGE/path", si no ruta completa |

Si el comando se llama desde un componente, pase el parámetro opcional `*` para obtener la ruta de la base local. De lo contrario, si omite el parámetro `*`, siempre se devuelve un objeto null.

> En Windows, en los clientes fusionados, la ubicación de las carpetas integradas se modifica si se utiliza `ShareLocalResourcesOnWindowsClient` [clave BuildApp](../Desktop/building.md#buildapp4dsettings).

#### Ver también

[File](file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)
