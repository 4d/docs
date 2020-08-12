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

Une partie ou la totalité des cases à cocher contenues dans un formulaires peut être cochée ou non cochée. Un groupe de cases à cocher permet à l'utilisateur de cocher plusieurs options.


### Cases à cocher à trois états

Check box objects with [Regular](checkbox_overview.md#regular) and [Flat](checkbox_overview.md#flat) [button style](propertiesTextAndPicture.md#button-style) accept a third state. Ce troisième état représente un statut intermédiaire, généralement utilisé pour l’affichage. Il permet par exemple d’indiquer qu’une propriété est présente parmi une sélection d’objets mais pas dans chaque objet de la sélection.

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

Check boxes use [button styles](propertiesTextAndPicture.md#button-style) to control a check box's general appearance as well as its available properties. Il est possible d'appliquer différents styles prédéfinis aux cases à cocher. Plusieurs variantes peuvent être obtenues en combinant ces propriétés/comportements.

À l'exception des [propriétés disponibles](#supported-properties), de nombreux objets case à cocher sont *structurellement* identiques. La différence réside dans le traitement de leurs variables associées.

4D provides check boxes in the following predefined button styles:

### Classique

The Regular check box button style is a standard system check box (*i.e.*, a rectangle with a descriptive title):

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

The Flat check box button style is a minimalist appearance. Le graphisme du style A plat est particulièrement utile pour les formulaires à imprimer.

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



### Toolbar Button

The Toolbar Button check box button style is primarily intended for integration in a toolbar.

The Toolbar Button check box button style has a transparent background with a title. Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states).

Exemples avec les états coché / non coché / surligné :

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

The Bevel check box button style combines the appearance of the [Regular](#regular) button style (*i.e.*, a rectangle with a descriptive title) with the [Toolbar Button](#toolbar-button) button style's behavior.

The Bevel button style has a light gray background with a title. Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states).

Exemples avec les états coché / non coché / surligné :

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

The Rounded Bevel check box button style is nearly identical to the [Bevel](#bevel) button style except, depending on the OS, the corners of the button may be rounded. As with the Bevel button style, the Rounded Bevel button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

The Rounded Bevel button style has a light gray background with a title. Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states).

Exemple sous macOS :

  ![](assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> On Windows, the Rounded Bevel button style is identical to the [Bevel](#bevel) button style.


#### Exemple JSON :

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

The OS X Gradient check box button style is nearly identical to the [Bevel](#bevel) button style. As with the Bevel button style, the OS X Gradient button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

The OS X Gradient button style has a light gray background with a title and may be displayed as a two-tone system button on macOS. Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states).

  ![](assets/en/FormObjects/checkbox_osxgradient_mac.png)

> On Windows, this check box button style is identical to the [Bevel](#bevel) button style.


#### Exemple JSON :

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




### OS X Texture

The OS X Textured button style is similar to the [Bevel](#bevel) button style but with a smaller size (maximum size is the size of a standard macOS system button). As with the Bevel button style, the OS X Textured button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

By default, the OS X Textured button style appears as:

 - *Sous Windows* - un bouton système standard avec un fond bleu clair et un libellé au centre.

  ![](assets/en/FormObjects/checkbox_osxtextured.png)

 - *macOS* - a standard system button. Sa hauteur est prédéfinie : il n'est pas possible de l'agrandir ou de la réduire.

  ![](assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### Exemple JSON :

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

The Office XP button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

The colors (highlight and background) of a check box with the Office XP button style are based on the system colors. The appearance of the check box can be different when the cursor hovers over it, depending on the OS:

 - *Sous Windows* - son arrière-plan n'apparaît que lorsque la souris le survole. Exemples avec les états coché / non coché / surligné :

  ![](assets/en/FormObjects/checkbox_officexp.png)

 - *Sous macOS* - son arrière-plan est toujours affiché. Exemples avec les états cochés / non cochés :

  ![](assets/en/FormObjects/checkbox_officexp_mac.png)

#### Exemple JSON :

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

This check box button style can be used to add a standard collapse/expand icon. These icons are used natively in hierarchical lists.

 - *Windows* - the icon looks like a [+] or a [-]

  ![](assets/en/FormObjects/checkbox_collapse.png)

 - *Sous macOS* - il ressemble à un triangle pointant sur vers la droite ou vers le bas.

  ![](assets/en/FormObjects/checkbox_collapse_mac.png)


#### Exemple JSON :

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

In macOS and Windows, a check box with the "Disclosure" button style appears as a standard disclosure button, usually used to show/hide additional information. Lorsqu'il est utilisé comme bouton radio, le symbole du bouton pointe vers le bas avec la valeur 0 et vers le haut avec la valeur 1.

 - *Sous Windows*

    ![](assets/en/FormObjects/checkbox_disclosure.png)

 - *macOS*

    ![](assets/en/FormObjects/checkbox_disclosure_mac.png)


#### Exemple JSON :

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

The Custom button style accepts a personalized background picture and allows managing specific properties:

-  [Chemin d'accès arrière-plan](properties_TextAndPicture.md#backgroundPathname)
- [Décalage icône](properties_TextAndPicture.md#icon-offset)
- [Marge horizontale](properties_TextAndPicture.md#horizontalMargin) and [Marge verticale](properties_TextAndPicture.md#verticalMargin)

Il est généralement associé à une [image à 4 états](properties_TextAndPicture.md#number-of-states), qui peut être utilisée conjointement avec une </a>image d'arrière-plan</a> [à 4 états](properties_TextAndPicture.md#number-of-states).

#### Exemple JSON :

```
    "myCheckbox": {
        "type": "checkbox",
        "style":"custom",
        "text": "OK", 
        "icon": "/RESOURCES/smiley.jpg", 
        "iconFrame": 4, 
        "customBackgroundPicture": "/RESOURCES/paper.jpg", 
        "iconOffset": 5, //décalage icône personnalisé au clic
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


[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


Des propriétés spécifiques supplémentaires sont disponibles, en fonction du [style de bouton](#button-styles) :

- [Chemin d'accès arrière-plan](properties_TextAndPicture.md#backgroundPathname) - [Marge horizontale](properties_TextAndPicture.md#horizontalMargin) - [Décalage icône](properties_TextAndPicture.md#icon-offset) - [Marge verticale](properties_TextAndPicture.md#verticalMargin) (Personnalisé)
- [Trois états](properties_Display.md#three-states) (A plat, Classique)
- [Nombre d'états](properties_TextAndPicture.md#number-of-states) - [Chemin d'accès image](properties_TextAndPicture.md#picture-pathname) - [Position Titre/Image](properties_TextAndPicture.md#title-picture-position) (Bouton barre outils, Bevel, Bevel arrondi, OS X Gradient, OS X Textured, Office XP, Personnalisé)