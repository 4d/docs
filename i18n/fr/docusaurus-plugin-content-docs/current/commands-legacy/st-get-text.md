---
id: st-get-text
title: ST Get text
slug: /commands/st-get-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get text.Syntax-->**ST Get text** ( {* ;} *objet* {; *débutSél* {; *finSél*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ Texte (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |
| Résultat | Text | &#8592; | Texte incluant les balises de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST Get text.Summary-->La commande **ST Get text** retourne le texte multistyle présent dans le champ ou la variable de texte désigné(e) par le paramètre *objet*.<!-- END REF--> 

##### 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l'exécution, si l'objet a le focus, la commande retourne les informations de l'objet en cours d'édition ; si l'objet n'a pas le focus, la commande retourne les informations de la source de données de l'objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l'exécution, la commande retourne les informations de la variable ou du champ.

##### 

La commande retourne le texte avec les éventuelles balises de style qui lui sont associées, ce qui permet par exemple de copier et coller du texte en conservant les styles. 

Les paramètres optionnels *débutSél* et *finSél* vous permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes. 

* si vous omettez *débutSél* et *finSél*, **ST Get text** retourne la totalité du texte contenu dans *objet*,
* si vous passez *débutSél* et *finSél*, **ST Get text** retourne la sélection de texte définie par ces bornes.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

Si les valeurs de *débutSél* et *finSél* sont égales ou si *débutSél* est supérieur à *finSél*, une erreur est retournée. 

#### Variables et ensembles système 

A l’issue de l’exécution de cette commande, la variable OK prend la valeur 1 si aucune erreur n’a été rencontrée et 0 dans le cas contraire. C’est le cas notamment lorsque l’évaluation des balises de style échoue (balise incorrecte ou manquante). 

A noter qu’en cas d’erreur, la variable n’est pas modifiée. Lorsqu’une erreur se produit sur une variable lors de l’évaluation du texte, 4D transforme le texte en texte brut ; par conséquent, les caractères <, > et & seront convertis en entités HTML.

#### Voir aussi 

[ST Get plain text](st-get-plain-text.md)  
[ST SET TEXT](st-set-text.md)  
[TEXT TO ARRAY](text-to-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1116 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


