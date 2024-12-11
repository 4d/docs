---
id: printers-list
title: PRINTERS LIST
slug: /commands/printers-list
displayed_sidebar: docs
---

<!--REF #_command_.PRINTERS LIST.Syntax-->**PRINTERS LIST** ( *arrayNoms* {; *altNomesArray* {; *modelosArray*}} )<!-- END REF-->
<!--REF #_command_.PRINTERS LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayNoms | Text array | &#8592; | Nomes das impressoras |
| altNomesArray | Text array | &#8592; | Windows: localização das impressoras; macOS: Nomes personalizados das impressoras |
| modelosArray | Text array | &#8592; | Modelos de impressoras |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PRINTERS LIST.Summary-->O comando PRINTERS LIST preenche os arrays passados como parâmetros com os nomes e opcionalmente com a localização os nomes personalizados e os modelos de impressão disponíveis para a máquina.<!-- END REF-->

**Nota**: se as impressoras se manejam utilizando um servidor de impressão (spooler), se devolve a rota de acesso completa (em Windows) ou o nome do spooler (em Mac OS).

Passe no parâmetro *nomesArray* o nome de um array de texto. Depois da execução do comando, este array conterá os nomes das impressoras disponíveis. Em Mac OS, este será o “sistema” fixo de nomes.  
  
Pode passar um segundo array opcional, *altNomesArray*. O conteúdo de este array dependerá da plataforma:

* Em Windows, para cada impressora, você obtém sua localização em red (o porto local).
* Em Mac OS, para cada impressora, você obtém seu nome personalizado, o qual pode se modificado pelo usuário. Este nome pode ser utilizado, por exemplo, em caixas de diálogos.

O parâmetro opcional *modelosArray* se utiliza para obter o modelo de cada impressora.   
  
Utilize os comandos [SET CURRENT PRINTER](set-current-printer.md) e [Get current printer](get-current-printer.md) para modificar ou obter a impressora selecionada em 4D. Deve passar os nomes devolvidos no primeiro array (*nomesArray*).  
  
Em Windows, o nome de una impressora pode ser modificado manualmente ao nível do sistema de operação. Por outro lado, sua localização e seu modelo estão associados a suas características físicas. Portanto, você pode utilizar os valores de array opcionais para verificar as características da impressora selecionada, geralmente, você pode verificar que todos as máquinas dos clientes utilizam a mesma impressora.  
  
Em Mac OS, esta verificação pode ser realizada a cabo utilizando o nome da impressora (nome do servidor de impressão), que é o mesmo para cada máquina que estiver conectada.

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se o comando tiver sido executado corretamente; do contrário, toma o valor 0 e os arrays se devolvem vazios. 

#### Ver também 

[Get current printer](get-current-printer.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 789 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


