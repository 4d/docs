---
id: wp-get-breaks
title: WP Get breaks
slug: /WritePro/commands/wp-get-breaks
displayed_sidebar: docs
---

<!--REF #_command_.WP Get breaks.Syntax-->**WP Get breaks** ( *objCible* {; *typeSaut*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get breaks.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| typeSaut | Integer | &#8594;  | Type de sauts à retourner |
| Résultat | Collection | &#8592; | Collection de plages |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get breaks.Summary-->La commande **WP Get breaks** retourne la collection de tous les sauts insérés dans *objCible*.<!-- END REF-->

Cette commande retourne uniquement les sauts saisis par un utilisateur ou par le code, et non ceux générés automatiquement par 4D Write Pro à des fins de mise en page.

Dans le paramètre objCible, vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied de page / section / sous-section / zone de texte), ou
* un document 4D Write Pro

Par défaut, les sauts de tout type sont retournés. Vous pouvez sélectionner un type de saut spécifique à retourner, en passant l'une des constantes suivantes dans le paramètre facultatif *typeSaut* :

| Constante                   | Valeur | Comment                                                                                                                    |
| --------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | 3      | Saut de colonne : insère un saut de colonne                                                                                |
| wk continuous section break | 5      | Définit un saut de section continu (souvent utilisé pour modifier le nombre de colonnes sans commencer une nouvelle page). |
| wk line break               | 0      | Saut de ligne (dans le même paragraphe)                                                                                    |
| wk page break               | 2      | Saut de page : définit une nouvelle page                                                                                   |
| wk paragraph break          | 4      | Saut de paragraphe : définit un nouveau paragraphe                                                                         |
| wk section break            | 1      | Saut de section: définit une nouvelle section                                                                              |

**Valeur retournée**

**WP Get breaks** retourne une collection d'objets plage, chacun d'eux décrivant un saut dans objCible. Une propriété spécifique en lecture seule est disponible dans chaque objet plage, indiquant le type de saut :

| **Propriété**   | **Type**  | **Constante** | **Description**              |
| --------------- | --------- | ------------- | ---------------------------- |
| \[ \].breakType | Numérique | wk break type | Lecture seule : type de saut |

Si objCible est une plage ou un élément, les sauts sont retournés dans l'ordre où ils ont été trouvés. 

Si objCible est un document 4D Write Pro, les sauts sont retournés dans l'ordre suivant :

1. corps
2. en-tête de première page de la section 1 (le cas échéant)
3. pied de page de la première page de la section 1 (le cas échéant)
4. en-tête de la page de gauche pour la section 1 (le cas échéant)
5. pied de la page de gauche pour la section 1 (le cas échéant)
6. en-tête de la page de droite pour la section (le cas échéant)
7. pied de la page de droite pour la section 1 (le cas échéant)
8. en-tête principal de la section 1 (le cas échéant)
9. pied de page principal de la section 1 (le cas échéant)
10. faire de même avec la section 2, la section 3, et ainsi de suite.
11. zones de texte.

Une collection vide est retournée si objCible ne contient aucun saut (ni aucun saut de *typeSaut* demandé).

#### Exemple 

Vous souhaitez remplacer tous les sauts de ligne par des sauts de paragraphe dans un document :

```4d
 var $_filteredBreaks : Collection
 var $break : Object
 $_filteredBreaks:=WP Get breaks(WParea;wk line break)
 For each($break;$_filteredBreaks)
    WP INSERT BREAK($break;wk paragraph break;wk replace)
 End for each
```

#### Voir aussi 

[WP Get elements](wp-get-elements.md)  
[WP INSERT BREAK](../commands/wp-insert-break.md)  