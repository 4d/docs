---
id: find-in-field
title: Find in field
slug: /commands/find-in-field
displayed_sidebar: docs
---

<!--REF #_command_.Find in field.Syntax-->**Find in field** ( *campoAlvo* ; *valor* ) : Integer<!-- END REF-->
<!--REF #_command_.Find in field.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campoAlvo | Field | &#8594;  | Campo Alvo no qual executar a pesquisa |
| valor | Field, Variable | &#8594;  | valor a procurar |
| &#8592; | valor encontrado |
| Resultado | Integer | &#8592; | Número do registro encontrado, ou -1 se nenhum registro for encontrado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Find in field.Summary-->O comando Find in field devolve o número do primeiro registro cujo *campoAlvo* for igual a *valor*.<!-- END REF-->  
Se não são encontrados registros, Find in field devolve -1\. 

Depois de chamar este comando, *valor* contém o valor encontrado. Esta funcionalidade lhe permite realizar pesquisas utilizando o caractere (“@”) em campos tipo Alfa e depois recuperar o valor encontrado. 

**Nota:** Devido a esse princípio, não é possível usar um *parâmetro* ($1, $2, etc.) em *valor* porque isso causaria malfuncionamento em modo compilado. Da mesma forma, se você passar um campo no parâmetro *valor*, lembre que o valor será reatribuido se a pesquisa for bem sucedia (o comando [Modified record](modified-record.md), em particular, vai retornar True para o registro atual da tabela).

Este comando não modifica a seleção atual nem o registro atual.  
Este comando é rápido e muito útil para evitar a criação de entradas duplas durante a entrada de dados. 

****Nota histórica:** Em versões anteriores de 4D, o comando **Find in field** era chamado **Find index key** e só funcionava com campos indexados. A partir de 4D v11 SQL, esta limitação se eliminou e o comando foi renomeado.

#### Exemplo 1 

Em um banco de dados de CDs, durante a entrada de dados, suponha que queira verificar o nome do cantor para ver se já existe no banco. Como podem existir homônimos, você quer que o campo \[Cantor\]Nome seja único. Portanto, no formulário de entrada, pode escrever o código a seguir no método de objeto do campo \[Cantor\]Nome:

```4d
 If(FORM Event=On Data Change)
    $RecNum:=Find in field([Cantor]Nome;[Cantor]Nome)
    If($RecNum #-1) // se este nome já tiver sido introduzido
       CONFIRM("Já existe um cantor com o mesmo nome. Deseja ver o registro?";"Sim";"Não")
       If(OK=1)
          GOTO RECORD([Cantor];$RecNum)
       End if
    End if
 End if
```

#### Exemplo 2 

Este é um exemplo que permite verificar a existência de um valor:

```4d
 var $id;$1 : Integer
 $id:=$1
 If(Find in field([MyTable]MyID;$id)>=0)
    $0:=True
 Else
    $0:=False
 End if
```

Tenha em conta >= permite cobrir todos os casos. De fato, a função devolve um número de registro e o primeiro registro tem o número 0.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 653 |
| Thread-seguro | &check; |
| Proibido no servidor ||


