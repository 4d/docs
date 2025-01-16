---
id: users-to-blob
title: USERS TO BLOB
slug: /commands/users-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.USERS TO BLOB.Syntax-->**USERS TO BLOB** ( *usuarios* )<!-- END REF-->
<!--REF #_command_.USERS TO BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| usuarios | Blob | &#8594;  | Blob que contém os usuários |
| &#8592; | Conta de usuários (criptografadas) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.USERS TO BLOB.Summary-->**Nota de compatibilidade*: este comando só funciona em bancos de dados binários.<!-- END REF--> Sempre devolve um BLOB vazio em projetos.*

O comando USERS TO BLOB guarda no BLOB *usuarios* a lista de todas as contas de usuários e os grupos da banco criados pelo Administrador.

Apenas o Administrador e o Desenhador da banco podem ser executados este comando. Se outro usuário tentar executá-lo, o comando não faz nada e é gerado um erro de privilégio (-9949).  
  
O BLOB gerado é automaticamente encriptografado e apenas pode ser lido utilizando o comando [BLOB TO USERS](blob-to-users.md). Pode armazenar este BLOB em um arquivo em seu disco duro ou em um campo.

Este comando é o equivalente ao registro dos grupos e usuários desde a janela de gestão dos grupos da Caixa de ferramentas. A única diferença é que permite armazenar contas de usuários em um campo BLOB e não apenas em um arquivo.  
  
Este conceito permite conservar um backup de usuários no banco e implementar um mecanismo de backup além de um sistema para carregar automaticamente aos usuários em caso de uma atualização da estrutura do banco (a informação relacionada com as contas de usuário são guardadas por 4D no arquivo de estrutura do banco).

#### Ver também 

[BLOB TO USERS](blob-to-users.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 849 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK, error |


