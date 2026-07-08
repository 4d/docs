---
id: form-event-code
title: Form event code
slug: /commands/form-event-code
displayed_sidebar: docs
---

<!--REF #_command_.Form event code.Syntax-->**Form event code**  : Integer<!-- END REF-->

<!--REF #_command_.Form event code.Params-->

<div class="no-index">

| Paramètres | Type    |                             | Description                      |
| ---------- | ------- | --------------------------- | -------------------------------- |
| Résultat   | Integer | &#8592; | Numéro d'événement du formulaire |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release                     | Modifications                           |
| --------------------------- | --------------------------------------- |
| 18                          | Renommé (Form event) |
| <6 | Created                                 |

</details>
</div>

## Description

**Form event code** retourne une valeur numérique qui identifie le type d'événement formulaire qui vient de se produire. Habituellement, vous utiliserez **Form event code** dans une méthode formulaire ou une méthode objet.

4D fournit des constantes prédéfinies (placées dans le thème *Evénements formulaire*) permettant de comparer les valeurs retournées par la commande **Form event code**. Certains événements sont génériques (générés pour tout type d'objet), d'autres sont spécifiques à un type d'objet particulier.

Pour une description des événements, veuillez vous référer à la section [**Evénements formulaire**](../Events/overview.md).

## Exemple 1

Cet exemple montre l'utilisation de l'événement On Validate pour assigner automatiquement (à un champ) la date de modification de l'enregistrement :

```4d
  //Méthode d'un formulaire
 Case of
  // ...
    :(Form event code=On Validate)
       [aTable]Last Modified On:=Current date
 End case
```

## Exemple 2

Dans l'exemple suivant, la gestion complète d'un menu déroulant (initialisation, clics et relâchement de l'objet) est placée dans la méthode de l'objet :

```4d
  //Méthode objet de la liste déroulante asBurgerSize
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asBurgerSize;3)
       asBurgerSize{1}:="Small"
       asBurgerSize{1}:="Medium"
       asBurgerSize{1}:="Large"
    :(Form event code=On Clicked)
       If(asBurgerSize#0)
          ALERT("You chose a "+asBurgerSize{asBurgerSize}+" burger.")
       End if
    :(Form event code=On Unload)
       CLEAR VARIABLE(asBurgerSize)
 End case
```

## Exemple 3

L'exemple suivant est une méthode formulaire générique. Elle fait apparaître chacun des événements qui peuvent survenir lorsqu'un formulaire est utilisé comme formulaire sortie :

```4d
  //Méthode d"un formulaire utilisé comme formulaire sortie d'état
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Header)
  //Une zone d'entête va être imprimée
       Case of
          :(Before selection($vpFormTable->))
  //Code pour le premier en-tête de rupture
          :(Level=1)
  //Code pour l'en-tête de rupture 1
          :(Level=2)
  //Code pour l'en-tête de rupture 2
  //...
       End case
    :(Form event code=On Printing Detail)
  //Un enregistrement va être imprimé
  //Code pour chaque enregistrement
    :(Form event code=On Printing Break)
  //Une zone de rupture va être imprimée
       Case of
          :(Level=0)
  //Code pour niveau de rupture 0
          :(Level=1)
  //Code pour niveau de rupture 1
  //...
       End case
    :(Form event code=On Printing Footer)
       If(End selection($vpFormTable->))
  //Code pour le dernier pied
       Else
  //Code pour un pied
       End if
 End case
```

## Exemple 4

L'exemple suivant montre une méthode formulaire générique qui gère les événements pouvant survenir dans un formulaire sortie quand il s'affiche à l'aide de la commande [DISPLAY SELECTION](../commands-legacy/display-selection.md) ou [MODIFY SELECTION](../commands-legacy/modify-selection.md). Dans un but informatif, elle affiche l'événement dans la barre de titre de la fenêtre.

```4d
  //Méthode formulaire
 Case of
    :(Form event code=On Load)
       $vsTheEvent:="The form is about to be displayed"
    :(Form event code=On Unload)
       $vsTheEvent:="The output form has been exited and is about to disappear from the screen"
    :(Form event code=On Display Detail)
       $vsTheEvent:="Displaying record #"+String(Selected record number([TheTable]))
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been selected"
    :(Form event code=On Header")
       $vsTheEvent:="The header area is about to be drawn"
    :(Form event code=On Clicked")
       $vsTheEvent:="A record has been clicked"
    :(Form event code=On Double Clicked")
       $vsTheEvent:="A record has been double clicked"
    :(Form event code=On Open Detail)
       $vsTheEvent:="The record #"+String(Selected record number([TheTable]))+" is double-clicked"
    :(Form event code=On Close Detail)
       $vsTheEvent:="Going back to the output form"
    :(Form event code=On Activate)
       $vsTheEvent:="The form's window has just become the frontmost window"
    :(Form event code=On Deactivate)
       $vsTheEvent:="The form's window is no longer the frontmost window"
    :(Form event code=On Menu Selected)
       $vsTheEvent:="A menu item has been chosen"
    :(Form event code=On Outside Call)
       $vsTheEvent:="A call from another has been received"
    Else
       $vsTheEvent:="What's going on? Event #"+String(Form event)
 End case
 SET WINDOW TITLE($vsTheEvent)
```

## Exemple 5

Pour des exemples de gestion des événements [`On Before Keystroke`](../Events/onBeforeKeystroke.md) et [`On After Keystroke`](../Events/onAfterKeystroke.md), voir les exemples des commandes [Get edited text](../commands-legacy/get-edited-text.md), [Keystroke](../commands-legacy/keystroke.md) et [FILTER KEYSTROKE](../commands-legacy/filter-keystroke.md).

## Exemple 6

Cet exemple montre comment traiter les clics et les doubles clics de la même manière dans une zone de défilement :

```4d
  //Méthode de l'objet zone de défilement asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices ;...)
  //...
       asChoices:=0
    :((Form event code=On Clicked)|(Form event code=On Double Clicked))
       If(asChoices#0)
  //Un élement a reçu un clic, faire quelque chose ici
  //...
       End if
  //...
 End case
```

## Exemple 7

L'exemple suivant montre comment traiter les clics et double-clics de manière différente. Notez l'utilisation de l'élément zéro pour conserver la valeur de l'élément sélectionné :

```4d
  //Méthode l'objet de la zone de défilement asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices ;...)
  // ...
       asChoices:=0
       asChoices{0}:="0"
    :(Form event code=On Clicked)
       If(asChoices#0)
          If(asChoices#Num(asChoices))
  /Un nouvel élément a été cliqué, faites quelque chose ici
  //...
  //Enregistrer le nouvel élément sélectionné pour la prochaine fois
             asChoices{0}:=String(asChoices)
          End if
       Else
          asChoices:=Num(asChoices{0})
       End if
    :(Form event code=On Double Clicked)
       If(asChoices#0)
  //An item has been double clicked, do something different here
       End if
  // ...
 End case
```

## Exemple 8

L'exemple suivant montre comment maintenir une zone contenant du texte à partir d'une méthode formulaire à l'aide des événements [`On Getting Focus`](../Events/onGettingFocus.md) et [`On Losing Focus`](../Events/onLosingFocus.md) :

```4d
  //méthode du formulaire [Contacts];"Data Entry"
 Case of
    :(Form event code=On Load)
       var vtStatusArea : Text
       vtStatusArea:=""
    :(Form event code=On Getting Focus)
       RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)
       If(($vlTableNum#0)&($vlFieldNum#0))
          Case of
             :($vlFieldNum=1) //champ Last name
                vtStatusArea:="Enter the Last name of the Contact; it will be capitalized automatically"
  //...
             :($vlFieldNum=10) //Zip Code field
                vtStatusArea:="Enter a 5-digit zip code; it will be checked and validated automatically"
  //...
          End case
       End if
    :(Form event code=On Losing Focus)
       vtStatusArea:=""
  //...
 End case
```

## Exemple 9

Cet exemple illustre comment vous pouvez répondre à un événement de fermeture de fenêtre à l'aide d'un formulaire utilisé pour la saisie de données d'enregistrement :

```4d
  //Méthode d'un formulaire entrée
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("This record has been modified. Save Changes?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```

## Exemple 10

L'exemple suivant montre comment mettre en majuscules un champ Texte ou Alphanumérique chaque fois que la valeur est modifiée :

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

## Exemple 11

L'exemple suivant propose une manière de gérer une action de suppression dans une liste hiérarchique :

```4d
 ... //méthode objet de la liste hiérarchique
:(Form event code=On Delete Action)
 ARRAY LONGINT($itemsArray;0)
 $Ref:=Selected list items(<>HL;$itemsArray;*)
 $n:=Size of array($itemsArray)
 
 Case of
    :($n=0)
       ALERT("No item selected")
       OK:=0
    :($n=1)
       CONFIRM("Do you want to delete this item?")
    :($n>1)
       CONFIRM("Do you want to delete these items?")
 End case
 
 If(OK=1)
    For($i;1;$n)
       DELETE FROM LIST(<>HL;$itemsArray{$i};*)
    End for
 End if
```

## Exemple 12

Dans cet exemple, l'événement formulaire [`On Scroll`](../Events/onScroll.md) permet de synchroniser l'affichage de deux images dans un formulaire. Le code suivant est ajouté dans la méthode de l'objet "satellite" (champ ou variable image) :

```4d
 Case of
    :(Form event code=On Scroll)
  // on relève la position de l'image de gauche
       OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)
  // on l'applique à celle de droite
       OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)
 End case
```

Résultat : https://www.youtube.com/watch?v=YIRfsW1BmHE

## Exemple 13

Vous souhaitez dessiner un rectangle rouge autour de la cellule sélectionnée d'une list box, et vous voulez que le rectangle se déplace si l'utilisateur fait défiler verticalement la list box. Dans la méthode objet de la list box, vous pouvez écrire :

```4d
 Case of
 
    :(Form event code=On Clicked)
       LISTBOX GET CELL POSITION(* ; "LB1" ;$col;$raw)
       LISTBOX GET CELL COORDINATES(* ; "LB1" ;$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT SET VISIBLE(* ; "RedRect";True) //initialise un rectangle rouge
       OBJECT SET COORDINATES(* ; "RedRect" ;$x1;$y1;$x2;$y2)
 
    :(Form event code=On Scroll)
       LISTBOX GET CELL POSITION(* ; "LB1" ;$col;$raw)
       LISTBOX GET CELL COORDINATES(* ; "LB1" ;$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT GET COORDINATES(* ; "LB1" ;$xlb1;$ylb1;$xlb2;$ylb2)
       $toAdd:=LISTBOX Get headers height(* ; "LB1") //hauteur de l'en-tête pour ne pas le chevaucher
       If($ylb1+$toAdd<$y1)&($ylb2>$y2) //si nous sommes dans la listbox
  //pour rester simple, nous ne gérons que les en-têtes
  //mais nous devrions gérer le clipping horizontal
  //ainsi que les barres de défilement
          OBJECT SET VISIBLE(* ;"RedRect";True)
          OBJECT SET COORDINATES(* ; "RedRect" ;$x1;$y1;$x2;$y2)
       Else
          OBJECT SET VISIBLE(* ; "RedRect";False)
       End if
 
 End case
```

En résultat, le rectangle rouge suit bien le défilement de la list box :

![](../assets/en/commands/pict1900395.en.png)

## Voir également

[Form Events](../Events/overview.md)
[CALL SUBFORM CONTAINER](../commands-legacy/call-subform-container.md)\
[Current form table](../commands-legacy/current-form-table.md)\
[FILTER KEYSTROKE](../commands-legacy/filter-keystroke.md)\
[FORM Event](form-event.md)\
[Get edited text](../commands-legacy/get-edited-text.md)\
[Keystroke](../commands-legacy/keystroke.md)\
[POST OUTSIDE CALL](../commands-legacy/post-outside-call.md)\
[SET TIMER](../commands-legacy/set-timer.md)

## Propriétés

|                    |     |
| ------------------ | --- |
| Numéro de commande | 388 |
| Thread safe        | non |


