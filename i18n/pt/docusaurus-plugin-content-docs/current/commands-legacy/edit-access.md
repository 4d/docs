---
id: edit-access
title: EDIT ACCESS
slug: /commands/edit-access
displayed_sidebar: docs
---

<!--REF #_command_.EDIT ACCESS.Syntax-->**EDIT ACCESS**<!-- END REF-->
<!--REF #_command_.EDIT ACCESS.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.EDIT ACCESS.Summary-->EDIT ACCESS permite modificar o sistema de senhas.<!-- END REF--> Quando se executa este comando, a janela da caixa de ferramentas que contiver as páginas Usuários e Grupos é mostrada.  

**Nota**: este comando abre uma janela modal, assim você não pode chamá-lo desde outra janela modal; do contrário não se abrirá a janela e o comando não fará nada.  
  
Os grupos podem ser modificados pelo Desenhador, o Administrador e pelos proprietários de grupo. O Desenhador e o Administrador podem editar qualquer grupo. Os proprietários de grupo não podem modificar seus próprios grupos. Os usuários podem ser adicionados e retirados de grupos. O comando não tem efeito se nenhum grupo estiver definido.  
  
O Desenhador e o Administrador podem adicionar novos usuários, como também atribuir usuários a grupos.

#### Exemplo 

O exemplo abaixo mostra ao usuário a janela de gestão de usuários e grupos: 

```4d
 EDIT ACCESS
```

#### Ver também 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  