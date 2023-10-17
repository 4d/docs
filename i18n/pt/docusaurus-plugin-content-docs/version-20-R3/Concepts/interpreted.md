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
- **Aplicações autônomas com duplo clique**: as aplicações compiladas também podem se transformar em aplicações independentes com seu próprio ícone.
- **Modo preemptivo**: só codigo compilado pode ser executado em processos preemptivos.

## Diferenças entre código interpretado e compilado

Apesar de aplicações funcionarem da mesma forma em modo compilado e interpretado, há diferenças quando escrever código que será compilado. O 4D interpreter é mais flexível que o compilador.

| Compilado                                                                                                                                                                              | Interpretado                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Não pode ter um método com o mesmo nome que uma variável.                                                                                                                              | Nenhum erro é gerado, mas prioridade é dada ao método                               |
| Todas as variáveis têm de ser tipadas, quer através de uma declaração (utilizando as palavras-chave `var`, `#Declare`, ou `Function`), quer pelo compilador durante a compilação.      | As variáveis podem ser digitadas no momento (mas não é recomendado)                 |
| Não é possível alterar o tipo de dados de qualquer variável ou array.                                                                                                                  | É possível alterar o tipo de dados de uma variável ou de um array (não recomendado) |
| Não é possível mudar um array unidimensional para um array bidimensional ou mudar um array bidimensional para uma array unidimensional.                                                | Possível                                                                            |
| Embora o compilador vá digitar a variável por você, deve especificar o tipo de dados de uma variável utilizando declarações quando o tipo de dados é ambíguo, como num formulário.     |                                                                                     |
| A função `Undefined` retorna sempre False para variáveis. As variáveis são sempre definidas.                                                                                           |                                                                                     |
| Se tiver marcado a propriedade "Pode ser executado em processos preemptivos" para o método, o código não deve chamar quaisquer comandos thread-unsafe ou outros métodos thread-unsafe. | As propriedades do processo preemptivo são ignoradas                                |
| O comando `IDLE` é necessário para chamar 4D em loops específicos                                                                                                                      | É sempre possível interromper 4D                                                    |

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

Neste exemplo, `MyInt` é atribuído ao mesmo valor (3) nos modos interpretado e compilado, desde que a diretiva do compilador seja interpretada *antes* da instrução de atribuição.

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

$p:=->$name //alvo de texto para o ponteiro
$p->:="Wesson" //atribui um valor de texto

$p:=->$age  
//novo alvo de tipo diferente para o ponteiro
$p->:=55 //atribui um valor numérico
```

Imagine uma função que devolve o comprimento (número de caracteres) de valores que podem ser de qualquer tipo.

```4d
  // Calc_Length (quantos caracteres)
  // $vp = ponteiro para um tipo de variável flexível, numérica, texto, tempo, booleana

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

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4) ALERT("Total length: "+String($vLength))
```
