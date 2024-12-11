---
id: load-variables
title: LOAD VARIABLES
slug: /commands/load-variables
displayed_sidebar: docs
---

<!--REF #_command_.LOAD VARIABLES.Syntax-->**LOAD VARIABLES** ( *documento* ; *variavel* {; *variavel2* ; ... ; *variavelN*} )<!-- END REF-->
<!--REF #_command_.LOAD VARIABLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Documento que contém as variáveis 4D |
| variavel | Variable | &#8592; | variáveis que receberão os valores |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOAD VARIABLES.Summary-->O comando LOAD VARIABLES carrega uma ou várias variáveis do documento especificado por documento.<!-- END REF--> O documento deve ter sido criado utilizando o comando [SAVE VARIABLES](save-variables.md).  

As variáveis *variavel, variavel2...variavelN* são criadas; se já existirem, são reescritas.  
  
Se passa uma cadeia vazia em *documento*, aparece uma caixa de diálogo padrão de abertura de arquivos, permitindo ao usuário selecionar o documento a abrir. Se for escolhido um documento, a variável sistema Document conterá o nome do documento.  
  
Em bancos de dados compiladas, cada variável deve ser do mesmo tipo que as carregadas do disco.  
  
**Advertência**: este comando não é compatível com variáveis de tipo array. Para variáveis de tipo array use os comandos do tema BLOB.

#### Exemplo 

O exemplo abaixo carrega três variáveis de um documento chamado PrefsUsuario: 

```4d
 LOAD VARIABLES("PrefsUsuario";vsNome;vlCodigo;vgIconImagem)
```

#### Variáveis e conjuntos do sistema 

Se as variáveis são carregadas corretamente, a variável sistema OK assume o valor 1; do contrário assume o valor 0.

#### Ver também 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 74 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document |
| Proibido no servidor ||


