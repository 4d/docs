---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| Parâmetro | Tipo         |                             | Descrição                                                                                                                                                                                                                                                |
| --------- | ------------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable    | Tabela       | &#8594; | Tabela do formulário ou tabela padrão, se omitida                                                                                                                                                                                                        |
| form      | Text, Object | &#8594; | Nome (string) do formulário (projeto ou tabela), ou caminho POSIX (string) para um arquivo .json que descreve o formulário, ou um objeto que descreve o formulário a ser aberto |
| formData  | Object       | &#8594; | Dados para associar ao formulário                                                                                                                                                                                                                        |
| areaStart | Integer      | &#8594; | Marcador de impressão ou Área inicial (se areaEnd for especificada)                                                                                                                                                                   |
| areaEnd   | Integer      | &#8594; | Área final (se for especificado pela areaStart)                                                                                                                                                                                       |
| Resultado | Integer      | &#8592; | Altura da seção impressa                                                                                                                                                                                                                                 |

<!-- END REF-->

## Descrição

<!--REF #_command_.Print form.Summary-->O comando **Print form** simplesmente imprime *form* com os valores atuais dos campos e variáveis de *aTable*.<!-- END REF--> Normalmente é usado para imprimir relatórios muito complexos que exigem controle total sobre o processo de impressão. O **formulário de impressão** não faz nenhum processamento de registros, processamento de quebras ou quebras de página. Essas operações são de sua responsabilidade. **Print form** imprime campos e variáveis em um quadro de tamanho fixo apenas.

No parâmetro *form*, você pode passar:

- o nome de um formulário, ou
- o caminho (na sintaxe POSIX) para um arquivo .json válido que contém uma descrição do formulário a ser usado (consulte *Caminho do arquivo de formulário*), ou
- um objeto contendo uma descrição do formulário.

Como **Imprimir formulário** não emite uma quebra de página após a impressão do formulário, é fácil combinar diferentes formulários na mesma página. Portanto, o **Print form** é perfeito para tarefas de impressão complexas que envolvam diferentes tabelas e diferentes formulários. Para forçar uma quebra de página entre os formulários, use o comando [PAGE BREAK](../commands-legacy/page-break.md). Para transferir a impressão para a próxima página em um formulário cuja altura seja maior que o espaço disponível, chame o comando [CANCEL](../commands-legacy/cancel.md) antes do comando [PAGE BREAK](../commands-legacy/page-break.md).

Três sintaxes diferentes podem ser usadas:

- **Impressão da área de detalhe**

Sintaxe:

```4d
 height:=Print form(myTable;myForm)
```

Nesse caso, **Imprimir formulário** imprime apenas a área de detalhes (a área entre a linha do cabeçalho e a linha de detalhes) do formulário.

- **Impressão da área do formulário**

Sintaxe:

```4d
 height:=Print form(myTable;myForm;marker)
```

Nesse caso, o comando imprimirá a seção designada pelo *marker*. Passe uma das constantes do tema *Form Area* no parâmetro do marcador:

| Parâmetros    | Tipo    | Valor |
| ------------- | ------- | ----- |
| Form break0   | Integer | 300   |
| Form break1   | Integer | 301   |
| Form break2   | Integer | 302   |
| Form break3   | Integer | 303   |
| Form break4   | Integer | 304   |
| Form break5   | Integer | 305   |
| Form break6   | Integer | 306   |
| Form break7   | Integer | 307   |
| Form break8   | Integer | 308   |
| Form break9   | Integer | 309   |
| Form detail   | Integer | 0     |
| Form footer   | Integer | 100   |
| Form header   | Integer | 200   |
| Form header1  | Integer | 201   |
| Form header10 | Integer | 210   |
| Form header2  | Integer | 202   |
| Form header3  | Integer | 203   |
| Form header4  | Integer | 204   |
| Form header5  | Integer | 205   |
| Form header6  | Integer | 206   |
| Form header7  | Integer | 207   |
| Form header8  | Integer | 208   |
| Form header9  | Integer | 209   |

- **Impressão da seção**

Sintaxe:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

Nesse caso, o comando imprimirá a seção incluída entre os parâmetros *areaStart* e *areaEnd*. Os valores inseridos devem ser expressos em pixels.

**formData**

Opcionalmente, é possível passar parâmetros para o *form* usando o objeto *formData* ou o objeto de classe de formulário instanciado automaticamente pelo 4D se você tiver [associado uma classe de usuário ao formulário](../FormEditor/properties_FormProperties.md#form-class). Todas as propriedades do objeto de dados do formulário estarão disponíveis no contexto do formulário por meio do comando [Form](form.md). O objeto de dados do formulário está disponível no [evento de Detalhes de Impressão](../Events/onPrintingDetail.md).

Para obter informações detalhadas sobre o objeto de dados do formulário, consulte o comando [`DIALOG`](dialog.md).

**Valor retornado**

O valor retornado por **Print form** indica a altura da área impressa. Esse valor será automaticamente levado em conta pelo comando [Get printed height](../commands-legacy/get-printed-height.md).

As caixas de diálogo da impressora não são exibidas quando você usa **Print form**. O relatório não usa as configurações de impressão que foram atribuídas ao formulário no ambiente Design. Há duas maneiras de especificar as configurações de impressão antes de emitir uma série de chamadas para **Print form**:

- Chame [PRINT SETTINGS](../commands-legacy/print-settings.md). Nesse caso, você permite que o usuário escolha as configurações.
- Chame [SET PRINT OPTION](../commands-legacy/set-print-option.md) e [GET PRINT OPTION](../commands-legacy/get-print-option.md). Nesse caso, as configurações de impressão são especificadas de forma programática.

**Print form**\* cria cada página impressa na memória. Cada página é impressa quando a página na memória está cheia ou quando você chama [PAGE BREAK] (../commands-legacy/page-break.md). Para garantir a impressão da última página após qualquer uso de **formulário de impressão**, você deve concluir com o comando [PAGE BREAK](../commands-legacy/page-break.md) (exceto no contexto de um [ABERTO PRINTING JOB](../commands-legacy/open-printing-job.md), ver nota). Caso contrário, se a última página não estiver cheia, ela permanecerá na memória e não será impressa.

**Aviso:** Se o comando for chamado no contexto de um trabalho de impressão aberto com [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), você NÃO deve chamar [PAGE BREAK](../commands-legacy/page-break.md) para a última página porque ela é impressa automaticamente pelo comando [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md). Se você chamar [PAGE BREAK](../commands-legacy/page-break.md) nesse caso, uma página em branco será impressa.

Esse comando imprime áreas e objetos externos (por exemplo, áreas 4D Write ou 4D View). A área é redefinida para cada execução do comando.

**Aviso:** Os subformulários não são impressos com **Imprimir formulário**. Para imprimir apenas um formulário com esses objetos, use [PRINT RECORD](../commands-legacy/print-record.md) em vez disso.

**Print form** gera apenas um evento [`On Printing Detail`](../Events/onPrintingDetail.md) para o método formulário.

**4D Server:** Esse comando pode ser executado no 4D Server dentro da estrutura de um procedimento armazenado. Neste contexto:

- Certifique-se de que nenhuma caixa de diálogo seja exibida no computador do servidor (exceto por um requisito específico).
- No caso de um problema relacionado à impressora (falta de papel, impressora desconectada, etc.), nenhuma mensagem de erro é gerada.

## Exemplo 1

O exemplo a seguir funciona como um comando [PRINT SELECTION](../commands-legacy/print-selection.md). No entanto, o relatório usa um de dois formulários diferentes, dependendo se o registro é de um cheque ou de um depósito:

```4d
 QUERY([Register]) // Selecionar os registros
 If(OK=1)
    ORDER BY([Register]) // Ordenar os registros
    If(OK=1)
       PRINT SETTINGS // Exibir caixas de diálogo de impressão
       If(OK=1)
          For($vlRecord;1;Records in selection([Register]))
             If([Register]Type ="Check")
                Print form([Register];"Check Out") // Use um formulário para cheques
             Else
                Print form([Register];"Deposit Out") // Use outro formulário para depósitos
             End if
             NEXT RECORD([Register])
          End for
          PAGE BREAK // Certifique-se de que a última página seja impressa
       End if
    End if
 End if
```

## Exemplo 2

Consulte o exemplo do comando [SET PRINT MARKER](../commands-legacy/set-print-marker.md).

## Exemplo 3

Esse formulário é usado como diálogo e depois impresso com modificações:

![](../assets/en/commands/pict6264975.en.png)

O método formulário:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

O código que chama a caixa de diálogo imprime seu corpo:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

## Veja também

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 5                           |
| Thread safe       | &cross; |


