---
id: sax-get-xml-processing-instruction
title: SAX GET XML PROCESSING INSTRUCTION
slug: /commands/sax-get-xml-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Syntax-->**SAX GET XML PROCESSING INSTRUCTION** ( *documento* : Time ; *nome* : Text ; *valor* : Text )<!-- END REF-->
<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referência do documento aberto |
| nome | Text | &#8592; | Instruction name |
| valor | Text | &#8592; | Instruction value |
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

<!--REF #_command_.SAX GET XML PROCESSING INSTRUCTION.Summary-->O comando SAX GET XML PROCESSING INSTRUCTION devolve o *nome* e o *valor* da instrução de processo XML analizada no documento XML referenciada por documento.<!-- END REF--> Este comando deve ser chamado com o evento XML Processing Instruction. Para maior informação sobre eventos SAX, consulte a descrição do comando [SAX Get XML node](../commands/sax-get-xml-node).  

## Exemplo 

No código XML abaixo: 

```XML
<?xml versao="1.0" encoding="UTF-8"?>
<!-- Edited with XML Spy v3.0.7 NT (http://www.xmlspy.com) by Myself (4D SA)-->
<?PI TextProcess?>
<!DOCTYPE RootElement SYSTEM "ParseTest.dtd">
```

A instrução abaixo devolverá “PI” em *vNom* e “TextProcess” em *vValor*: 

```4d
 SAX GET XML PROCESSING INSTRUCTION($DocRef;vNom;vValor)
```

## Ver também 

[SAX ADD PROCESSING INSTRUCTION](../commands/sax-add-processing-instruction)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 875 |
| Thread-seguro | yes |


