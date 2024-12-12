---
id: change-current-user
title: CHANGE CURRENT USER
slug: /commands/change-current-user
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE CURRENT USER.Syntax-->**CHANGE CURRENT USER** {( *usuario* ; *senha* )}<!-- END REF-->
<!--REF #_command_.CHANGE CURRENT USER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| usuario | Text, Integer | &#8594;  | Nome do usuário ou ID única |
| senha | Text | &#8594;  | Senha (não criptografada) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.CHANGE CURRENT USER.Summary-->CHANGE CURRENT USER permite mudar a identidade do usuário atual no banco, sem ter que sair.<!-- END REF--> O usuário pode mudar sua identidade utilizando a caixa de diálogo de identificação do usuário do banco (quando o comando é chamado sem parâmetros) ou diretamente através deste comando. Quando um usuário muda sua identidade, o usuário abandona seus privilégios de acesso anteriores para os direitos do usuário escolhido.

**Nota**:

* Este comando não tem efeito em bancos de dados projeto abertos em modo monousuário.
* se for definido um alias (apelido) para o usuário atual com o comando [SET USER ALIAS](set-user-alias.md), se restabelece mediante a chamada de comando **CHANGE CURRENT USER**..

Se o comando CHANGE CURRENT USER for executado sem parâmetros, a caixa de diálogo de identificação do usuário da banco é mostrada. O usuário deve então introduzir ou selecionar um nome e senha válidos para entrar ao banco. O conteúdo da caixa de diálogo de conexão depende das opções definidas na página **Segurança** das Preferências do banco.  
  
  
Do mesmo jeito, pode passar os parâmetros opcionais *usuario* e *senha* para especificar por programação a nova conta a utilizar.   
  
Passe no parâmetro usuário o nome ou o número de referência única (*refUsuário*) da conta a utilizar. Os nomes e os números de usuário podem ser obtidos utilizando o comando [GET USER LIST](get-user-list.md).  
  
Se a conta de usuário designada não existir ou tiver sido apagada, o erro -9979 é gerado. Pode interceptar este erro com o método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md) . Do contrário, pode chamar a função [Is user deleted](is-user-deleted.md) para testar a conta de usuário antes de chamar este comando.  
  
Passe no parâmetro *senha* a senha não criptografada da conta de usuário. Se a senha não corresponder ao usuário, o comando devolverá a mensagem de erro -9978 e não fará nada.

O comando é atrasado para evitar flooding (ataques de força bruta), em outras palavras, tentativas de múltiplas combinações de nomes de usuário/senha. Como resultado, depois da quarta chamada a este comando, não é executada por um período de 10 segundos. Esta temporização é global à estação de trabalho.

**Nota**: quando o grupo do usuário atual oferece acesso a uma funcionalidade "serializada" (por exemplo, um plug-in), se utiliza uma licença correspondente que permanecerá vinculada a conta de usuário 4D até o final da sessão, mesmo se chamar a CHANGE CURRENT USER e o grupo do novo usuário não oferecer acesso a funcionalidade.

##### Oferecer uma caixa de diálogo de acesso personalizado 

O comando CHANGE CURRENT USER permite estabelecer caixas de diálogo personalizadas para introduzir o nome e senha (com regras de entrada e de vencimento) que tenham as mesmas vantagens do sistema de controle de acessos de 4D.  
O principio é o seguinte:  
  
**1**. A entrada no banco se realiza diretamente em modo “Usuário por padrão”, sem caixa de diálogo.  
  
**2**. No , o desenvolvedor provoca a visualização de uma caixa de diálogo personalizada de entrada do nome de usuário e senha. Todos os tipos de processos podem ser vistos na caixa de diálogo:  
\- É possível mostrar a lista de usuários da banco, como na caixa de diálogo de acesso padrão de 4D, utilizando o comando [GET USER LIST](get-user-list.md)  
\- O campo de entrada da senha pode conter vários controles com o fim de verificar a validez dos caracteres introduzidos (mínimo número de caracteres, unicidade, etc.).  
\- Para que os caracteres de senhas sejam introduzidos de maneira que estejam mascarados em tela, pode utilizar o comando [FILTER KEYSTROKE](filter-keystroke.md) com a fonte especial *%password*.  
\- As regras de vencimento podem ser aplicadas no momento em que a caixa de diálogo é confirmada: data de vencimento, mudança forçada à conexão inicial, bloqueio de conta depois de várias entradas incorretas, memorização de senhas já utilizadas, etc.  

**3.** Quando se confirma a entrada, a informação requerida (nome de usuário e senha) são passadas ao comando CHANGE CURRENT USER para abrir o banco com os privilégios da conta do usuário.

#### Exemplo 

O exemplo abaixo exibe a caixa de diálogo de conexão:

```4d
 CHANGE CURRENT USER
```

**Nota:** Este código não faz nada em um banco de dados projeto monousuário. 

#### Ver também 

[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  