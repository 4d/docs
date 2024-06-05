---
id: object
title: Object
---

Variáveis, campos ou expressões do tipo Objecto podem conter vários tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princípio clássico dos pares "propriedade/valor". A sintaxe desses objetos é baseada na notação JSON:

- Um nome de uma propriedade é sempre um texto, por exemplo "nome". It must follow [specific rules](identifiers.md#object-properties).

- Um valor de propriedade pode ser do seguinte tipo:
  - number (Real, Integer, etc.)
  - text
  - null
  - boolean
  - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
  - data (tipo de data ou cadeia de formato de data ISO)
  - objeto (os objetos podem estar aninhados em vários níveis)
  - imagem(2)
  - collection

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be stored in **object fields**. An error is returned if you try to do it; however, they are fully supported in **object variables** in memory.

(\*)Quando se expõe como texto no depurador ou se exporta a JSON, as propriedades dos objetos imagem imprimem "[objeto Imagem]".

:::caution

Tenha em atenção que os nomes das propriedades diferenciam entre maiúsculas e minúsculas.

:::

You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Cada valor de propriedade acessado através da notação de objeto é considerado uma expressão. Quando a notação de objeto for ativada em seu banco de dados (ver abaixo), pode usar esses valores sempre que expressões 4D forem esperadas:

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- nas áreas de expressão do depurador e do explorador de Runtime,
- na lista de propriedades do editor de formulários para objectos de formulários: Variável ou Campo de expressão, bem como várias caixas de selecção e expressões de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte).

## Instanciação

Os objetos devem ter sido inicializados, por exemplo utilizando o comando <code>New object</code>, do contrário ao tentar ler ou modificar suas propriedades se gerará um error de sintaxe.

Com a notação de objetos, pode acessar às propriedades dos objetos de duas maneiras:

- usando o comando [`New object`] (https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- usando o operador '{}'.

:::info

Several 4D commands and functions return objects, for example [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) or [`File`](../API/FileClass.md#file). Neste caso, não é necessário instanciar explicitamente o objecto, a linguagem 4D faz isso por você.

:::

### Comando `New object`

O comando [`New object`] (https://doc.4d.com/4dv19R/help/command/en/page1471.html) cria um objeto vazio ou pré-preenchido e retorna sua referência.

Exemplos:

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable
 
 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```

### `{}` operador

The `{}` operator allows you to create an **object literal**. Um literal de objecto é uma lista separada por semicolunas de zero ou mais pares de nomes de propriedades e valores associados de um objecto, entre chaves (`{}`). A sintaxe literal do objecto cria objectos vazios ou preenchidos.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

Exemplos:

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
 		// with properties {"a":"foo","b":42,"c":{},"d":false})

	// same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

Você pode misturar as sintaxes `New object` e literal:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```

### Objeto regular ou compartilhado

Pode criar dois tipos de objetos:

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). Estes objetos podem ser editados sem qualquer controle de acesso específico, mas não podem ser compartilhados entre processos.
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by `Use...End use` structures.
  Para obter mais informações, consulte a seção [Shared objects and collections] (shared.md).

## Propriedades

Você acessa os valores de propriedade do objeto por meio de uma cadeia de tokens. As propriedades do objeto podem ser acessadas de duas maneiras:

- usando um símbolo de "ponto":
  > object.propertyName

Exemplo:

```4d
     employee.name:="Smith"
```

- using a string within square brackets:
  > object["propertyName"]

Exemplos:

```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
	 $vName:=employee[$property]

```

Como o valor de uma propriedade de objeto pode ser um objeto ou uma coleção, é possível usar uma sequência de símbolos para acessar subpropriedades, por exemplo:

```4d
 $vAge:=employee.children[2].age
```

A notação de objetos está disponível em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements).
  Exemplos:

```4d
     $age:=$myObjVar.employee.age //variável
     $addr:=[Emp]data_obj.address //campo
     $city:=$addr.city //propriedade de um objeto
     $pop:=$aObjCountries{2}.population //array objeto
     $val:=$myCollection[3].subvalue //elemento coleção
```

- **4D commands** that return objects.
  Exemplo:

```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** or **Functions** that return objects.
  Exemplo:

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **Coleções**
  Exemplo:

```4d
     myColl.length //tamanho da coleção
```

### Valor Null

When using the objects, the **null** value is supported though the **Null** command. Esse comando pode ser usado para atribuir ou comparar o valor nulo às propriedades do objeto, por exemplo:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Valor não definido

A avaliação de uma propriedade de um objeto pode produzir às vezes um valor indefinido. A atribuição de um valor indefinido a uma propriedade de objeto existente reinicializa ou limpa seu valor. Atribuir um valor indefinido a uma propriedade objecto não existente não faz nada.

For more information, please refer to [Null and Undefined](dt_null_undefined.md)

### Ponteiro

**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de memória e permitindo modificar o parâmetro e devolver as modificações. Como resultado, não é necessário usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros.

Usar notação de objeto com ponteiros é parecido com usar notação de objeto diretamente com os objetos, exceto que o símbolo "ponto" deve ser omitido.

- Acesso direto

> pointerOnObject->propertyName

- Acesso pelo nome:

> pointerOnObject->["propertyName"]

Exemplo:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

## Resources

Objects use _resources_ such a documents, entity locks, and of course, memory. Esses recursos são mantidos enquanto os objetos precisarem. Normalmente, você não precisa se preocupar com eles, 4D libera automaticamente todos os recursos anexados a um objeto quando detecta que o objeto em si não é mais referenciado por qualquer variável ou outro objeto.

For instance, when there is no more references to an entity on which you have set a lock with [`$entity.lock()`](../API/EntityClass.md#lock), 4D will free the memory but also automatically release the associated lock, a call to [`$entity.unlock()`](../API/EntityClass.md#unlock) is useless.

If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to **nullify all its references**. Por exemplo:

```4d

$doc:=WP Import document("large_novel.4wp")
	... // do something with $doc
$doc:=Null  // free resources occupied by $doc
	... // continue execution with more free memory

```

## Exemplos

Usar notação de objeto simplifica o código 4D no manejo dos mesmos. Entretanto note que a notação baseada em comandos continua sendo totalmente compatível.

- Escrita e leitura das propriedades de objetos (este exemplo compara a notação de objetos e anotação de comandos):

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56
 
  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42
 
  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Criar uma propriedade e atribuir valores, incluindo objetos:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- Obter um valor em um subobjeto é bem simples usando a notação de objeto:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- You can access properties as strings using the `[]` operator

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
