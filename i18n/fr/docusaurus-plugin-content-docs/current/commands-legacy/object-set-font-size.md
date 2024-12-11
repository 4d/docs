---
id: object-set-font-size
title: OBJECT SET FONT SIZE
slug: /commands/object-set-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT SIZE.Syntax-->**OBJECT SET FONT SIZE** ( {* ;} *objet* ; *taille* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d'objet (chaîne) Si omis = objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| taille | Integer | &#8594;  | Taille de police en points |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FONT SIZE.Summary-->**OBJECT SET FONT SIZE** définit la taille de la police du ou des objet(s) de formulaire spécifié(s) par *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

La *taille* peut être tout Entier compris entre 1 et 255\. Si la taille exacte n'existe pas, les caractères sont proportionnellement redimensionnés.

La zone de l'objet, telle qu'elle a été définie dans le formulaire, doit être suffisamment grande pour afficher les données dans la nouvelle taille. Autrement, le texte peut être tronqué ou pas du tout affiché.

**Remarque** : Si vous utilisez cette commande sur un objet qui utilise une feuille de style, la référence à la feuille de style est automatiquement supprimée de l'objet -- même si vous assignez les mêmes attributs que ceux de la feuille de style.

#### Exemple 1 

L'exemple suivant définit la taille de police de la variable appelée *vInfo* : 

```4d
 OBJECT SET FONT SIZE(vInfo;14)
```

#### Exemple 2 

L'exemple suivant définit la taille de police de tous les objets de formulaire dont le nom débute par "hl" : 

```4d
 OBJECT SET FONT SIZE(*;"hl@";14)
```

#### Voir aussi 

*Notes de programmation*  
[OBJECT Get font size](object-get-font-size.md)  
[OBJECT SET FONT](object-set-font.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 165 |
| Thread safe | &check; |
| Interdite sur le serveur ||


