---
id: get-print-marker
title: Get print marker
slug: /commands/get-print-marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *numeroMarc* ) : Integer<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numeroMarc | Integer | &#8594;  | Número de marcador |
| Resultado | Integer | &#8592; | Posição do marcador |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Get print marker.Summary-->O comando Get print marker permite obter a posição atual de um marcador durante uma impressão.<!-- END REF--> 

Este comando pode ser utilizado nos dois contextos:

* Durante o evento de formulário On Header, no contexto dos comandos [PRINT SELECTION](print-selection.md) e [PRINT RECORD](print-record.md)
* Durante o evento de formulário On Printing Detail, no contexto do comando [Print form](print-form.md)
Se devolvem as coordenadas em píxels (1 píxel = 1/72 polegadas). 

Passe uma das constantes do tema *Área de formulário* no parâmetro *numeroMarc*:

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Form break0   | Inteiro longo | 300   |
| Form break1   | Inteiro longo | 301   |
| Form break2   | Inteiro longo | 302   |
| Form break3   | Inteiro longo | 303   |
| Form break4   | Inteiro longo | 304   |
| Form break5   | Inteiro longo | 305   |
| Form break6   | Inteiro longo | 306   |
| Form break7   | Inteiro longo | 307   |
| Form break8   | Inteiro longo | 308   |
| Form break9   | Inteiro longo | 309   |
| Form detail   | Inteiro longo | 0     |
| Form footer   | Inteiro longo | 100   |
| Form header   | Inteiro longo | 200   |
| Form header1  | Inteiro longo | 201   |
| Form header10 | Inteiro longo | 210   |
| Form header2  | Inteiro longo | 202   |
| Form header3  | Inteiro longo | 203   |
| Form header4  | Inteiro longo | 204   |
| Form header5  | Inteiro longo | 205   |
| Form header6  | Inteiro longo | 206   |
| Form header7  | Inteiro longo | 207   |
| Form header8  | Inteiro longo | 208   |
| Form header9  | Inteiro longo | 209   |

#### Exemplo 

Consulte o exemplo do comando [SET PRINT MARKER](set-print-marker.md). 

#### Ver também 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  