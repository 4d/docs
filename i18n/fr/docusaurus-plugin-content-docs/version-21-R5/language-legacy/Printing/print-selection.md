---
id: print-selection
title: PRINT SELECTION
slug: /commands/print-selection
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SELECTION.Syntax-->**PRINT SELECTION** ( {*laTable* : Table} {; *} )<br/>**PRINT SELECTION** ( {*laTable* : Table} {; > : >} )<!-- END REF-->
<!--REF #_command_.PRINT SELECTION.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à laquelle appartient la sélection à imprimer ou Table par défaut si ce paramètre est omis |
| * &#124; > | Opérateur | &#8594;  | * pour supprimer les boîtes de dialogue d'impression ou > pour ne pas réinitialiser les paramètres d'impression |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|15 R5|Modifié|
|2004|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.PRINT SELECTION.Summary-->La commande **PRINT SELECTION** imprime la sélection courante de *laTable*.<!-- END REF--> Les enregistrements sont imprimés dans le formulaire sortie courant de la table du process en cours. **PRINT SELECTION** a le même effet que la commande **Imprimer...** du mode Développement. Si la sélection courante est vide, **PRINT SELECTION** ne fait rien.  
  
Par défaut, **PRINT SELECTION** affiche les boîtes de dialogue d'impression. Si l'utilisateur annule une des deux boîtes de dialogue, l'exécution de la commande est stoppée et l'état n'est pas imprimé.   
Vous pouvez supprimer leur affichage en utilisant soit le paramètre optionnel astérisque (\*), soit le paramètre optionnel “supérieur à” (>). 

* Le paramètre *\** provoque une impression avec les paramètres d'impression courants (paramètres par défaut ou définis par les commandes *\_o\_PAGE SETUP* et/ou [SET PRINT OPTION](../commands/set-print-option)).
* Le paramètre *\>* provoque en outre l’impression sans réinitialisation des paramètres d’impression. Ce paramètre est utile lorsque vous souhaitez exécuter successivement plusieurs appels à **PRINT SELECTION** (par exemple à l'intérieur d’une boucle) tout en conservant des paramètres d’impression personnalisés préalablement définis.

Pendant l'impression, la méthode du formulaire sortie et les méthodes objet du formulaire sont exécutées en fonction des événements sélectionnés dans les propriétés des formulaires et des objets, en mode Développement, ainsi que des événements effectivement générés :

* Un événement On Header est généré juste avant que la zone d'en-tête soit imprimée.
* Un événement On Printing Detail est généré juste avant que l'enregistrement soit imprimé.
* Un événement On Printing Break est généré juste avant qu'une zone de rupture soit imprimée.
* Un événement On Printing Footer est généré juste avant que la zone de pied de page soit imprimée.

Vous pouvez savoir si **PRINT SELECTION** est sur le point d'imprimer le premier en-tête en testant [Before selection](../commands/before-selection) pendant un événement On Header. Vous pouvez également savoir si **PRINT SELECTION** est sur le point d'imprimer le dernier pied de page, en testant [End selection](../commands/end-selection) pendant un événement On Printing Footer.  
Pour plus d'informations, reportez-vous à la description de ces commandes ainsi qu'aux commandes [Form event code](../commands/form-event-code) et [Level](../commands/level).

Si **PRINT SELECTION** est appelée au même moment par deux process différents, l'impression déclenchée par le second process attendra que le premier ait terminé.

Pour imprimer une sélection triée avec des sous-totaux ou des ruptures à l'aide de la commande **PRINT SELECTION**, vous devez d'abord trier la sélection. Puis vous devez inclure, dans chaque zone de rupture de l'état, une variable associée à une méthode objet assignant le sous-total à la variable. Vous pouvez aussi utiliser des fonctions statistiques ou arithmétiques telles que [Sum](../commands/sum) et [Average](../commands/average) pour assigner des valeurs aux variables. Pour plus d'informations, reportez-vous à la description des commandes [Subtotal](../commands/subtotal), [BREAK LEVEL](../commands/break-level) et [ACCUMULATE](../commands/accumulate).

:::note

Vous pouvez utiliser des [commandes statistiques](../../commands/theme/On_a_Series.md) comme [Sum](../commands/sum) et [Average](../commands/average) pour assigner des valeurs aux variables. Lorsque des fonctions statistiques sont utilisées dans un état, elles se comportent de manière spécifique car l'état lui-même doit charger chaque enregistrement. Lorsque vous utilisez ces fonctions dans un état, les valeurs retournées ne sont fiables qu'au niveau de rupture 0, et uniquement lorsque le traitement des ruptures est activé. Cela signifie qu'elles ne sont utiles qu'à la fin d'un état, après que tous les enregistrements ont été traités. Vous utiliserez ces fonctions uniquement dans une méthode objet d'une zone non saisissable incluse dans la zone de rupture B0.

:::

**Attention :** N'utilisez pas la commande [PAGE BREAK](../commands/page-break) avec **PRINT SELECTION**. [PAGE BREAK](../commands/page-break) est exclusivement réservée à une utilisation combinée avec la commande [Print form](../commands/print-form).

Après un appel à **PRINT SELECTION**, la variable OK prend la valeur 1 si l'impression s'est déroulée correctement. Si l'impression a été interrompue (par exemple l'utilisateur a cliqué sur un bouton Annuler dans les boîtes de dialogue d'impression), la variable OK prend la valeur *0* (zéro).

**4D Server :** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte :

* Veillez à ce qu’aucune boîte de dialogue n’apparaisse sur le poste serveur (sauf besoin spécifique). Pour cela, il est nécessaire d’appeler la commande avec le paramètre *\** ou *\>*.
* En cas de problème sur l’imprimante (plus de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré.

## Exemple 

L'exemple suivant sélectionne la totalité des enregistrements de la table \[Personnes\]. La commande [DISPLAY SELECTION](../commands/display-selection) est alors appelée pour afficher les enregistrements et permettre à l'utilisateur de sélectionner ceux qu'il souhaite imprimer. Enfin, les enregistrements choisis sont récupérés à l'aide de la commande [USE SET](../commands/use-set) et imprimés par **PRINT SELECTION** :

```4d
 ALL RECORDS([Personnes]) // Sélection de tous les enregistrements
 DISPLAY SELECTION([Personnes];*) // Affichage des enregistrements
 USE SET("UserSet") // Use uniquement les enregistrements sélectionnés par l'utilisateur
 PRINT SELECTION([Personnes]) // Imprimer les enregistrements sélectionnés
```

## Voir aussi 

[ACCUMULATE](../commands/accumulate)  
[BREAK LEVEL](../commands/break-level)  
[Level](../commands/level)  
[Subtotal](../commands/subtotal)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 60 |
| Thread safe | no |
| Modifie les variables | OK |


