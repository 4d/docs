---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *nomObjet* ; *valeur* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomObjet | Text | &#8594;  | Nom de l'objet |
| valeur | any | &#8594;  | Nouvelle valeur des sources de données de l'objet de formulaire |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|18 R4|Créé|

</details>
</div>

## Exemple 1 

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** fixe la *valeur* des sources de données courantes pour le ou les objet(s) de formulaire désigné(s) par le paramètre *nomObjet*.<!-- END REF-->

Dans le paramètre *nomObjet*, passez le nom d'un objet de formulaire (une chaine). Vous pouvez définir la valeur de plusieurs objets du formulaire à l'aide du caractère joker (“@”).

Le paramètre *valeur* vous permet de passer une nouvelle valeur (de tout type) pour les sources de données de l'objet formulaire.

**Note** : Si les sources de données sont une expression non assignable, **OBJECT SET VALUE** ne fait rien. Pour plus d'informations, consultez *expressions assignables vs non-assignables* .

## Exemple

Vous souhaitez lire la valeur des sources de données d'un objet formulaire, lire son nom et définir une nouvelle valeur :

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current)) //vérifier la valeur définie 
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10) //trouver le nom de l'objet formulaire et définir la valeur à 50
```

## Voir aussi 

[OBJECT Get value](../commands/object-get-value)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1742 |
| Thread safe | no |


