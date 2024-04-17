---
id: vp-import-from-blob
title: VP IMPORT FROM BLOB
---

<!-- REF #_method_.VP IMPORT FROM BLOB.Syntax -->

**VP IMPORT FROM BLOB** ( _vpAreaName_ : Text ; _vpBlob_ : 4D.blob { ; _paramObj_ : Object} ) <!-- END REF -->

<!-- REF #_method_.VP IMPORT FROM BLOB.Params -->

| Parâmetro  | Tipo                     |    | Descrição                                  |                  |
| ---------- | ------------------------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text                     | -> | Nome de objeto formulário área 4D View Pro |                  |
| vpBlob     | 4D. Blob | -> | Blob contendo um documento 4D View Pro     |                  |
| paramObj   | Object                   | -> | Opções de importação                       | <!-- END REF --> |

#### Descrição

The `VP IMPORT FROM BLOB` command <!-- REF #_method_.VP IMPORT FROM BLOB.Summary -->imports the _vpBlob_ in the 4D View Pro area _vpAreaName_ and replaces its contents<!-- END REF -->. _vpBlob_ must contain a 4D View Pro document previously saved as Blob either by using the [VP EXPORT TO BLOB](vp-export-to-blob.md) command or via the 4D View Pro interface.

In _paramObj_, you can pass several properties:

| Propriedade         | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula             | 4D. Function | Método de retorno de chamada a ser iniciado quando a importação for concluída. Veja [Passando um método de callback (fórmula)](vp-export-document.md#passing-a-callback-method-formula).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| calcOnDemand        | Parâmetros                   | Se as fórmulas devem ser calculadas somente quando forem exigidas; padrão=falso.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| dynamicReferences   | Parâmetros                   | Se deve calcular funções com referência dinâmica; padrão = true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| fullRecalc          | Parâmetros                   | Para decidir se calcula depois do carregamento do dado json, falso por padrão                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| includeFormulas     | Parâmetros                   | Se deve incluir a fórmula ao carregar, padrão=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| includeStyles       | Parâmetros                   | Se deve incluir o estilo ao carregar, padrão = true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| includeUnusedStyles | Parâmetros                   | Se deve incluir o estilo de nome não utilizado ao converter o xml do Excel para o json, default=true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| openMode            | Integer                      | pode ser: <br/>0: modo aberto normal, sem lazy e incremental. Ao abrir o documento, a interface do usuário e o evento da interface do usuário podem ser atualizados e responsivos em momentos específicos. <br/>1: modo aberto preguiçoso. Quando abrir o documento, só a folha ativa será carregada diretamente. Outras folhas serão carregadas somente quando estiverem sendo usadas. <br/>2: incremental open mode. Quando abrir o documento, UI e evento UI poderiam ser recarregados e diretamente responsivos. |

Os seguintes parâmetros podem ser usados no método de retorno de chamada:

| Parâmetro |                               | Tipo                     | Descrição                                                                    |
| :-------- | :---------------------------- | :----------------------- | :--------------------------------------------------------------------------- |
| param1    |                               | text                     | The name of the 4D View Pro area object                                      |
| param2    |                               | 4D. Blob | O blob importado                                                             |
| param3    |                               | object                   | A reference to the command's _paramObj_ parameter                            |
| param4    |                               | object                   | Um objeto devolvido pelo método com uma mensagem de estado                   |
|           | .success      | boolean                  | True se a importação for bem-sucedida, False caso contrário. |
|           | .errorCode    | integer                  | Código de erro.                                              |
|           | .errorMessage | text                     | Mensagem de erro.                                            |

#### Exemplo

Você deseja importar para a "ViewProArea" um documento 4D View Pro salvo anteriormente como Blob na primeira entidade da classe de dados Table.

```4d
var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob
VP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)

```

#### Veja também

[VP EXPORT TO BLOB](vp-export-to-blob.md)
