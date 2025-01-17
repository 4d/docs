---
id: day-number
title: Day number
slug: /commands/day-number
displayed_sidebar: docs
---

<!--REF #_command_.Day number.Syntax-->**Day number** ( *laDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Day number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laDate | Date | &#8594;  | Date dont vous souhaitez connaître le numéro du jour |
| Résultat | Integer | &#8592; | Numéro représentant le jour de la semaine auquel date correspond |

<!-- END REF-->

#### Description 

<!--REF #_command_.Day number.Summary-->La fonction **Day number** retourne un numéro représentant le jour de la semaine auquel *laDate* correspond.<!-- END REF-->Si une date nulle est passée à **Day number**, la fonction retourne 2\. 

4D fournit les constantes prédéfines suivantes, placées dans le thème "*Jours et mois*" :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Sunday    | Entier long | 1      |
| Monday    | Entier long | 2      |
| Tuesday   | Entier long | 3      |
| Wednesday | Entier long | 4      |
| Thursday  | Entier long | 5      |
| Friday    | Entier long | 6      |
| Saturday  | Entier long | 7      |

**Note :** **Day number** retourne une valeur comprise entre 1 et 7\. Pour obtenir le numéro du jour dans le sens "date du mois", utilisez la fonction [Day of](day-of.md). 

#### Exemple 

L'exemple suivant est une fonction qui retourne le jour d'aujourd'hui sous forme de chaîne :

```4d
 $Jour :=Day number(Current date) // $Jour prend comme valeur le numéro du jour courant
 Case of
    :($Jour =1)
       $0:="Dimanche"
    :($Jour =2)
       $0:="Lundi"
    :($Jour =3)
       $0:="Mardi"
    :($Jour =4)
       $0:="Mercredi"
    :($Jour =5)
       $0:="Jeudi"
    :($Jour =6)
       $0:="Vendredi"
    :($Jour =7)
       $0:="Samedi"
 End case
```

#### Voir aussi 

[Day of](day-of.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 114 |
| Thread safe | &check; |


