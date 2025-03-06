---
id: st-get-content-type
title: ST Get content type
slug: /commands/st-get-content-type
displayed_sidebar: docs
---

<!--REF #_command_.ST Get content type.Syntax-->**ST Get content type** ( {* ;} *objet* {; *débutSél* {; *finSél* {; *débutBloc* {; *finBloc*}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.ST Get content type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |
| débutBloc | Integer | &#8592; | Début de position du premier type de la sélection |
| finBloc | Integer | &#8592; | Fin de position du premier type de la sélection |
| Résultat | Integer | &#8592; | Type de contenu |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST Get content type.Summary-->La commande **ST Get content type** retourne le type de contenu présent dans le champ ou la variable de texte multistyle désigné(e) par le paramètre *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l’exécution, si l’objet a le focus, la commande retourne les informations de l’objet en cours d'édition ; si l’objet n'a pas le focus, la commande retourne les informations de la source de données de l’objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l’exécution, la commande retourne les informations de la variable ou du champ.

Les paramètres optionnels *débutSél* et *finSél* permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes dans le texte. 

* Si vous passez *débutSél* et *finSél*, **ST Get content type** évalue le contenu situé à l’intérieur de cette sélection.
* Si vous passez uniquement *débutSél* ou si la valeur de *finSél* est supérieure au nombre total de caractères dans l’*objet*, le contenu situé entre *débutSél* et la fin du texte est évalué.
* Si vous omettez *débutSél* et *finSél*, le contenu situé à l’intérieur de la sélection courante de texte est évalué.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0.

Les paramètres optionnels *débutBloc* et *finBloc* permettent de récupérer la position du premier et du dernier caractère du premier bloc homogène identifié dans l’objet ou la sélection de l’objet. Par exemple, si la sélection contient une expression puis du texte brut, *débutBloc* et *finBloc* retourneront les bornes de l’expression. Vous pouvez effectuer une boucle afin de traiter tous les blocs de la sélection.

La commande retourne une valeur désignant le type de contenu identifié. Vous pouvez comparer cette valeur aux constantes suivantes, placées dans le thème "*Texte multistyle*" : 

| Constante           | Type        | Valeur | Comment                                                                    |
| ------------------- | ----------- | ------ | -------------------------------------------------------------------------- |
| ST Expression type  | Entier long | 2      | La sélection contient uniquement une référence d’expression                |
| ST Mixed type       | Entier long | 3      | La sélection contient au moins deux types de contenus différents           |
| ST Picture type     | Entier long | 6      | La sélection contient uniquement une image (zones 4D Write Pro uniquement) |
| ST Plain type       | Entier long | 0      | La sélection contient du texte et aucune référence                         |
| ST Unknown tag type | Entier long | 4      | La sélection contient uniquement une balise de type inconnu                |
| ST URL type         | Entier long | 1      | La sélection contient uniquement une référence d’URL                       |
| ST User type        | Entier long | 5      | La sélection contient uniquement une référence personnalisée               |

#### Exemple 

Vous souhaitez afficher des commandes d’un menu contextuel en fonction du type de contenu sélectionné dans la zone. 

```4d
 Case of
    :(FORM Event=On Clicked)
  //on récupère la sélection
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(Contextual click&(Macintosh control down=False)) //appel du menu contextuel
          If(startSel=endSel) //pas de contenu sélectionné
  //on active uniquement certaines commandes
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)
             ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
             ...
          Else //on lit le type de contenu
             CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)
             Case of //traitement des différents types
                :(CT_Texttype=ST URL type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                :(CT_Texttype=ST Expression type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                Else
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
             End case
          End if
          MOUSE POSITION($xCoord;$yCoord;$StateButton)
          $AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)
          startSel:=-3
          endSel:=-3
       End if
       ...
 End case
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1286 |
| Thread safe | &cross; |
| Modifie les variables | OK |


