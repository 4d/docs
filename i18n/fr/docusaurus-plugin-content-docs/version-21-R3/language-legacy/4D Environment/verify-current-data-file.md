---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** {( *objets* ; *options* ; *méthode* {; *tabTables* {; *tabChamps*}} )}<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objets | Integer | &#8594;  | Objets à vérifier |
| options | Integer | &#8594;  | Options de vérification |
| méthode | Text | &#8594;  | Nom de la méthode 4D de rétro-appel |
| tabTables | Integer array | &#8594;  | Numéros des tables à vérifier |
| tabChamps | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Numéros des index à vérifier |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|15 R3|Modifié|
|11 SQL Release 4|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->La commande **VERIFY CURRENT DATA FILE** effectue une vérification structurelle des objets contenus dans le fichier de données actuellement ouvert par 4D.<!-- END REF--> 

Cette commande a un fonctionnement identique à celui de la commande [VERIFY DATA FILE](../commands/verify-data-file), à la différence près qu’elle s’applique uniquement au fichier de données courant de la base de données ouverte. Elle ne nécessite donc pas de paramètres désignant la structure et les données.  
Reportez-vous à la commande [VERIFY DATA FILE](../commands/verify-data-file) pour la description des paramètres.

Si vous passez directement la commande **VERIFY CURRENT DATA FILE** sans aucun paramètre, la vérification est effectuée avec les valeurs par défaut des paramètres :

* *objets* \= Tout vérifier (= valeur 16)
* *options* \= 0 (l’historique est créé mais n'est pas horodaté)
* *méthode* \= ""
* *tabTables* et *tabChamps* sont omis.

Lorsque cette commande est exécutée, le cache de données est écrit sur le disque et toutes les opérations accédant aux données sont bloquées durant la vérification.

Si un fichier d'historique a été généré, son chemin complet est retourné dans la variable système *Document*. 

## Variables et ensembles système 

Si la vérification n'est pas effectuée, une erreur est générée et la variable système OK est mise à 0. Si un fichier journal a été généré, son chemin d'accès complet est renvoyé dans la variable système Document.

## Voir aussi 

[VERIFY DATA FILE](../commands/verify-data-file)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1008 |
| Thread safe | yes |
| Modifie les variables | OK, Document, error |


