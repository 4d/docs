---
id: st-set-attributes
title: ST SET ATTRIBUTES
slug: /commands/st-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST SET ATTRIBUTES.Syntax-->**ST SET ATTRIBUTES** ( {* ;} *objet* ; *débutSél* ; *finSél* ; *nomAttribut* ; *valeurAttribut* {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} )<!-- END REF-->
<!--REF #_command_.ST SET ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ Texte (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la nouvelle sélection de texte |
| finSél | Integer | &#8594;  | Fin de la nouvelle sélection de texte |
| nomAttribut | Text | &#8594;  | Attribut à définir |
| valeurAttribut | Text, Integer | &#8594;  | Nouvelle valeur d’attribut |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST SET ATTRIBUTES.Summary-->La commande **ST SET ATTRIBUTES** permet de modifier un ou plusieurs attribut(s) de style dans le ou les objet(s) de formulaire désigné(s) par *objet*.<!-- END REF--> 

##### 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l'exécution, si l'objet a le focus, la commande s'applique uniquement à l'objet en cours d'édition et non à sa source de données (variable ou champ). Les modifications ne sont reportées dans la source (et donc dans les éventuels autres objets utilisant la même source) que lorsque l'objet en cours d'édition est validé via une perte de focus ou la touche **Entrée**. Si l'objet n'a pas le focus, la commande s'applique directement à la source de données et les modifications sont immédiatement répercutées aux éventuels autres objets utilisant la même source.   
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. La commande s'applique directement au champ ou à la variable et les modifications sont répercutées à tous les objets utilisant cette source, y compris l'objet ayant le focus. 

##### 

**Note :** Vous pouvez utiliser les attributs de style avec des champs de type Texte uniquement. Les champs de type Alpha ayant une longueur prédéfinie, l’ajout d’éventuelles balises de style entraînerait des pertes de données. 

La définition d’un attribut s’effectue via l’insertion ou la modification de balises HTML de style dans à l’intérieur du texte (pour plus d'informations sur ce point, reportez-vous au manuel *Mode Développement*). A noter que **ST SET ATTRIBUTES** insère des balises de style dans tous les cas, même si *objet* désigne des objets texte de formulaire n’ayant pas la propriété Multistyle.

Les paramètres *débutSél* et *finSél* permettent de désigner la sélection de texte à laquelle appliquer la ou les modification(s) de style à l’intérieur de l’*objet*. Passez dans *débutSél* la position du premier caractère à modifier et dans *finSél* la position plus un du dernier caractère à modifier. Vous pouvez passer 0 dans *finSél* afin de désigner automatiquement le dernier caractère du texte (passez 1 dans *débutSél* pour désigner le premier caractère).  
Si la valeur de *finSél* est supérieure au nombre de caractères de l’objet, tous les caractères entre *débutSél* et la fin du texte seront modifiés. Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable OK prend la valeur 0\.   
Les valeurs *débutSél* et *finSél* ne tiennent pas compte des balises de style éventuellement déjà présentes dans la zone. Elles sont évaluées sur la base du texte brut (texte duquel les balises de style ont été filtrées).  
4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

Passez dans les paramètres *nomAttribut* et *valeurAttribut* respectivement le nom et la valeur de l’attribut à modifier. Vous pouvez passer autant de paires attribut/valeur que vous souhaitez. Pour définir le paramètre *nomAttribut*, utilisez les constantes prédéfinies placées dans le thème *Attributs de texte multistyle*. La valeur à passer dans le paramètre *valeurAttribut* dépend du paramètre *nomAttribut* :

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

**Couleurs**  
Si vous passez la constante Attribute text color ou Attribute background color dans *nomAttribut*, vous devez passer dans *valeurAttribut* une chaîne contenant soit un nom de couleur HTML soit une valeur de couleur hexadécimale :  

| **Nom de couleur HTML** | **Valeur hexadécimale** |
| ----------------------- | ----------------------- |
| Aqua                    | #00FFFF                 |
| Black                   | #000000                 |
| Blue                    | #0000FF                 |
| Fushia                  | #FF00FF                 |
| Gray                    | #808080                 |
| Green                   | #008000                 |
| Lime                    | #00FF00                 |
| Maroon                  | #800000                 |
| Navy                    | #000080                 |
| Olive                   | #808000                 |
| Purple                  | #800080                 |
| Red                     | #FF0000                 |
| Silver                  | #C0C0C0                 |
| Teal                    | #008080                 |
| White                   | #FFFFFF                 |
| Yellow                  | #FFFF00                 |

#### Exemple 

Dans cet exemple, nous modifions la taille, la couleur de texte ainsi que les attributs gras et souligné des caractères 2 à 4 du champ :

```4d
 ST SET ATTRIBUTES([MaTable]MonChamp;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")
```

#### Variables et ensembles système 

A l’issue de l’exécution de cette commande, la variable OK prend la valeur 1 si aucune erreur n’a été rencontrée et 0 dans le cas contraire. C’est le cas notamment lorsque l’évaluation des balises de style échoue (balise incorrecte ou manquante). 

A noter qu’en cas d’erreur, la variable n’est pas modifiée. Lorsqu’une erreur se produit sur une variable lors de l’évaluation du texte, 4D transforme le texte en texte brut ; par conséquent, les caractères <, > et & seront convertis en entités HTML.

#### Voir aussi 

[FONT LIST](font-list.md)  
[ST GET ATTRIBUTES](st-get-attributes.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1093 |
| Thread safe | &cross; |
| Modifie les variables | OK |


