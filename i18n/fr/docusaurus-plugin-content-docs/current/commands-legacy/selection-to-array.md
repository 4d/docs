---
id: selection-to-array
title: SELECTION TO ARRAY
slug: /commands/selection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION TO ARRAY.Syntax-->**SELECTION TO ARRAY** {( leChamp | laTable ; *tableau* {; *leChamp* ; *tableau* {; *leChamp2* ; *tableau2* ; ... ; *leChampN* ; *tableauN*}}{; *})}<!-- END REF-->
<!--REF #_command_.SELECTION TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leChamp &#124; laTable | Champ, Table | &#8594;  | Champ à récupérer dans le tableau ou Table dont les numéros d'enregistrements sont à récupérer dans le tableau |
| tableau | Array | &#8592; | Tableau recevant les valeurs des champs ou les numéros d'enregistrements |
| leField | Field | &#8594;  | Champ à récupérer dans le tableau |
| tableau | Array | &#8592; | Tableau recevant les valeurs du champ |
| * | Opérateur | &#8594;  | Attente d’exécution |

<!-- END REF-->

#### Description 

<!--REF #_command_.SELECTION TO ARRAY.Summary-->La commande **SELECTION TO ARRAY** crée un ou plusieurs tableau(x) et y copie les valeurs des champ(s) ou les numéros d'enregistrement(s) de la sélection courante.<!-- END REF-->s'applique à la sélection courante de la table désignée par le premier paramètre (nom de table ou nom de champ). La commande peut réaliser les opérations suivantes :

* Charger les valeurs d'un ou plusieurs champs,
* Charger les numéros des enregistrements de la table, à l'aide de la syntaxe *\[table\];tableau*
* Charger des valeurs de champs liés, s'il existe un lien automatique de N vers 1 entre les tables, ou si vous avez préalablement appelé la commande [SET AUTOMATIC RELATIONS](set-automatic-relations.md) pour rendre automatiques les liens manuels N vers 1 (dans les deux cas, les valeurs peuvent être chargées à travers plusieurs niveaux de liens N vers 1 entre les tables).

Chaque tableau est typé en fonction du type de champ. 

A noter toutefois que **SELECTION TO ARRAY** appliquée à un champ de type Heure créera un tableau de type Heure uniquement si le tableau n’a pas déjà été défini dans un autre type. Par exemple dans le contexte ci-dessous, le tableau *monTab* conservera le type Entier long :  

```4d
 ARRAY LONGINT(monTab;0)
 SELECTION TO ARRAY([maTable]monChpHeure;monTab)
```

Si vous chargez les numéros des enregistrements, ils sont copiés dans un tableau de type Entier long. 

Si vous passez un *\** en dernier paramètre, 4D n’exécute pas immédiatement la ligne d’instruction correspondante mais la stocke en mémoire ; vous pouvez ainsi empiler plusieurs lignes se terminant par un *\**. L’ensemble des lignes en attente sera exécuté par une instruction **SELECTION TO ARRAY** finale sans paramètre *\**. A cette fin, la commande peut être appelée sans aucun paramètre. Dans ce cas, les types des tableaux sont vérifiés au moment de l’exécution de la ligne finale (ne contenant pas de *\**).   
A l’image de la commande [QUERY](query.md), ce principe vous permet de scinder une instruction complexe en un ensemble de lignes, plus lisibles et plus faciles à maintenir. Il est également possible d’insérer des instructions intermédiaires ou de construire un tableau dans une boucle (cf. exemple 2 de la commande [ARRAY TO SELECTION](array-to-selection.md)). 

**4D Server :** La commande **SELECTION TO ARRAY** est optimisée pour 4D Server. Chaque tableau est créé sur le serveur puis envoyé en totalité sur le poste client.

**ATTENTION :** **SELECTION TO ARRAY** peut créer des tableaux de taille importante, en fonction de la taille de la sélection courante, ainsi que du type et de la taille des données à charger. Comme les tableaux résident en mémoire, il peut être utile de tester la taille des tableaux créés après l'exécution de la commande, ou d'utiliser une méthode projet d'appel sur erreur. 

**Note :** Après un appel à **SELECTION TO ARRAY**, la sélection courante et l'enregistrement courant ne sont pas modifiés, mais l'enregistrement courant n'est plus chargé. Utilisez la commande [LOAD RECORD](load-record.md) après un **SELECTION TO ARRAY** si vous souhaitez utiliser les valeurs des champs de l'enregistrement courant. 

#### Exemple 1 

Dans l'exemple suivant, la table *\[Personnes\]* dispose d'un lien automatique vers la table *\[Sociétés\]*. Les deux tableaux *tabNoms* et *tabAdresseSociétés* sont dimensionnés en fonction du nombre d'enregistrements dans la sélection de la table *\[Personnes\]* et contiennent des informations venant des deux tables :

```4d
 SELECTION TO ARRAY([Personnes]Nom;tabNoms;[Sociétés]Adresse;tabAdresseSociétés)
```

#### Exemple 2 

L'exemple ci-dessous retourne les numéros d'enregistrements de la table *\[Clients\]* dans le tableau *tabNumEnr* et les valeurs du champ *\[Clients\]Noms* dans le tableau *tabNoms* :

```4d
 SELECTION TO ARRAY([Clients];tabNumEnr;[Clients]Noms;tabNoms)
```

Le même exemple peut être écrit :

```4d
 SELECTION TO ARRAY([Clients];tabNumEnr;*)
 SELECTION TO ARRAY([Clients]Noms;tabNoms;*)
 SELECTION TO ARRAY
```

#### Voir aussi 

[ARRAY TO SELECTION](array-to-selection.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 260 |
| Thread safe | &check; |


