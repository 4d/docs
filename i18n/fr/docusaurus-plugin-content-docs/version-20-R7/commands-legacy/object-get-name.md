---
id: object-get-name
title: OBJECT Get name
slug: /commands/object-get-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *sélecteur* )} : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#8594;  | Catégorie d’objet |
| Résultat | Text | &#8592; | Nom de l’objet |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get name.Summary-->La commande **OBJECT Get name** retourne le nom d’un objet de formulaire.<!-- END REF--> 

La commande permet de désigner deux types d’objets en fonction du paramètre *sélecteur*. Vous pouvez passer dans ce paramètre l’une des constantes suivantes (placées dans le thème *Objets de formulaire (Accès)*) :

* Object current ou *sélecteur* omis : Si vous passez ce sélecteur ou omettez le paramètre *sélecteur*, la commande retourne le nom de l’objet à partir duquel elle a été appelée (méthode objet ou sous-méthode appelée par la méthode objet). Dans ce cas, la commande doit être appelée dans le contexte d’un objet de formulaire, sinon elle retourne une chaîne vide.
* Object with focus : Si vous passez ce sélecteur, la commande retourne le nom de l’objet ayant le focus dans le formulaire.

#### Exemple 

Méthode objet du bouton "bValiderForm" :

```4d
 $nomBtn:=OBJECT Get name(Object current)
```

Après l’exécution de cette méthode objet, la variable *$nomBtn* contient la valeur "bValiderForm".

#### Voir aussi 

[OBJECT Get pointer](object-get-pointer.md)  
*Objets (Formulaires)*  
*Objets de formulaire (Accès)*  