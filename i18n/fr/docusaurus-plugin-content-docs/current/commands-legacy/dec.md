---
id: dec
title: Dec
slug: /commands/dec
displayed_sidebar: docs
---

<!--REF #_command_.Dec.Syntax-->**Dec** ( *nombre* ) : Real<!-- END REF-->
<!--REF #_command_.Dec.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombre | Real | &#8594;  | Valeur dont voulez obtenir la partie décimale |
| Résultat | Real | &#8592; | Partie décimale de nombre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Dec.Summary-->**Dec** retourne la partie décimale de *nombre*.<!-- END REF--> La valeur retournée est toujours positive ou nulle.

#### Exemple 

L'exemple suivant utilise une valeur monétaire exprimée sous forme numérique et en extrait les parties "euros" et "centimes". Si *vrMontant* valait 7,31, *vlEuros* vaudrait 7 et *vlCentimes* 31 : 

```4d
 vlEuros:=Int(vrMontant) // Extraire les euros
 vlCentimes:=Dec(vrMontant)*100 // Extraire la partie décimale et la multiplier par 100 pour obtenir un entier
```

#### Voir aussi 

[Int](int.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 9 |
| Thread safe | &check; |
| Interdite sur le serveur ||


