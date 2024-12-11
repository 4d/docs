---
id: blob-to-users
title: BLOB TO USERS
slug: /commands/blob-to-users
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO USERS.Syntax-->**BLOB TO USERS** ( *usuarios* )<!-- END REF-->
<!--REF #_command_.BLOB TO USERS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| usuarios | Blob | &#8594;  | BLOB (criptografado) contendo contas de usuários do banco de dados criadas e guardadas pelo administrador do banco |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB TO USERS.Summary-->O comando BLOB TO USERS adiciona as contas de usuários presentes no BLOB *usuarios* ao banco de dados.<!-- END REF--> O BLOB *usuarios* está criptografado e deve ter sido criado usando o comando [USERS TO BLOB](users-to-blob.md).

Apenas o Administrador e o Desenhista (designer) podem executar esse comando. Se outro usuário tentar executá-lo, o comando não faz nada e gera um erro de privilégio de acesso (-9949).

Os efeitos deste comando são diferentes dependendo de se é executado de um projeto ou um banco de danos binário

**Banco de dados Projeto**

Este comando é usado por compatibilidade, para mover usuários e grupos previamente salvos de um arquivo BLOB ao arquivo *directory.json* do banco de dados. Todos os usuários e grupos já definidos no arquivo *directory.json* são substituidos pelos conteúdos de *usuários* BLOB, exceto o "Designer/Desenhista" e"Administrador".

**Banco de dados binário**

este comando causa a substituição de quaisquer contas e grupos existentes criados pelo Administrador no banco de dados. Se o BLOB *usuários* conter dados válidos, o comando realiza as operações abaixo:

* todos os usuários e grupos definidos no banco de dados cujos números de referência forem negativos (grupos e usuários criados pelo Administrador) são removidos da estrutura,
* todos os usuários e grupos encontrados no *users* BLOB são adicionados à estrutura.

**Nota de Compatibilidade:** Arquivos usuário e grupos (.4UG extension) criados pelo menu de comando **Save Groups...** em versões 4D anteriores podem ser carregados em 4D usando a sequência abaixo (versões muito antigas de 4D podem exigir podem precisar de versões intermediárias):

```4d
 DOCUMENT TO BLOB(mydoc;blob)
 BLOB TO USERS(blob)
```

#### Variáveis e conjuntos do sistema 

 Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Senão, assume o valor 0.

#### Ver também 

[USERS TO BLOB](users-to-blob.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 850 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


