---
id: wp-insert-formula
title: WP INSERT FORMULA
slug: /WritePro/commands/wp-insert-formula
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT FORMULA.Syntax-->**WP INSERT FORMULA** ( *alvoObj* ; *formula* ; *modo* {; *atualizaRange*} )<!-- END REF-->
<!--REF #_command_.WP INSERT FORMULA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alvoObj | Object | &#8594;  | Range de elementos ou elemento ou documento 4D Write Pro |
| formula | Object | &#8594;  | Objeto fórmula |
| modo | Number | &#8594;  | Modo de inserção |
| atualizaRange | Number | &#8594;  | Inclui ou exclui o conteúdo inserido dentro da range de seleção |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP INSERT FORMULA.Summary-->O comando **WP INSERT FORMULA** insere uma *formula* em *alvoObj* de acordo com um *mode* de inserção especificado.<!-- END REF-->

No parâmetro *alvoObj*, pode passar:

* uma range, ou
* um elemento (tabela /linha / células / parágrafo / corpo / cabeçalho / rodapé / seção / subseção / imagem inline), ou
* um documento 4D Write Pro.

No parâmetro *formula*, passe 4D formula para avaliar em um objeto criado pelos comandos [Formula](../../commands-legacy/formula.md) ou [Formula from string](../../commands-legacy/formula-from-string.md). 

No parâmetro *modo*, passe uma das constantes abaixo para indicar o modo de inserção a ser usado:

| Constante  | Tipo          | Valor | Comentário                                                                                                           |
| ---------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| wk append  | Inteiro longo | 2     | Insere conteúdos ao final da faixa e atualiza a faixa para conter tanto os conteúdos anteriores quanto os inseridos. |
| wk prepend | Inteiro longo | 1     | Conteúdos inseridos no início da faixa e atualiza a faixa para conter os conteúdos anteriores e os inseridos         |
| wk replace | Inteiro longo | 0     | Substituir e atualizar conteúdos da faixa; a nova faixa contèm os conteúdos inseridos.                               |

* se *alvoObj* for uma range, pode usar o parâmetro opcional *AtualizaRange* para passar uma das constantes abaixo para especificar se a *formula* inserida está ou não incluida na range resultante:  
    
| Constante             | Tipo          | Valor | Comentário                                                                                     |  
| --------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------- |  
| wk exclude from range | Inteiro longo | 1     | Insere conteùdos ao fim da faixa e atualiza a faixa para menter apenas conteúdos anteriores.   |  
| wk include in range   | Inteiro longo | 0     | Insere conteúdos ao início da faixa e atualiza a faixa para manter apenas conteúdos anteriores |  
    
Se não passar um parâmetro *atualizaRange*, por padrão a *formula* inserida está incluida na range resultante.
* se *alvoObj* não for uma range, *atualizaRange* é ignorado.

Nota: Lembre que quando chamado, o objeto formula é avaliado dentro do contexto do banco de dados ou componentes que o criaram

## Exemplo 1 

Para substituir todas as fórmulas atuais de data com strings formatadas:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // define a fórmula a ser encontrada
 $find:=Formula(Current date)
 
  // define a fórmula de substituição
 $newFormula:=Formula(String(Current date;System date long))
 
  // encontra todas as fórmulas no documento
 $_formulas:=WP Get formulas(WriteProArea)
 
  // pesquisa a coleção de WP Get formulas
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)&NBSP;&NBSP;
 
  // daí substitui cada fórmula
 For each($formula;$_formulas)
    WP INSERT FORMULA($formula.range;$newFormula;wk replace)
 End for each
```

## Exemplo 2 

Se quiser utilizar um nome de fórmula para o nome do cliente:

```4d
  //añade algunos datos
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //cria um objeto fórmula com um nome
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //insere como texto
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP INSERT FORMULA($range;$o;wk append)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## Ver também 

*Gestão de fórmulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  