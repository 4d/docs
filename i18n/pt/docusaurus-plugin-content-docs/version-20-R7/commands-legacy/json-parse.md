---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *cadeiaJSON* {; *tipo*}{; *} ) : any<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cadeiaJSON | Text | &#8594;  | Cadeia em JSON a analisar |
| tipo | Integer | &#8594;  | Tipo no qual converter os valores |
| * | Operador | &#8594;  | Adiciona uma posição de linha e offset de cada propriedade se o valor retornado for um objeto |
| Resultado | any, Object | &#8592; | Valores extraídos da cadeia JSON |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.JSON Parse.Summary-->O comando **JSON Parse** analisa o conteúdo de uma cadeia com formato JSON e extraem os valores que podem armazenar em um campo ou variável 4D.<!-- END REF--> Este comando não realiza os dados JSON, realiza a ação inversa do comando [JSON Stringify](json-stringify.md).  
  
Em *cadeiaJSON*, passe a cadeia com formato JSON cujo conteúdo deseja analisar. Esta cadeia deve ter o formato correto, caso contrário é gerado um erro de análise.  
  
**Nota**: Se utilizar ponteiros, deve chamar ao comando [JSON Stringify](json-stringify.md) antes de chamar a **JSON Parse**.  
  
Por padrão, se omitir o parâmetro *tipo*, 4D tentará converter o valor obtido no tipo da variável ou do campo que se utiliza para armazenar os resultados (se foi definido). Caso contrário, 4D tenta deduzir seu tipo. Também pode forçar a interpretação do tipo passando o parâmetro *tipo*: passe uma das seguintes constantes, disponíveis no tema *Tipos de campos e variáveis*:

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is date       | Inteiro longo | 4     |
| Is longint    | Inteiro longo | 9     |
| Is object     | Inteiro longo | 38    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Is time       | Inteiro longo | 11    |
  
  
**Notas**:

* Os valores de tipo Real devem ser incluídos na classificação ± 10.421e±10
* Nos valores de tipo de texto, todos os caracteres especiais devem ser evadidos, incluindo as aspas (ver exemplos)
* Como padrão quando usa a constante Is date, o comando considera que uma string de dados contém uma hora local e não GMT. Pode moficar essa configuração usando o seletor Dates inside objects ou o comando \[#cmd id="642"/\].
* A partir de 4D v16 R6, se a configuração de armazenamento de dados atual for "date type", strings de data JSOn em formato "AAAA-MM-DD" são retornadas automaticamente como valores de data pelo comando **JSON Parse**. Para saber mais sobre essa configuração, vjea a opção "Use date type instead of ISO date format in objects" em *Página Compatibilidade*..
* Valores tipo hora podem ser retornados de números em strings. Como padrão 4D considera o o valor como número de segundos.

Se passar o parâmetro opcional \* e se o parâmetro jsonString representar um objeto, o objeto retornado contém uma propriedade adicional chamada \_\_symbols que oferece rota, posição de linha e o deslocamento de linha de cada propriedade e sub-propriedade do objeto. Essa informação pode ser útil para debugar. A estrtura das propriedades \_\_symbols é:  
  
```json
__symbols:{//descrição objeto
   myAtt.mySubAtt...:{ //propriedade rota
      line:10, //número da linha da propriedade
      offset:35 //deslocamento de linha da propriedade do começo da linha
      }
   }
```
  
  
Nota: O parâmetro \* é ignorado se o valor retornado não for do tipo objeto.

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

Se quiser analisar a string abaixo e obter a posição de linha e deslocamento de linha de cada propriedade:

```json
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

Pode escrever:

```4d
 var $obInfo : Object
 $obInfo=JSON Parse("json_string";Is object;*) //* para obter a propriedade  __symbols
  //no objeto  $obInfo retornado
```

O objeto *$obInfo* contém:

```json
{alpha:4552,
beta:[{echo:45,delta:text1},{echo:52,golf:text2}],
__symbols:{alpha:{line:2,offset:4},
beta:{line:3,offset:4},
beta[0].echo:{line:5,offset:12},
beta[0].delta:{line:6,offset:12},
beta[1].echo:{line:9,offset:12},
beta[1].golf:{line:10,offset:12}}}
```

#### Ver também 

[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
*Tipos de campos e variáveis*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1218 |
| Thread-seguro | &check; |


