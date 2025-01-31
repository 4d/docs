---
id: onCloseBox
title: On Close Box
---

| Code | Pode ser chamado por | Definição                              |
| ---- | -------------------- | -------------------------------------- |
| 22   | Formulário           | A caixa de fecho da janela foi clicada |

## Descrição

El evento `On Close Box` se genera cuando el usuario hace clic en una caja de cierre de la ventana.

### Exemplo

Este exemplo mostra como responder a um evento de fecho de janela com um formulário utilizado para a introdução de dados de registo:

```4d
  //Método para um formulário de entrada
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
