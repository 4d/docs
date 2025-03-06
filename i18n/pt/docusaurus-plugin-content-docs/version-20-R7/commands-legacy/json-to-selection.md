---
id: json-to-selection
title: JSON TO SELECTION
slug: /commands/json-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *aTabela* ; *objetoJson* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Ponteiro a tabela 4D |
| objetoJson | Text | &#8594;  | Cadeia em JSON |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.JSON TO SELECTION.Summary-->O comando **JSON TO SELECTION** copia o conteúdo de um objeto JSON na seleção de registros de *aTabela* .<!-- END REF-->  
  
O parâmetro jsonArray é um texto representando um array de objetos formatado em JSON e contendo um ou mais elementos. A sintaxe esperada é do tipo:

```json
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

Se existir uma seleção para *aTabela* no momento da chamada, os elementos do objeto JSON se copiam nos registros em função da ordem do objeto e da ordem dos registros. Se o número de elementos definidos no objeto JSON é maior que o número de registros da seleção atual, são criados novos registros. Os registros, sejam novos ou existentes, são salvos automaticamente.

**Nota:** Este comando suporta campos tipo Object: dados JSON são convertidos automaticamente.  
  
**Advertência**: Como **JSON TO SELECTION** substitui a informação presente nos registros existentes, este comando se deve utilizar com prudência.  
  
Se um registro está bloqueado por outro proceso durante a execução do comando, não se modifica. Todos os registros bloqueados se localizam no *Conjunto de Sistema LockedSet*. Depois da execução de **JSON TO SELECTION**, pode comprovar se o conjunto *LockedSet* contém os registros que estavam bloqueados.

#### Exemplo 

Uso do comando **JSON TO SELECTION** para adicionar os registros a tabela \[Company\]: 

```4d
 var $Object1;$Object2;$Object3;$Object4 : Object
 var $ObjectString : Text
 ARRAY OBJECT($arrayObject;0)
 
 OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")
 APPEND TO ARRAY($arrayObject;$Object1)
 
 OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")
 APPEND TO ARRAY($arrayObject;$Object2)
 
 OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")
 APPEND TO ARRAY($arrayObject;$Object3)
 
 OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")
 APPEND TO ARRAY($arrayObject;$Object4)
 
 $ObjectString:=JSON Stringify array($arrayObject)
 
  // $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D
  // SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",
  //"City":"London","Company Name":"IBM"},{"ID":"203","City":"New
  //York","Company Name":"MICROSOFT"}]"
 
 JSON TO SELECTION([Company];$ObjectString)
  // Você cria 4 registros na tabela [Company], enche os campos ID,
  //Nomes de empresa e cidade
```

#### Ver também 

[Selection to JSON](selection-to-json.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1235 |
| Thread-seguro | &check; |


