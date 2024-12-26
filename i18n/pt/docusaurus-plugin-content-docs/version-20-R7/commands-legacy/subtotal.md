---
id: subtotal
title: Subtotal
slug: /commands/subtotal
displayed_sidebar: docs
---

<!--REF #_command_.Subtotal.Syntax-->**Subtotal** ( *valores* {; *saltoPag*} ) : Real<!-- END REF-->
<!--REF #_command_.Subtotal.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valores | Field | &#8594;  | Campo númerico ou variável onde quer devolver o subtotal |
| saltoPag | Integer | &#8594;  | Nivel de quebra para o qual realizar um salto de página |
| Resultado | Real | &#8592; | Subtotal dos valores |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Subtotal.Summary-->Subtotal devolve o subtotal de valores para o nível de quebra atual ou anterior.<!-- END REF--> Subtotal só funciona quando uma seleção ordenada é impressa com [PRINT SELECTION](print-selection.md) ou utilizando Imprimir no ambiente Desenho. O parâmetro *valores* deve ser de tipo real, inteiro, ou inteiro longo. Você deve atribuir o resultado da função Subtotal a uma variável localizada na área de quebra do formulário.  

**Advertência**: deve executar os comandos [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md) antes de cada relatório de formulário para o qual queira fazer processo de quebra e calcular subtotais. Ver a discussão ao final da descrição deste comando.  
 O segundo parâmetro (opcional) da função Subtotal se utiliza para provocar saltos de página durante a impressão. Se *saltoPag* for 0, Subtotal não gera nenhum salto de página. Se *saltoPag* for igual a 1, Subtotal gera um salto de página para cada nível de quebra 1\. Se *saltoPag* for igual a 2, Subtotal gera um salto de página para cada nível de quebra 1 e 2, etc.  
  
**Dica**: se executa Subtotal desde um formulário de saída mostrado em tela, um erro será gerado, disparando um loop infinito de atualizações entre o formulário e a janela de erro. Para sair deste loop, pressione Alt+Shift (Windows) ou Opção-Shift (Macintosh) e clique no botão Abortar na janela de erro (provavelmente terá que fazer isto várias vezes). Isso pará temporariamente as atualizações da janela do formulário. Selecione outro formulário de saída de maneira a que o erro não se repita. Regresse ao ambiente Desenho e isole a chamada a Subtotal para um teste Form event=On Printing Break,  se deseja utilizar o mesmo formulário de saída para a visualização e a impressão 

#### Exemplo 

O exemplo a seguir é um método de objeto numa área de quebra de um formulário (B0, a área localizada sobre o marcador B0). A variável *vSalario* está localizada na área de quebra. A variável toma o valor do subtotal do campo Salário para este nível de quebra. O tratamento de quebra deve ter sido ativado de antemão utilizando os comandos [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md).

```4d
 Case of
    :(FORM Event=On Printing Break)
       vSalario:=Subtotal([Empregados]Salario)
 End case
```

Para maior informação sobre design de formulário com áreas de cabeçalho e de quebra, consulte o manual de Desenho.

#### Ativação de níveis de quebra nos formulários de relatórios 

Para poder gerar relatórios com quebras, deve ativar o tratamento de quebras chamando os comandos [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md).  
  
Deve executar ambos comandos antes de imprimir um relatório de formulário. A função Subtotal é necessária para mostrar os valores em um formulário. Deve ordenar ao menos o número de níveis de quebras que necessite.  
  
Quando utilize [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md), o processo de imprimir um relatório é geralmente como este:  
  
1\. Selecione os registros a imprimir.  
  
2\. Ordene os registros utilizando [ORDER BY](order-by.md). Ordene o mesmo número de níveis como quebras.  
  
3\. Executa [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md).  
  
4\. Imprima o relatório utilizando[PRINT SELECTION](print-selection.md).  
  
A função Subtotal é necessária para mostrar valores em um formulário.  

#### Ver também 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level ](level.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 97 |
| Thread-seguro | &cross; |


