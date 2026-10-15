---
id: listbox-set-column-formula
title: LISTBOX SET COLUMN FORMULA
slug: /commands/listbox-set-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Syntax-->**LISTBOX SET COLUMN FORMULA** ( * ; *objeto* : Text ; *formula* : Text ; *tipoDado* : Integer )<br/>**LISTBOX SET COLUMN FORMULA** ( *objeto* : Variable ; *formula* : Text ; *tipoDado* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| formula | Text | &#8594; | Fórmula 4D associada à coluna |
| tipoDado | Integer | &#8594; | Tipo de resultado da fórmula |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Summary-->O comando **LISTBOX SET COLUMN FORMULA** modifica a *formula* associada à coluna de list box designada pelos parâmetros *objeto* e *\**.<!-- END REF--> As fórmulas só podem ser utilizadas quando a propriedade “Fonte de dados” do list box forem de **Seleção atual**, **Seleção temporal** ou **Coleção ou Seleção de Entidades.**

**Nota:** Pode usar o comando [OBJECT SET DATA SOURCE](../commands/object-set-data-source) para definir a fonte de dados de uma list box tipo array. 

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia.

O parâmetro *formula* pode conter toda expressão valida:

* uma instrução,
* uma fórmula gerada utilizando o editor de fórmulas,
* uma chamada a um comando 4D,
* uma chamada a um método de projeto.

Quando o comando é chamado, a fórmula é analisada e logo executada.  
  
**Nota**: utilize o comando [Command name](../commands/command-name) para definir as fórmulas independentes da linguagem da aplicação (quando são chamados os comandos 4D).  
  
O parâmetro *tipoDados* designa o tipo de dados resultantes da execução da fórmula. Neste parâmetro, passe uma das constantes do tema *Tipos de campos e variáveis*. Se o resultado da fórmula não corresponde ao tipo de dados esperado, um erro é gerado.

## Ver também 

[LISTBOX Get column formula](../commands/listbox-get-column-formula)  
[OBJECT SET DATA SOURCE](../commands/object-set-data-source)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1203 |
| Thread-seguro | no |



