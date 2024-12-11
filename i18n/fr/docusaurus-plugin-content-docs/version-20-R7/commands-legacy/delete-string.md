---
id: delete-string
title: Delete string
slug: /commands/delete-string
displayed_sidebar: docs
---

<!--REF #_command_.Delete string.Syntax-->**Delete string** ( *source* ; *positionDépart* ; *nbCars* ) : Text<!-- END REF-->
<!--REF #_command_.Delete string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Chaîne de départ |
| positionDépart | Integer | &#8594;  | Premier caractère à supprimer |
| nbCars | Integer | &#8594;  | Nombre de caractères à supprimer |
| Résultat | Text | &#8592; | Chaîne résultante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Delete string.Summary-->**Delete string** supprime *nbCars* dans *source* à partir de *positionDépart* et retourne la chaîne résultante.<!-- END REF-->retourne la même chaîne que *source* dans les cas suivants :

* *source* est une chaîne vide,
* *positionDépart* est supérieur à la longueur de *source*,
* *nbCars* est égal à zéro (0).

Si *positionDépart* est inférieur à un (1), les caractères sont supprimés à partir du début de la chaîne.

Si *positionDépart* \+ *nbCars* est supérieur ou égal à la longueur de *source*, les caractères sont supprimés à partir de *positionDépart* jusqu'à la fin de *source*.

#### Exemple 

L'exemple suivant illustre l'utilisation de **Delete string**. Les résultats sont affectés à la variable *vRésultat*.

```4d
 vRésultat:=Delete string("Lamborghini";6;6) // vRésultat est égal à "Lambo"
 vRésultat:=Delete string("Indentation";6;2) // vRésultat est égal à "Indention"
 vRésultat:=Delete string(var;3;32000) // vRésultat est égal aux deux premiers caractères de var
```

#### Voir aussi 

[Change string](change-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 232 |
| Thread safe | &check; |
| Interdite sur le serveur ||


