---
id: get-serial-information
title: GET SERIAL INFORMATION
slug: /commands/get-serial-information
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL INFORMATION.Syntax-->**GET SERIAL INFORMATION** ( *chave* ; *usuario* ; *empresa* ; *conectados* ; *maxUsuarios* )<!-- END REF-->
<!--REF #_command_.GET SERIAL INFORMATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| chave | Inteiro longo | &#x1F858; | Chave única do produto (encriptada) |
| usuario | String | &#x1F858; | Nome registrado |
| empresa | String | &#x1F858; | Nome da organização ou empresa registrada |
| conectados | Inteiro longo | &#x1F858; | Número de usuários conectados |
| maxUsuarios | Inteiro longo | &#x1F858; | Número máximo de usuários conectados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET SERIAL INFORMATION.Summary-->O comando GET SERIAL INFORMATION retorna várias informações sobre a serialização da versão atual de 4D.<!-- END REF-->

* *chave*: ID único do produto instalado. Um número exclusivo associado a uma aplicação 4D (como 4D Server, 4D em modo local, 4D Desktop, etc) instalado em uma máquina. Este número é criptografado, é claro.
* *usuario*: Nome de usuário da aplicação, tal como definido durante a instalação.
* *empresa*: Empresa do usuário ou nome da organização, tal como definido durante a instalação.
* *conectados*: Número de usuários conectados ao executar o comando.
* *maxUsuarios*: Número máximo de usuários conectados simultaneamente.

**Nota:** Os dois últimos parâmetros sempre retornam 1 para o 4D único usuário, exceto nas versões de demonstração (0 é retornado).

GET SERIAL INFORMATION faz parte do regime geral de componente de proteção implementado em 4D. Os desenvolvedores de componentes podem associar uma cópia do seu produto a um determinado aplicativo 4D instalado, a fim de evitar cópias ilegais.

A serialização funciona da seguinte forma: um usuário que queira ter um componente envia sua chave original gerada através do comando GET SERIAL INFORMATION para o desenvolvedor. Isso pode ser feito através de um formulário de Pedido incluído em uma versão demo do componente. A chave gerada é única e está associado a uma aplicação 4D específica. 

O desenvolvedor de componentes pode gerar seu próprio número de série que combina a chave e uma cifra dada. O componente entregue vai oferecer uma função de verificar se as informações retornadas pelo GET SERIAL INFORMATION combinam com este número de série. Caso contrário, o usuário não será capaz de utilizar o componente. 

**Nota:** Os plug-ins de desenvolvedores podem usar esse esquema de proteção também. Para obter mais informações, consulte o [API Reference 4D Plugin](http://sources.4d.com/trac/4d%5F4dpluginapi#no1). 
