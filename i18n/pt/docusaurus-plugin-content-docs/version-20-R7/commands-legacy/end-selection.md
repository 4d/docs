---
id: end-selection
title: End selection
slug: /commands/end-selection
displayed_sidebar: docs
---

<!--REF #_command_.End selection.Syntax-->**End selection** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.End selection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual provar se o ponteiro do registro está além do último registro selecionado, ou Tabela por padrão, se omitida |
| Resultado | Boolean | &#8592; | Sim (TRUE) ou Não (FALSE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.End selection.Summary-->End selection retorna TRUE quando o ponteiro do registro atual está além do último registro da seleção atual de tabela.<!-- END REF--> End selection se utiliza geralmente para testar se a chamada ao comando [NEXT RECORD](next-record.md) ha movido ou não o ponteiro do registro atual detrás do último registro da seleção. Se a seleção atual está vazia, End selection retorna TRUE.  
  
Para mover o ponteiro do registro atual dentro da seleção, utilize [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md). [PREVIOUS RECORD](previous-record.md) não mova o ponteiro à seleção.  
  
End selection retorna também TRUE quando o último rodapé de um relatório se imprime com [PRINT SELECTION](print-selection.md) ou desde o menu Imprimir. Pode utilizar o seguinte código para testar o último rodapé e imprimir um rodapé especial para a última página:  

```4d
  // Método de um formulário de saída utilizado para imprimir um relatório $vpFormTabela:=Current form table
 &NBSP;Case of
 &NBSP; // ...
 &NBSP;:(Form event code=On Printing Footer)
 &NBSP; // Um rodapé será impresso
 &NBSP;If(End selection($vpFormTabela->))
 &NBSP; // O código para o último rodapé vai aqui
 &NBSP;Else
 &NBSP; // O código para o rodapé vai aqui
End if
End case
```

#### Exemplo 

Este método de formulário é utilizado durante a impressão de um relatório. Ele define a variável *vPie* a imprimir na área de rodapé da última página: 

```4d
  // [Finanças];"Resumo" Método de formulário
 Case of
  // ...
    :(Form event code=On Printing Footer)
       If(End selection([Finanças]))
          vPie:="©2001 Acme Corp." // Definir o rodapé da última página
       Else
          vPie:="" // Apagar o rodapé para todas as outras páginas
       End if
 End case
```

#### Ver também 

[Before selection](before-selection.md)  
[Form event code](../commands/form-event-code.md)"  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 36 |
| Thread-seguro | &check; |


