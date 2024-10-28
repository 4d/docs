---
id: listbox-get-print-information
title: LISTBOX GET PRINT INFORMATION
slug: /commands/listbox-get-print-information
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Syntax-->**LISTBOX GET PRINT INFORMATION** ( {* ;} *objet* ; *sélecteur* ; *info* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable (si * omis) |
| sélecteur | Integer | &#8594;  | Information à obtenir |
| info | Integer | &#8592; | Valeur courante |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Summary-->La commande [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) retourne des informations courantes relatives à l’impression de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF--> Cette commande permet de contrôler l’impression du contenu de la list box.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Cette commande doit être appelée dans le contexte de l’impression d’une list box via la commande [Print object](print-object.md). Hors de ce contexte, elle ne retourne pas de valeurs significatives.

Passez dans *sélecteur* une valeur indiquant l’information à connaître et dans *info* une variable de type numérique ou BLOB. Vous pouvez passer dans *sélecteur* une des constantes suivantes, placées dans le thème *List box* :

| Constante                  | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk last printed row number | Entier long | 0      | Retourne dans *info* le numéro de la dernière ligne imprimée. Permet de connaître le numéro de la prochaine ligne à imprimer. Le numéro retourné peut être supérieur au nombre de lignes effectivement imprimées si la list box contient des lignes invisibles ou si la commande [OBJECT SET SCROLL POSITION](object-set-scroll-position.md) a été appelée. Par exemple, si les lignes 1, 18 et 20 ont été imprimées, *info* vaut 20\. |
| lk printed height          | Entier long | 3      | Retourne dans *info* la hauteur en pixels de l’objet effectivement imprimé (inclut les en-têtes, filets, etc.). Souvenez-vous que si le nombre de lignes à imprimer est inférieur à la "capacité" de la list box, sa hauteur est automatiquement réduite.                                                                                                                                                                              |
| lk printed rows            | Entier long | 1      | Retourne dans *info* le nombre de lignes effectivement imprimées lors du dernier appel à la commande [Print object](print-object.md). Ce nombre inclut les éventuelles lignes de ruptures ajoutées dans le cadre d’une list box hiérarchique. Par exemple, *info* vaut 10 si la list box contient 20 lignes et que les lignes impaires ont été masquées.                                                                               |
| lk printing is over        | Entier long | 2      | Retourne dans *info* un booléen indiquant si la dernière ligne (visible) de la list box a été effectivement imprimée. Vrai = la ligne a été imprimée, Faux sinon.                                                                                                                                                                                                                                                                      |

Pour plus d’informations sur les principes d’impression des list box, reportez-vous au paragraphe *Gestion des impressions*.

#### Exemple 1 

Impression jusqu’à ce que toutes les lignes soient imprimées :

```4d
 OPEN PRINTING JOB
 FORM LOAD("SalesForm")
 
 $Over:=False
 Repeat
    $Total:=Print object(*;"malistbox")
    LISTBOX GET PRINT INFORMATION(*;"malistbox";lk printing is over;$Over)
    PAGE BREAK
 Until($Over)
 
 CLOSE PRINTING JOB
```

#### Exemple 2 

Impression d’au moins 500 lignes de la list box, sachant que certaines lignes sont masquées :

```4d
 $GlobalPrinted:=0
 Repeat
    $Total:=Print object(*;"malistbox")
    LISTBOX GET PRINT INFORMATION(*;"malistbox";lk printed rows;$Printed)
    $GlobalPrinted:=$GlobalPrinted+$Printed
    PAGE BREAK
 Until($GlobalPrinted>=500)
```
