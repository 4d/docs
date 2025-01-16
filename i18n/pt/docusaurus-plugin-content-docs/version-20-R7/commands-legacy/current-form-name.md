---
id: current-form-name
title: Current form name
slug: /commands/current-form-name
displayed_sidebar: docs
---

<!--REF #_command_.Current form name.Syntax-->**Current form name**  : Text<!-- END REF-->
<!--REF #_command_.Current form name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome do projeto de formulário atual ou tabela formulário atual no processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current form name.Summary-->O comando **Current form name** retorna o nome do formulário atual definido para o processo.<!-- END REF--> O formulário atual pode ser um formulário de projeto ou formulário de tabela. 

Como padrão, se não tiver chamado o comando [FORM LOAD](form-load.md) no processo chamado, o formulário atual é aquele sendo exibido ou impresso. Se q tiver chamado o comando [FORM LOAD](form-load.md) no processo, o formulário atual é aquele estabelecido pelo comando e continua sendo assim até chamar [FORM UNLOAD](form-unload.md) (ou [CLOSE PRINTING JOB](close-printing-job.md)).

O comando retorna:

* o nome do formulário ou
* o nome de arquivo sem a extensão se o formulário atual tiver sido criado por um arquivo json ou
* o atributo "nome" se o formulário atual for criado por um objeto ou
* uma string vazia se não houver formulário atual definido para o processo

#### Exemplo 1 

Em um formulário de entrada, ponha o código abaixo em um botão:

```4d
 var $FormName : Text
 $win:=Open form window([Members];"Input";Plain form window)
 DIALOG([Members];"Input")
 $FormName:=Current form name
  // $FormName = "Input"
 FORM LOAD([Members];"Drag")
 $FormName:=Current form name
  // $FormName = "Drag"
  //...
```

#### Exemplo 2 

Se quiser obter o formulário atual se este for um formulário projeto:

```4d
 $PointerTable:=Current form table
 If(Nil($PointerTable)) // este é um formulário projeto
    $FormName:=Current form name
    ... // processamento
 End if
```

#### Ver também 

[FORM LOAD](form-load.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1298 |
| Thread-seguro | &cross; |


