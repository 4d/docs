---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( * ; *objeto* : Text ; *corPrimeiroPlano* : Text, Integer {; *corFundo* : Text, Integer {; *corFundoAlternativo* : Text, Integer {; *corBorda* : Text, Integer}}} )<br/>**OBJECT GET RGB COLORS** ( *objeto* : Variable, Field ; *corPrimeiroPlano* : Text, Integer {; *corFundo* : Text, Integer {; *corFundoAlternativo* : Text, Integer {; *corBorda* : Text, Integer}}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificar, objeto é um nome de objeto (string)<br/>Se omitido, objeto é uma variável ou campo. |
| objeto | Text, Variable, Field | &#8594; | Nome do objeto (se * é especificado) ou <br/>Variável ou Campo (se * é omitido) |
| corPrimeiroPlano | Text, Integer | &#8592; | Valor da cor RGB do primeiro plano |
| corFundo | Text, Integer | &#8592; | Valor da cor do RGB para segundo plano (fundo) |
| corFundoAlternativo | Text, Integer | &#8592; | Valor da cor RGB do fundo alternativo |
| corBorda | Text, Integer | &#8592; | Valor da cor RGB da borda |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R5|Suporte ao parâmetro *corBorda*|
|17 R6|Modificado|
|12|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->O comando **OBJECT GET RGB COLORS** devolve as cores de primeiro plano, fundo e, opcionalmente, fundo alternativo e borda do objeto ou grupo de objetos designados por *objeto*.<!-- END REF-->  
  
Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de um string.   
  
Quando o comando é aplicado a um objeto de tipo List box, a cor de fundo alternativo das filas podem ser devolvidos no parâmetro *corFundoAlternativo*. Neste caso, o valor de *corFundo* é utilizado para o fundo das linhas ímpares.   

Quando o comando é aplicado a um objeto que suporta a [propriedade `borderColor`](../../FormObjects/properties_BackgroundAndBorder.md#border-color), a cor da borda pode ser devolvida no parâmetro *corBorda*.

:::note

O parâmetro *corBorda* não está disponível em bases de dados binárias.

:::

Os valores de cores RGB devolvidos nos parâmetros *corPrimeiroPlano*, *corFundo*, *corFundoAlternativo* e *corBorda* dependem do tipo de parâmetro: 

* se passar um parâmetro de tipo texto, a cor é devolvida em formato CSS com a sintaxe "#rrggbb" (por exemplo: "#0000FF")
* Se passar um parâmetro de tipo inteiro, a cor pode ser um inteiro longo de 4 bytes de formato (0x00RRGGBB) ou valores negativos correspondentes às cores de "sistema".

Para obter mais informação sobre o formato dos parâmetros *corPrimeiroPlano*, *corFundo*, *corFundoAlternativo* e *corBorda*, consulte a descrição do comando [OBJECT SET RGB COLORS](../commands/object-set-rgb-colors).

## Ver também 

[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1074 |
| Thread-seguro | no |


