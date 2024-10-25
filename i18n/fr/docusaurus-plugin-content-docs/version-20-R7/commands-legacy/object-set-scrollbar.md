---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( {* ;} *objet* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| horizontal | Boolean, Integer | &#8594;  | Visibilité de la barre horizontale |
| vertical | Boolean, Integer | &#8594;  | Visibilité de la barre verticale |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->La commande **OBJECT SET SCROLLBAR** permet d’afficher ou de masquer les barres de défilement horizontale et/ou verticale dans l’objet désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section Propriétés des objets. 

Passez dans les paramètres *horizontal* et *vertical* des valeurs indiquant si les barres de défilement correspondantes doivent être affichées. Vous pouvez passer soit des valeurs booléennes (Vrai=affichée, Faux=masquée), soit des valeurs numériques (0=masquée, 1=affichée, 2=mode automatique). Utiliser des valeurs numériques permet notamment d'accéder au mode automatique, dans lequel la barre de défilement n'apparaît que lorsque c'est nécessaire. 

Le tableau suivant indique les valeurs que vous pouvez passer dans les paramètres *horizontal* et *vertical* pour les objets acceptant des barres de défilement (le mode automatique n'est pas disponible avec tous les objets) :

| **Objets avec barres de défilement** | **Masquer barre** | **Afficher barre** | **Mode automatique** |
| ------------------------------------ | ----------------- | ------------------ | -------------------- |
| Champs et variables objet texte      | Faux ou 0         | Vrai ou 1          | *non disponible*     |
| Champs et variables objet image      | Faux ou 0         | Vrai ou 1          | 2                    |
| List box                             | Faux ou 0         | Vrai ou 1          | 2                    |
| Listes hiérarchiques                 | Faux ou 0         | Vrai ou 1          | 2                    |
| Sous-formulaires                     | Faux ou 0         | Vrai ou 1          | *non disponible*     |

 Par défaut, les barres de défilement sont affichées.

**Note :** Pour plus d'informations sur le mode automatique, reportez-vous à la section *Barres de défilement*.

#### Voir aussi 

[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT GET SCROLLBAR](object-get-scrollbar.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  