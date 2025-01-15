---
id: create-index
title: CREATE INDEX
slug: /commands/create-index
displayed_sidebar: docs
---

<!--REF #_command_.CREATE INDEX.Syntax-->**CREATE INDEX** ( *tabela* ; *arrayCampos* ; *tipoIndice* ; *nomeIndice* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE INDEX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para qual criar um índice |
| arrayCampos | Pointer array | &#8594;  | Ponteiros aos campos a serem indexados |
| tipoIndice | Integer | &#8594;  | Tipo de índice a criar: -1 = Palavra chave, 0 = padrão, 1 = B-Tree padrão, 3 = Cluster B-Tree |
| nomeIndice | Text | &#8594;  | Nome de Índice a criar |
| * | Operador | &#8594;  | Se passado = índice assincrônico |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE INDEX.Summary-->O comando **CREATE INDEX** permite criar: 

* Um índice padrão em um ou mais campos (índice composto) ou
* Um índice de palavras chaves em um campo.<!-- END REF-->
O índice é criado para a tabela *minhaTabela* utilizando um ou mais campos determinados pelo array de ponteiros *arrayCampos*. Este array contém apenas uma linha se quiser criar um índice simples e dois ou mais quando quiser criar um índice composto (exceto no caso de um índice de palavras chaves). No caso dos índices compostos, a ordem dos campos no array é importante durante a construção do índice.  
  
O parâmetro *tipoIndice* permite definir o tipo de índice a criar. Pode passar uma das seguintes constantes, que se encontram no tema *Tipo de Índice*:  

| Constante            | Tipo          | Valor |
| -------------------- | ------------- | ----- |
| Cluster BTree Index  | Inteiro longo | 3     |
| Default Index Type   | Inteiro longo | 0     |
| Keywords Index       | Inteiro longo | \-1   |
| Standard BTree Index | Inteiro longo | 1     |

  
**Nota:** um índice B-Tree associado a um campo de tipo texto armazena como máximo os primeiros 1024 caracteres do campo. Portanto nesse contexto, as pesquisas nas cadeias que contenham mais de 1024 caracteres falharão.  
  
Passe em *nomeIndice*, o nome do índice a criar. É necessário dar nomes aos índices se vários índices de diferentes tipos podem associados a um mesmo campo e se preferir poder apagá-los individualmente com a ajuda do comando [DELETE INDEX](delete-index.md). Se o índice *nomeIndice* já existir, o comando não faz nada.

O parâmetro opcional *\**, quando for passado, permite realizar a indexação em modo assincrônico. Nesse modo, o método original continua sua execução depois da chamada do comando, sem importar se a indexação terminou ou não.

Se o comando **CREATE INDEX** encontrar registros bloqueados, estes não serão indexados e o comando esperará que sejam desbloqueados.  
  
Se ocorrer um problema durante a execução do comando (campo não indexável, tentativa de criação de um índice de palavras chaves em mais de um campo, etc.), um erro é gerado. Este erro pode ser interceptado utilizando um método de gestão de erros.

#### Nota para lançamento 

Dado que este comando modifica a estrutura do banco de dados, não pode ser utilizado no contexto de uma aplicação empacotada de apenas leitura (arquivo .4dc instalado na pasta *Arquivos de programa* ou arquivo .4dz).

#### Exemplo 1 

Criação de dois índices padrão nos campos “Sobrenome” e “Telefone” da tabela \[Clientes\]: 

```4d
 ARRAY POINTER(arrayPtrCampo;1)
 fieldPtrArr{1}:=->[Clientes]Sobrenome
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustLNameIdx")
 fieldPtrArr{1}:=->[Clientes]Telefone
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CustTelIdx")
```

#### Exemplo 2 

Criação de um índice de palavras chaves no campo "Observações da tabela \[Clientes\]: 

```4d
 ARRAY POINTER(arrayPtrCampo;1)
 fieldPtrArr{1}:=->[Clientes]Observações
 CREATE INDEX([Clientes];arrayPtrCampo;Keywords Index;"CustObsIdx")
```

#### Exemplo 3 

Criação de um índice composto nos campos “Cidade” e “CódigoPostal” da tabela \[Clientes\]:  
  
```4d
 ARRAY POINTER(arrayPtrCampo;2)
 fieldPtrArr{1}:=->[Clientes]Cidade
 fieldPtrArr{2}:=->[Clientes]CodigoPostal
 CREATE INDEX([Clientes];arrayPtrCampo;Standard BTree Index;"CidadeCEP")
```

#### Ver também 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  
[SET INDEX](set-index.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 966 |
| Thread-seguro | &check; |


