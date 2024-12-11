---
id: current-form-table
title: Current form table
slug: /commands/current-form-table
displayed_sidebar: docs
---

<!--REF #_command_.Current form table.Syntax-->**Current form table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current form table.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Ponteiro a tabela do formulário atualmente exibido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current form table.Summary-->O comando Current form table retorna o ponteiro para a tabela do formulário em tela ou impresso no processo atual.<!-- END REF-->  
  
A função retorna [Is nil pointer](is-nil-pointer.md) nos seguintes casos:  

* Não há formulário mostrado ou impresso no processo atual,
* O formulário atual é um formulário de projeto.
Se houver várias janelas abertas no processo atual (significa que a última janela aberta é a janela ativa atual), o comando retorna um ponteiro até a tabela do formulário que aparece na janela ativa.  
  
Se o formulário mostrado atualmente é o formulário detalhado de uma área de subformulário, você se encontra em entrada de dados e fez um duplo clique em um registro ou subregistro em uma área de subformulário de duplo clique. Neste caso, o comando retorna:  
* O ponteiro em direção a tabela mostrada no área do subformulário, se o subformulário mostra uma tabela.
* Um ponteiro não significativo, se a área de subformulário mostrar uma subtabela.

#### Exemplo 

Em su aplicação, utiliza a seguinte convenção quando visualiza um registro:  
Se a variável *vsCurrentRecord* estiver presente em um formulário, mostra “Novo registro” se estiver trabalhando com um novo registro. Se estiver trabalhando com o registro 56 de uma seleção composta por 5200 registros, mostra “56 de 5200”.  
  
Para isso, utilize o método de objeto para criar a variável *vstRegistroAtual*, depois copie-o e cole-o em todos seus formulários:

```4d
  // Método de objeto da variável não editável vstRegistroAtual
 Case of
    :(Form event code=On Load)
       C_STRING(31;vstRegistroAtual)
       var $vpTabelaPai : Pointer
       var $vlNumRegistro : Integer
       $vpTabelaPai:=Current form table
       $vlNumRegistro:=Record number($vpTabelaPai->)
       Case of
          :($vlNumRegistro=-3)
             vstRegistroAtual:="Novo registro"
          :($vlNumRegistro=-1)
             vstRegistroActual:="Ningún registro"
          :($vlNumRegistro>=0)
             vstRegistroAtual:=String(Selected record number($vpTabelaPai->))+" de "+
             vstRegistroAtual:=vstRegistroAtual+String(Records in selection($vpTabelaPai->))
       End case
 End case
```

#### Ver também 

[DIALOG](../commands/dialog.md)  
[FORM SET OUTPUT](form-set-output.md)  
[FORM SET INPUT](form-set-input.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 627 |
| Thread-seguro | &check; |
| Proibido no servidor ||


