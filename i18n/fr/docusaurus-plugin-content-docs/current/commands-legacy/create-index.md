---
id: create-index
title: CREATE INDEX
slug: /commands/create-index
displayed_sidebar: docs
---

<!--REF #_command_.CREATE INDEX.Syntax-->**CREATE INDEX** ( *laTable* ; *tabChamps* ; *typeIndex* ; *nomIndex* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE INDEX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle créer un index |
| tabChamps | Pointer array | &#8594;  | Pointeur(s) vers le(s) champ(s) à indexer |
| typeIndex | Integer | &#8594;  | Type d’index à créer : -1 = Mots-clés, 0 = par défaut, 1 = B-Tree standard, 3 = BTree cluster |
| nomIndex | Text | &#8594;  | Nom de l'index à créer |
| * | Opérateur | &#8594;  | Si passé = indexation asynchrone |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE INDEX.Summary-->La commande **CREATE INDEX** permet de créer :

* un index standard sur un ou plusieurs champs (index composite) ou
* un index de mots-clés sur un champ.<!-- END REF-->

L’index est créé pour la table *laTable* en utilisant le ou les champ(s) désigné(s) par le tableau de pointeurs *tabChamps*. Ce tableau contient une seule ligne si vous souhaitez créer un index simple et deux ou plusieurs lignes si vous souhaitez créer un index composite (sauf index de mots-clés). Dans le cas d’index composites, l’ordre des champs dans le tableau est important lors de la construction de l’index.

Le paramètre *typeIndex* vous permet de définir le type d’index à créer. Vous pouvez passer une des constantes suivantes, placées dans le thème *Type index* :

| Constante            | Type        | Valeur | Comment                                                                                                                                                                                            |
| -------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster BTree index  | Entier long | 3      | Index de type B-Tree utilisant des clusters. Ce type d’index est optimisé lorsque l’index contient peu de clés, c’est-à-dire lorsque les mêmes valeurs reviennent souvent dans les données.        |
| Default index type   | Entier long | 0      | 4D définit le type d’index (hors index de mots-clés) le plus optimisé en fonction du contenu du champ.                                                                                             |
| Keywords index       | Entier long | \-1    | Permet l’indexation mot à mot du contenu du champ. Ce type d’index est utilisable avec les champs de type Texte, Alpha et Image. Attention, les index de mots-clés ne peuvent pas être composites. |
| Standard BTree index | Entier long | 1      | Index de type B-Tree classique. Ce type d’index polyvalent est utilisé dans les versions précédentes de 4D                                                                                         |

**Note :** Un index B-Tree associé à un champ de type texte stocke au maximum les 1024 premiers caractères du champ. Par conséquent dans ce contexte, les recherches sur des chaînes contenant plus de 1024 caractères ne pourront aboutir. 

Passez dans *nomIndex* le nom de l’index à créer. Nommer les index est nécessaire si plusieurs index de types différents peuvent être associés à un même champ et si vous souhaitez pouvoir les supprimer individuellement à l'aide de la commande [DELETE INDEX](delete-index.md). Si l’index *nomIndex* existe déjà, la commande ne fait rien.

Le paramètre facultatif *\**, lorsqu’il est passé, permet d’effectuer l’indexation en mode asynchrone. Dans ce mode, la méthode d’origine poursuit son exécution après l’appel de la commande, que l’indexation soit terminée ou non.

Si la commande **CREATE INDEX** rencontre des enregistrements verrouillés, elle ne les indexe pas et attend qu’ils soient libérés. 

Si une erreur se produit durant l’exécution de la commande (champ non indexable, tentative de création d’index de mots-clés sur plusieurs champs, etc.), une erreur est générée. Cette erreur peut être interceptée à l’aide d’une méthode d’appel sur erreur.

#### Note pour le déploiement 

Étant donné que cette commande modifie la structure de la base de données, elle ne peut pas être utilisée dans une application packagée en lecture seule (fichier .4dc installé dans le dossier Program Files ou fichier .4dz).

#### Exemple 1 

Création de deux index standard sur les champs “Nom” et “Téléphone” de la table \[Clients\] :

```4d
 ARRAY POINTER(tabPtrChp;1)
 tabPtrChp{1}:=->[Clients]Nom
 CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"IdxCltNom")
 tabPtrChp{1}:=->[Clients]Téléphone
 CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"IdxCltTel")
```

#### Exemple 2 

Création d’un index de mots-clés sur le champ “Observations” de la table \[Clients\] :

```4d
 ARRAY POINTER(tabPtrChp;1)
 tabPtrChp{1}:=->[Clients]Observations
 CREATE INDEX([Clients];tabPtrChp;Keywords Index;"IdxCltObs")
```

#### Exemple 3 

Création d’un index composite sur les champs “CodePostal” et “Ville” de la table \[Clients\] :

```4d
 ARRAY POINTER(tabPtrChp;2)
 tabPtrChp{1}:=->[Clients]CodePostal
 tabPtrChp{2}:=->[Clients]Ville
 CREATE INDEX([Clients];tabPtrChp;Standard BTree Index;"CPVille")
```

#### Voir aussi 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  
[SET INDEX](set-index.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 966 |
| Thread safe | &check; |
| Interdite sur le serveur ||


