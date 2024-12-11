---
id: delete-index
title: DELETE INDEX
slug: /commands/delete-index
displayed_sidebar: docs
---

<!--REF #_command_.DELETE INDEX.Syntax-->**DELETE INDEX** ( pontCampo|nomeIndice {; *} )<!-- END REF-->
<!--REF #_command_.DELETE INDEX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pontCampo&#124;nomeIndice | Ponteiro, String | &#8594;  | Ponteiro ao campo cujos índices serão apagados ou Nome do Índice que será apagado. |
| * | Operador | &#8594;  | Se passado = operação assincrônica |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE INDEX.Summary-->O comando DELETE INDEX é utilizado para apagar um ou mais índices existentes no banco.<!-- END REF-->  
Pode passar tanto um ponteiro a um campo ou o nome de um índice no parâmetro:

* Se passar um ponteiro a um campo (*pontCampo*), todos os índices associados ao campo serão apagados. Pode ser relativo a índices de palavras chaves ou de índices padrão. Entretanto, se o campo estiver incluido em um ou mais índices compostos, não serão apagados (deve passar um nome de índice).
* Se passar o nome de um índice (*nomIndice*), apenas se apagará o índice determinado. Pode se tratar de índices de palavras chaves, índices padrão ou índices compostos.
O parâmetro opcional *\**, quando for passado, permite realizar a desindexação em modo assincrônico. Nesse modo, o método de origem continua sua execução depois da chamada ao comando, sem importar se a eliminação do índice terminou ou não.  
  
Se não existir um índice correspondente a *PontCampo* ou *nomIndice*, o comando não faz nada.  

#### Nota para lançamento 

Dado que este comando modifica a estrutura do banco de dados, não pode ser utilizado no contexto de uma aplicação empacotada de apenas leitura (arquivo .4dc instalado na pasta *Arquivos de programa* ou arquivo .4dz).

#### Exemplo 

Este exemplo ilustra as duas sintaxes do comando: 

```4d
  //Eliminação de todos os índices relacionados com o campo Sobrenome
 DELETE INDEX(->[Clientes]Sobrenome)
  //Eliminação do índice chamado “CPCidade”
 DELETE INDEX("CPCidade")
```

#### Ver também 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  
[SET INDEX](set-index.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 967 |
| Thread-seguro | &check; |
| Proibido no servidor ||


