---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( {* ;} *objet* ; *police* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d'objet (chaîne) Si omis = objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Champ ou Variable (si * omis) |
| police | Text | &#8594;  | Nom de police de caractères |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14|Modifié|
|12|Renommé|
|6|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET FONT.Summary-->**OBJECT SET FONT** affiche *objet* avec la police définie dans le paramètre *police*.<!-- END REF--> Le paramètre *police* doit contenir un nom de police valide.

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

**Note** : Si vous utilisez cette commande sur un objet qui utilisait une feuille de style, la référence à la feuille de style est automatiquement supprimée de l'objet -- même si vous attribuez les mêmes attributs que ceux de la feuille de style.

## Exemple 1 

L'exemple suivant définit la police d'un bouton nommé *bOK*. La police est Arial, une police système sous Windows : 

```4d
 OBJECT SET FONT(bOK;"Arial") // Modification de la police de MonBouton
```

## Exemple 2 

L'exemple suivant définit la police de tous les objets d'un formulaire dont le nom contient "info". 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

## Exemple 3 

L'exemple suivant utilise l'option spéciale *%password*, destinée à la saisie et l'affichage des champs de type “mots de passe”. Lorsque vous passez "%password" dans le paramètre *police* pour un *objet* :

* chaque caractère saisi dans l'objet est représenté par un même symbole,
* les actions "copier" et "couper" sont désactivées dans l'objet.

**Note :** L'option *%password* est utilisable avec les objets de type champ, variable et combo box.

```4d
 OBJECT SET FONT([Utilisateurs]MotPasse;"%password")
```

## Voir aussi 

[Font file](../commands/font-file)  
[FONT LIST](../commands/font-list)  
*Notes de programmation*  
[OBJECT Get font](../commands/object-get-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
[OBJECT SET FONT STYLE](../commands/object-set-font-style)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 164 |
| Thread safe | no |


