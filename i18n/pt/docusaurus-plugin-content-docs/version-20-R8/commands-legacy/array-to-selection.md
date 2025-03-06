---
id: array-to-selection
title: ARRAY TO SELECTION
slug: /commands/array-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO SELECTION.Syntax-->**ARRAY TO SELECTION** {( *array* ; *campo* {; *array2* ; *campo2* ; ... ; *arrayN* ; *campoN*}{; *} )}<!-- END REF-->
<!--REF #_command_.ARRAY TO SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a se copiar na seleção |
| campo | Field | &#8592; | Campo para receber os valores do array |
| * | Operador | &#8594;  | Aguarda execução |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ARRAY TO SELECTION.Summary-->O comando **ARRAY TO SELECTION** copia um ou mais arrays em uma seleção de registros.<!-- END REF--> Todos os campos listados devem pertencer a mesma tabela.

Se uma seleção existir no momento da chamada, os elementos do array são colocados dentro dos registros, baseados na ordem dos arrays e na ordem dos registros. Se há mais elementos que registros, novos registros são criados. Os registros, seja novo ou já existente, são salvos automaticamente.

**Nota**: dado que pode criar novos registros, este comando não tem estado de só leitura da tabela (se existir) (ver \[#title id="212"/\]). 

Todos os arrays devem apresentar o mesmo número de elementos. Se os arrays apresentarem tamanhos diferentes, um erro de sintaxe é gerado.

Este comando tem o efeito reverso do [SELECTION TO ARRAY](selection-to-array.md). Entretanto, o comando **ARRAY TO SELECTION** não permite campos de diferentes tabelas, incluindo tabelas relacionadas, mesmo quando existe uma relação automática.

Quando você passar o parâmetro *\**, 4D não executar a linha de instrução correspondente imediatamente, mas sim armazena na memória, desta forma você pode empilhar várias linhas terminando com um *\**. Todas essas linhas que aguarda sua execução são executadas por um final **ARRAY TO SELECTION** que não tem o parâmetro *\**. Por esta razão, o comando agora pode ser chamado sem parâmetros.  
 Como com o [QUERY](query.md), isto permite que você quebrar uma declaração complexas em um conjunto de linhas, que é mais fácil de ler e manter. Você também pode inserir declarações intermediárias.

**Advertência:** Utilize **ARRAY TO SELECTION** com cautela, porque este comando reescreve as informações dos registros existentes. Se um registro está bloqueado por outro processo durante a execução do **ARRAY TO SELECTION**, este registro não se modifica. Todos os registros bloqueados se colocam em LockedSet. Depois da execução de **ARRAY TO SELECTION**, você pode testar o conjunto LockedSet para ver se contém registros bloqueados. 

**Nota**: este comando não leva em consideração o estado de só leitura/leitura-escritura da tabela que contém o campo. 

**4D Server:** o comando é otimizado por 4D Server. Os arrays são enviados pela equipe do cliente para o servidor, e os registros são modificados ou criados na equipe do servidor. Como este pedido é controlado de modo sincronizado, a equipe cliente deve esperar que a operação se complete com êxito. No ambiente de multi-usuários ou multi-processos, nenhum registro bloqueado será reescrito. 

#### Exemplo 1 

No exemplo a seguir, os arrays *asSobrenomes* e *asEmpresas* escrevem dados na tabela *\[Pessoas\]*. Os valores do array *asSobrenomes* são localizados no campo *\[Pessoas\]Sobrenome* e os valores do array *asEmpresas* são localizados no campo *\[Pessoas\]Empresa*:

```4d
 ARRAY TO SELECTION(asSobrenomes;[Pessoas]Sobrenome;asEmpresas;[Pessoas]Empresa)
```

#### Exemplo 2 

Se quiser copiar uma seleção de registroar para uma tablela arquivo selecionando os campos de acordo com o valor da opção:

```4d
 ARRAY TEXT($_name;0)
 ARRAY TEXT($_firstname;0)
 ARRAY TEXT($_cv;0)
 ARRAY PICTURE($_photo;0)
 
 SELECTION TO ARRAY([Candidate]Name;$_name;*)
 SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)
 If(withCV) //load the CV field
    SELECTION TO ARRAY([Candidate]cv;$_cv;*)
 End if
 If(withPhoto) //carrega o campo foto
    SELECTION TO ARRAY([Candidate]photo;$_photo;*)
 End if
 SELECTION TO ARRAY //executa cópia
 
 REDUCE SELECTION([Candidate_Archive];0)
 ARRAY TO SELECTION($_name;[Candidate_Archive]Name;*)
 ARRAY TO SELECTION($_prenom;[Candidate_Archive]Firstname;*)
 If(withCV)
    ARRAY TO SELECTION($_cv;[Candidate_Archive]cv;*)
 End if
 If(withPhoto)
    ARRAY TO SELECTION($_photo;[Candidate_Archive]photo;*)
 End if
 ARRAY TO SELECTION
```

#### Ver também 

[SELECTION TO ARRAY](selection-to-array.md)  
*Variáveis sistema*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 261 |
| Thread-seguro | &check; |
| Modificar a seleção atual ||


