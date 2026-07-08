---
id: resume-indexes
title: RESUME INDEXES
slug: /commands/resume-indexes
displayed_sidebar: docs
---

<!--REF #_command_.RESUME INDEXES.Syntax-->**RESUME INDEXES** ( *laTable* : Table {; *} )<!-- END REF-->
<!--REF #_command_.RESUME INDEXES.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle réactiver les index |
| * | Opérateur | &#8594;  | Si passé = indexation asynchrone |
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

<!--REF #_command_.RESUME INDEXES.Summary-->La commande **RESUME INDEXES** réactive tous les index de *laTable* s’ils ont été préabalement suspendus via la commande [PAUSE INDEXES](../commands/pause-indexes).<!-- END REF--> Si les index de *laTable* n’étaient pas suspendus, la commande ne fait rien. 

Dans la plupart des cas, l’exécution de cette commande provoquera la reconstruction des index de *laTable*.   
Si vous passez le paramètre optionnel *\**, la reconstruction des index sera effectuée en mode asynchrone. Ce mode signifie que la méthode appelant la commande poursuivra son exécution après cet appel, que l’indexation soit terminée ou non. Si vous omettez ce paramètre, la reconstruction des index bloquera l’exécution de la méthode jusqu’à ce que l’opération soit terminée. 

La commande **RESUME INDEXES** ne peut être appelée que depuis 4D Server ou un 4D local. Si cette commande est exécutée depuis un poste 4D distant, l’erreur -10513 est générée. Cette erreur peut être interceptée par une méthode installée par la commande [ON ERR CALL](../commands/on-err-call).

## Voir aussi 

[CREATE INDEX](../commands/create-index)  
[PAUSE INDEXES](../commands/pause-indexes)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1294 |
| Thread safe | yes |


