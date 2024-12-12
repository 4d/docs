---
id: insert-string
title: Insert string
slug: /commands/insert-string
displayed_sidebar: docs
---

<!--REF #_command_.Insert string.Syntax-->**Insert string** ( *fonte* ; *inserir* ; *posiçao* ) : Text<!-- END REF-->
<!--REF #_command_.Insert string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fonte | Text | &#8594;  | Cadeia na qual vai inserir uma segunda cadeia |
| inserir | Text | &#8594;  | Cadeia que será inserida na primeira cadeia |
| posiçao | Integer | &#8594;  | Onde vai inserir |
| Resultado | Text | &#8592; | Cadeia resultante |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Insert string.Summary-->Insert string insere a cadeia de caracteres alfanuméricos *inserir* na cadeia fonte a partir de *posiçao* e devolve a cadeia de caracteres resultante.<!-- END REF--> A cadeia *inserir* é colocada antes do caractere determinado por *posiçao*.  
  
 Se *inserir* for uma cadeia vazia (""),Insert string devolve *fonte* sem nenhuma mudança.  
  
 Se *posiçao* for maior que o comprimento de *fonte*, então a cadeia *inserir* é adicionada ao final de *fonte* . Se *posiçao* for inferior a um (1), então a cadeia *inserir* é adicionada antes de *fonte* .  
  
Insert string é diferente de [Change string](change-string.md) pois esta função insere caracteres ao invés de substituí-los.

#### Exemplo 

O seguinte exemplo ilustra o uso de Insert string. Os resultados são atribuídos à variável vtResult. 

```4d
 vtResult:=Insert string("A verde";"árvore ";2) // vtResult obtem "A árvore verde"
 vtResult:=Insert string("Tala";"be";3) // vtResult é igual a "Tabela"
 vtResult:=Insert string("Indenficação";"ti";6) // vtResult é igual a "Indentificação"
```

#### Ver também 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Replace string](replace-string.md)  