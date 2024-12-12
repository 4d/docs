---
id: build-application
title: BUILD APPLICATION
slug: /commands/build-application
displayed_sidebar: docs
---

<!--REF #_command_.BUILD APPLICATION.Syntax-->**BUILD APPLICATION** {( *constrAppConfigurações* )}<!-- END REF-->
<!--REF #_command_.BUILD APPLICATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| constrAppConfigurações | Text | &#8594;  | Endereço de acesso completo do arquivo de configurações a ser usado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.BUILD APPLICATION.Summary-->O comando BUILD APPLICATION inicia o processo de geração da aplicação levando em consideração os parâmetros definidos nas configurações do aplicativo atual ou na configuração de aplicação designado no parâmetro *constrAppConfigurações*.<!-- END REF-->   
  
**Nota:** Este comando só funciona com 4D Developer (monousuário). Não pode ser chamado de 4D Server, 4D em modo remoto, ou em uma aplicação fusionada. 

  
Um arquivo de configurações de construção de aplicação é um arquivo XML que contém todos os parâmetros usados para gerar um aplicativo. A maioria dos parâmetros pode ser visto na caixa de diálogo Construir Aplicativo... (para obter mais informações, consulte a seção *Gerador de aplicativos* do manual de Desenho de 4D).  
  
Por padrão, 4D cria um arquivo de configurações de construção de aplicativo chamado "buildApp.4DSettings" para cada banco de dados e o coloca na pasta Configurações (Settings) do banco de dados.

Se o banco ainda não foi compilado, ou se o código compilado está desatualizado, o comando irá iniciar primeiro o processo do compilador. Neste caso, a janela do compilador não aparece (a menos que ocorra um erro), apenas uma barra de progresso é exibida. Pode ocultar esta barra de progresso utilizando o comando [MESSAGES OFF](messages-off.md).

Se você não passar o parâmetro opcional *constrAppConfigurações*, o comando exibe uma caixa de diálogo de abrir de arquivo padrão,de modo que você possa selecionar um arquivo de configurações de construção de aplicativo. Quando a caixa de diálogo for validada, a variável de sistema Documento contém o caminho completo do arquivo de configurações aberto. 

Se você passar o caminho de acesso e nome de um arquivo XML para um projeto de aplicativo válido (codificação UTF - 8 ), o comando usará os parâmetros definidos no arquivo. Para obter mais informações sobre a estrutura e as chaves que podem ser usadas no arquivo de configurações de construção de aplicativo, consulte o manual *4D XML Keys BuildApplication*.
  
  
#### Exemplo 

Este exemplo cria duas aplicações em apenas um método:

```4d
 BUILD APPLICATION("c:\\folder\\buildApp\\myclientApp.xml")
 If(OK=1)
    BUILD APPLICATION(File(Build application settings file).platformPath) //configuração padrão
 End if
```

#### Variáveis de Sistema ou Conjuntos 

A variável de sistema OK toma o valor 1 se o comando foi executado corretamente. Caso contrário, toma o valor 0\. A variável sistema Document contém o endereço de acesso completo ao arquivo de configuração aberto.

#### Tratamento de erros 

Se o comando falhar, é gerado um erro que pode ser interceptado com a ajuda do comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[Compile project ](../commands/compile-project.md)  