---
id: set-index
title: SET INDEX
slug: /commands/set-index
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX.Syntax-->**SET INDEX** ( *leChamp* ; *index* {; *} )<!-- END REF-->
<!--REF #_command_.SET INDEX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ duquel créer ou supprimer l’index |
| index | Boolean, Integer | &#8594;  | • Vrai=Créer l’index, Faux=Supprimer l’index, ou• Créer un index de type : -1=mots-clés, 0=par défaut, 1=B-Tree standard, 3=B-Tree cluster |
| * | Operator |  &#8594;  | Indexation asynchrone si * est passé |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.SET INDEX.Summary-->Bien que **SET INDEX** soit une ancienne commande, elle reste entièrement prise en charge et peut être conservée dans votre application -- il n'est pas nécessaire de réécrire le code existant.<!-- END REF--> Toutefois, il est désormais préférable d'utiliser les commandes [CREATE INDEX](create-index.md) et [DELETE INDEX](delete-index.md) pour gérer les index car elles ont des fonctionnalités plus étendues. 

#### Description 

La commande **SET INDEX** admet deux syntaxes :

* Si vous passez un booléen dans le paramètre *index*, la commande crée ou supprime l'index du champ que vous avez passé dans *leChamp*.
* Si vous passez un entier dans le paramètre *index*, la commande crée un index du type spécifié.

**index = booléen**  
Pour indexer le champ, passez Vrai dans *index*. La commande crée un index du type par défaut. Si l'index existe déjà, la commande ne fait rien.   
Si vous passez Faux dans *index*, la commande supprimera tous les index standard (c'est-à-dire, non composites et non mots-clés) associés au champ. S'il n'existe pas d'index, la commande ne fait rien.

**index = entier**  
Dans ce cas, la commande crée un index du type spécifié pour *leChamp*. Vous pouvez passer une des constantes suivantes, placées dans le thème “*Type index*” :

| Constante            | Type        | Valeur | Comment                                                                                                                                                                                          |
| -------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cluster BTree Index  | Entier long | 3      | Index de type B-Tree utilisant des clusters. Ce type d’index est optimisé lorsque l’index contient peu de clés, c’est-à-dire lorsque les mêmes valeurs reviennent souvent dans les données.      |
| Default Index Type   | Entier long | 0      | 4D définit le type d’index (hors index de mots-clés) le plus optimisé en fonction du contenu du champ.                                                                                           |
| Keywords Index       | Entier long | \-1    | Permet l’indexation mot à mot du contenu du champ. Ce type d’index n’est utilisable qu’avec les champs de type Texte ou Alpha. Attention, les index de mots-clés ne peuvent pas être composites. |
| Standard BTree Index | Entier long | 1      | Index de type B-Tree classique. Ce type d’index polyvalent est utilisé dans les versions précédentes de 4D                                                                                       |

**Note :** Un index B-Tree associé à un champ de type texte stocke au maximum les 1024 premiers caractères du champ. Par conséquent dans ce contexte, les recherches sur des chaînes contenant plus de 1024 caractères ne pourront aboutir.

**SET INDEX** n'indexera pas les enregistrements verrouillés ; la commande attendra que les enregistrements soient libérés.

Le paramètre optionnel *\** indique une indexation asynchrone (simultanée). Une indexation asynchrone permet à la méthode appelante de poursuivre son exécution immédiatement après l'appel, que l'indexation soit terminée ou non. Cependant, l'exécution sera stoppée si une commande requiert l'index.

**Notes :**

* Les index créés par cette commande ne portent pas de nom. Ils ne pourront pas être supprimés par la commande [DELETE INDEX](delete-index.md) via la syntaxe basée sur le nom.
* Cette commande ne permet pas de créer ou de supprimer des index composites.
* Cette commande ne permet pas de supprimer un index de mots-clés créé par la commande [CREATE INDEX](create-index.md).

#### Note pour le déploiement 

Étant donné que cette commande modifie la structure de la base de données, elle ne peut pas être utilisée dans une application packagée en lecture seule (fichier .4dc installé dans le dossier Program Files ou fichier .4dz).

#### Exemple 1 

L'exemple suivant indexe le champ *\[Clients\]Num* :

```4d
 UNLOAD RECORD([Clients])
 SET INDEX([Clients]Num;True)
```

#### Exemple 2 

Vous souhaitez indexer le champ \[Clients\]Nom, en mode asynchrone :

```4d
 SET INDEX([Clients]Nom;True;*)
```

#### Exemple 3 

Création d'un index de mots-clés :

```4d
 SET INDEX([Livres]Résumé;Keywords Index)
```

#### Voir aussi 

[CREATE INDEX](create-index.md)  
[DELETE INDEX](delete-index.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 344 |
| Thread safe | &check; |
| Interdite sur le serveur ||


