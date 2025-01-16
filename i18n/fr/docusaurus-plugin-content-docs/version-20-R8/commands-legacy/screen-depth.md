---
id: screen-depth
title: SCREEN DEPTH
slug: /commands/screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN DEPTH.Syntax-->**SCREEN DEPTH** ( *profondeur* ; *couleur* {; écran} )<!-- END REF-->
<!--REF #_command_.SCREEN DEPTH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| profondeur | Integer | &#8592; | Profondeur de l'écran (nombre de couleurs = 2 ^ profondeur) |
| couleur | Integer | &#8592; | 1 = écran couleur 0 = écran noir et blanc ou niveaux de gris |
| écran | Integer | &#8594;  | Numéro de l'écran ou écran principal si omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCREEN DEPTH.Summary-->La commande **SCREEN DEPTH** retourne dans les paramètres *profondeur* et *couleur* les caractéristiques du moniteur utilisé.<!-- END REF-->

La profondeur de l'écran est retournée dans *profondeur*. La profondeur élevée en tant que puissance de 2 vous permet de connaître le nombre de couleurs que votre moniteur affiche. Si par exemple votre moniteur est paramétré en 256 couleurs (2^8), la profondeur de votre écran est de 8\. 4D fournit les constantes prédéfinies suivantes :  

| Constante                 | Type        | Valeur |
| ------------------------- | ----------- | ------ |
| Black and white           | Entier long | 0      |
| Four colors               | Entier long | 2      |
| Millions of colors 24 bit | Entier long | 24     |
| Millions of colors 32 bit | Entier long | 32     |
| Sixteen colors            | Entier long | 4      |
| Thousands of colors       | Entier long | 16     |
| Two fifty six colors      | Entier long | 8      |

Si le moniteur est configuré pour afficher des couleurs, le paramètre *couleur* vaut 1\. Si le moniteur est configuré pour afficher des niveaux de gris, *couleur* vaut 0 (zéro). Notez que cette valeur n'a de signification que sous Mac OS. Les constantes prédéfinies suivantes sont fournies par 4D :  

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is color      | Entier long | 1      |
| Is gray scale | Entier long | 0      |

Le paramètre optionnel *écran* vous permet de spécifier le numéro du moniteur sur lequel vous souhaitez obtenir des informations. Si vous omettez ce paramètre, la commande retourne la profondeur de l'écran principal.

#### Exemple 

Votre application affiche de nombreux graphiques en couleurs. Vous pouvez écrire, quelque part dans votre base :

```4d
 SCREEN DEPTH($vlProf;$vlCouleur)
 If($vlProf<16)
    ALERT("Les formulaires seraient plus beaux si l'écran"+" était configuré en millions de couleurs.")
 End if
```

#### Voir aussi 

[Count screens](count-screens.md)  


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 439 |
| Thread safe | &cross; |


