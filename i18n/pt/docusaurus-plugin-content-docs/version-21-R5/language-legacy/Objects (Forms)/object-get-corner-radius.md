---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( * ; *objeto* : Text ) : Integer<br/>**OBJECT Get corner radius** ( *objeto* : Variable, Field ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia)<br/>Se omitido, objeto é uma variável ou um campo |
| objeto | Text, Variable, Field | &#8594; | Nome de objeto (se especificado *) ou <br/>Campo ou variável (se omitido *) |
| Resultado | Integer | &#8592; | Rádio de esquinas arredondadas (em píxels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R5|Suporte para botões, botões de opção e caixas de seleção com estilo personalizado |
|19 R7|Modificado|
|14 R4|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT Get corner radius.Summary-->O comando **OBJECT Get corner radius** devolve o valor atual do rádio da esquina para o objeto retângulo arredondado cujo nome se passar no parâmetro *objeto*.<!-- END REF--> Este valor pode ter sido definido a nível do formulário utilizando a [**propriedade Corner radius**](../../FormObjects/properties_BackgroundAndBorder.md#corner-radius), ou para o processo atual com o comando [OBJECT SET CORNER RADIUS](../commands/object-set-corner-radius).

O comando OBJECT Get corner radius pode ser utilizado com os seguintes objetos de formulário:

- [retângulos](../../FormObjects/shapes_overview.md#rectangle)
- [entradas](../../FormObjects/input_overview.md) (só projetos 4D)
- [áreas de texto](../../FormObjects/text.md) (só projetos 4D)
- [botões](../../FormObjects/button_overview.md#custom) com estilo personalizado e ["custom" Border Line Style](../../FormObjects/properties_BackgroundAndBorder.md#border-line-style), [botões de opção](../../FormObjects/radio_overview.md#custom) com estilo personalizado e [caixas de seleção](../../FormObjects/checkbox_overview.md#custom) com estilo personalizado (só projetos 4D)

Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em vez de uma cadeia (campo ou variável objeto unicamente).

Este comando devolve o rádio de esquinas arredondadas em píxels.

**Nota:** O comando retorna 0 quando aplicado a um objeto que não suporta a propriedade de corner radius.

## Exemplo 

O seguinte código pode ser adicionado a um método button:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //obtém o valor atual
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //aumenta o rádio
  // O valor máximo será gerenciado automaticamente: quando se alcance, button
  // não fará nada
```

## Ver também 

[OBJECT SET CORNER RADIUS](../commands/object-set-corner-radius)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1324 |
| Thread-seguro | no |


