---
id: intersection
title: INTERSECTION
slug: /commands/intersection
displayed_sidebar: docs
---

<!--REF #_command_.INTERSECTION.Syntax-->**INTERSECTION** ( *conjunto1* ; *conjunto2* ; *conjuntoResultado* )<!-- END REF-->
<!--REF #_command_.INTERSECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto1 | Text | &#8594;  | Primeiro conjunto |
| conjunto2 | Text | &#8594;  | Segundo conjunto |
| conjuntoResultado | Text | &#8594;  | Conjunto Resultado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INTERSECTION.Summary-->INTERSECTION compara *conjunto1 e conjunto2* e seleciona unicamente os registros que estão em ambos conjuntos.<!-- END REF--> A seguinte tabela lista todos os resultados possíveis de uma operação de intersecção de conjuntos.

| **Conjunto1** | **Conjunto2** | **Conjunto resultante** |
| ------------- | ------------- | ----------------------- |
| Sim           | Não           | Não                     |
| Sim           | Sim           | Sim                     |
| Não           | Sim           | Não                     |
| Não           | Não           | Não                     |

O resultado gráfico de uma operação de intersecção é mostrado abaixo. A área sombreada é o conjunto resultante.  
  
![](../assets/en/commands/pict32963.en.png)  
  
O *conjuntoResultado* é criado por INTERSECTION.. O *conjuntoResultado* substitui todo conjunto existente com o mesmo nome, incluindo *conjunto1 e conjunto2*. Os conjuntos *conjunto1 e conjunto2* devem ser da mesma tabela. O *conjuntoResultado* pertence à mesma tabela que *conjunto1 e conjunto2*. Se o mesmo registro atual estiver tanto em *conjunto 1* quanto em *conjunto 2*, ele permanece memorizado em *conjuntoResultado*. Senão, *conjuntoResultado* não possuirá um registro atual.  
  
**4D Server**: em modo cliente/Servidor, conjuntos são "visíveis" dependendo do seu tipo (interprocessos, processo e local) e onde foram criados (servidor ou cliente). INTERSECTION exige que os três conjuntos sejam visíveis na mesma máquina.  Para maior informação veja o parágrafo *4D Server, conjuntos e seleções temporais* no manual de referência de 4D Server.

#### Exemplo 

O exemplo a seguir pesquisa os clientes que são atendidos por dois representantes de vendas, Pedro e Paulo. Cada representante de vendas tem um conjunto com seus clientes. Os clientes que estão em ambos conjuntos são os que estão em contacto com Pedro e Paulo:  

```4d
 INTERSECTION("Pedro";"Paulo";"Ambos") // Coloca os clientes de ambos conjuntos em Ambos USE SET ("Ambos") ` Utilização do conjunto
 CLEAR SET("Ambos") // Apaga este conjunto mas salva os outros
 DISPLAY SELECTION([Clientes]) // Mostra os clientes em contato com os dois representantes de vendas
```

#### Ver também 

[DIFFERENCE](difference.md)  
[UNION](union.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 121 |
| Thread-seguro | &check; |


