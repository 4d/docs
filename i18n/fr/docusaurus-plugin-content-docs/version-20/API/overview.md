---
id: overview
title: A propos des fonctions de classes
---

Cette section décrit les fonctions de classe intégrées de 4D ainsi que les commandes des constructeurs associés. Les propriétés et fonctions des classes 4D sont disponibles via les objets d'instance de classe.

- les fonctions doivent être appelées sur des instances avec l'opérateur `()`. Par exemple, `collection.sort()`.
- les propriétés sont appelées sans parenthèses, par exemple `file.creationTime`. Vous pouvez également utiliser la syntaxe \[], par exemple `file["creationTime"]`.
- les commandes peuvent être appelées indépendamment, avec ou sans paramètres. Par exemple `Folder(fk database folder)`.

## Conventions d'écriture

Les conventions suivantes sont utilisées dans la syntaxe de la fonction :

- les caractères `{ }` (accolades) indiquent des paramètres facultatifs. Par exemple, `.delete( { option : Integer } )` signifie que le paramètre *option* peut être omis lors de l'appel de la fonction.
- la notation `{ ; ...param }` indique un nombre illimité de paramètres. Par exemple, `.concat( value : any { ;...valueN } ) : Collection` signifie qu'un nombre illimité de valeurs de n'importe quel type peut être passé à la fonction.
- le mot-clé `any` est utilisé pour désigner un paramètre de tout type qui peut être stocké dans des attributs (nombre, texte, booléen, date, heure, objet, collection...).

## Voir également

[Classes](../Concepts/classes.md).
