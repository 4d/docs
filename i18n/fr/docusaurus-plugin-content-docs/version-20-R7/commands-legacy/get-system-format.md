---
id: get-system-format
title: GET SYSTEM FORMAT
slug: /commands/get-system-format
displayed_sidebar: docs
---

<!--REF #_command_.GET SYSTEM FORMAT.Syntax-->**GET SYSTEM FORMAT** ( *format* ; *valeur* )<!-- END REF-->
<!--REF #_command_.GET SYSTEM FORMAT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| format | Integer | &#8594;  | Formatage système à lire |
| valeur | Text | &#8592; | Valeur de formatage définie dans le système |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->La commande **GET SYSTEM FORMAT** retourne la valeur courante de plusieurs paramètres régionaux définis dans le système d’exploitation.<!-- END REF--> Cette commande permet de construire des formats personnalisés “automatiques” basés sur les préférences système. 

Passez dans le paramètre *format* le type de paramètre dont vous souhaitez connaître la valeur. Le résultat est retourné directement par le système dans le paramètre *valeur* sous forme de chaîne de caractères. Vous devez passer dans *format* une des constantes du thème “*Formatages système*”. Voici le descriptif de ces constantes :

| Constante                  | Type        | Valeur | Comment                                                                                            |
| -------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------- |
| Currency symbol            | Entier long | 2      | Symbole monétaire (ex : “$”)                                                                       |
| Date separator             | Entier long | 13     | Séparateur utilisé dans les formats de dates (ex : “/”)                                            |
| Decimal separator          | Entier long | 0      | Séparateur décimal (ex : “,”)                                                                      |
| Short date day position    | Entier long | 15     | Position du jour dans le format de date court : “1” = à gauche, “2” = au milieu, “3” = à droite    |
| Short date month position  | Entier long | 16     | Position du mois dans le format de date court : “1” = à gauche, “2” = au milieu, “3” = à droite    |
| Short date year position   | Entier long | 17     | Position de l’année dans le format de date court : “1” = à gauche, “2” = au milieu, “3” = à droite |
| System date long pattern   | Entier long | 8      | Format d’affichage de date long sous la forme “dddd MMMM yyyy”                                     |
| System date medium pattern | Entier long | 7      | Format d’affichage de date abrégé sous la forme “dddd MMMM yyyy”                                   |
| System date short pattern  | Entier long | 6      | Format d’affichage de date court sous la forme “dddd MMMM yyyy”                                    |
| System time AM label       | Entier long | 18     | Libellé additionnel des heures d’avant midi dans les formats sur 12 heures (ex : “Matin”)          |
| System time long pattern   | Entier long | 5      | Format d’affichage d’heure long sous la forme “HH:mm:ss”                                           |
| System time medium pattern | Entier long | 4      | Format d’affichage d’heure abrégé sous la forme “HH:mm:ss”                                         |
| System time PM label       | Entier long | 19     | Libellé additionnel des heures après midi dans les formats sur 12 heures (ex : “Après-Midi”)       |
| System time short pattern  | Entier long | 3      | Format d’affichage d’heure court sous la forme “HH:mm:ss”                                          |
| Thousand separator         | Entier long | 1      | Séparateur de milliers (ex : “ ”)                                                                  |
| Time separator             | Entier long | 14     | Séparateur utilisé dans les formats d’heures (ex : “:”)                                            |

#### Voir aussi 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 994 |
| Thread safe | &check; |
| Interdite sur le serveur ||


