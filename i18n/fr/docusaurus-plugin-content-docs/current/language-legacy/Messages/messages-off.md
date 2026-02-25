---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17 R4|Modifié|
|11 SQL Release 3|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.MESSAGES OFF.Summary-->Les commandes **MESSAGES OFF** et [MESSAGES ON](../commands/messages-on) suppriment ou font apparaître les thermomètres de progression affichés par 4D lorsque le programme exécute des opérations de longue durée.<!-- END REF--> Par défaut, les messages sont affichés. 

Voici la liste des opérations qui peuvent provoquer l'affichage d'un thermomètre de progression : Application d'une formule, Génération d'un état rapide, Export de données, Import de données, Tri, Génération d'un graphe, Recherche, Recherche par formulaire, Recherche par formule.

Voici les commandes qui peuvent provoquer l'affichage d'un thermomètre de progression : 

[APPLY TO SELECTION](../commands/apply-to-selection)   
[QUERY](../commands/query)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[BUILD APPLICATION](../commands/build-application)  
  
[IMPORT TEXT](../commands/import-text)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[Max](../commands/max)  
[Min](../commands/min)  
[Average](../commands/average)   
[QR REPORT](../commands/qr-report)  
[REDUCE SELECTION](../commands/reduce-selection)  
[SCAN INDEX](../commands/scan-index)  
[RELATE MANY SELECTION](../commands/relate-many-selection)  
[Sum](../commands/sum)  
[ORDER BY](../commands/order-by)  
[ORDER BY FORMULA](../commands/order-by-formula)  
[DISTINCT VALUES](../commands/distinct-values) 

**Note 4D Server :** A compter de 4D Server v14 R3, les fenêtres de messages de progression ne sont plus affichées sur le serveur, ces opérations étant automatiquement listées dans la *Fenêtre d'administration de 4D Server* de la fenêtre d'administration. Si vous souhaitez forcer l'affichage de ces fenêtres de progression, vous devez appeler la commande [MESSAGES ON](../commands/messages-on) sur le serveur. 

## Exemple 

L'exemple suivant supprime les thermomètres de progression avant d'effectuer un tri, puis les rétablit après l'opération :

```4d
 MESSAGES OFF
 ORDER BY([Adresses];[Adresses]CP;>;[Adresses]Nom2;>)
 MESSAGES ON
```

## Voir aussi 

[MESSAGES ON](../commands/messages-on)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 175 |
| Thread safe | yes |


