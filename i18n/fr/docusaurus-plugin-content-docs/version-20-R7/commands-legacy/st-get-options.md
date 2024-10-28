---
id: st-get-options
title: ST GET OPTIONS
slug: /commands/st-get-options
displayed_sidebar: docs
---

<!--REF #_command_.ST GET OPTIONS.Syntax-->**ST GET OPTIONS** ( {* ;} *objet* ; *option* ; *valeur* {; *option2* ; *valeur2* ; ... ; *optionN* ; *valeurN*} )<!-- END REF-->
<!--REF #_command_.ST GET OPTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| option | Integer | &#8594;  | Option à lire |
| valeur | Integer | &#8592; | Valeur courante de l’option |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ST GET OPTIONS.Summary-->La commande **ST GET OPTIONS** permet d’obtenir la valeur courante d’une ou plusieurs options de fonctionnement du champ ou de la variable de texte multistyle désigné(e) par le paramètre *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). A l’exécution, si l’objet a le focus, la commande retourne les informations de l’objet en cours d'édition ; si l’objet n’a pas le focus, la commande retourne les informations de la source de données de l’objet (variable ou champ).  
Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable. A l’exécution, la commande retourne les informations de la variable ou du champ.

Passez dans *option* le code de l’option à lire. La commande retourne dans *valeur* la valeur courante de l’option. Pour ces deux paramètres, vous pouvez utiliser les constantes suivantes du thème "*Texte multistyle*" : 

| Constante                   | Type        | Valeur | Comment                                                        |
| --------------------------- | ----------- | ------ | -------------------------------------------------------------- |
| ST Expressions display mode | Entier long | 1      | Le paramètre *valeur* peut contenir ST Values or ST References |
| ST References               | Entier long | 1      | Affichage des chaînes source des expressions                   |
| ST Values                   | Entier long | 0      | Affichage des valeurs calculées des expressions                |

#### Voir aussi 

[ST SET OPTIONS](st-set-options.md)  