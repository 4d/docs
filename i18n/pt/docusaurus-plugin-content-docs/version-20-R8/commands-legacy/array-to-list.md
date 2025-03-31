---
id: array-to-list
title: ARRAY TO LIST
slug: /commands/array-to-list
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO LIST.Syntax-->**ARRAY TO LIST** ( *array* ; *lista* {; *itemRefs*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array do qual se copia os elementos de array |
| lista | Text, Integer | &#8594;  | Lista na qual se copia os elementos de array |
| itemRefs | Array | &#8594;  | Arrays numéricos do número de referência dos elementos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY TO LIST.Summary-->O comando ARRAY TO LIST cria ou substitui a lista hierárquica ou a lista de escolha (criada no editor LIsta) que é especificada em *lista* usando os elementos do *array* *.<!-- END REF-->*

Pode passar no parâmetro opcional *lista*, uma lista de seleção (cadeia) ou uma referência de lista hierárquica (refLista). No segundo caso, esta lista deve ter sido criada previamente (por exemplo utilizando o comando [New list](new-list.md)) para que este comando funcione.

O parâmetro opcional *itemRefs*, se especificado, deve ser um array numérico sincronizado com o array *array*. Cada elemento, então, indica o número de referência dos elementos da lista para o elemento correspondente no *array*. Se você omitir este parâmetro, 4D automaticamente determina os número de referência dos elementos da lista como 1, 2,...N.

**Nota de compatibilidade:** O comando **ARRAY TO LIST** deve ser utilizado com precaução pelas seguintes limitações:

* Este comando só lhe permite definir elementos de primeiro nível da lista.
* Quando o utiliza como uma lista, este comando modifica a estrutura da aplicação (as listas se guardam no arquivo de estrutura), as modificações realizadas localmente se perdem quando se atualiza o arquivo de estrutura durante a produção.
* Este comando não pode ser utilizado com uma lista de seleção em uma estrutura carrega em **apenas leitura,** como em um projeto ou componente .4dz

Pode utilizar \[#current\_title para construir uma lista baseada nos elementos de um array. No entanto, para se livrar destas restrições e explorar por completo as listas de valores, lhe recomendamos utilizar os comandos do tema *Listas Hierárquicas*.

#### Exemplo 

O exemplo seguinte copia o array *atRegioes* na lista “Regiões”

```4d
 ARRAY TO LIST(atRegions;"Regions")
```

#### Exemplo 

Você quer colocar os diferentes valores de um campo em uma lista, por exemplo para criar um menu pop-up hierárquico. Pode escrever:

```4d
 ALL RECORDS([Empresa])
 DISTINCT VALUES([Empresa]pais;$arrPaises)
 ListaPais:=New list
 ARRAY TO LIST($arrPaises;ListaPais)
```

#### Gestão de erros 

O comando ARRAY TO LIST gera o erro *\-9957* quando é aplicado a uma lista que está atualmente sendo editada no Editor de Lista de Ambiente de Desenho.Você pode interceptar este erro usando um método de projeto [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[LIST TO ARRAY](list-to-array.md)  
[Load list](load-list.md)  
[ON ERR CALL](on-err-call.md)  
[SAVE LIST](save-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 287 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |


