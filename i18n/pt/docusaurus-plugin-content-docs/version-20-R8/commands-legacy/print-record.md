---
id: print-record
title: PRINT RECORD
slug: /commands/print-record
displayed_sidebar: docs
---

<!--REF #_command_.PRINT RECORD.Syntax-->**PRINT RECORD** ( {*tabela*}{;}{* | > } )<!-- END REF-->
<!--REF #_command_.PRINT RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual imprimir o registro, ou Tabela padrão, caso omitido |
| * &#124; > | Operador | &#8594;  | * to suppress the printing dialog box, or > to not reinitialize print settings |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PRINT RECORD.Summary-->PRINT RECORD imprime o registro atual de *tabela*, sem modificar a seleção atual.<!-- END REF--> O formulário de saída atual se utiliza para a impressão. Se não houver registro atual para *tabela*, PRINT RECORD não faz nada.

Pode imprimir sub-formulários e objetos externos com o comando PRINT RECORD . Isto não é possível com [Print form](../commands/print-form.md).

**Nota:** se houver modificações no registro que não foram guardadas, este comando imprime os valores dos campos modificados, não os valores em disco.

Por padrão, PRINT RECORD mostra a caixa de diálogo de impressão antes de imprimir. Se o usuário cancela uma das caixas de diálogo de impressão, o comando se cancela e não é impresso o registro.

Pode eliminar estas caixas de diálogo utilizando o parâmetro opcional asterisco (*\**) ou o parâmetro opcional “maior que” (*\>*):

* O parâmetro *\** produz um trabalho de impressão utilizando os parâmetros de impressão atual (parâmetros por padrão ou definidos pelos comandos *\_o\_PAGE SETUP* ou [SET PRINT OPTION](set-print-option.md) ).
* Além disso, o parâmetro *\>* produz um trabalho de impressão sem reinicializar os parâmetro de impressão atual. Este parâmetro é útil para executar várias chamadas consecutivas a PRINT RECORD (por exemplo ao interior de um loop) enquanto mantém os parâmetros de impressão personalizados definidos previamente.

**4D Server:** este comando pode ser executado em 4D Server dentro do marco de um procedimento armazenado. Neste contexto:

* Tenha certeza de que nenhuma caixa caixa de diálogo apareça na máquina servidor (exceto para uma necessidade específica). Para fazer isto, é necessário chamar ao comando com o parâmetro *\** ou *\>*.
* Em caso de um problema com a impressora (sem papel, impressora desconectada, etc.), não gera mensagem de erro.

**Aviso:** Não use o comando [PAGE BREAK](page-break.md) com PRINT RECORD. [PAGE BREAK](page-break.md) é reservado exclusivamente para uso combinado com o comando [Print form](../commands/print-form.md).

#### Exemplo 1 

O exemplo a seguir imprime o registro atual da tabela \[Faturas\]. O código está no método de objeto de um botão **Imprimir** no formulário de entrada. Quando o usuário clicar no botão, o registro se imprime utilizando um formulário de saída criado para este propósito. 

```4d
 FORM SET OUTPUT([Faturas];"Print One From Data Entry") // Seleção de formulário para impressão
 PRINT RECORD([Faturas];*) // Imprimir as faturas(sem mostrar diálogos de impressão)
 FORM SET OUTPUT([Faturas];"Standard Output") // Restauração do formulário de saída anterior
```

#### Exemplo 2 

O exemplo a seguir imprime o mesmo registro atual em dois formulários diferentes. O código está no método de objeto de um botão **Imprimir** no formulário de entrada. Você quer definir parâmetros de impressão personalizados e depois utilizá-los em dois formulários. 

```4d
 PRINT SETTINGS //O usuário define os parâmetros de impressão
 If(OK=1)
    FORM SET OUTPUT([Empregados];"Detalhado") //Usar o primeiro formulário de impressão
    PRINT RECORD([Empregados];>) //Imprimir utilizando os parâmetros definidos pelo usuário
    FORM SET OUTPUT([Empregados];"Simple") //Usar o segundo formulário de impressão
    PRINT RECORD([Empregados];>) //Imprimir utilizando os parâmetros definidos pelo usuário
    FORM SET OUTPUT([Empregados];"Output") //Restaurar o formulário de saída por padrão
 End if
```

#### Ver também 

[Print form](../commands/print-form.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 71 |
| Thread-seguro | &cross; |


