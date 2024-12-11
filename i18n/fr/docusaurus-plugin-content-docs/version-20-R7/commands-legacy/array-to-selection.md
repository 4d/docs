---
id: array-to-selection
title: ARRAY TO SELECTION
slug: /commands/array-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO SELECTION.Syntax-->**ARRAY TO SELECTION** {( *tableau* ; *leChamp* {; *tableau2* ; *leChamp2* ; ... ; *tableauN* ; *leChampN*}{; *} )}<!-- END REF-->
<!--REF #_command_.ARRAY TO SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau à copier dans la sélection |
| leField | Field | &#8592; | Champ recevant les valeurs du tableau |
| * | Opérateur | &#8594;  | Attente d’exécution |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TO SELECTION.Summary-->La commande **ARRAY TO SELECTION** copie un ou plusieurs tableau(x) vers une sélection d'enregistrements.<!-- END REF--> Tous les champs listés doivent appartenir à la même table.

Si une sélection existe au moment de l'appel, les éléments du tableau sont copiés dans les enregistrements en fonction de l'ordre du tableau et de l'ordre des enregistrements. Si le nombre d'éléments du tableau est supérieur au nombre d'enregistrements de la sélection courante, de nouveaux enregistrements sont créés. Les enregistrements, qu'ils soient nouveaux ou existants, sont automatiquement sauvegardés.

**Note :** Comme elle permet de créer de nouveaux enregistrements, cette commande ne tient pas compte de l'état lecture seulement éventuel de la table (cf. *Verrouillage d'enregistrements*). 

Tous les tableaux doivent avoir le même nombre d'éléments. Si des tableaux ont des tailles différentes, une erreur de syntaxe est générée. 

Cette commande effectue l'opération inverse de [SELECTION TO ARRAY](selection-to-array.md). Cependant, **ARRAY TO SELECTION** ne permet pas d'utiliser de champs en provenance de tables différentes ni de tables liées, même si un lien automatique existe.

Si vous passez un *\** en dernier paramètre, 4D n’exécute pas immédiatement la ligne d’instruction correspondante mais la stocke en mémoire ; vous pouvez ainsi empiler plusieurs lignes se terminant par un *\**. L’ensemble des lignes en attente sera exécuté par une instruction **ARRAY TO SELECTION** finale sans paramètre *\**. A cette fin, la commande peut être appelée sans aucun paramètre.   
A l’image de la commande [QUERY](query.md), ce principe vous permet de scinder une instruction complexe en un ensemble de lignes, plus lisibles et plus faciles à maintenir. Il est également possible d’insérer des instructions intermédiaires. 

**ATTENTION :** Comme **ARRAY TO SELECTION** remplace les informations éventuellement présentes dans les enregistrements existants, cette commande doit être utilisée avec prudence. Si un enregistrement est verrouillé par un autre process pendant l'exécution de la commande **ARRAY TO SELECTION**, il n'est pas modifié. Tous les enregistrements verrouillés sont placés dans l'ensemble LockedSet. Après l'exécution de **ARRAY TO SELECTION**, vous pouvez tester si l'ensemble LockedSet contient des enregistrements qui étaient verrouillés.

**4D Server :** Cette commande est optimisée pour 4D Server. Le tableau est envoyé au serveur depuis le poste client. Les enregistrements sont modifiés ou créés sur le serveur. Comme une telle requête est gérée de façon synchrone, le poste client doit attendre que l'opération se soit correctement déroulée. Dans les environnements multi-utilisateurs et multi-process, aucun enregistrement verrouillé ne sera réécrit.

#### Exemple 1 

Dans l'exemple suivant, les deux tableaux *tabNoms* et *tabSociétés* écrivent des données dans la table *\[Personnes\]*. Les valeurs du tableau *tabNoms* sont placées dans le champ *\[Personnes\]Nom* et les valeurs du tableau *tabSociétés* sont placées dans le champ *\[Personnes\]Société* :

```4d
 ARRAY TO SELECTION(tabNoms;[Personnes]Nom;tabSociétés;[Personnes]Société)
```

#### Exemple 2 

Vous souhaitez recopier la sélection d'enregistrements vers une table d'archive en sélectionnant les champs en fonction de la valeur d'options :

```4d
 ARRAY TEXT($_nom;0)
 ARRAY TEXT($_prenom;0)
 ARRAY TEXT($_cv;0)
 ARRAY PICTURE($_photo;0)
 
 SELECTION TO ARRAY([Candidat]Nom;$_nom;*)
 SELECTION TO ARRAY([Candidat]Prenom;$_prenom;*)
 If(avecCV) //on embarque le champ cv
    SELECTION TO ARRAY([Candidat]cv;$_cv;*)
 End if
 If(avecPhoto) //on embarque le champ photo
    SELECTION TO ARRAY([Candidat]photo;$_photo;*)
 End if
 SELECTION TO ARRAY //exécution de la copie
 
 REDUCE SELECTION([Candidat_Archive];0)
 ARRAY TO SELECTION($_nom;[Candidat_Archive]Nom;*)
 ARRAY TO SELECTION($_prenom;[Candidat_Archive]Prenom;*)
 If(avecCV)
    ARRAY TO SELECTION($_cv;[Candidat_Archive]cv;*)
 End if
 If(avecPhoto)
    ARRAY TO SELECTION($_photo;[Candidat_Archive]photo;*)
 End if
 ARRAY TO SELECTION
```

#### Voir aussi 

[SELECTION TO ARRAY](selection-to-array.md)  
*Variables système*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 261 |
| Thread safe | &check; |
| Change la sélection courante ||


