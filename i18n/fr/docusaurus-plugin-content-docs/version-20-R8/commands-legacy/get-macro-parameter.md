---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *sélecteur* ; *paramTexte* )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#8594;  | Sélection à utiliser |
| paramText | Text | &#8592; | Texte récupéré |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->La commande **GET MACRO PARAMETER** retourne dans *paramTexte* une partie ou la totalité du texte de la méthode depuis laquelle elle a été appelée.<!-- END REF-->

Le paramètre *sélecteur* permet de définir le type d’information à récupérer. Vous pouvez passer l’une des constantes suivantes, placées dans le thème “*Environnement 4D*” :

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Full method text        | Entier long | 1      |
| Highlighted method text | Entier long | 2      |

Si vous passez Full method text dans *sélecteur*, la totalité du texte de la méthode sera retourné dans *paramTexte*. Si vous passez Highlighted method text dans *sélecteur*, seul le texte sélectionné dans la méthode sera retourné dans *paramTexte*.

#### Exemple 

Reportez-vous à l'exemple de [SET MACRO PARAMETER](set-macro-parameter.md).

#### Voir aussi 

[SET MACRO PARAMETER](set-macro-parameter.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 997 |
| Thread safe | &cross; |


