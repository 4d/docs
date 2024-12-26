---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *laDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laDate | Date | &#8594;  | Date dont vous voulez extraire le mois |
| Résultat | Integer | &#8592; | Nombre indiquant le mois de date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Month of.Summary-->**Month of** retourne un nombre représentant le numéro du mois de *laDate*.<!-- END REF-->C'est le numéro du mois est retourné, et non son nom (reportez-vous à l'exemple ci-dessous).

Pour comparer la valeur retournée par cette fonction, 4D fournit les constantes prédéfinies suivantes, placées dans le thème "*Jours et mois*" :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| January   | Entier long | 1      |
| February  | Entier long | 2      |
| March     | Entier long | 3      |
| April     | Entier long | 4      |
| May       | Entier long | 5      |
| June      | Entier long | 6      |
| July      | Entier long | 7      |
| August    | Entier long | 8      |
| September | Entier long | 9      |
| October   | Entier long | 10     |
| November  | Entier long | 11     |
| December  | Entier long | 12     |

#### Exemple 1 

L'exemple suivant illustre l'utilisation de **Month of**. Les valeurs retournées sont assignées à la variable Résultat. Les commentaires fournissent les valeurs de Résultat :

```4d
 Résultat:=Month of(!25/12/96!) // Résultat vaut 12
 Résultat:=Month of(Current date) // Résultat prend la valeur du mois d'aujourd'hui
```

#### Exemple 2 

Reportez-vous à l'exemple de la fonction [Current date](current-date.md).

#### Voir aussi 

[Day of](day-of.md)  
[Year of](year-of.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 24 |
| Thread safe | &check; |


