---
id: spell-check-text
title: SPELL CHECK TEXT
slug: /commands/spell-check-text
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECK TEXT.Syntax-->**SPELL CHECK TEXT** ( *leTexte* ; *posErr* ; *longErr* ; *posVérif* ; *tabSuggest* )<!-- END REF-->
<!--REF #_command_.SPELL CHECK TEXT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leText | Text | &#8594;  | Texte à vérifier |
| posErr | Integer | &#8592; | Position du premier caractère du mot inconnu |
| longErr | Integer | &#8592; | Longueur du mot inconnu |
| posVérif | Integer | &#8594;  | Position de départ de la vérification |
| tabSuggest | Text array | &#8592; | Liste des suggestions |

<!-- END REF-->

#### Description 

<!--REF #_command_.SPELL CHECK TEXT.Summary-->La commande **SPELL CHECK TEXT** vérifie le contenu du paramètre *leTexte* à partir du caractère *posVérif* et retourne la position du premier mot inconnu rencontré (le cas échéant).<!-- END REF-->

La commande retourne la position du premier caractère de ce mot dans *posErr* et sa longueur dans *longErr*. Le tableau *tabSuggest* reçoit la ou les suggestion(s) de correction proposée(s) par le correcteur orthographique. 

Si la vérification démarre sans erreur et qu’un mot inconnu est rencontré, la variable système OK prend la valeur 0\. Si une erreur d’initialisation se produit lors de la vérification ou si aucun mot n’est inconnu, OK prend la valeur 1\. 

**Note OS X :** Sous OS X lorsque le correcteur natif est activé, cette commande ne prend pas en charge la correction grammaticale. 

#### Exemple 

On souhaite compter le nombre de fautes potentielles dans un texte :

```4d
 $pos:=1
 $errCount:=0
 ARRAY TEXT($tErrors;0)
 ARRAY TEXT($tSuggestions;0)
 Repeat
    SPELL CHECK TEXT($myText;$errPos;$errLong;$pos;$tSuggestions)
    If(OK=0)
       $errCount:=$errCount+1 // compteur de fautes
       $errorWord:=Substring($myText;$errPos;$errLong)
       APPEND TO ARRAY($tErrors;$errorWord) // tableau des fautes
       $pos:=$errPos+$errLong  //poursuite de la vérification
    End if
 Until(OK=1)
  // Au final $errCount=Size of array($tErrors)
  // fr: $errCount=Taille tableau($tErrors)
```

#### Voir aussi 

[SPELL ADD TO USER DICTIONARY](spell-add-to-user-dictionary.md)  
[SPELL CHECKING](spell-checking.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1215 |
| Thread safe | &cross; |
| Modifie les variables | OK |


