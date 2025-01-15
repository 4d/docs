---
id: st-insert-expression
title: ST INSERT EXPRESSION
slug: /commands/st-insert-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT EXPRESSION.Syntax-->**ST INSERT EXPRESSION** ( {* ;} *objet* ; *expression* {; *débutSél* {; *finSél*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT EXPRESSION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | Object | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| expression | Text | &#8594;  | Expression et (optionnel) format à insérer |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST INSERT EXPRESSION.Summary-->La commande **ST INSERT EXPRESSION** insère une référence à l’*expression* dans le champ ou la variable de texte multistyle désigné(e) par le paramètre *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans le paramètre *expression* l’expression 4D à évaluer dans l’*objet*. Une expression 4D valide est une chaîne retournant une valeur. *expression* peut être un champ, une variable, une commande 4D, une instruction retournant une valeur, une méthode projet, etc. 

L’expression doit être passée entre guillemets (""). 

**Note :** Le paramètre *expression* ne peut pas être une variable de type Image.

Si *expression* retourne une valeur contenant des retours chariot et des tabulations, 4D formate le texte en fonction de l’objet hébergeant l’expression ; les caractères retours chariot sont interprétés comme des retours à la ligne. 

Vous pouvez formater l’expression en incluant une information de formatage dans le paramètre *expression*. Dans ce cas, le paramètre doit être de la forme :  

```RAW
"String(valeur;format)"
```

... où *valeur* contient l’expression elle-même et *format* le formatage à appliquer. Le paramètre *format* peut contenir les valeurs suivantes : 

* pour les numériques : tout format d’affichage numérique existant ou non, par exemple "###,##"
* pour les dates : un nombre désignant un format de date existant. Vous pouvez utiliser les constantes du thème "*Formats d'affichage des dates*", par exemple System date short.
* pour les heures : un nombre désignant un format d’heure existant. Vous pouvez utiliser les constantes du thème "*Formats d'affichage des heures*", par exemple System time short.

Par exemple :

```4d
 "Chaine([Table_1]Champ_1;Système date court)"
```

Par défaut, les **valeurs** des expressions sont affichées dans les zones de texte multistyle. Vous pouvez forcer l’affichage des **références** à l’aide de la commande [ST SET OPTIONS](st-set-options.md). 

Les paramètres optionnels *débutSél* et *finSél* permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes dans le texte. 

* Si vous passez uniquement *débutSél*, le résultat de l’expression est inséré à l'emplacement spécifié.
* Si vous omettez *débutSél* et *finSél*, le résultat de l’expression est inséré à l’emplacement du curseur.
* Si vous passez *débutSél* et *finSél*, **ST INSERT EXPRESSION** remplace le texte situé à l’intérieur de cette sélection par le résultat de l’*expression*. Si la valeur de *finSél* est supérieure au nombre total de caractères dans l’objet, tous les caractères entre *débutSél* et la fin du texte sont remplacés par le résultat de l’*expression*.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0.

#### Exemple 

Vous souhaitez remplacer le texte sélectionné par la valeur d'un champ :

```4d
 ST INSERT EXPRESSION(*;"myText";"[Clients]Nom";ST Start highlight;ST End highlight)
```

#### Voir aussi 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST Get expression](st-get-expression.md)  
[ST INSERT URL](st-insert-url.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1281 |
| Thread safe | &cross; |
| Modifie les variables | OK |


