---
id: convert-coordinates
title: CONVERT COORDINATES
slug: /commands/convert-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT COORDINATES.Syntax-->**CONVERT COORDINATES** ( *coordX* ; *coordY* ; *depuis* ; *vers* )<!-- END REF-->
<!--REF #_command_.CONVERT COORDINATES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| coordX | Integer | &#8594;  | Coordonnée horizontale d'un point (initiale) |
| &#8592; | Coordonnée horizontale d'un point (convertie) |
| coordY | Integer | &#8594;  | Coordonnée verticale d'un point (initiale) |
| &#8592; | Coordonnée verticale d'un point (convertie) |
| depuis | Integer | &#8594;  | Système de coordonnées d'origine |
| vers | Integer | &#8594;  | Système de coordonnées dans lequel convertir le point |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.CONVERT COORDINATES.Summary-->La commande **CONVERT COORDINATES** permet de convertir les coordonnées (x;y) d'un point depuis un système de coordonnées vers un autre système de coordonnées.<!-- END REF--> Les systèmes de coordonnées pris en charge sont les formulaires (ainsi que les sous-formulaires), les fenêtres et l'écran. Par exemple, vous pouvez utiliser cette commande pour obtenir les coordonnées, dans le formulaire principal, d'un objet appartenant à un sous-formulaire. Ce principe facilite notamment la création de menus contextuels à des emplacements personnalisés. 

Dans *coordX* et *coordY*, passez des variables contenant les coordonnées (x;y) du point que vous voulez convertir. Après exécution de la commande, ces variables contiendront les valeurs converties.

Dans le paramètre *depuis*, passez le système d'origine dans lequel sont exprimées les coordonnées du point, et dans le paramètre *vers*, passez le système de coordonnées dans lequel elles doivent être converties. Chaque paramètre peut avoir pour valeur l'une des constantes suivantes, présentes dans le thème "*Fenêtre*" :

| Constante         | Type        | Valeur | Comment                                                                                                                   |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| XY Current form   | Entier long | 1      | L'origine est le coin supérieur gauche du formulaire courant                                                              |
| XY Current window | Entier long | 2      | L'origine est le coin supérieur gauche de la fenêtre courante                                                             |
| XY Main window    | Entier long | 4      | Windows : L'origine est le coin supérieur gauche de la fenêtre principale ; OS X : identique à XY Screen                  |
| XY Screen         | Entier long | 3      | L'origine est le coin supérieur de l'écran principal (comme pour la commande [SCREEN COORDINATES](screen-coordinates.md)) |

Lorsque cette commande est appelée depuis la méthode d'un sous-formulaire ou d'un objet du sous-formulaire, si l'un des sélecteurs est XY Current form, les coordonnées correspondantes sont relatives au sous-formulaire lui-même, et non celles de son formulaire parent. 

Lorsque vous effectuez une conversion depuis/vers la position d'une fenêtre de formulaire (par exemple une conversion depuis les résultats de [GET WINDOW RECT](get-window-rect.md), ou vers des valeurs passées à [Open form window](open-form-window.md)), le sélecteur XY Main window doit être utilisé car il s'agit du système de coordonnées utilisé par les commandes de gestion des fenêtres sous Windows. Ce sélecteur peut également être utilisé dans ce but sous OS X, où il est équivalent à XY Screen.

Lorsque le sélecteur *depuis* contient XY Current form et que le point à convertir est situé dans la zone de corps d'un formulaire liste, le résultat dépend du contexte d'appel de la commande : 

* Si la commande est appelée dans l'événement On Display Detail, le point résultant est situé dans le périmètre d'affichage de l'enregistrement affiché à l'écran.
* Si la commande est appelée en-dehors de l'événement On Display Detail mais qu'un enregistrement est en cours de modification, le point résultant est situé dans le périmètre d'affichage de l'enregistrement en cours d'édition.
* Sinon, le point résultant est situé dans le périmètre d'affichage du premier enregistrement.

#### Exemple 1 

Vous souhaitez afficher un pop up menu à l'angle inférieur gauche de l'objet "MonObjet" :

```4d
  // OBJECT GET COORDINATES / OBJET LIRE COORDONNEES utilise
  // le système de coordonnées du formulaire courant
  // Dynamic pop up menu / Pop up menu dynamique utilise
  // le système de coordonnées de la fenêtre courante
  // Il faut donc convertir les valeurs
 var $left;$top;$right;$bottom : Integer
 var $menu : Text
 OBJECT GET COORDINATES(*;"MonObjet";$left;$top;$right;$bottom)
 CONVERT COORDINATES($left;$bottom;XY Current form;XY Current window)
 $menu:=Create menu
 APPEND MENU ITEM($menu;"Right here")
 APPEND MENU ITEM($menu;"Right now")
 Dynamic pop up menu($menu;"";$left;$bottom)
 RELEASE MENU($menu)
```

![](../assets/en/commands/pict2678144.en.png)

#### Exemple 2 

Vous souhaitez créer une fenêtre pop up à l'emplacement du curseur de la souris. Sous Windows, vous devez convertir les coordonnées car [MOUSE POSITION](mouse-position.md) (avec le paramètre \*) retourne des valeurs basées sur la position de la fenêtre MDI :

```4d
 var $mouseX;$mouseY;$mouseButtons : Integer
 var $window : Integer
 MOUSE POSITION($mouseX;$mouseY;$mouseButtons)
 CONVERT COORDINATES($mouseX;$mouseY;XY Current window;XY Main window)
 $window:=Open form window("PopupWindowForm";Pop up form window;$mouseX;$mouseY)
 DIALOG("PopupWindowForm")
 CLOSE WINDOW($window)
```

#### Voir aussi 

[GET WINDOW RECT](get-window-rect.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  