---
id: set-window-title
title: SET WINDOW TITLE
slug: /commands/set-window-title
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW TITLE.Syntax-->**SET WINDOW TITLE** ( *titre* {; *fenêtre*} )<!-- END REF-->
<!--REF #_command_.SET WINDOW TITLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| titre | Text | &#8594;  | Titre de la fenêtre |
| fenêtre | Integer | &#8594;  | Numéro de référence de fenêtre ou Fenêtre au premier plan du process courant si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET WINDOW TITLE.Summary-->La commande **SET WINDOW TITLE** remplace le titre de la fenêtre dont le numéro de référence est passé dans *fenêtre* par le texte passé dans *titre* (longueur maximale 80 caractères).<!-- END REF-->

Si la fenêtre n'existe pas, **SET WINDOW TITLE** ne fait rien. 

Si vous omettez le paramètre *fenêtre*, **SET WINDOW TITLE** remplace le titre de la fenêtre de premier plan du process courant.

**Note :** En mode Développement, 4D définit automatiquement les titres des fenêtres — par exemple “Saisie pour table1” est affiché lorsque vous passez en saisie de données. Si vous changez le titre d'une fenêtre du mode Développement, il est probable que 4D le remplacera par la suite. En revanche, en mode Application, 4D ne modifie pas le titre des fenêtres.

#### Exemple 

Vous effectuez une saisie dans un formulaire et vous cliquez sur un bouton qui déclenche une longue opération (par exemple une modification par programmation des enregistrements liés affichés dans un sous-formulaire). Vous pouvez afficher des informations sur la progression des opérations dans le titre de la fenêtre :

```4d
  // Méthode objet du bouton bAnalyse
 Case of
    :(FORM Event=On Clicked)
  // Sauvegarde du titre courant de la fenêtre dans une variable
       $vsTitreCour:=Get window title
  // Commencer l'opération longue
       FIRST RECORD([Lignes facture])
       For($vlRecord;1;Records in selection([Lignes facture]))
          FAIRE QUELQUE CHOSE
  // Afficher la progression
          SET WINDOW TITLE("Traitement de la ligne #"+String($vlEnreg))
       End if
  // Remettre en place l'ancien titre de fenêtre
       SET WINDOW TITLE($vsTitreCour)
 End case
```

#### Voir aussi 

[Get window title](get-window-title.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 213 |
| Thread safe | &cross; |


