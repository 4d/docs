---
id: print-selection
title: PRINT SELECTION
slug: /commands/print-selection
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SELECTION.Syntax-->**PRINT SELECTION** ( {*tabela*}{;}{* | > } )<!-- END REF-->
<!--REF #_command_.PRINT SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual imprimir a seleção, ou Tabela por padrão, se for omitido |
| * &#124; > | Operador | &#8594;  | * para apagar as caixas de diálogo de impressão, ou > para não reiniciar as preferências de impressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PRINT SELECTION.Summary-->PRINT SELECTION imprime a seleção atual de tabela.<!-- END REF--> Os registros se imprimem no formulário de salida atual da tabela do processo atual. PRINT SELECTION realiza a mesma ação que o comando Imprimir do ambiente Usuário. Se a seleção está vazia, PRINT SELECTION não faz nada.  
  
Por padrão, PRINT SELECTION mostra as caixas de diálogo de impressão (na versão 32-bits) ou a caixa de diálogo de Formato de Impressão (na versão 4D 64-bits), antes de imprimir. Se o usuário cancelar uma das caixas de diálogo de impressão, o comando se cancela e o relatório não se imprime. Pode eliminar estas caixas de diálogo utilizando o parâmetro opcional asterisco (\*) ou o parâmetro opcional “maior que” (>):

• O parâmetro \* provoca um trabalho de impressão utilizando os parâmetros de impressão atuais (parâmetros por padrão ou aqueles definidos pelos comandos *\_o\_PAGE SETUP* ou [SET PRINT OPTION](set-print-option.md)).  
• Além disso, o parâmetro > provoca um trabalho de impressão sem reiniciar os parâmetros de impressão atuais. Este parâmetro é útil para executar várias chamadas sucessivas a PRINT SELECTION (por exemplo ao interior de um loop) conservando os parâmetros de impressão personalizados previamente definidos. Para ver um exemplo de utilização deste parâmetro, consulte a descrição do comando [PRINT RECORD](print-record.md).

Durante a impressão, o método de formulário de saída e os métodos de objeto do formulário se executam em função dos eventos selecionados nas propriedades dos formulários e dos objetos, no ambiente Desenho, assim como dos eventos gerados efetivamente:  
  
 \* Um evento On Header é gerado logo antes que a área de cabeçalho se imprima.  
 \* Um evento On Printing Detail é gerado logo antes que um registro se imprima.  
 \* Um evento On Printing Break é gerado logo antes que uma área de quebra se imprima.  
 \* Um evento On Printing Footer é gerado logo antes que um pé de página se imprima.  
  
Pode saber se PRINT SELECTION está imprimindo o primeiro cabeçalho provando [Before selection](before-selection.md) durante um evento On Header. Igualmente pode verificar o último pé de página, provando End selection durante um evento On Printing Footer. Para maior informação, consulte a descrição destes comandos, como também dos comandos [Form event code](form-event-code.md) e [Level ](level.md).  
  
Para imprimir uma seleção ordenada com subtotais ou quebras utilizando PRINT SELECTION, deve primeiro ordenar a seleção. Depois, em cada área de quebra do relatório, incluir uma variável com um método de objeto que atribui o subtotal à variável . Igualmente pode utilizar funções estatísticas e aritméticas como [Sum](sum.md) e [Average](average.md) para atribuir valores às variáveis. Para maior informação, consulte as descrições de [Subtotal](subtotal.md), [BREAK LEVEL](break-level.md) e [ACCUMULATE](accumulate.md).  
  
**Aviso**: Não use [PAGE BREAK](page-break.md) com o comando PRINT SELECTION. [PAGE BREAK](page-break.md) é usada com o comando [Print form](print-form.md).  
  
Depois de um chamado a PRINT SELECTION, a variável OK toma o valor 1 se a impressão for completada. Se a impressão foi interrompida, a variável OK toma o valor 0 (zero) (por exemplo se o usuário clicar em Cancelar nas caixas de diálogo de impressão).  
  
4D Server: este comando pode ser executado em 4D Server no marco de um procedimento armazenado. Neste contexto:  
  
 \* Tenha certeza que nenhuma caixa de diálogo apareça na máquina servidor (exceto para uma necessidade específica). Para fazer isto, é necessário chamar ao comando com o parâmetro \* o >.  
 \* Em caso de um problema com a impressora (sem papel, impressora desconectada, etc.), não é gerada mensagem de erro.   
  
#### Exemplo 

O exemplo a seguir seleciona todos os registros na tabela \[Pessoas\]. O comando [DISPLAY SELECTION](display-selection.md) é então chamado para mostrar os registros e permitir ao usuário selecionar os registros a imprimir. Finalmente, utiliza os registros selecionados com o comando [USE SET](use-set.md), e os imprime com [PRINT SELECTION](print-selection.md):

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros
 DISPLAY SELECTION([Pessoas];*) // Visualização dos registros
 USE SET("UserSet") // Utilizar unicamente os registros selecionados pelo usuário
 PRINT SELECTION([Pessoas]) // Imprimir os registros selecionados pelo usuário
```

#### Ver também 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level ](level.md)  
[Subtotal](subtotal.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 60 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


