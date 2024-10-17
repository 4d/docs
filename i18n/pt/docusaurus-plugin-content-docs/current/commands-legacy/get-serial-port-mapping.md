---
id: get-serial-port-mapping
title: GET SERIAL PORT MAPPING
slug: /commands/get-serial-port-mapping
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL PORT MAPPING.Syntax-->**GET SERIAL PORT MAPPING** ( *numArray* ; *arrayNome* )<!-- END REF-->
<!--REF #_command_.GET SERIAL PORT MAPPING.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numArray | Integer array | &#8592; | Array de número de portas |
| arrayNome | Text array | &#8592; | Array de nomes de portas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET SERIAL PORT MAPPING.Summary-->O comando GET SERIAL PORT MAPPING retorna dois arrays, *numArray* e *nomeArray*, contendo os números de porta serial e os nomes porta serial da máquina atual.<!-- END REF-->

Esse comando é útil no Mac OS X, onde o sistema operacional aloca dinamicamente o número da porta ao usar um adaptador USB serial. Você pode endereçar qualquer porta de série usando o seu nome (estática), independentemente do seu número real.

**Nota:** Este comando não retorna valores significativos com portas padrão. Se você endereçar uma porta padrão, você deve passar o seu valor (0 ou 1) diretamente usando o comando [SET CHANNEL](set-channel.md "SET CHANNEL") (operação 4D). 

#### Exemplo 

Este método de projeto pode ser usado para tratar a mesma porta serial (sem protocolo), independentemente do número que foi atribuído a ele: 

```4d
 ARRAY TEXT($arrNomePortas;0)
 ARRAY LONGINT($arrNumsPortas;0)
 var $vNumPorta;$vNumPortaFinal : Integer
 
  //Para saber os números atuais das portas seriais
 GET SERIAL PORT MAPPING($arrNumsPortas;$arrNomePortas)
 $vPortNum:=Find in array($arrNomePortas;vPortName)
  // vPortName contém o nome da porta a ser utilizada, que pode vir de uma caixa de diálogo,
  // um valor armazenado em um campo, etc.
 If(arrNumsPortas{$vNumPuerto}=0)
    vNumPortaFinal:=0 //caso especial para Mac OS X
 else
    vNumPortaFinal:=arrNumsPortas{$vNumPorta}+100
 End if
 SET CHANNEL(vNumPortaFinal;params) //params contém os parâmetros de comunicação
 ... //Realize as operações desejadas
 SET CHANNEL(11) //Fechar a porta
```

#### Ver também 

[SET CHANNEL](set-channel.md)  