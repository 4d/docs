---
id: print-object
title: Print object
slug: /commands/print-object
displayed_sidebar: docs
---

<!--REF #_command_.Print object.Syntax-->**Print object** ( {* ;} *objet* {; *posX* {; *posY* {; *largeur* {; *hauteur*}}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Print object.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable (si * omis) |
| posX | Integer | &#8594;  | Emplacement horizontal de l'objet |
| posY | Integer | &#8594;  | Emplacement vertical de l'objet |
| largeur | Integer | &#8594;  | Largeur de l'objet (pixels) |
| hauteur | Integer | &#8594;  | Hauteur de l'objet (pixels) |
| Résultat | Boolean | &#8592; | Vrai = objet entièrement imprimé, Faux sinon |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Print object.Summary-->La commande **Print object** vous permet d’imprimer le ou les objet(s) de formulaire désigné(s) par les paramètres *objet* et *\**, à l’emplacement défini par les paramètres *posX* et *posY*.<!-- END REF-->

Avant d’appeler la commande **Print object**, vous devez désigner le formulaire table ou projet contenant les objets à imprimer, à l’aide de la commande [FORM LOAD](form-load.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne de caractères). Si vous ne passez pas le paramètre *\**, vous indiquez que *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable (de type objet uniquement).

Les paramètres *posX* et *posY* définissent le point de départ de l’impression du ou des objet(s). Ces valeurs doivent être exprimées en pixels. Si ces paramètres sont omis, l’objet sera imprimé en fonction de son emplacement dans le formulaire. 

Les paramètres *largeur* et *hauteur* vous permettent de définir la largeur et la hauteur de l’objet de formulaire. La commande **Print object** ne gère pas les objets de taille variable. Vous devez utiliser la commande [OBJECT GET BEST SIZE](object-get-best-size.md) pour prendre en charge la taille des objets. Vous pouvez également utiliser la commande [OBJECT GET BEST SIZE](object-get-best-size.md) pour connaître la taille la plus adéquate pour les objets contenant du texte. De même, **Print object** ne provoque pas de sauts de page automatiques. Vous devez les gérer en fonction de vos besoins. 

Vous pouvez utiliser les commandes de 4D pour modifier à la volée les propriétés des objets (couleur, taille...).

La commande retourne Vrai si l’objet a été imprimé entièrement et Faux dans le cas contraire, c’est-à-dire si l’intégralité des données associées à l’objet n’a pas pu être imprimée dans le cadre imposé. Typiquement, la commande retourne Faux lors de l’impression d’une list box, si toutes les lignes de la list box n’ont pas pu être imprimées. Dans ce cas, il suffit d’appeler la commande **Print object** de façon répétée, jusqu’à ce qu’elle retourne Vrai : un mécanisme spécifique provoque automatiquement le défilement du contenu de l’objet après chaque appel. Si l'utilisateur annule l'impression, une erreur -128 est générée et peut être interceptée à l'aide de [ON ERR CALL](on-err-call.md).

**Notes :**  

* Dans la version actuelle de 4D, seuls les objets de type list box bénéficient de ce mécanisme (la commande retourne toujours Vrai pour tous les autres types d’objets).
* La commande [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) permet de contrôler le statut de l’impression durant l’opération.

La commande **Print object** peut être utilisée uniquement dans le contexte d’une tâche d’impression préalablement ouverte avec la commande [OPEN PRINTING JOB](open-printing-job.md). Si elle n’est pas appelée dans ce contexte, la commande ne fait rien. Plusieurs commandes **Print object** peuvent être appelées dans la même tâche d’impression. 

**Note :** Les listes hiérarchiques, les sous-formulaires et les zones Web ne sont pas imprimables.

#### Exemple 1 

Exemple d’impression de dix objets dans un formulaire :

```4d
 PRINT SETTINGS
 If(OK=1)
       OPEN PRINTING JOB
       If(OK=1)
          FORM LOAD("PrintForm")
          x:=100
          y:=50
          GET PRINTABLE AREA(hpaper;wpaper)
          For($i;1;10)
             OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)
             $fin:=Print object(*;"Obj"+String($i))
             y:=y+bestheight+15
             If(y>hpaper)
                PAGE BREAK(>)
                y:=50
             End if
          End for
       End if
       CLOSE PRINTING JOB
 End if
```

#### Exemple 2 

Exemple d’impression d’une list box complète :

```4d
 OPEN PRINTING JOB
 FORM LOAD("myForm")
 $Over:=False
 gError:=0
 ON ERR CALL("err")
 Repeat
    $Total:=Print object(*;"List_Box")
    LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)
    PAGE BREAK
    If(gError=-128) //l'utilisateur a annulé l'opération
       $Over:=True
    End if
 Until($Over)
 CLOSE PRINTING JOB
 ON ERR CALL("")
```

#### Voir aussi 

[FORM LOAD](form-load.md)  