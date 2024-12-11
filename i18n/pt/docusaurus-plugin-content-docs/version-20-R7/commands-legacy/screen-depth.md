---
id: screen-depth
title: SCREEN DEPTH
slug: /commands/screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN DEPTH.Syntax-->**SCREEN DEPTH** ( *profundidade* ; *cor* {; *tela*} )<!-- END REF-->
<!--REF #_command_.SCREEN DEPTH.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| profundidade | Integer | &#8592; | Profundidade da tela (número de cores = 2 ^ profundidade) |
| cor | Integer | &#8592; | 1 = Tela cor 0 = Tela branco e preto ou escala de cinzas |
| tela | Integer | &#8594;  | Número da tela, ou tela principal se omitida |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SCREEN DEPTH.Summary-->O comando SCREEN DEPTH devolve nos parâmetros *profundidade* e *cor* a informação sobre o monitor.<!-- END REF--> 

Depois da chamada:

* Se devolve a profundidade da tela em *profundidad*e. A profundidade da tela elevada como potência de 2 permite conhecer o número de cores mostrados em seu monitor. Por exemplo, se seu monitor está definido para 256 cores (2^8), a profundidade de sua tela é 8\. As seguintes são constantes predefinidas oferecidas por 4D:

| Constante                 | Tipo          | Valor |
| ------------------------- | ------------- | ----- |
| Black and white           | Inteiro longo | 0     |
| Four colors               | Inteiro longo | 2     |
| Sixteen colors            | Inteiro longo | 4     |
| Two fifty six colors      | Inteiro longo | 8     |
| Thousands of colors       | Inteiro longo | 16    |
| Millions of colors 24 bit | Inteiro longo | 24    |
| Millions of colors 32 bit | Inteiro longo | 32    |
  
  
Se o monitor está configurado para mostrar cores, se devolve *1* em *cor*. Se o monitor está configurado para mostrar escala de cinzas, se devolve *0* em *cor*. Note que este valor é significativo na plataforma Macintosh. As seguintes são constantes predefinidas oferecidas por 4D: 

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Is gray scale | Inteiro longo | 0     |
| Is color      | Inteiro longo | 1     |

  
* O parâmetro opcional *tela* especifica o monitor para o qual queira obter a informação. Se omitido o parâmetro *tela*, o comando devolve a profundidade da tela principal.

#### Exemplo 

Sua aplicação mostra vários gráficos a cor. Pode escrever em alguma parte em sua base:

```4d
 SCREEN DEPTH($vlProf;$vlCor)
 If($vlProf<8)
    ALERT("Los formulários se veriam melhor se o monitor"+" estivesse configurado para mostrar 256 cores ou mais.")
 End if
```

#### Ver também 

[Count screens](count-screens.md)  


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 439 |
| Thread-seguro | &check; |
| Proibido no servidor ||


