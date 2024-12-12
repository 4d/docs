---
id: page-break
title: PAGE BREAK
slug: /commands/page-break
displayed_sidebar: docs
---

<!--REF #_command_.PAGE BREAK.Syntax-->**PAGE BREAK** {( * | > )}<!-- END REF-->
<!--REF #_command_.PAGE BREAK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * &#124; > | &#8594;  | * Annule l'impression lancée par Imprimer ligne ou > Rend l'impression prioritaire |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.PAGE BREAK.Summary-->La commande **PAGE BREAK** déclenche l'impression des données envoyées à l'imprimante et provoque un saut de page.<!-- END REF--> **PAGE BREAK** s'utilise conjointement avec [Print form](../commands/print-form.md) (dans le cadre de l'événement formulaire On Printing Detail) pour forcer des sauts de page et imprimer la dernière page créée en mémoire.   
N'appelez pas **PAGE BREAK** avec la commande [PRINT SELECTION](print-selection.md) : dans ce cas, il est préférable d'utiliser les routines [Subtotal](subtotal.md) ou [BREAK LEVEL](break-level.md) avec leur paramètre optionnel pour générer des sauts de pages.

Les paramètres *\** et *\>* sont optionnels.

Le paramètre \* vous permet d'annuler une impression lancée avec la commande [Print form](../commands/print-form.md). L'exécution de cette instruction stoppe immédiatement l'impression en cours. 

**Note :** Sous Windows, ce mécanisme peut être perturbé par les propriétés de "spouling" du serveur d'impression. Si l'imprimante est paramétrée de manière à lancer les impressions directement, l'annulation ne sera pas effective. Pour que l'instruction **PAGE BREAK**(\*) fonctionne correctement, il est préférable d'affecter la propriété "Commencer l'impression une fois la dernière page spoulée" à l'imprimante. 

Le paramètre *\>* modifie le fonctionnement de la commande **PAGE BREAK**. Cette syntaxe provoque deux effets :

* Elle reporte l'impression jusqu'à ce que l'instruction **PAGE BREAK** sans paramètre soit de nouveau exécutée.
* Elle rend l'impression prioritaire. Aucune autre impression ne pourra s'intercaler tant que celle en cours ne sera pas terminée.  
Cette seconde option est particulièrement intéressante lorsqu'elle est utilisée dans le cadre d'impressions en files d'attente. Le paramètre > garantit que l'impression sera réalisée à partir d'un seul fichier. Cela permet de réduire le temps d'impression.

**Note :** Lors d'une impression avec aperçu, si l'utilisateur clique sur le bouton d'annulation dans la boîte de dialogue de prévisualisation, la commande **PAGE BREAK** met la variable système OK à 0.

#### Exemple 1 

Reportez-vous à l'exemple de la commande [Print form](../commands/print-form.md).

#### Exemple 2 

Reportez-vous à l'exemple de la commande [SET PRINT MARKER](set-print-marker.md). 

#### Voir aussi 

[CANCEL](cancel.md)  
[Print form](../commands/print-form.md)  