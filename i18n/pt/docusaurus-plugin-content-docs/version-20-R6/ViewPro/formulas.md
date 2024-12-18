---
id: formulas
title: Fórmulas e funções
---

## Usando fórmulas

Uma fórmula de planilha é uma expressão que calcula o valor de uma célula.

### Introduzir fórmulas

Para introduzir uma fórmula numa área 4D View Pro:

1. Selecione a célula onde você digitará a fórmula ou função.
2. Digite = (o sinal de igual).
3. Digite a fórmula e pressione a tecla **Enter**.

Ao escrever uma fórmula, pode utilizar diferentes atalhos:

- clique numa célula para introduzir a sua referência na fórmula:

![](../assets/en/ViewPro/formulas.PNG)

- digite a primeira letra de uma função para entrar. Um menu pop-up que lista as funções e referências disponíveis é exibido, permitindo que você selecione os elementos desejados:

![](../assets/en/ViewPro/formula2.png)

Você também pode criar fórmulas nomeadas que podem ser chamadas por seu nome. To do so, enter these formulas using the [VP ADD FORMULA NAME](commands/vp-add-formula-name.md) command.

### Operadores e Operandos

Todas as fórmulas têm operandos e operadores:

- **Operadores**: consulte [Valores e operadores](#valores-e-operadores) abaixo.
- Os **Operandos** inclui várias categorias:
  - [valores](#values-and-operators) (há suporte para 5 tipos de dados)
  - [referências a outras células](#cell-referências) (relativas, absolutas, mistas ou por nome)
  - [funções de planilha padrão](#using-functions)
  - [funções 4D](#4d-functions) com base em fórmulas 4D e fornecendo acesso a variáveis, campos, métodos, comandos ou expressões.

## Valores e operadores

4D View Pro suporta cinco tipos de dados. Para cada tipo de dados, há suporte para valores literais e operadores específicos.

| Tipos de dados                    | Valores                                                                                             | Operadores                                                                                                                                                                                                                                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Number](Concepts/dt_number.md)   | 1.2<br/>1.2 E3<br/>1.2E-3<br/>10.3x | + (adição)<br/>- (subtração)<br/>\* (multiplicação)<br/>/ (divisão)<br/>^ (expoente, o número de vezes para multiplicar um número por ele mesmo)<br/>% (porcentagem -- dividir o número antes do operador por cem) |
| [Date](Concepts/dt_date.md)       | 10/24/2017                                                                                          | + (data + número de dias -> data)<br/>+ (data + hora -> data + hora do dia)<br/>- (data - número de dias -> data)<br/>- (data - data -> número de dias entre as duas)                                                                                    |
| [Time](Concepts/dt_time.md)       | 10:12:10                                                            | Operadores de duração:<br/>+ (adição)<br/>- (subtração)<br/>\* (duração \* número -> duração)<br/>/ (duração / número -> duração)                                                                                                        |
| [String](Concepts/dt_string.md)   | 'Sophie' ou "Sophie"                                                                                | & (concatenação)                                                                                                                                                                                                                                                                              |
| [Boolean](Concepts/dt_boolean.md) | TRUE ou FALSE                                                                                       | -                                                                                                                                                                                                                                                                                                                                    |

### Operadores de comparação

Os operadores a seguir podem ser usados com dois operandos do mesmo tipo:

| Operador                    | Comparação           |
| --------------------------- | -------------------- |
| =                           | igual a              |
| `<>`                        | diferente de         |
| >                           | maior que            |
| <  | menor que            |
| > =                         | maior ou igual a     |
| <= | menor que ou igual a |

### Precedência do operador

Lista dos operadores, do mais importante para o menos importante:

| Operador                    | Descrição                                        |
| --------------------------- | ------------------------------------------------ |
| ()       | Parênteses (para agrupamento) |
| -                           | Negativo                                         |
| +                           | Mais                                             |
| %                           | Porcentagem                                      |
| ^                           | Expoente                                         |
| \* e /                      | Multiplicar e dividir                            |
| + e -                       | Adicionar e subtrair                             |
| &       | Concatenar                                       |
| `=`  `>` `<` `>=` `<=` `<>` | Comparar                                         |

## Referências de células

As fórmulas referem-se frequentemente a outras células através de endereços de células. Pode copiar estas fórmulas para outras células. Por exemplo, a fórmula a seguir, inserida na célula C8, adiciona os valores nas duas células acima dela e exibe o resultado.

```
= C6 + C7
```

Essa fórmula se refere às células C6 e C7. Ou seja, 4D View Pro é instruído a consultar essas outras células para obter os valores a serem usados na fórmula.

When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.

- Uma referência que muda é chamada uma **referência relativa** e se refere a uma célula conforme a distância à esquerda/direita e acima/abaixo da célula com a fórmula.
- Uma referência que aponta sempre para uma célula específica é chamada de **referência absoluta**.
- You can also create a mixed reference which always points to a fixed row or column.

### Notação de referências

If you use only cell coordinates, for example, `C5`, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in `$C$5`.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, `$C5` or `C$5`. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.

A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. Uma referência a uma célula nomeada é sempre absoluta. You can create or modify named cells or named cell ranges using the [`VP ADD RANGE NAME`](commands/vp-add-range-name.md) command.

A tabela seguinte mostra o efeito das diferentes notações:

| Exemplo        | Tipo de referência | Descrição                                                                                                                                                                          |
| -------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C5             | Relativo           | Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used                                                       |
| $C$5           | Absoluto           | A referência é absoluta. Referir-se-á sempre à célula C5, independentemente do local onde for utilizada.                                           |
| $C5            | Mixed              | Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.                               |
| C$5            | Mixed              | Reference is always to row 5, but the column reference is relative to the location of the cell in which the reference is first used                                                |
| Nome da célula | Absoluto           | A referência é absoluta. Siempre se referirá a la [celda o rango nombrado](commands/vp-add-range-name.md) sin importar donde se use la referencia. |

## Funções incorporadas

Spreadsheet functions are preset formulas used to calculate cell values. When you type the first letter of the function to enter, a pop-up menu listing the available functions and references appears, allowing you to select the desired elements:

![](../assets/en/ViewPro/vpFormula2.PNG)

Veja [**A lista ampliada de funções de SpreadJS**](https://developer.mescius.com/spreadjs/docs/formulareference/FormulaFunctions) para detalhes e exemplos.

## Funções 4D

O 4D View Pro permite que você defina e chame **funções personalizadas 4D**, que executam [fórmulas 4D](API/FunctionClass.md). Using 4D custom functions extends the possibilities of your 4D View Pro documents and allows powerful interactions with the 4D database.

4D custom functions provide access, from within your 4D View Pro formulas, to:

- Variáveis processo 4D,
- campos,
- métodos projeto,
- Comandos de linguagem 4D,
- ou qualquer expressão 4D válida.

As funções personalizadas 4D podem receber [parâmetros](#parameters) da área 4D View Pro e retornar valores.

Você declara todas as suas funções usando o comando [`VP SET CUSTOM FUNCTIONS`](commands/vp-set-custom-functions). Exemplos:

```4d
$o:=New object

//Name of the function in 4D View Pro: "DRIVERS_LICENCE"
$o.DRIVERS_LICENCE:=New object

//process variable
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicence)

//table field
$o.DRIVERS_LICENCE.formula:=Formula([Users]DriverLicence)

//project method
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicenceState)

//4D command
$o.DRIVERS_LICENCE:=Formula(Choose(DriverLicence; "Obtained"; "Failed"))

//4D expression and parameter
$o.DRIVERS_LICENCE.formula:=Formula(ds.Users.get($1).DriverLicence)
$o.DRIVERS_LICENCE.parameters:=New collection
$o.DRIVERS_LICENCE.parameters.push(New object("name"; "ID"; "type"; Is longint))
```

> **See also** [4D View Pro: Use 4D formulas in your spreadsheet (blog post)](https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)

### Exemplo Hello World

We want to print "Hello World" in a 4D View Pro area cell using a 4D project method:

1. Crie um método projeto "myMethod" com o seguinte código:

```4d
 #DECLARE->$hw :Text
 $hw:="Hello World"

```

2. Execute the following code before opening any form that contains a 4D View Pro area:

```4d
  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Definir a função "vpHello" a partir do método "myMethod"
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
```

3. Editar o conteúdo de uma célula numa área 4D View Pro e digitar:

   ![](../assets/en/ViewPro/vpProjMeth1.PNG)

   "myMethod" é então chamado por 4D e a célula aparece:

   ![](../assets/en/ViewPro/vpProjMeth2.PNG)

### Parâmetros

Parameters can be passed to 4D functions that call project methods using the following syntax:

```
=METHODNAME(param1,param2,...,paramN)
```

Esses parâmetros são recebidos em *methodName* em $1, $2...$N.

Observe que os ( ) são obrigatórios, mesmo que nenhum parâmetro seja passado:

```
=METHODWITHOUTNAME()
```

You can declare the name, type, and number of parameters through the *parameters* collection of the function you declared using the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions.md) command. Optionally, you can control the number of parameters passed by the user through *minParams* and *maxParams* properties.

For more information on supported incoming parameter types, please refer to the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions) command description.

If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) e seu tipo será automaticamente convertido.

Os parâmetros Date e Object são tratados da seguinte maneira:

- Dates in *jstype* will be passed as [object](Concepts/dt_object.md) in 4D code with two properties:

| Propriedade | Tipo | Descrição         |
| ----------- | ---- | ----------------- |
| value       | Date | Valor data        |
| time        | Real | Tempo em segundos |

- Objects will be passed as [object](Concepts/dt_object.md) with a  `.value` property containing the parameter:

| Propriedade | Tipo   | Descrição        |
| ----------- | ------ | ---------------- |
| value       | Object | Parâmetro Objeto |

### Valores retornados

4D project methods can also return values in the 4D View Pro cell formula via $0. São suportados os seguintes tipos de dados para os parâmetros devolvidos:

- [text](Aceitar/dt_string.md) (convertido em string em 4D View Pro)
- [real](Concepts/dt_number.md)/[longint](Concepts/dt_number.md) (converted to number in 4D View Pro)
- [date](Concepts/dt_date.md) (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)
- [time](Concepts/dt_time.md) (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)
- [boolean](Concepts/dt_boolean.md) (convertido em bool no 4D View Pro)
- [picture](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed
- [object](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):

  | Propriedade | Tipo | Descrição         |
  | ----------- | ---- | ----------------- |
  | value       | Date | Valor data        |
  | time        | Real | Tempo em segundos |

If the 4D method returns nothing, an empty string is automatically returned.

É devolvido um erro na célula 4D View Pro se:

- o método 4D retorna outro tipo além do listado acima
- an error occurred during 4D method execution (when user clicks on "abort" button).

#### Exemplo

```4d
var $o : Object

$o.BIRTH_INFORMATION:=New object
$o.BIRTH_INFORMATION.formula:=Formula(BirthInformation)
$o.BIRTH_INFORMATION.parameters:=New collection
$o.BIRTH_INFORMATION.parameters.push(New object("name";"First name";"type";Is text))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Birthday";"type";Is date))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Time of birth";"type";Is time))
$o.BIRTH_INFORMATION.summary:="Returns a formatted string from given information" VP SET CUSTOM FUNCTIONS("ViewProArea"; $o)
```

![](../assets/en/ViewPro/params.png)

## Compatibidade

Alternate solutions are available to declare fields or methods as functions in your 4D View Pro areas. These solutions are maintained for compatibility reasons and can be used in specific cases. No entanto, é recomendável usar o comando [`VP SET CUSTOM FUNCTIONS`](commands/vp-set-custom-functions.md).

### Referência a campos utilizando a estrutura virtual

4D View Pro allows you to reference 4D fields using the virtual structure of the database, i.e. declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter. Essa solução alternativa pode ser útil se o seu aplicativo já depender de uma estrutura virtual (caso contrário, recomenda-se [usar `VP SET CUSTOM FUNCTIONS`](#4d-functions)).

> **ATENÇÃO:** Você não pode usar a estrutura virtual e `VP SET CUSTOM FUNCTIONS` simultaneamente. As soon as `VP SET CUSTOM FUNCTIONS` is called, the functions based upon `SET TABLE TITLES` and `SET FIELD TITLES` commands are ignored in the 4D View Pro area.

#### Requisitos

- The field must belong to the virtual structure of the database, i.e. it must be declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter (see example),
- Table and field names must be ECMA compliant (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)),
- O tipo de campo deve ser compatível com 4D View Pro (veja acima).

An error is returned in the 4D View Pro cell if the formula calls a field which is not compliant.

#### Chamar um campo virtual numa fórmula

To insert a reference to a virtual field in a formula, enter the field with the following syntax:

```
TABLENAME_FIELDNAME()
```

For example, if you declared the "Name" field of the "People" table in the virtual structure, you can call the following functions:

```
=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
```

> If a field has the same name as a [4D method](../Concepts/methods.md), it takes priority over the method.

#### Exemplo

We want to print the name of a person in a 4D View Pro area cell using a 4D virtual field:

1. Criar uma tabela "Employee" com um campo "L_Name":

![](../assets/en/ViewPro/vpFieldMeth1.PNG)

2. Execute o seguinte código para inicializar uma estrutura virtual:

   ```4d
   ARRAY TEXT($tableTitles;1)
   ARRAY LONGINT($tableNum;1)
   $tableTitles{1}:="Emp"
   $tableNum{1}:=2
   SET TABLE TITLES($tableTitles;$tableNum;*)
    
   ARRAY TEXT($fieldTitles;1)
   ARRAY LONGINT($fieldNum;1)
   $fieldTitles{1}:="Name"
   $fieldNum{1}:=2 //last name
   SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
   ```

3. Edite o conteúdo de uma célula na área do 4D View Pro e digite "=e":

![](../assets/en/ViewPro/vpFieldMeth2.PNG)

4. Selecionar EMP_NAME (utilizar a tecla Tab) e introduzir o fecho.

![](../assets/en/ViewPro/vpFieldMeth3.PNG)

5. Validar o campo para apresentar o nome do empregado atual:

![](../assets/en/ViewPro/vpFieldMeth4.PNG)

> A tabela \[Employee] tem de ter um registo atual.

### Declaração dos métodos permitidos

You can call directly 4D project methods from within your 4D View Pro formulas. For security reasons, you must declare explicitly methods that can be called by the user with the [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md) command.

#### Requisitos

Para ser chamado numa fórmula 4D View Pro, um método projeto deve ser:

- **Permitido**: se declaró explícitamente mediante el comando [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md).
- **Runnable**: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see [Sharing of project methods](../Concepts/components.md#sharing-of-project-methods)).
- **Not in conflict** with an existing 4D View Pro spreadsheet function: if you call a project method with the same name as a 4D View Pro built-in function, the function is called.

> If neither the [VP SET CUSTOM FUNCTIONS](commands/vp-set-custom-functions.md) nor the [VP SET ALLOWED METHODS](commands/vp-set-allowed-methods.md) command has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). The global filtering option in the Settings dialog box (see *Data Access*) is ignored in all cases.
