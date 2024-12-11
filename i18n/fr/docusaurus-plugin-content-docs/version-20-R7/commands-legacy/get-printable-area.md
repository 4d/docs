---
id: get-printable-area
title: GET PRINTABLE AREA
slug: /commands/get-printable-area
displayed_sidebar: docs
---

<!--REF #_command_.GET PRINTABLE AREA.Syntax-->**GET PRINTABLE AREA** ( *hauteur* {; *largeur*} )<!-- END REF-->
<!--REF #_command_.GET PRINTABLE AREA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| hauteur | Integer | &#8592; | Hauteur de la zone d’impression |
| largeur | Integer | &#8592; | Largeur de la zone d’impression |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PRINTABLE AREA.Summary-->La commande **GET PRINTABLE AREA** retourne dans les paramètres *hauteur* et *largeur* la taille en pixels de la zone d’impression.<!-- END REF--> Cette taille dépend des paramètres d’impression courants, de l’orientation du papier, etc. 

Les tailles retournées ne varient pas d’une page à l’autre (après un saut de page par exemple). 

Associée à la commande [Get printed height](get-printed-height.md), cette commande est utile pour connaître le nombre de pixels disponibles pour l’impression, ou pour centrer un objet dans la page. 

Pour connaître la taille totale de la page, vous pouvez :

* soit ajouter aux valeurs retournées par cette commande les marges fournies par la commande [GET PRINTABLE MARGIN](get-printable-margin.md).
* soit utiliser la syntaxe suivante :

```4d
 SET PRINTABLE MARGIN(0;0;0;0) // Fixer la marge papier
 GET PRINTABLE AREA(hPapier;lPapier) // Taille du papier
```

**Note :** Pour plus d'informations sur la gestion des marges d'impression dans 4D, reportez-vous à la description de la commande [GET PRINTABLE MARGIN](get-printable-margin.md). 

#### Voir aussi 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Print form](print-form.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 703 |
| Thread safe | &check; |
| Interdite sur le serveur ||


