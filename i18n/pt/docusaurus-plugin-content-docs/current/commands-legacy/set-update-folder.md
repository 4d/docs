---
id: set-update-folder
title: SET UPDATE FOLDER
slug: /commands/set-update-folder
displayed_sidebar: docs
---

<!--REF #_command_.SET UPDATE FOLDER.Syntax-->**SET UPDATE FOLDER** ( *viaPasta* {; *errosDiscretos*} )<!-- END REF-->
<!--REF #_command_.SET UPDATE FOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| viaPasta | Text | &#8594;  | Via de acesso da pasta (pacote sob OS X) que contém a aplicação atualizada |
| errosDiscretos | Boolean | &#8594;  | False (por padrão) = mostrar mensagens de erro, True = não reportar eles |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET UPDATE FOLDER.Summary-->O comando **SET UPDATE FOLDER** especifica a pasta que contém a atualização da aplicação 4D fusionada atual.<!-- END REF--> Esta informação se armazena na sessão 4D até que se chama o método [RESTART 4D](restart-4d.md). Se sair da aplicação manualmente, esta informação não se conserva.  
  
Este comando está destinado a ser utilizado em um processo de atualização automática de uma aplicação fundida (servidor ou autônomo). Para mais informação, consulte o capítulo *Finalizar e distribuir aplicativos* no Manual de *Desenho*.  
  
**Nota**: Este comando só funciona com 4D Server ou com uma aplicação autônoma fundida com 4D Volume Desktop.

No parâmetro *viaPasta*, passe a via de acesso completa da pasta da nova versão da aplicação fundida (pasta que contém a aplicação *my4DApp.exe* sob Windows ou o pacote *my4DApp.app* sob OS X), criado pelo gerador de aplicações de 4D. A nova versão deve ter sido gerada pelo gerador de aplicações de 4D v14\. Em particular, deve conter uma versão atualizada da ferramenta "updater" incluída em 4D e que se utiliza para administrar as atualizações remota.  
  
**Nota**: Lhe recomendamos que utilize os mesmos nomes da versão original para os arquivos da nova versão da aplicação, já que a pasta da aplicação se substitui durante a atualização. Se utilizar nomes diferentes para estes arquivos, os atalhos e/ou vias armazenadas já não funcionarão mais.  
  
Se os parámetros são válidos, a atualização fica "em espera" na sessão até que se chame o comando [RESTART 4D](restart-4d.md). Foi executada várias vezes **SET UPDATE FOLDER** antes de chamar a \[[RESTART 4D](restart-4d.md), se leva em conta a última chamada válida.  
  
Pode passar uma cadeia vazia ("" ) no parâmetro *viaPasta* para reinicializar a informação de atualização para a sessão atual.  
  
O parâmetro opcional *errosDiscretos* especifica como se reportam os erros pela ferramenta "updater":  
* Se passar **False** ou se omitir este parâmetro, os erros se registram no histórico de atualização e se mostram em uma caixa de diálogo de alerta.
* Se passar **True**, os erros só se registram no histórico de atualização.
Exceção: Se a ferramenta "updater" não pode criar o arquivo de histórico, se mostra uma caixa de diálogo de alerta, independentemente do valor do parâmetro *errosDiscretos*. Para mais informação, consulte a descrição do comando [Get last update log path](get-last-update-log-path.md).  
  
Se o comando se executa corretamente, a variável sistema OK toma o valor 1, caso contrário, toma o valor 0\. Pode interceptar os erros gerados pelo comando utilizando um método instalado utilizando o comando [ON ERR CALL](on-err-call.md).

#### Exemplo 

Você criou uma pasta "MyUpdates" em seu disco, na qual localizou uma nova versão da aplicação "MyApp". Você não deseja mostrar os erros. Para preparar a atualização, escreve:

```4d
  // Sintaxe Windows
 SET UPDATE FOLDER("C:\\MyUpdates"+Folder separator+"MyApp"+Folder separator;True)
 
  // Sintaxe OS X
 SET UPDATE FOLDER("MacHD:MyUpdates"+Folder separator+"MyApp.app"+Folder separator;True)
```

#### Ver também 

[Get last update log path](get-last-update-log-path.md)  
[RESTART 4D](restart-4d.md)  