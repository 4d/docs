---
id: st-freeze-expressions
title: ST FREEZE EXPRESSIONS
slug: /commands/st-freeze-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST FREEZE EXPRESSIONS.Syntax-->**ST FREEZE EXPRESSIONS** ( {* ;} *objet* {; *débutSél* {; *finSél*}}{; *} )<!-- END REF-->
<!--REF #_command_.ST FREEZE EXPRESSIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |
| * | Opérateur | &#8594;  | Si passé = mettre à jour les expressions avant de les figer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ST FREEZE EXPRESSIONS.Summary-->La commande **ST FREEZE EXPRESSIONS** "gèle" le contenu des expressions situées dans le champ ou la variable texte multistyle ou 4D Write Pro désigné(e) par le paramètre *objet*.<!-- END REF--> Cette action convertit les expressions dynamiques en textes statiques ou (zones 4D Write Pro uniquement) en images et supprime de l’*objet* les références associées. 

Pour plus d’informations sur les expressions 4D utilisables dans les zones de texte multistyle et les zones 4D Write Pro, reportez-vous à la description de la commande [ST INSERT EXPRESSION](st-insert-expression.md).

La commande **ST FREEZE EXPRESSIONS** vous permet de stocker la valeur calculée d’une expression à un instant donné. Cette opération est nécessaire notamment avant chaque utilisation de l’*objet* en-dehors de la zone (exportation, stockage dans un fichier disque, impression...) car seule la référence de l’expression est conservée dans la zone. 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Les paramètres optionnels *débutSél* et *finSél* vous permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style ou des références éventuellement présentes.

* Si vous passez *débutSél* et *finSél*, **ST FREEZE EXPRESSIONS** fige uniquement les expressions situées à l’intérieur de cette sélection.
* Si vous passez uniquement *débutSél* ou si la valeur de *finSél* est supérieure au nombre total de caractères dans l’objet, toutes les expressions entre *débutSél* et la fin du texte sont figées.
* Si vous omettez *débutSél* et *finSél*, toutes les expressions incluses dans la sélection utilisateur de *objet* sont figées.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0.

Par défaut, les expressions ne sont pas réévaluées avant d’être figées. Si vous souhaitez que les expressions soient recalculées puis figées, passez le second paramètre *\**.

**Note :** **ST FREEZE EXPRESSIONS** ne fige pas les expressions 4D Write Pro contenant *$wp\_pageNumber* ou *$wp\_pageCount*. Pour plus d'informations, veuillez consulter la section *Gérer des formules*.

#### Exemple 

Vous souhaitez insérer l’heure courante au début du texte et la figer avant de stocker l’enregistrement :

```4d
     //Insertion de l’heure au début du texte
 ST INSERT EXPRESSION(*;"StyledText_t";"Heure courante";1)
     //On fige l’expression
 ST FREEZE EXPRESSIONS(*;"StyledText_t";1)
```

#### Voir aussi 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  