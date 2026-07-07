---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( * ; *objeto* : Text ; *alinhamento* : Integer )<br/>**OBJECT SET HORIZONTAL ALIGNMENT** ( *objeto* : Variable, Field ; *alinhamento* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| alinhamento | Integer | &#8594; | Código de alinhamento |
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

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->O comando **OBJECT SET HORIZONTAL ALIGNMENT** permite determinar o tipo de alinhamento aplicado ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, não passe uma string, mas a referência de um campo ou de variável (campo ou variável de tipo objeto unicamente).

Passe no parâmetro *alinhamento* uma das constantes do tema *Propriedades dos objetos* :

| Constante     | Tipo          | Valor | Comentário                                                        |
| ------------- | ------------- | ----- | ----------------------------------------------------------------- |
| Align center  | Inteiro longo | 3     |                                                                   |
| Align default | Inteiro longo | 1     |                                                                   |
| Align left    | Inteiro longo | 2     |                                                                   |
| Align right   | Inteiro longo | 4     |                                                                   |
| wk justify    | Inteiro longo | 5     | Disponível para áreas 4D Write Pro e áreas de introdução de texto |

**Nota:** a constante wk justify está disponível no tema "*4D Write Pro*".

Os objetos de formulário aos quais pode aplicar este comando são os seguintes:

* Áreas de rolagem
* Combo boxes
* Textos estáticos
* Áreas de grupos
* Menus suspensos/Listas suspensas
* Campos
* Variáveis
* List box
* Colunas de list box
* Cabeçalhos de list box
* Rodapés de list box
* áreas *Referência 4D Write Pro*

## Ver também 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 706 |
| Thread-seguro | no |


