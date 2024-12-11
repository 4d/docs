---
id: form-get-color-scheme
title: FORM Get color scheme
slug: /commands/form-get-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get color scheme.Syntax-->**FORM Get color scheme**  : Text<!-- END REF-->
<!--REF #_command_.FORM Get color scheme.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Schéma de couleur du formulaire courant : "light" ou "dark" |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM Get color scheme.Summary-->La commande **FORM Get color scheme** retourne le nom du schéma de couleurs du formulaire actuellement affiché .<!-- END REF--> S'il n'existe pas de formulaire courant, la commande retourne une chaîne vide.

**Note** : sous Windows, cette commande retourne toujours «light».

Le schéma de couleurs d'un formulaire est défini :

* par la propriété de formulaire "Color Scheme" (voir *colorScheme*);
* si "Color Scheme" est défini sur "inherited", la commande [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) est appelée;
* si [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) n'est pas appelée ou appelée avec une valeur de paramètre "inherited", les Paramètres (paramètres de la base hôte dans le cas d'un composant);
* si les Paramètres sont définis sur "inherited", les préférences utilisateur du système d'exploitation.

Veuillez vous reporter à la commande [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) pour plus de détails sur les noms de schémas de couleurs.

#### Exemple 

Vous souhaitez charger une image en fonction du schéma courant du formulaire :

```4d
 $txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")
 READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)
```

**Note :** Il est recommandé d'utiliser *css* pour adapter la conception des objets de formulaire au schéma courant.

#### Voir aussi 

[Get application color scheme](get-application-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1761 |
| Thread safe | &check; |
| Interdite sur le serveur ||


