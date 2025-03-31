---
id: buttonOverview
title: Bouton
---

Un bouton est un objet actif auquel une action peut être assignée (*ex :* une tâche de base de données ou une fonction d'interface) pour qu'elle soit réalisée lorsque l'utilisateur clique dessus.

![](../assets/en/FormObjects/button_regular.png)

Les boutons peuvent répondre à divers besoins qui dépendent du style et de l'action qui leur est affecté(e). Par exemple, les boutons peuvent amener l'utilisateur à faire des choix ou à compléter un questionnaire ou formulaire. En fonction de leurs propriétés, les bouton peuvent être destinés à être cliqués une fois seulement et à exécuter une commande, ou à être cliqués plusieurs fois pour obtenir le résultat escompté.

## Gestion des boutons

Les actions assignées aux boutons peuvent provenir d'[actons standard](properties_Action.md#standard-action) ou de méthodes objet personnalisées. Les actions typiques peuvent consister à laisser l'utilisateur accepter, annuler ou supprimer des enregistrements, à copier ou coller des données, à passer d'une page à l'autre dans un formulaire de plusieurs pages, à ouvrir, supprimer ou ajouter des enregistrements dans un sous-formulaire, à gérer les attributs de police dans les zones de texte , etc.

Les boutons avec des actions standard sont grisés le cas échéant lors de l'exécution du formulaire. Par exemple, si le premier enregistrement d'une table est affiché, un bouton avec l'action standard `firstRecord` apparaît grisé.

Si vous souhaitez qu'un bouton exécute une action qui n'est pas disponible en tant qu'action standard, laissez le champ d'action standard vide et écrivez une méthode objet pour spécifier l'action du bouton. Pour plus d'informations sur les méthodes d'objet et comment les créer et les associer, voir [Utilisation de méthodes objet](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html). En règle générale, vous activez l'événement `On Clicked` et la méthode s'exécute uniquement lorsque vous cliquez sur le bouton. Vous pouvez associer une méthode à n'importe quel bouton.

La [variable](properties_Object.md#variable-or-expression) associée à un bouton est automatiquement définie sur **0** lorsque le formulaire est exécuté pour la première fois en mode Développement ou Application. Lorsque l'utilisateur clique sur un bouton, sa variable est définie sur **1**.

> Il est possible d'affecter à la fois une action standard et une méthode à un bouton. Dans ce cas, si le bouton n'est pas désactivé par l'action standard, la méthode est exécutée avant l'action standard.

## Styles de bouton

Les styles de bouton contrôlent l'apparence générale d'un bouton ainsi que ses propriétés. Il est possible d'appliquer différents styles prédéfinis aux boutons ou de leur associer des pop-up menus. Plusieurs variantes peuvent être obtenues en combinant ces propriétés/comportements.

À l'exception des [propriétés disponibles](#supported-properties), de nombreux objets bouton sont *structurellement* identiques. La différence réside dans le traitement de leurs variables associées.

4D propose des boutons dans les styles prédéfinis suivants :

### Classique

Le style de bouton Classique est un bouton système standard (c'est-à-dire un rectangle avec un libellé descriptif) qui exécute le code lorsqu'un utilisateur clique dessus.

![](../assets/en/FormObjects/button_regular.png)

Par défaut, le style Classique a un fond gris clair avec un libellé au centre. Lorsque le curseur survole le style de bouton Classique, la bordure et la l'arrière-plan changent de couleur. En plus de lancer l'exécution de code, le style de bouton Classique imite un bouton mécanique en changeant rapidement la couleur d'arrière-plan lorsque vous cliquez dessus.

#### Exemple JSON

```4d

 "myButton": {
  "type": "button", //define the type of object
  "style":"regular", //define the style of the button
  "defaultButton":"true" //define button as the default choice
  "text": "OK", //text to appear on the button
  "action": "Cancel", //action to be be performed 
  "left": 60,  //left position on the form  
  "top": 160, //top position on the form 
    "width": 100,  //width of the button
  "height": 20 //height of the button
  }
```

Seuls les styles Classique et A plat proposent la propriété [Bouton par défaut](properties_Appearance.md#default-button).

### A plat

Le style de bouton A plat est un bouton système standard (c'est-à-dire un rectangle avec un libellé descriptif) qui exécute le code lorsqu'un utilisateur clique dessus.

![](../assets/en/FormObjects/button_flat.png)

Par défaut, le style A plat a un arrière-plan avec un libellé au centre, des bords arrondis et un design minimaliste. Le style graphique du bouton A plat est particulièrement utile pour les formulaires à imprimer.

#### Exemple JSON

```4d

 "myButton": {
                "type": "button", 
                "style":"flat", 
                "defaultButton":"true" 
                "text": "OK", 
                "action": "Cancel", 
                "left": 60,   
                "top": 160,   
                "width": 100, 
                "height": 20 
                }
```

Seuls les styles Classique et A plat proposent la propriété [Bouton par défaut](properties_Appearance.md#default-button).

### Toolbar (Barre d’outils)

Le style du bouton Barre d'outils est initialement destiné à être intégré dans une barre d'outils. Il inclut l'option à ajouter à un pop-up menu (indiqué par un triangle inversé) généralement utilisé pour afficher des choix de sélection supplémentaires pour l'utilisateur.

Par défaut, le style bouton Barre d'outils a un fond transparent avec un libellé au centre. En fonction du système d'exploitation, le design du bouton peut changer lorsque la souris le survole :

- *Sous Windows* - le contour du bouton apparaît lorsqu’il dispose de la propriété “Avec pop-up menu”, et un triangle est affiché à droite et au centre du bouton.

![](../assets/en/FormObjects/button_toolbar.png)

- *Sous macOS* - le contour du bouton n’apparaît jamais. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et en bas du bouton.

#### Exemple JSON

```4d
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

Le bouton barre d'outils combine l'apparence du style [Classique](#regular) (c'est-à-dire un rectangle avec un libellé descriptif) et la propriété de pop-up menu du style [Barre d'outils](#toolbar).

Par défaut, le style Bevel a un fond gris clair avec un libellé au centre. En fonction du système d'exploitation, le design du bouton peut changer lorsque la souris le survole :

- *Sous Windows* - le contour du bouton apparaît. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et au centre du bouton.

![](../assets/en/FormObjects/button_bevel.png)

- *Sous macOS* - le contour du bouton n’apparaît jamais. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et en bas du bouton.

#### Exemple JSON

```4d
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

### Bevel arrondi

Le style du bouton Bevel arrondi est presque identique au style [Bevel](#bevel), à l'exception des coins du bouton qui peuvent, selon le système d'exploitation, être arrondis. Comme pour le style Bevel, le style Bevel arrondi combine l'apparence du style [Classique](#regular) et du style [Barre outils](#toolbar).

Par défaut, le style Bevel arrondi a un fond gris clair avec un libellé au centre. En fonction du système d'exploitation, le design du bouton peut changer lorsque la souris le survole :

- *Sous Windows* - le bouton est identique au style Bevel. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et au centre du bouton.

  ![](../assets/en/FormObjects/button_roundedbevel.png)

- *Sous macOS* - les coins du bouton sont arrondis. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et en bas du bouton.

#### Exemple JSON

```4d
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

Le style du bouton OS X Gradient est presque identique au style [Bevel](#bevel). Comme pour le style Bevel, le style OS X Gradient combine l'apparence du style [Classique](#regular) et du style [Barre outils](#toolbar).

Par défaut, le style OS Gradient a un fond gris clair avec un libellé au centre. En fonction du système d'exploitation, le design du bouton peut changer lorsque la souris le survole :

- *Sous Windows* - le bouton est identique au style Bevel. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite du bouton.

![](../assets/en/FormObjects/button_osxgradient.png)

- *Sous macOs* - le bouton s'affiche comme un bouton à deux tons. Lorsqu’il dispose de la propriété “Avec pop up menu”, un triangle est affiché à droite et en bas du bouton.

#### Exemple JSON

```4d
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

### OS X Texture

Le style de bouton OS X Textured est presque identique au style [Bevel](#bevel) mais avec une taille plus petite (la taille maximale est celle d'un bouton système standard de macOS). Comme pour le style Bevel, le style OS X Textured combine l'apparence du style [Classique](#regular) et du style [Barre outils](#toolbar).

Par défaut, le style OS X Textured apparaît comme :

- *Sous Windows* - un bouton système standard avec un fond gris clair et un libellé au centre. Il a la particularité d'être transparent dans Vista.

 ![](../assets/en/FormObjects/button_osxtextured.png)

- *Sous macOS* - un bouton système standard affichant un changement de couleur du gris clair au gris foncé. Sa hauteur est prédéfinie : il n'est pas possible de l'agrandir ou de la réduire.

#### Exemple JSON

```4d
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

Le style de bouton Office XP combine l'apparence du style [Classique](#regular) et du style [Barre outils](#toolbar).

Les couleurs (surbrillance et arrière-plan) d'un bouton au style Office XP sont basées sur les couleurs du système. En fonction du système d'exploitation, le design du bouton peut changer lorsque la souris le survole :

- *Sous Windows* - son arrière-plan n'apparaît que lorsque la souris le survole.

![](../assets/en/FormObjects/button_officexp.png)

- *Sous macOS* - son arrière-plan est toujours affiché.

#### Exemple JSON

```4d
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

### Aide

Le style du bouton Aide peut être utilisé pour afficher un bouton d'aide système standard. Par défaut, le style Aide s'affiche sous la forme d'un point d'interrogation dans un cercle.

![](../assets/en/FormObjects/button_help.png)

#### Exemple JSON

```4d
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

> Le style Aide ne supporte pas les propriétés de base [Nombre d'États](properties_TextAndPicture.md#number-of-states), [Chemin d'accès image](properties_TextAndPicture.md#picture-pathname) et [Position Titre/image](properties_TextAndPicture.md#titlepicture-position).

### Rond

Le style de bouton Rond apparaît comme un bouton système circulaire. Ce style de bouton est conçu pour macOS.

![](../assets/en/FormObjects/button_circleM.png)

Sous Windows, il est identique au style «Aucun» (le cercle en arrière-plan n'est pas pris en compte).

#### Exemple JSON

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

### Personnalisé

Le style de bouton Personnalisé accepte une image d'arrière-plan personnalisée et permet de gérer des paramètres supplémentaires tels que la marge et le décalage d'icône.

![](../assets/en/FormObjects/button_custom.png)

#### Exemple JSON

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

## Propriétés prises en charge

Tous les boutons partagent une même série de propriétés de base :

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Number of States](properties_TextAndPicture.md#number-of-states)(1) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(1) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#titlepicture-position)(1) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Non pris en charge par le style [Aide](#help).

Des propriétés spécifiques supplémentaires sont disponibles, en fonction du [style de bouton](#button-styles) :

- [Chemin d'accès arrière-plan](properties_TextAndPicture.md#background-pathname) - [Marge horizontale](properties_TextAndPicture.md#horizontal-margin) - [Décalage icône](properties_TextAndPicture.md#icon-offset) - [Marge verticale](properties_TextAndPicture.md#vertical-margin) (Personnalisé)
- [Bouton par défaut](properties_Appearance.md#default-button) (A plat, Classique)
- [Avec pop-up menu](properties_TextAndPicture.md#with-pop-up-menu) (Barre outils, Bevel, Bevel arrondi, OS X Gradient, OS X Textured, Office XP, Rond, Personnalisé)
