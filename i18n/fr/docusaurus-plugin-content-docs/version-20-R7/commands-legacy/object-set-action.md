---
id: object-set-action
title: OBJECT SET ACTION
slug: /commands/object-set-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( {* ;} *objet* ; *action* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| action | Text | &#8594;  | Nom d'action à associer (avec paramètre si nécessaire) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET ACTION.Summary-->La commande **OBJECT SET ACTION** vous permet de modifier l’action standard associée à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Passez dans le paramètre *action* une chaîne contenant le nom de l’action standard à associer à l’objet, ou une constante du thème "*Action standard*". Optionnellement, l'action peut comporter un paramètre. 

Pour plus d'informations sur les noms d'actions, veuillez vous reporter à la section *Actions standard* dans le manuel *Mode Développement* de 4D.

**Note de compatibilité :** Les anciennes constantes (préfixées \_o\_ dans le thème "*Action standard*") sont obsolètes depuis 4D v16 R3\. Elles sont toutefois toujours prises en charge par soucis de compatibilité. 

#### Exemple 

Vous souhaitez associer l’action standard de validation à un bouton : 

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### Voir aussi 

[OBJECT Get action](object-get-action.md)  