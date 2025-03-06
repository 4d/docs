---
id: set-plugin-access
title: SET PLUGIN ACCESS
slug: /commands/set-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.SET PLUGIN ACCESS.Syntax-->**SET PLUGIN ACCESS** ( *plugIn* ; *groupe* )<!-- END REF-->
<!--REF #_command_.SET PLUGIN ACCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Numéro du plug-in |
| groupe | Text | &#8594;  | Nom du groupe à associer au plug-in |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET PLUGIN ACCESS.Summary-->La commande **SET PLUGIN ACCESS** permet de spécifier par programmation le groupe d’utilisateurs autorisé à utiliser chaque plug-in “sérialisé” installé dans la base.<!-- END REF--> Cette définition permet de gérer la répartition des licences des plug-ins.

**Note :** Cette opération peut également être effectuée en mode Développement dans l'éditeur de groupes.

Passez dans le paramètre *plugIn* le numéro du plug-in auquel associer un groupe d’utilisateurs. Les licences de plug-ins incluent les licences Web et SOAP de 4D Client. Vous pouvez passer une des constantes suivantes du thème “*Licence disponible*” :

| Constante              | Type        | Valeur    |
| ---------------------- | ----------- | --------- |
| 4D Client SOAP license | Entier long | 808465465 |
| 4D Client Web license  | Entier long | 808465209 |
| 4D for OCI license     | Entier long | 808465208 |
| 4D ODBC Pro license    | Entier long | 808464946 |
| 4D View license        | Entier long | 808465207 |
| 4D Write license       | Entier long | 808464697 |

Passez dans le paramètre *groupe* le nom du groupe dont les utilisateurs seront autorisés à utiliser le plug-in.

**Notes :** 

* L'autorisation d'accès à un plug-in n'est accordée qu'à un seul groupe. Si un autre groupe disposait déjà de l'autorisation d'accès, il perd ce privilège à l'issue de l'exécution de la commande.
* Les licences utilisées resteront associées aux comptes utilisateurs 4D dans *groupe* durant toute la session, même si elles changent de groupe ou si le *groupe* perd ses droits d'accès au plug-in.

#### Voir aussi 

[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 845 |
| Thread safe | &cross; |


