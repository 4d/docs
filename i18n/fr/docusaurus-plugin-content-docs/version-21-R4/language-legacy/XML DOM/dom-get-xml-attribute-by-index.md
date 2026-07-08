---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *refElément* : Text ; *indexAttribut* : Integer ; *nomAttribut* : Variable ; *valeurAttribut* : Variable )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| indexAttribut | Integer | &#8594;  | Numéro d’indice de l’attribut |
| nomAttribut | Variable | &#8592; | Nom de l’attribut |
| valeurAttribut | Variable | &#8592; | Valeur de l’attribut |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->La commande **DOM GET XML ATTRIBUTE BY INDEX** permet de connaître le nom ainsi que la valeur d’un attribut désigné par son numéro d’indice.<!-- END REF-->

Passez dans *refElément* la référence d’un élément XML et dans *indexAttribut* le numéro d’indice de l’attribut dont vous voulez connaître le nom. Le nom est retourné dans le paramètre *nomAttribut* et sa valeur est retournée dans le paramètre *valeurAttribut*. 4D tentera de convertir la valeur obtenue dans le type de la variable passée en paramètre. Si le type de la variable n'est pas défini, la valeur est retournée, par défaut, en type texte.

**Note :** Le numéro d’indice ne correspond pas à l’emplacement de l’attribut dans le fichier XML affiché sous forme de texte. En XML, l’indice d’un attribut indique sa position parmi les attributs classés par ordre alphabétique (en fonction de leur nom). Pour une illustration de ce principe, reportez-vous à l’exemple de la commande [DOM Count XML attributes](../commands/dom-count-xml-attributes).

Si la valeur passée dans *indexAttribut* est supérieure au nombre d’attributs présents dans l’élément XML, une erreur est retournée.

## Exemple 

Reportez-vous à l’exemple de la commande [DOM Count XML attributes](../commands/dom-count-xml-attributes). 

## Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Si une erreur se produit, elle prend la valeur 0.

## Voir aussi 

[DOM GET XML ATTRIBUTE BY NAME](../commands/dom-get-xml-attribute-by-name)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 729 |
| Thread safe | yes |
| Modifie les variables | OK, error |


