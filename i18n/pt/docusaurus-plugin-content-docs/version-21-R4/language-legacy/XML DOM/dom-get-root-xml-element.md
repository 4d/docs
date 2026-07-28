---
id: dom-get-root-xml-element
title: DOM Get root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get root XML element.Syntax-->**DOM Get root XML element** ( *refElemento* : Text ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get root XML element.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594; | Referência de elemento XML |
| Resultado | Text | &#8592; | Referência do elemento raiz ou "" em caso de erro |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 3|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.DOM Get root XML element.Summary-->O comando DOM Get root XML element devolve uma referência ao elemento raiz do documento ao qual pertence o elemento XML que for passado no parâmetro *refElemento*.<!-- END REF--> Esta referência pode ser utilizada com os outros comandos de análises XML.

## Ver também 

[DOM Get parent XML element](../commands/dom-get-parent-xml-element)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1053 |
| Thread-seguro | yes |
| Modificar variáveis | OK, error |


