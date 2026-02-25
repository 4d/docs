---
id: create-set
title: CREATE SET
slug: /commands/create-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET.Syntax-->**CREATE SET** ( {*laTable* ;} *ensemble* )<!-- END REF-->
<!--REF #_command_.CREATE SET.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle vous voulez créer un ensemble à partir de la sélection courante ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom du nouvel ensemble |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CREATE SET.Summary-->**CREATE SET** crée un nouvel ensemble, *ensemble*, pour *laTable*, et y place la sélection courante.<!-- END REF--> Le pointeur d'enregistrement courant de la table est sauvegardé avec *ensemble*. Si *ensemble* est passé à la commande [USE SET](../commands/use-set), la sélection courante et l'enregistrement courant sont restitués. Comme pour tout ensemble, il ne peut y avoir de tri, et lorsque *ensemble* est appelé, l'ordre par défaut est utilisé. Si un ensemble du même nom existe déjà, il est effacé et remplacé par le nouvel ensemble.

## Exemple 

L'exemple suivant crée un ensemble après qu'une recherche ait été effectuée, de manière à ce que l'ensemble puisse être stocké sur disque :

```4d
 QUERY([Personnes]) // L'utilisateur effectue une recherche
 CREATE SET([Personnes];"EnsembleRecherche") // Création d'un nouvel ensemble
 SAVE SET("EnsembleRecherche";"MaRecherche") // L'ensemble est stocké sur disque
```

## Voir aussi 

[CLEAR SET](../commands/clear-set)  
[CREATE EMPTY SET](../commands/create-empty-set)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 116 |
| Thread safe | yes |


