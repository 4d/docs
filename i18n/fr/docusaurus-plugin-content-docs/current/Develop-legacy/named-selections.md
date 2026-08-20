---
id: named-selections
title: Sélections temporaires
slug: /Develop/named-selections
displayed_sidebar: docs
---



## Vue d'ensemble

Les sélections temporaires offrent un moyen simple de manipuler plusieurs sélections simultanément. Une sélection temporaire est une liste ordonnée d'enregistrements d'une table dans un process. Cette liste ordonnée peut recevoir un nom et être conservée en mémoire. Les sélections temporaires constituent un moyen simple de conserver en mémoire l'ordre de la sélection ainsi que l'enregistrement courant de la sélection.

Les commandes suivantes vous permettent de travailler avec les sélections temporaires :

- [`COPY NAMED SELECTION`](../commands/copy-named-selection)
- [`CUT NAMED SELECTION`](../commands/cut-named-selection)
- [`USE NAMED SELECTION`](../commands/use-named-selection)
- [`CLEAR NAMED SELECTION`](../commands/clear-named-selection)
- [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array)


Les sélections temporaires sont créées avec les commandes [`COPY NAMED SELECTION`](../commands/copy-named-selection), [`CUT NAMED SELECTION`](../commands/cut-named-selection) et [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array). Les sélections temporaires sont généralement utilisées pour travailler sur une ou plusieurs sélections, ainsi que pour sauvegarder puis restaurer ultérieurement une sélection ordonnée. Il peut y avoir de nombreuses sélections temporaires pour chaque table dans un process. Pour réutiliser une sélection temporaire comme sélection courante, appelez [`USE NAMED SELECTION`](../commands/use-named-selection). Lorsque vous avez terminé avec une sélection temporaire, utilisez [`CLEAR NAMED SELECTION`](../commands/clear-named-selection).

:::note

La combinaison de l'instruction `SET QUERY DESTINATION(Into named selection;namedselection)` avec une commande de recherche (par exemple [`QUERY`](../commands/query)) peut également être utilisée pour créer une sélection temporaire. Reportez-vous à la description de la commande [`SET QUERY DESTINATION`](../commands/set-query-destination).

:::

Les sélections temporaires peuvent avoir une portée locale, process ou interprocess.

Une sélection temporaire est locale lorsque son nom est précédé d'un signe dollar. Lorsque son nom n'est précédé d'aucun symbole, il s'agit d'une sélection temporaire process, et il s'agit d'une sélection temporaire interprocess si son nom est précédé des symboles (<>) — un signe « inférieur à » suivi d'un signe « supérieur à ».

La portée d'une sélection temporaire interprocess est identique à celle d'une variable interprocess (*obsolète*). Une sélection temporaire interprocess est accessible depuis n'importe quel process. Avec 4D en mode distant et 4D Server, une sélection temporaire interprocess n'est disponible que pour les process du client qui l'a créée. Une sélection temporaire interprocess n'est pas disponible pour les autres machines clientes.
Une sélection temporaire process n'est disponible qu'au sein du process dans lequel elle a été créée ainsi que sur le serveur.
Une sélection temporaire locale est définie pour le process qui l'a créée et n'est pas visible sur le serveur.

:::note

La création d'une sélection temporaire nécessite un accès à la sélection de la table. Comme les sélections sont conservées sur le serveur et qu'un process local n'a pas accès aux données du serveur, n'utilisez pas de sélections temporaires au sein des process locaux.

:::

## Visibilité des sélections temporaires

Le tableau suivant indique les principes concernant la visibilité des sélections temporaires selon leur portée et l'endroit où elles ont été créées :


||Process client|Autres process sur le même client|Autres clients|Process serveur|Autres process sur le serveur|
|---|---|---|---|---|---|
|Création dans un process client|||||| 	 
|$test|X|||||
|test|X|||X(Trigger)	 ||
|<>test| X| X	||||
|Création dans un process serveur|||||| 	 	 	 
|$test||||X||
|test|||| X	|| 
|<>test	|||| X|X|


### sélections temporaires et ensembles

Les différences entre les [ensembles](./sets.md) et les sélections temporaires sont les suivantes :

- Une sélection temporaire est une liste ordonnée d'enregistrements ; un ensemble ne l'est pas.
- Les ensembles sont très économes en mémoire, car ils ne nécessitent qu'un bit pour chaque enregistrement du fichier. Les sélections temporaires nécessitent 4 octets pour chaque enregistrement de la sélection.
- Contrairement aux ensembles, les sélections temporaires ne peuvent pas être sauvegardées sur disque.
- Les ensembles disposent des opérations standard [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) et [`DIFFERENCE`](../commands/difference) ; les sélections temporaires ne peuvent pas être combinées avec d'autres sélections temporaires.


Les similitudes entre les sélections temporaires et les ensembles sont les suivantes :

- Comme un ensemble, une sélection temporaire existe en mémoire.
- Une sélection temporaire et un ensemble stockent des références vers un enregistrement. Si des enregistrements sont modifiés ou supprimés, la sélection temporaire ou l'ensemble peut devenir invalide.
- Comme un ensemble, une sélection temporaire « se souvient » de l'enregistrement courant tel qu'il était au moment de la création de la sélection temporaire.
