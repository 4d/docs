---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** {( *licence* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| licence | Integer | &#8594;  | Plug-in duquel tester la validité de la licence |
| Résultat | Boolean | &#8592; | Vrai si le plug-in est disponible, sinon Faux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Is license available.Summary-->La commande **Is license available** permet de connaître la disponibilité d’un plug-in.<!-- END REF--> Elle est utile, par exemple, pour afficher ou masquer des fonctions nécessitant la présence d’un plug-in.

La commande **Is license available** peut être utilisée de trois manières différentes :

* Le paramètre *licence* est omis : dans ce cas, la commande retourne Faux si l’application 4D est en mode démonstration.
* Vous passez dans le paramètre *licence* une des constantes suivantes du thème “*Licence disponible*” :  

| Constante              | Type        | Valeur    |  
| ---------------------- | ----------- | --------- |  
| 4D Client SOAP license | Entier long | 808465465 |  
| 4D Client Web license  | Entier long | 808465209 |  
| 4D for OCI license     | Entier long | 808465208 |  
| 4D ODBC Pro license    | Entier long | 808464946 |  
| 4D REST Test license   | Entier long | 808465719 |  
| 4D SOAP license        | Entier long | 808465464 |  
| 4D View license        | Entier long | 808465207 |  
| 4D Web license         | Entier long | 808464945 |  
| 4D Write license       | Entier long | 808464697 |  
    
Dans ce cas, la commande retourne Vrai si le plug-in correspondant dispose d’une licence d’utilisation. La commande tient compte des éventuelles attributions de licences effectuées en mode Développement ou via la commande [SET PLUGIN ACCESS](set-plugin-access.md).  
**Is license available** retourne Faux si le plug-in fonctionne en mode démonstration.
* Vous passez directement dans le paramètre *licence* le numéro d’ID de la ressource “4BNX” du plug-in. Le fonctionnement de la commande est dans ce cas identique à celui décrit ci-dessus.

#### Voir aussi 

[CHANGE LICENSES](change-licenses.md)  
[License info](license-info.md)  
[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  