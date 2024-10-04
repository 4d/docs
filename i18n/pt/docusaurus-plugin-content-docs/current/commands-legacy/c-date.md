---
id: c-date
title: C_DATE
slug: /commands/c-date
displayed_sidebar: docs
---

<!--REF #_command_.C_DATE.Syntax-->**C_DATE** ( {*metodo* ;} *variavel* {; *variavel2* ; ... ; *variavelN*} )<!-- END REF-->
<!--REF #_command_.C_DATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nome do método opcional |
| variavel | Variável | &#x1F852; | Nome da(s) variável(s) a declarar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.C_DATE.Summary-->O comando **C\_DATE** atribui o tipo Data a cada variável especificada.<!-- END REF-->

A primeira sintaxe do comando, na qual o parâmetro opcional *metodo* NÃO se passa, é utilizada para declarar uma variável processo, interprocesso, ou local.

**Nota:** esta sintaxe pode ser utilizada em bases interpretadas.

A segunda sintaxe do comando, na qual o parâmetro opcional *metodo* SIM se passa, é utilizada para pré-declarar ao compilador o resultado ou os parâmetros ($0, $1, $2 etc.) de um método. Utilize esta sintaxe para evitar a fase de declaração de variáveis durante a compilação do banco, poupando tempo de compilação.

**Advertência:** a segunda sintaxe não pode ser executada em modo interpretado. Por essa razão, se utiliza esta sintaxe, mantenha-la em um método que não seja executado em modo interpretado. O nome deste método deve começar por “COMPILER.”

##### Uso avançado 

A sintaxe **C\_DATE**(${...}) permite declarar um número variável de parâmetros do mesmo tipo, sob a condição que esses são os últimos parâmetros par ao método. Por exemplo, a declaração **C\_DATE**(${5}) diz a 4D e ao compilador que inicie com o quinto parâmetro, o método pode receber um número variável desse tipo. Para saber mais, veja a seção *Indireções sobre os parâmetros*.

#### Exemplos 

Ver exemplos na seção *Comandos de Compilação*.

#### Ver também 

*Comandos de Compilação*  
[Count parameters](count-parameters.md)  