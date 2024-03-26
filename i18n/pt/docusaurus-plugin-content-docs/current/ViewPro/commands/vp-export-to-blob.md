---
id: vp-export-to-blob
title: VP EXPORT TO BLOB
---

<!-- REF #_method_.VP EXPORT TO BLOB.Syntax -->

**VP EXPORT TO BLOB** ( _vpAreaName_ : Text ; _paramObj_ : Object ) <!-- END REF -->

<!-- REF #_method_.VP EXPORT TO BLOB.Params -->

| Parâmetro  | Tipo   |    | Descrição                                  |                  |
| ---------- | ------ | -- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | -> | Nome de objeto formulário área 4D View Pro |                  |
| paramObj   | Object | -> | Opções de exportação                       | <!-- END REF --> |

#### Descrição

The `VP EXPORT TO BLOB` command <!-- REF #_method_.VP EXPORT TO BLOB.Summary -->exports the _vpAreaName_ 4D View Pro document in a 4D.Blob according to the _paramObj_ options.<!-- END REF --> The exported blob is available through the export callback. A exportação e importação de áreas do 4D View Pro como blobs é rápida e eficiente em termos de memória.

In _paramObj_, you can pass several properties:

| Propriedade             | Tipo         | Descrição                                                                                                                                                                                                                                 |
| ----------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula                 | 4D. Function | (obrigatório) Método de retorno de chamada a ser lançado quando a exportação estiver concluída. See [Passing a callback method (formula)](vp-export-document.md#passing-a-callback-method-formula). |
| includeAutoMergedCells  | Parâmetros   | Se deve incluir as células mescladas automaticamente ao salvar; padrão=falso.                                                                                                                                                             |
| includeBindingSource    | Parâmetros   | Se deve incluir a fonte de vinculação ao salvar, padrão = true.                                                                                                                                                                           |
| includeCalcModelCache   | Parâmetros   | Se deve incluir os dados extras de cálculo. Pode afetar a velocidade de abertura do arquivo; padrão=false.                                                                                                                                |
| includeEmptyRegionCells | Parâmetros   | Se devem ser incluídas células vazias (células sem dados ou apenas com estilo) fora do intervalo de dados usado, default=true                                                                                          |
| includeFormulas         | Parâmetros   | Se a fórmula deve ser incluída ao salvar, padrão = true.                                                                                                                                                                                  |
| includeStyles           | Parâmetros   | Se deve incluir o estilo ao salvar, padrão=true.                                                                                                                                                                                          |
| includeUnusedNames      | Parâmetros   | Se deve incluir o nome personalizado não utilizado ao salvar, padrão=true.                                                                                                                                                                |

|saveAsView|Boolean|Whether to apply the format string to exporting value when saving, default=false.|

Os seguintes parâmetros podem ser usados no método de retorno de chamada:

| Parâmetro |               | Tipo    | Descrição                                                    |
| :-------- | :------------ | :------ | :----------------------------------------------------------- |
| param1    |               | text    | O nome do objeto 4D View Pro                                 |
| param2    |               | 4D.blob | O blob exportado                                             |
| param3    |               | object  | A reference to the command's _paramObj_ parameter            |
| param4    |               | object  | Um objeto devolvido pelo método com uma mensagem de estado   |
|           | .success      | boolean | True se a exportação for bem sucedida, False caso contrário. |
|           | .errorCode    | integer | Código de erro.                                              |
|           | .errorMessage | text    | Mensagem de erro.                                            |

#### Exemplo

The command `VP EXPORT TO BLOB` is asynchronous. You must create a callback method (named _VPBlobCallback_ in our example) to use the export results.

```4d
//Exportar o documento VP
VP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})
```

```4d
//VPBlobCallback method
#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)
var $myEntity : cs.myTableEntity

If ($status.success)
   // Save the document in a table
   $myEntity:=ds.myTable.new()
   $myEntity.blob:=$data
   $myEntity.save()
End if

```

#### Veja também

[VP IMPORT FROM BLOB](vp-import-from-blob.md)
