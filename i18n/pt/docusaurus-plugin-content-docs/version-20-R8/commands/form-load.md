---
id: form-load
title: FORM LOAD
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.FORM LOAD.Params-->

| Parâmetro | Tipo         |                             | Descrição                                                                                                                                                                                                                                                |
| --------- | ------------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable    | Tabela       | &#8594; | Formulário tabela a ser carregado (se omitido, carrega um formulário projeto)                                                                                                                                                         |
| form      | Text, Object | &#8594; | Nome (string) do formulário (projeto ou tabela), ou caminho POSIX (string) para um arquivo .json que descreve o formulário, ou um objeto que descreve o formulário a ser aberto |
| formData  | Object       | &#8594; | Dados para associar ao formulário                                                                                                                                                                                                                        |
| \*        | Operador     | &#8594; | Se passado = o comando se aplica ao banco de dados do host quando é executado a partir de um componente (parâmetro ignorado fora desse contexto)                                                                                      |

<!-- END REF-->

## Descrição

<!--REF #_command_.FORM LOAD.Summary-->The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents.<!-- END REF-->O comando **FORM LOAD** é usado para carregar o *form* na memória no processo atual juntamente com *formData* (opcional) para imprimir seus dados ou analisar seu conteúdo. Só pode haver um formulário atual por processo.

No parâmetro *form*, você pode passar:

- o nome de um formulário, ou
- o caminho (na sintaxe POSIX) para um arquivo .json válido que contém uma descrição do formulário a ser usado, ou
- um objeto contendo uma descrição do formulário.

Quando o comando for executado a partir de um componente, ele carrega os formulários de componente por padrão. Se você passar o parâmetro *\**, o método carrega os formulários do banco de dados de host.

### formData

Opcionalmente, é possível passar parâmetros para o *form* usando o objeto *formData* ou o objeto de classe de formulário instanciado automaticamente pelo 4D se você tiver [associado uma classe de usuário ao formulário](../FormEditor/properties_FormProperties.md#form-class). Todas as propriedades do objeto de dados do formulário estarão disponíveis no contexto do formulário por meio do comando [Form](form.md).
Any properties of the form data object will then be available from within the form context through the [Form](form.md) command.

Para obter informações detalhadas sobre o objeto de dados do formulário, consulte o comando [`DIALOG`](dialog.md).

### Impressão de dados

Para poder executar este comando, uma tarefa de impressão deve ser aberta antes usando o comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md). O comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) faz uma chamada implícita para o comando [FORM UNLOAD](../commands-legacy/form-unload.md), portanto, nesse contexto, é necessário executar **LOAD FORM**. Uma vez carregado, este *formulário* torna-se o formulário de impressão atual. Todos os comandos de gerenciamento de objetos e, em particular, o comando [Print object](../commands-legacy/print-object.md), funcionam com esse formulário.

Se um formulário de impressão já tiver sido carregado anteriormente (por meio de uma chamada anterior ao comando **FORM LOAD**), ele será fechado e substituído por *form*. Você pode abrir e fechar vários formulários de projeto na mesma sessão de impressão. A alteração do formulário de impressão por meio do comando **FORM LOAD** não gera quebras de página. Cabe ao desenvolvedor gerenciar as quebras de página.

Apenas o [evento `No carregamento`](../Events/onLoad.md) é executado durante a abertura do formulário de projeto, bem como quaisquer métodos de objeto da forma. Outros eventos de formulário são ignorados. O evento formulário [`On Unload`](../Events/onUnload.md) é executado no final da impressão.

Para preservar a consistência gráfica das formas, é recomendado aplicar a propriedade de aparência "Imprimindo" independentemente da plataforma.

O formulário de impressão atual é fechado automaticamente quando o comando [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) é chamado.

### Analisar o conteúdo do formulário

Isso consiste em carregar um formulário fora da tela para fins de análise. Para fazer isso, basta chamar **FORM LOAD** fora do contexto de um trabalho de impressão. Nesse caso, os eventos de formulário não são executados.

**FORM LOAD** pode ser usado com os comandos [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) e [OBJECT Get type](../commands-legacy/object-get-type.md) para executar qualquer tipo de processamento no conteúdo do formulário. Em seguida, você deve chamar o comando [FORM UNLOAD](../commands-legacy/form-unload.md) para liberar o formulário da memória.

Observe que, em todos os casos, o formulário na tela permanece carregado (não é afetado pelo comando **FORM LOAD**), portanto, não é necessário recarregá-lo depois de chamar [FORM UNLOAD](../commands-legacy/form-unload.md).

**Lembrete:** no contexto fora da tela, não se esqueça de chamar [FORM UNLOAD](../commands-legacy/form-unload.md) para evitar qualquer risco de estouro de memória.

## Exemplo 1

Chamada de um formulário de projeto em um trabalho de impressão:

```4d
OPEN PRINTING JOB
 FORM LOAD("print_form")
 // execução de eventos e de métodos objeto
```

## Exemplo 2

Chamar um formulário da tabela em um trabalho de impressão:

```4d
OPEN PRINTING JOB
FORM LOAD([People]; "print_form")
// execução de eventos e métodos de objeto
```

## Exemplo 3

Analisar os conteúdos de formulário para executar o processamento nas áreas de entrada de texto:

```4d
FORM LOAD([People];"my_form")
// seleção de formulário sem execução de eventos ou métodos
FORM GET OBJECTS(arrObjNames; rrObjPtrs;arrPages;*)
For($i;1; tamanho da matriz (arrObjNames))
If(OBJECT Obter tipo(*; rrObjNames{$i})=Entrada de texto do tipo objeto
//… processamento
Finaliza se
End para
FORM UNLOAD ///não se esqueça de descarregar o formulário
```

## Exemplo

O exemplo a seguir retorna o número de objetos em um formato JSON:

```4d
ARRAY TEXT(objectsArray;0) //classificar itens do formulário em arrays
ARRAY POINTER(variablesArray;0)
ARRAY INTEGER(pagesArray;0)

FORM LOAD("/RESOURCES/OutputForm.json") //carrega o formulário
FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)

ALERT("The form contains "+String(size of array(objectsArray))+" objects") //retorna a contagem de objetos
```

o resultado mostrado é:

![](../assets/en/commands/pict3688480.en.png)

## Exemplo 2

Se quiser imprimir um formulário contendo uma caixa de lista. Durante o evento *on load*, você deseja que o conteúdo da caixa de listagem seja modificado.

1\. No método de impressão, você escreve:

```4d
var $formData : Object
var $over : Boolean
var $full : Boolean

OPEN PRINTING JOB
$formData:=New object
$formData.LBcollection:=New collection()
... //preencher a coleção com dados

FORM LOAD("GlobalForm";$formData) //armazenar a coleção em $formData
$over:=False
Repetir
$full:=Print object(*; "LB") //a fonte de dados dessa caixa de listagem "LB" é Form.LBcollection
LISTBOX GET PRINT INFORMATION(*; "LB";lk a impressão terminou;$over)
If(Not($over))
PAGE BREAK
End if
Until($over)
FORM UNLOAD
CLOSE PRINTING JOB
```

2\. No método de formulário, você pode escrever:

```4d
var $o : Object
Case of
:(Form event code=On Load)
For each($o;Form.LBcollection) //LBcollection está disponível
$o.reference:=Uppercase($o.reference)
End for each
End case
```

## Veja também

[Current form name](../commands-legacy/current-form-name.md)\
[FORM UNLOAD](../commands-legacy/form-unload.md)\
[LISTBOX GET OBJECTS](../commands-legacy/listbox-get-objects.md)\
[OBJECT Get type](../commands-legacy/object-get-type.md)\
[Print object](../commands-legacy/print-object.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1103                        |
| Thread safe       | &cross; |


