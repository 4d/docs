---
id: euro-converter
title: Euro converter
slug: /commands/euro-converter
displayed_sidebar: docs
---

<!--REF #_command_.Euro converter.Syntax-->**Euro converter** ( *value* ; *fromCurrency* ; *toCurrency* ) : Real<!-- END REF-->
<!--REF #_command_.Euro converter.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | Real | &#8594;  | Value to convert |
| fromCurrency | Text | &#8594;  | Code of the currency in which the value is expressed |
| toCurrency | Text | &#8594;  | Code of the currency into which the value must be converted |
| Function result | Real | &#8592; | Converted value |

<!-- END REF-->

#### Description 

<!--REF #_command_.Euro converter.Summary-->The **Euro converter** command converts any value from and to the different currencies belonging to “Euroland” and the Euro currency itself.<!-- END REF-->

You can convert:

* a national currency into Euros,
* Euros into a national currency,
* a national currency into another national currency. In this case, the conversion is calculated by the intermediary of the Euro, as specified in the European reglementation. For example, to convert Belgian francs to Deutschemarks, 4D will perform the following calculations: Belgian francs -> Euros -> Deutchemarks.

Pass the value to convert in the first parameter.   
The second parameter indicates the Currency code in which value is expressed.   
The third parameter indicates the Currency code into which value must be converted.

To specify a Currency code, 4D proposes the following predefined constants, placed in the “*Euro Currencies*” theme:

| Constant            | Type   | Value |
| ------------------- | ------ | ----- |
| Austrian Schilling  | Text | ATS   |
| Belgian Franc       | Text | BEF   |
| Deutsche Mark       | Text | DEM   |
| Euro                | Text | EUR   |
| Finnish Markka      | Text | FIM   |
| French Franc        | Text | FRF   |
| Greek Drachma       | Text | GRD   |
| Irish Pound         | Text | IEP   |
| Italian Lira        | Text | ITL   |
| Luxembourg Franc    | Text | LUF   |
| Netherlands Guilder | Text | NLG   |
| Portuguese Escudo   | Text | PTE   |
| Spanish Peseta      | Text | ESP   |

If necessary, 4D performs rounding automatically on conversion results and keeps 2 decimals —except for conversions to Italian Lires, Belgian Francs, Luxembourg Francs and Spanish Pesetas, for which 4D keeps 0 decimal (the result is an integer number).

The conversion rates between the Euro and the currencies of the 11 participating Member States are fixed:

| **Currency**        | **Value for 1 Euro** |
| ------------------- | -------------------- |
| Austrian Schilling  | 13.7603              |
| Belgian Franc       | 40.3399              |
| Deutschemark        | 1.95583              |
| Finnish Markka      | 5.94573              |
| French Franc        | 6.55957              |
| Greek drachma       | 340.750              |
| Irish Pound         | 0.787564             |
| Italian Lire        | 1936.27              |
| Luxembourg Franc    | 40.3399              |
| Netherlands Guilder | 2.20371              |
| Portuguese Escudo   | 200.482              |
| Spanish Peseta      | 166.386              |

#### Example 

Here are some examples of conversions that can be done with this command:

```4d
 $value:=10000 //Value expressed in French Francs
  //Convert the value into Euros
 $InEuros:=Euro converter($value;French Franc;Euro)
  //Convert the value into Italian Lire
 $InLires:=Euro converter($value;French Franc;Italian Lire)
```


#### Properties

|  |  |
| --- | --- |
| Command number | 676 |
| Thread safe | &check; |


