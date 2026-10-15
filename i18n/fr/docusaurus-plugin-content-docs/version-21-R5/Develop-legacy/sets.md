---
id: sets
title: Ensembles
slug: /Develop/sets
displayed_sidebar: docs
---


Les ensembles vous offrent un moyen puissant et rapide de manipuler les sélections d'enregistrements. Outre la possibilité de créer des ensembles, de les relier à la sélection courante, ainsi que de stocker, charger et effacer des ensembles, 4D propose trois opérations standard sur les ensembles :

- Intersection
- Union
- Différence.


## Ensembles et sélection courante

Un ensemble est une représentation compacte d'une sélection d'enregistrements. La notion d'ensemble est étroitement liée à celle de sélection courante. Les ensembles sont généralement utilisés aux fins suivantes :

- Sauvegarder puis restaurer ultérieurement une sélection lorsque l'ordre n'a pas d'importance
- Accéder à la sélection qu'un utilisateur a effectuée à l'écran (le `UserSet`)
- Effectuer une opération logique entre des sélections.

La sélection courante est une liste de références qui pointe vers chaque enregistrement actuellement sélectionné. La liste existe en mémoire. Seuls les enregistrements actuellement sélectionnés figurent dans la liste. Une sélection ne contient pas réellement les enregistrements, mais uniquement une liste de références vers les enregistrements. Chaque référence à un enregistrement occupe 4 octets en mémoire. Lorsque vous travaillez sur une table, vous travaillez toujours avec les enregistrements de la sélection courante. Lorsqu'une sélection est triée, seule la liste des références est réorganisée. Il n'y a qu'une seule sélection courante pour chaque table au sein d'un process.

Comme une sélection courante, un ensemble représente une sélection d'enregistrements. Un ensemble le fait en utilisant une représentation très compacte pour chaque enregistrement. Chaque enregistrement est représenté par un bit (un huitième d'octet). Les opérations utilisant des ensembles sont très rapides, car les ordinateurs peuvent effectuer des opérations sur les bits très rapidement. Un ensemble contient un bit pour chaque enregistrement de la table, que l'enregistrement soit inclus ou non dans l'ensemble. En fait, chaque bit est égal à 1 ou 0, selon que l'enregistrement figure ou non dans l'ensemble.

Les ensembles sont très économiques en termes d'espace RAM. La taille d'un ensemble, en octets, est toujours égale au nombre total d'enregistrements de la table divisé par 8. Par exemple, si vous créez un ensemble pour une table contenant 10 000 enregistrements, l'ensemble occupe 1 250 octets, soit environ 1,2 Ko en RAM.

Il peut y avoir de nombreux ensembles pour chaque table. En fait, les ensembles peuvent être sauvegardés sur disque séparément de la base de données. Pour modifier un enregistrement appartenant à un ensemble, vous devez d'abord utiliser l'ensemble comme sélection courante, puis modifier le ou les enregistrements.

Un ensemble n'est jamais dans un ordre trié — les enregistrements sont simplement indiqués comme appartenant ou non à l'ensemble. En revanche, une sélection nommée est dans un ordre trié, mais elle nécessite davantage de mémoire dans la plupart des cas. Pour plus d'informations sur les sélections nommées, reportez-vous à la section Sélections nommées.

Un ensemble « se souvient » de l'enregistrement qui était l'enregistrement courant au moment de la création de l'ensemble. Le tableau suivant compare les concepts de la sélection courante et des ensembles :

|Comparaison|Sélection courante|Ensembles|
|---|---|---|
|Nombre par table|1|0 à plusieurs|
|Triable|Oui|Non|
|Peut être sauvegardé sur disque|Non|Oui|
|RAM par enregistrement (en octets)|Nombre d'enregistrements sélectionnés * 4|Nombre total d'enregistrements/8|
|Combinable|	Non|	Oui|
|Contient l'enregistrement courant|	Oui|	Oui, tel qu'au moment de la création de l'ensemble|

Lorsque vous créez un ensemble, il appartient à la table à partir de laquelle vous l'avez créé. Les opérations sur les ensembles ne peuvent être effectuées qu'entre des ensembles appartenant à la même table.

Les ensembles sont indépendants des données. Cela signifie qu'après des modifications apportées à un fichier, un ensemble peut ne plus être exact. De nombreuses opérations peuvent rendre un ensemble inexact. Par exemple, si vous créez un ensemble de toutes les personnes de New York, puis que vous modifiez les données de l'un de ces enregistrements en « Boston », l'ensemble ne changera pas, car l'ensemble n'est qu'une représentation d'une sélection d'enregistrements. La suppression d'enregistrements et leur remplacement par de nouveaux modifient également un ensemble, tout comme le compactage des données. L'exactitude des ensembles ne peut être garantie que tant que les données de la sélection d'origine n'ont pas été modifiées.

## Ensembles process et interprocess

Vous pouvez disposer des trois types d'ensembles suivants :

- **Ensembles process** : Un ensemble process ne peut être accédé que par le process dans lequel il a été créé. `LockedSet` est un ensemble process. Les ensembles process sont effacés dès que la méthode process se termine. Les ensembles process ne nécessitent aucun préfixe particulier dans leur nom.
- **Ensembles interprocess** : Un ensemble est un ensemble interprocess si le nom de l'ensemble est précédé des symboles (<>) — un signe « inférieur à » suivi d'un signe « supérieur à ». Un ensemble interprocess est « visible » par tous les process de la base de données.
En mode client/serveur, un ensemble interprocess est « visible » par les process de la machine où il a été créé (client ou serveur).
Le nom d'un ensemble interprocess doit être unique dans la base de données.
- **Ensembles locaux/ensembles client** : Les ensembles locaux/client sont destinés à être utilisés en mode client/serveur. Le nom d'un ensemble local/client est toujours précédé du signe dollar ($) -- sauf pour l'ensemble système UserSet. Contrairement aux autres types d'ensembles, un ensemble local/client est stocké sur la machine cliente.

:::note Notes

- La taille maximale d'un nom d'ensemble est de 255 caractères (hors symboles <> et $).
- Pour plus d'informations sur l'utilisation des ensembles en mode client/serveur, veuillez vous reporter à 4D Server, Ensembles et sélections nommées.

:::


## Visibilité des ensembles

Le tableau suivant indique les principes concernant la visibilité des ensembles selon leur portée et l'endroit où ils ont été créés :

 

||Process client|Autres process sur le même client|Autres clients|Process serveur|Autres process sur le serveur|
|---|---|---|---|---|---|
|Création dans un process client	||||||
|$test|X	|||||
|test	| X||| X(Trigger)	||
|<>test	| X|X	||||
|Création dans un process serveur||||||
|$test|||| X||
|test	||||X||
|<>test||||X| X|


## Ensembles et transactions

Un ensemble peut être créé à l'intérieur d'une [transaction](./transactions.md). Il est possible de créer un ensemble des enregistrements créés à l'intérieur d'une transaction et un ensemble des enregistrements créés ou modifiés en dehors d'une transaction. Lorsque la transaction se termine, l'ensemble créé pendant la transaction doit être effacé, car il peut ne pas être une représentation exacte des enregistrements, en particulier si la transaction a été annulée.

## Exemple

L'exemple suivant supprime les enregistrements en double d'une table contenant des informations sur des personnes. Une boucle For...End for parcourt tous les enregistrements en comparant l'enregistrement courant à l'enregistrement précédent. Si le nom, l'adresse et le code postal sont identiques, l'enregistrement est ajouté à un ensemble. À la fin de la boucle, l'ensemble est défini comme sélection courante et l'(ancienne) sélection courante est supprimée :

```4d
 CREATE EMPTY SET([People];"Duplicates")
  // Crée un ensemble vide pour les enregistrements en double
 ALL RECORDS([People])
  // Sélectionne tous les enregistrements
  // Trie les enregistrements par code postal, adresse et nom afin
  // que les doublons soient les uns à côté des autres
 ORDER BY([People];[People]ZIP;>;[People]Address;>;[People]Name;>)
  // Initialise les variables qui contiennent les champs de l'enregistrement précédent
 $Name:=[People]Name
 $Address:=[People]Address
 $ZIP:=[People]ZIP
  // Va au deuxième enregistrement pour le comparer au premier
 NEXT RECORD([People])
 For($i;2;Records in table([People]))
  // Boucle à travers les enregistrements à partir de 2
  // Si le nom, l'adresse et le code postal sont identiques à ceux de
  // l'enregistrement précédent, alors il s'agit d'un enregistrement en double.
    If(([People]Name=$Name) & ([People]Address=$Address) & ([People]ZIP=$ZIP))
  // Ajoute l'enregistrement courant (le doublon) à l'ensemble
       ADD TO SET([People];"Duplicates")
    Else
  // Sauvegarde le nom, l'adresse et le code postal de cet enregistrement pour comparaison avec le suivant
       $Name:=[People]Name
       $Address:=[People]Address
       $ZIP:=[People]ZIP
    End if
  // Passe à l'enregistrement suivant
    NEXT RECORD([People])
 End for
  // Utilise les enregistrements en double qui ont été trouvés
 USE SET("Duplicates")
  // Supprime les enregistrements en double
 DELETE SELECTION([People])
  // Retire l'ensemble de la mémoire
 CLEAR SET("Duplicates")
```

Au lieu de supprimer immédiatement les enregistrements à la fin de la méthode, vous pourriez les afficher à l'écran ou les imprimer, afin de pouvoir effectuer une comparaison plus détaillée.


## L'ensemble système UserSet

4D gère un ensemble système nommé `UserSet`, qui stocke automatiquement la sélection la plus récente d'enregistrements mis en surbrillance à l'écran par l'utilisateur. Ainsi, vous pouvez afficher un groupe d'enregistrements avec [`MODIFY SELECTION`](../commands/modify-selection) ou [`DISPLAY SELECTION`](../commands/display-selection), demander à l'utilisateur d'effectuer une sélection parmi ces enregistrements et transformer le résultat de cette sélection manuelle en une sélection ou en un ensemble que vous nommez.

:::info 4D Server

Bien que son nom ne commence pas par le caractère « $ », l'ensemble système `UserSet` est un ensemble client. Ainsi, lorsque vous utilisez [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) et [`DIFFERENCE`](../commands/difference), veillez à ne comparer `UserSet` qu'à des ensembles client.

:::

Il n'y a qu'un seul `UserSet` pour un [process](../Develop/processes.md). Chaque table ne dispose pas de son propre `UserSet`. `UserSet` devient « détenu » par une table lorsqu'une sélection d'enregistrements est affichée pour cette table.

4D gère l'ensemble `UserSet` pour les formulaires liste affichés en mode Développement ou à l'aide des commandes [`MODIFY SELECTION`](../commands/modify-selection) ou [`DISPLAY SELECTION`](../commands/display-selection). Cependant, ce mécanisme n'est pas actif pour les [sous-formulaires](../FormObjects/subform_overview.md).

La méthode suivante illustre comment vous pouvez afficher des enregistrements, permettre à l'utilisateur d'en sélectionner certains, puis utiliser UserSet pour afficher les enregistrements sélectionnés :

```4d
  // Affiche tous les enregistrements et permet à l'utilisateur d'en sélectionner un nombre quelconque.
  // Puis affiche cette sélection en utilisant UserSet pour modifier la sélection courante.
 FORM SET OUTPUT([People];"Display") // Définit le formulaire de sortie
 ALL RECORDS([People]) // Sélectionne toutes les personnes
 ALERT("Appuyez sur Ctrl ou Commande et cliquez pour sélectionner les personnes souhaitées.")
 DISPLAY SELECTION([People]) // Affiche les personnes
 USE SET("UserSet") // Utilise les personnes qui ont été sélectionnées
 ALERT("Vous avez choisi les personnes suivantes.")
 DISPLAY SELECTION([People]) // Affiche les personnes sélectionnées
```

## L'ensemble système LockedSet

Les commandes [`APPLY TO SELECTION`](../commands/apply-to-selection), [`DELETE SELECTION`](../commands/delete-selection), [`ARRAY TO SELECTION`](../commands/array-to-selection) et [`JSON TO SELECTION`](../commands/json-to-selection) créent un ensemble nommé `LockedSet` lorsqu'elles sont utilisées dans un environnement multi-process.

Les commandes de recherche créent également un ensemble système `LockedSet` lorsqu'elles rencontrent des enregistrements verrouillés dans le contexte « recherche et verrouillage » (voir la commande [`SET QUERY AND LOCK`](../commands/set-query-and-lock)).

`LockedSet` indique quels enregistrements ont été verrouillés lors de l'exécution de la commande.
