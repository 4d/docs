---
id: listbox-select-rows
title: LISTBOX SELECT ROWS
slug: /commands/listbox-select-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROWS.Syntax-->**LISTBOX SELECT ROWS** ( {* ;} *objeto* ; *seleção* {; *ação*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROWS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome objeto (string) Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * for especificado) ou Variável (se * for variável) |
| seleção | Object, Collection | &#8594;  | objeto ou coleção descrevendo as linhas a selecionar |
| ação | Integer | &#8594;  | lk replace selecion (padrão se omitido), lk add to selection, lk remove from selecion. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SELECT ROWS.Summary-->**O comandoLISTBOX SELECT ROWS** seleciona as alinhas de uma list box de seleção de entidades ou uma list box coleção que corresponde às entidades ou objetos contendo o parâmetro *seleção*.<!-- END REF--> 

Se passar o parâmetro opcional *\**, você indica que o parâmetro *objeto* em um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passa uma referência de variável ao invés de uma string. Para saber mais sobre nomes objetos veja a seção *Propriedades dos objetos*.

No parâmetro *selection*, passe um Object ou uma [Collection](# "Array of object property values") dependendo do tipo list box:

**List box Seleção de Entidade**

Para uma **entity selection list box**, passe um objeto de seleção de entidade contendo entidades da mesma classe de dados como a list box. Se *seleção* for um objeto seleção de entidades de uma classe de dados diferentes que a list box, um erro é retornado. 

**Collection list box**

Para uma **collection list box**, passe uma subcoleção de objetos pertencendo à list box. Se sua list box contiver valores escalares, passe uma subcoleção de valores. 

**Notas:**

* Se *seleção* não for um objeto válido de seleção de entidade/coleção, um erro é retornado.
* Se *seleção* for uma seleção de entidade/coleção vazia, como padrão (com a ação "replace", ver abaixo) todas as linhas da list box são desselecionadas. Para outras ações, o comando não faz nada
* Se *seleção* conter entidades / elementos que não estiverem exibidas na list box, são ignorados.

O parâmetro opcional *ação*, se passado, é usado para definir a ação de seleção para executar quando uma seleção de linhas já existir na list box. Pode passar um valor ou usar as cosntantes abaixo (localizadas no tema “*List box*” ):

| Constante                | Tipo          | Valor | Comentário                                                                                                                                                                                                                                              |
| ------------------------ | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Inteiro longo | 1     | A linha selecionada é adicionada à seleção existente. Se a linha selecionada já pertence à seleção existente, o comando não faz nada.                                                                                                                   |
| lk remove from selection | Inteiro longo | 2     | A linha selecionada é removida da seleção existente. Se a linha especificada não pertence à seleção existente, o comando não faz nada.                                                                                                                  |
| lk replace selection     | Inteiro longo | 0     | A linha selecionada torna-se a nova seleção e substitui a seleção existente. O comando tem o mesmo efeito que um clique do usuário em uma linha (no entanto, o evento On Clicked não é gerado). Esta é a ação padrão (se o parâmetro *ação* é omitido). |

Como padrão, se o parâmetro *ação* for omitido, o comando substitui as linhas definidas pelo parâmetro *seleção*. 

**Nota:** O comando assume que cada objeto ou entidade é exibida apenas uma vez na list box. 

#### Exemplo 1 

Este código eprmite que selecione faturas em uma seleção de entidades usando apenas uma única petição de servidor:

```4d
  //No método On Load do formulário temos: Form.invoices:=ds.Invoices.all()
  //A ListBox "Invoices" exibe a seleção de entidades Form.invoices
 
 var $cash : Object
 var $card : Object
 
  //Faturas selecionadas pagas em dinheiro
 $cash:=Form.invoices.query("paymentMethod=:1";"Cash")
 LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)
```

#### Exemplo 2 

Exemplo com a coleção de objetos:

```4d
 var $name : Text
 $name:=Request("Enter a name")
 If(OK=1)
  // Form.studentsColl é uma coleção de objetos
    $selection:=Form.studentsColl.query("lastname = :1";$name)
    LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)
 End if
```

#### Ver também 

[ LISTBOX SELECT ROW ](listbox-select-row.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1715 |
| Thread-seguro | &check; |
| Proibido no servidor ||


