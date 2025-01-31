---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.ACCEPT.Summary-->La commande **ACCEPT** doit être employée dans une méthode objet ou formulaire (ou une sous-routine) pour :

* valider un enregistrement ou un sous-enregistrement créé ou modifié — dont les données ont été saisies à l'aide de [ADD RECORD](add-record.md) ou de [MODIFY RECORD](modify-record.md).<!-- END REF-->
* valider un formulaire affiché par l'intermédiaire de la commande [DIALOG](../commands/dialog.md).
* quitter un formulaire affichant une sélection d'enregistrements — à l'aide de [DISPLAY SELECTION](display-selection.md) ou [MODIFY SELECTION](modify-selection.md).

**ACCEPT** effectue la même action que lorsque l'utilisateur appuie sur la touche **Entrée**. Une fois que le formulaire a été validé, la variable système OK prend la valeur 1.

**ACCEPT** est fréquemment exécutée à la suite de la sélection d'une commande de menu. **ACCEPT** est également souvent appelée dans la méthode objet d'un bouton auquel la propriété "Pas d'action" a été associée.

Enfin, cette commande peut être placée dans la méthode de la case de fermeture (optionnelle) d'une fenêtre créée par la commande [Open window](open-window.md). Si la fenêtre comporte une case de menu Système, **ACCEPT** et [CANCEL](cancel.md) peuvent être appelées dans la méthode à exécuter lorsque l'utilisateur double-clique sur la case du menu Système ou sélectionne la commande de menu **Fermeture**.

Il n'est pas possible d'enchaîner plusieurs **ACCEPT**. En d'autres termes, l'exécution consécutive de deux commandes **ACCEPT** dans une méthode en réponse à un événement aura le même résultat que l'exécution d'une seule.

##### Mode headless 

La commande **ACCEPT** est autorisée en mode headless, dans le contexte des zones hors écran créées par *VP Run offscreen area* ou [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Voir aussi 

[CANCEL](cancel.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 269 |
| Thread safe | &cross; |
| Modifie les variables | OK |


