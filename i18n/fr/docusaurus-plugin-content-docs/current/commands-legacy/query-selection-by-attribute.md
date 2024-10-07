---
id: query-selection-by-attribute
title: QUERY SELECTION BY ATTRIBUTE
slug: /commands/query-selection-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Syntax-->**QUERY SELECTION BY ATTRIBUTE** ( {*laTable*}{;}{*opConj* ;} *champObjet* ; *cheminAttribut* ; *opRecherche* ; *valeur* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#x1F852; | Table dans laquelle la sélection est créée ou Table par défaut si ce paramètre est omis |
| opConj | * | &#x1F852; | Opérateur à utiliser pour combiner plusieurs requêtes (le cas échéant) |
| champObjet | Field | &#x1F852; | Champ objet dont les attributs sont à utiliser pour la recherche |
| cheminAttribut | Text | &#x1F852; | Nom ou chemin d'attribut |
| opRecherche | *, Text | &#x1F852; | Opérateur de recherche (comparateur) |
| valeur | Text, Number, Date, Time | &#x1F852; | Valeur à comparer |
| * | Opérateur | &#x1F852; | Attente d'exécution de la recherche |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION BY ATTRIBUTE.Summary-->**QUERY SELECTION BY ATTRIBUTE** fonctionne de la même façon et exécute les mêmes actions que la commande [QUERY BY ATTRIBUTE](query-by-attribute.md).<!-- END REF--> La différence entre ces deux commandes est la portée de la recherche :

* [QUERY BY ATTRIBUTE](query-by-attribute.md) recherche les enregistrements sur la totalité des enregistrements de la table.
* **QUERY SELECTION BY ATTRIBUTE** recherche les enregistrements dans la sélection courante de la table.

**QUERY SELECTION BY ATTRIBUTE** recherche des enregistrements dans *laTable*. La commande **QUERY SELECTION BY ATTRIBUTE** change la sélection courante de l*aTable* pour le process courant et le premier enregistrement de la sélection devient l'enregistrement courant.

Pour plus d'information, voir la description de la commande [QUERY BY ATTRIBUTE](query-by-attribute.md).

La commande **QUERY SELECTION BY ATTRIBUTE** est utile lorsqu'une recherche ne peut pas être définie en utilisant la combinaison de plusieurs [QUERY BY ATTRIBUTE](query-by-attribute.md) (voire de plusieurs [QUERY](query.md)) appelées conjointement avec le paramètre \*. C'est typiquement le cas lorsque vous recherchez dans une sélection courante qui ne résulte pas d'une recherche mais d'une commande telle que [USE SET](use-set.md). 

#### Exemple 

Vous souhaitez trouver les personnes âgées entre 20 et 30 ans parmi les enregistrements sélectionnés par l'utilisateur :

```4d
 USE SET("UserSet") // crée une nouvelle sélection courante
 QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)
 QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30) //déclenche la recherche
```

#### Voir aussi 

[QUERY BY ATTRIBUTE](query-by-attribute.md)  