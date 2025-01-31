---
id: is-data-file-locked
title: Is data file locked
slug: /commands/is-data-file-locked
displayed_sidebar: docs
---

<!--REF #_command_.Is data file locked.Syntax-->**Is data file locked**  : Boolean<!-- END REF-->
<!--REF #_command_.Is data file locked.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = fichier/segment verrouillé Faux = fichier/segment non verrouillé |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is data file locked.Summary-->La commande **Is data file locked** retourne Vrai si le fichier de données de la base ouverte ou l’un de ses segments au moins est verrouillé — c’est-à-dire, protégé en écriture.<!-- END REF--> 

Placée par exemple dans la , cette commande permet de prévenir tout risque d’ouverture fortuite d’un fichier de données verrouillé. 

#### Exemple 

Cette méthode empêchera l’ouverture de la base si le fichier de données est verrouillé : 

```4d
 If(Is data file locked)
    ALERT("Le fichier de données est verrouillé. Impossible d’ouvrir la base.")
    QUIT 4D
 End if
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 716 |
| Thread safe | &check; |


