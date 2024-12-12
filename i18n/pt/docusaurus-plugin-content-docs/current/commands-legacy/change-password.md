---
id: change-password
title: CHANGE PASSWORD
slug: /commands/change-password
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE PASSWORD.Syntax-->**CHANGE PASSWORD** ( *senha* )<!-- END REF-->
<!--REF #_command_.CHANGE PASSWORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| senha | Text | &#8594;  | Nova senha |

<!-- END REF-->

#### Descrição 

CHANGE PASSWORD muda a senha do usuário atual. Este comando substitui a senha atual com a nova senha que se passa em *senha*.  

**Advertência**: as senhas diferenciam entre caracteres em maiúsculas e minúsculas.

#### Exemplo 

O exemplo abaixo permite ao usuário mudar sua senha. 

```4d
 CHANGE CURRENT USER // Mostrar a caixa de diálogo de senhas
 If(OK=1)
    $pw1:=Request("Introduza a nova senha para "+Current user)
  // A senha deve ter pelo menos cinco caracteres
    If(((OK=1) & ($pw1#"")) & (Length($pw1)>5))
  // Tenha certeza de que a senha tenha sido introduzida corretamente
       $pw2:=Request("Introduza de novo a senha")
       If((OK=1) & ($pw1=$pw2))
          CHANGE PASSWORD($pw2) // Mudar a senha
       End if
    End if
 End if
```

#### Ver também 

[CHANGE CURRENT USER](change-current-user.md)  
[OBJECT SET FONT](object-set-font.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 186 |
| Thread-seguro | &cross; |


