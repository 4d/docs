---
id: c-blob
title: C_BLOB
slug: /commands/c-blob
displayed_sidebar: docs
---

<!--REF #_command_.C_BLOB.Syntax-->**C_BLOB** ( {*metodo* ;} *variavel* {; *variavel2* ; ... ; *variavelN*} )<!-- END REF-->
<!--REF #_command_.C_BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nome do método opcional |
| variavel | Variável | &#x1F852; | Nome da(s) variável(s) a declarar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.C_BLOB.Summary-->**C\_BLOB** atribui o tipo BLOB a cada variável especificada.<!-- END REF-->

A primeira sintaxe do comando, na qual o parâmetro opcional *metodo* NÂO se passa, se utiliza para declarar uma variável de processo, interprocesso ou local.

**Nota:** esta sintaxe pode ser utilizada em bancos interpretados.

A segunda sintaxe do comando, na qual o parâmetro opcional *metodo* SIM se passa, se utiliza para declarar diante do compilador o resultado e/ou os parâmetros ($0, $1, $2 etc.) de um método. Utilize esta sintaxe do comando para evitar declarar as variáveis durante a compilação de um banco, economizando tempo de compilação. 

##### Uso avançado 

A sintaxe **C\_BLOB**(${...}) permite declarar um número variável de parâmetros do mesmo tipo, sob a condição que esses são os últimos parâmetros par ao método. Por exemplo, a declaração **C\_BLOB**(${5}) diz a 4D e ao compilador que inicie com o quinto parâmetro, o método pode receber um número variável desse tipo. Para saber mais, veja a seção *Indireções sobre os parâmetros*.

#### Exemplos 

Ver exemplos na seção *Comandos de Compilação*.

#### Ver também 

*Comandos de Compilação*  
[Count parameters](count-parameters.md)  