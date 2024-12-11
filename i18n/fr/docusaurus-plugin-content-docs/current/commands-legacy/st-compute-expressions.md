---
id: st-compute-expressions
title: ST COMPUTE EXPRESSIONS
slug: /commands/st-compute-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Syntax-->**ST COMPUTE EXPRESSIONS** ( {* ;} *objet* {; *débutSél* {; *finSél*}} )<!-- END REF-->
<!--REF #_command_.ST COMPUTE EXPRESSIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Summary-->La commande **ST COMPUTE EXPRESSIONS** met à jour les expressions 4D dynamiques situées dans le champ ou la variable de texte multistyle ou de 4D Write Pro désigné(e) par le paramètre *objet*.<!-- END REF--> 

Pour plus d’informations sur les expressions 4D utilisables dans les zone de texte multistyle ou une zone 4D Write Pro, reportez-vous à la description de la commande [ST INSERT EXPRESSION](st-insert-expression.md).

 La commande réévalue le résultat des expressions présentes dans l’*objet* en fonction du contexte courant et affiche le résultat obtenu. Par exemple, si l’expression insérée est l’heure, la valeur sera modifiée à chaque appel de la commande **ST COMPUTE EXPRESSIONS**. Les expressions sont également calculées :

* au moment de leur insertion
* au chargement de l’objet
* lorsqu’elles sont "figées" à l’aide de la commande [ST FREEZE EXPRESSIONS](st-freeze-expressions.md), si le deuxième paramètre \* est passé.

**ST COMPUTE EXPRESSIONS** ne modifie pas le texte stylé (contenant les balises *span*) mais uniquement le texte brut affiché dans *objet*. Les valeurs calculées ne sont pas stockées dans le texte stylé, seule leur référence y est stockée. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous passez une référence de champ ou de variable et non une chaîne. 

Il n’est pas nécessaire que *objet* ait le focus. En revanche, si *objet* désigne une zone de texte multistyle, il doit être inclus dans un formulaire, sinon la commande **ST COMPUTE EXPRESSIONS** n’a pas d’effet. 

**Note :** Si *objet* désigne un document 4D Write Pro, il sera analysé par la commande même s'il n'est pas ouvert dans un objet de formulaire (voir également *Expressions image*). 

Les paramètres optionnels *débutSél* et *finSél* vous permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style ou des références éventuellement présentes. A noter qu’une référence équivaut à un seul caractère. 

* Si vous passez *débutSél* et *finSél*, **ST COMPUTE EXPRESSIONS** met à jour uniquement les expressions situées à l’intérieur de cette sélection.
* Si vous passez uniquement *débutSél* ou si la valeur de *finSél* est supérieure au nombre total de caractères dans l’objet, toutes les expressions entre *débutSél* et la fin du texte sont calculées.
* Si vous omettez *débutSél* et *finSél*, toutes les expressions incluses dans la sélection utilisateur de *objet* sont calculées.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0\. 

#### Exemple 

Vous souhaitez mettre à jour les références incluses dans la sélection de texte :

```4d
 ST COMPUTE EXPRESSIONS(*;"monTexte";ST Start highlight;ST End highlight)
```

#### Voir aussi 

[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1285 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


