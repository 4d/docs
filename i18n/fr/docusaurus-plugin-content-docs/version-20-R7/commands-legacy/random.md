---
id: random
title: Random
slug: /commands/random
displayed_sidebar: docs
---

<!--REF #_command_.Random.Syntax-->**Random**  : Integer<!-- END REF-->
<!--REF #_command_.Random.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre aléatoire |

<!-- END REF-->

#### Description 

<!--REF #_command_.Random.Summary-->**Random** retourne une valeur entière aléatoire comprise entre 0 et 32 767 (inclus).<!-- END REF-->

Pour que la valeur aléatoire soit située dans un intervalle donné, utilisez la formule suivante :

```4d
 (Random%(fin-début+1))+début
```

La valeur *début* est le premier nombre de l'intervalle, *fin* est le dernier. 

#### Exemple 

L'exemple suivant assigne une valeur entière aléatoire entre 10 et 30 à la variable *vRésultat* :

```4d
 vRésultat:=(Random% 21)+10
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 100 |
| Thread safe | &check; |
| Interdite sur le serveur ||


