---
id: display-selection
title: DISPLAY SELECTION
slug: /commands/display-selection
displayed_sidebar: docs
---

<!--REF #_command_.DISPLAY SELECTION.Syntax-->**DISPLAY SELECTION** ( {*tabela*}{; *modoSelecao*}{; *entraLista*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.DISPLAY SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a exibir, ou tabela padrão, se omitido |
| modoSelecao | Integer | &#8594;  | Modo de Seleção |
| entraLista | Boolean | &#8594;  | Autorizar Entrada na lista de opção |
| * | Operator |  &#8594;  | Utilizar o formulário de saída em caso de seleção de somente um registro e ocultar as barras de deslocamento no formulário de entrada |
| * | Operator |  &#8594;  | Mostrar as barras de deslocamento no formulário de entrada (anular o segundo efeito do primeiro parâmetro *) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DISPLAY SELECTION.Summary-->DISPLAY SELECTION mostra a seleção de *tabela*, utilizando o formulário de saída.<!-- END REF--> Os registros se mostram em uma lista pela qual pode ser deslocada similar ao do modo Desenho. Se o usuário fizer duplo clique em um registro, por padrão é mostrado o registro no formulário de entrada atual. A lista é mostrada na janela do primeiro plano.  
  
Para mostrar uma seleção e poder igualmente modificar um registro no formulário de entrada atual depois de fazer duplo clique nele (como é feito na janela do ambiente Desenho), utilize [OBJECT SET ENTERABLE](object-set-enterable.md) ao invés de DISPLAY SELECTION.  
  
A informação a continuação aplica a ambos comandos, exceto pela informação sobre a modificação de registros.  
  
Depois de executar DISPLAY SELECTION, não há registro atual. Utilize um comando tal como [FIRST RECORD](first-record.md) ou [LAST RECORD](last-record.md) para selecionar um.  
  
O parâmetro *modoSelecao* é utilizado para definir as possibilidades de seleção de registros na lista utilizando o mouse. Neste parâmetro pode passar uma das seguintes constantes do tema “*Parâmetro de formulário*”:  
  
| Constante          | Tipo          | Valor |
| ------------------ | ------------- | ----- |
| Multiple selection | Inteiro longo | 2     |
| No selection       | Inteiro longo | 0     |
| Single selection   | Inteiro longo | 1     |
  
  
Se não passa o parâmetro *modoSelecao*, por padrão é utilizado o modo “Seleção múltipla”.  
  
O parâmetro *entradaLista* lhe permite autorizar o modo “Entrada em lista” na lista mostrada. Este modo permite ao usuário selecionar e modificar diretamente os valores dos registros no formulário de saída. Passe [True](true.md "True") para ativar este modo ou [False](false.md "False") para desativá-lo. Por padrão, se não passar o parâmetro *entradaLista*, o modo “Entrada em lista” é desativado.  
  
Lembre que com o comando DISPLAY SELECTION, este parâmetro apenas permite a seleção dos valores na lista e não sua modificação. De fato, o comando DISPLAY SELECTION carrega os registros da seleção atual em modo apenas leitura. Só o comando [MODIFY SELECTION](modify-selection.md) permite efetivamente a entrada de valores.   
  
**Nota**: O comando [OBJECT SET ENTERABLE](object-set-enterable.md) permite ativar ou desativar facilmente o modo Entrada em lista.  
  
Algumas regras relacionadas com o parâmetro opcional \*:  
  
\- Se a seleção contiver apenas um registro e o primeiro parâmetro opcional *\** não for utilizado, o registro será mostrado no formulário de entrada ao invés do formulário de saída.  
\- Se o primeiro parâmetro opcional *\** for especificado, o registro único será mostrado no formulário de saída.  
\- Se o primeiro parâmetro opcional *\** for especificado e o usuário mostrar o registro no formulário de entrada fazendo duplo clique sobre ele, as barras de rolagem do formulário serão ocultadas. Para anular este efeito, passe o segundo parâmetro opcional *\**.  
  
Pode colocar botões personalizados na área de cabeçalho ou de rodapé do formulário de saída para terminar a execução do comando DISPLAY SELECTION. Pode utilizar os botões automáticos Aceitar ou Cancelar para sair, ou utilizar um método de objeto que chame aos comandos [ACCEPT](accept.md) ou [CANCEL](cancel.md). Quando um formulário de saída chamado pelo comando DISPLAY SELECTION não tem botões, apenas a tecla **Escape** (Windows) ou **Esc** (Mac OS) permitem sair da lista.  
  
Durante e depois da execução de DISPLAY SELECTION, os registros que o usuário selecionar serão conservados em um conjunto chamado UserSet. UserSet está disponível através de DISPLAY SELECTION aos métodos de objeto dos botões, aos métodos chamados pelos comandos de menu, assim como para o método de projeto que chamou DISPLAY SELECTION.

#### Exemplo 1 

O exemplo a seguir seleciona todos os registros na tabela \[Pessoas\]. O comando DISPLAY SELECTION mostra os registros e permite ao usuário selecionar os registros a imprimir. Finalmente, seleciona os registros com [USE SET](use-set.md "USE SET"), e os imprime com [PRINT SELECTION](print-selection.md "PRINT SELECTION"): 

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros
 DISPLAY SELECTION([Pessoas];*) // Visualização dos registros
 USE SET("UserSet") // Utilizar apenas os registros selecionados pelo usuário
 PRINT SELECTION([Pessoas]) // Imprimir os registros que o usuário selecionou
```

#### Exemplo 2 

Ver o exemplo #6 do comando [Form event](../commands/form-event.md "Form event"). Este exemplo mostra todos os testes que pode necessitar para monitorar completamente os eventos que ocorrem durante a execução do comando DISPLAY SELECTION.

#### Exemplo 3 

Para reproduzir as funcionalidades oferecidas pelo menu Registros do ambiente Desenho quando utiliza DISPLAY SELECTION ou [MODIFY SELECTION](modify-selection.md) em modo Aplicação, aja da seguinte maneira:  
  
a. No ambiente Desenho, crie uma barra de menus com os comandos de menu que desejar, por exemplo, Mostrar todos, Procurar e Ordenar.  
  
b. Associe esta barra de menus (utilizando o menu “Barra de menus associada” na caixa de diálogo de propriedades do formulário) com o formulário de saída utilizado com os comandos DISPLAY SELECTION ou [MODIFY SELECTION](modify-selection.md).  
  
c. Associe os seguintes métodos de projeto aos seus comandos de menu:  
  
```4d
  // M_SHOW_ALL (associado ao comando de menu Mostrar todos)
 $vpCurTabela:=Current form table
 ALL RECORDS($vpCurTabela->)
```

```4d
  // M_QUERY (associado ao comando de menu Buscar)
 $vpCurTabla:=Current form table
 QUERY($vpCurTable->)
  // M_ORDER_BY (associado ao comando de menu Ordenar)
 $vpCurTabla:=Current form table
 ORDER BY($vpCurTabela->)
```

Também pode utilizar outros comandos, tais como [PRINT SELECTION](print-selection.md), [QR REPORT](qr-report.md), etc. para oferecer todas as opções de menu padrão que desejar cada vez que visualize ou modifique uma seleção no modo Aplicação. Graças ao comando [Current form table](current-form-table.md) , estes métodos são genéricos, e a barra de menus as quais são compatíveis podem ser associadas a todo formulário de saída de qualquer tabela.

#### Ver também 

*Conjuntos*  
[Form event code](../commands/form-event-code.md)  
[MODIFY SELECTION](modify-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 59 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


