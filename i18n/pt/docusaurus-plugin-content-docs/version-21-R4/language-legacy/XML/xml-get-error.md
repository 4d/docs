---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *refElemento* : Text ; *textoErro* : Variable {; *linha* : Variable {; *coluna* : Variable}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594; | Referência de elemento XML |
| textoErro | Variable | &#8592; | Texto do erro |
| linha | Variable | &#8592; | Número de linha |
| coluna | Variable | &#8592; | Número de coluna |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Renomear|
|2003|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.XML GET ERROR.Summary-->O comando XML GET ERROR retorna no parâmetro *textoErro* a descrição do erro encontrado durante o processo do elemento XML designado pelo parâmetro *refElement*.<!-- END REF--> A informação retornada é fornecida pela biblioteca Xerces.DLL.  

Os parâmetros opcionais *linha* e *coluna* indicam a localização do erro: eles recuperam respectivamente o número de linha e, nesta linha, a posição do primeiro caráctere da expressão na origem do erro.

## Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

## Ver também 

[DOM Get XML information](../commands/dom-get-xml-information)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 732 |
| Thread-seguro | yes |
| Modificar variáveis | OK |


