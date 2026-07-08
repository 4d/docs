---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limite* : Integer )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| limite | Integer | &#8594;  | Nombre limite d'enregistrements ou 0 pour nombre illimité |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SET QUERY LIMIT.Summary-->La commande **SET QUERY LIMIT** vous permet d'indiquer à 4D d'arrêter toutes les recherches suivant l'appel de cette commande dans le process courant dès que le nombre d'enregistrements défini dans *limite* a été atteint.<!-- END REF--> 

Si, par exemple, *limite* est égal à 1, les recherches s'arrêteront dès qu'un enregistrement sera trouvé selon les conditions de la recherche. 

Pour que les recherches soient de nouveau sans limite, appelez **SET QUERY LIMIT** en fixant le paramètre *limite* à 0.

**Attention :** **SET QUERY LIMIT** affecte toutes les recherches dans le process courant. N'oubliez pas d'associer toujours un appel à **SET QUERY LIMIT**(limite) (lorsque *limite>0*) à un appel à **SET QUERY LIMIT**(0) ultérieur pour rétablir les recherches sans limite.

**SET QUERY LIMIT** modifie uniquement le comportement des commandes de recherche, c'est-à-dire :

* [QUERY](../commands/query)
* [QUERY SELECTION](../commands/query-selection)
* [QUERY BY EXAMPLE](../commands/query-by-example)
* [QUERY BY FORMULA](../commands/query-by-formula)
* [QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)
* [QUERY BY SQL](../commands/query-by-sql)
* [QUERY WITH ARRAY](../commands/query-with-array)
* [QUERY SELECTION WITH ARRAY](../commands/query-selection-with-array)
* [QUERY BY ATTRIBUTE](../commands/query-by-attribute)
* [QUERY SELECTION BY ATTRIBUTE](../commands/query-selection-by-attribute)

En revanche, **SET QUERY LIMIT** n'affecte pas les autres commandes qui modifient la sélection courante d'une table telles que [ALL RECORDS](../commands/all-records), [RELATE MANY](../commands/relate-many), etc.

## Exemple 1 

Pour effectuer une recherche qui correspond à la formule “...trouver dix clients avec lesquels les ventes sont supérieures à 1MF...”, écrivez le code suivant :

```4d
 SET QUERY LIMIT(10)
 QUERY([Clients];[Clients]Ventes>1000000)
 SET QUERY LIMIT(0)
```

## Exemple 2 

Référez-vous au deuxième exemple de la commande [SET QUERY DESTINATION](../commands/set-query-destination).

## Voir aussi 

[Get query limit](../commands/get-query-limit)  
[QUERY](../commands/query)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY SQL](../commands/query-by-sql)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[QUERY WITH ARRAY](../commands/query-with-array)  
[SET QUERY DESTINATION](../commands/set-query-destination)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 395 |
| Thread safe | yes |


