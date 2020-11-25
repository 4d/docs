---
id: null-undefined
title: Null et Indefinie
---

Null et Undefined sont des types de données qui gèrent les cas où la valeur d'une expression n'est pas connue.

## Null

Null est un type de données particulier avec une seule valeur possible : **null**. Cette valeur est retournée par une expression qui ne contient aucune valeur.

Dans le langage de 4D et pour les attributs des champs objets, les valeurs null sont gérées via la commande `Null`. Cette commande peut être utilisée avec les expressions suivantes pour fixer ou comparer la valeur null :

- attributs d'objets
- éléments de collections
- variables de type objet, collection, pointeur, image ou variant.

## Indéfini

Indéfinie n'est pas véritablement un type de données. Une variable dite "indéfinie" est une variable n'ayant pas encore été définie. Une fonction utilisateur (c'est-à-dire une méthode projet qui retourne une valeur) peut retourner une valeur indéfinie si, à l'intérieur de la méthode, le résultat de la fonction ($0) est assigné à une expression indéfinie (une expression issue d'un calcul effectué avec au moins une variable indéfinie). Un champ ne peut pas être indéfini (la commande `Indefinie` retourne toujours Faux pour un champ). Une variable variant porte la valeur par défaut **indéfini**.

## Exemples

Cet exemple compare les différents résultats de la commande `Indefinie` et de la commande `Null` appliquées aux propriétés d'objets, en fonction du contexte :

```4d
C_OBJECT($vEmp)
$vEmp:=New object
$vEmp.name:="Smith"
$vEmp.children:=Null

$undefined:=Undefined($vEmp.name) // Faux
$null:=($vEmp.name=Null) //Faux

$undefined:=Undefined($vEmp.children) // Faux
$null:=($vEmp.children=Null) //Vrai

$undefined:=Undefined($vEmp.parent) // Vrai
$null:=($vEmp.parent=Null) //Vrai
```
