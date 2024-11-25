---
id: on-backup-shutdown-database-method
title: On Backup Shutdown database method
slug: /commands/on-backup-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Shutdown database method.Syntax-->$1 -> On Backup Shutdown database method<!-- END REF-->
<!--REF #_command_.On Backup Shutdown database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | 0 = backup executed correctly; other value = error, interrupted by user or code returned by On Backup Startup |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### 

<!--REF #_command_.On Backup Shutdown database method.Summary-->O On Backup Shutdown database method é chamado a cada vez que o backup do banco de dados termina.<!-- END REF--> As razões para deter um backup podem ser o fim da cópia, interrupção por parte do usuário ou um erro.

Isto envolve todos os ambientes 4D (todos os modos), 4D Server, bem como os aplicativos 4D compilados e fusionados com 4D Volume Desktop. 

O On Backup Shutdown database method permite verificar que o backup foi executado corretamente. Ele recebe o parâmetro *$1*, um valor representando o status do backup uma vez que ele tenha sido finalizado: 

* Se o backup foi executado corretamente, *$1* é igual a 0.
* Se o backup foi interrompido pelo usuário ou ocorreu um erro, $1 é diferente de 0\.
* * Se o backup foi parado pelo *Método de Banco de Dados On Backup Startup* (*$0* \# 0), *$1* obtém o valor devolvido no parâmetro $0\. Isto lhe permite implementar um sistema de gerenciamento de erros personalizados  
   * Se o backup foi parado por um erro, o código do erro é devolvido em *$1.*
 Em todos os casos, pode obter informação sobre o erro utilizando o comando [BACKUP INFO](backup-info.md).  

**Nota**: Você deve declarar o parâmetro *$1* (inteiro longo) no método do banco de dados:

```4d
 var $1 : Integer
```

  
É importante notar que no caso de erro durante o backup (disco cheio, suporte inacessível, etc.), a informação relativa ao erro é mostrada unicamente no monitor de 4D Server ou no CSM, e é copiado no histórico de backups. Não é mostrada uma caixa de diálogo de alerta e a variável *erro* não se modifica. Se deseja notificar ao administrador que se produziu um erro, particularmente no contexto de uma aplicação em modo cliente/servidor, é necessário utilizar o **On Backup Shutdown database method**.
