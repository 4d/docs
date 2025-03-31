---
id: ob-set
title: OB SET
slug: /commands/ob-set
displayed_sidebar: docs
---

<!--REF #_command_.OB SET.Syntax-->**OB SET** ( *objeto* ; *propriedade* ; *valor* {; *propriedade2* ; *valor2* ; ... ; *propriedadeN* ; *valorN*} )<!-- END REF-->
<!--REF #_command_.OB SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object, Object | &#8594;  | Objeto estruturado |
| propriedade | Text | &#8594;  | Nome da propriedade a configurar |
| valor | Expression | &#8594;  | Novo valor da propriedade |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OB SET.Summary-->O comando **OB SET** cria ou modifica um ou mais pares de *propriedade*/*valor* no objeto de linguagem designado pelo parâmetro *objeto*.<!-- END REF-->deve ter sido definido usando o comando *C\_OBJECT* ou designar um campo objeto 4D.

  
No parâmetro *propriedade*, passe a etiqueta da propriedade a criar ou modificar. Se a propriedade já existe em *objeto*, seu valor se atualiza. Se não existe, é criado.

Tenha em conta, que o parâmetro *propriedade* é sensível as maiúsculas e minúsculas.

  
No parâmetro *valor*, passe o valor que deseja definir para a propriedade. Se admitem vários tipos de dados. Tenha em conta que:

* Se passar um ponteiro, é mantido como ele é, se avalia utilizando o comando [JSON Stringify](json-stringify.md)
* Se passar uma data, será armazenada como tipo data ou como um texto em formato ISO dependendo da sua configuração atual de banco de dados. Para saber mais, veja a opção "Use date type instead of ISO date format in objects" em *Página Compatibilidade*.
* Se passar uma hora, se armazena em forma de um número de milissegundos (Real) em *objeto*
* Se passar um objeto de linguagem, o comando utiliza a referência do objeto e não uma cópia. Qualquer modificação aplicada ao objeto ou coleção será reportada para todas as referências.
* a partir de 4D v16 R4, pode passar uma imagem de todos os tipos suportados (ver *Formatos Nativos Compatíveis* ).

#### Exemplo 1 

Criação de um objeto e adição de uma propriedade de tipo texto:

```4d
 var $Object : Object
 OB SET($Object ;"FirstName";"John";"LastName";"Smith")
  // $Object = {"FirstName":"John","LastName":"Smith"}
```

#### Exemplo 2 

Criação de um objeto e adição de uma propriedade de tipo booleano:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"smith";"age";42;"client";True)
  // $Object = {"LastName":"smith","age":42,"client":true}
```

#### Exemplo 3 

Modificação de uma propriedade:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"FirstName";"Paul")
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
```

#### Exemplo 4 

Adição de uma propriedade:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"department";"Accounting")
  // $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}
```

#### Exemplo 5 

Renomeando uma propriedade:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"James";"age";35)
  // $Object = {"LastName":"James","age":35}
 OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))
  // $Object = {"FirstName":""James","nom":"James","age":35}
 OB REMOVE($Object ;"LastName")
  // $Object = {"FirstName":""James","age":35}
```

#### Exemplo 6 

Usando um ponteiro:

```4d
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
 var $LastName : Text
 OB SET($Object ;"LastName";->$LastName)
  // $Object = {"FirstName":"Paul","LastName":"->$LastName"}
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":""}
 $LastName:="Wesson"
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":"Wesson"}
```

#### Exemplo 7 

Usando um objeto:

```4d
 var $ref_smith : Object
 OB SET($ref_smith ;"name";"Smith")
 var $ref_emp : Object
 OB SET($ref_emp ;"employee";$ref_smith)
 $Json_string :=JSON Stringify($ref_emp)
  // $ref_emp = {"employee":{"name":"Smith"}} (object)
  // $Json_string = "{"employee":{"name":"Smith"}}" (string)
```

Também pode mudar um valor sobre a marcha:

```4d
 OB SET($ref_smith ;"name";"Smyth")
  // $ref_smith = {"employee":{"name":"Smyth"}}
 $string:=JSON Stringify($ref_emp)
  // $string = "{"employee":{"name":"Smyth"}}"
```

#### Exemplo 8 

Se você tiver definido o campo \[Rect\]Desc como um campo objeto, pode escrever:

```4d
 CREATE RECORD([Rect])
 [Rect]Name:="Blue square"
 OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")
 SAVE RECORD([Rect])
```

#### Exemplo 9 

Se quiser exportar dados em JSON que contém uma data 4D convertida. Note que a conversão ocorre quando a data se guarda no objeto, deve chamar ao comando [SET DATABASE PARAMETER](set-database-parameter.md) antes de chamar a [OB SET](ob-set.md): 

```4d
 var $o : Object
 $vDateSetting:=Get database parameter(Dates inside objects) //salva a configuração atual
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 OB SET($o ;"myDate";Current date) // JSON conversion
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)
```

#### Exemplo 10 

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

#### Exemplo 11 

Se quiser definir uma coleção como um valor propriedade. Pode escrever:

```4d
 var $person : Object
 var $myCol : Collection
 
 $person:=OB New
 $myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)
 OB SET($person;"Name";"Jones";"Children";$myCol)
```

#### Exemplo 12 

Se quiser armazenar uma imagem em um campo objeto. Pode escrever:

```4d
 var $vPict : Picture
 READ PICTURE FILE("photo.jpg";$vPict)
 If(OK=1)
    OB SET([Emp]Children;"photo";$vPict)
 End if
```

#### Ver também 

[OB Get](ob-get.md)  
[OB REMOVE](ob-remove.md)  
[OB SET ARRAY](ob-set-array.md)  
[OB SET NULL](ob-set-null.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1220 |
| Thread-seguro | &check; |


