---
id: set-real-comparison-level
title: SET REAL COMPARISON LEVEL
slug: /commands/set-real-comparison-level
displayed_sidebar: docs
---

<!--REF #_command_.SET REAL COMPARISON LEVEL.Syntax-->**SET REAL COMPARISON LEVEL** ( *epsilon* )<!-- END REF-->
<!--REF #_command_.SET REAL COMPARISON LEVEL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| epsilon | Real | &#8594;  | Valeur epsilon pour les comparaisons d'égalité des réels |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET REAL COMPARISON LEVEL.Summary-->La commande **SET REAL COMPARISON LEVEL** définit la valeur *epsilon* utilisée par 4D lors d'une comparaison d'égalité des valeurs et expressions de type Réel.<!-- END REF-->

Comme un ordinateur effectue des calculs approximatifs sur les réels, les tests sur l'égalité de valeurs réelles doivent tenir compte de cette approximation. Pour cela, 4D, lorsqu'il compare des valeurs réelles, teste en fait si la différence entre les deux valeurs est supérieure ou non à une certaine valeur. Cette valeur s'appelle l'**epsilon** et fonctionne de la manière suivante :   
Soient deux valeurs réelles *a* et *b*. Si [Abs](abs.md)(a-b) est supérieur à l'epsilon, les valeurs sont considérées comme différentes ; sinon, elles sont déclarées égales.  
Par défaut, 4D fixe la valeur epsilon à 10 à la puissance moins 6 (10^-6). Exemples :

* *0,00001=0,00002* retourne Faux car la différence *0,00001* est supérieure à *10^-6*.
* *0,000001=0,000002* retourne Vrai car la différence *0,000001* n'est pas supérieure à *10^-6*.
* *0,000001=0,000003* retourne Faux car la différence *0,000002* est supérieure à *10^-6*.

A l'aide de **SET REAL COMPARISON LEVEL**, vous pouvez augmenter ou réduire la valeur epsilon, en fonction de vos besoins. 

**Note :** La commande n'aura pas d'effet si *epsilon* \> 10^-3 ou si *epsilon* < 0.

Modifier l'epsilon affecte seulement la comparaison d'égalité des réels. Cela n'a pas d'effet sur les calculs et l'affichage des valeurs réelles.

**ATTENTION :** Cette commande doit être utilisée dans des cas spécifiques, comme par exemple un tri sur un champ dont les valeurs sont inférieures à 10^-6\. En général, vous n'avez pas besoin de modifier la valeur par défaut d'epsilon.

**Note :** La commande **SET REAL COMPARISON LEVEL** n'a pas d'effet sur les recherches et les tris effectués avec les champs de type réel. Elle s'applique uniquement au langage de 4D.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 623 |
| Thread safe | &check; |
| Interdite sur le serveur ||


