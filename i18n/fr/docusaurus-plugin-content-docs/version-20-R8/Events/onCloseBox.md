---
id: onCloseBox
title: On Close Box
---

| Code | Peut être appelé par | Définition                                       |
| ---- | -------------------- | ------------------------------------------------ |
| 22   | Formulaire           | La case de fermeture de la fenêtre a été cliquée |

## Description

L'événement `On Close Box` est généré lorsque l'utilisateur clique sur la case fermeture de la fenêtre.

### Exemple

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
