---
id: object
title: Objetos
---

Variáveis, campos ou expressões do tipo Objecto podem conter vários tipos de dados. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. A sintaxe desses objetos é baseada na notação JSON:

- Um nome de uma propriedade é sempre um texto, por exemplo "nome".

- Um valor de propriedade pode ser do seguinte tipo:
    - number (Real, Integer, etc.)
    - text
    - null
    - Parâmetros
    - ponteiro (armazenado como tal, avaliado usando o comando `JSON Stringify` ou quando copiando),
    - data (tipo de data ou cadeia de formato de data ISO)
    - objeto (os objetos podem ser aninhados em vários níveis)
    - imagem(*)
    - collection

(*)When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".

**Warning:** Keep in mind that attribute names differentiate between upper and lower case.

You manage Object type variables, fields or expressions using the commands available in the **Objects (Language)** theme or through the object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)). Note that specific commands of the Queries theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Cada valor de propriedade acessado através da notação de objeto é considerado uma expressão. When the object notation is enabled in your database (see below), you can use such values wherever 4D expressions are expected:

- in 4D code, either written in the methods (Method editor) or externalized (formulas, 4D tags files processed by PROCESS 4D TAGS or the Web Server, export files, 4D Write Pro documents...),
- nas áreas de expressão do depurador e do explorador de Runtime,
- na lista de propriedades do editor de formulários para objectos de formulários: Variável ou Campo de expressão, bem como várias caixas de selecção e expressões de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte).

## Inicialização

Objects must have been initialized, for example using the `New object` command, otherwise trying to read or modify their properties will generate a syntax error.

Exemplo:
```4d
 C_OBJECT($obVar) //creation of an object type 4D variable
 $obVar:=New object //initialization of the object and assignment to the 4D variable
```

### Objeto regular ou compartilhado

Pode criar dois tipos de objetos:

- regular (non-shared) objects, using the `New object` command. Estes objetos podem ser editados sem qualquer controle de acesso específico, mas não podem ser compartilhados entre processos.
- objetos compartilhados, usando o comando `New shared object`. Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. Access to these objects is controlled by `Use... End use` structures. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.


## Noções básicas de sintaxe

A notação de objetos pode ser utilizada para acessar aos valores das propriedades de objetos através de uma string de tokens.

### Propriedades dos objectos

Identificadores de propriedades de objetos

- usar uma string dentro de colchetes: > object["propertyName"]

Exemplo:
```4d
     employee.name:="Smith"
```

- usar um simbolo "ponto": > object.propertyName

Exemplos:
```4d
     $vName:=employee["name"]
     /ou também:
     $property:="name"
     $vName:=employee[$property]

```

Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma coleção, a notação de objeto aceita uma sequência de símbolos para acessar subpropriedades, por exemplo:
```4d
 $vAge:=employee.children[2].age
```
A notação de objetos está disponível em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:

- com os **Objetos** mesmos (armazenados em variáveis, campos, propriedades de objetos, arrays de objetos ou elementos de coleções). Exemplos:

```4d
     $age:=$myObjVar.employee.age //variável
     $addr:=[Emp]data_obj.address //campo
     $city:=$addr.city //propriedade de um objeto
     $pop:=$aObjCountries{2}.population //array objeto
     $val:=$myCollection[3].subvalue //elemento coleção
```
- **Comandos 4D** que devolvem objectos. Exemplo:

```4d
     $measures:=Get database measures.DB.tables
```

- **Métodos de Projeto** que retornam objetos. Exemplo:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //tamanho da coleção
```

### Ponteiro
**Nota preliminar:** dado que os objetos são passados sempre por referência, geralmente não é preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de memória e permitindo modificar o parâmetro e devolver as modificações. Como resultado, não é necessário usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros.

Usar notação de objeto com ponteiros é parecido com usar notação de objeto diretamente com os objetos, exceto que o símbolo "ponto" deve ser omitido.

- Acesso direto
> pointerOnObject->propertyName

- Acesso pelo nome:
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

For more information, please refer to the `Null` command description.

### Valor não definido

A avaliação de uma propriedade de um objeto pode produzir às vezes um valor indefinido. Normalmente ao tentar ler ou atribuir expressões indefinidas, 4D gera erros. Isso não acontece nos casos abaixo:

- Reading a property of an undefined object or value returns undefined; assigning an undefined value to variables (except arrays) has the same effect as calling with them:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Lendo a propriedade de **comprimento** de uma coleção indefinida produz 0:

```4d
     C_COLLECTION($c) //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- Um valor indefinido passado como parâmetro para um método de projecto é automaticamente convertido em 0 ou "" de acordo com o tipo de parâmetro declarado.

```4d
     C_OBJECT($o)
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     C_TEXT($1) //parameter type is text
      // $1 contains ""
```

- Uma expressão de condição é automaticamente convertida em falsa quando se avalia para indefinida com as palavras-chave If e Case:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- A atribuição de um valor indefinido a um objecto existente reinicia ou limpa o seu valor, dependendo do seu tipo:
 - Objecto, colecção, ponteiro: Null
 - Imagem: Imagem vazia
 - Booleano: Falso
 - String: ""
 - Número: 0
 - Data: !00-00-00-00! se a configuração "Usar tipo de data em vez de formato de data ISO nos objetos" estiver habilitada, caso contrário ""
 - Hora: 0 (número de ms)
 - Indefinido, Null: sem mudança

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Atribuir um valor indefinido a uma propriedade objecto não existente não faz nada.

Quando expressões de um certo tipo são esperadas em seu código 4D, pode garantir que tenha o tipo correto mesmo quando são avaliadas como indefinidas, cercando-as com o comando de transformação 4D apropriado: `String`, `Num`, `Date`, `Time`, `Bool`. Estes comandos devolvem um valor vazio de tipo especificado quando a expressão é avaliada como indefinida. Por exemplo:

```4d
 $myString:=Caixa minúscula(String($o.a.b))) // certifique-se de obter um valor de string mesmo que não esteja definido
  // para evitar erros no código
```

## Identificadores de propriedade de objetos

Token member names (i.e., object property names accessed using the object notation) are more restrictive than standard 4D object names. They must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)):

- the first character must be a letter, an underscore (_), or a dollar sign ($),
- subsequent characters may be any letter, digit, an underscore or dollar sign (space characters are NOT allowed),
- eles são sensíveis às maiúsculas e minúsculas.

**Nota:**

- Using a table field as a collection index, for example a.b[[Table1]Id], is not allowed. É necessário utilizar uma variável intermédia.
- Creating object attributes using a string in square brackets allows you to override the ECMA Script rules. Por exemplo, o atributo $o["My Att"] é válido em 4D, apesar do espaço. In this case, however, it will not be possible to use dot notation with this attribute.


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
