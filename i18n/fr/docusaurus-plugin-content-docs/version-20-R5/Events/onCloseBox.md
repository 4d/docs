---
id: onCloseBox
title: On Close Box
---

| Code | Peut être appelé par | Définition                                       |
| ---- | -------------------- | ------------------------------------------------ |
| 22   | Formulaire           | La case de fermeture de la fenêtre a été cliquée |

## Description

The `On Close Box` event is generated when the user clicks on the clos box of the window.

### Exemple

Cet exemple illustre comment vous pouvez répondre à un événement de fermeture de fenêtre à l'aide d'un formulaire utilisé pour la saisie de données d'enregistrement :

```4d
  //Method for an input form
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
