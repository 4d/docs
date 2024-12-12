---
id: frontmost-process
title: Frontmost process
slug: /commands/frontmost-process
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost process.Syntax-->**Frontmost process** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost process.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Numéro du process de la première fenêtre non-flottante |
| Résultat | Integer | &#8592; | Numéro du process dont la ou les fenêtre(s) est (sont) au premier plan |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Frontmost process.Summary-->**Frontmost process** retourne le numéro du process dont la ou les fenêtre(s) est (sont) au premier plan.<!-- END REF--> 

Lorsqu'une ou plusieurs fenêtres flottantes sont ouvertes, deux niveaux différents de fenêtres sont distingués :

* les fenêtres standard
* les fenêtres flottantes

Si la fonction **Frontmost process** est utilisée dans la méthode formulaire ou dans une méthode objet d'une fenêtre flottante, la fonction retourne le numéro du process de la fenêtre flottante au premier plan parmi les fenêtres flottantes. Si vous passez le paramètre optionnel astérisque, la fonction retourne le numéro du process dont la fenêtre est au premier plan, **exception faite du niveau des fenêtres flottantes**.

#### Exemple 

Référez-vous à l'exemple de [BRING TO FRONT](bring-to-front.md).

#### Voir aussi 

[BRING TO FRONT](bring-to-front.md)  
[WINDOW LIST](window-list.md)  