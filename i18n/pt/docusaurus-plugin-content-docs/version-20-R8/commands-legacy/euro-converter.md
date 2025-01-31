---
id: euro-converter
title: Euro converter
slug: /commands/euro-converter
displayed_sidebar: docs
---

<!--REF #_command_.Euro converter.Syntax-->**Euro converter** ( *valor* ; *deMoeda* ; *paraMoeda* ) : Real<!-- END REF-->
<!--REF #_command_.Euro converter.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valor | Real | &#8594;  | Valor a converter |
| deMoeda | Text | &#8594;  | Código da moeda na qual o valor é expresso |
| paraMoeda | Text | &#8594;  | Código da moeda para o qual o valor será convertido |
| Resultado | Real | &#8592; | Valor convertido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Euro converter.Summary-->O comando Euro converter permite realizar todo tipo de conversão de valores entre as diferentes moedas de países que pertencem à “Zona Euro” e ao Euro mesmo.<!-- END REF-->

Pode converter:

* uma moeda nacional em Euros,
* Euros em uma moeda nacional,
* uma moeda nacional em outra moeda nacional. Neste caso, a conversão é calculada através do Euro, como se especifica na regulamentação Européia. Por exemplo, para converter Francos belgas em Marcos alemães, 4D realizará as seguintes conversões: Francos belgas -> Euros -> Marcos alemães.

Passe no primeiro parâmetro o valor a converter.   
O segundo parâmetro indica o código da moeda no qual o valor está expressado.   
O terceiro parâmetro indica o código da moeda no qual o valor será convertido.

Para especificar um código de moeda, 4D oferece as seguintes constantes predefinidas, localizadas no tema “Moedas Euro”:

| Constante           | Tipo   | Valor |
| ------------------- | ------ | ----- |
| Austrian Schilling  | Cadeia | ATS   |
| Belgian Franc       | Cadeia | BEF   |
| Deutsche Mark       | Cadeia | DEM   |
| Euro                | Cadeia | EUR   |
| Finnish Markka      | Cadeia | FIM   |
| French Franc        | Cadeia | FRF   |
| Greek Drachma       | Cadeia | GRD   |
| Irish Pound         | Cadeia | IEP   |
| Italian Lira        | Cadeia | ITL   |
| Luxembourg Franc    | Cadeia | LUF   |
| Netherlands Guilder | Cadeia | NLG   |
| Portuguese Escudo   | Cadeia | PTE   |
| Spanish Peseta      | Cadeia | ESP   |

Se for necessário, 4D arredonda automaticamente o resultado da conversão e conserva 2 decimais, exceto para conversões a Liras italianas, Francos Belgas, Francos de Luxemburgo e Pesetas espanholas, para as quais 4D conserva 0 decimais (o resultado é um número inteiro).

As taxas de conversão entre o Euro e 12 das moedas dos países membros são as seguintes:

| **Moeda**           | **Valor para 1 Euro** |
| ------------------- | --------------------- |
| Chelines austríacos | 13.7603               |
| Francos belgas      | 40.3399               |
| Marco alemão        | 1.95583               |
| Marco finlandês     | 5.94573               |
| Franco Francês      | 6.55957               |
| Dracma Grega        | 340.750               |
| Libra irlandesa     | 0.787564              |
| Lira italiana       | 1936.27               |
| Franco luxemburgo   | 40.3399               |
| Florim neerlandês   | 2.20371               |
| Escudo português    | 200.482               |
| Peseta espanhola    | 166.386               |

#### Exemplo 

Estes são alguns exemplos de conversões que podem ser realizadas com este comando:

```4d
 $valor:=10000 //Valor expresso em Francos franceses
  //Converter o valor a Euros
 $EmEuros:=Euro converter($valor;French Franc;Euro)
  //Converter o valor a Liras Italianas
 $EmLiras:=Euro converter($valor;French Franc;Italian Lira)
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 676 |
| Thread-seguro | &check; |


