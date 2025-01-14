---
id: display-selection
title: DISPLAY SELECTION
slug: /commands/display-selection
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY SELECTION.Syntax-->**DISPLAY SELECTION** ( {*laTable*}{; *modeSélection*}{; *saisieListe*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.DISPLAY SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à laquelle appartient la sélection ou Table par défaut si ce paramètre est omis |
| modeSélection | Integer | &#8594;  | Mode de sélection |
| saisieListe | Boolean | &#8594;  | Autoriser saisie en liste |
| * | Operator |  &#8594;  | Utiliser le formulaire sortie en cas de sélection d'un seul enregistrement et masquer les barres de défilement dans le formulaire entrée |
| * | Operator |  &#8594;  | Afficher les barres de défilement dans le formulaire entrée (= annuler le second effet du premier paramètre *) |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISPLAY SELECTION.Summary-->**DISPLAY SELECTION** affiche, pour le process en cours, la sélection courante de *laTable* dans le formulaire sortie courant.<!-- END REF--> Les enregistrements sont affichés sous la forme d'une liste que l'on peut faire défiler, semblable à celle du mode Développement. Lorsque l'utilisateur double-clique sur un enregistrement, par défaut celui-ci s'affiche dans le formulaire entrée courant. La liste est placée dans la fenêtre de premier plan.

Si vous souhaitez afficher une sélection et pouvoir également modifier un enregistrement dans le formulaire entrée courant une fois que vous avez double-cliqué dessus (comme vous le faites dans la fenêtre du mode Développement) ou via le mode “Saisie en liste”, utilisez [MODIFY SELECTION](modify-selection.md) au lieu de **DISPLAY SELECTION**. Toutes les explications suivantes s'appliquent à ces deux commandes, hormis la possibilité de modifier des enregistrements. 

Après qu'un **DISPLAY SELECTION** ait été exécuté, il n'y a plus d'enregistrement courant. Vous devez utiliser une commande telle que [FIRST RECORD](first-record.md) ou [LAST RECORD](last-record.md) pour en récupérer un.

Le paramètre *modeSélection* vous permet de définir les possibilités de sélection d’enregistrements dans la liste à l'aide de la souris. Vous pouvez passer dans ce paramètre une des constantes suivantes du thème “*Paramètres de formulaire*” :

| Constante          | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiple selection | Entier long | 2      | L’utilisateur peut sélectionner plusieurs enregistrements. Pour sélectionner des enregistrements contigus, il suffit de cliquer sur le premier enregistrement à sélectionner puis d'appuyer sur la touche **Majuscule** avant de cliquer sur le dernier. Pour sélectionner des enregistrements non adjacents, il suffit de cliquer sur chaque enregistrement en maintenant enfoncée la touche **Ctrl** (sous Windows) ou **Commande** (sous Mac OS). |
| No selection       | Entier long | 0      | Il n'est pas possible de sélectionner un enregistrement dans la liste                                                                                                                                                                                                                                                                                                                                                                                |
| Single selection   | Entier long | 1      | Seule la sélection d’un enregistrement à la fois est autorisée                                                                                                                                                                                                                                                                                                                                                                                       |

 Si vous ne passez pas le paramètre *modeSélection*, par défaut le mode “Sélection multiple” est utilisé. 

Le paramètre *saisieListe* vous permet d’autoriser le mode “Saisie en liste” dans la liste affichée. Ce mode permet à l'utilisateur de sélectionner et de modifier directement les valeurs des enregistrements dans le formulaire sortie. Passez Vrai pour autoriser ce mode ou Faux pour ne pas l’autoriser. Par défaut, si vous ne passez pas le paramètre *saisieListe*, le mode “Saisie en liste” n’est pas autorisé.   
A noter qu'avec la commande **DISPLAY SELECTION**, ce paramètre permet uniquement la sélection de valeurs dans la liste et non leur modification. En effet, la commande **DISPLAY SELECTION** charge les enregistrements de la sélection courante en Lecture seulement dans le process en cours. Seule la commande [MODIFY SELECTION](modify-selection.md) permet effectivement la saisie de valeurs. 

**Note :** La commande [OBJECT SET ENTERABLE](object-set-enterable.md) permet d’activer ou de désactiver le mode Saisie en liste à la volée. 

Lorsque la sélection ne contient qu'un enregistrement, et que le premier paramètre optionnel *\** n'est pas passé, l'enregistrement s'affichera directement dans le formulaire entrée. Si le premier paramètre optionnel *\** est spécifié, l'enregistrement unique sera affiché dans le formulaire sortie. Si le premier paramètre optionnel *\** est spécifié et que l'utilisateur affiche l'enregistrement dans le formulaire entrée en double-cliquant dessus, les barres de défilement du formulaire seront masquées. Pour annuler ce second effet du premier paramètre optionnel *\**, passez le second paramètre optionnel *\**.

Vous pouvez placer des boutons personnalisés dans la zone d'en-tête ou de pied de page du formulaire sortie pour terminer l'exécution de la commande **DISPLAY SELECTION**. Vous pouvez utiliser des boutons automatiques **Valider** ou **Annuler** permettant de sortir de la liste ou utiliser une méthode objet qui appelle les commandes [ACCEPT](accept.md) ou [CANCEL](cancel.md). Lorsqu’un formulaire sortie appelé par la commande **DISPLAY SELECTION** est dépourvu de boutons, seule la touche **Echap** (Windows) ou **Esc** (Mac OS) permet de quitter la liste. 

Pendant et après l'exécution d'un **DISPLAY SELECTION**, les enregistrements sélectionnés par l'utilisateur sont conservés dans un ensemble système nommé UserSet. Après l'exécution de la commande, l'ensemble UserSet est accessible pendant un **DISPLAY SELECTION** aux méthodes objet de boutons, aux méthodes appelées par des commandes de menu, ainsi que pour la méthode projet qui avait appelé **DISPLAY SELECTION**. 

#### Exemple 1 

L'exemple suivant sélectionne tous les enregistrements de la table \[Personnes\]. La commande **DISPLAY SELECTION** est alors utilisée pour afficher les enregistrements et permettre à l'utilisateur de désigner ceux qu'il souhaite imprimer. Enfin, les enregistrements sélectionnés sont récupérés à l'aide de la commande [USE SET](use-set.md) et imprimés avec [PRINT SELECTION](print-selection.md) :

```4d
 ALL RECORDS([Personnes]) // Sélection de tous les enregistrements
 DISPLAY SELECTION([Personnes];*) // Affichage des enregistrements
 USE SET("UserSet") // Use uniquement les enregistrements sélectionnés par l'utilisateur
 PRINT SELECTION([Personnes]) // Imprimer les enregistrements sélectionnés
```

#### Exemple 2 

Reportez-vous à l'exemple n°6 de la commande [Form event code](../commands/form-event-code.md)" ; il indique tous les tests que vous pourrez avoir besoin d'effectuer pour surveiller la totalité des événements intervenant pendant l'exécution de la commande **DISPLAY SELECTION**. 

#### Exemple 3 

Pour reproduire, par exemple, les fonctionnalités apportées par le menu **Enregistrements** du mode Développement lorsque vous utilisez [MODIFY SELECTION](modify-selection.md) ou **DISPLAY SELECTION** en mode Application, procédez de la manière suivante :

I. Dans le mode Développement, créez une barre de menus comportant les menus qui vous intéressent (par exemple Tout montrer, Recherche et Trier).   
II. Associez cette barre de menus (à l'aide du menu “Barre de menus associée” dans la boîte de dialogue des propriétés du formulaire) au formulaire sortie utilisé avec les commandes **DISPLAY SELECTION** ou [MODIFY SELECTION](modify-selection.md).  
III. Associez les méthodes projet suivantes à vos commandes de menu :

```4d
  // M_TOUT_MONTRER (associée à la commande de menu Tout montrer)
 $vpCourTable:=Current form table
 ALL RECORDS($vpCourTable->)
```

```4d
  // M_Recherche (associée à la commande de menu Recherche)
 $vpCourTable:=Current form table
 QUERY($vpCourTable->)
 
  // M_TRIER (associée à la commande de menu Trier)
 $vpCourTable:=Current form table
 ORDER BY($vpCourTable->)
```

Vous pouvez aussi utiliser d'autres commandes telles que [PRINT SELECTION](print-selection.md), [QR REPORT](qr-report.md), etc., afin de reproduire les commandes de menu "standard" à chaque fois que vous affichez ou modifiez une sélection en mode Application. Grâce à la commande [Current form table](current-form-table.md), ces méthodes sont génériques et les barres de menus auxquelles elles sont associées peuvent être rattachées à tout formulaire de sortie ou à toute table.

#### Voir aussi 

[Form event code](../commands/form-event-code.md)"  
[MODIFY SELECTION](modify-selection.md)  
*Présentation des ensembles*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 59 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


