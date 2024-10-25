---
id: form-load
title: FORM LOAD
slug: /commands/form-load
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*Tabela* ;} *formulario* {; *formData*}{; *} )<!-- END REF-->
<!--REF #_command_.FORM LOAD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Table | Table | &#8594;  | Formulário de tabela para carregar (se omitido, carrega um formulário do projeto) |
| formulario | Text, Object | &#8594;  | Nome do formulário de projeto a abrir para impressão ou string Vazia para fechar o formulário de projeto atual |
| formData | Object | &#8594;  | Dados a associar ao formulário |
| * | Operador | &#8594;  | Se passar = o comando se aplica a base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM LOAD.Summary-->O comando **FORM LOAD** se utiliza para carregar o *formulario* (projeto ou tabela) em memória com o propósito de imprimir seus dados ou analisar seus conteúdos.<!-- END REF--> Só pode haver um formulário atual por processo.

No parâmetro *formulário* pode passar:

* o nome do formulário ou
* a rota (em sintaxe POSIX) a um arquivo válido .json que contenha uma descrição do formulário a usar (ver *Form file path*), ou
* um objeto que contenha uma descrição do formulário

Quando executar o comando desde um componente, carrega os formulários do componente por padrão. Se passar o parâmetro \*, o método carega os formulários do banco de dados local.

##### formData 

Opcionalmente, pode passar parâmetros ao *formulario* utilizando o objeto *dataForm*. Toda propriedade do objeto *dataForm* estará disponível desde o contexto do formulário através do comando [Form](form.md). Por exemplo, se passar um objeto que contenha {"version", "12"} em *dataForm*, poderá obter ou definir o valor da propriedade "version" no formulario chamando:

```4d
 $v:=Form.version //"12"
 Form.version:=13
```

O objeto *dataForm* está disponível no evento formulário On Load.

*dataForm* lhe permite passar parámetros de forma segura a seus formulários, seja qual for o contexto de chamada. Em particular, se o mesmo formulário for cnamado desde diferentes lugares no mesmo processo, sempre poderá acessar a seus valores específicos simplesmente chamando a [Form](form.md).myProperty. 

**Nota:** se não passar o parâmetro *dataForm* ou se passar um objeto indefinido, **FORM LOAD** cria automaticamente um novo objeto vazio vinculado ao *formulario*, disponível através do comando [Form](form.md).

##### Impressão de dados 

Para que este comando possa ser executado, uma tarefa de impressão deve ser aberta de antemão usando o comando [OPEN PRINTING JOB](open-printing-job.md). O comando [OPEN PRINTING JOB](open-printing-job.md) faz uma chamada implícita ao comando [FORM UNLOAD](form-unload.md), pelo que neste contexto é necessário executar [FORM LOAD](form-load.md). Uma vez carregado, o *formulario* se converte no formulário de impressão atual. Todos os comandos de gestão de objetos, e em particular, o comando [Print object](print-object.md), trabalham com este formulário.  
  
Se um formulário de impressão já tiver sido carregado previamente (através de uma chamada anterior ao comando **FORM LOAD**), ele é fechado e substituído por *formulario*. Pode abrir e fechar vários formulários projeto na mesma sessão de impressão. Mudar de formulário de impressão através do comando **FORM LOAD** não gera saltos de página. É responsabilidade do desenvolvedor manejar os saltos de página.   
  
Só o evento formulário On Load se executa durante a abertura do formulário, assim como os métodos dos objetos do formulário. Os outros eventos de formulário se ignoram. O evento de formulário On Unload se executa ao final da impressão.

Para manter a coerência gráfica dos formulários, se recomenda aplicar a propriedade de aparência "impressão" em todas as plataformas.   
  
O formulário de impressão atual é fechado automaticamente quando se chama o comando [CLOSE PRINTING JOB](close-printing-job.md).

##### Análise do conteúdo do formulário 

Esta possibilidade consiste em carregar um formulário fora da tela para análise. Para realizar esta ação, basta com chamar a **FORM LOAD** fora do contexto de um trabalho de impressão. Neste caso, os eventos de formulário não se executam.  
  
**FORM LOAD**\] Pode ser utilizado com os comandos [FORM GET OBJECTS](form-get-objects.md) e [OBJECT Get type](object-get-type.md) para levar a cabo qualquer tipo de processo no conteúdo do formulário. A continuação, deve chamar ao comando [FORM UNLOAD](form-unload.md) para liberar o formulário da memória.  
  
Tenha em conta que em todos os casos, o formulário na tela permanece carregado (não é afetado pelo comando **FORM LOAD**) pelo que não é necessário voltar a carregar ele depois de chamar a [FORM UNLOAD](form-unload.md).  
**Lembrete:** no contexto off screen, não esqueça chamar [FORM UNLOAD](form-unload.md) para evitar todo risco de saturação da memória.

#### Exemplo 1 

Chamar um formulário projeto em um trabalho de impressão:

```4d
 OPEN PRINTING JOB
 FORM LOAD("print_form")
  // execução de eventos e métodos objeto
```

#### Exemplo 2 

Chamar um formulário tabela em um trabalho de impressão:

```4d
 OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
  // execução de eventos e métodos objeto
```

#### Exemplo 3 

Análise do conteúdo de um formulário para realizar um processo nas áreas de entrada de texto:

```4d
 FORM LOAD([People];"my_form")
  // seleção do formulário sem execução dos eventos nem dos métodos
 FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
 For($i;1;Size of array(arrObjNames))
    If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… processamento
    End if
 End for
 FORM UNLOAD //não esquecer de descarregar o formulário
```

#### Exemplo 4 

O exemplo abaixo retorna o número de objetos em um formulário JSON:

```4d
 ARRAY TEXT(objectsArray;0) //ordena itens de formulário em arrays
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //carrega o formulário
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //retorna a contagem de objetos
```

o resultado mostrado é

![](../assets/en/commands/pict3688480.en.png)

#### Exemplo 5 

Se quiser imprimir um formulário que contenha um list box, durante o evento *on load*, pode modificar o conteúdo do list box a modificar.  
  
1\. No método de impressão, escreva:

```4d
 var $formData : Object

var $over Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... //preenche a coleção de dados
 
 FORM LOAD("GlobalForm";$formData) //salva a coleção em $formData
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // a datasource deste listbox "LB" é Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB


```

2\. No método formulário, pode escrever:

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) //LBcollection está disponível
          $o.reference:=Uppercase($o.reference)
       End for each
 End case
```

#### Ver também 

[Current form name](current-form-name.md)  
[FORM UNLOAD](form-unload.md)  
[LISTBOX GET OBJECTS](listbox-get-objects.md)  
[OBJECT Get type](object-get-type.md)  
[Print object](print-object.md)  