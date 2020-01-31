---
id: checkboxOverview
title: Case à cocher
---

## Aperçu

Une case à cocher est un type de bouton utilisée pour saisir ou afficher une donnée binaire (vrai-faux). Elle peut être soit sélectionnée soit désélectionnée, mais un troisième état peut également être défini (voir ci-dessous).

![](assets/en/FormObjects/checkbox.png)

L’effet d’une case à cocher est contrôlé par une méthode. Comme tous les boutons, une case à cocher est initialisée à la valeur zéro lorsque le formulaire est ouvert pour la première fois. La méthode associée à une case à cocher est exécutée lorsqu’elle est cochée.

Une case à cocher affiche généralement du texte en face de la case. Ce texte est défini dans la zone [Titre](properties_Object.md#title) du thème “Objets” de la Liste des propriétés. Vous pouvez saisir dans cette zone un libellé sous forme de référence XLIFF (cf. [Annexe B : Architecture XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).


## Utiliser une case à cocher

Une case à cocher peut être associée à une [variable ou expression](properties_Object.md#variable-or-expression) de type entier ou booléen.

- **entier :** si la case est cochée, la variable prend la valeur 1. Lorsqu'elle n'est pas cochée, elle porte la valeur 0. Si la case à cocher a un troisième état (voir ci-dessous), elle porte la valeur 2.
- **booléen :** si la case est cochée, la variable prend la valeur `Vrai`. Lorsqu'elle n'est pas cochée, elle prend la valeur `Faux`.

Une partie ou la totalité des cases à cocher contenues dans un formulaires peut être cochée ou non cochée. A group of check boxes allows the user to select multiple options.


### Cases à cocher à trois états

Les objets de type case à cocher de style [Classique](checkbox_overview.md#regular) et [A plat](checkbox_overview.md#flat) acceptent un troisième état. Ce troisième état représente un statut intermédiaire, généralement utilisé pour l’affichage. Il permet par exemple d’indiquer qu’une propriété est présente parmi une sélection d’objets mais pas dans chaque objet de la sélection.

![](assets/en/FormObjects/checkbox_3states.png)

Pour qu’une case à cocher prenne en charge ce troisième état, vous devez lui attribuer la propriété [Trois états](properties_Display.md#three-states) dans la Liste des propriétés, thème “Affichage” .

Cette propriété n’est disponible que pour les cases à cocher classiques et à plat associées à des [variables ou expressions](properties_Object.md#variable-or-expression) numériques — les cases à cocher de représentation des expressions booléennes sont exclues de ce principe (une expression booléenne ne pouvant pas se trouver dans un état intermédiaire).

La variable associée à la case à cocher retourne la valeur 2 lorsque celle-ci se trouve dans le troisième état.
> En saisie, les cases à cocher à trois états affichent séquentiellement chaque état, dans l’ordre suivant : non coché / coché / intermédiaire / non coché, etc. L’état intermédiaire étant généralement inutile en saisie ; il vous suffit, dans le code, de “forcer” la valeur de la variable à 0 lorsqu’elle prend la valeur 2 afin de passer directement de l’état coché à l’état non coché.


## Utiliser une action standard

Vous pouvez affecter une [action standard](properties_Action.md#standard-action) à une case à cocher pour gérer les attributs des zones de texte. Par exemple, si vous sélectionnez l'action standard `fontBold`, à l'exécution la case à cocher permettra de gérer l'attribut "gras" du texte sélectionné dans la zone de texte courante.

Seules les actions qui peuvent représenter un statut vrai/faux (actions "à coche") sont prises en charge par cet objet :

| Actions prises en charge            | Conditions d'utilisation (le cas échéant) |
| ----------------------------------- | ----------------------------------------- |
| avoidPageBreakInsideEnabled         | Zones 4D Write Pro uniquement             |
| fontItalic                          |                                           |
| fontBold                            |                                           |
| fontLinethrough                     |                                           |
| fontSubscript                       | Zones 4D Write Pro uniquement             |
| fontSuperscript                     | Zones 4D Write Pro uniquement             |
| fontUnderline                       |                                           |
| font/showDialog                     | Mac uniquement                            |
| htmlWYSIWIGEnabled                  | Zones 4D Write Pro uniquement             |
| section/differentFirstPage          | Zones 4D Write Pro uniquement             |
| section/differentLeftRightPages     | Zones 4D Write Pro uniquement             |
| spell/autoCorrectionEnabled         |                                           |
| spell/autoDashSubstitutionsEnabled  | Mac uniquement                            |
| spell/autoLanguageEnabled           | Mac uniquement                            |
| spell/autoQuoteSubstitutionsEnabled | Mac uniquement                            |
| spell/autoSubstitutionsEnabled      |                                           |
| spell/enabled                       |                                           |
| spell/grammarEnabled                | Mac uniquement                            |
| spell/showDialog                    | Mac uniquement                            |
| spell/visibleSubstitutions          |                                           |
| visibleBackground                   | Zones 4D Write Pro uniquement             |
| visibleFooters                      | Zones 4D Write Pro uniquement             |
| visibleHeaders                      | Zones 4D Write Pro uniquement             |
| visibleHiddenChars                  | Zones 4D Write Pro uniquement             |
| visibleHorizontalRuler              | Zones 4D Write Pro uniquement             |
| visiblePageFrames                   | Zones 4D Write Pro uniquement             |
| visibleReferences                   |                                           |
| widowAndOrphanControlEnabled        | Zones 4D Write Pro uniquement             |

Pour plus d'informations sur ces actions, veuillez vous reporter à la section [Actions standard](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).

## Styles des boutons "Case à cocher"

Les styles de bouton des cases à cocher contrôlent l'apparence générale d'une case à cocher ainsi que ses propriétés. Il est possible d'appliquer différents styles prédéfinis aux cases à cocher. Plusieurs variantes peuvent être obtenues en combinant ces propriétés/comportements.

À l'exception des [propriétés disponibles](#supported-properties), de nombreux objets case à cocher sont *structurellement* identiques. La différence réside dans le traitement de leurs variables associées.

4D propose des cases à cocher avec les styles prédéfinis suivants :

### Classique

Le style Classique de case à cocher correspond à un système de case à cocher standard (*i.e.*, un rectangle avec un titre descriptif) :

![](assets/en/FormObjects/checkbox_regular.png)

#### Exemple JSON :

```
    "myCheckBox": {
        "type": "checkbox", 
        "style":"regular",
        "text": "Cancel",   
        "action": "Cancel",     
        "left": 60,         
        "top": 160,     
        "width": 100,           
        "height": 20        
        "dataSourceTypeHint":"boolean"
        }
```



### A plat

The Flat check box style is a minimalist appearance. The Flat style's graphic nature is particularly useful for forms that will be printed.

![](assets/en/FormObjects/checkbox_flat.png)

#### Exemple JSON :

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"flat",
            "text": "Cancel",   
            "action": "cancel", 
            "left": 60,     
            "top": 160, 
            "width": 100,           
            "height": 20            
            }
```



### Bouton barre outils

Le style du bouton Barre outils est initialement destiné à être intégré dans une barre d'outils.

Le style Barre outils possède un fond transparent et un titre. Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_toolbar.png)


#### Exemple JSON :

```
    "myCheckBox": {
                "type": "checkbox",
                "style":"toolbar",  
                "text": "Checkbox",
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,                   
                "height": 20                    
                }
```



### Bevel

The Bevel check box style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive title) style with the [Toolbar](#toolbar) style's behavior.

The Bevel style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_bevel.png)


#### Exemple JSON :

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"bevel",
                "text": "Checkbox",  
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,               
                "height": 20                
                }
```



### Bevel arrondi

The Rounded Bevel check box style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

The Rounded Bevel style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example on macOS:

  ![](assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> on Windows, the Rounded Bevel style is identical to the [Bevel](#bevel) style.


#### JSON Example:

```4d
    "myCheckBox": {
                "type": "checkbox", 
                "style":"roundedBevel",  
                "text": "Checkbox", 
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```



### OS X Gradient

The OS X Gradient check box style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

The OS X Gradient style has a light gray background with a title and is displayed as a two-tone system button on macOS. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

  ![](assets/en/FormObjects/checkbox_osxgradient_mac.png)

> On Windows, this style is identical to the [Bevel](#bevel) style.


#### JSON Example:

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"gradientBevel", 
            "text": "Checkbox", 
            "icon": "/RESOURCES/File.png",
            "iconFrames": 4
            "left": 60,     
            "top": 160,     
            "width": 100,               
            "height": 20                
           }
```




### OS X Textured

The OS X Textured checkbox style is similar to the [Bevel](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

By default, the OS X Textured style appears as:

 - *Windows* - a standard system button with a light blue background with a title in the center.

  ![](assets/en/FormObjects/checkbox_osxtextured.png)

 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.

  ![](assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON Example:

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"texturedBevel", 
            "text": "Checkbox", 
            "left": 60, 
            "top": 160, 
            "width": 100,                   
            "height": 20                    
            }
```




### Office XP

The Office XP check box style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

The colors (highlight and background) of a button with the Office XP style are based on the system colors. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it. Example with states unchecked / checked / highlighted:

  ![](assets/en/FormObjects/checkbox_officexp.png)

 - *macOS* - its background is always displayed. Example with states unchecked / checked:

  ![](assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON Example:

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"office",
                "text": "Checkbox",  
                "action": "fontBold",
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4     
               "left": 60,  
                "top": 160,     
                "width": 100,           
                "height": 20            
                }
```



### Contracter/Déployer

This check box style can be used to add a standard collapse/expand icon. These buttons are used natively in hierarchical lists.

 - *Windows* - the button looks like a [+] or a [-]

  ![](assets/en/FormObjects/checkbox_collapse.png)

 - *macOS* - it looks like a triangle pointing right or down.

  ![](assets/en/FormObjects/checkbox_collapse_mac.png)


#### JSON Example:

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"disclosure",
                "method": "m_collapse",
                "left": 60, 
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```



### Bouton disclosure

In macOS and Windows, a check box with the "Disclosure" style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1.

 - *Windows*

    ![](assets/en/FormObjects/checkbox_disclosure.png)

 - *macOS*

    ![](assets/en/FormObjects/checkbox_disclosure_mac.png)


#### JSON Example:

```
    "myCheckBox": {
                "type": "checkbox",     
                "style":"roundedDisclosure",    
                "method": "m_disclose",
                "left": 60,     
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```


### Personnalisé

The Custom check box style accepts a personalized background picture and allows managing specific properties:

-  [Background pathname](properties_TextAndPicture.md#backgroundPathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Vertical Margin](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### JSON Example:

```
    "myCheckbox": {
        "type": "checkbox",
        "style":"custom",
        "text": "OK", 
        "icon": "/RESOURCES/smiley.jpg", 
        "iconFrame": 4, 
        "customBackgroundPicture": "/RESOURCES/paper.jpg", 
        "iconOffset": 5, //custom icon offset when clicked
        "left": 60, 
        "top": 160, 
        "width": 100,       
        "height": 20,
        "customBorderX": 20,
        "customBorderY": 5
        }
```




## Propriétés prises en charge

Toutes les cases à cocher partagent une même série de propriétés de base :


[Gras](properties_Text.md#bold) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Style de bouton](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Focusable](properties_Entry.md#focusable) - [Police](properties_Text.md#font) - [Couleur de la police](properties_Text.md#font-color) - [Taille de la police](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Message d'aide](properties_Help.md#help-tip) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Nom](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Raccourci](properties_Entry.md#shortcut) - [Action standard](properties_Action.md#standard-action) - [Titre](properties_Object.md#title) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)


Des propriétés spécifiques supplémentaires sont disponibles, en fonction du [style de bouton](#button-styles) :

- [Chemin d'accès arrière-plan](properties_TextAndPicture.md#backgroundPathname) - [Marge horizontale](properties_TextAndPicture.md#horizontalMargin) - [Décalage icône](properties_TextAndPicture.md#icon-offset) - [Marge verticale](properties_TextAndPicture.md#verticalMargin) (Personnalisé)
- [Trois états](properties_Display.md#three-states) (A plat, Classique)
- [Nombre d'états](properties_TextAndPicture.md#number-of-states) - [Chemin d'accès image](properties_TextAndPicture.md#picture-pathname) - [Position Titre/Image](properties_TextAndPicture.md#title-picture-position) (Bouton barre outils, Bevel, Bevel arrondi, OS X Gradient, OS X Textured, Office XP, Personnalisé)