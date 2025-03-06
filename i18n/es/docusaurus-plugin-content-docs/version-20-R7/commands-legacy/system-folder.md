---
id: system-folder
title: System folder
slug: /commands/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *tipo* )} : Text<!-- END REF-->
<!--REF #_command_.System folder.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipo | Integer | &#8594;  | Tipo de carpeta sistema |
| Resultado | Text | &#8592; | Ruta de acceso de una carpeta del sistema activo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.System folder.Summary-->El comando **System folder** devuelve la ruta de acceso a una carpeta particular del sistema operativo o a la carpeta activa del sistema Windows o macOS.<!-- END REF-->

Pase un valor en el parámetro opcional *tipo* indicando el tipo de carpeta del sistema. 4D le ofrece las siguientes constantes predefinidas, ubicadas en el tema “*Carpeta sistema*”:

| Constante                     | Tipo         | Valor | Comentario                                                                   |
| ----------------------------- | ------------ | ----- | ---------------------------------------------------------------------------- |
| Applications or program files | Entero largo | 16    |                                                                              |
| Desktop                       | Entero largo | 15    |                                                                              |
| Documents folder              | Entero largo | 17    | Carpeta "Documents" del usuario                                              |
| Favorites Win                 | Entero largo | 14    |                                                                              |
| Fonts                         | Entero largo | 1     |                                                                              |
| Home folder                   | Entero largo | 18    | Carpeta de inicio actual del usuario (normalmente "/Users/<nombreusuario>/") |
| Start menu Win\_all           | Entero largo | 8     |                                                                              |
| Start menu Win\_user          | Entero largo | 9     |                                                                              |
| Startup Win\_all              | Entero largo | 4     |                                                                              |
| Startup Win\_user             | Entero largo | 5     |                                                                              |
| System                        | Entero largo | 0     |                                                                              |
| System Win                    | Entero largo | 12    |                                                                              |
| System32 Win                  | Entero largo | 13    |                                                                              |
| User preferences\_all         | Entero largo | 2     |                                                                              |
| User preferences\_user        | Entero largo | 3     |                                                                              |

**Notas**

* Las constantes con sufijo **Win**, pueden utilizarse bajo Windows únicamente. Cuando se utilizan en macOS, **System folder** devuelve una cadena vacía.
* Las rutas de acceso a algunas carpetas sistema pueden especificar el usuario actual. Las constantes 2 a 9 le permiten elegir si quiere obtener la ruta de acceso a una carpeta común para todos los usuarios o la ruta personalizada para el usuario actual.

Si omite el parámetro *tipo*, la función devolverá la ruta a la carpeta sistema activa (= constante System).

#### Ver también 

[Get 4D folder](get-4d-folder.md)  
[Temporary folder](temporary-folder.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 487 |
| Hilo seguro | &check; |


