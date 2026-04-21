---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *refElemento* : Text )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594; | Elemento de referência raiz XML |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.DOM CLOSE XML.Summary-->O comando DOM CLOSE XML libera o espaço em memória ocupado pelo objeto XML determinado por *refElemento*.<!-- END REF--> 

Se *refElemento* não for um objeto XML raiz, um erro é gerado. 

## Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

## Ver também 

[DOM Parse XML source](../commands/dom-parse-xml-source)  
[DOM Parse XML variable](../commands/dom-parse-xml-variable)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 722 |
| Thread-seguro | yes |
| Modificar variáveis | OK, error |


