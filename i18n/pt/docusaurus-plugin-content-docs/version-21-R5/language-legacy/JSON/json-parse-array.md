---
id: json-parse-array
title: JSON PARSE ARRAY
slug: /commands/json-parse-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON PARSE ARRAY.Syntax-->**JSON PARSE ARRAY** ( *cadeiaJSON* : Text ; *arrayObjeto* : Array )<!-- END REF-->
<!--REF #_command_.JSON PARSE ARRAY.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeiaJSON | Text | &#8594; | Cadeia JSON a analisar |
| arrayObjeto | Array | &#8592; | Array que contém o resultado da análise da cadeia JSON |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R4|Modificado|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.JSON PARSE ARRAY.Summary-->O comando **JSON PARSE ARRAY** analisa o conteúdo de uma cadeia com formato JSON e localiza os dados extraídos no array *arrayObjeto*.<!-- END REF--> Este comando não realiza os dados JSON, realiza a ação inversa do comando [JSON Stringify array](../commands/json-stringify-array).  
  
Em *cadeiaJSON*, passe a cadeia com formato JSON cujo conteúdo deseja analisar. Esta cadeia deve ter o formato correto, caso contrário é gerado um erro de análise.  
  
Em *arrayObjeto*, passe o objeto que deve receber os resultados da análise.

**Note:** A partir de 4D v16 R4, **JSON PARSE ARRAY** pode geralmente ser substituído por uma chamada a [JSON Parse](../commands/json-parse) que retorna uma **coleção**. Coleções são baseadas em arrays JSON permite armazenar dados de diversos tipos, o que oferece mais flexibilidade que arrays. 

## Exemplo 

Neste exemplo, os dados dos campos dos registros de uma tabela se extraem e localizam nos arrays de objetos:

```4d
 var $ref : Object
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 var v_String : Text
 
 OB SET($ref;"name";->[Company]Company Name)
 OB SET($ref;"city";->[Company]City)
 
 While(Not(End selection([Company])))
    $ref_company:=OB Copy($ref;True)
    APPEND TO ARRAY($sel;$ref_company)
  // $sel{1}={"name":"4D SAS","city":"Clichy"}
  // $sel{2}={"name":"MyComp","city":"Lyon"}
  // ...
    NEXT RECORD([Company])
 End while
 
 v_String:=JSON Stringify array($sel)
  // v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]
 JSON PARSE ARRAY(v_String;$sel2)
  // $sel2{1}={"name":"4D SAS","city":"Clichy"}
  // $sel2{2}={"name":"MyComp","city":"Lyon"}
  //...
```

## Ver também 

[JSON Parse](../commands/json-parse)  
[JSON Stringify array](../commands/json-stringify-array)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1219 |
| Thread-seguro | yes |


