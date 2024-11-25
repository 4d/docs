---
id: insert-string
title: Insert string
slug: /commands/insert-string
displayed_sidebar: docs
---

<!--REF #_command_.Insert string.Syntax-->**Insert string** ( *source* ; *insertion* ; *positionDépart* ) : Text<!-- END REF-->
<!--REF #_command_.Insert string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Chaîne dans laquelle effectuer l'insertion |
| insertion | Text | &#8594;  | Chaîne à insérer dans source |
| positionDépart | Integer | &#8594;  | Position de l'insertion |
| Résultat | Text | &#8592; | Chaîne résultante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Insert string.Summary-->**Insert string** insère la chaîne de caractères alphanumériques *insertion* dans la chaîne *source* à partir de *position* et retourne la chaîne de caractères résultante.<!-- END REF--> La chaîne *insertion* est placée avant le caractère désigné par *position*.

Si *insertion* est une chaîne vide (""), **Insert string** retourne *source* inchangé.

Si *position* est supérieur à la longueur de *source*, *insertion* est ajouté à la fin de *source*. Si *position* est inférieur à un (1), *insertion* est inséré au début de *source*.

**Insert string** est différent de [Change string](change-string.md) puisque cette fonction insère des caractères au lieu de les remplacer.

#### Exemple 

L'exemple suivant illustre l'utilisation de **Insert string**. Les résultats sont affectés à la variable *vRésultat*.

```4d
 vRésultat:=Insert string("L'arbre";" vert";8) // vRésultat est égal à "L'arbre vert"
 vRésultat:=Insert string("Tale";"b";3) // vRésultat est égal à "Table"
 vRésultat:=Insert string("Indention";"ta";6) // vRésultat est égal à "Indentation"
```

#### Voir aussi 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Replace string](replace-string.md)  