---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *documento* : Time )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referência do documento aberto |
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

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->O comando SAX CLOSE XML ELEMENT escreve no documento XML referenciado por *documento* as instruções necessárias para fechar o último elemento aberto utilizando o comando [SAX OPEN XML ELEMENT](../commands/sax-open-xml-element).<!-- END REF-->  

O uso deste comando é opcional. Na verdade, 4D adiciona automaticamente, se for necessário, as etiquetas de final dos elementos não fechados explicitamente, no momento do fechamento dos documentos 

## Exemplo 

Se o último elemento aberto for *<Book>*, a instrução abaixo: 

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

... escreverá a seguinte linha no documento: 

```4d
 
```

## Ver também 

[SAX OPEN XML ELEMENT](../commands/sax-open-xml-element)  
[SAX OPEN XML ELEMENT ARRAYS](../commands/sax-open-xml-element-arrays)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 854 |
| Thread-seguro | yes |


