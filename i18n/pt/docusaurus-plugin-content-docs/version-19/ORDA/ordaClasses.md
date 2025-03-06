---
id: ordaClasses
title: Classes de modelo de dados
---



ORDA permite-lhe criar funções de classe de alto nível acima do modelo de dados. Isto permite-lhe escrever código orientado para o negócio e "publicá-lo" tal como uma API. Datastore, classes de dados, seleções de entidades e entidades estão todos disponíveis como objetos de classe que podem conter funções.

Por exemplo, pode criar uma função `getNextWithHigherSalary()` na classe `EmployeeEntity` para devolver os empregados com um salário superior ao selecionado. Seria tão simples como chamar:

```4d
$nextHigh:=ds. Employee.get(1).getNextWithHigherSalary()
```

Os desenvolvedores podem não só utilizar estas funções em datastores locais, mas também em arquiteturas cliente/servidor e remotas:

```4d
 //$cityManager é a referência de um datastore remoto Form.comp.city:=$cityManager. City.getCityName(Form.comp.zipcode)
```

Graças a esta caraterística, toda a lógica comercial da sua aplicação 4D pode ser armazenada como uma camada independente para que possa ser facilmente mantida e reutilizada com um alto nível de segurança:

- É possível "esconder" a complexidade global da estrutura física subjacente e expor apenas funções compreensíveis e prontas a utilizar.

- Se a estrutura física evoluir, pode simplesmente adaptar o código da função e as aplicações cliente continuarão a chamá-las de forma transparente.

- Por padrão, todas as funções da classe modelo de dados são **não expostas** a aplicações remotas e não podem ser chamadas de solicitações REST. Você deve declarar explicitamente cada função pública com a palavra-chave [`exposed`](#exposed-vs-non-exposed-functions).

![](../assets/en/ORDA/api.png)

Além disso, 4D [pré-criou automaticamente](#creating-classes) as classes para cada objeto de modelo de dados disponível.

## Arquitetura

ORDA fornece **classes genéricas** expostas através da [class store](Concepts/classes.md#class-stores) **`4D`**, bem como **user classes** (que estendem as classes genéricas) expostas na [class store](Concepts/classes.md#class-stores) **`cs`**:

![](../assets/en/ORDA/ClassDiagramImage.png)


Todas as classes do modelo de dados ORDA são expostas como propriedades do armazenamento de classes **`cs`** . Estão disponíveis as seguintes classes ORDA:

| Class                       | Nome do exemplo       | Instanciado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs. DataStore               | cs. DataStore         | comando [`ds`](API/DataStoreClass.md#ds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| cs.*DataClassName*          | cs. Employee          | [`dataStore. DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| cs.*DataClassName*Entity    | cs. EmployeeEntity    | [`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)                                                                                                                                                                                                                                                                                                                                                                                                   |
| cs.*DataClassName*Selection | cs. EmployeeSelection | [`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection` |

> As classes de utilizador ORDA são armazenadas como arquivos de classe normais (.4dm) na subpasta Classes do projeto [(ver abaixo)](#class-files).

Além disso, as instâncias de objetos das classes de usuárioes do modelo de dados ORDA beneficiam das propriedades e funções dos seus pais:

- um objeto da classe Datastore pode chamar funções da classe genérica [ORDA Datastore](API/DataStoreClass.md).
- um objeto da classe Dataclass pode chamar funções da classe genérica [ORDA Dataclass](API/DataClassClass.md).
- um objeto da classe Seleção de entidades pode chamar funções da classe genérica [ORDA Seleção de entidades](API/EntitySelectionClass.md).
- um objeto da classe Entidade pode chamar funções da classe genérica [ORDA Entity](API/EntityClass.md).

## Descrição da classe

<details><summary>Histórico</summary>

| Release | Mudanças                                                                                                                |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| 18 R5   | As funções de classe do modelo de dados não são expostas ao REST por defeito. Novas palavras-chave `exposed` e `local`. |
</details>

### Classe DataStore

Uma base de dados 4D expõe a sua própria classe DataStore na loja de classes `cs` .

- **Extends**: 4D. DataStoreImplementation
- **Class name**: cs. DataStore

É possível criar funções na classe DataStore que estarão disponíveis através do objeto `ds`.

#### Exemplo

```4d  
// cs. DataStore class Class extends DataStoreImplementation Function getDesc
  $0:="Database exposing employees and their companies"
```

Esta função pode então ser chamada:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```

### Classe DataClass

Cada tabela exposta com ORDA oferece uma classe DataClass no armazenamento de classes `cs`.

- **Extends**: 4D. DataClass
- **Nome da classe**: cs.*DataClassName* (em que *DataClassName* é o nome da tabela)
- **Example name**: cs. Employee

#### Exemplo

```4D
// cs. Classe company Class extends DataClass

// Retorna empresas cuja receita é acima da média
// Retorna uma seleção de entidade relacionada com a dataClass Company Function GetBestOnes()
 $sel:=This.query("revenues >= :1";This.all().average("revenues"));
 $0:=$sel
```

Em seguida, pode obter uma seleção de entidades das "melhores" empresas através da execução:

```4d
 var $best : cs. CompanySelection
 $best:=ds. Company. GetBestOnes()
```

#### Exemplo com um datastore remoto

O seguinte catálogo *City* está exposto num datastore remoto (vista parcial):

![](../assets/en/ORDA/Orda_example.png)

A classe `City` fornece uma API:

```4d  
// cs. City class Class extends DataClass Function getCityName()
 var $1; $zipcode : Integer
 var $zip : 4D. Entity
 var $0 : Text

 $zipcode:=$1
 $zip:=ds. ZipCode.get($zipcode)
 $0:="" 

 If ($zip#Null)
  $0:=$zip.city.name
 End if
```

A aplicação cliente abre uma sessão no datastore remoto:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

Em seguida, uma aplicação cliente pode utilizar a API para obter a cidade correspondente a um código postal (por exemplo) a partir de um formulário:

```4d
Form.comp.city:=$cityManager. City.getCityName(Form.comp.zipcode)

```

### Classe EntitySelection

Cada tabela exposta com ORDA oferece uma classe EntitySelection no repositório de classes `cs` .

- **Extends**: 4D. EntitySelection
- **Nome da classe**: *DataClassName*Seleção (em que *DataClassName* é o nome da tabela)
- **Exemplo de nome**: cs. EmployeeSelection

#### Exemplo

```4d
// Class cs. EmployeeSelection Class extends EntitySelection

//Extrair os empregados com um salário superior à média desta seleção de entidades Function withSalaryGreaterThanAverage
 C_OBJECT($0)
 $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

```

Em seguida, é possível obter empregados com um salário superior à média em qualquer seleção de entidade através da execução:

```4d
$moreThanAvg:=ds. Company.all().employees.withSalaryGreaterThanAverage()
```

### Entity Class

Cada tabela exposta com ORDA oferece uma classe de Entidade no armazenamento de classes `cs`.

- **Extends**: 4D. Entity
- **Nome da classe**: *DataClassName*Entity (em que *DataClassName* é o nome da tabela)
- **Example name**: cs. CityEntity

#### Exemplo

```4d
// cs. CityEntity class Class extends Entity Function getPopulation()
    $0:=This.zips.sum("population") Function isBigCity C_BOOLEAN($0)
// A função getPopulation() pode ser usada dentro da classe
$0:=This.getPopulation()>50000
```

Em seguida, pode chamar este código:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager. City.getCity("Caguas") If ($city.isBigCity())
 ALERT($city.name + " is a big city")
End if
```

### Regras específicas

Ao criar ou editar classes de modelo de dados, é necessário preste atenção às seguintes regras:

- Já que são utilizadas para definir nomes de classes DataClass automáticas no armazenamento de classes **cs** [](Concepts/classes.md#class-stores), as tabelas 4D devem ser nomeadas de modo a evitar qualquer conflito no namespace **cs** . Em particular:
  - Não dê o mesmo nome a uma tabela 4D e a um nome de classe de utilizador [](Concepts/classes.md#class-names). Se isso acontecer, o construtor da classe de utilizador torna-se inutilizável (o compilador emite um aviso).
  - Não use um nome reservado para uma tabela 4D (por exemplo, "DataClass").

- Ao definir uma classe, certifique-se de que a instrução [`Class extends`](Concepts/classes.md#class-extends-classnameclass) corresponde exatamente ao nome da classe-mãe (lembre-se de que são sensíveis a maiúsculas e minúsculas). Por exemplo, `Class extends EntitySelection` para uma classe de seleção de entidades.

- Não é possível instanciar um objeto de classe de modelo de dados com a palavra-chave `new()` (é devolvido um erro). É necessário utilizar um método normal, tal como indicado na coluna [`Instantiated by` da tabela de classes ORDA](#architecture).

- Não é possível substituir uma função de classe ORDA nativa da loja de classes **`4D`** [](Concepts/classes.md#class-stores) por uma função de classe de utilizador do modelo de dados.

## Funções expostas vs não expostas

Por razões de segurança, todas as funções de classe de modelo de dados são **não expostas** (ou seja, privadas) por padrão para solicitações remotas.

Os pedidos remotos incluem:

- Pedidos enviados por aplicações 4D remotas ligadas através de `Open datastore`
- Pedidos REST

> Os pedidos regulares de cliente/servidor 4D não são afetados. As funções de classe do modelo de dados estão sempre disponíveis nesta arquitetura.

Uma função que não esteja exposta não está disponível em aplicações remotas e não pode ser chamada em qualquer instância de objeto a partir de um pedido REST. Se uma aplicação remota tentar aceder a uma função não exposta, é devolvido o erro "-10729 - Método de membro desconhecido".

Para permitir que uma função de classe de modelo de dados seja chamada por um pedido remoto, é necessário declará-la explicitamente utilizando a palavra-chave `exposed` . A sintaxe formal é:

```4d  
// declarar uma função exposta Função exposta <functionName>   
```

> A palavra-chave `exposed` só pode ser utilizada com funções de classe de modelo de dados. Se for utilizada com uma função [da classe de usuário regular](Concepts/classes.md) , é ignorada e o compilador devolve um erro.

### Exemplo

Se quiser que uma função exposta utilize uma função privada numa classe de dataclass:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs. StudentsEntity

$entity:=ds. Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function Function computeIDNumber()-> $id : Integer
//compute a new ID number
$id:=...

```

Quando o código é chamado:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS. Schools.registerNewStudent($student) // OK
$id:=$remoteDS. Schools.computeIDNumber() // Error "Unknown member method" 
```

## Funções locais

Por padrão, na arquitetura cliente/servidor, as funções do modelo de dados ORDA são executadas **no servidor**. Normalmente, proporciona o melhor desempenho, uma vez que apenas o pedido de função e o resultado são enviados através da rede.

No entanto, pode acontecer que uma função seja totalmente executável no lado do cliente (por exemplo, quando processa dados que já estão na cache local). Neste caso, pode poupar pedidos ao servidor e, assim, melhorar o desempenho da aplicação, inserindo a palavra-chave `local` . A sintaxe formal é:

```4d  
// declarar uma função para executar localmente no cliente/servidor
local Function <functionName>   
```

Com esta palavra-chave, a função será sempre executada no lado do cliente.

> A palavra-chave `local` só pode ser utilizada com funções de classe de modelo de dados. Se for utilizada com uma função [da classe de usuário regular](Concepts/classes.md) , é ignorada e o compilador devolve um erro.

Note-se que a função funcionará mesmo que eventualmente seja necessário aceder ao servidor (por exemplo, se a cache ORDA tiver expirado). No entanto, é altamente recomendável certificar-se de que a função local não acede a dados no servidor, caso contrário a execução local não poderá trazer qualquer benefício em termos de desempenho. Uma função local que gera muitos pedidos ao servidor é menos eficiente do que uma função executada no servidor que apenas devolveria os valores resultantes. Por exemplo, considere a seguinte função na classe de entidade Escolas:

```4d
// Obter os alunos mais novos  
// Uso inapropriado da palavra-chave local
local Function getYoungest
 var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```

- **sem** a palavra-chave `local` , o resultado é dado através de um único pedido
- **Com** a palavra-chave `local` , são necessários 4 pedidos: um para obter a entidade Schools students, um para `query()`, um para `orderBy()`, e um para `slice()`. Neste exemplo, a utilização da palavra-chave `local` não é adequada.

### Exemplos

#### Cálculo da idade

Dada uma entidade com um atributo *birthDate* , pretendemos definir uma função `age()` que seria chamada numa caixa de listagem. Esta função pode ser executada no cliente, o que evita desencadear um pedido ao servidor para cada linha da caixa de listagem.

Na classe *StudentsEntity*:

```4d
Class extends Entity

local Function age() -> $age: Variant
    If (This.birthDate#!00-00-00!)
    If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null End if
    If (This.birthDate#!00-00-00!)
    If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null End if
    If (This.birthDate#!00-00-00!)
    If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null End if
    If (This.birthDate#!00-00-00!)
    If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null End if
    If (This.birthDate#!00-00-00!)
    If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null End if
```

#### Verificação de atributos

Pretendemos verificar a consistência dos atributos de uma entidade carregada no cliente e actualizada pelo utilizador antes de solicitar ao servidor que os guarde.

Na classe *StudentsEntity* , a função local `checkData()` verifica a idade do Aluno:

```4d
Classe extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="Falta a data de nascimento" 

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="O estudante tem de ter entre 15 e 30 anos - Este é "+String(This.age())
End case
```

Código de chamada:

```4d
var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server End if
```

## Suporte a projetos 4D

### Ficheiros de classe (class files)

Uma classe de usuário do modelo de dados ORDA é definida adicionando, na [mesma localização que os arquivos classe normais](Concepts/classes.md#class-files) (*ou seja.* na pasta `/Sources/Classes` da pasta do projeto), um arquivo .4dm com o nome da classe. Por exemplo, uma classe de entidade para a classe de dados `Utilities` será definida através de um arquivo `UtilitiesEntity.4dm` .

### Criação de classes

4D pré-criou automaticamente classes vazias na memória para cada objeto de modelo de dados disponível.

![](../assets/en/ORDA/ORDA_Classes-3.png)

> Por padrão, as classes ORDA vazias não são exibidas no Explorer. Para as mostrar, é necessário selecionar **Mostrar todas as classes de dados** no menu de opções do Explorador: ![](../assets/en/ORDA/showClass.png)

As classes de utilizadores ORDA têm um ícone diferente das classes normais. As classes vazias são escurecidas:

![](../assets/en/ORDA/classORDA2.png)

Para criar um arquivo de classe ORDA, basta fazer duplo clique na classe predefinida correspondente no Explorador. 4D cria o arquivo de classe e adiciona o código `extends` . Por exemplo, para uma classe Entity:

```
Class extends Entity
```

Quando uma classe for definida, o seu nome deixa de estar obscurecido no Explorador.

### Edição de classes

Para abrir uma classe ORDA definida no editor de métodos 4D, selecione ou clique duas vezes no nome de uma classe ORDA e use **Editar...** no menu contextual/menu de opções da janela do Explorer:

![](../assets/en/ORDA/classORDA4.png)

Para as classes ORDA baseadas no armazenamento de dados local (`ds`), pode aceder diretamente ao código da classe a partir da janela 4D Structure:

![](../assets/en/ORDA/classORDA5.png)

### Editor de método

No editor de métodos 4D, as variáveis digitadas como uma classe ORDA se beneficiam automaticamente dos recursos de autocompletar. Exemplo com uma variável de classe Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)
