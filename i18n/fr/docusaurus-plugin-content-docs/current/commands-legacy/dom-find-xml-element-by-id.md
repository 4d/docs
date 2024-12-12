---
id: dom-find-xml-element-by-id
title: DOM Find XML element by ID
slug: /commands/dom-find-xml-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element by ID.Syntax-->**DOM Find XML element by ID** ( *refElément* ; *id* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element by ID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| id | Text | &#8594;  | Valeur de l’attribut ID de l’élément à chercher |
| Résultat | Text | &#8592; | Référence de l’élément trouvé (le cas échéant) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Find XML element by ID.Summary-->La commande **DOM Find XML element by ID** vous permet de rechercher, à l'intérieur d'un document XML, l'élément dont l'attribut id est égal à la valeur passée dans le paramètre *id*.<!-- END REF-->

Passez dans *refElément* la référence d'un élément du document XML dans lequel vous souhaitez effectuer la recherche. Vous pouvez passer la référence de l'élément racine ou de tout autre élément, la recherche ne tient pas compte de la position de *refElément* et s'effectue toujours dans la totalité du document. 

La commande retourne en résultat la référence XML de l’élément trouvé.

**Attention :** En XML, l’attribut id permet d’associer un identifiant unique à chaque élément d'un document. La valeur de l’attribut id doit être un nom XML valide et doit être unique dans le document XML, tous éléments confondus (contrainte de validité). Le bon fonctionnement de la commande **DOM Find XML element by ID** requiert que cette contrainte soit respectée, sinon le résultat sera aléatoire (la commande retournera la référence du premier élément trouvé dans le document).

#### Voir aussi 

[DOM Find XML element](dom-find-xml-element.md)  