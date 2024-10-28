---
id: st-get-url
title: ST GET URL
slug: /commands/st-get-url
displayed_sidebar: docs
---

<!--REF #_command_.ST GET URL.Syntax-->**ST GET URL** ( {* ;} *objet* ; *texteURL* ; *adresseURL* {; *débutSél* {; *finSél*}} )<!-- END REF-->
<!--REF #_command_.ST GET URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| texteURL | Text | &#8592; | Libellé visible de l’URL |
| adresseURL | Text | &#8592; | Adresse de l’URL |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ST GET URL.Summary-->La commande **ST GET URL** retourne le libellé et l’adresse du premier URL détecté dans le champ ou la variable de texte multistyle désigné(e) par le paramètre *objet*.<!-- END REF--> 

Le libellé et l’adresse sont retournés dans les paramètres *texteURL* et *adresseURL*. Si la sélection ne contient aucun URL, des chaînes vides sont retournées dans ces paramètres. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l’exécution, si l’objet a le focus, la commande retourne les informations de l’objet en cours d'édition ; si l’objet n'a pas le focus, la commande retourne les informations de la source de données de l’objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l’exécution, la commande retourne les informations de la variable ou du champ.

Les paramètres optionnels *débutSél* et *finSél* permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes dans le texte. 

* Si vous passez *débutSél* et *finSél*, **ST GET URL** recherche l’URL à l’intérieur de cette sélection.
* Si vous passez uniquement *débutSél* ou si la valeur de *finSél* est supérieure au nombre total de caractères dans l’*objet*, la commande recherche l’URL entre *débutSél* et la fin du texte.
* Si vous omettez *débutSél* et *finSél*, la commande recherche l’URL à l’intérieur de la sélection courante de texte.

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

Sur un événement double-clic, vous vérifiez que vous êtes bien en présence d’un URL, et dans ce cas affichez un dialogue où vous avez récupéré ses valeurs afin de permettre à l’utilisateur de le modifier :

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type)   //URL
          ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
          $winRef:=Open form window("Dial_InsertURL";Form dialogue modal déplaçable;Centrée horizontalement;Centrée verticalement;*)
          SET WINDOW TITLE("URL settings")
          DIALOG("Dial_InsertURL")
          If(OK=1)
             ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)
          End if
       End if
 End case
```

#### Voir aussi 

[ST INSERT URL](st-insert-url.md)  