---
id: print-form
title: Print form
slug: /commands/print-form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*tabela* ;} *formulario* {; *formData*} {; *area1*{; *area2*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Print form.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a qual pertence o formulário, ou tabela padrão, se omitido |
| formulario | Text, Object | &#8594;  | Formulário a imprimir |
| formData | Object | &#8594;  | Data to associate to the form |
| area1 | Integer | &#8594;  | Marcador de impressão, a Área de início (se area2 é especificada) |
| area2 | Integer | &#8594;  | Área de fim (se área1 for especificada) |
| Resultado | Integer | &#8592; | Altura da área de impressão |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Print form.Summary-->Print form simplesmente imprime *formulario* com os valores atuais dos campos e variáveis.<!-- END REF--> Geralmente este comando se utiliza para imprimir relatórios muito complexos que necessitem um controle total do processo de impressão. Print form não processa registros, nem quebras ou saltos de páginas. Estas operações são sua responsabilidade. Print form imprime campos e variáveis em um marco de tamanho fixo unicamente.

No formulário parâmetro, pode passar:  
  
* o nome do formulário ou
* a rota (em sintaxe POSIX) para um arquivo válido .json que contenha uma descrição do formulário a usar (ver *Form file path*),
* ou um objeto que contenha uma descrição do formulário.

Como Print form não gera um salto de página depois de imprimir o formulário, é fácil combinar diferentes formulários na mesma página. Então, Print form é ideal para efetuar tarefas de impressão completas que envolvam diferentes tabelas e diferentes formulários. Para forçar um salto de página entre formulários, utilize o comando [PAGE BREAK](page-break.md). Para passar à seguinte página de um formulário cuja altura é maior que o espaço disponível, chame o comando [CANCEL](cancel.md) antes do comando [PAGE BREAK](page-break.md).

Podem ser utilizadas três sintaxes diferentes:

* **Impressão da área de detalhe**

Sintaxe:

```4d
 altura:=Print form(minhaTabela;meuForm)
```

Neste caso, Print form só imprime a área de detalhe (a área entre a linha cabeçalho e a linha detalhe) do formulário.

* **impressão** **da área do formulário**

Sintaxes:

```4d
 altura:=Print form(minhaTabela;meuForm;marcador)
```

Neste caso, o comando imprimirá a seção designada pelo *marcador*. Passe no parâmetro *marcador* uma das constantes do tema *Área de formulário*:

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Form break0   | Inteiro longo | 300   |
| Form break1   | Inteiro longo | 301   |
| Form break2   | Inteiro longo | 302   |
| Form break3   | Inteiro longo | 303   |
| Form break4   | Inteiro longo | 304   |
| Form break5   | Inteiro longo | 305   |
| Form break6   | Inteiro longo | 306   |
| Form break7   | Inteiro longo | 307   |
| Form break8   | Inteiro longo | 308   |
| Form break9   | Inteiro longo | 309   |
| Form detail   | Inteiro longo | 0     |
| Form footer   | Inteiro longo | 100   |
| Form header   | Inteiro longo | 200   |
| Form header1  | Inteiro longo | 201   |
| Form header10 | Inteiro longo | 210   |
| Form header2  | Inteiro longo | 202   |
| Form header3  | Inteiro longo | 203   |
| Form header4  | Inteiro longo | 204   |
| Form header5  | Inteiro longo | 205   |
| Form header6  | Inteiro longo | 206   |
| Form header7  | Inteiro longo | 207   |
| Form header8  | Inteiro longo | 208   |
| Form header9  | Inteiro longo | 209   |

**• impressão** **de seção**

Sintaxes:

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

Neste caso, o comando imprimirá a seção incluída entre os parâmetros *areaInicio* e *areaFim* Parâmetros. Os valores introduzidos devem ser expressados em píxels.

O valor devolvido por Print form indica a altura da área de impressão. Este valor será considerado automaticamente pelo comando [Get printed height](get-printed-height.md).

As caixas de diálogo de impressão não aparecem quando utiliza Print form. O relatório não utiliza os parâmetros de impressão definidos para o formulário no ambiente Desenho. Há duas formas de especificar os parâmetros de impressão antes de efetuar uma série de chamadas a Print form:

* Chamar [PRINT SETTINGS](print-settings.md). Neste caso, você permite ao usuário escolher os parâmetros.
* Chamar [SET PRINT OPTION](set-print-option.md) e [GET PRINT OPTION](get-print-option.md).. Neste caso, os parâmetros de impressão se especificam por programação.

Print form gera apenas um evento On Printing Detail para o método de formulário.  

Print form constrói cada página impressa na memória. Cada página se imprime quando a página em memória está cheia ou quando você chama a [PAGE BREAK](page-break.md). Para ter certeza de que a impressão da última página depois de utilizar Print form, deve concluir com o comando [PAGE BREAK](page-break.md). Do contrário, se a última página não estiver cheia, permanece em memória e não se imprime.

**Atenção:** Sub-formulários não são impressos com Print form. Para imprimir apenas um formulário com esses objetos, use [PRINT RECORD](print-record.md).

Print form gera só um evento On Printing Detail para o método formulário.

**4D Server:** Este comando pode ser executado em 4D Server dentro do framework de um procedimento armazenado. Neste contexto:

* Tenha certeza de que não apareça nenhuma caixa de diálogo na equipe servidor (exceto para um requerimento específico).
* No caso de um problema relacionado com a impressora (sem papel, impressora desconectada, etc.), não é gerada uma mensagem de erro.

#### Exemplo 1 

O exemplo a seguir atua da mesma que forma que o comando [PRINT SELECTION](print-selection.md). Entretanto, o relatório usa um de dois diferentes formulários, dependendo se o registro é para um cheque ou um depósito:

```4d
 QUERY([Registro]) // Select the records
 If(OK=1)
    ORDER BY([Registro]) // Ordenar os registros
    If(OK=1)
       PRINT SETTINGS // Mostrar as caixas de diálogo de impressão
       If(OK=1)
          For($vlRegistro;1;Records in selection([Registro]))
             If([Registro]Tipo ="Cheque")
                Print form([Registro];"SaídaCheque") // Utilize um formulário de cheques
             Else
                Print form([Registro];"SaidaDeposito") // Utilizar outro formulário de depósitos
             End if
             NEXT RECORD([Registro])
          End for
          PAGE BREAK // Tenha certeza de que a última página se imprima
       End if
    End if
 End if
```

#### Exemplo 2 

Veja o exemplo do comando [SET PRINT MARKER](set-print-marker.md). 

#### Exemplo 3 

Este formulário se utiliza como diálogo e depois se imprime com modificações:

![](../assets/en/commands/pict6264975.en.png)

O método formulario:

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

O código que chama ao diálogo depois imprime seu corpo:

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

#### Ver também 

[CANCEL](cancel.md)  
[PAGE BREAK](page-break.md)  
[PRINT SETTINGS](print-settings.md)  
[SET PRINT OPTION](set-print-option.md)  