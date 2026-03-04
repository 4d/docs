---
id: print-selection
title: PRINT SELECTION
slug: /commands/print-selection
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SELECTION.Syntax-->**PRINT SELECTION** ( {*tabela* : Table}{;}{* | > } )<!-- END REF-->
<!--REF #_command_.PRINT SELECTION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para a qual imprimir a seleção, ou Tabela por padrão, se for omitido |
| * &#124; > | Operador | &#8594; | * para apagar as caixas de diálogo de impressão, ou > para não reiniciar as preferências de impressão |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R5|Modificado|
|2004|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.PRINT SELECTION.Summary-->PRINT SELECTION imprime a seleção atual de tabela.<!-- END REF--> Os registros se imprimem no formulário de salida atual da tabela do processo atual. PRINT SELECTION realiza a mesma ação que o comando Imprimir do ambiente Usuário. Se a seleção está vazia, PRINT SELECTION não faz nada.  
  
Por padrão, PRINT SELECTION mostra as caixas de diálogo de impressão (na versão 32-bits) ou a caixa de diálogo de Formato de Impressão (na versão 4D 64-bits), antes de imprimir. Se o usuário cancelar uma das caixas de diálogo de impressão, o comando se cancela e o relatório não se imprime. Pode eliminar estas caixas de diálogo utilizando o parâmetro opcional asterisco (\*) ou o parâmetro opcional “maior que” (>):

• O parâmetro \* provoca um trabalho de impressão utilizando os parâmetros de impressão atuais (parâmetros por padrão ou aqueles definidos pelos comandos *\_o\_PAGE SETUP* ou [SET PRINT OPTION](../commands/set-print-option)).  
• Além disso, o parâmetro > provoca um trabalho de impressão sem reiniciar os parâmetros de impressão atuais. Este parâmetro é útil para executar várias chamadas sucessivas a PRINT SELECTION (por exemplo ao interior de um loop) conservando os parâmetros de impressão personalizados previamente definidos. Para ver um exemplo de utilização deste parâmetro, consulte a descrição do comando [PRINT RECORD](../commands/print-record).

Durante a impressão, o método de formulário de saída e os métodos de objeto do formulário se executam em função dos eventos selecionados nas propriedades dos formulários e dos objetos, no ambiente Desenho, assim como dos eventos gerados efetivamente:  
  
 \* Um evento On Header é gerado logo antes que a área de cabeçalho se imprima.  
 \* Um evento On Printing Detail é gerado logo antes que um registro se imprima.  
 \* Um evento On Printing Break é gerado logo antes que uma área de quebra se imprima.  
 \* Um evento On Printing Footer é gerado logo antes que um pé de página se imprima.  
  
Pode saber se PRINT SELECTION está imprimindo o primeiro cabeçalho provando [Before selection](../commands/before-selection) durante um evento On Header. Igualmente pode verificar o último pé de página, provando End selection durante um evento On Printing Footer. Para maior informação, consulte a descrição destes comandos, como também dos comandos [Form event code](../commands/form-event-code) e [Level ](../commands/level).  
  
Para imprimir uma seleção ordenada com subtotais ou quebras utilizando PRINT SELECTION, deve primeiro ordenar a seleção. Depois, em cada área de quebra do relatório, incluir uma variável com um método de objeto que atribui o subtotal à variável . Igualmente pode utilizar funções estatísticas e aritméticas como [Sum](../commands/sum) e [Average](../commands/average) para atribuir valores às variáveis. Para maior informação, consulte as descrições de [Subtotal](../commands/subtotal), [BREAK LEVEL](../commands/break-level) e [ACCUMULATE](../commands/accumulate).  
  
**Aviso**: Não use [PAGE BREAK](../commands/page-break) com o comando PRINT SELECTION. [PAGE BREAK](../commands/page-break) é usada com o comando [Print form](../commands/print-form).  
  
Depois de um chamado a PRINT SELECTION, a variável OK toma o valor 1 se a impressão for completada. Se a impressão foi interrompida, a variável OK toma o valor 0 (zero) (por exemplo se o usuário clicar em Cancelar nas caixas de diálogo de impressão).  
  
4D Server: este comando pode ser executado em 4D Server no marco de um procedimento armazenado. Neste contexto:  
  
 \* Tenha certeza que nenhuma caixa de diálogo apareça na máquina servidor (exceto para uma necessidade específica). Para fazer isto, é necessário chamar ao comando com o parâmetro \* o >.  
 \* Em caso de um problema com a impressora (sem papel, impressora desconectada, etc.), não é gerada mensagem de erro.   
  
## Exemplo 

O exemplo a seguir seleciona todos os registros na tabela \[Pessoas\]. O comando [DISPLAY SELECTION](../commands/display-selection) é então chamado para mostrar os registros e permitir ao usuário selecionar os registros a imprimir. Finalmente, utiliza os registros selecionados com o comando [USE SET](../commands/use-set), e os imprime com [PRINT SELECTION](../commands/print-selection):

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros
 DISPLAY SELECTION([Pessoas];*) // Visualização dos registros
 USE SET("UserSet") // Utilizar unicamente os registros selecionados pelo usuário
 PRINT SELECTION([Pessoas]) // Imprimir os registros selecionados pelo usuário
```

## Ver também 

[ACCUMULATE](../commands/accumulate)  
[BREAK LEVEL](../commands/break-level)  
[Level ](../commands/level)  
[Subtotal](../commands/subtotal)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 60 |
| Thread-seguro | no |
| Modificar variáveis | OK |



