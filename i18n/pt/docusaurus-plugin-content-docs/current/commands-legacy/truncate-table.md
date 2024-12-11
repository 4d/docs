---
id: truncate-table
title: TRUNCATE TABLE
slug: /commands/truncate-table
displayed_sidebar: docs
---

<!--REF #_command_.TRUNCATE TABLE.Syntax-->**TRUNCATE TABLE** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.TRUNCATE TABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela onde todos os registros serão apagados ou tabela padrão se esse parâmetro for omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.TRUNCATE TABLE.Summary-->O comando TRUNCATE TABLE \[#descv\]apaga rapidamente todos os registros de *tabela*.<!-- END REF--> Depois de chamar o comando, não há uma seleção atual nem um registro atual.  
  
O efeito deste comando é similar ao de uma sequência [ALL RECORDS](all-records.md) / [DELETE SELECTION](delete-selection.md); entretanto, seu funcionamento difere nos seguintes pontos:  

* Não se chama o trigger
* A integridade referencial dos dados não é controlada.
* Nenhuma transação deve estar em curso no processo que executa TRUNCATE TABLE. Se este for o caso, o comando não faz nada e a variável sistema OK assume o valor 0
* Se um ou mais registros estiverem bloqueados por outro processo, o comando falha: m erro é gerado e a variável sistema OK assume o valor 0\. O conjunto sistema LockedSet não é criado.
* Se *tabela* já estiver vazia, TRUNCATE TABLE não faz nada e a variável OK assume o valor 1.
* Se *tabela estiver em modo apenas leitura*, TRUNCATE TABLE não faz nada e a variável OK assume o valor 0.
* A variável OK assume o valor 0 ou 1 dependendo de se o comando falhou ou foi bem sucedido.
* A operação é gravada no arquivo de histórico se houver.
O comando TRUNCATE TABLE deve portanto ser utilizado com cuidado, no entanto é muito efetivo em alguns casos, por exemplo, para apagar rapidamente dados temporários.  
  
**Nota**: o conceito e funcionamento deste comando é similar ao do comando SQL TRUNCATE (TABELA).

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[DELETE SELECTION](delete-selection.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1051 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Modificar o registro atual ||
| Modificar a seleção atual ||
| Proibido no servidor ||


