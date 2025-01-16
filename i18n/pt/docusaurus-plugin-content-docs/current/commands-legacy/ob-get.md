---
id: ob-get
title: OB Get
slug: /commands/ob-get
displayed_sidebar: docs
---

<!--REF #_command_.OB Get.Syntax-->**OB Get** ( *objeto* ; *propriedade* {; *tipo*} ) : any<!-- END REF-->
<!--REF #_command_.OB Get.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade a ler |
| tipo | Integer | &#8594;  | Tipo ao qual converter o valor |
| Resultado | any | &#8592; | Valor atual de propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB Get.Summary-->O comando **OB Get** devolve o valor atual da *propriedade* do *objeto*, convertido opcionalmente no *tipo* definido.<!-- END REF-->deve ter sido definido com o comando [C\_OBJECT](c-object.md) ou designar um campo objeto 4D..

**Nota:** este comando suporta definições de atributo em *objetos* 4D Write Pro, como o comando *WP GET ATTRIBUTES* (ver o exemplo 9). .

No parâmetro *propriedade*, passe a etiqueta da propriedade a ler. Tenha em conta que o parâmetro *propriedade* é sensível a maiúsculas e minúsculas

Por padrão, 4D devolve o valor da propriedade em seu tipo original. Pode "forçar" a escritura do valor devolvido utilizando o parâmetro opcional *tipo*. Para isso, em *tipo* passe uma das seguintes constantes que se encontram no tema *Tipos de campos e variáveis*:

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is Boolean    | Inteiro longo | 6     |
| Is collection | Inteiro longo | 42    |
| Is date       | Inteiro longo | 4     |
| Is longint    | Inteiro longo | 9     |
| Is null       | Inteiro longo | 255   |
| Is object     | Inteiro longo | 38    |
| Is picture    | Inteiro longo | 3     |
| Is pointer    | Inteiro longo | 23    |
| Is real       | Inteiro longo | 1     |
| Is text       | Inteiro longo | 2     |
| Is time       | Inteiro longo | 11    |

O comando devolve o valor da *propriedade*. Vários tipos de dados estão suportados. Leve em conta que:

* Um ponteiro se devolve tal qual, pode ser avaliado utilizando o comando [JSON Stringify](json-stringify.md),
* dependendo das configurações de data de bancos de dados em atributos de objeto são armazenadas ou com tipo data ou tipo texto (a partir de 4D v16 R6). Para saber mais, veja a opção "Use date type instead of ISO date format in objects" em *Página Compatibilidade*. Para que OB Get interprete corretamente uma data armazenada como texto, é necessário usar a constante Is date (ver exemplo 5).
* Em valores reais, o separador decimal é sempre um ponto "."
* As horas se devolvem como um número. Horas são armazenadas em segundos como padrão em objetos (veja a nota de compatibilidade abaixo). Use a constanteIs time. para obter um valor de tempo formatado 4D

**Nota de Compatibilidade:** 

* Em versões anteriores a v17, tempos eram armazenados em milissegundos dentro de objetos. Por motivos de compatibilidade, esse comportamento anterior pode ser restaurado usando o seletor Times inside objects do comando [SET DATABASE PARAMETER](set-database-parameter.md).Qualquer que seja a configuração, o resultado será corrigido quando a constante Is time for passada.
* (4D Write Pro) Em versões anteriores a v16 R6, quando *propriedade* definia um atributo de imagem 4D Write Pro (como wk image) um valor de texto contendo um dado URI era sempre retornado. A partir de 4D v16 R6, os atributos de imagem 4D Write Pro são sempre retornados como valores de imagem. Deve usar uma *propriedade* especifica como wk image url para obter o dado URI.
* Em versões anteriores a v16 R4, quando *propriedade* continha um valor null e se o parâmetro *tipo* não fosse usado, 4D retornava uma string vazia. Em 4D v16 R4, a constante Is null é retornada nesse caso. Para preservar a compatiblidade, esta mudança é realizada só se a opção "Utilizar a notação objetos para acessar às propriedades de objetos (exige Unicode)" for ativada no banco de dados (ver o parágrafo *Página Compatibilidade*).

#### Exemplo 1 

Recuperação de um valor de tipo texto:

```4d
 var $ref : Object
 var $FirstName : Text
 OB SET($ref;"FirstName";"Harry")
 $FirstName:=OB Get($ref;"FirstName") // $FirstName = "Harry" (text)
```

#### Exemplo 2 

Recuperação de um valor real convertido em inteiro longo:

```4d
 OB SET($ref ;"age";42)
 $age:=OB Get($ref ;"age") // $age é um número real (default)
 $age:=OB Get($ref ;"age";Is longint) // $age é um inteiro longo
```

#### Exemplo 3 

Recuperação dos valores de um objeto:

```4d
 var $ref1;$ref2 : Object
 OB SET($ref1;"LastName";"Smith") // $ref1={"LastName":"Smith"}
 OB SET($ref2;"son";$ref1) // $ref2={"son":{"LastName":"Smith"}}
 $son:=OB Get($ref2;"son") // $son={"LastName":"john"} (object)
 $sonsName:=OB Get($son ;"name") // $sonsName="john" (text)
```

#### Exemplo 4 

Modificando a idade de um empregado duas vezes:

```4d
 var $ref_john;$ref_jim : Object
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray;$ref_john) // criamos um objeto array
 APPEND TO ARRAY($myArray;$ref_jim)
  // mudamos a idade de John de 35 a 25
 OB SET($myArray{1};"age";25)
  // mudamos a idade de "John" no array
 For($i;1;Size of array($myArray))
    If(OB Get($myArray{$i};"name")="John")
       OB SET($myArray{$i};"age";36) // em troca de 25
  // $ref_john={"name":"John","age":36}
    End if
 End for
```

#### Exemplo 5 

Quando recuperando uma data, o valor resultante depende das configurações atuais de data no banco de dados.

* Se a opção "Use date type instead of ISO date format in objects" não estiver marcada:

```4d
 var $object : Object
 var $birthday : Date
 var $birthdayString : Text
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday";Is date) //30/01/10
 $birthdayString:=OB Get($object;"Birthday") //"2010-01-29T23:00:00.000Z" (fuso horário de Paris)
```

* Se a opção "Use date type instead of ISO date format in objects" estiver marcada:

```4d
 var $object : Object
 var $birthday : Date
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday") //30/01/10, não precisa de Is date
```

**Nota:** Para saber mais sobre essa configuração, veja *Página Compatibilidade*.

#### Exemplo 6 

Utilização de objetos aninhados:

```4d
 var $ref1;$child;$children : Object
 var $childName : Text
 OB SET($ref1;"firstname";"John";"lastname";"Monroe")
  //{"firstname":"john","lastname";"Monroe"}
 OB SET($children;"children";$ref1)
 $child:=OB Get($children;"children")
  //$son = {"firstname":"John","lastname":"Monroe"} (object)
 $childName:=OB Get($child;"lastname")
  //$childName = "Monroe" (text)
  //o
 $childName:=OB Get(OB Get($children;"children");"lastname")
  // $childName = "Monroe" (text)
```

#### Exemplo 7 

Recuperação em 4D de uma hora armazenada em um objeto:

```4d
 var $obj_o : Object
 var $set_h;$get_h : Time
 
 $set_h:=?01:00:00?+1
 OB SET($obj_o;"myHour";$set_h)
  // $obj_o = {"myHour":3601}
  // A hora é armazenada em segundos
 $get_h:=OB Get($obj_o;"myHour";Is time)
  // $get_h = ?01:00:01?
```

#### Exemplo 8 

Exemplos de manipulação de campos objeto 4D:

```4d
  // Definir um valor
 OB SET([People]Identity_OB;"First name";$firstName)
 OB SET([People]Identity_OB;"Last name";$lastName)
 
  // Obter um valor
 $firstName:=OB Get([People]Identity_OB;"First name")
 $lastName:=OB Get([People]Identity_OB;"Last name")
```

#### Exemplo 9 

Em um método formulário, pode escrever:

```4d
 If(FORM Event=On Validate)
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

Também pode ler os atributos personalizados dos documentos:

```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")
```

#### Exemplo 10 

Se quiser conhecer o tamanho de uma imagem armazenada em um atributo objeto:

```4d
 var $vSize : Integer
 $vSize:=Picture size(OB Get($object;"photo";Is picture))
```

**Nota:** se atribuir o resultado do comando a uma variável imagem, a constante Is picture não é necessária. Exemplo:  

```4d
 var $vPict : Picture
 $vPict:=OB Get($object;"photo") //"is picture" é inútil neste caso
```

#### Ver também 

[OB Copy](ob-copy.md)  
[OB SET](ob-set.md)  
*Tipos de campos e variáveis*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1224 |
| Thread-seguro | &check; |


