---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** {( *typeDial* )}<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeDial | Integer | &#8594;  | Boîte(s) de dialogue à afficher |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|15 R5|Modifié|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.PRINT SETTINGS.Summary-->La commande **PRINT SETTINGS** provoque l'affichage d'une boîte de dialogue d'impression.<!-- END REF--> Cette commande doit être appelée avant une série de commandes [Print form](../commands/print-form) ou la commande [OPEN PRINTING JOB](../commands/open-printing-job).

Le paramètre facultatif *typeDial* permet de configurer l’affichage de la boîte de dialogue d’impression. Vous pouvez utiliser l'une des constantes suivantes du thème *Options d'impression* :

| Constante         | Valeur | Comment                                                             |
| ----------------- | ------ | ------------------------------------------------------------------- |
| Page setup dialog | 1      | Affichage de la boîte de dialogue Format d'impression               |
| Print dialog      | 2      | Affichage de la boîte de dialogue d'impression (par défaut si omis) |

**Note :** La boîte de dialogue d'impression comporte l'option **Imprimer à l'écran** permettant à l'utilisateur de visualiser son impression à l'écran. Vous pouvez présélectionner ou désélectionner cette option par un appel préalable à la commande [SET PRINT PREVIEW](../commands/set-print-preview).

## Exemple 

Reportez-vous à l'exemple de la commande [Print form](../commands/print-form).

## Variables et ensembles système 

Si l'utilisateur clique sur le bouton OK dans chaque boîte de dialogue, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0\. 

## Voir aussi 

[OPEN PRINTING JOB](../commands/open-printing-job)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 106 |
| Thread safe | no |
| Modifie les variables | OK |


