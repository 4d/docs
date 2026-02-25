---
id: get-plugin-access
title: Get plugin access
slug: /commands/get-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.Get plugin access.Syntax-->**Get plugin access** ( *plugIn* ) : Text<!-- END REF-->
<!--REF #_command_.Get plugin access.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Numéro du plug-in |
| Résultat | Text | &#8592; | Nom du groupe associé au plug-in |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get plugin access.Summary-->La commande **Get plugin access** retourne le nom du groupe d’utilisateurs autorisé à utiliser le plug-in dont le numéro a été passé dans le paramètre *plugIn*.<!-- END REF--> Si aucun groupe n’est associé au plug-in, la commande retourne une chaîne vide (""). 

Passez dans le paramètre *plugIn* le numéro du plug-in duquel vous souhaitez connaître le groupe d’utilisateurs associé. Les licences de plug-ins incluent les licences Web et SOAP de 4D Client. Vous pouvez passer une des constantes suivantes du thème *Licence disponible* :

| Constante              | Type        | Valeur    |
| ---------------------- | ----------- | --------- |
| 4D Client SOAP license | Entier long | 808465465 |
| 4D Client Web license  | Entier long | 808465209 |
| 4D for OCI license     | Entier long | 808465208 |
| 4D ODBC Pro license    | Entier long | 808464946 |
| 4D View license        | Entier long | 808465207 |
| 4D Write license       | Entier long | 808464697 |

## Voir aussi 

[SET GROUP ACCESS](../commands/set-group-access)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 846 |
| Thread safe | no |


