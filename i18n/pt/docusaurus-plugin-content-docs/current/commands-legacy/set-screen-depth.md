---
id: set-screen-depth
title: SET SCREEN DEPTH
slug: /commands/set-screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SET SCREEN DEPTH.Syntax-->**SET SCREEN DEPTH** ( *depth* {; *cor* {; *tela*}} )<!-- END REF-->
<!--REF #_command_.SET SCREEN DEPTH.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| depth | Integer | &srarr; | Profundidade da tela (número de cores = 2 ^ Profundidade da tela) |
| cor | Integer | &srarr; | 1 = Cor, 0 = Escala de cinzas |
| tela | Integer | &srarr; | Número da tela, ou tela principal, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET SCREEN DEPTH.Summary-->SET SCREEN DEPTH permite modificar a profundidade e os parâmetros de cores/escala de cinzas da tela cujo número se passa na *tela*.<!-- END REF--> Se omitido este parâmetro, o comando se aplica à tela principal. 

Para conhecer os valores a passar em *cor* e *profundidad*e, consulte a descrição do comando [SCREEN DEPTH](screen-depth.md "SCREEN DEPTH").

#### Ver também 

[SCREEN DEPTH](screen-depth.md)  