---
id: change-string
title: Change string
slug: /commands/change-string
displayed_sidebar: docs
---

<!--REF #_command_.Change string.Syntax-->**Change string** ( *fonte* ; *novo* ; *posiçao* ) : Text<!-- END REF-->
<!--REF #_command_.Change string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text | &#8594;  | Cadeia original |
| novo | Text | &#8594;  | Novos caracteres |
| posiçao | Integer | &#8594;  | Onde começar as mudanças |
| Resultado | Text | &#8592; | Cadeia resultado |

<!-- END REF-->

#### Descrição 

Change string devolve uma string resultante de modificar os caracteres, na cadeia*fonte*, a partir de posição com os caracteres em novo.  

Se *novo* é uma cadeia vazia (""), Change string devolve *fonte* sem mudanças. Change string sempre devolve uma cadeia do mesmo tamanho que *fonte*. Se *posiçao* é inferior ou superior à longitude de *fonte*, Change string devolve *fonte*.  
  
Change string é diferente de [Insert string](insert-string.md) em que substitui os caracteres em lugar de inseri-los.

#### Exemplo 

O seguinte exemplo ilustra o uso de Change string. Os resultados são atribuídos à variável *vtResult*. 

```4d
 vtResult:=Change string("Acme";"CME";2) // vtResult é igual a "ACME"
 vtResult:=Change string("novembro";"dic";1) // vtResult é igual a "dezembro"
```

#### Ver também 

[Delete string](delete-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  