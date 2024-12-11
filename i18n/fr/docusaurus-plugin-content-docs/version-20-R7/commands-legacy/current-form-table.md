---
id: current-form-table
title: Current form table
slug: /commands/current-form-table
displayed_sidebar: docs
---

<!--REF #_command_.Current form table.Syntax-->**Current form table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current form table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Pointer | &#8592; | Pointeur vers la table à laquelle appartient le formulaire actuellement affiché |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current form table.Summary-->La fonction **Current form table** retourne un pointeur vers la table à laquelle appartient le formulaire affiché à l'écran ou imprimé dans le process courant.<!-- END REF--> 

La fonction retourne Nil dans les cas suivants :

* il n'y a pas de formulaire affiché ou en cours d'impression dans le process courant,
* le formulaire courant est un formulaire projet.

Si plusieurs fenêtres sont ouvertes simultanément dans le process courant (ce qui signifie que la dernière fenêtre ouverte est la fenêtre courante active), la fonction retourne un pointeur vers la table du formulaire affiché dans la fenêtre active. 

Si le formulaire affiché est le formulaire détaillé d'une zone de sous-formulaire (c'est-à-dire que pendant la saisie de données, l'utilisateur a double-cliqué sur un enregistrement ou un sous-enregistrement dans une zone de sous-formulaire "double-cliquable"), la fonction retourne :

* un pointeur vers la table de la zone de sous-formulaire, si cette dernière affiche une table.
* un pointeur non significatif si la zone de sous-formulaire affiche une sous-table.

#### Exemple 

Dans votre application, vous utilisez la convention suivante : au moment de l'affichage d'un enregistrement, la variable *vsEnrCourant*, si elle est présente dans un formulaire, affiche "Nouvel enregistrement" si vous créez un nouvel enregistrement, ou par exemple "56 parmi 5200" si vous ouvrez le 56e enregistrement d'une sélection en comportant 5200\. Pour cela, vous pouvez créer une fois la variable *vsEnrCourant* et lui associer la méthode objet décrite ci-dessous, puis la copier et la coller dans tous les formulaires que vous voulez :

```4d
  //Méthode objet de la variable non saisissable vsEnrCourant
 Case of
    :(Form event code=On Load)
       C_STRING(31;vsEnrCourant)
       var $vpTableParente : Pointer
       var $vlNumEnr : Integer
       $vpTableParente:=Current form table
       $vlNumEnr:=Record number($vpTableParente->)
       Case of
          :($vlNumEnr=-3)
             vsEnrCourant:="Nouvel enregistrement"
          :($vlNumEnr=-1)
             vsEnrCourant:="Pas d'enregistrement"
          :($vlNumEnr>=0)
             vsEnrCourant:=String(Numero dans selection($vpTableParente->))+" parmi "+Chaine(Enregistrements trouves($vpTableParente->))
       End case
 End case
```

#### Voir aussi 

[DIALOG](dialog.md)  
[FORM SET INPUT](form-set-input.md)  
[FORM SET OUTPUT](form-set-output.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 627 |
| Thread safe | &check; |
| Interdite sur le serveur ||


