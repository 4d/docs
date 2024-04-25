---
id: onCloseBox
title: On Close Box
---

| Code | Pode ser chamado por | Definição                              |
| ---- | -------------------- | -------------------------------------- |
| 22   | Formulário           | A caixa de fecho da janela foi clicada |

## Descrição

The `On Close Box` event is generated when the user clicks on the clos box of the window.

### Exemplo

Este exemplo mostra como responder a um evento de fecho de janela com um formulário utilizado para a introdução de dados de registo:

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
