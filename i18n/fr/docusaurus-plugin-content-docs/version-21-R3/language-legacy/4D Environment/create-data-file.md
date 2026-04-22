---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *cheminAccès* )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Nom ou chemin d’accès complet du fichier de données à créer |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Modifié|
|6.8|Créé|

</details>
</div>

## Description 

<!--REF #_command_.CREATE DATA FILE.Summary-->La commande **CREATE DATA FILE** permet de créer un nouveau fichier de données sur disque et de remplacer à la volée le fichier de données ouvert par l’application 4D.<!-- END REF--> 

Le fonctionnement général de cette commande est identique à celui de la commande [OPEN DATA FILE](../commands/open-data-file), à la différence près que le nouveau fichier de données désigné par le paramètre *cheminAccès* est créé juste après la réouverture du fichier de structure.

Avant de lancer l’opération, la commande vérifie que le chemin spécifié ne correspond pas à un fichier existant.

**4D Server :** A compter de 4D v13, cette commande peut être exécutée avec 4D Server. Dans ce contexte, elle effectue en interne un appel à [QUIT 4D](../commands/quit-4d) sur le serveur (entraînant l’apparition, sur chaque poste distant, d’une boîte de dialogue signalant que le serveur est en train de quitter) avant de créer le fichier désigné. 

## Voir aussi 

[OPEN DATA FILE](../commands/open-data-file)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 313 |
| Thread safe | yes |


