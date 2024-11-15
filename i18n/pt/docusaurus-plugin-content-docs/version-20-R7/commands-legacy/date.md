---
id: date
title: Date
slug: /commands/date
displayed_sidebar: docs
---

<!--REF #_command_.Date.Syntax-->**Date** ( *dataCadeia* ) : Date<!-- END REF-->
<!--REF #_command_.Date.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dataCadeia | Text, Date | &#8594;  | Cadeia que contém a data a resolver |
| Resultado | Date | &#8592; | Data |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Date.Summary-->O comando Date avalia *dataCadeia* e retorna uma data.<!-- END REF-->

O parâmetro *dataCadeia* deve respeitar o formato data ISO ou os parâmetros regionais do sistema.

**Formato data ISO**  
A cadeia deve estar no formato: "AAAA-MM-DD**T**HH:MM:SS", por exemplo "2013-11-20T10:20:00". Neste caso, **Date** avalia o parâmetro *dataCadeia* corretamente, sem importar a configuração da linguagem atual. Os decimais de segundos, precedidos por um ponto, se suporta (exemplo: "2013-11-20T10:20:00.9854").   
Se o formato *dataCadeia* não respeita este esquema ISO, logo a data se avalia como um formato data curto baseado nos parâmetros regionais do sistema.

**Nota:** a partir de 4D v14, é recomendado utilizar o formato "YYYY-MM-DDTHH:MM:SS**Z**", conforme a norma ISO e permitindo expressar a zona horária.

**Parâmetros regionais**  
Se *dataCadeia* não corresponde ao formato ISO, os parâmetros regionais definidos no sistema operativo para uma data curta são utilizados para a avaliação. Por exemplo, na versão em espanhol de 4D, por padrão a data deve estar na ordem MM/DD/AA (mês, dia, ano). O mês e o dia possam ter um ou dois dígitos. O ano pode ser de dois ou quatro dígitos. Se o ano é de dois dígitos, então Date considera se a data pertence ao século 20 ou 21 em função do valor introduzido. Por padrão o valor pivô é 30:

* Se o valor introduzido é superior ou igual a 30, 4D considera que a data pertence ao século 20 e adiciona 19 a frente do valor.
* Se o valor introduzido é inferior a 30, 4D considera que a data pertence ao século 21 e agrega 20 à frente do valor.

Este mecanismo pode ser configurado utilizando o comando [SET DEFAULT CENTURY](set-default-century.md).   
Os seguintes caracteres são separadores de datas válidas: barra oblíqua (/), espaço, ponto (.), vírgula (,) e hífen (-).  
  
Se passar uma data inválida (tal como "13/35/94" ou "aa/12/94"), em *dataCadeia*, Date devolverá uma data inválida (!00/00/00!). É sua responsabilidade verificar que *dataCadeia* seja uma data válida.  
Se avaliar a expressão dateString como undefined, Date retorna uma data vazia (00/00/00). Isso é útil quando espera o resultado de uma expressão (por exemplo um atributo de objeto) possa ser uma data, mesmo se puder ser indefido (por exemplo um atributo objeto).  
  
Nota: a partir de 4D v16 R6, datas podem ser armazenadas em atributos de objeto como valores de tipo de dados. Em versões anteriores, só podiam ser armazenadas como strings (para saber mais sobre essa opção, veja a seção *Página Compatibilidade*, "Use date type instead of ISO date format in objects"). Para saber se um atributo contém uma data armazenada como uma string ou como uma data, precisa usar o comando [Value type](value-type.md) (ver último exemplo).

**Expressão tipo data**  
Se a *expresao for* do tipo de data, **Date** devolve a dataa passada no parâmetro 'tal como está'. Isto é particularmente útil no contexto da programação genérica utilizando ponteiros ou atributos de objeto.

#### Exemplo 1 

O exemplo a seguir utiliza uma caixa para que o usuário introduza uma data. A string introduzida pelo usuário é convertida em uma data e é guardada na variável *reqData*: 

```4d
 vdReqData:=Date(Request("Por favor introduza uma data:";String(Current date)))
 If(OK=1)
  // Fazer algo com a data guardada em vdReqData
 End if
```

#### Exemplo 2 

Os exemplos abaixo mostram vários casos:

```4d
 vdDate:=Date("12/25/94") //12/25/94 on a US system
 vdDate2:=Date("40/40/94") //00/00/00
 vdDate3:=Date("It was the 6/30/2016") //06/30/16
 var $vobj : Object
 $vobj:=New object("expDate";"2020-11-17T00:00:00.0000")
 vdDate4:=Date($vobj.expDate) //11/17/20
 vdDate5:=Date($vobj.creationDate) //00/00/00
```

#### Exemplo 3 

Data de avaliação baseada em uma data em formato ISO:

```4d
 $vtDateISO:="2013-06-05T20:00:00"
 $vDate:=Date($vtDateISO)
  //$vDate representa o 5 de junho de 2013 sem importar a linguagem do sistema
```

#### Exemplo 4 

Se quiser obter uma data de um atributo de objeto, qualquer que seja a opção atual de atributo de armazenamento de data:

```4d
 If(Value type($myObj.myDate)=Is date) //está armazenado como data, não precisa converter
    $vDate:=$myObj.myDate
 Else //it's stored as string
    $vDate:=Date($myObj.myDate)
 End if
```

#### Ver também 

[Bool](bool.md)  
[String](string.md)  