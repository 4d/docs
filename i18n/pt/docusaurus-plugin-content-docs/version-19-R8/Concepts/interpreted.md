---
id: interpreted-compiled
title: Modos interpretado e compilado
---

As aplicações 4D podem funcionar no modo **interpretado** ou **compilado**:

- no modo interpretado, as declarações são lidas e traduzidas em linguagem de máquina no momento da sua execução. Pode adicionar ou modificar o código sempre que precisar, a aplicação é actualizada automaticamente.
- no modo compilado, todos os métodos são lidos e traduzidos uma vez, na etapa de compilação. Posteriormente, a aplicação contém apenas instruções de nível de montagem, já não é possível editar o código.

As vantagens da compilação são:

- **Velocidade**: seu banco de dados é executa de 3 a 1.000 vezes mais rápido.
- **Verificação de código**: sua aplicação de banco de dados se analisa para comprovar a coerência do código. São detectados conflitos tanto lógicos como sintácticos.
- **Proteção:**: quando seu banco de dados for compilado, pode eliminar o código interpretado. Então, o banco de dados compilado é funcionalmente idêntico ao original, exceto que a estrutura e métodos não pode ser vista ou modificada, seja de forma deliberada ou por acidente.
- **Aplicações independentes/stand alone com duplo clique**: os bancos compilados também podem se transformar em aplicações independentes (arquivos.EXE) com seu proprio icone.
- **Modo preemptivo**: só codigo compilado pode ser executado em processos preemptivos.

## Diferenças entre código interpretado e compilado
Apesar de aplicações funcionarem da mesma forma em modo compilado e interpretado, há diferenças quando escrever código que será compilado. O 4D interpreter é mais flexível que o compilador.

| Compilado                                                                                                                                                                              | Interpretado                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Não pode ter um método com o mesmo nome que uma variável.                                                                                                                              | Nenhum erro é gerado, mas prioridade é dada ao método                               |
| Todas as variáveis devem ser digitadas, seja através de uma diretiva do compilador (ex: `C_LONGINT`), ou pelo compilador no momento da compilação.                                     | As variáveis podem ser digitadas no momento (mas não é recomendado)                 |
| Não é possível alterar o tipo de dados de qualquer variável ou array.                                                                                                                  | É possível alterar o tipo de dados de uma variável ou de um array (não recomendado) |
| Não é possível mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional.                                                | Possível                                                                            |
| Although the compiler will type the variable for you, you should specify the data type of a variable by using compiler directives where the data type is ambiguous, such as in a form. |                                                                                     |
| A função `Undefined` retorna sempre False para variáveis. As variáveis são sempre definidas.                                                                                           |                                                                                     |
| If you have checked the "Can be run in preemptive processes" property for the method, the code must not call any thread-unsafe commands or other thread-unsafe methods.                | Preemptive process properties are ignored                                           |
| The `IDLE` command is necessary to call 4D in specific loops                                                                                                                           | É sempre possível interromper 4D                                                    |

## Utilização de directivas de compilação com o Intérprete

Os bancos não compilados não exigem diretivas de compilador. O intérprete digita automaticamente cada variável em função de como é utilizada em cada declaração, e uma variável pode voltar a ser escrita livremente em todo o banco de dados

Por causa da flexibilidade, é possível que um banco de dado possa atuar diretamente em modos interpretado e compilado.

Por exemplo, se escrever:

```4d
C_LONGINT(MyInt)
```

e noutra parte do projecto, escreve-se:
```4d
MyInt:=3.1416
```

In this example, `MyInt` is assigned the same value (3) in both the interpreted and compiled modes, provided the compiler directive is interpreted *prior* to the assignment statement.

The 4D interpreter uses compiler directives to type variables. When the interpreter encounters a compiler directive, it types the variable according to the directive. If a subsequent statement tries to assign an incorrect value (e.g., assigning an alphanumeric value to a numeric variable) the assignment will not take place and will generate an error.

A ordem na qual as duas declarações aparecem é irrelevante para o compilador porque primeiro escaneia o banco inteiro por diretivas de compilador. The interpreter, however, is not systematic. It interprets statements in the order in which they are executed. That order, of course, can change from session to session, depending on what the user does. Por isso, é importante projetar seu banco de dados de forma que as diretivas de compilador sejam executadas antes de qualquer declarações que contenham variáveis declaradas.


## Utilizar ponteiros para evitar redigitar

Uma variável não pode ser redigida de novo. However, it is possible to use a pointer to refer to variables of different data types. For example, the following code is allowed in both interpreted and compiled modes:

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

Imagine a function that returns the length (number of charaters) of values that can be of any type.

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
