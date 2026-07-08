---
id: object-get-horizontal-alignment
title: OBJECT Get horizontal alignment
slug: /commands/object-get-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get horizontal alignment.Syntax-->**OBJECT Get horizontal alignment** ( * ; *objeto* : Text ) : Integer<br/>**OBJECT Get horizontal alignment** ( *objeto* : Variable, Field ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get horizontal alignment.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| Resultado | Integer | &#8592; | Código de alinhamento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|20|Modificado|
|15 R4|Modificado|
|13|Renomear|
|12|Renomear|
|6.8.1|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT Get horizontal alignment.Summary-->O comando **OBJECT Get horizontal alignment** devolve um código indicando o tipo de alinhamento aplicado ao objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* designa o nome de um objeto (uma string). Se não passa o parâmetro \*, indica que o parâmetro *objeto* designa um campo ou uma variável. Neste caso, não passa uma string mas a referência de um campo ou de uma variável (campo ou variável de tipo objeto unicamente).

**Nota:** se aplica o comando a um grupo de objetos, só devolve o valor de alinhamento do último objeto.

O código devolvido corresponde a uma das seguintes constantes, localizadas no tema *Propriedades dos objetos* :

| Constante     | Tipo          | Valor | Comentário                                |
| ------------- | ------------- | ----- | ----------------------------------------- |
| Align center  | Inteiro longo | 3     |                                           |
| Align default | Inteiro longo | 1     |                                           |
| Align left    | Inteiro longo | 2     |                                           |
| Align right   | Inteiro longo | 4     |                                           |
| wk justify    | Inteiro longo | 5     | Disponível para áreas 4D Write Pro apenas |

**Nota:** a constante wk justify está disponivel no tema "*4D Write Pro*"

Os objetos de formulário aos quais se pode aplicar alinhamento são os seguintes:

* Áreas de rolagem
* Combo box
* Textos estáticos
* Áreas de grupos
* Menus/Listas suspensas
* Campos
* Variáveis
* List box
* Colunas de list box
* Cabeçalhos de list box
* Rodapés de list box
* *Referência 4D Write Pro* areas

## Ver também 

[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET HORIZONTAL ALIGNMENT](../commands/object-set-horizontal-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 707 |
| Thread-seguro | no |


