---
id: goto-selected-record
title: GOTO SELECTED RECORD
slug: /commands/goto-selected-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO SELECTED RECORD.Syntax-->**GOTO SELECTED RECORD** ( {*laTable* ;} *enregistrement* )<!-- END REF-->
<!--REF #_command_.GOTO SELECTED RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle aller à l'enregistrement spécifié ou Table par défaut si ce paramètre est omis |
| enregistrement | Integer | &#8594;  | Position de l'enregistrement dans la sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.GOTO SELECTED RECORD.Summary-->La commande **GOTO SELECTED RECORD** fait de l'enregistrement spécifié parmi la sélection courante de *laTable* l'enregistrement courant.<!-- END REF--> La sélection courante n'est pas modifiée. Le paramètre *enregistrement* n'est pas équivalent au numéro retourné par [Record number](record-number.md). Ce paramètre représente la position de l'enregistrement au sein de la sélection courante. Cette position dépend de la manière dont la sélection a été créée et si elle a été triée.  
Pour plus de précisions sur les numéros d'enregistrements, reportez-vous à la section *A propos des numéros d'enregistrements*.

**GOTO SELECTED RECORD** ne fait rien si :

* il n'y a aucun enregistrement dans la sélection courante
* *enregistrement* n'appartient pas à la sélection courante,
* *enregistrement* est déjà l'enregistrement courant.

Si vous passez 0 dans *enregistrement*, il n’y a plus d’enregistrement courant dans *laTable*. Ce mécanisme permet de n'avoir plus aucun enregistrement sélectionné dans une liste, notamment dans les sous-formulaires inclus, lorsque le mode de sélection est “unique”. 

#### Exemple 

L'exemple suivant charge les valeurs du champ \[Personnes\]Nom dans le tableau *taNoms*. Un tableau d'entiers longs, *numEnr*, est rempli avec des numéros qui représenteront ceux des enregistrements sélectionnés. Les deux tableaux sont alors triés :

```4d
  // Créer ici la sélection de la table [Personnes]
  //...
  // Récupérer les noms
 SELECTION TO ARRAY([Personnes]Nom;taNoms)
  // Créer un tableau pour les numéros d'enregistrements sélectionnés
 $vELNbEnrgs:=Size of array(taNoms)
 ARRAY LONGINT(numEnr;$vELNbEnrgs)
 For($Enrg;1;$vELNbEnrgs) // Remplir le tableau avec ces numéros
    numEnr{$Enrg}:=$Enrg
 End for
  // Trier les deux tableaux par ordre alphabétique
 SORT ARRAY(taNoms;numEnr;>)
```

Si le tableau *taNoms* est affiché dans une zone de défilement, l'utilisateur peut cliquer sur l'un des éléments. Comme les deux tableaux ont été triés de manière synchronisée, tout élément de *numEnr* fournit le numéro de l'enregistrement sélectionné pour lequel le nom a été stocké dans l'élément de *taNoms* correspondant.

La méthode objet de la zone de défilement *taNoms* suivante sélectionne le bon enregistrement dans la sélection de \[Personnes\] en fonction de ce que l'utilisateur a choisi dans la zone de défilement.

```4d
 Case of
    :(Form event code=On Clicked)
       If(taNoms#0)
          GOTO SELECTED RECORD(numEnr{taNoms})
       End ifEnd case
```

#### Voir aussi 

[Selected record number](selected-record-number.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 245 |
| Thread safe | &check; |
| Change l'enregistrement courant ||


