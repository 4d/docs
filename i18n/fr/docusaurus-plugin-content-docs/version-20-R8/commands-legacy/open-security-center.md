---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->La commande **OPEN SECURITY CENTER** provoque l’affichage de la fenêtre du Centre de sécurité et de maintenance (CSM).<!-- END REF--> Pour plus d'informations, veuillez consulter la page *Centre de Sécurité et de Maintenance*.

**Notes :** 

* Cette commande fonctionne sur le même principe qu'un appel à [DIALOG](../commands/dialog.md) avec le paramètre *\** : le CSM est affiché dans une fenêtre et la commande rend immédiatement la main au code 4D. Si le process courant se termine, la fenêtre est automatiquement fermée en simulant un [CANCEL](cancel.md). Vous devez donc gérer son affichage via le code du process en cours d'exécution.
* Cette commande ne peut pas être exécutée sur une application 4D distante.

#### Voir aussi 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1018 |
| Thread safe | &cross; |


