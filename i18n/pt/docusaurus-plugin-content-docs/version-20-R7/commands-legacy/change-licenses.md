---
id: change-licenses
title: CHANGE LICENSES
slug: /commands/change-licenses
displayed_sidebar: docs
---

<!--REF #_command_.CHANGE LICENSES.Syntax-->**CHANGE LICENSES**<!-- END REF-->
<!--REF #_command_.CHANGE LICENSES.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CHANGE LICENSES.Summary-->O comando CHANGE LICENSES mostra a caixa de diálogo de atualização de licenças 4D .<!-- END REF-->  
  
Este comando só pode ser utilizado com aplicações 4D com um único usuário e não pode ser chamado desde um componente. Quando as senhas estão habilitadas, este comando só pode ser executado pelo Designer ou Administrador; não faz nada quando é chamado pelos usuários que não tem os direitos de acesso adequados.  
  
A caixa de diálogo Atualizar licença permite a um usuário ativar plug-ins, ou o servidor web na máquina onde se executa. Em 4D e 4D Server, pode mostrar esta caixa de diálogo selecionando o comando **Atualizar licença**... no menu **Ajuda**.  

CHANGE LICENSES é uma forma conveniente de permitir o licenciamento e adicionar números de expansão em uma aplicação 4D compilada distribuída a seus clientes. Os desenvolvedores 4D e os administradores de sistemas podem utilizar este comando para distribuir uma aplicação 4D e permitir aos usuários introduzir sua Licença sem enviar uma atualização à aplicação todas as vezes.  
  
Para maior informação sobre o funcionamento desta caixa de diálogo, consulte a seção *Instalação e ativação* do Guia de instalação de 4D.

#### Exemplo 

Em uma caixa de diálogo de configuração ou de preferências personalizada, coloque um botão com o método abaixo:  
  
```4d
  // Método de objeto do botão bLicença
 CHANGE LICENSES
```
  
  
Desta forma um usuário pode ativar licenças sem ter que modificar a base.  

#### Ver também 

[License info](license-info.md)  
[Is license available](is-license-available.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 637 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


