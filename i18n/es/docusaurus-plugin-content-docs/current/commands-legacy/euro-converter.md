---
id: euro-converter
title: Euro converter
slug: /commands/euro-converter
displayed_sidebar: docs
---

<!--REF #_command_.Euro converter.Syntax-->**Euro converter** ( *valor* ; *deMoneda* ; *aMoneda* ) : Real<!-- END REF-->
<!--REF #_command_.Euro converter.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valor | Real | &#8594;  | Valor a convertir |
| deMoneda | Text | &#8594;  | Código de la moneda en que está expresado el valor |
| aMoneda | Text | &#8594;  | Código de la moneda a la que debe convertirse el valor |
| Resultado | Real | &#8592; | Valor convertido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Euro converter.Summary-->El comando Euro converter permite efectuar todo tipo de conversión de valores entre las diferentes monedas de países que pertenecen a la “Zona Euro” y al Euro mismo.<!-- END REF-->

Puede convertir:

* una moneda nacional en Euros,
* Euros en una moneda nacional,
* una moneda nacional en otra moneda nacional. En este caso, la conversión se calcula por intermedio del Euro, como se especifica en la reglamentación Europea. Por ejemplo, para convertir Francos belgas en Marcos alemanés, 4D efectuará las siguientes conversiones: Francos belgas -> Euros -> Marcos alemanés.

Pase en el primer parámetro el valor a convertir.   
El segundo parámetro indica el código de la moneda en el cual el valor está expresado.   
El tercer parámetro indica el código de la moneda en el cual el valor será convertido.

Para especificar un código de moneda, 4D ofrece las siguientes constantes predefinidas, ubicadas en el tema “Monedas Euro”:

| Constante           | Tipo   | Valor |
| ------------------- | ------ | ----- |
| Austrian Schilling  | Cadena | ATS   |
| Belgian Franc       | Cadena | BEF   |
| Deutsche Mark       | Cadena | DEM   |
| Euro                | Cadena | EUR   |
| Finnish Markka      | Cadena | FIM   |
| French Franc        | Cadena | FRF   |
| Greek Drachma       | Cadena | GRD   |
| Irish Pound         | Cadena | IEP   |
| Italian Lira        | Cadena | ITL   |
| Luxembourg Franc    | Cadena | LUF   |
| Netherlands Guilder | Cadena | NLG   |
| Portuguese Escudo   | Cadena | PTE   |
| Spanish Peseta      | Cadena | ESP   |

Si es necesario, 4D redondea automáticamente el resultado de la conversión y conserva 2 decimales, excepto para conversiones a Liras italianas, Francos Belgas, Francos de Luxemburgo y Pesetas españolas, para las cuales 4D conserva 0 decimales (el resultado es un número entero).

Las tasas de conversión entre el Euro y 12 de las monedas de los países miembros son las siguientes:

| **Moneda**          | **Valor para 1 Euro** |
| ------------------- | --------------------- |
| Chelines austriacos | 13.7603               |
| Francos belgas      | 40.3399               |
| Marco alemán        | 1.95583               |
| Marco finlandés     | 5.94573               |
| Franco Francés      | 6.55957               |
| Dracma Griega       | 340.750               |
| Libra irlandesa     | 0.787564              |
| Lira italiana       | 1936.27               |
| Franco luxemburgues | 40.3399               |
| Florin neerlandés   | 2.20371               |
| Escudo portugués    | 200.482               |
| Peseta española     | 166.386               |

#### Ejemplo 

Estos son algunos ejemplos de conversiones que pueden realizarse con este comando:

```4d
 $valor:=10000 //Valor expresado en Francos franceses
  //Convertir el valor a Euros
 $EnEuros:=Euro converter($valor;French Franc;Euro)
  //Convertir el valor a Liras Italianas
 $EnLiras:=Euro converter($valor;French Franc;Italian Lira)
```
