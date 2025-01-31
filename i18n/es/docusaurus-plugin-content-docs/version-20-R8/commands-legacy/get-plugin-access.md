---
id: get-plugin-access
title: Get plugin access
slug: /commands/get-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.Get plugin access.Syntax-->**Get plugin access** ( *plugIn* ) : Text<!-- END REF-->
<!--REF #_command_.Get plugin access.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Número del plug-in |
| Resultado | Text | &#8592; | Nombre del grupo asociado con el plug-in |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get plugin access.Summary-->El comando Get plugin access devuelve el nombre del grupo de usuarios autorizados a utilizar el plug-in cuyo número se pasa en el parámetro *plugIn*.<!-- END REF--> Si ningún grupo está asociado al plug-in, el comando devuelve una cadena vacía (""). 

Pase en el parámetro *plugIn* el número del plug-in del que quiere conocer el grupo de usuarios asociado. Las licencias de los plug-ins incluyen las licencias web y SOAP de 4D Client. Puede pasar una de las siguientes constantes del tema “”:

| Constante              | Tipo         | Valor     |
| ---------------------- | ------------ | --------- |
| 4D Client SOAP license | Entero largo | 808465465 |
| 4D Client Web license  | Entero largo | 808465209 |
| 4D for OCI license     | Entero largo | 808465208 |
| 4D ODBC Pro license    | Entero largo | 808464946 |
| 4D View license        | Entero largo | 808465207 |
| 4D Write license       | Entero largo | 808464697 |

#### Ver también 

[SET GROUP ACCESS](set-group-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 846 |
| Hilo seguro | &cross; |


