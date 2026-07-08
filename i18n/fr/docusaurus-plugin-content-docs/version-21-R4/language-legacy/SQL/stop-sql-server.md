---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.STOP SQL SERVER.Summary-->La commande **STOP SQL SERVER** stoppe le serveur SQL intégré de l’application 4D sur laquelle elle a été exécutée.<!-- END REF--> Si le serveur SQL était lancé, toutes les connexions SQL sont interrompues et le serveur n’accepte plus aucune requête SQL externe. Si le serveur SQL n’était pas lancé, la commande ne fait rien.

**Note :** Cette commande n’influe pas sur le fonctionnement du moteur SQL interne de 4D. Le moteur SQL toujours disponible pour les requêtes internes.

## Voir aussi 

[START SQL SERVER](../commands/start-sql-server)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 963 |
| Thread safe | no |


