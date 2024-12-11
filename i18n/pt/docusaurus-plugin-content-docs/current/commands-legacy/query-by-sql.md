---
id: query-by-sql
title: QUERY BY SQL
slug: /commands/query-by-sql
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY SQL.Syntax-->**QUERY BY SQL** ( {*tabela* ;} *sqlFormula* )<!-- END REF-->
<!--REF #_command_.QUERY BY SQL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual se devolve a seleção de registros  ou tabela padrão se o parâmetro for omitido |
| sqlFormula | Text | &#8594;  | Fórmula válida de pesquisa SQL representando a cláusula WHERE da pesquisa SELECT |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY BY SQL.Summary-->O comando QUERY BY SQL permite aproveitar diretamente o motor SQL integrado de 4D.<!-- END REF--> Este comando pode executar um pedido simples SELECT que pode ser escrito desta forma: 

```SQL
   SELECT *      FROM tabela      WHERE 
```

*tabela* é o nome da tabela passada no primeiro parâmetro e *sqlFormula* a cadeia de pesquisa passada no segundo parâmetro.  
  
Por exemplo, a seguinte instrução:  

```4d
 ([Empregados];"nome=’josé’")
```
  
  
é equivalente a a pesquisa SQL:  

```SQL
   SELECT * FROM Empregados WHERE "nome=’josé’"
```

O comando QUERY BY SQL é similar ao comando [QUERY BY FORMULA](query-by-formula.md). O comando procura registros na tabela especificada. Modifica a seleção atual de *tabela* para o processo atual e transforma o primeiro registro da nova seleção no registro atual.  
  
**Nota**: o comando QUERY BY SQL não pode ser utilizado no contexto de uma conexão SQL externa; ele conecta diretamente ao motor SQL integrado de 4D.  
  
QUERY BY SQL aplica *sqlFormula* a cada registro da seleção da tabela. *sqlFormula* é uma expressão booleana que deve devolver **True** ou **False**. Como sabe, no padrão SQL, uma condição de pesquisa pode ter um resultado **True, False** ou NULL. Todos os registros (filas) onde a condição de pesquisa retorna **True** são incluídas na nova seleção atual.  
  
A expressão*sqlFormula* pode ser simples, como a comparação de um campo (coluna) com um valor; ou complexa, como um cálculo. Assim como [QUERY BY FORMULA](query-by-formula.md), QUERY BY SQL pode avaliar a informação nas tabelas relacionadas (ver o exemplo 4). *sqlFormula* deve ser uma instrução SQL válida, de acordo com o padrão SQL-2 e relativo às limitações atuais de implementação do SQL em 4D. Para maior informação sobre compatibilidade SQL em 4D, consulte *Manual de SQL* no manual 4D SQL.  
O parâmetro*sqlFormula* pode utilizar referências a expressões 4D. A Sintaxe a utilizar é a mesma que para os comandos SQL integrados ou o código incluído entre as etiquetas [Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL"), ou seja: *<<MinhaVar>>* ou *:MinhaVar*.  
  
**Nota:** este comando é compatível com os comandos [SET QUERY LIMIT](set-query-limit.md) e [SET QUERY DESTINATION](set-query-destination.md)  
  
**Lembrete:** as referências às variáveis locais não são possíveis em modo compilado. Para maior informação sobre a programação SQL em 4D, consulte a seção *Introdução aos comandos SQL*.   

##### Sobre relações 

QUERY BY SQL não utiliza relações entre tabelas definidas no editor de estrutura 4D. Se deseja utilizar os dados relacionados, terá que adicionar um JOIN á pesquisa. Por exemplo, assumindo que temos a seguinte estrutura, com uma relação Muitos-a-Um entre os campos \[Pessoas\]Cidade e \[Cidades\]Nome: 

```SQL
   [Pessoas]       Nome       Cidade    [Cidades]       Nome       População
```
  
  
Utilizando o comando [QUERY BY FORMULA](query-by-formula.md), pode escrever:  

```4d
 QUERY BY FORMULA([Pessoas];[Cidades]População>1000)
```

Using   
  
Utilizando QUERY BY SQL, deve escrever a seguinte instrução, independente de se a relação existe ou não:  

```4d
 QUERY BY SQL([Pessoas];"pessoas.cidade=cidades.nome AND cidades.população>1000")
```
  
  
**Nota**: QUERY BY SQL trata as relações Um-a-Muitos e Muitos-a-Um de uma maneira diferente que [QUERY BY FORMULA](query-by-formula.md).

#### Exemplo 1 

Este exemplo mostra os escritórios com vendas superiores a 100\. A pesquisa SQL é:   

```SQL
   SELECT *      FROM Escritorios      WHERE Vendas > 100
```
  
  
Utilizando o comando QUERY BY SQL:  

```4d
 C_STRING(30;$formulaPesquisa)
 $formulaPesquisa:="Vendas > 100"
 QUERY BY SQL([Escritorios];$formulaPesquisa)
```

#### Exemplo 2 

Este exemplo mostra as ordens entre 3.000 e 4.000\. A pesquisa SQL é:   

```SQL
   SELECT *      FROM Ordens      WHERE Quantidade BETWEEN 3000 AND 4000
```

Utilizando o comando QUERY BY SQL:

```4d
 C_STRING(40;$formulaPesquisa)
 $formulaPesquisa:="Quantidade BETWEEN 3000 AND 4000"
 QUERY BY SQL([Ordens];$formulaPesquisa)
```

#### Exemplo 3 

Este exemplo mostra como obter o resultado da pesquisa ordenado com um critério específico. A pesquisa SQL é:   

```SQL
   SELECT *      FROM Pessoas      WHERE Cidade =’Paris’         ORDER BY Nome
```

Utilizando o comando QUERY BY SQL:

```4d
 C_STRING(40;$formulaPesquisa)
 $formulaPesquisa:="Cidade= ‘Paris’ ORDER BY Nome"
 QUERY BY SQL([Pessoas];$formulaPesquisa)
```

#### Exemplo 4 

Este exemplo mostra uma pesquisa utilizando tabelas relacionadas em 4D. Em SQL deve utilizar um JOIN para simular esta relação. Suponha que temos as duas tabelas abaixo:   
  
```SQL
   [Faturas] com os campos (colunas) seguintes:      ID_Fact: Inteiro longo      Data_Fact: Data      Total: Real   [Linhas_Faturas] com as seguintes colunas (campos):      ID_Linea: Inteiro longo      ID_Fact: Inteiro longo      Codigo: Alfa (10)
```
  
  
Existe uma relação Muitos-a-Um de \[Linhas\_Faturas\]ID\_Fat com \[Faturas\]ID\_Fat.  
  
Utilizando o comando [QUERY BY FORMULA](query-by-formula.md), pode escrever:  

```4d
 QUERY BY FORMULA([Linhas_Faturas];([Linhas_Faturas]Codigo="FX-200") & (Month of([Faturas]Data_Fat)=4))
```
  
  
A pesquisa SQL é:  

```SQL
   SELECT ID_Linha      FROM Linhas_Faturas, Faturas      WHERE Linhas_Faturas.ID_Fat=Faturas.ID_Fat         AND Linhas_Faturas.Codigo='FX-200'         AND MONTH(Faturas.Data_Fat) = 4
```
  
  
Quando utilizar o comando QUERY BY SQL:  

```4d
 C_STRING(40;$formulaPesquisa)$formulaPesquisa:="Linhas_Faturas.ID_Fat=Faturas.ID_FatAND Linhas_Faturas.Codigo=’FX-200’ AND MONTH(Faturas.Data_Fat)=4" 
```

#### Variáveis e conjuntos do sistema 

Se o formato da condição de pesquisa for correto, a variável Sistema OK assume o valor 1\. Do contrário, assume o valor 0, e o resultado do comando será uma seleção vazia e um erro é devolvido. Este erro pode ser interceptado por um método instalado utilizando o comando [ON ERR CALL](on-err-call.md).

#### Ver também 

[QUERY BY FORMULA](query-by-formula.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 942 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


