---
id: locked-by
title: LOCKED BY
slug: /commands/locked-by
displayed_sidebar: docs
---

<!--REF #_command_.LOCKED BY.Syntax-->**LOCKED BY** ( {*tabela* ;} *processo* ; *usuario4D* ; *usuarioSessao* ; *nomeProcesso* )<!-- END REF-->
<!--REF #_command_.LOCKED BY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para visualizar os registros bloqueados, ou Tabela Padrão, se omitido |
| processo | Integer | &#8592; | Nº de referência do processo |
| usuario4D | Text | &#8592; | Nome do usuário 4D |
| usuarioSessao | Text | &#8592; | Nome do usuário que abriu a sessão de trabalho |
| nomeProcesso | Text | &#8592; | Nome do processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOCKED BY.Summary-->LOCKED BY devolve a informação sobre o usuário e o processo que tem bloqueado um registro.<!-- END REF--> O número do processo(\*), o nome de usuário, o nome do equipo assim como o nome do processo são devolvidos nas variáveis *processo, usuario4D, usuarioSessao*, e *nomeProcesso*. Pode utilizar esta informação em uma caixa de diálogo personalizada para advertir al usuário quando um registro está bloqueado.  
(\*) Este é o número do processo na máquina onde se executa o código que origina o bloqueio de registro. No caso de um trigger ou um método que seja executado no servidor, se devolve o número de processo "gemeo" na máquina servidor. No caso de un método que se executa em uma aplicañáo remota, se devolve o número de processo na máquina remota.

Se o registro não estiver bloqueado, *processo* devolve 0 e *usuario4D, sessaoUsuario*, e *nomeProcesso* devolvem cadeias vazias. Se quer carregar em modo leitura/escritura um registro que foi apagado, *processo* devolve -1 e *usuario, maquina*, e *nomeProcesso* devolvem strings vazias.  
  
O parâmetro *usuario4D* devolvido corresponde ao nome do usuário do sistema de senha 4D ou o apelido, como definido com [SET USER ALIAS](set-user-alias.md) (se houver). Se não há sistema de senhas ou um apelido definido, devolve “Desenhista”.  
  
O parâmetro *sessaoUsuario* devolvido corresponde ao nome do usuário que abriu a sessão na máquina cliente (este nome aparece na janela de administração de 4D Server para cada processo aberto).

Se o registro foi bloqueado por uma petição $lock REST:

processo devolve -2  
usuario4D devolve ""  
sessaoUsuario devolve ""  
nomeProcesso devolve o endereço IP do locker, p. ex. "127.0.0.1"

#### Ver também 

[Locked](locked.md)  
*Record Locking*  