---
id: onCloseBox
title: On Close Box
---

| Code | Pode ser chamado por | Definição                              |
| ---- | -------------------- | -------------------------------------- |
| 22   | Formulário           | A caixa de fecho da janela foi clicada |


## Descrição

O evento `On Close Box` é gerado quando o utilizador clica na caixa de fecho da janela.

### Exemplo

Este exemplo mostra como responder a um evento de fecho de janela com um formulário utilizado para a introdução de dados de registo:

```4d
  //Método para um formulário de entrada
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("Este registo foi modificado. Save Changes?")
          Save Changes?")
          Save Changes?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 //statement(s)
 End case
```