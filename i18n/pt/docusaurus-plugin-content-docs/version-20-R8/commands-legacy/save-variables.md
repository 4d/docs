---
id: save-variables
title: SAVE VARIABLES
slug: /commands/save-variables
displayed_sidebar: docs
---

<!--REF #_command_.SAVE VARIABLES.Syntax-->**SAVE VARIABLES** ( *documento* ; *variavel* {; *variavel2* ; ... ; *variavelN*} )<!-- END REF-->
<!--REF #_command_.SAVE VARIABLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Documento no qual vai guardar as variáveis |
| variavel | Variable | &#8594;  | Variáveis a guardar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAVE VARIABLES.Summary-->O comando SAVE VARIABLES guarda uma ou várias variáveis no documento cujo nome se passa em parâmetro *documento*.<!-- END REF-->  

As variáveis não devem ser do mesmo tipo, mas devem ser de tipo Cadeia, Texto, Numérico, Inteiro, Inteiro longo, Data, Hora, Booleano ou Imagem.  
  
Se passar uma cadeia vazia em *documento*, aparece uma caixa de diálogo padrão de guardar arquivos; o usuário pode então escolher o documento a criar. Neste caso, a variável sistema Document toma o nome do documento se tiver sido criado.

Se as variáveis forem guardadas corretamente, a variável OK assume o valor 1\. Se não, OK toma o valor 0.  
  
**Nota**: quando escrever variáveis em documentos com SAVE VARIABLES, 4D utiliza um formato de dados interno. Pode recuperar as variáveis apenas com o comando [LOAD VARIABLES](load-variables.md). Não use [RECEIVE PACKET](receive-packet.md) ou [RECEIVE VARIABLE](receive-variable.md) para ler um documento criado por SAVE VARIABLES.  
  
**Aviso**: este comando não é compatível com variáveis de tipo array. Para estas variáveis use os comandos do tema BLOB.

#### Exemplo 

O exemplo abaixo guarda três variáveis em um arquivo chamado PrefsUsuario: 

```4d
 SAVE VARIABLES(" PrefsUsuario";vsNome;vlCodigo;vgIconImagem)
```

#### Variáveis e conjuntos do sistema 

Se as variáveis são guardadas corretamente, a variável sistema OK assume o valor 1; do contrário assume o valor 0.

#### Ver também 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[LOAD VARIABLES](load-variables.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  
*Variáveis sistema*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 75 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, Document |


