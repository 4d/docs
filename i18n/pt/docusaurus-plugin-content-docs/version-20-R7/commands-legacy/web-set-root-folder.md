---
id: web-set-root-folder
title: WEB SET ROOT FOLDER
slug: /commands/web-set-root-folder
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET ROOT FOLDER.Syntax-->**WEB SET ROOT FOLDER** ( *pastaRaiz* )<!-- END REF-->
<!--REF #_command_.WEB SET ROOT FOLDER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pastaRaiz | Text | &#8594;  | Rota de acesso da pasta raiz do webserver |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SET ROOT FOLDER.Summary-->O comando WEB SET ROOT FOLDER é utilizado para modificar a pasta raiz por padrão na qual 4D procura os arquivos HTML pedidos ao servidor web.<!-- END REF-->

Este comando não leva em consideração a pasta raiz HTML por padrão, definida na Propriedades do banco. Para maior informação sobre esta pasta, consulte a seção *Conexões de Segurança*.

A localização da pasta raiz pode ser expressa em sintaxe HTML (tipo URL), ou em sintaxe sistema (rota absoluta):  

* Sintaxe HTML: os nomes de pastas são separados por uma barra oblíqua ("/"), sem importar a plataforma utilizada.
* Sintaxe sistema: rota de acesso absoluta (“nome longo”) respeitando a sintaxe da plataforma atual, por exemplo:  
\- (Mac OS) Disco:Aplicações:miserv:pasta  
\- (Windows) C:\\Aplicações\\miserv\\pasta

Notas:

Será necessário reiniciar o servidor web para que a nova pasta de raiz seja levada em consideração

Pode saber a qualquer momento a localização da pasta raiz utilizando o comando [Get 4D folder](get-4d-folder.md).

Se especificar uma rota de acesso inválida, será gerado um erro do administrador arquivos do sistema operativo. Pode interceptar o erro com um método [ON ERR CALL](on-err-call.md). Se o método mostrar uma caixa de diálogo de alerta ou uma mensagem, aparecerá do lado do navegador.

#### Ver também 

[Get 4D folder](get-4d-folder.md)  
[ON ERR CALL](on-err-call.md)  