---
id: distinct-attribute-values
title: DISTINCT ATTRIBUTE VALUES
slug: /commands/distinct-attribute-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Syntax-->**DISTINCT ATTRIBUTE VALUES** ( *campoObjeto* ; *rota* ; *arrayValores* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campoObjeto | Field | &#8594;  | Campo Objeto do qual obtém a lista de valores atributo distintos |
| rota | Text | &#8594;  | Rota do atributo cujos valores distintos deseja obter. |
| arrayValores | Text array, Integer array, Boolean array, Date array, Time array | &#8592; | Valores distintos na rota atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Summary-->**Tema:** Arrays

O comando **DISTINCT ATTRIBUTE VALUES** cria e preenche o *arrayValores* com valores náo repetidos (únicos) procedentes do atributo *rota* no campo *campoObjeto* para a seleção atual da tabela a que pertence o campo.<!-- END REF--> Se *campoObjeto* não for um campo de objeto indexado, um erro é devlvido.

Passe em *rota* uma rota atributo válida. Utilize a notação ponto padrão para definir rotas a atributos aninhados, por exemplo "empresa.endereço.numero". Lembre que os nomes de atributos objeto são sensíveis às maiúsculas e minúsculas.

O array que passou em *arrayValores* deve ser do mesmo tipo que o atributo *rota* passado como parâmetro, do contrário o array volta ser digitado. Só se admitem os seguintes tipos de arrays: numérico, texto, data e hora (os valores devem ser escalar: ponteiros, objetos, blobs ou imagens não são suportados).

Depois da chamada, o tamanho do array é igual ao número de valores diferentes que se encontram na seleção. O comando não muda a seleção atual ou o registro atual.

##### Usar a propriedade virtual comprimento 

Pode usar a propriedade virtual "comprimento" com este comando. Está automaticamente disponível para todos os atributos do tipo array e oferece o tamanho do array, ou seja, o número de elementos contidos pelo array. Esta propriedade foi criada para ser usada em pesquisas (ver **QUERY BY ATTRIBUTE**[QUERY BY ATTRIBUTE](query-by-attribute.md)). Pode também ser usada com o comando **DISTINCT ATTRIBUTE VALUES** para obter os diversos tamanhos de array para um atributo.

#### Exemplo 

Se seu banco de dados contiver um campo objeto \[Customer\]full\_Data (indexado) com 12 registros:

![](../assets/en/commands/pict2897927.en.png)

Se executar este código:

```4d
 ARRAY LONGINT(aLAges;0)
 ALL RECORDS([Customer])
  //obtém os valores distintos para o atributo  "age"
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)
```

O array *aLAges* obtém os seguintes 9 elementos:

```4d
  //aLAges{1}=33
  //aLAges{2}=35
  //aLAges{3}=36
  //aLAges{4}=40
  //aLAges{5}=42
  //aLAges{6}=44
  //aLAges{7}=52
  //aLAges{8}=54
  //aLAges{9}=60
```

#### Ver também 

  
[DISTINCT ATTRIBUTE PATHS](distinct-attribute-paths.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1397 |
| Thread-seguro | &check; |


