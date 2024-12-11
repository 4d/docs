---
id: time
title: Time
slug: /commands/time
displayed_sidebar: docs
---

<!--REF #_command_.Time.Syntax-->**Time** ( *horaString* ) : Time<!-- END REF-->
<!--REF #_command_.Time.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| horaText | Text, Integer | &#8594;  | Hora para a qual devolver o número de segundos |
| Resultado | Time | &#8592; | Hora especificada por horaString |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Time.Summary-->O comando **Time** retorna uma expressão de tipo Hora equivalente à hora especificada como uma string por *horaString*.<!-- END REF-->

O parâmetro *horaString* deve conter:

* Uma cadeia que contenha uma hora expressa em um dos seguintes formatos de hora padrão de 4D correspondentes à linguagem de seu sistema (para maior informação, consulte a descrição do comando [String](string.md)).
* Um inteiro longo que representa o número de segundos passados desde 00:00:00.

**Nota:** se a expressão *valHora* se avaliar como indefinida, **Time** devolve uma hora vazia (00:00:00). Isso é útil quando se espera que o resultado de uma expressão (por exemplo, um atributo objeto) seja uma hora, mesmo se puder ser indefinida.

#### Exemplo 1 

O seguinte exemplo mostra uma caixa de alerta com a mensagem “1:00 P.M. = 13 horas 0 minutos”:

```4d
 ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))
```

#### Exemplo 2 

Pode expressar todo valor numérico como uma hora:

```4d
 vTime:=Time(10000)
  //vTime is 02:46:40
 vTime2:=Time((60*60)+(20*60)+5200)
  //vTime2 is 02:46:40
```

#### Ver também 

[ARRAY TIME](array-time.md)  
[Bool](bool.md)  
[String](string.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 179 |
| Thread-seguro | &check; |
| Proibido no servidor ||


