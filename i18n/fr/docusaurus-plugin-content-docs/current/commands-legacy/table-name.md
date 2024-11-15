---
id: table-name
title: Table name
slug: /commands/table-name
displayed_sidebar: docs
---

<!--REF #_command_.Table name.Syntax-->**Table name** ( numTable | ptrTable ) : Text<!-- END REF-->
<!--REF #_command_.Table name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable &#124; ptrTable | Entier long, Pointeur | &#8594;  | Numéro de table ou pointeur de table |
| Résultat | Text | &#8592; | Nom de la table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Table name.Summary-->**Table name** retourne le nom de la table dont le numéro ou le pointeur a été passé dans *numTable* ou *ptrTable*.<!-- END REF-->

#### Exemple 

La méthode suivante est un exemple de méthode générique qui affiche les enregistrements d'une table. La référence à la table est passée en tant que pointeur vers la table. La commande **Table name** est utilisée pour inclure le nom de la table dans la barre de titre de la fenêtre :

```4d
  // Méthode projet AFFICHER SELECTION COURANTE
  // AFFICHER SELECTION COURANTE (Pointeur)
  // AFFICHER SELECTION COURANTE (->[Table] )
 
 SET WINDOW TITLE(" Enregistrements pour "+Table name($1)) // Fixer le titre de la fenêtre
 DISPLAY SELECTION($1->) // Afficher la sélection
```

#### Voir aussi 

[Field name](field-name.md)  
[Last table number](last-table-number.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
[Table](table.md)  