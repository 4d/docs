---
id: interpreted-compiled
title: Modos interpretado e compilado
---

Las aplicaciones 4D pueden funcionar en modo **interpretado** o **compilado**:

- no modo interpretado, as declarações são lidas e traduzidas em linguagem de máquina no momento da sua execução. Pode adicionar ou modificar o código sempre que precisar, a aplicação é actualizada automaticamente.
- no modo compilado, todos os métodos são lidos e traduzidos uma vez, na etapa de compilação. Posteriormente, a aplicação contém apenas instruções de nível de montagem, já não é possível editar o código.

As vantagens da compilação são:

- **Velocidad**: su base aplicación se ejecuta de 3 a 1.000 veces más rápido.
- **Verificación del código**: su aplicación se analiza para comprobar la consistencia del código. São detectados conflitos tanto lógicos como sintácticos.
- **Protección:**: una vez compilada su aplicación, puede eliminar el código interpretado. Então, o banco de dados compilado é funcionalmente idêntico ao original, exceto que a estrutura e métodos não pode ser vista ou modificada, seja de forma deliberada ou por acidente.
- **Aplicaciones independientes con doble clic**: las aplicaciones compiladas también pueden transformarse en aplicaciones autónomas con su propio icono.
- **Modo apropiativo**: sólo se puede ejecutar código compilado en procesos apropiativos.

## Diferenças entre código interpretado e compilado

Apesar de aplicações funcionarem da mesma forma em modo compilado e interpretado, há diferenças quando escrever código que será compilado. O 4D interpreter é mais flexível que o compilador.

| Compilado                                                                                                                                                                                                                     | Interpretado                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Não pode ter um método com o mesmo nome que uma variável.                                                                                                                                                     | Nenhum erro é gerado, mas prioridade é dada ao método                                                  |
| Todas las variables deben estar digitadas, ya sea mediante una declaración (utilizando las palabras claves `var`, `#Declare`, o `Function`), o por el compilador en tiempo de compilación. | As variáveis podem ser digitadas no momento (mas não é recomendado)                 |
| Não é possível alterar o tipo de dados de qualquer variável ou array.                                                                                                                                         | É possível alterar o tipo de dados de uma variável ou de um array (não recomendado) |
| Não é possível mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional.                                                                       | Possível                                                                                               |
| Embora o compilador vá digitar a variável por você, deve especificar o tipo de dados de uma variável utilizando declarações quando o tipo de dados é ambíguo, como num formulário.                            |                                                                                                        |
| La función `Undefined` siempre devuelve False para las variables. As variáveis são sempre definidas.                                                                                          |                                                                                                        |
| Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o método, o código não deve chamar quaisquer comandos thread-unsafe ou outros métodos thread-unsafe.                        | As propriedades do processo preemptivo são ignoradas                                                   |
| El comando `IDLE` es necesario para llamar a 4D en bucles específicos                                                                                                                                                         | É sempre possível interromper 4D                                                                       |

## Utilização de directivas de compilação com o Intérprete

Os bancos não compilados não exigem diretivas de compilador. O intérprete digita automaticamente cada variável em função de como é utilizada em cada declaração, e uma variável pode voltar a ser escrita livremente em todo o banco de dados

Por causa da flexibilidade, é possível que um banco de dado possa atuar diretamente em modos interpretado e compilado.

Por exemplo, se escrever:

```4d
var MyInt : Integer
```

e noutra parte do projecto, escreve-se:

```4d
MyInt:=3.1416
```

En este ejemplo, `MyInt` se asigna el mismo valor (3) tanto en el modo interpretado como en el compilado, siempre que la directiva del compilador se interprete *antes* de la declaración de asignación.

O interpretador 4D usa as diretivas do compilador para digitar variáveis. Quando o intérprete encontra uma diretiva do compilador, digita a variável de acordo com a diretiva. Se uma expressão subsequente tentar atribuir um valor incorreto (por exemplo, atribuir um valor alfanumérico a uma variável numérica), a atribuição não será efectuada e gerará um erro.

A ordem na qual as duas declarações aparecem é irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. O intérprete, porém, não é sistemático. Interpreta as instruções pela ordem em que são executadas. Esta ordem, como é óbvio, pode mudar de sessão para sessão, dependendo do que o utilizador faz. Por isso, é importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declarações que contenham variáveis declaradas.

## Utilizar ponteiros para evitar redigitar

Uma variável não pode ser redigida de novo. No entanto, é possível utilizar um ponteiro para fazer referência a variáveis de diferentes tipos de dados. Por exemplo, o seguinte código é permitido nos modos interpretado e compilado:

```4d
var $p : Pointer
var $name : Text
var $age : Integer

$name:="Smith"
$age:=50

$p:=->$name //texto objetivo para el puntero
$p->:="Wesson" //asigna un valor texto

$p:=->$age  
// nuevo objetivo de tipo diferente para el puntero
$p->:=55 //asigna un valor
```

Imagine uma função que devolve o comprimento (número de caracteres) de valores que podem ser de qualquer tipo.

```4d
  // Calc_Length (quantos caracteres)
  // $vp = ponteiro para tipo de variável flexível, numérico, texto, tempo, booleano

#DECLARE($vp : Pointer) -> $length : Integer
var $result : Text  
$result:=String($vp->)
$length:=Length($result)
```

Em seguida, este método pode ser chamado:

```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```
