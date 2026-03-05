---
id: get-group-access
title: Get group access
slug: /commands/get-group-access
displayed_sidebar: docs
---

<!--REF #_command_.Get group access.Syntax-->**Get group access** : Collection<!-- END REF-->
<!--REF #_command_.Get group access.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#8592; | Collection de nom(s) de groupe(s) au(x)quel(s) l'utilisateur appartient |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|18 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get group access.Summary-->La commande **Get group access** retourne l'adhésion du compte utilisateur 4D à la session courante.<!-- END REF--> Si l'utilisateur n'appartient à aucun groupe de la session, une collection vide est retournée.

**Valeur retournée**

Collection de chaines : nom de groupe auxquels le compte utilisateur 4D appartient. 

## Exemple 

Vous souhaitez vérifier si l'utilisateur courant appartient au groupe "plugins" :

```4d
 $groups:=Get group access
 If($groups.countValues("plugins")#0) //l'utilisateur appartient au groupe
    ... //
 End if
```

## Voir aussi 

[SET GROUP ACCESS](../commands/set-group-access)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1738 |
| Thread safe | yes |


