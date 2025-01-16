---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limite* )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| limite | Integer | &#8594;  | Nombre limite d'enregistrements ou 0 pour nombre illimité |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY LIMIT.Summary-->La commande **SET QUERY LIMIT** vous permet d'indiquer à 4D d'arrêter toutes les recherches suivant l'appel de cette commande dans le process courant dès que le nombre d'enregistrements défini dans *limite* a été atteint.<!-- END REF--> 

Si, par exemple, *limite* est égal à 1, les recherches s'arrêteront dès qu'un enregistrement sera trouvé selon les conditions de la recherche. 

Pour que les recherches soient de nouveau sans limite, appelez **SET QUERY LIMIT** en fixant le paramètre *limite* à 0.

**Attention :** **SET QUERY LIMIT** affecte toutes les recherches dans le process courant. N'oubliez pas d'associer toujours un appel à **SET QUERY LIMIT**(limite) (lorsque *limite>0*) à un appel à **SET QUERY LIMIT**(0) ultérieur pour rétablir les recherches sans limite.

**SET QUERY LIMIT** modifie uniquement le comportement des commandes de recherche, c'est-à-dire :

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

En revanche, **SET QUERY LIMIT** n'affecte pas les autres commandes qui modifient la sélection courante d'une table telles que [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), etc.

#### Exemple 1 

Pour effectuer une recherche qui correspond à la formule “...trouver dix clients avec lesquels les ventes sont supérieures à 1MF...”, écrivez le code suivant :

```4d
 SET QUERY LIMIT(10)
 QUERY([Clients];[Clients]Ventes>1000000)
 SET QUERY LIMIT(0)
```

#### Exemple 2 

Référez-vous au deuxième exemple de la commande [SET QUERY DESTINATION](set-query-destination.md).

#### Voir aussi 

[Get query limit](get-query-limit.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY DESTINATION](set-query-destination.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 395 |
| Thread safe | &check; |


