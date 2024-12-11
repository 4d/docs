---
id: method-set-code
title: METHOD SET CODE
slug: /commands/method-set-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET CODE.Syntax-->**METHOD SET CODE** ( *rota* ; *codigo* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET CODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text, Text array | &#8594;  | Texto ou array texto que contém uma ou mais rotas de método |
| codigo | Text, Text array | &#8594;  | Código dos métodos designados |
| * | Operador | &#8594;  | Se passado = o comando aplica ao banco de dados local quando é executado de um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD SET CODE.Summary-->O comando **METHOD SET CODE** modifica o código dos métodos designados pelo parâmetro *rota* com o conteúdo passado no parâmetro *codigo*.<!-- END REF--> Este comando pode acessar ao código de todos os tipos de métodos: métodos de banco, triggers, métodos projeto, métodos formulário e métodos objeto. Se um método não existir, é criado com os conteúdos *codigo*.

O comando pode acessar o código existente de todos os tipos de métodos: métodos de banco de dados, triggers, métodos projeto, métodos formulário e métodos objeto.  
  
Se um método não existir, é criado com o conteúdos de código.

**Nota para projetos:** 
Criar um novo método com esse comando só é possível para métodos de bancos de dados, triggers e métodos de projeto  
O código é salvo com ou sem tokens em projetos criados recentemente dependendo da opção Include tokens in project source files nas Preferências.

Pode usar dois tipos de sintaxe, baseadas em arrays texto ou em variáveis texto:

```4d
 var tVpath : Text // variáveis texto
 var tVcode : Text
 METHOD SET CODE(tVpath;tVcode) // código de um só método
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrCodes;0)
 METHOD SET CODE(arrPaths;arrCodes) // código de vários métodos
```

Não é possível misturar as duas sintaxes.

Se passar uma rota de acesso errada, o comando não faz nada.

Quando se chama METHOD SET CODE, os atributos dos métodos se reinicializam por padrão. No entanto, se a primeira linha do *codigo* de um método contém metadados válidos (expressados em JSON), são usados para definir os atributos do método e a primeira linha não é inserida. Exemplo de metadados:

```4d
  // %attributes = {"invisible":true,"lang":"fr","folder":"Security"}
```

**Nota**: Estes metadados são gerados automaticamente pelo comando [METHOD GET CODE](method-get-code.md). Para saber mais sobre atributos suportados, veja o comando [METHOD SET ATTRIBUTES](method-set-attributes.md).

Concernente a propriedade "folder" dos metadados:

* Se esta propriedade está presente e corresponde a uma pasta válida, o método se localiza em sua pasta pai,
* Se esta propriedade não está presente ou se a pasta já não existe, o comando não muda a nível da pasta pai,  
Quando essa propriedade conter uma string vazia, o método é posto no nível da raiz.

Pode executar o comando de uma componente, mas neste caso você deve passar o parâmetro *\** porque o acesso ao código do componente é somente leitura. Se omitir o parâmetro *\** neste contexto, o erro -9763 é gerado.

#### Exemplo 

Este exemplo exporta e importa a totalidade dos métodos projeto de uma aplicação:

```4d
 $root_t:=Get 4D folder(Database folder)+"methods"+Folder separator
 ARRAY TEXT($fileNames_at;0)
 CONFIRM("Import or export methods?";"Import";"Export")
 
 If(OK=1)
    DOCUMENT LIST($root_t;$fileNames_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)
       METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))
    End for
 Else
    If(Test path name($root_t)#Is a folder)
       CREATE FOLDER($root_t;*)
    End if
    METHOD GET PATHS(Path project method;$fileNames_at)
    METHOD GET CODE($fileNames_at;$code_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       SET BLOB SIZE($blob_x;0)
       TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)
       BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)
    End for
 End if
 SHOW ON DISK($root_t)
```

#### Ver também 

[METHOD GET CODE](method-get-code.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1194 |
| Thread-seguro | &check; |
| Proibido no servidor ||


