---
id: parse-formula
title: Parse formula
slug: /commands/parse-formula
displayed_sidebar: docs
---

<!--REF #_command_.Parse formula.Syntax-->**Parse formula** ( *formule* {; *options*}{; *messageErr*} ) : Text<!-- END REF-->
<!--REF #_command_.Parse formula.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| formule | Text | &#8594;  | Texte brut de la formule |
| options | Integer | &#8594;  | Instructions d'entrée / sortie |
| messageErr | Text | &#8592; | Message d'erreur (chaîne vide si pas d'erreur) |
| Résultat | Text | &#8592; | Formule avec transformation (texte brut) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Parse formula.Summary-->La commande **Parse formula** inspecte le contenu de la *formule* 4D, vérifie sa syntaxe, et la retourne sous une forme normalisée.<!-- END REF--> Cette opération permet à la formule de rester valide dans le cas où un élément du langage 4D ou de la structure est renommé (commande, constante, table, champ ou plug-in 4D). 

Vous pouvez utiliser **Parse formula** pour évaluer et traduire les formules de différentes manières : 

* Les noms "réels" de tables et de champs peuvent être convertis en noms "virtuels\*" (noms personnalisés) ou en équivalents *tokenisé*s\*\*.
* Les équivalents tokenisés des tables/champs peuvent être convertis en noms "virtuels" ou "réels".
* Les noms "virtuels" des tables/champs peuvent être convertis en noms "réels" ou en équivalents *tokenisé*s.
* Les éléments du langage 4D peuvent être convertis en équivalents tokenisés du langage 4D.
* Les équivalents tokenisés du langage 4D peuvent être convertis en éléments du langage 4D.

**\** Les noms de la structure virtuelle sont définis à l'aide de commandes [SET TABLE TITLES](set-table-titles.md) et [SET FIELD TITLES](set-field-titles.md) (utilisées avec le paramètre \*).* 

**\*\** Les* équivalents tokenisés *sont les éléments du langage 4D et de la structure exprimés en texte brut et avec la* syntaxe tokenisée*, comme illustré ci-dessous* *(voir aussi la page* *Utiliser des tokens dans les formules) :* 

```RAW
[Table:3]Field:1+Chaine:C10(1)
```

Passez dans le paramètre *formule* une formule 4D en texte brut. Elle peut utiliser des noms réels ou virtuels ainsi que des équivalents tokenisés. 

Quels que soient les types de noms utilisés dans *formule*, par défaut **Parse formula** retourne les noms réels des éléments de langage 4D ou de structure sans tokens. Le paramètre optionnel *options* vous permet d'indiquer comment la *formule* est exprimée et/ou doit être retournée. Vous pouvez passer dans ce paramètre une ou plusieurs des constantes suivantes du thème *Formules* (vous pouvez combiner des constantes afin d'indiquer simultanément les formats d'entrée et de sortie de la formule. 

  
| Constante                          | Valeur | Comment                                                                                                                              |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Formula in with virtual structure  | 1      | La formule utilise les noms de la structure virtuelle (noms personnalisés). Par défaut, la formule retournée utilise les noms réels. |
| Formula out with virtual structure | 2      | La formule doit être retournée avec les noms de la structure virtuelle (noms personnalisés).                                         |
| Formula out with tokens            | 4      | La formule doit être retournée avec des équivalents tokenisés (ex. : Cxx).                                                           |

  
Si une erreur de syntaxe est détectée dans la *formule*, un message d'erreur est retourné dans le paramètre optionnel *messageErr*. Si aucune erreur n'est détectée, une chaîne vide est retournée. 

#### Exemple 1 

```4d
 ARRAY TEXT($t1;1)
 ARRAY LONGINT($t2;1)
 $t1{1}:="Table virtuelle"
 $t2{1}:=1
 SET TABLE TITLES($t1;$t2;*)
 
 ARRAY TEXT($tf1;1)
 ARRAY LONGINT($tf2;1)
 $tf1{1}:="Champ virtuel"
 $tf2{1}:=2
 SET FIELD TITLES([Table_1];$tf1;$tf2;*)
 
  //Structure virtuelle vers équivalents réels
 $parsedFormula:=Parse formula("[Table virtuelle]Champ virtuel";Formula in with virtual structure;$errorMessage)
  //retourne [Table_1]Champ_2
 
  //Noms de champ et de table réels vers leur équivalent dans la structure virtuelle
 $parsedFormula:=Parse formula("[Table_1]Champ_2";Formula out with virtual structure;$errorMessage)
  //retourne [Table virtuelle]Champ virtuel
 
  //Noms de champ et de table vers leur équivalent tokenisés
 $parsedFormula:=Parse formula("Chaine([Table_1]Champ_2)";Formula out with tokens;$errorMessage)
  //retourne Chaine:C10([Table_1:1]Champ_2:2)
```

#### Exemple 2 

```4d
  //demander à l'utilisateur de saisir sa formule
 $formula:=""
 EDIT FORMULA([Table_1];$formula)
 
  //sauvegarder la formule de l'utilisateur pour une utilisation ultérieure
 CREATE RECORD([users_preferences])
 $persistentFormula:=Parse formula($formula;Formula out with tokens)
 [users_preferences]formula:=$persistentFormula
 SAVE RECORD([users_preferences])
 
  //plus tard : exécution de la formule
 CREATE RECORD([Table_1])
 EXECUTE FORMULA([users_preferences]formula)
```

#### Voir aussi 

[Formula from string](formula-from-string.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
*Utiliser des tokens dans les formules*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1576 |
| Thread safe | &check; |
| Interdite sur le serveur ||


