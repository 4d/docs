---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM UNLOAD.Summary-->La commande **FORM UNLOAD** permet de décharger de la mémoire le formulaire courant désigné via la commande [FORM LOAD](form-load.md).<!-- END REF-->

L’appel de cette commande est nécessaire lors de l’utilisation de la commande [FORM LOAD](form-load.md) hors contexte d’impression (en cas d’impression, le formulaire courant est automatiquement refermé lorsque la commande [CLOSE PRINTING JOB](close-printing-job.md) est appelée). 

#### Voir aussi 

[FORM LOAD](form-load.md)  