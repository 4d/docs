---
id: before-selection
title: Before selection
slug: /commands/before-selection
displayed_sidebar: docs
---

<!--REF #_command_.Before selection.Syntax-->**Before selection** {( *tabela* )} : Boolean<!-- END REF-->
<!--REF #_command_.Before selection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai testar se o registro do ponteiro está antes do primeiro registro selecionado, ou tabela padrão, se omitido |
| Resultado | Boolean | &#8592; | Sim (TRUE) ou Não (FALSE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Before selection.Summary-->Before selection retorna TRUE quando o ponteiro do registro atual se encontra antes do primeiro registro da seleção atual de *tabela*.<!-- END REF--> Before selection geralmente é utilizado para verificar se o comando PREVIOUS RECORD tiver movido o ponteiro do registro atual antes do primeiro registro. Se a seleção atual estiver vazia, Before selection retorna TRUE.  
  
Para mover o ponteiro do registro atual à seleção, utilize os comandos [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md). [NEXT RECORD](next-record.md).  
  
Before selection retorna TRUE no cabeçalho quando um relatório está sendo impresso com [PRINT SELECTION](print-selection.md) ou a partir do comando de menu Imprimir. Pode utilizar o seguinte código para testar o primeiro cabeçalho e imprimir um cabeçalho especial para a primeira página:  

```4d
  // Método de um formulário de saída utilizado para um relatório
 &NBSP;$vpFormTabela:=Current form table
 &NBSP;Case of
 &NBSP; // ...
:(Form event code=On Header)
 &NBSP; // A área cabeçalho vai ser impressa
 &NBSP;Case of
 &NBSP;:(Before selectiom($vpFormTabela->))
 &NBSP; // O código para a primeira quebra do cabeçalho fica aqui
 &NBSP; // ...
 &NBSP;End case
```

#### Exemplo 

Este formulário é utilizado durante a impressão de um relatório. Define uma variável *vTitulo*, que será imprimida na área do cabeçalho na primeira página:

```4d
  // Método de formulário [Finanças];"Array"
 Case of
  // ...
    :(Form event code=On Header)
       Case of
          :(Before selection([Finanças))
             vTitulo:="Relatório de finanças de 1997" // Definir o título para a primeira página
          Else
             vTitulo:="" // Apagar o título para todas as outras páginas
       End case
 End case
```

#### Ver também 

[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[Form event code](../commands/form-event-code.md)  
[PREVIOUS RECORD](previous-record.md)  
[PRINT SELECTION](print-selection.md)  