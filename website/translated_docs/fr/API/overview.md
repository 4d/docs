---
id: overview
title: Aperçu - API des classes
---

Cette section décrit l'API de classes 4D intégrées ainsi que les commandes associées du constructeur. Les propriétés et fonctions de classe 4D sont disponibles via les objets d'instance de classe.

- functions must be called on instances with the () operator. For example, `collection.sort()`.

- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.

## Conventions d'écriture

Les conventions suivantes sont utilisées dans la syntaxe de la fonction :

- les caractères `{ }` (accolades) indiquent des paramètres facultatifs. Par exemple, `.delete( { option : Integer } )` signifie que le paramètre *option* peut être omis lors de l'appel de la fonction.
- la notation `{ ; ...param }` indique un nombre illimité de paramètres. Par exemple, `.concat( value : any { ;...valueN } ) : Collection` signifie qu'un nombre illimité de valeurs de n'importe quel type peut être passé à la fonction.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).

## Autres ressources

Pour une présentation générale des fondements et concepts du langage 4D, veuillez consulter la section [Concepts du langage 4D](Concepts/about.md).

Pour une description du langage «classique» de 4D, veuillez vous reporter au manuel de *Langage 4D* sur [doc.4d.com](https://doc.4d.com). 



