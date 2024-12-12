---
id: object-set-enterable
title: OBJECT SET ENTERABLE
slug: /commands/object-set-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENTERABLE.Syntax-->**OBJECT SET ENTERABLE** ( {* ;} *objet* ; *saisissable* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENTERABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une table, un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Table ou Champ ou Variable (si * omis) |
| saisissable | Boolean, Integer | &#8594;  | Booléen : Vrai=saisissable, Faux=non saisissable<br/>Entier long : 0=non saisissable, 1=saisissable, 2=non saisissable non focusable |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET ENTERABLE.Summary-->**OBJECT SET ENTERABLE** rend saisissable ou non saisissable le ou les objet(s) de formulaire désigné(s) par *objet* et peut fixer l'attribut saisissable.<!-- END REF-->

**Note** : Un objet de formulaire focusable peut lire le focus et déclencher les événements formulaire *On Getting focus* / *On Losing focus*. En outre, le contenu des objets focusables de la **zone se saisie** et de la **zone 4D Write Pro** peut être sélectionné et copié, même s'ils ne sont pas saisissables. 

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est une table, un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de table, de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

Vous pouvez passer une valeur booléenne ou une valeur Longint dans saisissable :

* Booléen - lorsque saisissable est mis à Vrai, l'utilisateur peut saisir des données et déplacer le curseur dans la zone.  
Lorsque saisissable est Faux :  
   * dans les bases de données binaires, l'utilisateur ne peut pas saisir de données et l'attribut focusable dépend de l'option **Focusable** définie dans la liste des propriétés.  
   * dans les projets, l'utilisateur ne peut pas saisir de données et l'objet est focusable.
* Entier long - le passage d'une valeur entier long dans saisissable vous permet de contrôler également la propriété *focusable* pour les **zones de saisie** et les **zones 4D Write Pro**. Vous pouvez utiliser l'une des constantes suivantes :  

| Constante                       | Valeur | Comment                                                                                                                                                                                                               |  
| ------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| obk enterable                   | 1      | Les utilisateurs peuvent saisir des valeurs dans l'objet et l'objet est focusable.                                                                                                                                    |  
| obk not enterable               | 0      | Les utilisateurs ne peuvent pas saisir de valeurs dans l'objet, mais un **objet zone de saisie** ou une **zone 4D Write Pro** est focusable (les autres objets non saisissables sont automatiquement non focusables). |  
| obk not enterable not focusable | 2      | Les utilisateurs ne peuvent pas saisir de valeurs dans l'objet, et un objet **zone de saisie** et **zone 4D Write Pro** n'est pas focusable.                                                                          |

La commande **OBJECT SET ENTERABLE** permet également d’activer par programmation le mode “Saisie en liste” pour les sous-formulaires et les formulaires liste affichés par les commandes [MODIFY SELECTION](modify-selection.md) et [DISPLAY SELECTION](display-selection.md) :

* Pour les sous-formulaires, vous pouvez passer dans le paramètre saisissable soit le nom de la table du sous-formulaire, soit le nom de l’objet sous-formulaire lui-même, par exemple : **OBJECT SET ENTERABLE**(\*;"Sousform";Vrai). La commande fonctionne dans les sous-formulaires uniquement si elle se trouve dans la méthode formulaire du sous-formulaire.
* Pour les formulaires liste, vous devez passer le nom de la table du formulaire dans le paramètre saisissable, par exemple : **OBJECT SET ENTERABLE**(\[MaTable\];Vrai).

Rendre un objet non saisissable n'empêche pas sa modification par programmation.

**Note :** Vous rendez une cellule de list box non saisissable en passant la valeur -1 à $0 dans l'événement On Before Data Entry, cf. paragraphe *Gestion de la saisie*.

#### Exemple 1 

L'exemple suivant définit un champ de type d'expédition suivant le poids d'un colis expédié. Si le colis pèse un kilo ou moins, l'expéditeur sera La Poste et le champ est rendu non saisissable. Sinon, le champ est rendu saisissable. 

```4d
 If([Expédition]Poids<=1)
    [Expédition]Type:="La Poste"
    OBJECT SET ENTERABLE([Expédition]Type;False)
 Else
    OBJECT SET ENTERABLE([Expédition]Type;True)
 End if
```

#### Exemple 2 

Voici la méthode objet d’une case à cocher placée dans l’en-tête d’une liste pour contrôler le mode Saisie en liste : 

```4d
 var bSaisissable : Boolean
 OBJECT SET ENTERABLE([Table1];bSaisissable)
```

#### Voir aussi 

[OBJECT Get enterable](object-get-enterable.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  