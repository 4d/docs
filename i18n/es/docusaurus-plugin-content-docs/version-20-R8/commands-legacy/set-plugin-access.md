---
id: set-plugin-access
title: SET PLUGIN ACCESS
slug: /commands/set-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.SET PLUGIN ACCESS.Syntax-->**SET PLUGIN ACCESS** ( *plugIn* ; *grupo* )<!-- END REF-->
<!--REF #_command_.SET PLUGIN ACCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Número del plug-in |
| grupo | Text | &#8594;  | Nombre del grupo a asociar al plug-in |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PLUGIN ACCESS.Summary-->El comando SET PLUGIN ACCESS permite especificar por programación el grupo de usuarios autorizado a utilizar cada plug-in “serializado” instalado en la base.<!-- END REF--> Al hacer esto, puede administrar la repartición de las licencias de los plug-ins.

**Nota:** esta operación también puede efectuarse en modo Diseño en el editor de grupos.

Pase en el parámetro *plugIn* el número del plug-in a asociar un grupo de usuarios. Las licencias de plug-ins incluyen las licencias web y SOAP de 4D Client. Puede pasar una de las siguientes constantes del tema *Licencia disponible*:

| Constante              | Tipo         | Valor     |
| ---------------------- | ------------ | --------- |
| 4D Client SOAP license | Entero largo | 808465465 |
| 4D Client Web license  | Entero largo | 808465209 |
| 4D for OCI license     | Entero largo | 808465208 |
| 4D ODBC Pro license    | Entero largo | 808464946 |
| 4D View license        | Entero largo | 808465207 |
| 4D Write license       | Entero largo | 808464697 |

Pase en el parámetro *grupo* el nombre del grupo cuyos usuarios están autorizados a utilizar el plug-in.

**Notas:** 

* Sólo un grupo a la vez puede utilizar un plug-in. Cuando este comando se ejecuta, si otro grupo tiene los derechos de acceso al plug-in, se pierde este privilegio.
* Las licencias utilizadas permanecerán adjuntas a las cuentas de usuario 4D en *grupo* durante toda la sesión, incluso si cambian de membresía o si el *grupo* pierde sus derechos de acceso de plug-in.

#### Ver también 

[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 845 |
| Hilo seguro | &cross; |


