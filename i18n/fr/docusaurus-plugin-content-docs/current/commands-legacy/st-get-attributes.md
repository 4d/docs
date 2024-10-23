---
id: st-get-attributes
title: ST GET ATTRIBUTES
slug: /commands/st-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST GET ATTRIBUTES.Syntax-->**ST GET ATTRIBUTES** ( {* ;} *objet* ; *débutSél* ; *finSél* ; *nomAttribut* ; *valeurAttribut* {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} )<!-- END REF-->
<!--REF #_command_.ST GET ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection de texte |
| finSél | Integer | &#8594;  | Fin de la sélection de texte |
| nomAttribut | Integer | &#8594;  | Attribut à lire |
| valeurAttribut | Variable | &#8592; | Valeur courante de l’attribut |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ST GET ATTRIBUTES.Summary-->La commande **ST GET ATTRIBUTES** permet de récupérer la valeur courante d’un attribut de style dans une sélection de texte du ou des objet(s) de formulaire désigné(s) par *objet*.<!-- END REF--> 

##### 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l'exécution, si l'objet a le focus, la commande retourne les informations de l'objet en cours d'édition ; si l'objet n'a pas le focus, la commande retourne les informations de la source de données de l'objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l'exécution, la commande retourne les informations de la variable ou du champ.

##### 

Les paramètres *débutSél* et *finSél* permettent de désigner la sélection de texte de laquelle lire l’attribut de style. Passez dans *débutSél* la position du premier caractère et dans *finSél* la position plus un du dernier caractère de la sélection. Vous pouvez passer 0 dans *finSél* afin de désigner automatiquement le dernier caractère du texte (passez 1 dans *débutSél* pour désigner le premier caractère).  
Si les valeurs de *débutSél* et *finSél* sont égales ou si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), une erreur est retournée.   
Les valeurs *débutSél* et *finSél* ne tiennent pas compte des balises de style éventuellement déjà présentes dans la zone. Elles sont évaluées sur la base du texte brut (texte duquel les balises de style ont été filtrées). 4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

Passez dans le paramètre *nomAttribut* le nom de l’attribut à lire et dans le paramètre *valeurAttribut* une variable devant récupérer la valeur courante de l’attribut. Pour définir le paramètre *nomAttribut*, vous devez utiliser l’une des constantes du thème *Attributs de texte multistyle*. 

| Constante                     | Type        | Valeur | Comment                                                                                                                                |
| ----------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute background color    | Entier long | 8      | *valeurAttribut*\=Valeur hexadécimale ou nom de couleur HTML (Windows uniquement)                                                      |
| Attribute bold style          | Entier long | 1      | *valeurAttribut*\=0 : pas d'attribut gras pour la sélection<br/>*valeurAttribut*\=1 : attribut gras pour la sélection          |
| Attribute font name           | Entier long | 5      | *valeurAttribut*\=Nom de la famille de police (chaîne)                                                                                 |
| Attribute italic style        | Entier long | 2      | *valeurAttribut*\=0 : pas d'attribut italique pour la sélection<br/> *valeurAttribut*\=1 : attribut italique pour la sélection |
| Attribute strikethrough style | Entier long | 3      | *valeurAttribut*\=0 : pas d'attribut barré pour la sélection<br/>*valeurAttribut*\=1 : attribut barré pour la sélection        |
| Attribute text color          | Entier long | 7      | *valeurAttribut*\=Valeur hexadécimale ou nom de couleur HTML                                                                           |
| Attribute text size           | Entier long | 6      | *valeurAttribut*\=Nombre de points (numérique)                                                                                         |
| Attribute underline style     | Entier long | 4      | *valeurAttribut*\=0 : pas d'attribut souligné pour la sélection<br/> *valeurAttribut*\=1 : attribut souligné pour la sélection |

Vous pouvez passer autant de paires attribut/valeur que vous souhaitez.

Si la valeur de l’attribut *nomAttribut* est identique dans la totalité de la sélection, elle est retournée dans *valeurAttribut*. Si cette valeur est différente ou si *objet* ne contient pas de balises SPAN, les valeurs suivantes sont retournées :  

| **nomAttribut**               | **valeurAttribut si attribut hétérogène dans la sélection ou pas de balises SPAN** |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| Attribute background color    | FFFFFFFF                                                                           |
| Attribute bold style          | 2                                                                                  |
| Attribute font name           | "" (chaîne vide)                                                                   |
| Attribute italic style        | 2                                                                                  |
| Attribute strikethrough style | 2                                                                                  |
| Attribute text color          | FFFFFFFF                                                                           |
| Attribute text size           | \-1                                                                                |
| Attribute underline style     | 2                                                                                  |

#### Exemple 

Soit un champ \[Table\_1\]StyledText affiché dans un formulaire. L’objet comporte la propriété Multistyle et est nommé "StyledText\_t". Vous souhaitez récupérer le texte sélectionné ainsi que le statut de l’attribut Gras. Vous pouvez procéder de deux manières différentes, selon que vous utilisez le nom d’objet ou la référence de champ. 

* Utilisation du nom d’objet :

```4d
 $text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)
 ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)
```

* Utilisation du nom de champ :

```4d
 GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)
 $text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)
 ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)
```

#### Variables et ensembles système 

A l’issue de l’exécution de cette commande, la variable OK prend la valeur 1 si aucune erreur n’a été rencontrée et 0 dans le cas contraire. C’est le cas notamment lorsque l’évaluation des balises de style échoue (balise incorrecte ou manquante). 

A noter qu’en cas d’erreur, la variable n’est pas modifiée. Lorsqu’une erreur se produit sur une variable lors de l’évaluation du texte, 4D transforme le texte en texte brut ; par conséquent, les caractères <, > et & seront convertis en entités HTML.

#### Voir aussi 

[ST SET ATTRIBUTES](st-set-attributes.md)  