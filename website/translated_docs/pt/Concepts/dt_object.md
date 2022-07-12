---
id: object
title: Objeto
---

Variables, fields or expressions of the Object type can contain various types of data. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:

- Um nome de uma propriedade é sempre um texto, por exemplo "nome". It must follow [specific rules](identifiers.md#object-properties).

- A property value can be of the following type:
    - number (Real, Integer, etc.)
    - texto
    - null
    - booleano
    - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
    - date (date type or ISO date format string)
    - object(1) (objects can be nested on several levels)
    - imagem(2)
    - collection

(1)ORDA objects such as [entities](ORDA/dsMapping.md#entity) or [entity selections](ORDA/dsMapping.md#entity-selection) cannot be stored in **object fields**; however, they are fully supported in **object variables** in memory.

(2)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".

**Atenção:** lembre que os nomes de atributos diferenciam entre maiúsculas e minúsculas.

You manage Object type variables, fields or expressions using the [object notation](dt_object.md#syntax-basics) or the classic commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Cada valor de propriedade acessado através da notação de objeto é considerado uma expressão. You can use such values wherever 4D expressions are expected:

- in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- in the Expression areas of the Debugger and the Runtime explorer,
- in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).

## Inicialização

Os objetos devem ter sido inicializados, por exemplo utilizando o comando `New object`, do contrário ao tentar ler ou modificar suas propriedades se gerará um error de sintaxe.

Exemplo:
```4d
 C_OBJECT($obVar) //creation of an object type 4D variable
 $obVar:=New object //initialization of the object and assignment to the 4D variable
```

### Regular or shared object

Pode criar dois tipos de objetos:

- regular (non-shared) objects, using the `New object` command. These objects can be edited without any specific access control but cannot be shared between processes.
- shared objects, using the `New shared object` command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by `Use... End use` structures. Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).


## Syntax basics

A notação de objetos pode ser utilizada para acessar aos valores das propriedades de objetos através de uma string de tokens.

### Object properties

Com a notação de objetos, pode acessar às propriedades dos objetos de duas maneiras:

- using a "dot" symbol: > object.propertyName

Exemplo:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Exemplos:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
     $vName:=employee[$property]

```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:
```4d
 $vAge:=employee.children[2].age
```
A notação de objetos está disponível em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements). Exemplos:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```
- **4D commands** that return objects. Exemplo:


```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** that return objects. Exemplo:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //size of the collection
```

### Pointers

**Nota preliminar:** dado que os objetos são passados sempre por referência, geralmente não é preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de memória e permitindo modificar o parâmetro e devolver as modificações. Como resultado, não é necessário usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros.

Usar notação de objeto com ponteiros é parecido com usar notação de objeto diretamente com os objetos, exceto que o símbolo "ponto" deve ser omitido.

- Direct access:
> pointerOnObject->propertyName

- Access by name:
> pointerOnObject->["propertyName"]

Exemplo:

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Valor Null

Quando se usar a notação de objeto, o valore **null** se torna compatível com o comando **Null** . Este comando pode ser usado para atribuir ou comparar o valor nulo com as propriedades de objeto ou elementos de coleção, por exemplo

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Para saber mais, veja a descrição do comando `Null`

### Undefined value

A avaliação de uma propriedade de um objeto pode produzir às vezes um valor indefinido. Normalmente ao tentar ler ou atribuir expressões indefinidas, 4D gera erros. Isso não acontece nos casos abaixo:

- Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling `CLEAR VARIABLE` with them:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Reading the **length** property of an undefined collection produces 0:

```4d
     C_COLLECTION($c) //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```4d
     C_OBJECT($o)
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     C_TEXT($1) //parameter type is text
      // $1 contains ""
```

- A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
 - Object, collection, pointer: Null
 - Picture: Empty picture
 - Boolean: False
 - String: ""
 - Número: 0
 - Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
 - Time: 0 (number of ms)
 - Undefined, Null: no change

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Assigning an undefined value to a non existing object property does nothing.

Quando expressões de um certo tipo são esperadas em seu código 4D, pode garantir que tenha o tipo correto mesmo quando são avaliadas como indefinidas, cercando-as com o comando de transformação 4D apropriado: `String`, `Num`, `Date`, `Time`, `Bool`. Estes comandos devolvem um valor vazio de tipo especificado quando a expressão é avaliada como indefinida. Por exemplo:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```


## Exemplos

Usar notação de objeto simplifica o código 4D no manejo dos mesmos. Entretanto note que a notação baseada em comandos continua sendo totalmente compatível.

- Escrita e leitura das propriedades de objetos (este exemplo compara a notação de objetos e anotação de comandos):

```4d
  // Using the object notation
 C_OBJECT($myObj) //declares a 4D variable object
 $myObj:=New object //creates an object and assigns to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 C_OBJECT($myObj2) //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 C_OBJECT($myObj3)
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Criar uma propriedade e atribuir valores, incluindo objetos:

```4d
 C_OBJECT($Emp)
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
- É possível acessar as propriedades como strings usando o operador []

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 C_TEXT($addr)
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
