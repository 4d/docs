---
id: json-stringify-array
title: JSON Stringify array
slug: /commands/json-stringify-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON Stringify array.Syntax-->**JSON Stringify array** ( *array* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.JSON Stringify array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Text array, Real array, Boolean array, Pointer array, Object array | &#8594;  | Array cujo conteúdo deve ser serializado |
| * | Operador | &#8594;  | Melhorar o formato |
| Resultado | Text | &#8592; | Cadeia que contém o array JSON serializado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.JSON Stringify array.Summary-->O comando **JSON Stringify array** converte o array *array* 4D em um array JSON serializado.<!-- END REF--> Este comando realiza a ação inversa do comando [JSON PARSE ARRAY](json-parse-array.md).  
  
Em *array*, passe um array 4D com os dados a serializar. Este array pode ser de tipo de texto, real, booleano, ponteiro ou objeto.

**Nota:** se passar uma variável escalar ou um campo em *array*, o comando devolverá simplesmente o valor de parâmetro entre "\[ \]". 

Pode passar o parâmetro opcional *\** para utilizar os caracteres de formato na cadeia resultante. Esta opção melhora a apresentação dos dados JSON quando se mostram em uma página web (*pretty formatting*).

#### Exemplo 1 

Conversão de um array texto:

```4d
 var $jsonString : Text
 ARRAY TEXT($ArrayFirstname;2)
 $ArrayFirstname{1}:="John"
 $ArrayFirstname{2}:="Jim"
 $jsonString :=JSON Stringify array($ArrayFirstname)
 
  // $jsonString = "["John","Jim"]"
```

#### Exemplo 2 

Conversão de um array texto que contém números:

```4d
 ARRAY TEXT($phoneNumbers;0)
 APPEND TO ARRAY($phoneNumbers ;"555-0100")
 APPEND TO ARRAY($phoneNumbers ;"555-0120")
 $string :=JSON Stringify array($phoneNumbers)
  // $string = "["555-0100","555-0120"]"
```

#### Exemplo 3 

Conversão de um array objeto:

```4d
 var $ref_john : Object
 var $ref_jim : Object
 ARRAY OBJECT($myArray;0)
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray ;$ref_john)
 APPEND TO ARRAY($myArray ;$ref_jim)
 $JsonString :=JSON Stringify array($myArray)
  // $JsonString = "[{"name":"John","age":35},{"name":"Jim","age":40}]"
 
  // Se deseja visualizar o resultado em uma página web,
  // passe o parâmetro opcional *:
 $JsonStringPretty :=JSON Stringify array($myArray;*)
```

![](../assets/en/commands/pict1205072.fr.png)

#### Exemplo 4 

Conversão de uma seleção 4D em um array objeto:

```4d
 var $jsonObject : Object
 var $jsonString : Text
 
 QUERY([Company];[Company]Company Name="a@")
 OB SET($jsonObject;"company name";->[Company]Company Name)
 OB SET($jsonObject;"city";->[Company]City)
 OB SET($jsonObject;"date";[Company]Date_input)
 OB SET($jsonObject;"time";[Company]Time_input)
 ARRAY OBJECT($arraySel;0)
 
 While(Not(End selection([Company])))
    $ref_value:=OB Copy($jsonObject;True)
  // Se não são copiados, os valores serão cadeias vazias
    APPEND TO ARRAY($arraySel;$ref_value)
  // Cada elemento contém os valores selecionados, por exemplo:
  // $arraySel{1} = // {"company name":"APPLE","time":43200000,"city":
  // "Paris","date":"2012-08-02T00:00:00Z"}
    NEXT RECORD([Company])
 End while
 
 $jsonString:=JSON Stringify array($arraySel)
  // $jsonString = "[{"company name":"APPLE","time":43200000,"city":
  //"Paris","date":"2012-08-02T00:00:00Z"},{"company name":
  //"ALMANZA",...}]"
```

#### Ver também 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  