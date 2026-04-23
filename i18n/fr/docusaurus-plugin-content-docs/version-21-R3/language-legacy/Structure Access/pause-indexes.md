---
id: pause-indexes
title: PAUSE INDEXES
slug: /commands/pause-indexes
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE INDEXES.Syntax-->**PAUSE INDEXES** ( *laTable* )<!-- END REF-->
<!--REF #_command_.PAUSE INDEXES.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle suspendre les index |
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

<!--REF #_command_.PAUSE INDEXES.Summary-->La commande **PAUSE INDEXES** désactive temporairement tous les index de *laTable*, hormis l’index de la clé primaire.<!-- END REF-->

Les index ne sont pas physiquement supprimés des données (fichier .4DIndx) et de la structure de la base (\_USER\_INDEXES, cf. *Tables système*), ils sont rendus invalides et par conséquent ne sont plus mis à jour. Lorsque les index sont désactivés, toutes les opérations effectuées sur *laTable* (recherches, tris, ajouts, modifications et suppressions d’enregistrements) n’utilisent plus les index.

Cette commande est principalement utile dans le contexte de l’importation ou la modification massive de données dans des tables comportant plusieurs index. 4D devant mettre à jour les index à chaque validation d’enregistrement, l’opération peut prendre beaucoup de temps. Désactiver les index au préalable permet d’accélérer significativement l’opération. 

Pour réactiver les index à l’issue de l’opération, il suffit d’appeler la commande [RESUME INDEXES](../commands/resume-indexes) sur *laTable*. 

**Note :** Il est possible d’obtenir un résultat similaire en utilisant les commandes [DELETE INDEX](../commands/delete-index) et [CREATE INDEX](../commands/create-index), avec toutefois des différences notables :

* il est nécessaire d’appeler [DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) pour chaque index de *laTable*.
* l'appel des commandes [DELETE INDEX](../commands/delete-index) / [CREATE INDEX](../commands/create-index) modifie le numéro interne de l'index, ce qui n'est pas le cas avec **PAUSE INDEXES** / [RESUME INDEXES](../commands/resume-indexes). La modification du numéro d'index entraînera la réindexation automatique des données en cas de changement du jeu de données.

Si vous appelez la commande **PAUSE INDEXES** sur une table puis quittez la base sans que la commande [RESUME INDEXES](../commands/resume-indexes) ait été exécutée sur cette table, tous les index de la table seront automatiquement reconstruits au prochain démarrage de la base. 

**Note :** Cette commande ne peut pas être exécutée depuis un 4D distant.

## Exemple 

Exemple de méthode d’import massif de données :

```4d
 PAUSE INDEXES([Articles])
 IMPORT DATA("GrosImport.txt") //Importation
 RESUME INDEXES([Articles])
```

## Voir aussi 

[DELETE INDEX](../commands/delete-index)  
[RESUME INDEXES](../commands/resume-indexes)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1293 |
| Thread safe | yes |


