---
id: is-editing-text
title: Is editing text
slug: /commands/is-editing-text
displayed_sidebar: docs
---

<!--REF #_command_.Is editing text.Syntax-->**Is editing text**  : Boolean<!-- END REF-->
<!--REF #_command_.Is editing text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le texte est en cours de saisie, sinon faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is editing text.Summary-->La commande **Is editing text** retourne **Vrai** si l'utilisateur saisit des valeurs dans un objet de formulaire d'entrée, et **Faux** dans tous les autres cas.<!-- END REF--> 

Cette commande est principalement destinée à distinguer, dans le code lancé par l'événement formulaire Sur avant frappe clavier, la saisie de données utilisateur et l'utilisation de touches de raccourcis. Par exemple, vous pouvez choisir d'exécuter un code différent selon que l'utilisateur appuie sur une touche pour saisir du texte dans une cellule, ou pour faire défiler la listbox.

La commande **Is editing text** peut être utilisée uniquement avec les objets de formulaire suivants :

* zone de saisie
* listbox (saisissable et non saisissable)
* combo box

Avec d'autres objets, la commande retourne toujours **Faux**. Elle ne peut notamment pas être utilisée avec des zones 4D Write Pro et 4D View Pro.

#### Exemple 

Pour permettre à l'utilisateur de sélectionner une ligne commençant par la lettre ou le numéro saisi(e) dans une listbox saisissable :

```4d
 Case of
    :(FORM Event.code=On Before Keystroke) //une touche est enfoncée
       If(Is editing text) //le texte est saisi
  // vous rejetez certains caractères
          If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")
             FILTER KEYSTROKE("")
          End if
       Else
  //rien n'est en cours de saisie, fonctionnalité raccourci défilement
          $charCode:=Keystroke
          $char:=Majuscule($charCode) // supprime les accents
          Case of
             :((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))
                ... //Sélectionne une ligne commençant par la lettre ou le numéro saisi(e)
             :($charCode>=Left arrow key)&($charCode<=Down arrow key) // flèches gauche/droite/haut/bas
                FILTER KEYSTROKE("")  // désactive les actions des flèches
          End case
       End if
 End case
```

#### Voir aussi 

  
[FILTER KEYSTROKE](filter-keystroke.md)  
[Get edited text](get-edited-text.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1744 |
| Thread safe | &cross; |


