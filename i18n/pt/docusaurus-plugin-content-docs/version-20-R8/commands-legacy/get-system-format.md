---
id: get-system-format
title: GET SYSTEM FORMAT
slug: /commands/get-system-format
displayed_sidebar: docs
---

<!--REF #_command_.GET SYSTEM FORMAT.Syntax-->**GET SYSTEM FORMAT** ( *formato* ; *valor* )<!-- END REF-->
<!--REF #_command_.GET SYSTEM FORMAT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| formato | Integer | &#8594;  | Formato de sistema a recuperar |
| valor | Text | &#8592; | Formato de sistema a recuperar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET SYSTEM FORMAT.Summary-->O comando GET SYSTEM FORMAT devolve o valor atual de vários parâmetros regionais definidos no sistema operativo.<!-- END REF--> Este comando pode utilizar-se para criar formatos personalizados “automáticos” baseados nas preferências do sistema. 

No parâmetro *formato*, passe o tipo do parâmetro do qual queira conhecer o valor. O resultado é devolvido diretamente pelo sistema no parâmetro *valor* como uma cadeia de caracteres. Em *formato*, deve passar uma das seguintes constantes do tema *Formato de sistema* . Esta é a descrição destas constantes:

| Constante                  | Tipo          | Valor | Comentário                                                                                |
| -------------------------- | ------------- | ----- | ----------------------------------------------------------------------------------------- |
| Currency symbol            | Inteiro longo | 2     | Símbolo de moeda (ex.: “$”)                                                               |
| Date separator             | Inteiro longo | 13    | Separador utilizado em formatos de data (ex.: “/”)                                        |
| Decimal separator          | Inteiro longo | 0     | Separador decimal (ex.: “.”)                                                              |
| Short date day position    | Inteiro longo | 15    | Posição de dia no formato de data curto: “1” = esquerda, “2” = no meio, “3” = à direita   |
| Short date month position  | Inteiro longo | 16    | Posição do mês em formato de data curta: “1” = esquerda, “2” = no meio, “3” = à direita   |
| Short date year position   | Inteiro longo | 17    | Posição do ano em formato de data curta: “1” = esquerda, “2” = no meio, “3” = à direita   |
| System date long pattern   | Inteiro longo | 8     | Formato de saída de data longa “dddd MMMM yyyy”                                           |
| System date medium pattern | Inteiro longo | 7     | Formato de saída de data média na forma “dddd MMMM yyyy”                                  |
| System date short pattern  | Inteiro longo | 6     | Formato de saída de data curta na forma “dddd MMMM yyyy”                                  |
| System time AM label       | Inteiro longo | 18    | Etiqueta adicional para uma hora antes de meio dia em formatos de 12 horas (ex.: “Manhã”) |
| System time long pattern   | Inteiro longo | 5     | Formato de saída de hora longa na forma “HH:MM:SS”                                        |
| System time medium pattern | Inteiro longo | 4     | Formato de saída de hora média na forma “HH:MM:SS”                                        |
| System time PM label       | Inteiro longo | 19    | Etiqueta adicional para uma hora logo do meio dia em formatos de 12 horas (ex.: “Tarde”)  |
| System time short pattern  | Inteiro longo | 3     | Formato de saída de hora curta em forma “HH:MM:SS”                                        |
| Thousand separator         | Inteiro longo | 1     | Separador de milhares (ex.: “,”)                                                          |
| Time separator             | Inteiro longo | 14    | Separador utilizado em formatos de hora (ex.: “:”)                                        |

#### Ver também 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 994 |
| Thread-seguro | &check; |


