---
id: character-code
title: Character code
slug: /commands/character-code
displayed_sidebar: docs
---

<!--REF #_command_.Character code.Syntax-->**Character code** ( *unCaractère* ) : Integer<!-- END REF-->
<!--REF #_command_.Character code.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| unCaractère | Text | &#8594;  | Caractère dont vous voulez obtenir le code |
| Résultat | Integer | &#8592; | Code du caractère |

<!-- END REF-->

#### Description 

<!--REF #_command_.Character code.Summary-->La commande **Character code** retourne le code Unicode UTF-16 (compris entre 1 et 65535) de *unCaractère*.<!-- END REF-->

Si la chaîne *unCaractère* comporte plus d'un caractère, **Character code** retourne uniquement le code du premier caractère.

La fonction **Character code** est l'inverse de [Char](char.md). Elle retourne le caractère désigné par un code UTF-16.

#### Exemple 1 

Les caractères majuscules et minuscules ne sont pas différenciés lors d'une comparaison ou d'une recherche. Vous pouvez utiliser la fonction Code de caractere si vous souhaitez établir une distinction entre les caractères majuscules et les minuscules.  
En effet, cette ligne retourne VRAI :

```4d
 ("A"="a")
```

En revanche, cette ligne retourne FAUX :

```4d
 (Character code("A")=Character code("a"))
```

#### Exemple 2 

L'exemple suivant retourne le code du premier caractère de la chaîne *"ABC"* :

```4d
 RécupCode:=Character code("ABC") // RécupCode prend la valeur 65, le code de caractère de A
```

#### Exemple 3 

Le code suivant :

```4d
 For($vlCar;1;Length(vtText))
    Case of
       :(vtText[[$vlCar]]=Char(Carriage return))
  // Faire quelque chose
       :(vtText[[$vlCar]]=Char(Tab))
  // Faire autre chose
       :(...)
  // ...
    End case
 End for
```

... lorsqu'il est utilisé de nombreuses fois avec des textes de taille importante, s'exécutera plus vite, une fois compilé, s'il est écrit ainsi :

```4d
 For($vlCar;1;Length(vtText))
    $vlCode:=Character code(vtText[[$vlCar]])
    Case of
       :($vlCode=Carriage return)
  // Faire quelque chose
       :($vlCode=Tab)
  // Faire autre chose
       :(...)
  // ...
    End case
 End for
```

... et ce, pour deux raisons principales : il ne référence un caractère qu'une seule fois par itération, et compare des entiers longs et non des chaînes de caractères lorsqu'il teste la présence de retours chariot et de tabulations. Nous vous conseillons d'employer cette technique lorsque vous travaillez avec des caractères standard tels que des Retours chariot et des Tabulations. 

#### Voir aussi 

[Char](char.md)  
*Symboles d'indice de chaîne*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 91 |
| Thread safe | &check; |
| Interdite sur le serveur ||


