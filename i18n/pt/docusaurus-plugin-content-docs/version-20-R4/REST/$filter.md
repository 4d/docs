---
id: filter
title: $filter
---



Permite consultar os dados numa dataclass ou método *(por exemplo*, `$filter="firstName!='' AND salary>30000"`)


## Descrição

Este parâmetro permite-lhe definir o filtro para a sua dataclass ou método.

### Utilizar um filtro simples

Um filtro é composto pelos seguintes elementos:

**\{attribute\} {comparator} {value}**

Por exemplo: `$filter="firstName=john"` onde `firstName` é o **atributo**, `=` é o comparador **** e `john` é o **valor **.

### Utilizar um filtro complexo

Um filtro mais complexo é composto pelos seguintes elementos, que juntam duas consultas:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**


Por exemplo: `$filter="firstName=john AND salary>20000"` onde `firstName` y `salary` são atributos da classe de dados Employee.

### Utilizar a propriedade params

Também pode usar a propriedade params de 4D.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Por exemplo: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` onde firstName e salary são os atributos da classe de dados Employee.

Para mais informações sobre como consultar dados em 4D, consulte a documentação [dataClass.query()](https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html).
> Ao inserir aspas (') ou aspas duplas ("), deve escapar-lhes utilizando o seu código de caracteres:
> 
> <li>Aspas ('): \u0027</li>
  <li>Quotes ('): \u0027 Double quotes ("): \u0022</li>
> 
> Por exemplo, pode escrever o seguinte ao passar um valor com uma aspa ao utilizar a propriedade *params*:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
> 
> If you pass the value directly, you can write the following: `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Atributo

Se o atributo estiver na mesma dataclass, pode simplesmente passá-lo diretamente (*exemplo*, `firstName`). No entanto, se pretender consultar outra dataclass, deve incluir o nome do atributo relacional mais o nome do atributo, ou seja, o caminho (*exemplo*, employer.name). O nome do atributo é sensível às maiúsculas e minúsculas (`firstName` não é igual a `FirstName`).

Também é possível consultar atributos do tipo Object utilizando a notação de ponto. Por exemplo, se tiver um atributo cujo nome é "objAttribute" com a seguinte estrutura:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

É possível pesquisar no objeto escrevendo o seguinte:

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparador

O comparador deve ser um dos seguintes valores:

| Comparador | Descrição            |
| ---------- | -------------------- |
| =          | é igual a            |
| !=         | diferente de         |
| >          | maior que            |
| >=         | maior ou igual a     |
| <          | menor que            |
| <=         | menor que ou igual a |
| begin      | começa com           |

## Exemplos

No exemplo seguinte, procuramos todos os empregados cujo apelido começa por "j":

```
 GET  /rest/Employee?$filter="lastName begin j"
```

Nesse exemplo pesquisamos na classe de dados Empregado todos os empregados cujo salário seja superior a  20.000 e que não trabalhem para uma empresa chamada Acme:

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

Neste exemplo, buscamos na classe de dados Person todas as pessoas cuja propriedade número no atributo anotherobj de tipo Object for maior que 50:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```
