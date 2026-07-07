---
id: before-selection
title: Before selection
slug: /commands/before-selection
displayed_sidebar: docs
---

<!--REF #_command_.Before selection.Syntax-->**Before selection** ( {*laTable* : Table} ) : Boolean<!-- END REF-->
<!--REF #_command_.Before selection.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle vous testez si le pointeur se trouve avant la sélection |
| Résultat | Boolean | &#8592; | Avant sélection (Vrai) sinon (Faux) |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Before selection.Summary-->La fonction **Before selection** retourne Vrai lorsque le pointeur d'enregistrement courant se trouve avant le premier enregistrement de la sélection courante de *laTable*.<!-- END REF-->est généralement utilisée pour vérifier si la commande [PREVIOUS RECORD](../commands/previous-record) a déplacé le pointeur d'enregistrement courant avant le premier enregistrement. Si la sélection courante est vide, **Before selection** retourne Vrai.

Pour replacer le pointeur d'enregistrement courant dans la sélection courante, utilisez les commandes [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) ou [GOTO SELECTED RECORD](../commands/goto-selected-record). [NEXT RECORD](../commands/next-record) ne replace pas le pointeur d'enregistrement courant dans la sélection courante.

**Before selection** retourne Vrai dans l'en-tête lorsqu'un état est en cours d'impression à l'aide de la commande [PRINT SELECTION](../commands/print-selection) ou à partir de la commande de menu Imprimer. Vous pouvez utiliser le code suivant pour tester le premier en-tête et imprimer un en-tête spécial pour la première page :

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

## Exemple 

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

## Voir aussi 

[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[Form event code](../commands/form-event-code)  
[PREVIOUS RECORD](../commands/previous-record)  
[PRINT SELECTION](../commands/print-selection)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 198 |
| Thread safe | yes |


