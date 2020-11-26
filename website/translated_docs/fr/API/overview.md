---
id: overview
title: Aperçu - API des classes
---

Cette section décrit l'API de classes 4D intégrées ainsi que les commandes associées du constructeur. Les propriétés et fonctions de classe 4D sont disponibles via les objets d'instance de classe.

- les fonctions doivent être appelées sur des instances avec l'opérateur () ou la syntaxe \ []. Par exemple, `collection.sort()` ou `collection["sort"]`.

- les propriétés sont appelées sans parenthèses, par exemple `file.creationTime`.

## Conventions d'écriture

Les conventions suivantes sont utilisées dans la syntaxe de la fonction :

- les caractères `{ }` (accolades) indiquent des paramètres facultatifs. Par exemple, `.delete( { option : Integer } )` signifie que le paramètre *option* peut être omis lors de l'appel de la fonction.
- la notation `{ ; ...param }` indique un nombre illimité de paramètres. Par exemple, `.concat( value : any { ;...valueN } ) : Collection` signifie qu'un nombre illimité de valeurs de n'importe quel type peut être passé à la fonction.
- le type de données `any` est utilisé pour désigner un paramètre de tout type qui peut être stocké dans des attributs (nombre, texte, booléen, date, heure, objet, collection...).

## Autres ressources

For an overall presentation of the 4D Language basics and concepts, please go to the [4D Language Concepts](Concepts/about.md) section.

For a description of the 4D "classic" language, please go to the *4D Language Reference* on [doc.4d.com](https://doc.4d.com). 



