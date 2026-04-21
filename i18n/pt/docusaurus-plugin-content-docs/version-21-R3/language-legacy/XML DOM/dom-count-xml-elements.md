---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *refElemento* : Text ; *nomeElemento* : Text ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594; | Referência de elemento XML |
| nomeElemento | Text | &#8594; | Nome do elemento XML a ser contado |
| Resultado | Integer | &#8592; | Número de elementos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R4|Modificado|
|2004|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.DOM Count XML elements.Summary-->O comando DOM Count XML elements devolve o número de elementos “filho” dependentes do elemento pai *refElemento* e chamado *nomeElemento*.<!-- END REF-->como padrão, **DOM Count XML elements** diferencia maiúsculas de minúsculas relativas ao parâmetro *nomeElemento* (regras xml). Pode controlar se o comando diferencia maiúsculas de minúsculas usando o seletor XML DOM case sensitivity ou o comando [XML SET OPTIONS](../commands/xml-set-options).

## Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

## Ver também 

[DOM Get XML element](../commands/dom-get-xml-element)  
[XML SET OPTIONS](../commands/xml-set-options)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 726 |
| Thread-seguro | yes |
| Modificar variáveis | OK |


