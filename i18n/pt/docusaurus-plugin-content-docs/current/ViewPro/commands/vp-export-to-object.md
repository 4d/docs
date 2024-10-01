---
id: vp-export-to-object
title: VP Export to object
---

<!-- REF #_method_.VP Export to object.Syntax -->

**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

| Parâmetro  | Tipo   |                             | Descrição                                  |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------ | ---------------- |
| vpAreaName | Text   | ->                          | Nome de objeto formulário área 4D View Pro |                  |
| options    | Object | ->                          | Opções de exportação                       |                  |
| Resultados | Object | <- | Objecto 4D View Pro                        | <!-- END REF --> |

#### Descrição

The `VP Export to object` command <!-- REF #_method_.VP Export to object.Summary --> returns the 4D View Pro object attached to the 4D View Pro area *vpAreaName*<!-- END REF -->. Você pode usar esse comando, por exemplo, para armazenar a área do 4D View Pro em um campo de objeto do banco de dados 4D.

Em *vpAreaName*, passe o nome da área 4D View Pro. Se passar um nome que não existe, é devolvido um erro.

In the *options* parameter, you can pass the following export options, if required:

| Propriedade          | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo    | Parâmetros | Verdadeiro (padrão) para incluir informações de formatação; caso contrário, falso. As informações de formatação são úteis em alguns casos, por exemplo, para exportação para SVG. Por outro lado, a definição dessa propriedade como False permite reduzir o tempo de exportação. |
| includeBindingSource | Parâmetros | True (padrão) para exportar os valores do contexto de dados atual como valores de célula no objeto exportado (os contextos de dados em si não são exportados). Caso contrário, false. Cell binding sempre é exportada.                                         |

For more information on 4D View Pro objects, please refer to the [4D View Pro object](../configuring.md#4d-view-pro-object) paragraph.

#### Exemplo 1

Você deseja obter a propriedade "version" da área atual do 4D View Pro:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### Exemplo 2

Pretende-se exportar a área, excluindo a informação de formatação:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### Veja também

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP IMPORT FROM OBJECT](vp-import-from-object.md)
