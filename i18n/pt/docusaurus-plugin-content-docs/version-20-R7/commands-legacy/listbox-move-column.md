---
id: listbox-move-column
title: LISTBOX MOVE COLUMN
slug: /commands/listbox-move-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVE COLUMN.Syntax-->**LISTBOX MOVE COLUMN** ( {* ;} *objeto* ; *colPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVE COLUMN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome do objeto (se especificado *) ou<br/>Variável (se omitido *) da coluna a mover |
| colPosition | Integer | &#8594;  | Nova localização da coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX MOVE COLUMN.Summary-->O comando **LISTBOX MOVE COLUMN** move por programação a coluna designada pelos parâmetros *objeto* e *\** no contexto do formulário em execução (modo Aplicação).<!-- END REF--> O formulário original, gerado em modo Desenho, não se modifica.  
  
Os parâmetros *objeto* e *\** designam a coluna a mover. Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de coluna (cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável de coluna. Neste caso, passe uma referência de variável no lugar de uma cadeia.  
i  
A coluna se move justo em frente da designada pelo parâmetro *posicaoCol*. Se o parâmetro *posicaoCol* é maior ao número total de colunas, logo a coluna se move até justo depois da última coluna.  
  
**Nota**: Este comando não faz nada quando se aplica a primeira coluna de um list box que se mostra no modo hierárquico.  
  
O comando em conta as propriedades das colunas estáticas e bloqueadas: por exemplo, se tentar mover uma coluna estática, o comando não faz nada.  
  
Esta funcionalidade está presente em 4D em modo Aplicação: o usuário pode mover as colunas não estáticas utilizando o mouse. No entanto, a diferença do deslocamento realizado pelo usuário, este comando não gera o evento On Column Moved. 

#### Exemplo 

Você quer inverter a segunda e terceira coluna do list box:

```4d
 LISTBOX MOVE COLUMN(*;"column2";3)
```

#### Ver também 

[LISTBOX DUPLICATE COLUMN](listbox-duplicate-column.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1274 |
| Thread-seguro | &check; |
| Proibido no servidor ||


