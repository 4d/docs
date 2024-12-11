---
id: length
title: Length
slug: /commands/length
displayed_sidebar: docs
---

<!--REF #_command_.Length.Syntax-->**Length** ( *cadeia* ) : Integer<!-- END REF-->
<!--REF #_command_.Length.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeia | Text | &#8594;  | Cadeia para a qual vai retornar o comprimento |
| Resultado | Integer | &#8592; | Comprimento da função |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Length.Summary-->**Length** permite obter o comprimento de *cadeia*.<!-- END REF--> Length devolve o número de caracteres alfanuméricos em cadeia.  

**Nota**: Se desejar verificar se uma cadeia contém caracteres, incluindo caracteres ignoráveis, deve utilizar o teste If(Length(vtAnyText)=0) ao invés de If(vtAnyText=""). Se a cadeia contém por exemplo Char(1), o qual é um caractere que pode ser ignorado, Length(vtAnyText) devolve 1 mas vtAnyText="" devolve True.

#### Exemplo 

Este exemplo ilustra o uso de **Length**. Os resultados, descritos nos comentários, são atribuídos à variável *vlResult*. 

```4d
 vlResult:=Length("Topázio") // vlResult obtém 7
 vlResult:=Length("Cidadania") // vlResult obtém 9
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 16 |
| Thread-seguro | &check; |
| Proibido no servidor ||


