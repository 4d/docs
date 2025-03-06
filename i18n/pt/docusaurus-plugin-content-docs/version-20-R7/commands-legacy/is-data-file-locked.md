---
id: is-data-file-locked
title: Is data file locked
slug: /commands/is-data-file-locked
displayed_sidebar: docs
---

<!--REF #_command_.Is data file locked.Syntax-->**Is data file locked**  : Boolean<!-- END REF-->
<!--REF #_command_.Is data file locked.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = arquivo/segmento bloqueado False = arquivo/segmento não bloqueado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is data file locked.Summary-->O comando Is data file locked retorna True se o arquivo de dados do banco de dados aberto, ou pelo menos um dos seus segmentos está fechado - ou seja, protegido contra gravação.<!-- END REF--> 

Colocado, por exemplo, no método de banco de dados , este comando permite a prevenção de qualquer risco de abertura acidental de um arquivo de dados bloqueado. 

#### Exemplo 

Este método vai impedir a abertura do banco de dados se o arquivo de dados estiver bloqueado: 

```4d
 If(Is data file locked)
    ALERT("O arquivo de dados está bloqueado. Impossível abrir o banco.")
    QUIT 4D
 End if
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 716 |
| Thread-seguro | &check; |


