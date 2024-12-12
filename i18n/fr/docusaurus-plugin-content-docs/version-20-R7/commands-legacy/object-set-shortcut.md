---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *objet* ; *touche* {; *modifiers*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| touche | Text | &#8594;  | Touche à associer à l’objet |
| modifiers | Integer | &#8594;  | Masque ou combinaison de masques de touche(s) de modification |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->La commande **OBJECT SET SHORTCUT** permet de définir ou de modifier dynamiquement l’équivalent clavier associé à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas un nom mais une référence. 

Passez dans le paramètre *touche* une chaîne indiquant la touche du clavier à associer à l’objet. Vous pouvez passer soit :

* un nom de touche standard, par exemple "B"
* une constante du thème *Touches équivalents clavier* (ou sa valeur) :  

| Constante                     | Type   | Valeur          | Comment       |  
| ----------------------------- | ------ | --------------- | ------------- |  
| Shortcut with Backspace       | Chaîne | \[backspace\]   | <br/> |  
| Shortcut with Carriage Return | Chaîne | \[return\]      |               |  
| Shortcut with Delete          | Chaîne | \[del\]         |               |  
| Shortcut with Down arrow      | Chaîne | \[down arrow\]  | <br/> |  
| Shortcut with End             | Chaîne | \[end\]         | <br/> |  
| Shortcut with Enter           | Chaîne | \[enter\]       | <br/> |  
| Shortcut with Escape          | Chaîne | \[esc\]         | <br/> |  
| Shortcut with F1              | Chaîne | \[F1\]          | <br/> |  
| Shortcut with F10             | Chaîne | \[F10\]         | <br/> |  
| Shortcut with F11             | Chaîne | \[F11\]         | <br/> |  
| Shortcut with F12             | Chaîne | \[F12\]         | <br/> |  
| Shortcut with F13             | Chaîne | \[F13\]         | <br/> |  
| Shortcut with F14             | Chaîne | \[F14\]         | <br/> |  
| Shortcut with F15             | Chaîne | \[F15\]         | <br/> |  
| Shortcut with F2              | Chaîne | \[F2\]          | <br/> |  
| Shortcut with F3              | Chaîne | \[F3\]          | <br/> |  
| Shortcut with F4              | Chaîne | \[F4\]          | <br/> |  
| Shortcut with F5              | Chaîne | \[F5\]          | <br/> |  
| Shortcut with F6              | Chaîne | \[F6\]          | <br/> |  
| Shortcut with F7              | Chaîne | \[F7\]          | <br/> |  
| Shortcut with F8              | Chaîne | \[F8\]          | <br/> |  
| Shortcut with F9              | Chaîne | \[F9\]          | <br/> |  
| Shortcut with Help            | Chaîne | \[help\]        | <br/> |  
| Shortcut with Home            | Chaîne | \[home\]        | <br/> |  
| Shortcut with Left arrow      | Chaîne | \[left arrow\]  | <br/> |  
| Shortcut with Page down       | Chaîne | \[page down\]   | <br/> |  
| Shortcut with Page up         | Chaîne | \[page up\]     | <br/> |  
| Shortcut with Right arrow     | Chaîne | \[right arrow\] | <br/> |  
| Shortcut with Tabulation      | Chaîne | \[tab\]         | <br/> |  
| Shortcut with Up arrow        | Chaîne | \[up arrow\]    | <br/> |

Passez dans le paramètre *modifiers* une ou plusieurs touche(s) de modification à associer à la touche de raccourci. Pour définir le paramètre *modifiers*, passez une ou plusieurs des constante(s) de type "Masque" suivantes du thème *Evénements (Modifiers)* :

| Constante        | Type        | Valeur | Comment                                                   |
| ---------------- | ----------- | ------ | --------------------------------------------------------- |
| Command key mask | Entier long | 256    | Touche Ctrl sous Windows, touche Commande sous OS X       |
| Control key mask | Entier long | 4096   | Touche Ctrl sous OS X, ou clic droit sous Windows et OS X |
| Option key mask  | Entier long | 2048   | Touche Alt (aussi appelée Option sous OS X)               |
| Shift key mask   | Entier long | 512    | Windows et OS X                                           |

**Note :** Si vous omettez le paramètre *modifiers*, l’objet sera activé dès que vous appuierez sur la touche définie. Par exemple, si vous avez associé la touche "H" à un bouton, il sera activé dès que vous appuierez sur la touche H. Ce fonctionnement est à réserver à des interfaces spécifiques.

#### Exemple 

Vous voulez associer un équivalent clavier différent en fonction de la langue courante de l’application. Dans l’événement sur chargement du formulaire, vous pouvez écrire :

```4d
 Case of
    :(vLang="FR")
       OBJECT SET SHORTCUT(*;"SortButton";"T";Command key mask+Shift key mask)
  // Ctrl+Maj+T en français
    :(vLang="US")
       OBJECT SET SHORTCUT(*;"SortButton";"O";Command key mask+Shift key mask)
  // Ctrl+Maj+O en anglais
 End case
```

#### Voir aussi 

[OBJECT GET SHORTCUT](object-get-shortcut.md)  