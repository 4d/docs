---
id: object-set-font-style
title: OBJECT SET FONT STYLE
slug: /commands/object-set-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( {* ;} *objet* ; *style* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d'objet (chaîne) Si omis = objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| style | Integer | &#8594;  | Style de police |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->**OBJECT SET FONT STYLE** assigne le style de police *style* à ou aux objet(s) de formulaire désigné(s) par *objet*.<!-- END REF-->   
Le nombre *style* est un code de style du système d'exploitation. En additionnant des codes, vous combinez les styles. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

Vous devez passer dans le paramètre *style* une des constantes prédéfinies suivantes ou la somme de plusieurs de ces constantes (thème "*Styles de caractères*") :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

  
#### Exemple 1 

L'exemple suivant définit le style de police du bouton *bAjoutNouveau*. Le style demandé est gras italique : 

```4d
 OBJECT SET FONT STYLE(bAjoutNouveau;Bold+Italic)
```

#### Exemple 2 

L'exemple suivant définit le style de police Normal pour tous les objets de formulaire dont le nom débute par "vt" : 

```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

#### Voir aussi 

*Notes de programmation*  
[OBJECT Get font style](object-get-font-style.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  