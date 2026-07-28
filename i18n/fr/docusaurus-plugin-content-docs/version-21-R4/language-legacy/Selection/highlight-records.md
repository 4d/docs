---
id: highlight-records
title: HIGHLIGHT RECORDS
slug: /commands/highlight-records
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT RECORDS.Syntax-->**HIGHLIGHT RECORDS** ( {*laTable* }{;}{ *nomEnsemble* {; *}} )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT RECORDS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle marquer les enregistrements Si omis, table du formulaire courant |
| nomEnsemble | Text | &#8594;  | Ensemble d’enregistrements à marquer ou Ensemble Userset si ce paramètre est omis |
| * | Opérateur | &#8594;  | Inactiver le défilement automatique de la liste |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.HIGHLIGHT RECORDS.Summary-->La commande **HIGHLIGHT RECORDS** permet de “surligner” des enregistrements dans un formulaire en liste.<!-- END REF--> Cette opération est identique à la sélection en mode liste, par l’utilisateur, d’enregistrement(s) à l’aide des combinaisons **Maj+clic** ou **Ctrl+clic** (Windows) ou **Commande+clic** (macOS). La sélection courante n’est pas modifiée. 

**Note :** L’ensemble des enregistrements marqués est mis à jour après le redessinement des enregistrements, c’est-à-dire après la fin de l’exécution de toute la méthode d’appel — et non immédiatement après l’exécution de la commande **HIGHLIGHT RECORDS**.

Le paramètre *laTable* permet de désigner la table de laquelle les enregistrements doivent être “marqués”. Ce paramètre permet en particulier de marquer les enregistrements des sous-formulaires inclus — n’appartenant donc pas à la table courante (cf. ci-dessous).

* Si vous passez un nom d’ensemble valide dans le paramètre *nomEnsemble*, la commande s’appliquera aux enregistrements de cet ensemble pour la *table* définie.
* Si vous omettez le paramètre *nomEnsemble*, la commande marquera les enregistrements de l’ensemble système UserSet courant. Cet ensemble est géré uniquement en mode Développement et dans le cadre de l'appel des commandes [DISPLAY SELECTION](../commands/display-selection) /[MODIFY SELECTION](../commands/modify-selection)). Si vous souhaitez marquer les enregistrements d'un sous-formulaire, vous devez passer un nom de table et d'ensemble. Pour plus d'informations sur l'ensemble UserSet, reportez-vous à la section *Ensembles*.

Le paramètre *\**, s’il est passé, provoque l’inactivation de la fonction de défilement automatique de la liste si les enregistrements marqués ne sont pas visibles. Ce mécanisme autorise la gestion personnalisée du défilement via la commande [OBJECT SET SCROLL POSITION](../commands/object-set-scroll-position).

**Note :** Dans le cadre des sous-formulaires inclus, la commande **HIGHLIGHT RECORDS** ne fait rien si le sous-formulaire ne dispose pas de la propriété de sélection **Multilignes**. Dans ce contexte, pour marquer une ligne, vous devez utiliser la commande [GOTO SELECTED RECORD](../commands/goto-selected-record). 

## Exemple 

Dans un formulaire en liste affiché par la commande [MODIFY SELECTION](../commands/modify-selection), vous souhaitez que l’utilisateur puisse effectuer des recherches, sans que la sélection courante soit modifiée. Pour cela, placez un bouton **Chercher** dans le formulaire et associez-lui la méthode suivante :

```4d
 SET QUERY DESTINATION(Into set;"UserSet")
 QUERY
 SET QUERY DESTINATION(Into current selection)
 HIGHLIGHT RECORDS
```

Lorsque l’utilisateur clique sur le bouton, la boîte de dialogue standard de recherche apparaît. Une fois la recherche validée, les enregistrements trouvés sont surlignés, sans que la sélection courante ne soit modifiée.

## Voir aussi 

[GET HIGHLIGHTED RECORDS](../commands/get-highlighted-records)  
[OBJECT SET SCROLL POSITION](../commands/object-set-scroll-position)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 656 |
| Thread safe | no |


