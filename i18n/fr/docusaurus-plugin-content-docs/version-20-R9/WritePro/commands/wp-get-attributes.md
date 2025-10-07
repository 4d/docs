---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *...attribName* ; *...attribValue* ) : Object<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Paramètres  | Type                                           |                             | Description                               |
| ----------- | ---------------------------------------------- | --------------------------- | ----------------------------------------- |
| targetObj   | Object                                         | &#8594; | Plage ou élément ou document 4D Write Pro |
| attribName  | Text                                           | &#8594; | Name of attribute to get                  |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | Current value of attribute for the target |
| attribColl  | Collection                                     | &#8594; | Collection of attribute names to get      |
| Résultat    | Object                                         | &#8592; | Attribute names and values                |

<!-- END REF-->

## Description

La commande **WP Get attributes**<!--REF #_command_.WP Get attributes.Summary--> renvoie la valeur de n'importe quel attribut de plage, en-tête, corps, pied de page, tableau ou document de 4D Write Pro.<!-- END REF--> Cette commande vous donne accès à tout type d'attribut interne 4D Write Pro : caractère, paragraphe, document, tableau ou image.

In *targetObj*, you can pass:

- une plage, ou
- un élément (en-tête / pied de page / corps / tableau / paragraphe / image ancrée ou en ligne / section / sous-section / feuille de style), ou
- un document 4D Write Pro

In *attribName*, pass the name of the attribute you want to retrieve.

You can also pass a collection of attribute names in *attribColl*, in which case the command will return an object containing the attribute names passed in *attribColl* along with their corresponding values.

For a comprehensive list of attributes to pass, as well as their scope and values, please refer to the [4D Write Pro Attributes](../4d-write-pro-attributes) section.

If there are different values for the same attribute in the element passed as a parameter, the command returns:

- for numerical values, wk mixed
- for an array, an empty array (tab stops, color if *attribValue* is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed.
- for string values, an empty string
- for picture values, an empty picture.

**Note**: If *targetObj* contains a paragraph and a character style sheets, the paragraph style sheet name is returned.

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