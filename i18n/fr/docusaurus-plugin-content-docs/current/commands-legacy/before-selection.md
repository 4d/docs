---
id: before-selection
title: Before selection
slug: /commands/before-selection
displayed_sidebar: docs
---

<!--REF #_command_.Before selection.Syntax-->**Before selection** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Before selection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle vous testez si le pointeur se trouve avant la sélection |
| Résultat | Boolean | &#8592; | Avant sélection (Vrai) sinon (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Before selection.Summary-->La fonction **Before selection** retourne Vrai lorsque le pointeur d'enregistrement courant se trouve avant le premier enregistrement de la sélection courante de *laTable*.<!-- END REF--> **Before selection** est généralement utilisée pour vérifier si la commande [PREVIOUS RECORD](previous-record.md) a déplacé le pointeur d'enregistrement courant avant le premier enregistrement. Si la sélection courante est vide, **Before selection** retourne Vrai.

Pour replacer le pointeur d'enregistrement courant dans la sélection courante, utilisez les commandes [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md). [NEXT RECORD](next-record.md) ne replace pas le pointeur d'enregistrement courant dans la sélection courante.

**Before selection** retourne Vrai dans l'en-tête lorsqu'un état est en cours d'impression à l'aide de la commande [PRINT SELECTION](print-selection.md) ou à partir de la commande de menu Imprimer. Vous pouvez utiliser le code suivant pour tester le premier en-tête et imprimer un en-tête spécial pour la première page :

```4d
  // Méthode d'un formulaire sortie utilisé pour un état
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=Sur entête)
  // La zone en-tête va être imprimée
       Case of
          :(Before selection($vpFormTable->))
  // Le code pour la première rupture d'en-tête doit être placé ici
  // ...
       End case
 End case
```

#### Exemple 

La méthode formulaire suivante est utilisée pendant l'impression d'un état. Elle définit une variable *vTitre* à imprimer dans la zone d'en-tête sur la première page :

```4d
  // Méthode formulaire [Finances];"Tableau"
 Case of
  // ...
    :(Form event code=Sur entête)
  // La zone en-tête va être imprimée
       Case of
          :(Before selection([Finances]))
             vTitre:="Etat des finances pour 1997" // Définir le titre pour la première page
          Else
             vTitre:="" // Effacer le titre pour les autres pages
       End case
 End case
```

#### Voir aussi 

[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[Form event code](../commands/form-event-code.md)  
[PREVIOUS RECORD](previous-record.md)  
[PRINT SELECTION](print-selection.md)  