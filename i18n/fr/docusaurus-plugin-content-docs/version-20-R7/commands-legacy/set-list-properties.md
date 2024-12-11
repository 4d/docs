---
id: set-list-properties
title: SET LIST PROPERTIES
slug: /commands/set-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST PROPERTIES.Syntax-->**SET LIST PROPERTIES** ( *liste* ; *apparence* {; *icône* {; *hauteurLigne* {; *doubleClic* {; *multiSélection* {; *modifiable*}}}}} )<!-- END REF-->
<!--REF #_command_.SET LIST PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de la liste |
| apparence | Integer | &#8594;  | *** paramètre obsolète, toujours passer 0 *** |
| icône | Integer | &#8594;  | *** Paramètre obsolète, toujours passer 0 *** |
| hauteurLigne | Integer | &#8594;  | Hauteur minimale de la ligne (pixels) |
| doubleClic | Integer | &#8594;  | Déploiement/contraction sur double-clic 0 = autoriser, 1= empêcher |
| multiSélection | Integer | &#8594;  | Sélections multiples 0 = interdire (défaut), 1 = autoriser |
| modifiable | Integer | &#8594;  | Enumération modifiable 0 = non, 1 = oui (défaut) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET LIST PROPERTIES.Summary-->La commande **SET LIST PROPERTIES** définit la hauteur de ligne et le fonctionnement de la liste hiérarchique dont la référence est passée dans le paramètre *liste*.<!-- END REF-->

**Note de compatibilité :** Les paramètres *apparence* et *icône* sont obsolètes, ils doivent toujours prendre la valeur 0\. 

**Note :** Si vous voulez personnaliser l'icône de chaque élément d'une liste hiérarchique, utilisez la commande [SET LIST ITEM PROPERTIES](set-list-item-properties.md). 

Si vous ne passez pas le paramètre *hauteurLigne*, la hauteur de ligne d'une liste hiérarchique sera déterminée par la police et la taille de police utilisées pour l'objet. Vous pouvez également passer dans le paramètre *hauteurLigne* la hauteur minimale des lignes de la liste hiérarchique. Si la valeur que vous passez est supérieure à la hauteur des lignes définie par la police et la taille de police, elle sera utilisée pour fixer la hauteur des lignes. Passez 0 pour utiliser la hauteur par défaut.

Le paramètre facultatif *doubleClic* permet d’empêcher que le double-clic sur un élément de la liste ne provoque le déploiement ou la contraction de sa sous-liste.  
Par défaut, une sous-liste est déployée ou contractée en cas de double-clic sur l’élément parent. Certains types d’interfaces peuvent toutefois nécessiter une désactivation de ce mécanisme. Pour cela, passez 1 dans le paramètre *doubleClic*. A noter que seul le double-clic sera désactivé. Les sous-listes pourront toujours être déployées ou contractées par un clic sur l’icône de déploiement.  
Si vous passez 0 ou omettez ce paramètre, le fonctionnement par défaut est appliqué.

Le paramètre facultatif *multiSélection* permet d’indiquer si la liste doit accepter les sélections multiples.   
Par défaut, il n’est pas possible de sélectionner simultanément plusieurs éléments d’une liste hiérarchique. Si vous souhaitez que cette fonction soit disponible pour la liste, passez la valeur 1 dans le paramètre *multiSélection*. Dans ce cas, les sélections multiples peuvent être effectuées :  
\- manuellement, à l’aide des combinaisons de touches **Maj**+**clic** pour une sélection continue ou **Ctrl**+**clic** (Windows) / **Commande**+**clic** (Mac OS) pour une sélection discontinue,  
\- par programmation, à l’aide des commandes [SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md) et [SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md).  
Si vous passez 0 ou omettez le paramètre *multiSélection*, le fonctionnement par défaut est appliqué. 

Le paramètre facultatif *modifiable* permet d’indiquer si la liste sera modifiable par l’utilisateur lorsqu’elle sera affichée sous forme d’énumération associée à un champ ou une variable en saisie. Lorsque l’énumération est modifiable, un bouton **Modifier** est inséré dans la fenêtre d’énumération et l’utilisateur peut ajouter, supprimer et trier les valeurs via un éditeur spécifique.   
Si vous passez 1 ou omettez le paramètre *modifiable*, l’énumération sera modifiable par l’utilisateur ; si vous passez 0, elle ne sera pas modifiable.

#### Exemple 

Vous souhaitez interdire le déploiement/contraction sur double-clic. Vous pouvez écrire dans la méthode du formulaire :

```4d
 Case of
    :(FORM Event=On Load)
       hlVilles:=Load list("Villes") //charger l'énumération Villes dans l'objet hlVilles
       SET LIST PROPERTIES(hlVilles;0;0;0;1) //pas de déploiement sur double-clic
 End case
```

#### Voir aussi 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[GET LIST PROPERTIES](get-list-properties.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 387 |
| Thread safe | &check; |
| Interdite sur le serveur ||


