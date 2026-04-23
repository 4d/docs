---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* : Object ; *...(attribName* : Text ; *attribValue* : Variable)) : Object<br/>**WP Get attributes** ( *targetObj* : Object ; *attribColl* : Collection ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

<div class="no-index">

| Paramètres  | Type       |                             | Description                                |
| ----------- | ---------- | --------------------------- | ------------------------------------------ |
| targetObj   | Object     | &#8594; | Plage ou élément ou document 4D Write Pro  |
| attribName  | Text       | &#8594; | Nom de l'attribut à récupérer              |
| attribValue | Variable   | &#8592; | Valeur courante de l'attribut              |
| attribColl  | Collection | &#8594; | Collection de noms d'attributs à récupérer |
| Résultat    | Object     | &#8592; | Noms et valeurs des attributs              |

</div>
<!-- END REF-->

## Description

La commande **WP Get attributes**<!--REF #_command_.WP Get attributes.Summary--> renvoie la valeur de n'importe quel attribut de plage, en-tête, corps, pied de page, tableau ou document de 4D Write Pro.<!-- END REF--> Cette commande vous donne accès à tout type d'attribut interne 4D Write Pro : caractère, paragraphe, document, tableau ou image.

Dans *targetObj*, vous pouvez passer:

- une plage, ou
- un élément (en-tête / pied de page / corps / tableau / paragraphe / image ancrée ou en ligne / section / sous-section / feuille de style), ou
- un document 4D Write Pro

Dans *attribName*, passez le nom de l'attribut que vous souhaitez récupérer.

Vous pouvez également passer une collection de noms d'attributs dans *attribColl*, auquel cas la commande renverra un objet contenant les noms d'attributs passés dans *attribColl* ainsi que leurs valeurs correspondantes.

Pour obtenir une liste complète des attributs à passer, ainsi que leur portée et leurs valeurs, veuillez consulter la section [Attributs 4D Write Pro](../4d-write-pro-attributes).

S'il existe différentes valeurs pour le même attribut dans l'élément passé en paramètre, la commande retourne :

- pour les valeurs numériques, wk mixed
- pour un tableau, un tableau vide (taquets de tabulation, couleur si *attribValue* est défini comme tableau), à l'exception de wk text shadow offset pour lequel la valeur du tableau contiendra toujours 2 entrées qui peuvent valoir séparément wk mixed si le décalage horizontal ou vertical (ou les deux) sont mélangés.
- pour les valeurs de type chaîne, une chaîne vide
- pour les valeurs image, une image vide.

**Note** : Si *targetObj* contient une feuille de style de paragraphe et une feuille de style de caractère, le nom de la feuille de style de paragraphe est retourné.

## Exemple 1

Vous voulez obtenir la couleur d'arrière-plan de la zone sélectionnée:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

## Exemple 2

Vous voulez obtenir la taille de la police, la couleurd 'arrière-plan et le style de bordure de la zone sélectionnée en utilisant une collection :

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

## Voir également

[4D Write Pro Attributes](../4d-write-pro-attributes)  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)