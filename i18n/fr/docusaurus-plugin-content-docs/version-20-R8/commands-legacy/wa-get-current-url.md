---
id: wa-get-current-url
title: WA Get current URL
slug: /commands/wa-get-current-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get current URL.Syntax-->**WA Get current URL** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get current URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#8592; | URL actuellement chargé dans la zone Web |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get current URL.Summary-->La commande **WA Get current URL** retourne l’adresse URL de la page affichée dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> 

Si l’URL courant n’est pas disponible, la commande retourne une chaîne vide.

Si la page Web est entièrement chargée, la valeur retournée par la fonction est identique à celle de la variable "URL" associée à la zone Web. Si la page est en cours de chargement, les deux valeurs seront différentes : la fonction retourne l’URL entièrement chargé et la variable contient l’URL en cours de chargement.

#### Exemple 

La page affichée est l’URL "www.apple.com" et la page "www.4d.com" est en cours de chargement : 

```4d
 $url:=WA Get current URL(MaZoneW) //retourne "http://www.apple.com"
  //La variable URL associée contient "http://www.4d.com"
```

#### Voir aussi 

[WA OPEN URL](wa-open-url.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1025 |
| Thread safe | &cross; |


