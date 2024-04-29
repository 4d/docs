---
id: overview
title: A propos des fonctions de classes
---

Cette section décrit les fonctions de classe intégrées de 4D ainsi que les commandes des constructeurs associés. Les propriétés et fonctions des classes 4D sont disponibles via les objets d'instance de classe.

- functions must be called on instances with the `()` operator. For example, `collection.sort()`.
- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.
- les commandes peuvent être appelées indépendamment, avec ou sans paramètres. For example `Folder(fk database folder)`.

## Conventions d'écriture

Les conventions suivantes sont utilisées dans la syntaxe de la fonction :

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the _option_ parameter may be omitted when calling the function.
- the `{ ; ...param }` notation indicates an unlimited number of parameters. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).
