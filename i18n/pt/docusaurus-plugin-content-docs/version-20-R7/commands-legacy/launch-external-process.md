---
id: launch-external-process
title: LAUNCH EXTERNAL PROCESS
slug: /commands/launch-external-process
displayed_sidebar: docs
---

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Syntax-->**LAUNCH EXTERNAL PROCESS** ( *nomeArquivo* {; *fluxoEntrada* {; *fluxoSaida* {; *fluxoErro*}}}{; *pid*} )<!-- END REF-->
<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeArquivo | Text | &#8594;  | Rota de acesso e argumentos de arquivo a lançar |
| fluxoEntrada | Text, Blob | &#8594;  | Fluxo de entrada(stdin) |
| fluxoSaida | Text, Blob | &#8592; | Fluxo de saída (stdout) |
| fluxoErro | Text, Blob | &#8592; | Fluxo de erro(stderr) |
| pid | Integer | &#8592; | Identificador único para processo externo |

<!-- END REF-->

:::info Compatibilidade

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Summary-->A partir de 4D v19 R4, recomendamos o uso de [`4D.SystemWorker class`](../API/SystemWorkerClass.md) para rodar e controlar processos externos.<!-- END REF--> Entretanto, esse comando ainda é compatível 

:::


#### Descrição 

O comando **LAUNCH EXTERNAL PROCESS** permite iniciar um processo externo de 4D, em Mac OS X e Windows.  
Em Mac OS X, este comando oferece acesso a todas as aplicações executáveis que possam ser iniciadas desde o Terminal.  
  
Passe no parâmetro *nomArquivo* a rota de acesso da aplicação a executar, como também os argumentos requeridos (se for necessário).  
  
Em Mac OS X, pode também passar apenas o nome da aplicação a executar; 4D utilizará então a variável do ambiente PATH para localizar o executável.  
  
**Advertência**: este comando apenas pode iniciar aplicações executáveis; não pode executar instruções que façam parte do shell (intérprete de comandos). Por exemplo, em Mac OS não é possível utilizar este comando para executar a instrução *feito* ou as indireções.  
  
O parâmetro *fluxoEntrada* (opcional) contém o *stdin* do processo externo. Quando o comando tiver sido executado, os parâmetros *fluxoSaida* e *fluxoErro* (se for passado) retornam respectivamente o *stdout* e o *stderr* do processo externo. Pode utilizar os parâmetros de tipo BLOB ao invés das cadeias de caracteres se gerenciar dados binários (como imagens).  
  
4D oferece três variáveis de ambiente específicas que podem ser configuradas utilizando [SET ENVIRONMENT VARIABLE](set-environment-variable.md) e estão disponíveis para seu uso no contexto de **LAUNCH EXTERNAL PROCESS**:

* *\_4D\_OPTION\_CURRENT\_DIRECTORY*: se utiliza para definir o diretório atual de processo externo que se iniciará. Em *valorVar*, deve passar a rota de acesso de diretório (sintaxe de tipo HFS em macOS e DOS em Windows).
* *\_4D\_OPTION\_HIDE\_CONSOLE* (Windows unicamente): permite ocultar a janela de console DOS. Deve passar "true" em *valorVar* para ocultar o console ou "false" para mostrar
* *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*: permite executar o processo externo em modo assincrônico, em outras palavras, sem bloqueio para as outras aplicações. Deve passar "false" em *valorVar* para definir uma execução assincrônica ou "true" para uma execução sincrônica (padrão normal). Para esta variável, passar "" em *valorVar* não faz nada.  
Se definir a variável do ambiente *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* como "false" via o comando [SET ENVIRONMENT VARIABLE](set-environment-variable.md) (execução assincrônica), os parâmetros *fluxoSaida* e *fluxoErro* não são devolvidos.

Estas variáveis são válidas no processo atual para a chamada abaixo a **LAUNCH EXTERNAL PROCESS**.
  
  
Quando for passado, o parâmetro *pid* (inteiro longo) devolve a ID única do processo criado para lançar o comando, independentemente do estado da opção *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*. Com esta informação, é mais fácil interagir com os processos externos criados pelo comando, por exemplo. para detê-lo. Se o lançamento do processo falha, não é devolvido o parâmetro *pid*.

#### Exemplos em Mac OS X 

Os exemplos abaixo utilizam o Terminal Mac OS X, disponível na pasta Aplicações/Utilidades.

1\. Para modificar os acessos a um arquivo (*chmod* é o comando Mac OS X utilizado para modificar o acesso aos arquivos):

```4d
 LAUNCH EXTERNAL PROCESS("chmod +x /pasta/meuarquivo.txt")
```

2\. Para editar um arquivo de tipo texto (*cat* é o comando Mac OS X utilizado para editar os arquivos). Neste exemplo, a rota de acesso completa do comando é passada:

```4d
 var entrada;saída : Text
 entrada:=""
 LAUNCH EXTERNAL PROCESS("/bin/cat /pasta/meuarquivo.txt";entrada;saída)
```

3\. Para obter os conteúdos da pasta “Usuários” (*ls -l* é o equivalente Mac OS X do comando *dir* em DOS):

```4d
 var $In;$Out : Text
 LAUNCH EXTERNAL PROCESS("/bin/ls -l /Usuários";$In;$Out)
```

4\. Para iniciar uma aplicação "gráfica" independente, é preferível utilizar o comando sistema *open* (neste caso, a instrução **LAUNCH EXTERNAL PROCESS** tem o mesmo efeito que fazer clique duplo na aplicação): 

```4d
 LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")
```

#### Exemplos em Windows 

5\. Para abrir NotePad:

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe")
```

6\. Para abrir Notepad e abrir um documento específico: 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe C:\\Docs\\nova pasta\\res.txt")
```

7\. Para iniciar a aplicação Microsoft® Word® e abrir um documento específico (Note o uso das duas ""):

```4d
 $meudoc:="C:\\Program Files\\Microsoft Office\\Office10\\WINWORD.EXE \"C:\\Documents and
 Settings\\Macros\\Escritorio\\MeusDocs\\NovaPasta\\test.xml\""
 LAUNCH EXTERNAL PROCESS($meudoc;$tIn;$tOut)
```

8\. Para executar um script Perl (é necessário ActivePerl):

```4d
 var $entrada;$saída : Text
 SET ENVIRONMENT VARIABLE("minhavariável";"valor")
 LAUNCH EXTERNAL PROCESS("D:\\Perl\\bin\\perl.exe D:\\Perl\\eg\\cgi\\env.pl";$entrada;$saida)
```

9\. Para iniciar um comando com o diretório atual e sem mostrar o console: 

```4d
 SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\4D_VCS")
 SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
 LAUNCH EXTERNAL PROCESS("meuComando")
```

10\. Para permitir ao usuário abrir um documento externo em Windows:

```4d
 $nomdoc:=Select document("";"*.*";"Escolha o arquivo a abrir";0)
 If(OK=1)
    SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
    LAUNCH EXTERNAL PROCESS("cmd.exe /C start \"\" \""+document+"\"")
 End if
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário (arquivo não encontrado, memória insuficiente, etc.), assume o valor 0.

#### Ver também 

[OPEN URL](open-url.md)  
[SET ENVIRONMENT VARIABLE](set-environment-variable.md)  