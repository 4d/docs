---
id: buttonOverview
title: Bouton
---

Un bouton est un objet actif auquel une action peut être assignée (*ex :* une tâche de base de données ou une fonction d'interface) pour qu'elle soit réalisée lorsque l'utilisateur clique dessus.

![](assets/en/FormObjects/button_regular.png)

Les boutons peuvent répondre à divers besoins qui dépendent du style et de l'action qui leur est affecté(e). Par exemple, les boutons peuvent amener l'utilisateur à faire des choix ou à compléter un questionnaire ou formulaire. En fonction de leurs propriétés, les bouton peuvent être destinés à être cliqués une fois seulement et à exécuter une commande, ou à être cliqués plusieurs fois pour obtenir le résultat escompté.

<p>

## Gestion des boutons

Les actions assignées aux boutons peuvent provenir d'[actons standard](properties_Action.md#standard-action) ou de méthodes objet personnalisées. Les actions typiques peuvent consister à laisser l'utilisateur accepter, annuler ou supprimer des enregistrements, à copier ou coller des données, à passer d'une page à l'autre dans un formulaire de plusieurs pages, à ouvrir, supprimer ou ajouter des enregistrements dans un sous-formulaire, à gérer les attributs de police dans les zones de texte , etc.

Les boutons avec des actions standard sont grisés le cas échéant lors de l'exécution du formulaire. Par exemple, si le premier enregistrement d'une table est affiché, un bouton avec l'action standard `firstRecord` apparaît grisé.

Si vous souhaitez qu'un bouton exécute une action qui n'est pas disponible en tant qu'action standard, laissez le champ d'action standard vide et écrivez une méthode objet pour spécifier l'action du bouton. Pour plus d'informations sur les méthodes d'objet et comment les créer et les associer, voir [Utilisation de méthodes objet](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html). En règle générale, vous activez l'événement `Sur clic` et la méthode s'exécute uniquement lorsque vous cliquez sur le bouton. Vous pouvez associer une méthode à n'importe quel bouton.

La [variable](properties_Object.md#variable-or-expression) associée à un bouton est automatiquement définie sur **0** lorsque le formulaire est exécuté pour la première fois en mode Développement ou Application. Lorsque l'utilisateur clique sur un bouton, sa variable est définie sur **1**.

> Il est possible d'affecter à la fois une action standard et une méthode à un bouton. Dans ce cas, si le bouton n'est pas désactivé par l'action standard, la méthode est exécutée avant l'action standard.



## Styles de bouton

Les styles de bouton contrôlent l'apparence générale d'un bouton ainsi que ses propriétés. Il est possible d'appliquer différents styles prédéfinis aux boutons ou de leur associer des menus pop-up. Plusieurs variantes peuvent être obtenues en combinant ces propriétés/comportements.

À l'exception des [propriétés disponibles](#supported-properties), de nombreux objets bouton sont *structurellement* identiques. La différence réside dans le traitement de leurs variables associées.

4D propose des boutons dans les styles prédéfinis suivants :



### Standard

Le style de bouton Standard est un bouton système standard (c'est-à-dire un rectangle avec un libellé descriptif) qui exécute le code lorsqu'un utilisateur clique dessus.

![](assets/en/FormObjects/button_regular.png)

Par défaut, le style Standard a un fond gris clair avec un libellé au centre. Lorsque le curseur survole le style de bouton Sandard, la bordure et la l'arrière-plan changent de couleur. En plus de lancer l'exécution de code, le style de bouton Standard imite un bouton mécanique en changeant rapidement la couleur d'arrière-plan lorsque vous cliquez dessus.

#### Exemple JSON :

```code4d
    "myButton": {
        "type": "button",   //définit le type d'objet
        "style":"regular",  //définit le style du bouton
        "defaultButton":"true"  //définit le bouton comme choix par défaut
        "text": "OK",   //texte à faire apparaître dans le bouton
        "action": "Annuler", //Action à exécuter
        "left": 60,  //Position gauche dans le formulaire  
        "top": 160, //Position supérieure dans le formulaire  
        "width": 100,  //largeur du bouton
        "height": 20 //hauteur du bouton
        }
```


Seuls les styles Classique et A plat proposent la propriété [Bouton par défaut](properties_Appearance.md#default-button).


### A plat

Le style de bouton A plat est un bouton système standard (c'est-à-dire un rectangle avec un libellé descriptif) qui exécute le code lorsqu'un utilisateur clique dessus.

![](assets/en/FormObjects/button_flat.png)

By default, the Flat style has a white background with a label in the center, rounded corners, and a minimalist appearance. The Flat button style's graphic nature is particularly useful for forms that will be printed.

#### Exemple JSON :

```code4d

    "myButton": {
                "type": "button",   
                "style":"flat", 
                "defaultButton":"true"  
                "text": "OK",   
                "action": "Annuler", 
                "left": 60,         
                "top": 160,         
                "width": 100,   
                "height": 20    
                }
```


Seuls les styles Classique et A plat proposent la propriété [Bouton par défaut](properties_Appearance.md#default-button).

### Barre d’outils

The Toolbar button style is primarily intended for integration in a toolbar. It includes the option to add a pop-up menu (indicated by an inverted triangle) which is generally used to display additional choices for the user to select.

By default, the Toolbar style has a transparent background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted when it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_toolbar.png)

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",   
                "style":"toolbar",  
                "text": "OK",       
                "popupPlacement":"separated"    
                "action": "Cancel",     
                "left": 60,             
                "top": 160,             
                "width": 100,           
                "height": 20        
                }
```



### Bevel

The Bevel button style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is highlighted. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_bevel.png)

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",
                "style":"bevel",    
                "text": "OK",       
                "popupPlacement":"linked"   
                "action": "Cancel", 
                "left": 60,     
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```



### Rounded Bevel

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the Rounded Bevel style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

  ![](assets/en/FormObjects/button_roundedbevel.png)

 - *macOS* - the corners of the button are rounded. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",
                "style":"roundedBevel", 
                "text": "OK",   
                "popupPlacement":"none" /
                "action": "Cancel", 
                "left": 60,         
                "top": 160, 
                "width": 100,   
                "height": 20    
                }
```



### OS X Gradient

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the OS X Gradient style has a light gray background with a label in the center. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_osxgradient.png)

 - *macOS* - the button is displayed as a two-tone system button. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",   
                "style":"gradientBevel",
                "text": "OK",   
                "popupPlacement":"linked"
                "action": "Cancel",     
                "left": 60,     
                "top": 160, 
                "width": 100,   
                "height": 20    
                }
```


### OS X Textured

The OS X Textured button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the OS X Textured style appears as:

 - *Windows* - a standard system button with a light gray background with a label in the center. It has the special feature of being transparent in Vista.

 ![](assets/en/FormObjects/button_osxtextured.png)

 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",   
                "style":"texturedBevel",    
                "text": "OK",   
                "popupPlacement":"separated"    
                "action": "Cancel", 
                "left": 60,         
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```



### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's transparency and pop-up menu property option.

The colors (highlight and background) of a button with the Office XP style are based on the system colors. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it.

![](assets/en/FormObjects/button_officexp.png)

 - *macOS* - its background is always displayed.

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",   
                "style":"office",
                "text": "OK",
                "popupPlacement":"none" 
                "action": "Cancel", 
                "left": 60,     
                "top": 160, 
                "width": 100,
                "height": 20    
                }
```



### Help


The Help button style can be used to display a standard system help button. By default, the Help style is displayed as a question mark within a circle.

![](assets/en/FormObjects/button_help.png)

#### Exemple JSON :

```code4d
    "myButton": {
                "type": "button",
                "style":"help",     
                "text": "OK",   
                "dropping": "custom", 
                "left": 60, 
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```

> The Help style does not support [Number of States](properties_TextAndPicture.md#number-of-states), [Picture pathname](properties_TextAndPicture.md#picture-pathname), and [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) basic properties.


### Circle

The Circle button style appears as a round system button. This button style is designed for macOS.

![](assets/en/FormObjects/button_circleM.png)

On Windows, it is identical to the “None” style (the circle in the background is not taken into account).


#### Exemple JSON :

```
    "myButton": {
                "type": "button",   
                "style":"circular", 
                "text": "OK",   
                "dropping": "custom", 
                "left": 60, 
                "top": 160,     
                "width": 100,
                "height": 20    
                }
```



### Custom

The Custom button style accepts a personalized background picture and allows managing additional parameters such as icon and margin offset.

![](assets/en/FormObjects/button_custom.png)


#### Exemple JSON :

```code
    "myButton": {
                "type": "button",   
                "style":"custom",   
                "text": "", 
                "customBackgroundPicture": "/RESOURCES/bkgnd.png",
                "icon": "/RESOURCES/custom.png",  
                "textPlacement": "center",
                "left": 60, 
                "top": 160,     
                "width": 100,   
                "height": 20
                }
```




## Supported Properties

All buttons share the same set of basic properties:


[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Number of States](properties_TextAndPicture.md#number-of-states)(1) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(1) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(1) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Help](#help) style.


Additional specific properties are available, depending on the [button style](#button-styles):

- [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin) (Custom)
- [Default Button](properties_Appearance.md#default-button) (Flat, Regular)
- [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) - [With pop-up menu](properties_TextAndPicture.md#with-popup-menu) (Toolbar, Bevel, Rounded Bevel, OS X Gradient, OS X Textured, Office XP, Circle, Custom)

