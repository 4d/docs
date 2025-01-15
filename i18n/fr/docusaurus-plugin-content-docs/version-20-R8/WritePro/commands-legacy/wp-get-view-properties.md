---
id: wp-get-view-properties
title: WP Get view properties
slug: /WritePro/commands/wp-get-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP Get view properties.Syntax-->**WP Get view properties** ( * ; *zoneWP* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get view properties.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, zoneWP est un nom d'objet de formulaire (chaîne). Si omis, zoneWP est un champ ou une variable objet |
| zoneWP | Text, Object | &#8594;  | Nom d'objet de formulaire (si * spécifié) ou champ ou variable objet 4D Write Pro (si * omis) |
| Résultat | Object | &#8592; | Attributs vue courants |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get view properties.Summary-->La commande **WP Get view properties** retourne les attributs vue courants de la zone 4D Write Pro identifiés par *zoneWP*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\** , vous indiquez que *wpArea* est le nom d'un objet de formulaire (chaîne). Si vous ne passez pas ce paramètre, vous indiquez que zoneWP est un document 4D Write Pro (champ ou variable objet). Cette commande ne peut être utilisée que si *zoneWP* est associée à un objet de formulaire (*i.e.* elle est affichée dans le formulaire/la page courant(e)), sur n'importe quelle page de formulaire. Si le document 4D Write Pro est affiché dans plusieurs objets de formulaire, il est nécessaire d'utiliser le paramètre *\** pour définir la vue que vous souhaiter sélectionner.

Les attributs vue de la zone 4D Write Pro peuvent être définis : 

* au niveau du formulaire dans la Liste des propriétés,
* dynamiquement durant la session à l'aide de la commande [WP SET VIEW PROPERTIES](wp-set-view-properties.md).

**Objet retourné**

L'objet retourné contient tous les attributs vue de la zone 4D Write Pro ainsi que leur valeur courante :

| Constante                    | Valeur                 | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wk display formula as symbol | displayFormulaAsSymbol | Affiche les références de formules sous la forme d'un symbole ![](../../assets/en/WritePro/commands/pict6013182.en.png). Ne fonctionne que si les formules sont affichées en tant que références (voir wk visible references). Valeurs possibles : Vrai/Faux                                                                                                                                                                                                                                                                                     |
| wk formula highlight         | formulaHighlight       | Mode d'affichage de la surbrillance de la formule. Valeurs possibles : wk references (par défaut) : les formules affichées en tant que références sont mises en surbrillance wk values : les formules affichées sous forme de valeurs sont mises en surbrillance wk always : Les formules sont toujours surlignées, quel que soit leur mode d'affichage wk never : Les formules ne sont jamais mises en évidence, quel que soit leur mode d'affichage La couleur de la formule en surbrillance peut être définie par wk formula highlight color. |
| wk formula highlight color   | formulaHighlightColor  | Couleur des formules en surbrillance (voir wk formula highlight). Valeurs possibles : une chaîne de couleur CSS ("#010101" ou "#FFFFFF" ou "red"). une valeur d'entier long de couleur 4D                                                                                                                                                                                                                                                                                                                                                        |
| wk page view mode            | pageMode               | Mode d'affichage du document 4D Write Pro dans la zone formulaire à l'écran. Valeurs possibles (chaîne) : "draft" : Mode brouillon avec propriétés basiques du document "page" : Mode d'affichage le plus complet, qui inclut le contour de la page, l'orientation, les marges, les sauts de page, les en-têtes et les pieds de page, etc. "embedded" : Mode d'affichage adapté aux zones incluses                                                                                                                                               |
| wk resolution                | dpi                    | Résolution d'écran pour le contenu de la zone 4D Write Pro. Valeurs possibles : wk auto (0) Nombre supérieur à 1                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| wk spell enable              | spellEnabled           | Active la correction orthographique. Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| wk visible background        | visibleBackground      | Affiche les images de fond et la couleur de fond (effet visible uniquement en mode d'affichage Page ou Inclus). Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                   |
| wk visible empty images      | visibleEmptyImages     | Affiche ou exporte un rectangle noir par défaut pour les images qui ne peuvent pas être chargées ou calculées (images vides ou images sous un format non pris en charge). Valeurs possibles : True/False. Valeur par défaut : True Si la valeur est False, les éléments d'image manquants ne seront pas affichés du tout, même s'ils ont des bordures, une largeur, une hauteur ou un arrière-plan ; cela peut avoir une incidence sur la mise en page des images en ligne.                                                                      |
| wk visible footers           | visibleFooters         | Affiche ou exporte les pieds de page (pour l'affichage, effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk visible headers           | visibleHeaders         | Affiche ou exporte les en-têtes (pour l'affichage, effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                            |
| wk visible hidden characters | visibleHiddenChars     | Affiche les caractères cachés. Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| wk visible horizontal ruler  | visibleHorizontalRuler | Affiche la règle horizontale. Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| wk visible HTML WYSIWYG      | htmlWYSIWIGEnabled     | Active la vue HTML WYSIWYG. Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| wk visible page frames       | visiblePageFrames      | Affiche les cadres de la page (effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                |
| wk visible references        | visibleReferences      | Affiche ou exporte toutes les expressions 4D insérées dans le document en tant que références. Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                    |
| wk visible vertical ruler    | visibleVerticalRuler   | Affiche la règle verticale (effet visible uniquement en mode d'affichage Page). Valeurs possibles : True/False                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| wk zoom                      | zoom                   | Pourcentage de zoom pour l'affichage du contenu de la zone 4D Write Pro. Valeur possible : Nombre supérieur à 1                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Exemple 

Dans la zone 4D Write Pro, vous souhaitez afficher les règles uniquement en mode page :

```4d
 var $viewProps : Object
 $viewProps:=WP Get view properties(*;"4DWPArea")
 If($viewProps.pageMode="page")
    $viewProps.visibleHorizontalRuler:=True
    $viewProps.visibleVerticalRuler:=True
 Else
    $viewProps.visibleHorizontalRuler:=False
 End if
 WP FIXER ATTRIBUTS VUE(*;"4DWPArea";$viewProps)
```

#### Voir aussi 

[WP SET VIEW PROPERTIES](wp-set-view-properties.md)  