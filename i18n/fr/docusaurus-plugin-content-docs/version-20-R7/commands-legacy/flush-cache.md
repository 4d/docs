---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** {( taille | * )}<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| taille &#124; * | Réel, Opérateur | &#8594;  | * pour vider le cache, ou nombre d'octets minimum de libération du cache |

<!-- END REF-->

#### Description 

<!--REF #_command_.FLUSH CACHE.Summary-->La commande **FLUSH CACHE** sauvegarde immédiatement le cache de données sur le disque.<!-- END REF--> Toutes les modifications apportées à la base sont alors stockées sur disque.

Par défaut, cette commande n'affecte pas le contenu courant du cache, ce qui signifie que les données qu'il contient restent utilisables lors des accès en lecture ultérieurs. Optionnellement, vous pouvez passer un paramètre pour le modifier :

* passez *\** pour sauvegarder le cache et vider entièrement le cache de la mémoire,
* passez une valeur pour sauvegarder le cache et libérer au minimum le nombre *taille* d'octets dans le cache.

**Note :** Passer un paramètre à cette commande est à envisager uniquement pour effectuer des tests. Pour des raisons de performances, il est fortement déconseillé de vider le cache en environnement de production.

En temps normal, vous n'avez pas à appeler cette commande, car 4D sauvegarde régulièrement les modifications. Il est préférable d'utiliser l'option **Ecriture cache toutes les X mn**/**secondes** (option de la page [Base de données](https://developer.4d.com/docs/fr/settings/database/) des Propriétés de la base), qui spécifie les intervalles de sauvegarde des données, afin de contrôler l'écriture du cache de données sur le disque. Il est recommandé d'utiliser la valeur par défaut, qui est de 20 secondes. Notez également que le paramètre Cache flush periodicity peut être utilisé avec les commandes [SET DATABASE PARAMETER](set-database-parameter.md) et [Get database parameter](get-database-parameter.md) pour fixer ou lire cet intervalle.

#### Voir aussi 

[Get database parameter](get-database-parameter.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 297 |
| Thread safe | &check; |


