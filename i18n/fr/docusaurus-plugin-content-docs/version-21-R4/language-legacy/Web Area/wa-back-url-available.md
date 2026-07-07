---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai s’il existe un URL précédent dans la séquence d’URLs ouverts, Faux sinon |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.WA Back URL available.Summary-->La commande **WA Back URL available** permet de savoir s’il existe un URL précédent disponible dans la séquence d’URLs ouverts dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF-->  
  
La commande retourne Vrai si un URL existe et Faux sinon. Cette commande permet notamment, dans la cadre d’une interface personnalisée, d’activer ou d’inactiver des boutons de navigation.

## Voir aussi 

[WA Forward URL available](../commands/wa-forward-url-available)  
[WA OPEN BACK URL](../commands/wa-open-back-url)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1026 |
| Thread safe | no |


