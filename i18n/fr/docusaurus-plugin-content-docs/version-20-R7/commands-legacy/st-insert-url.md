---
id: st-insert-url
title: ST INSERT URL
slug: /commands/st-insert-url
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT URL.Syntax-->**ST INSERT URL** ( {* ;} *objet* ; *texteURL* ; *adresseURL* {; *débutSél* {; *finSél*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| texteURL | Text | &#8594;  | Libellé visible de l’URL |
| adresseURL | Text | &#8594;  | Adresse de l’URL |
| débutSél | Integer | &#8594;  | Début de la sélection |
| finSél | Integer | &#8594;  | Fin de la sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.ST INSERT URL.Summary-->La commande **ST INSERT URL** insère un lien URL dans le champ ou la variable de texte stylé désigné(e) par le paramètre *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans le paramètre *texteURL* le libellé visible de l’URL, tel qu’il doit apparaître dans l’objet. Par exemple, des libellés comme "Site Web de 4D" ou "Suivez ce lien pour plus d’informations" peuvent être utilisés. Vous pouvez également utiliser l’adresse elle-même, par exemple "http://www.4d.com". 

Passez dans le paramètre *adresseURL* l’adresse complète à laquelle connecter la page du navigateur, par exemple "http://www.4D.com". 

Les paramètres optionnels *débutSél* et *finSél* permettent de désigner une sélection de texte dans *objet*. Les valeurs *débutSél* et *finSél* expriment une sélection de texte brut, sans tenir compte des balises de style éventuellement présentes dans le texte. 

* Si vous passez uniquement *débutSél*, *texteURL* est inséré à l'emplacement spécifié.
* Si vous omettez *débutSél* et *finSél*, *texteURL* est inséré à l’emplacement du curseur.
* Si vous passez *débutSél* et *finSél*, **ST INSERT URL** remplace le texte situé à l’intérieur de cette sélection par *texteURL*. Si la valeur de *finSél* est supérieure au nombre total de caractères dans l’objet, tous les caractères entre *débutSél* et la fin du texte sont remplacés par *texteURL*.

4D propose des constantes prédéfinies afin de désigner automatiquement des bornes de sélection dans les paramètres *débutSél* et *finSél*. Ces constantes sont placées dans le thème "*Texte multistyle*" : 

| Constante          | Type        | Valeur | Comment                                                                          |
| ------------------ | ----------- | ------ | -------------------------------------------------------------------------------- |
| ST End highlight   | Entier long | \-1001 | Désigne le dernier caractère de la sélection courante de texte dans l’objet (\*) |
| ST End text        | Entier long | 0      | Désigne le dernier caractère du texte contenu dans l’objet                       |
| ST Start highlight | Entier long | \-1000 | Désigne le premier caractère de la sélection courante de texte dans l’objet (\*) |
| ST Start text      | Entier long | 1      | Désigne le premier caractère du texte contenu dans l’objet                       |

(\*) Vous devez passer un nom d’objet dans *objet* pour pouvoir utiliser cette constante. Si vous passez une référence de variable ou de champ, la commande s’appliquera à l’ensemble du texte de l’objet.

**Note :** Si *débutSél* est supérieur à *finSél* (hormis si *finSél* vaut 0), la commande ne fait rien et la variable *OK* prend la valeur 0.

Une fois le lien inséré, il est actif : l’action **Ctrl+clic** (Windows) ou **Commande+clic** (OS X) sur le lien ouvre une page du navigateur par défaut à l’adresse définie dans le paramètre *adresseURL*.

#### Exemple 

Vous souhaitez insérer un lien vers le site Web de 4D à la place de la sélection de texte dans l’objet "myText" :

```4d
 vTitle:="4D Web Site"
 vURL:="http://www.4d.com/"
 ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)
```

#### Voir aussi 

[ST GET URL](st-get-url.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1280 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


