---
id: delete-string
title: Delete string
slug: /commands/delete-string
displayed_sidebar: docs
---

<!--REF #_command_.Delete string.Syntax-->**Delete string** ( *fonte* ; *posiçao* ; *numCaracteres* ) : Text<!-- END REF-->
<!--REF #_command_.Delete string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text | &#8594;  | Cadeia da qual vai apagar caracteres |
| posiçao | Integer | &#8594;  | Primeiro caractere a apagar |
| numCaracteres | Integer | &#8594;  | Número de caracteres a apagar |
| Resultado | Text | &#8592; | Cadeia resultante |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Delete string.Summary-->Delete string apaga *numCaracteres* de *fonte*, a partir de *posiçao*, e devolve a cadeia resultante.<!-- END REF-->

Delete string devolve a mesma cadeia que *fonte* quando:

* *fonte* for uma cadeia vazia
* *posiçao* for maior que o comprimento de *fonte*
* *numCaracteres* for igual a zero (0)
Se *posiçao* for inferior a um, os caracteres são apagados a partir do início da cadeia.  
  
Se *posiçao* mais *numCaracteres* for igual ou maior que o comprimento de fonte, os caracteres são apagados a partir de *posiçao* até o final de *fonte*.

#### Exemplo 

O exemplo abaixo ilustra o uso de Delete string. Os resultados são atribuídos à variável *vtResult*. 

```4d
 vtResult:=Delete string("Lamborghini";6;6) // vtResult obtiene "Lambo"
 vtResult:=Delete string("Indentation";6;2) // vtResult obtém "Indention"
 vtResult:=Delete string(var;3;32000) // vtResult é igual aos dois primeiros caracteres de var
```

#### Ver também 

[Change string](change-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 232 |
| Thread-seguro | &check; |


