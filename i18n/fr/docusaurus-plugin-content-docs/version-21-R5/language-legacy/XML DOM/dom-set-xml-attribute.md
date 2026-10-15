---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
slug: /commands/dom-set-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->**DOM SET XML ATTRIBUTE** ( *refElément* : Text ; *nomAttribut* : Text ; *valeurAttribut* : any {; ...(*nomAttribut* : Text ; *valeurAttribut* : any)} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ATTRIBUTE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| nomAttribut | Text | &#8594;  | Attribut à définir |
| valeurAttribut | any | &#8594;  | Nouvelle valeur d’attribut |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM SET XML ATTRIBUTE.Summary-->La commande **DOM SET XML ATTRIBUTE** permet d’ajouter un ou plusieurs attribut(s) à l’élément XML dont la référence est passée dans le paramètre *refElément*.<!-- END REF--> Elle permet également de définir la valeur de chaque attribut défini.

Passez dans les paramètres *nomAttribut* et *valeurAttribut* respectivement l’attribut à écrire et sa valeur (sous forme de variables, champs ou valeurs littérales). Vous pouvez passer autant de couples attribut/valeur que vous voulez.   
Le paramètre *valeurAttribut* peut être de type texte ou d'un autre type (booléen, entier, réel, heure ou date). Si vous passez une valeur d'un type autre que texte, 4D se charge de la conversion en texte, selon les principes suivants :

| **Type** | **Exemple de valeur convertie**                  |
| -------- | ------------------------------------------------ |
| Booléen  | "true" ou "false" (non traduit)                  |
| Entier   | "123456"                                         |
| Réel     | "12.34" (le séparateur décimal est toujours ".") |
| Heure    | "5233" (nombre de secondes)                      |
| Date     | "2006-12-04T00:00:00Z" (norme RFC 3339)          |

## Exemple 

Soit la source XML suivante :

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

Si le code suivant est exécuté :

```4d
 vAttrName:="Font"
 vAttrVal:="Verdana"
 DOM SET XML ATTRIBUTE(vRefElem;vAttrName;vAttrVal)
```

Nous obtenons :

```XML
<Book>
   <Title Font=Verdana>The Best Seller</Title>
</Book>
```

## Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée.

## Voir aussi 

[DOM GET XML ATTRIBUTE BY INDEX](../commands/dom-get-xml-attribute-by-index)  
[DOM GET XML ATTRIBUTE BY NAME](../commands/dom-get-xml-attribute-by-name)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 866 |
| Thread safe | yes |
| Modifie les variables | OK |


