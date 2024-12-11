---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expressao* {; *formato* {; *horaComb*}} ) : Text<!-- END REF-->
<!--REF #_command_.String.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressao | Expression | &#8594;  | Expressão para qual vai retornar o formato string (pode ser um Real, Inteiro, Inteiro longo, Data, string hora, texto ou booleano) |
| formato | Integer, Text | &#8594;  | Formato exibiçao |
| horaComb | Time | &#8594;  | Hora a combinar se a expressão for uma data |
| Resultado | Text | &#8592; | Formato string da expressão |

<!-- END REF-->

#### Description 

<!--REF #_command_.String.Summary-->O comando String devolve em forma de cadeia alfanumérica a expressão de tipo numérica, Data, Hora, cadeia ou Booleana que se passa em *expressão*.<!-- END REF-->  
  
Se não passar o parâmetro opcional *formato*, a string é devolvida no formato como padrão do tipo de dados correspondente. Se passa *formato*, pode definir o formato da string resultante.  
  
O parâmetro opcional *horaComb* adiciona uma hora a uma data em um formato combinado. Apenas pode ser utilizado quando o parâmetro *expressao* for uma data (ver abaixo).  
  
**Expressões numéricas**  
  
Se *expressao* for uma expressão numérica (Real, Inteiro, Inteiro longo), pode passar o formato da string opcional. Estes são alguns exemplos:  
  
| **Exemplo**                       | **Resultado**           | **Comentários**                      |
| --------------------------------- | ----------------------- | ------------------------------------ |
| String(2^15)                      | "32768"                 | Formato por padrão                   |
| String(2^15;"###,##0 habitantes") | "32,768 habitantes"     |                                      |
| String(1/3;"##0.00000")           | "0.33333"               |                                      |
| String(1/3)                       | "0.3333333333333330000" | Formato por padrão(\*)               |
| String(Arctan(1)\*4)              | "3.141592653589790000"  | Formato por padrão(\*)               |
| String(Arctan(1)\*4;"##0.00")     | "3.14"                  |                                      |
| String(-1;"&x")                   | "0xFFFFFFFF"            |                                      |
| String(-1;"&$")                   | "$FFFFFFFF"             |                                      |
| String(0 ?+ 7;"&x")               | "0x0080"                |                                      |
| String(0 ?+ 7;"&$")               | "$80"                   |                                      |
| String(0 ?+ 14;"&x")              | "0x4000"                |                                      |
| String(0 ?+ 14;"&$")              | "$4000"                 |                                      |
| String(50,3;"&xml")               | "50.3"                  | Sempre "." como um separador decimal |
| String(Num(1=1);"True;;False")    | "True"                  |                                      |
| String(Num(1=2);"True;;False")    | "False"                 |                                      |
| String(Log(-1))                   | ""                      | Número indefinido                    |
| String(1/0)                       | "INF"                   | Número infinito positivo             |
| String(-1/0)                      | "-INF"                  | Número infinito positivo             |
  
  
(\*) A partir de 4D v14 R3, o algoritmo para converter valores reais para texto é baseado em 13 dígitos significativos (ao contrários dos 15 dígitos de versões anteriores).  
  
O formato é especificado da mesma forma que para um campo numérico em um formulário. Para maior informação sobre formatos numéricos, consulte a seção *Formatos de saída* do manual de Desenho de 4D. Igualmente pode passar o nome de um estilo personalizado em formato. O nome do estilo personalizado deve estar precedido pelo caractere “*|*”.  
  
**Nota:** a função String não é compatível com campos de tipo "Inteiro 64 bits" em modo compilado.  
  
  
**Expressões de tipo Data** 

Se *expressao* for de tipo Data, a string é devolvida no formato como padrão definido no sistema.  
No parâmetro *formato*, pode passar uma das constantes descritas abaixo (tema *Formatos de saída de datas*):

Neste caso, também pode passar uma hora no parâmetro *Horacomb*. Este parâmetro lhe permite combinar uma data e uma hora com o objetivo de gerar marcadores de tempo de acordo com as normas em vigor (constantes ISO Date, ISO Date GMT e Date RFC 1123). Estes formatos são particularmente úteis no contexto dos processos XML e Web. O parâmetro *horaComb* apenas é utilizado quando o parâmetro *expressao* for uma data.   

| Constante                   | Tipo          | Valor | Comentário                                                                                                                          |
| --------------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null date          | Inteiro longo | 100   | Para ser adicionado à constante de formato. Indica que, no caso de valor null, 4D deve retornar uma string vazia ao invés de zeros. |
| Date RFC 1123               | Inteiro longo | 10    |                                                                                                                                     |
| Internal date abbreviated   | Inteiro longo | 6     |                                                                                                                                     |
| Internal date long          | Inteiro longo | 5     |                                                                                                                                     |
| Internal date short         | Inteiro longo | 7     |                                                                                                                                     |
| Internal date short special | Inteiro longo | 4     |                                                                                                                                     |
| ISO Date                    | Inteiro longo | 8     | 2006-12-29T00:00:00                                                                                                                 |
| ISO Date GMT                | Inteiro longo | 9     | 2010-09-13T16:11:53Z                                                                                                                |
| System date abbreviated     | Inteiro longo | 2     |                                                                                                                                     |
| System date long            | Inteiro longo | 3     |                                                                                                                                     |
| System date short           | Inteiro longo | 1     |                                                                                                                                     |
  
  
Nota: Formatos podem variar dependendo das configurações do sistema.  
  
Estes são alguns exemplos de formatos simples (asumindo que a data atual é 

```json
2/29/2006): $vsResult:=String(Current date) //$vsResult toma el valor "12/29/06"
 $vsResult:=String(Current date;Internal date long) // $vsResult toma el valor "December 29, 2006"
 $vsResult:=String(Current date;ISO Date GMT) // $vsResult toma el valor "2009-03-04T23:00:00"
```

```4d

//``

**Notas para os formatos combinados data/hora:**

* O formato ISO Date corresponde à norma ISO8601\. Este formato contém uma data e uma hora. Por exemplo, a data de 31 de maio de 2006 à 1:20 p.m. se escreve 2006-05-31T13:20:00\. Se não passar o parâmetro adHOra, a parte hora é preenchida com 0 (ver exemplo). Este formato expressa a data e hora local.  
```4d  
 $minhadata:=String(Current date;ISO Date) // devolve por exemplo 2010-09-13T00:00:00  
 $minhadata:=String(Current date;ISO Date;Current time) // devolve 2010-09-13T18:11:53  
```
* O formato ISO Date GMT é similar ao formato ISO Date, exceto que expressa a data e a hora com relação a zona do fuso horário (hora GMT).  
```4d  
 $minhadata:=String(Current date;ISO Date GMT;Current time) // retorna 2010-09-13T16:11:53Z  
```  
    
Note que o caractere "Z" ao final indica o formato GMT.  
Se apenas passa uma data, o comando devolve a data à meia noite (hora local) expressa em hora GMT o qual pode fazer com que a data se mova para frente ou para trás, dependendo da zona horária local:
* O formato Date RFC 1123 permite formatar um conjunto data/hora seguindo a norma definida pelos RFC 822 e 1123\. Este formato é necessário, por exemplo, para fixar a data de vencimento das cookies em um cabeçalho HTTP.  
```4d  
 $minhadata:=String(Current date;Date RFC 1123;Current time) //devolve, por exemplo Fri, 10 Sep 2010 13:07:20 GMT  
```  
    
A hora expressa considera a hora do fuso horário (zona GMT). Se passar uma data, o comando retorna a data com a hora da meia noite (hora loca) expressa em hora GMT o qual pode fazer com que a data se mova para frente ou para trás, dependendo da zona horária local:  
```4d  
 $minhadata:=String(Current date;Date RFC 1123) // devolve Thu, 09 Sep 2010 22:00:00 GMT  
```

**Expressões de tipo Hora**  
  
Se *expressao* for do tipo Hora, a string é devolvida utilizando o formato como padrão HH:MM:SS. Pode passar no parâmetro *formato* uma das seguintes constantes do tema "*Formatos de saída de hora*"):  
  
| Constante                    | Tipo          | Valor | Comentário                                                                                                                                                                                                             |
| ---------------------------- | ------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | Inteiro longo | 100   |                                                                                                                                                                                                                        |
| HH MM                        | Inteiro longo | 2     |                                                                                                                                                                                                                        |
| HH MM AM PM                  | Inteiro longo | 5     |                                                                                                                                                                                                                        |
| HH MM SS                     | Inteiro longo | 1     |                                                                                                                                                                                                                        |
| Hour min                     | Inteiro longo | 4     |                                                                                                                                                                                                                        |
| Hour min sec                 | Inteiro longo | 3     |                                                                                                                                                                                                                        |
| ISO time                     | Inteiro longo | 8     | 0000-00-00T01:02:03\. Corresponde ao padrão ISO8601 e contém, em teoria, uma data e uma hora. Já que o formato não é compatível com datas/horas, a parte data é preenchida com 0s. Este formato expressa a hora local. |
| Min sec                      | Inteiro longo | 7     |                                                                                                                                                                                                                        |
| MM SS                        | Inteiro longo | 6     |                                                                                                                                                                                                                        |
| System time long             | Inteiro longo | 11    |                                                                                                                                                                                                                        |
| System time long abbreviated | Inteiro longo | 10    |                                                                                                                                                                                                                        |
| System time short            | Inteiro longo | 9     |                                                                                                                                                                                                                        |

**Notas** **:**

* O formato ISO Date Time corresponde à norma ISO8601\. Este formato contém uma data e uma hora. Por exemplo, a data de 31 de maio de 2006 à 1:20 p.m. é escrita 2006-05-31T13:20:00\. Isso se utiliza para os processos XML e com serviços Web. 4D não permite armazenar uma data e hora em um campo apenas. Entretanto, é possível administrar as datas neste formato utilizando o comando String
* A constante Blank if null deve ser adicionada ao formato; indica que em caso de um valor nulo 4D deve devolver uma string vazia ao invés de zeros.

Estes exemplos assumem que a hora atual 5:30 PM e 45 segundos: 

```4d
 $vsResult:=String(Current time) // $vsResult toma o valor "17:30:45"
 $vsResult:=String(Current time;Hour Min Sec) // $vsResult toma o valor "17 horas 30 minutos 45 segundos"
```

**Expressões de tipo string**

Se *expressao* for de tipo Alfa ou Texto, o comando devolve o mesmo valor que se passa no parâmetro. Isso pode ser útil particularmente em programação genérica utilizando ponteiros.  
Neste caso, se for passado, o parâmetro *formato* será ignorado.

**Expressões de tipo Booleano**

Se *expressao* for de tipo Booleano, o comando devolve a string “True” ou “False” na linguagem da aplicação (por exemplo, “Vrai” ou “Faux” em uma versão francesa de 4D).  
  
Neste caso se for passado, o parâmetro *formato* será ignorado.

  
**Expressões indefinidas**  
Se a expressão é avaliada como indefinida, o comando devolve uma string vazia. Isso é útil quando se espera que o resultado de uma expressão (por exemplo, um atributo objeto) seja uma string, mesmo se puder ser indefinido.

  
Expressões Null  
Se a expressão for avaliada como Null, o comando devolve a string "null". Isto é útil quando se esperar que o resultado de uma expressão (por exemplo, um atributo objeto) seja uma string, mesmo se puder ser null.

#### Ver também 

[Bool](bool.md)  
[Date](date.md)  
[Num](num.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 10 |
| Thread-seguro | &check; |
| Proibido no servidor ||


