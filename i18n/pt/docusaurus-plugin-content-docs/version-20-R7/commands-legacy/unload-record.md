---
id: unload-record
title: UNLOAD RECORD
slug: /commands/unload-record
displayed_sidebar: docs
---

<!--REF #_command_.UNLOAD RECORD.Syntax-->**UNLOAD RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.UNLOAD RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai descarregar o registro, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.UNLOAD RECORD.Summary-->UNLOAD RECORD descarrega o registro atual de *tabela*.<!-- END REF-->

Se o registro não está bloqueado para o usuário local (bloqueado para os outros usuários), UNLOAD RECORD desbloqueia o registro para os outros usuários.  
  
Mesmo que UNLOAD RECORD descarregue o registro da memória, o registro permanece como registro atual. Quando outro registro se converte no registro atual, o registro atual anterior se descarrega automaticamente e se desbloqueia para os outros usuários. Sempre execute este comando quando tenha terminado de modificar um registro e queira que esteja disponível para outros usuários, enquanto permanece o registro como seu registro atual.  
  
Se um registro tiver uma quantidade importante de dados, de campos de imagem, ou de documentos externos (tais como documentos 4D Write Pro), é preferível não armazenar o registro atual em memória a não ser que precise modifica-lo. Nesse caso, utilize o comando UNLOAD RECORD, dessa maneira, pode conservar o registro atual sem que esteja em memória. Dessa forma libera a memória ocupada pelo registro, mas não tem acesso aos valores armazenados nos campos. Se mais adiante necessita acessar aos valores do registro, utilize o comando [LOAD RECORD](load-record.md "LOAD RECORD").  
  
**Nota**: quando se utiliza em uma transação, o comando UNLOAD RECORD descarrega o registro atual unicamente para o processo que gera a transação. Para outros processos, o registro permanece bloqueado sempre que a transação não tiver sido confirmada (ou cancelada).

#### Ver também 

[LOAD RECORD](load-record.md)  
*Record Locking*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 212 |
| Thread-seguro | &check; |
| Proibido no servidor ||


