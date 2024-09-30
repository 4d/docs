---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *cadeiaJSON* {; *tipo*}{; *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeiaJSON | String | &#x1F852; | Cadeia em JSON a analisar |
| tipo | Inteiro longo | &#x1F852; | Tipo no qual converter os valores |
| * | Operador | &#x1F852; | Adiciona uma posição de linha e offset de cada propriedade se o valor retornado for um objeto |
| Resultado | Mixed, Objeto | &#x1F850; | Valores extraídos da cadeia JSON |

<!-- END REF-->

#### Descrição 

```undefined
__symbols:{//descrição objeto
   myAtt.mySubAtt...:{ //propriedade rota
      line:10, //número da linha da propriedade
      offset:35 //deslocamento de linha da propriedade do começo da linha
      }
   }
```

#### Exemplo 1 

Exemplos de conversões simples:

```4d
 var $r : Real
 $r:=JSON Parse("42.17") //$r = 42,17 (Real)
 
 var $el : Integer
 $el:=JSON Parse("120.13";Is longint) //$el=120
 
 var $t : Text
 $t:=JSON Parse("\"Year 42\"";Is text) // $t="Year 42" (text)
 
 var $o : Object
 $o:=JSON Parse("{\"name\":\"jean\"}")
  // $o = {"name":"john"} (4D object)
 
 var $b : Boolean
 $b:=JSON Parse("{\"manager\":true}";Is Boolean) // $b=true
 
 var $h : Time
 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### Exemplo 2 

Exemplo de conversão de dados de tipo data: 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")
  // $test="1990-12-25T12:00:00Z"
 var $date;$date2;$date3 : Date
 $date:=JSON Parse("\"2008-01-01T12:00:00Z\"";Is date)
  //$date=01/01/08
 $date2:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date2=14/07/17 (Paris time zone)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $date3:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date3=13/07/17
```

#### Exemplo 3 

Se a configuração atual de armazenagem de data for "date type", pode escrever:

```4d
 var $o : Object
 var $json : Text
 var $birthday : Date
 
 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"
 $o:=JSON Parse($json)
 $birthday:=$o.birthday
  //$birthday=16/10/17
```

**Nota:** Para saber mais sobre essa configuração, veja a opção "Use date type instead of ISO date format in objects" em *Página Compatibilidade*. 

#### Exemplo 4 

Este exemplo mostra o uso combinado dos comandos [JSON Stringify](json-stringify.md) e **JSON Parse**:

#code4D\]C\_TEXT($JSONContact)  
C\_OBJECT($Contact;$Contact2)  
$Contact:=New object("name";"Monroe";"firstname";"Alan")  
  
// JSON Stringify: conversão de um objeto em uma string JSON  
$JSONContact:=JSON Stringify($Contact)  
  
// JSON Parse: conversão de string JSON em um novo objeto  
$Contact2:=JSON Parse($JSONContact)\[#/code4D\]

#### Exemplo 5 

Se quiser criar uma coleção 4D de um array JSON:

```4d
 var $myCol : Collection
 $myCol:=JSON Parse("[\"Monday\",10,\"Tuesday\",11,\"Wednesday\",12,false]")
```

#### Exemplo 6 

```undefined
{
    "alpha": 4552,
    "beta": [
        {
            "echo": 45,
            "delta": "text1" 
        },
        {
            "echo": 52,
            "golf": "text2" 
        }
    ]
}
```

#### Ver também 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Tipos de campos e variáveis*  