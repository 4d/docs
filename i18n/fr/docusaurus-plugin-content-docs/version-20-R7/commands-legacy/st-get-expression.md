---
id: st-get-expression
title: ST Get expression
slug: /commands/st-get-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST Get expression.Syntax-->**ST Get expression** ( {* ;} *objet* {; *débutSél* {; *finSél*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get expression.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |
| Résultat | Text | &#8592; | Libellé de l’expression |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST Get expression.Summary-->La commande **ST Get expression** retourne la première expression présente dans la sélection courante du champ ou de la variable de texte multistyle désigné(e) par le paramètre *objet*.<!-- END REF--> 

La commande retourne le libellé de l’expression tel qu’il a été inséré dans l’objet (par exemple "maméthode" ou "\[table1\]champ1"). La valeur courante de l’expression n’est pas retournée. 

**Note :** Cette commande retourne des noms "réels" pour les champs et les tables, même si une structure "virtuelle" a été définie à l'aide des commandes [SET TABLE TITLES](set-table-titles.md) et [SET FIELD TITLES](set-field-titles.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l’exécution, si l’objet a le focus, la commande retourne les informations de l’objet en cours d'édition ; si l’objet n'a pas le focus, la commande retourne les informations de la source de données de l’objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l’exécution, la commande retourne les informations de la variable ou du champ.

Les paramètres optionnels *débutSél* et *finSél* permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes dans le texte. 

* Si vous passez *débutSél* et *finSél*, **ST Get expression** recherche l’expression à l’intérieur de cette sélection.
* Si vous passez uniquement *débutSél* ou si la valeur de *finSél* est supérieure au nombre total de caractères dans l’*objet*, la commande recherche l’expression entre *débutSél* et la fin du texte.
* Si vous omettez *débutSél* et *finSél*, la commande recherche l’expression à l’intérieur de la sélection courante de texte.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0.

Si aucune expression n’est présente dans la sélection, la commande retourne une chaîne vide. 

#### Exemple 1 

Sur un événement double-clic, vous vérifiez que vous êtes bien en présence d’une expression, et dans ce cas affichez un dialogue où vous avez récupéré ses valeurs afin de permettre à l’utilisateur de la modifier :

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)
          vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)
          $winRef:=Open form window("Dial_InsertExpr";Form dialogue modal déplaçable;Centrée horizontalement;Centrée verticalement;*)
          DIALOG("Dial_InsertExpr")
          If(OK=1)
             ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)
          End if
       End if
 End case
```

#### Exemple 2 

Vous souhaitez exécuter une méthode 4D en réponse à un clic sur un lien utilisateur :

```4d
 Case of
    :(Form event code=On Clicked)
              //on récupère la sélection
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(startSel#endSel)  //il y a du contenu sélectionné
                 //on lit le type de contenu
          $CT_type:=ST Get content type(*;"myText";startSel;endSel)
          If($CT_type=ST User type) //c’est un lien utilisateur
             MaMethode //on exécute une méthode 4D
          End if
       End if
 End case
```

#### Voir aussi 

[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1287 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


