---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RELOAD PROJECT.Summary-->O comando **RELOAD PROJECT** recarrega as definições do arquivo fonte (métodos, formulários, etc.) do disco para o projeto executando no ambiente atual 4D.<!-- END REF--> Só pode ser usado com projetos 4D executados em **modo interpretado**. A execução de comando é assíncrona. 

Geralmente um projeto é recarreagdo automaticamente quando a aplicação 4D detectar que um arquivo fonte foi adicionado, modificado ou apagado. Será o caso quando um arquivo for editado diretamente do 4D Developer IDE ou depois que a janela de aplicação 4D for movido do fundo para a frente da tela do OS.

Chamar o comando **RELOAD PROJECT** é necessário quando os mecanismos de recarga automáticos do projeto não podem ser aplicados, como por exemplo nos contextos abaixo:

* o projeto é executado pelo 4D Server ou 4D Developer e os arquivos fonte são modificados por uma maneira externa, por exemplo por uma ação *pull* de um reppositório controle fonte; e não pode ou não quer manualmente mover a janela de aplicação, por exemplo porque quer ter uma execução automática.
* o projeto é rodado pelo 4D Server em modo headless e arquivos fonte foram modificados.

O comando não faz nada se o ambiente Design/Desenho não estiver aberto.

Quando o comando for chamado de:

* um 4D Developer conecteado a um 4D Server na mesma máquina, é executado primeiro no 4D Server, depois no lado 4D Developer.
* um 4D Developer conectado remotamente a um 4D Server, é executado apenas em 4D Server.
* um 4D monousuário ou um 4D Server, é executado localmente.

#### Ver também 

  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1739 |
| Thread-seguro | &check; |
| Proibido no servidor ||


