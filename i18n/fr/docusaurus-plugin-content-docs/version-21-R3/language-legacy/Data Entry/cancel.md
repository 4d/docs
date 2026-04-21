---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2003|Modifié|
|<6|Créé|

</details>
</div>

## Description 

La commande **CANCEL** doit être employée dans une méthode objet ou formulaire (ou une sous-routine) pour : 

* annuler la création ou la modification d'un enregistrement ou un sous-enregistrement — dont les données ont été saisies à la suite d'un [ADD RECORD](../commands/add-record), [MODIFY RECORD](../commands/modify-record), *\_o\_ADD SUBRECORD* ou *\_o\_MODIFY SUBRECORD*.
* annuler un formulaire affiché par l'intermédiaire de la commande [DIALOG](../commands/dialog).
* quitter un formulaire affichant une sélection d'enregistrements — à l'aide de [DISPLAY SELECTION](../commands/display-selection) ou [MODIFY SELECTION](../commands/modify-selection).
* annuler l'impression d'une ligne sur le point d’être imprimée à l'aide de la commande [Print form](../commands/print-form) (voir ci-dessous).

<!--REF #_command_.CANCEL.Summary-->Dans le contexte de la saisie, **CANCEL** effectue la même action que lorsque l'utilisateur utilise la touche d'annulation (**Esc**).<!-- END REF-->   
**CANCEL** est fréquemment exécutée à la suite de la sélection d'une commande de menu. **CANCEL** est également souvent appelée dans la méthode objet d'un bouton auquel la propriété "Pas d'action" a été associée.

Cette commande peut également être placée dans la méthode de la case de fermeture (optionnelle) d'une fenêtre créée par la commande [Open window](../commands/open-window). Si la fenêtre comporte une case de menu Système, **CANCEL** et [ACCEPT](../commands/accept) peuvent être appelées dans la méthode à exécuter lorsque l'utilisateur double-clique sur la case du menu Système ou sélectionne la commande de menu **Fermeture**.  
Il n'est pas possible d'enchaîner plusieurs **CANCEL**. En d'autres termes, l'exécution consécutive de deux commandes **CANCEL** dans une méthode en réponse à un événement aura le même résultat que l'exécution d'une seule. 

Enfin, cette commande peut être utilisée dans l’événement formulaire On Printing Detail, dans le cadre de l’utilisation de la commande [Print form](../commands/print-form). Dans ce contexte, la commande **CANCEL** suspend l’impression de la ligne sur le point d’être imprimée, puis la reprend page suivante. Ce mécanisme permet de gérer le manque de place ou les sauts de page lors des impressions des lignes. 

**Note :** Ce fonctionnement est différent de celui de l’instruction [PAGE BREAK](../commands/page-break)(\*) qui provoque l’annulation de TOUTES les lignes en attente d’impression. 

### Mode headless 

La commande **CANCEL** est autorisée en mode headless, dans le contexte des zones hors écran créées par *VP Run offscreen area* ou [WA Run offscreen area](../commands/wa-run-offscreen-area). 

## Exemple 

Reportez-vous à l'exemple de la commande [SET PRINT MARKER](../commands/set-print-marker). 

## Variables et ensembles système 

Lorsque la commande [CANCEL](../commands/cancel) est exécutée (formulaire annulé ou annulation d'impression), la variable système OK prend la valeur 0.

## Voir aussi 

[ACCEPT](../commands/accept)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 270 |
| Thread safe | no |
| Modifie les variables | OK |


