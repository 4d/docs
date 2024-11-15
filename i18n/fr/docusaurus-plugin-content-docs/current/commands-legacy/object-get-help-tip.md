---
id: object-get-help-tip
title: OBJECT Get help tip
slug: /commands/object-get-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get help tip.Syntax-->**OBJECT Get help tip** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get help tip.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Text | &#8592; | Message d’aide de l’objet |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get help tip.Summary-->La commande **OBJECT Get help tip** retourne le message d’aide associé à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\** dans le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne le message d’aide courant associé à l’objet, qu’il ait été défini en mode Développement ou pour le process à l’aide de la commande [OBJECT SET HELP TIP](object-set-help-tip.md). La chaîne retournée représente le message tel qu’il apparaît lors de l’exécution du formulaire. S’il contient des éléments variables (*resname* xliff ou références 4D), ils sont interprétés en fonction du contexte. 

#### Exemple 

Le libellé d’un bouton image est stocké sous forme de message d’aide. Ce libellé est stocké dans un fichier xliff, il diffère en fonction de la langue courante de l’application : 

```4d
 OBJECT SET HELP TIP(*;"bouton1";":xliff:btn_discover")
 $helpmess:=OBJECT Get help tip(*;"bouton1")
     // $helpmess contient par exemple "Découvrir" avec un 4D français et "Discover" avec un 4D anglais
```

#### Voir aussi 

[OBJECT SET HELP TIP](object-set-help-tip.md)  