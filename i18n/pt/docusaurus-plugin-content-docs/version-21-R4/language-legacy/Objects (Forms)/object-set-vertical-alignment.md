---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( * ; *objeto* : Text ; *alinhamento* : Integer )<br/>**OBJECT SET VERTICAL ALIGNMENT** ( *objeto* : Variable, Field ; *alinhamento* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| alinhamento | Integer | &#8594; | Código de alinhamento |
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

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->O comando **OBJECT SET VERTICAL ALIGNMENT** modifica por programação o tipo de alinhamento vertical aplicada ao objeto designado pelos parâmetros *objeto* e *\**.<!-- END REF-->  
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
Em *alinhamento*, pode passar uma das seguintes constantes, do tema *Propriedades dos objetos* :  
  
| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Align bottom  | Inteiro longo | 4     |
| Align center  | Inteiro longo | 3     |
| Align default | Inteiro longo | 1     |
| Align top     | Inteiro longo | 2     |
  
  
A alienação vertical pode aplicar-se aos seguintes tipos de objetos de formulário:
* list boxes
* colunas de list box,
* cabeçalhos e rodapés de list box.

## Ver também 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET HORIZONTAL ALIGNMENT](../commands/object-set-horizontal-alignment)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1187 |
| Thread-seguro | no |


