---
id: open-url
title: OPEN URL
slug: /commands/open-url
displayed_sidebar: docs
---

<!--REF #_command_.OPEN URL.Syntax-->**OPEN URL** ( *rota* {; *appName*}{; *} )<!-- END REF-->
<!--REF #_command_.OPEN URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594;  | Path of document or URL to open |
| appName | Text | &#8594;  | Name of application to use |
| * | Operador | &#8594;  | Se especificado = URL não é traduzido, se omitido = URL é traduzido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OPEN URL.Summary-->O comando **OPEN URL** lança seu navegador web por padrão e o abre com a URL passada no parâmetro *url*.<!-- END REF-->  
  
O parâmetro *rota* pode conter bem um URL estandarte ou uma rota de acesso de arquivo. O comando aceita dois pontos (':') Sob Mac OS, barras oblíquas ('\\') Sob Windows ou um URL Posix que comece por arquivo://. Se o parâmetro *nomAp* se omite, 4D primeiro tenta interpretar o parâmetro *rota* como um nome de rota de arquivo. Se este é o caso, 4D solicitará ao sistema abrir o arquivo utilizando a aplicação mais apropriada (por exemplo, um navegador para os arquivos .html, Word para os arquivos .doc, etc.). O parâmetro *\** se ignora neste caso. 

Se o parâmetro *rota* contém um URL estandarte (protocolos mailto:, news:, http:, etc.), 4D lança o navegador web por padrão e acessa ao URL. Se não há navegador nos volumes conectados ao ordenador, o comando não têm efeito.

Quando se passa o parâmetro *nomAp*, o comando interroga ao sistema. Caso se instale uma aplicação com este nome, que se inicia e o comando lhe pede que abra o endereço URL ou o documento especificado.   
Em Windows, o mecanismo para o reconhecimento do nome da aplicação é a mesma que o utilizado pelo comando "Executar" do menu Inicio. Por exemplo, poderia passar:

 "iexplore" para iniciar Internet Explorer.  
 "chrome" para iniciar Chrome (se está instalado)  
 "winword" para iniciar MS Word (se está instalado)

**Nota**: encontrará a lista de aplicações instaladas no *registry* na seguinte chave: HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths  
Sob OS X, o mecanismo utiliza o Finder que indexa automaticamente todas as aplicações instaladas. Pode reconhecer toda aplicação .app por seu nome de package (com ou sem o sufixo .app). Por exemplo, pode passar:  
  
 "safari"  
 "FireFox"  
 "TextEdit"  
  
Se a aplicação *nomAp* não se encontra, nenhum erro se devolve; o comando se executa como se o parâmetro não tivesse sido especificado.  
  
4D codifica automaticamente os caracteres especiais da URL. Se passa o caractere *\**, 4D não traduzirá os caracteres especiais do URL. Esta opção lhe permite acessar e enviar as URLS de tipo "*http://www.server.net/page.htm?q=something*".  
  
**Nota**: este comando não funciona quando for chamado desde um processo web.

#### Exemplo 1 

Os seguintes exemplos mostram os diferentes tipos de cadeias que são aceitas como URLs pelo comando:   
  
```4d
 OPEN URL("http://www.4d.com")
 OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")
 OPEN URL("C:\\Users\\Laurent\\Documents\\pending.htm")
 OPEN URL("mailto:jean_martin@4d.fr")
```

#### Exemplo 2 

Este exemplo pode ser utilizado para lançar uma aplicação mais conveniente:   
  
```4d
 $file:=Select document("";"";0)
 If(OK=1)
    OPEN URL(Document)
 End if
```

#### Exemplo 3 

Pode abrir um arquivo texto com diferentes aplicações:

```4d
 OPEN URL("C:\\temp\\cookies.txt") //abre o arquivo com o Bloc de notas
 OPEN URL("C:\\temp\\cookies.txt";"winword") //abre o arquivo com MS Word (se está instalado)
 OPEN URL("C:\\temp\\cookies.txt";"excel") //abre o arquivo com MS Excel (se está instalado)
```

#### Ver também 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 673 |
| Thread-seguro | &check; |
| Proibido no servidor ||


