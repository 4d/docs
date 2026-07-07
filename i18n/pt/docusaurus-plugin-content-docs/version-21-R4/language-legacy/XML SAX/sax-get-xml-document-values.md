---
id: sax-get-xml-document-values
title: SAX GET XML DOCUMENT VALUES
slug: /commands/sax-get-xml-document-values
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Syntax-->**SAX GET XML DOCUMENT VALUES** ( *documento* : Time ; *codificaçao* : Text ; *versao* : Text ; *autonomo* : Boolean )<!-- END REF-->
<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referência do documento aberto |
| codificaçao | Text | &#8592; | conjunto de caracteres do documento XML |
| versao | Text | &#8592; | Versão XML |
| autonomo | Boolean | &#8592; | True = documento é autônomo; senão False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Summary-->O comando SAX GET XML DOCUMENT VALUES extrai informação básica do cabeçalho XML do documento XML referenciado por *documento*.<!-- END REF-->  

O comando devolve respectivamente o tipo de codificação, a versão e a propiedade “autônoma” do documento nos parâmetros codificacion, version e autonomo. Este comando deve utilizarse no evento do contexto do evento SAX XML Start Document. Para maior informação sobre os eventos SAX, consulte a descrição do comando [SAX Get XML node](../commands/sax-get-xml-node).

## Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

## Ver também 

[SAX Get XML node](../commands/sax-get-xml-node)  
[SAX SET XML DECLARATION](../commands/sax-set-xml-declaration)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 873 |
| Thread-seguro | yes |
| Modificar variáveis | OK, error |


