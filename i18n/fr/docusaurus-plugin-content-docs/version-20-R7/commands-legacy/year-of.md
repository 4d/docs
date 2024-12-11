---
id: year-of
title: Year of
slug: /commands/year-of
displayed_sidebar: docs
---

<!--REF #_command_.Year of.Syntax-->**Year of** ( *date* ) : Integer<!-- END REF-->
<!--REF #_command_.Year of.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#8594;  | Date dont vous voulez extraire l'année |
| Résultat | Integer | &#8592; | Nombre indiquant l'année de date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Year of.Summary-->**Year of** retourne un nombre indiquant l'année de *laDate*.<!-- END REF-->

#### Exemple 1 

L'exemple suivant illustre l'utilisation de **Year of**. Les résultats sont assignés à la variable *Résultat* : 

```4d
 Résultat:=Year of(!25/12/96!) // Résultat prend la valeur 1996
 Résultat:=Year of(!25/12/1996!) // Résultat prend la valeur 1996
 Résultat:=Year of(!25/12/1896!) // Résultat prend la valeur 1896
 Résultat:=Year of(!25/12/2096!) // Résultat prend la valeur 2096
 Résultat:=Year of(Current date) // Résultat prend comme valeur l'année de la date d'aujourd'hui
```

#### Exemple 2 

Reportez-vous à l'exemple de la fonction [Current date](current-date.md). 

#### Voir aussi 

[Day of](day-of.md)  
[Month of](month-of.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 25 |
| Thread safe | &check; |
| Interdite sur le serveur ||


