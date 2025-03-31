---
id: object
title: Object
---

Variáveis, campos ou expressões do tipo Objecto podem conter vários tipos de dados. A estrutura dos objectos 4D "nativos" baseia-se no princípio clássico dos pares "propriedade/valor". A sintaxe desses objetos é baseada na notação JSON:

- Um nome de uma propriedade é sempre um texto, por exemplo "nome". Ele deve seguir [regras específicas] (identifiers.md#object-properties).

- Um valor de propriedade pode ser do seguinte tipo:
  - number (Real, Integer, etc.)
  - text
  - null
  - boolean
  - ponteiro (armazenado como tal, avaliado usando o comando `JSON Stringify` ou quando copiado),
  - data (tipo de data ou cadeia de formato de data ISO)
  - objeto (os objetos podem estar aninhados em vários níveis)
  - imagem(2)
  - collection

(1) **Objetos não-transmissíveis** como objetos ORDA ([entidades](ORDA/dsMapping.md#entity), [seleções de entidades](ORDA/dsMapping.md#entity-selection), etc.), [manipuladores de arquivo](../API/FileHandleClass.md), [servidor web](../API/WebServerClass.md)... não podem ser armazenado em **campos objeto**. Um erro é retornado se você tentar fazer isso; no entanto, eles são totalmente compatíveis com **variáveis do objeto** na memória.

(2) Quando se expõe como texto no depurador ou se exporta a JSON, as propriedades dos objetos imagem imprimem "[object Picture]".

:::caution

Tenha em atenção que os nomes das propriedades diferenciam entre maiúsculas e minúsculas.

:::

Pode gerenciar variáveis, campos ou expressões do tipo Objeto usando a [notação do objeto](#properties) padrão ou os comandos disponíveis no tema **Objetos (Idioma)**. Observe que comandos específicos do tema **Queridos** como `QUERY BY ATTRIBUTE`, `QUERY SELECÇÃO BY ATTRIBUTE`, ou `ORDER BY ATTRIBUTE` podem ser usados para realizar processamento em campos de objeto.

Cada valor de propriedade acessado através da notação de objeto é considerado uma expressão. Quando a notação de objeto for ativada em seu banco de dados (ver abaixo), pode usar esses valores sempre que expressões 4D forem esperadas:

- em código 4D, sejam escritas nos métodos (Editor de código) ou sejam externalizadas (fórmulas, 4D arquivos de etiqueta processados por `PROCESS 4D TAGS` ou Web Server, arquivos de exportação, documentos 4D Write Pro. .),
- nas áreas de expressão do depurador e do explorador de Runtime,
- na lista de propriedades do editor de formulários para objectos de formulários: Variável ou Campo de expressão, bem como várias caixas de selecção e expressões de colunas (Fonte de dados, cor de fundo, estilo, ou cor da fonte).

## Instanciação

Os objetos devem ter sido inicializados, por exemplo utilizando o comando <code>New object</code>, do contrário ao tentar ler ou modificar suas propriedades se gerará um error de sintaxe.

Com a notação de objetos, pode acessar às propriedades dos objetos de duas maneiras:

- usando o comando [`New object`] (https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- usando o operador '{}'.

:::info

Vários comandos e funções 4D retornam objetos, por exemplo, [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) ou [`File`](../API/FileClass.md#file). Neste caso, não é necessário instanciar explicitamente o objecto, a linguagem 4D faz isso por você.

:::

### Comando `New object`

O comando [`New object`] (https://doc.4d.com/4dv19R/help/command/en/page1471.html) cria um objeto vazio ou pré-preenchido e retorna sua referência.

Exemplos:

```4d
 var $obVar : Object //declaração de uma variável 4D do tipo objeto
 $obVar:=New object //instanciação de um objeto e atribuição à variável 4D
 
 var $obFilled : Object 
 $obFilled:=New object("name"; "Smith"; "age";42) //instanciação e atribuição de um objeto pré-preenchido
```

### `{}` operador

O operador `{}` permite que você crie um **objeto literal**. Um literal de objecto é uma lista separada por semicolunas de zero ou mais pares de nomes de propriedades e valores associados de um objecto, entre chaves (`{}`). A sintaxe literal do objecto cria objectos vazios ou preenchidos.

Uma vez que qualquer valor de propriedade é considerado uma expressão, pode criar sub-objectos utilizando `{}` nos valores de propriedade.  Também é possível criar e referenciar os **literais da coleção**.

Exemplos:

```4d
 var $o ; $o2 ; $o3 : Object // declaração de variáveis de objeto
 $o := {} // instanciação de um objeto vazio 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instanciação de um objeto
 		// com propriedades {"a":"foo","b":42,"c":{},"d":false})

	// mesmas propriedades usando variáveis
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
$o.form2($o.ob2.message)  // exibe Hello
$col:=$o.col[5] //6
```

### Objeto regular ou compartilhado

Pode criar dois tipos de objetos:

- objetos regulares (não compartilhados), usando o comando [`New object`] (https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) ou a sintaxe literal do objeto (`{}`). Estes objetos podem ser editados sem qualquer controle de acesso específico, mas não podem ser compartilhados entre processos.
- objetos compartilhados, usando o comando [`New shared object`] (https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html). Estes objetos podem ser compartidos entre processos, incluidos os threads preemptivos. O acesso a esses objetos é controlado pelas estruturas `Use...End use`.
  Para obter mais informações, consulte a seção [Shared objects and collections] (shared.md).

## Propriedades

Você acessa os valores de propriedade do objeto por meio de uma cadeia de tokens. As propriedades do objeto podem ser acessadas de duas maneiras:

- usando um símbolo de "ponto":
  > object.propertyName

Exemplo:

```4d
     employee.name:="Smith"
```

- usando uma cadeia de caracteres entre colchetes:
  > object["propertyName"]

Exemplos:

```4d
     $vName:=employee["name"]
     /ou também:
     $property:="name"
	 $vName:=employee[$property]

```

Como o valor de uma propriedade de objeto pode ser um objeto ou uma coleção, é possível usar uma sequência de símbolos para acessar subpropriedades, por exemplo:

```4d
 $vAge:=employee.children[2].age
```

A notação de objetos está disponível em qualquer elemento da lenguagem que possa conter ou devolver um objeto, ou seja:

- Os **Objetos** próprios (armazenados em variáveis, campos, propriedades de objetos, arrays de objetos ou elementos de coleções).
  Exemplos:

```4d
     $age:=$myObjVar.employee.age //variável
     $addr:=[Emp]data_obj.address //campo
     $city:=$addr.city //propriedade de um objeto
     $pop:=$aObjCountries{2}.population //array objeto
     $val:=$myCollection[3].subvalue //elemento coleção
```

- **Comandos 4D** que devolvem objectos.
  Exemplo:

```4d
     $measures:=Get database measures.DB.tables
```

- **Métodos projeto** ou **Funções** que retornam objetos.
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

Ao usar os objetos, o valor **null** é suportado por meio do comando **Null**. Esse comando pode ser usado para atribuir ou comparar o valor nulo às propriedades do objeto, por exemplo:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Para mais informações, consulte [Null e Undefined](dt_null_undefined.md).

### Valor não definido

A avaliação de uma propriedade de um objeto pode produzir às vezes um valor indefinido. A atribuição de um valor indefinido a uma propriedade de objeto existente reinicializa ou limpa seu valor. Atribuir um valor indefinido a uma propriedade objecto não existente não faz nada.

Para mais informações, consulte [Null e Undefined](dt_null_undefined.md)

### Ponteiro

**Nota preliminar**: dado que os objetos são passados sempre por referência, geralmente não é preciso usar ponteiros. Ao passar o objeto, internamente 4D utiliza automaticamente um mecanismo similar a um ponteiro, minimizando a necessidade de memória e permitindo modificar o parâmetro e devolver as modificações. Como resultado, não é necessário usar ponteiros. Mas se quiser usar ponteiros, valores de propriedade podem ser acessados com ponteiros.

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

## Operadores Objeto

É possível usar operadores de comparação com **referências de objeto**, o que significa que você pode avaliar se duas ou mais referências apontam para a mesma instância de um objeto.

```4d
var $o1:={a: 42} //referência a uma instância
var $o2:={a: 42} //referência a uma instância diferente
var $o3:=$o1 //referência à mesma instância
```

Based upon the code above, the comparison table is:

| Operação     | Sintaxe               | Retorna    | Expression | Valor |
| ------------ | --------------------- | ---------- | ---------- | ----- |
| Igual        | objectRef = objectRef | Parâmetros | $o1 = $o3  | True  |
|              |                       |            | $o1 = $o2  | False |
| Desigualdade | objectRef # objectRef | Parâmetros | $o1 # $o3  | False |
|              |                       |            | $o1 # $o2  | True  |

## Resources

Os objetos usam *recursos* documentos, bloqueios de entidades e, é claro, memória. Esses recursos são mantidos enquanto os objetos precisarem. Normalmente, você não precisa se preocupar com eles, 4D libera automaticamente todos os recursos anexados a um objeto quando detecta que o objeto em si não é mais referenciado por qualquer variável ou outro objeto.

Por exemplo, quando não há mais referências a uma entidade na qual você definiu um bloqueio com [`$entity.lock()`](../API/EntityClass.md#lock), 4D liberará a memória, mas também liberará automaticamente o bloqueio associado, uma chamada para [`$entity.unlock()`](../API/EntityClass.md#unlock) é inútil.

Se quiser liberar imediatamente todos os recursos ocupados por um objeto sem ter que esperar que 4D faça isso automaticamente (no final da execução do método para variáveis locais por exemplo) tem que **nulificar todas as suas referências**. Por exemplo:

```4d

$doc:=WP Import document("large_novel.4wp")
	... // fazer algo com $doc
$doc:=Null // liberar recursos ocupados por $doc
	... // continuar a execução com mais memória livre

```

## Exemplos

Usar notação de objeto simplifica o código 4D no manejo dos mesmos. Entretanto note que a notação baseada em comandos continua sendo totalmente compatível.

- Escrita e leitura das propriedades de objetos (este exemplo compara a notação de objetos e anotação de comandos):

```4d
  // Usando a notação objecto
 var $myObj : Object //declara um objecto variável 4D
 $myObj:={} //cria um objecto literal e atribui à variável
 $myObj.age:=56
 $age:=$myObj.age //56
 
  // Usando a notação comando
 var $myObj2 : Object //declara um objecto variável 4D
 OB SET($myObj2;"age";42) //cria um objecto e acrescenta a propriedade age
 $age:=OB Get($myObj2;"age") //42
 
  // Claro, ambas as notações podem ser misturadas
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Criar uma propriedade e atribuir valores, incluindo objetos:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //cria a propriedade da cidade e define o seu valor para "London"
 $Emp.city:="Paris" //modifica a propriedade da cidade
 $Emp.phone:=New object("office"; "123456789"; "home"; "0011223344")
  //cria a propriedade do telefone e define o seu valor para um objecto
```

- Obter um valor em um subobjeto é bem simples usando a notação de objeto:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- Você pode acessar propriedades como strings usando o operador `[]`

```4d
 $Emp["city"]:="Berlin" //modifica a propriedade city
  //isso pode ser útil para criar propriedades por meio de variáveis
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // cria 4 propriedades vazias "address1...address4" no objeto $Emp
```
