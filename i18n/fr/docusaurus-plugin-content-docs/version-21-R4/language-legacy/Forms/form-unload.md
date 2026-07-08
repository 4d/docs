---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14|Créé|

</details>
</div>

## Description 

<!--REF #_command_.FORM UNLOAD.Summary-->La commande **FORM UNLOAD** permet de décharger de la mémoire le formulaire courant désigné via la commande [FORM LOAD](../commands/form-load).<!-- END REF-->

L’appel de cette commande est nécessaire lors de l’utilisation de la commande [FORM LOAD](../commands/form-load) hors contexte d’impression (en cas d’impression, le formulaire courant est automatiquement refermé lorsque la commande [CLOSE PRINTING JOB](../commands/close-printing-job) est appelée). 

## Voir aussi 

[FORM LOAD](../commands/form-load)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1299 |
| Thread safe | no |


