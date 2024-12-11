---
id: copy-set
title: COPY SET
slug: /commands/copy-set
displayed_sidebar: docs
---

<!--REF #_command_.COPY SET.Syntax-->**COPY SET** ( *comOrigem* ; *comDestino* )<!-- END REF-->
<!--REF #_command_.COPY SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| comOrigem | Text | &#8594;  | Nome do conjunto de origem |
| comDestino | Text | &#8594;  | Nome do Conjunto de Destino |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COPY SET.Summary-->O comando COPY SET copia o conteúdo do conjunto *comOrigem* no conjunto *comDestino*.<!-- END REF-->  

Os dois conjuntos podem ser processos, inter-processos, ou conjuntos locais. Os dois conjuntos não precisam tem o mesmo tipo (como mostrado abaixo), desde que ambos sejam visíveis na máquina. Para saber mais sobre isso, veja "*Visibilidade de Conjuntos*". 

#### Exemplo 1 

O seguinte exemplo, copia o conjunto "*ConjuntoA*", no conjunto "*ConjuntoB*":  
  
```4d
 COPY SET("ConjuntoA";"ConjuntoB")
```

#### Exemplo 2 

O seguinte exemplo em Cliente/Servidor, copia o conjunto processo "*ConjuntoA*", conservado na máquina servidor, no conjunto local "*$ConjuntoB*", conservado no máquina cliente:  
  
```4d
 COPY SET("ConjuntoA";"$ConjuntoB")
```

#### Ver também 

*Conjuntos*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 600 |
| Thread-seguro | &check; |
| Proibido no servidor ||


