---
id: form-event-code
title: Form event code
displayed_sidebar: docs
---

<!--REF #_command_.Form event code.Syntax-->**Form event code**  : Integer<!-- END REF-->

<!--REF #_command_.Form event code.Params-->

| Paramètres | Type    |   | Description                   |
| ---------- | ------- | - | ----------------------------- |
| Résultat   | Integer | ← | Numéro d'événement formulaire |

<!-- END REF-->

#### Description

**Form event code** retourne une valeur numérique qui identifie le type d'événement formulaire qui vient de se produire. Habituellement, vous utiliserez **Form event code** dans une méthode formulaire ou une méthode objet.

4D fournit des constantes prédéfinies (placées dans le thème *Evénements formulaire*) permettant de comparer les valeurs retournées par la commande **Form event code**. Certains événements sont génériques (générés pour tout type d'objet), d'autres sont spécifiques à un type d'objet particulier.

Pour une description des événements, veuillez vous référer à la section [**Evénements formulaire**](../Events/overview.md).

#### Exemple 1

Cet exemple montre l'utilisation de l'événement On Validate pour assigner automatiquement (à un champ) la date de modification de l'enregistrement :

```4d
  //Méthode formulaire
 Case of
  // ...
    :(Form event code=On Validate)
       [aTable]Last Modified On:=Current date
 End case
```

#### Exemple 2

Dans l'exemple suivant, la gestion complète d'un menu déroulant (initialisation, clics et relâchement de l'objet) est placée dans la méthode de l'objet :

```4d
  //Méthode objet du menu déroulant taTaille
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asBurgerSize;3)
       asBurgerSize{1}:="Small"
       asBurgerSize{1}:="Medium"
       asBurgerSize{1}:="Large"
    :(Form event code=On Clicked)
       If(asBurgerSize#0)
          ALERT("Vous avez choisi la taille "+asBurgerSize{asBurgerSize}+".")
       End if
    :(Form event code=On Unload)
       CLEAR VARIABLE(asBurgerSize)
 End case
```

#### Exemple 3

L'exemple suivant est une méthode formulaire générique. Elle fait apparaître chacun des événements qui peuvent survenir lorsqu'un formulaire est utilisé comme formulaire sortie :

```4d
  //Méthode d'un formulaire sortie
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Header)
  //La zone en-tête va être imprimée ou affichée
       Case of
          :(Before selection($vpFormTable->))
  //Le code pour la première rupture d'en-tête doit être placé ici
          :(Level=1)
  //Le code pour la rupture d'en-tête niveau 1 doit être placé ici
          :(Level=2)
  //Le code pour la rupture d'en-tête niveau 2 doit être placé ici
  //...
       End case
    :(Form event code=On Printing Detail)
  //Un enregistrement va être imprimé
  //Le code pour chaque enregistrement doit être placé ici
    :(Form event code=On Printing Break)
  //Une rupture va être imprimée
       Case of
          :(Level=0)
  //Le code pour la rupture 0 doit être placé ici
          :(Level=1)
  //Le code pour la rupture 1 doit être placé ici
  //...
       End case
    :(Form event code=On Printing Footer)
       If(End selection($vpFormTable->))
  //Le code pour le dernier pied de page doit être placé ici
       Else
  //Le code pour un pied de page doit être placé ici
       End if
 End case
```

#### Exemple 4

L'exemple suivant montre une méthode formulaire générique qui gère les événements pouvant survenir dans un formulaire sortie quand il s'affiche à l'aide de la commande [DISPLAY SELECTION](../commands-legacy/display-selection.md) ou [MODIFY SELECTION](../commands-legacy/modify-selection.md). Dans un but informatif, elle affiche l'événement dans la barre de titre de la fenêtre.

```4d
// Une méthode formulaire exemple
 Case of
 :(Form event code=On Load)
 $vaEvénement:="Le formulaire va être affiché"
 :(Form event code=On Unload)
 $vaEvénement:="Le formulaire sortie vient de se fermer et va disparaître de l'écran"
 :(Form event code=On Display Detail)
 $vaEvénement:="Affichage de l'enregistrement n°"+String(Numero dans selection([LaTable]))
 :(Form event code=On Menu Selected)
 $vaEvénement:="Une commande de menu a été sélectionnée"
 :(Form event code=Sur entête)
 $vaEvénement:="L'en-tête va être imprimé ou affiché"
 :(Form event code=On Clicked)
 $vaEvénement:="On a cliqué sur un enregistrement"
 :(Form event code=On Double Clicked)
 $vaEvénement:="On a double-cliqué sur un enregistrement"
 :(Form event code=On Open Detail)
 $vaEvénement:="On a double-cliqué sur l'enregistrement n°"+String(Numero dans selection([LaTable]))
 :(Form event code=On Close Detail)
 $vaEvénement:="Retour au formulaire sortie"
 :(Form event code=On Activate)
 $vaEvénement:="La fenêtre du formulaire passe au premier plan"
 :(Form event code=On Deactivate)
 $vaEvénement:="La fenêtre du formulaire n'est plus au premier plan"
 :(Form event code=On Menu Selected)
 $vaEvénement:="Une ligne de menu a été sélectionnée"
 :(Form event code=On Outside Call)
 $vaEvénement:="Un appel extérieur a été reçu"
 Else
 $vaEvénement:="Que se passe-t-il ? L'événement n°"+String(Evenement formulaire)
 End case
 SET WINDOW TITLE($vaEvénement)
```

#### Exemple 5

Pour des exemples de gestion des événements [`On Before Keystroke`](../Events/onBeforeKeystroke.md) et [`On After Keystroke`](../Events/onAfterKeystroke.md), voir les exemples des commandes [Get edited text](../commandes-legacy/get-edited-text.md), [Keystroke](../commandes-legacy/keystroke.md) et [FILTER KEYSTROKE](../commandes-legacy/filter-keystroke.md).

#### Exemple 6

Cet exemple montre comment traiter les clics et les doubles clics de la même manière dans une zone de défilement :

```4d
  //Méthode objet pour la zone de défilement asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  //...
       asChoices:=0
    :((Form event code=On Clicked)|(Form event code=On Double Clicked))
       If(asChoices#0)
  //On a cliqué sur un élément, faire quelque chose
  //...
       End if
  //...
 End case
```

#### Exemple 7

L'exemple suivant montre comment traiter les clics et double-clics de manière différente. Notez l'utilisation de l'élément zéro pour conserver la valeur de l'élément sélectionné :

```4d
  //Méthode objet pour la zone de défilement asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  // ...
       asChoices:=0
       asChoices{0}:="0"
    :(Form event code=On Clicked)
       If(asChoices#0)
          If(asChoices#Num(asChoices))
  //On a cliqué sur un élément, faire quelque chose
  //...
  //Sauvegarder l'élément nouvellement sélectionné pour la prochaine fois
             asChoices{0}:=String(asChoices)
          End if
       Else
          asChoices:=Num(asChoices{0})
       End if
    :(Form event code=On Double Clicked)
       If(asChoices#0)
  //On a double-cliqué sur un élément, faire autre chose
       End if
  // ...
 End case
```

#### Exemple 8

L'exemple suivant montre comment maintenir une zone contenant du texte à partir d'une méthode formulaire à l'aide des événements [`On Getting Focus`](../Events/onGettingFocus.md) et [`On Losing Focus`](../Events/onLosingFocus.md) :

```4d
  //Méthode formulaire [Contacts];"Data Entry"
 Case of
    :(Form event code=On Load)
       var vtStatusArea : Text
       vtStatusArea:=""
    :(Form event code=On Getting Focus)
       RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)
       If(($vlTableNum#0)&($vlFieldNum#0))
          Case of
             :($vlFieldNum=1) //Last name field
                vtStatusArea:="Saisissez le nom du contact, il sera automatiquement mis en majuscules"
  //...
             :($vlFieldNum=10) //Zip Code field
                vtStatusArea:="Saisissez un code postal, il sera automatiquement vérifié et validé"
  //...
          End case
       End if
    :(Form event code=On Losing Focus)
       vtStatusArea:=""
  //...
 End case
```

#### Exemple 9

Cet exemple illustre comment vous pouvez répondre à un événement de fermeture de fenêtre à l'aide d'un formulaire utilisé pour la saisie de données d'enregistrement :

```4d
  //Méthode pour un formulaire entrée
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("Cet enregistrement a été modifié. Voulez-vous sauvegarder les modifications ?")
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

#### Exemple 10

L'exemple suivant montre comment mettre en majuscules un champ Texte ou Alphanumérique chaque fois que la valeur est modifiée :

```4d
  //Méthode objet de [Contacts]First Name
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

#### Exemple 11

L'exemple suivant propose une manière de gérer une action de suppression dans une liste hiérarchique :

```4d
 ... //méthode objet de la liste hiérarchique
:(Form event code=On Delete Action)
 ARRAY LONGINT($itemsArray;0)
 $Ref:=Selected list items(<>HL;$itemsArray;*)
 $n:=Size of array($itemsArray)
 
 Case of
    :($n=0)
       ALERT("Pas d’élément sélectionné")
       OK:=0
    :($n=1)
       CONFIRM("Voulez-vous supprimer cet élément ?")
    :($n>1)
       CONFIRM("Voulez-vous supprimer ces éléments ?")
 End case
 
 If(OK=1)
    For($i;1;$n)
       DELETE FROM LIST(<>HL;$itemsArray{$i};*)
    End for
 End if
```

#### Exemple 12

Dans cet exemple, l'événement formulaire [`On Scroll`](../Events/onScroll.md) permet de synchroniser l'affichage de deux images dans un formulaire. Le code suivant est ajouté dans la méthode de l'objet "satellite" (champ ou variable image) :

```4d
 Case of
    :(Form event code=On Scroll)
  // on relève la position de l'image de gauche
       OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)
  // on l'applique à l'image de droite
       OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)
 End case
```

Résultat : https://www.youtube.com/watch?v=YIRfsW1BmHE

#### Exemple 13

Vous souhaitez dessiner un rectangle rouge autour de la cellule sélectionnée d'une list box, et vous voulez que le rectangle se déplace si l'utilisateur fait défiler verticalement la list box. Dans la méthode objet de la list box, vous pouvez écrire :

```4d
 Case of
 
    :(Form event code=On Clicked)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT SET VISIBLE(*;"RedRect";True) //initialiser rectangle rouge
       OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
 
    :(Form event code=On Scroll)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)
       $toAdd:=LISTBOX Get headers height(*;"LB1")
       //tenir compte de la hauteur de l'entête pour ne pas que le rectangle empiète dessus
       If($ylb1+$toAdd<$y1)&($ylb2>$y2) //si nous sommes dans la list box
  //pour simplifier, on ne tient compte que des en-têtes
  //mais il faudrait également gérer le clipping horizontal
  //ainsi que les barres de défilement
          OBJECT SET VISIBLE(*;"RedRect";True)
          OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
       Else
          OBJECT SET VISIBLE(*;"RedRect";False)
       End if
 
 End case
```

En résultat, le rectangle rouge suit bien le défilement de la list box :

![](../assets/en/commands/pict1900395.en.png)

#### Voir également

[Form Events](../Events/overview.md)
[CALL SUBFORM CONTAINER](../commands-legacy/call-subform-container.md)\
[Current form table](../commands-legacy/current-form-table.md)\
[FILTER KEYSTROKE](../commands-legacy/filter-keystroke.md)\
[FORM Event](form-event.md)\
[Get edited text](../commands-legacy/get-edited-text.md)\
[Keystroke](../commands-legacy/keystroke.md)\
[POST OUTSIDE CALL](../commands-legacy/post-outside-call.md)\
[SET TIMER](../commands-legacy/set-timer.md)

#### Propriétés

|                    |                                 |
| ------------------ | ------------------------------- |
| Numéro de commande | 388                             |
| Thread safe        | &amp;cross; |
