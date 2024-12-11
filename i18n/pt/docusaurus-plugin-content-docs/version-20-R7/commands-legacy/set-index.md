---
id: set-index
title: SET INDEX
slug: /commands/set-index
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX.Syntax-->**SET INDEX** ( *campo* ; *indice* {; *} )<!-- END REF-->
<!--REF #_command_.SET INDEX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | campo para o qual criar ou apagar o índice |
| indice | Boolean, Integer | &#8594;  | True = criar índice, False = apagar índice, ou Criar um índice do tipo: -1=palavras chaves, 0= por padrão, 1=B-Tree padrão, 3=B-Tree cluster |
| * | Operator |  &#8594;  | Índice assincrônico se * for passado |

<!-- END REF-->

#### Nota de compatibilidade 

<!--REF #_command_.SET INDEX.Summary-->**SET INDEX**, apesar de ser um comando herdado, ainda é compatível e pode permanecer em sua aplicação, não é necessário voltar a escrever o código existente.<!-- END REF--> Entretanto, é melhor usar [CREATE INDEX](create-index.md) y [DELETE INDEX](delete-index.md) para administrar os índices porque oferecem mais funcionalidades.

#### Descrição 

O comando SET INDEX aceita duas sintaxes:

* Se passa um booleano no parâmetro *índice*, o comando cria ou apaga o índice de campo.
* Se passa um inteiro no parâmetro *índice*, o comando cria um índice do tipo especificado.

**índice = Booleano**  
Para indexar o campo, passe True em *índice*. O comando cria um índice do tipo "por padrão". Se o índice já existir, o comando não faz nada.  
Se passar False em *índice*, o comando apagará todos os índices (não-compostos e não-palavras-chaves) associados ao campo. Se o índice não existir, o comando não faz nada.  
  
**índice = Inteiro**  
Nesse caso, o comando cria um índice do tipo especificado por *Campo*. Pode passar uma das seguintes constantes, que são encontradas no tema “*Tipo de Índice*” :

| Constante            | Tipo          | Valor |
| -------------------- | ------------- | ----- |
| Cluster BTree Index  | Inteiro longo | 3     |
| Default Index Type   | Inteiro longo | 0     |
| Keywords Index       | Inteiro longo | \-1   |
| Standard BTree Index | Inteiro longo | 1     |

**Nota:** um índice B-Tree associado a um campo de tipo texto armazena como máximo os primeiros 1024 caracteres do campo. Portanto, nesse contexto, as pesquisas nas strings que contenham mais de 1024 caracteres falharão.

SET INDEX não indexará registros bloqueados; o comando esperará que o registro seja desbloqueado.

  
O parâmetro opcional *\** indica uma indexação asincrônica (simultânea). Uma indexação assincrônica permite ao método chamante continuar sua execução imediatamente depois da chamada, não importa se a indexação tenha terminado ou não. Entretanto, a execução será interrompida se um comando requerer a indexação.

**Notas:**

* Os índices criados por este comando não têm nomes. Não podem ser apagados pelo comando [DELETE INDEX](delete-index.md) utilizando a sintaxe baseada no nome.
* Este comando não permite criar ou apagar índices compostos.
* Este comando não permite apagar um índice de palavras chaves criado pelo comando [CREATE INDEX](create-index.md)

#### Nota para lançamento 

Dado que este comando modifica a estrutura do banco de dados, não pode ser utilizado no contexto de uma aplicação empacotada de apenas leitura (arquivo .4dc instalado na pasta *Arquivos de programa* ou arquivo .4dz).

#### Exemplo 1 

O exemplo abaixo indexa o campo *\[Clientes\]ID*: 

```4d
 UNLOAD RECORD([Clientes])
 SET INDEX([Clientes]ID;True)
```

#### Exemplo 2 

Suponha que queira indexar o campo *\[Clientes\]Nome* em modo assincrônico:

```4d
 SET INDEX([Clientes]Nome;True;*)
```

#### Exemplo 3 

O exemplo abaixo indexa o campo *\[Clientes\]Num*: 

```4d
 UNLOAD RECORD([Clientes])
 SET INDEX([Clientes]Num;True)
```

#### Ver também 

[CREATE INDEX](create-index.md)  
[DELETE INDEX](delete-index.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 344 |
| Thread-seguro | &check; |
| Proibido no servidor ||


