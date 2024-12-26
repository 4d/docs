---
id: reduce-selection
title: REDUCE SELECTION
slug: /commands/reduce-selection
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE SELECTION.Syntax-->**REDUCE SELECTION** ( {*tabela* ;} *numero* )<!-- END REF-->
<!--REF #_command_.REDUCE SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai reduzir a seleção, ou tabela padrão, se omitido |
| numero | Integer | &#8594;  | Número de registros para manter selecionados |

<!-- END REF-->

#### Descrição 

REDUCE SELECTION cria uma nova seleção de registros para *tabela*. O comando retorna o primeiro *numero* de registros da seleção atual de *tabela*. REDUCE SELECTION se aplica à seleção atual de tabela no processo atual. Ele modifica a seleção atual de *tabela* para o processo atual; o primeiro registro da nova seleção se torna o o registro atual.  

**Nota**: se a instrução REDUCE SELECTION(tabela;0) for executada, não haverá mais seleção nem registro atual em *tabela*.

#### Exemplo 

O seguinte exemplo pesquisa as estatísticas corretas para uma concorrência mundial entre os distribuidores de mais de 20 países. Para cada país, os 3 melhores distribuidores que tenham vendido mais de $50.000 em produtos estão entre os 100 melhores distribuidores do mundo e recebem um prêmio. Com umas poucas linhas de código, esta petição complexa pode ser executada utilizando pesquisas indexadas:  
  
```4d
 CREATE EMPTY SET([Distribuidores];"Ganhadores") // Criar um conjunto vazio
 SCAN INDEX([Distribuidores]Quantidade vendas;100;<) // Buscar desde o final do índice CREATE SET([Distribuidores];"100 melhores distribuidores") ` Colocar os registros selecionados em um conjunto
 For($Pais;1;Records in table([Paises])) // Para cada país
  // Buscar os distribuidores neste país
    QUERY([Distribuidores];[Distribuidores]País=[Países]Nome;*) // ...que venderam mais de $50.000
    QUERY([Distribuidores];&;[Distribuidores]Quantidade vendas>=50000)
    CREATE SET([Distribuidores];"DistribuidoresGanhadores") // Colocá-los em um conjunto ` Devem estar no grupo dos 100 melhores distribuidores
    INTERSECTION("DistribuidoresGanhadores";"100 melhores distribuidores";"DistribuidoresGanhadores")
    USE SET("DistribuidoresGanhadores") // Ganhadores potenciais por país
  // Ordená-los pelos resultados em ordem descendente
    ORDER BY([Distribuidores];[Distribuidores]Quantidade vendas;<)
    REDUCE SELECTION([Distribuidores];3) // Assumir os três melhores distribuidores
    CREATE SET([Distribuidores];"DistribuidoresGanhadores") // Ganhadores por país
  // Colocá-los na lista de ganhadores por país
    UNION("DistribuidoresGanhadores";"Ganhadores";"Ganhadores")
 End for
 CLEAR SET("100 melhores distribuidores") //Não necessitamos mais este conjunto
 CLEAR SET("DistribuidoresGanhadores") // Não necessitamos mais este conjunto
 USE SET("Ganhadores") // Aqui estão os ganhadores
 CLEAR SET("Ganhadores") // Não necessitamos mais este conjunto
 OUTPUT FORM([Distribuidores];"Carta de ganhadores") // Selecionar a carta
 PRINT SELECTION([Distribuidores]) // Imprimir as cartas
```

#### Ver também 

*Conjuntos*  
[ORDER BY](order-by.md)  
[QUERY](query.md)  
[SCAN INDEX](scan-index.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 351 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


