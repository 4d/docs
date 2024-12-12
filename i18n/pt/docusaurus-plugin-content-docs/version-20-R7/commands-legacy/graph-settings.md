---
id: graph-settings
title: GRAPH SETTINGS
slug: /commands/graph-settings
displayed_sidebar: docs
---

<!--REF #_command_.GRAPH SETTINGS.Syntax-->**GRAPH SETTINGS** ( *graf* ; *xmin* ; *xmax* ; *ymin* ; *ymax* ; *xprop* ; *xgrid* ; *ygrid* ; *titulo* {; *titulo2* ; ... ; *tituloN*} )<!-- END REF-->
<!--REF #_command_.GRAPH SETTINGS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| graf | Picture | &#8594;  | Área da gráfica ou da variável imagem |
| xmin | Integer, Date, Time | &#8594;  | Valor mínimo do eixo das x para gráfico proporcional (linhas ou pontos somente) |
| xmax | Integer, Date, Time | &#8594;  | Valor máximo do eixo das x para gráfico proporcional (linhas ou pontos somente) |
| ymin | Integer | &#8594;  | Valor mínimo do eixo y |
| ymax | Integer | &#8594;  | Valor máximo do eixo y |
| xprop | Boolean | &#8594;  | TRUE para eixo x proporcional; FALSE para eixo x normal (linhas ou pontos somente) |
| xgrid | Boolean | &#8594;  | TRUE para grade eixo x; FALSE para não grade no eixo x (somente se xprop é TRUE) |
| ygrid | Boolean | &#8594;  | TRUE para a grade do eixo y; FALSE para as grades que não forem do eixo y |
| titulo | Text | &#8594;  | Título para a legenda do gráfico |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GRAPH SETTINGS.Summary-->GRAPH SETTINGS permite modificar os parâmetros dos gráficos mostrados em um formulário.<!-- END REF--> O gráfico deve ter sido definido com o comando [GRAPH](graph.md). GRAPH SETTINGS não tem efeito em um gráfico de tipo setores. Este comando deve ser chamado obrigatoriamente no mesmo processo que o formulário.

**Nota:** não deve chamar este comando se o gráfico foi gerado utilizando o comando [GRAPH](graph.md) com o parámetro *grafParams* de tipo [Objeto](# "Estruturas de dados como objetos 4D nativos"). Consulte a descrição do comando [GRAPH](graph.md) para mais informação.

Os parâmetros *xmin*, *xmax*, *ymin*, e *ymax* fixam os valores mínimos e máximos para seus respectivos eixos do gráfico. Se o valor de um par de estes parâmetros é um valor nulo, (0, ?00:00:00?, ou !00/00/00!, dependendo do tipo de dado), serão utilizados os valores do gráfico automático. Os parâmetros *xmin* e *xmax* só são levados em consideração para gráficos proporcionais (*xprop* é **True**).

O parâmetro *xprop* ativa o traçado proporcional para gráficos de linhas (tipo 4), gráficos de área (tipo 5) e gráficos de pontos (tipo 6). Quando este parâmetro é TRUE, cada ponto será traçado sobre o eixo x de acordo ao valor do ponto, e depois só se os valores são numéricos, hora ou data.

Os parâmetros *xgrid* e *ygrid* mostram ou ocultam as linhas de grade. Uma grade para o eixo x será mostrada só se trata de um gráfico de pontos ou de linhas proporcional.

Os parâmetro(s) *titulo* especificam os títulos das legendas.

#### Exemplo 

Ver o exemplo do comando [GRAPH](graph.md "GRAPH").

#### Ver também 

[GRAPH](graph.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 298 |
| Thread-seguro | &cross; |


