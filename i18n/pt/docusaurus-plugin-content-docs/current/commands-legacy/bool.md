---
id: bool
title: Bool
slug: /commands/bool
displayed_sidebar: docs
---

<!--REF #_command_.Bool.Syntax-->**Bool** ( *expressao* ) : Boolean<!-- END REF-->
<!--REF #_command_.Bool.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressao | Expression | &#8594;  | Expressão para a qual vai retornar a forma booleana |
| Resultado | Boolean | &#8592; | Forma booleana da expressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Bool.Summary-->O comando **Bool** devolve a forma booleana da expressão que foi passado em *expressao*.<!-- END REF-->

O comando pode devolver os valores abaixo, dependendo do tipo de resultado da *expressao*:

| **Tipo da expressao** | **Retorno do comando Bool**       |
| --------------------- | --------------------------------- |
| Indefinido            | False                             |
| Nulo                  | False                             |
| Booleano              | False se falso, do contrário True |
| Número                | False se 0, senão True            |
| Outros tipos          | False                             |

Este comando é útil quando se esperar que o resultado de uma expressão for um booleano, qualquer que seja o resultado real de sua avaliação (por exemplo, se for avaliada como **nulo** ou **indefinido**).

#### Exemplo 

Seleciona um valor dependendo do conteúdo de um atributo de campo de objeto, antecipando o caso no qual falta o atributo:

```4d
 var $married : Text
 $married:=Choose(Bool([Person]data.married);"Married";"Single")
  //"Single" se o atributo "married" não se encontrar no campo
 ALERT("This person is "+$married)
```

#### Ver também 

[Date](date.md)  
[Num](num.md)  
[String](string.md)  
[Time](time.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1537 |
| Thread-seguro | &check; |


