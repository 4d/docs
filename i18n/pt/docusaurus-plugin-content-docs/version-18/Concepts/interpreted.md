---
id: interpreted-compiled
title: Modos interpretado e compilado
---

As aplicações 4D podem funcionar no modo **interpretado** ou **compilado**:

- no modo interpretado, as declarações são lidas e traduzidas em linguagem de máquina no momento da sua execução. Pode adicionar ou modificar o código sempre que precisar, a aplicação é actualizada automaticamente.
- no modo compilado, todos os métodos são lidos e traduzidos uma vez, na etapa de compilação. Posteriormente, a aplicação contém apenas instruções de nível de montagem, já não é possível editar o código.

As vantagens da compilação são:

- **Speed**: Your database can run from 3 to 1,000 times faster.
- **Code checking**: Your database application is scanned for the consistency of code. São detectados conflitos tanto lógicos como sintácticos.
- **Protection**: Once your database is compiled, you can delete the interpreted code. Then, the compiled database is functionally identical to the original, except that the structure and methods cannot be viewed or modified, deliberately or inadvertently.
- **Stand-alone double-clickable applications**: compiled databases can also be transformed into stand-alone applications (.EXE files) with their own icon.
- **Modo preemptivo**: só codigo compilado pode ser executado em processos preemptivos.

## Diferenças entre código interpretado e compilado
Apesar de aplicações funcionarem da mesma forma em modo compilado e interpretado, há diferenças quando escrever código que será compilado. O 4D interpreter é mais flexível que o compilador.

| Compilado                                                                                                                                                                                            | Interpretado                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Não pode ter um método com o mesmo nome que uma variável.                                                                                                                                            | Nenhum erro é gerado, mas prioridade é dada ao método                               |
| Todas as variáveis devem ser digitadas, seja através de uma diretiva do compilador (ex: `C_LONGINT`), ou pelo compilador no momento da compilação.                                                   | As variáveis podem ser digitadas no momento (mas não é recomendado)                 |
| Não é possível alterar o tipo de dados de qualquer variável ou array.                                                                                                                                | É possível alterar o tipo de dados de uma variável ou de um array (não recomendado) |
| Não é possível mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional.                                                              | Possível                                                                            |
| Embora o compilador vá digitar a variável por você, deve especificar o tipo de dados de uma variável utilizando as directivas do compilador quando o tipo de dados for ambíguo, como num formulário. |                                                                                     |
| A função `Undefined` retorna sempre False para variáveis. As variáveis são sempre definidas.                                                                                                         |                                                                                     |
| Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o método, o código não deve chamar quaisquer comandos thread-unsafe ou outros métodos thread-unsafe.               | As propriedades do processo preemptivo são ignoradas                                |
| O comando `IDLE` é necessário para chamar 4D em loops específicos                                                                                                                                    | É sempre possível interromper 4D                                                    |

## Utilização de directivas de compilação com o Intérprete

Compiler directives are not required for uncompiled databases. The interpreter automatically types each variable according to how it is used in each statement, and a variable can be freely retyped throughout the database.

Because of this flexibility, it is possible that a database can perform differently in interpreted and compiled modes.

Por exemplo, se escrever:

```4d
C_LONGINT(MyInt)
```

e noutra parte da base de dados, escreve-se:
```4d
MyInt:=3.1416
```

Neste exemplo, `MyInt` é atribuído ao mesmo valor (3) nos modos interpretado e compilado, desde que a diretiva do compilador seja interpretada *antes* da instrução de atribuição.

O interpretador 4D usa as diretivas do compilador para digitar variáveis. Quando o intérprete encontra uma diretiva do compilador, digita a variável de acordo com a diretiva. Se uma expressão subsequente tentar atribuir um valor incorreto (por exemplo, atribuir um valor alfanumérico a uma variável numérica), a atribuição não será efectuada e gerará um erro.

The order in which the two statements appear is irrelevant to the compiler, because it first scans the entire database for compiler directives. O intérprete, porém, não é sistemático. Interpreta as instruções pela ordem em que são executadas. Esta ordem, como é óbvio, pode mudar de sessão para sessão, dependendo do que o utilizador faz. For this reason, it is important to design your database so that your compiler directives are executed prior to any statements containing declared variables.


## Utilizar ponteiros para evitar redigitar

Uma variável não pode ser redigida de novo. No entanto, é possível utilizar um ponteiro para fazer referência a variáveis de diferentes tipos de dados. Por exemplo, o seguinte código é permitido nos modos interpretado e compilado:

```4d
C_POINTER($p)
C_TEXT($name)
C_LONGINT($age)

$name:="Smith"
$age:=50

$p:=->$name //alvo de texto para o ponteiro
$p->:="Wesson" //atribui um valor de texto

$p:=->$age  
//novo alvo de tipo diferente para o ponteiro
$p->:=55 //atribui um valor numérico
```

Imagine uma função que devolve o comprimento (número de caracteres) de valores que podem ser de qualquer tipo.

```4d
  // Calc_Length (how many characters)
  // $1 = pointer to flexible variable type, numeric, text, time, boolean C_POINTER($1)
C_TEXT($result) C_LONGINT($0)
$result:=String($1->)
$0:=Length($result)
```

Em seguida, este método pode ser chamado:
```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))
```
