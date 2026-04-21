---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

## Description 

La commande **ACCEPT** doit être employée dans une méthode objet ou formulaire (ou une sous-routine) pour :

* valider un enregistrement ou un sous-enregistrement créé ou modifié — dont les données ont été saisies à l'aide de [ADD RECORD](../commands/add-record) ou de [MODIFY RECORD](../commands/modify-record).
* valider un formulaire affiché par l'intermédiaire de la commande [DIALOG](../commands/dialog).
* quitter un formulaire affichant une sélection d'enregistrements — à l'aide de [DISPLAY SELECTION](../commands/display-selection) ou [MODIFY SELECTION](../commands/modify-selection).

<!--REF #_command_.ACCEPT.Summary-->**ACCEPT** effectue la même action que lorsque l'utilisateur appuie sur la touche **Entrée**. <!-- END REF-->Une fois que le formulaire a été validé, la variable système OK prend la valeur 1.

**ACCEPT** est fréquemment exécutée à la suite de la sélection d'une commande de menu. **ACCEPT** est également souvent appelée dans la méthode objet d'un bouton auquel la propriété "Pas d'action" a été associée.

Enfin, cette commande peut être placée dans la méthode de la case de fermeture (optionnelle) d'une fenêtre créée par la commande [Open window](../commands/open-window). Si la fenêtre comporte une case de menu Système, **ACCEPT** et [CANCEL](../commands/cancel) peuvent être appelées dans la méthode à exécuter lorsque l'utilisateur double-clique sur la case du menu Système ou sélectionne la commande de menu **Fermeture**.

Il n'est pas possible d'enchaîner plusieurs **ACCEPT**. En d'autres termes, l'exécution consécutive de deux commandes **ACCEPT** dans une méthode en réponse à un événement aura le même résultat que l'exécution d'une seule.

### Mode headless 

La commande **ACCEPT** est autorisée en mode headless, dans le contexte des zones hors écran créées par *VP Run offscreen area* ou [WA Run offscreen area](../commands/wa-run-offscreen-area). 

## Voir aussi 

[CANCEL](../commands/cancel)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 269 |
| Thread safe | no |
| Modifie les variables | OK |


