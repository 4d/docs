---
id: cache-info
title: Cache info
slug: /commands/cache-info
displayed_sidebar: docs
---

<!--REF #_command_.Cache info.Syntax-->**Cache info** {( *bdFiltro* )} : Object<!-- END REF-->
<!--REF #_command_.Cache info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| bdFiltro | Object | &#8594;  | Define a lista de atributos a ser retornada (filtrada por banco de dados) |
| Resultado | Object | &#8592; | Informação sobre cache |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Cache info.Summary-->O comando **Cache info** devolve um objeto que contenha a informação detalhada sobre o conteúdo atual da caché (memória utilizada, tabelas e índices carregados, etc.)

**Nota:** este comando só funciona em modo local (4D Server e 4D); não deve ser utilizado com 4D em modo remoto.<!-- END REF-->

Como padrão, a informação devolvida se refere somente ao banco sendo executado. O parâmetro objeto opcional *dbFilter* lhe permite especificar o alcance do comando:

* passe o atributo "dbFilter" com o valor "All" para obter a informação sobre a caché de todos os bancos de dados lançados, incluidos os componentes.
* passe o atributo "dbFilter" com um valor "" (string vazia) para obter informação sobre o único banco de dados atual (equivale a omitir o parâmetro *dbFilter*).

O comando **Cache info** devolve um único objeto que contém toda a informação relevante sobre a caché. O objeto devolvido tem a seguinte estrutura básica:

```json
{    "maxMem": Maximum cache size (real),    "usedMem": Current cache size (real),    "objects": [...] Array of objects currently loaded in cache}
```

Os elementos de array *objetos* são objetos raiz (tabelas, índices, Blobs, etc.) que estejam carregados na memória caché. Cada elemento contém atributos específicos que descrevem seu estado atual. Para mais informação sobre a interpretação avançada destes dados, contacte a seu departamento de serviço técnico.

#### Exemplo 

Se quiser obter a informação da cache para o banco de dados atual:

```4d
 var $cache : Object
 $cache:=Cache info
```

Se quiser obter informação da cache do banco de dados e todos os componentes abertos:

```4d
 var $dbFilter : Object
 OB SET($dbFilter;"dbFilter";"All")
 $cache:=Cache info($dbFilter)
```

#### Ver também 

[MEMORY STATISTICS](memory-statistics.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1402 |
| Thread-seguro | &check; |
| Proibido no servidor ||


