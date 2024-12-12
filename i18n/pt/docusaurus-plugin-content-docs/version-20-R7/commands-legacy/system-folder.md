---
id: system-folder
title: System folder
slug: /commands/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *tipo* )} : Text<!-- END REF-->
<!--REF #_command_.System folder.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipo | Integer | &#8594;  | Tipo de pasta sistema |
| Resultado | Text | &#8592; | Rota de acesso de uma pasta do sistema ativo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.System folder.Summary-->O comando **System folder** devolve a rota de acesso a uma pasta particular do sistema operativo ou à pasta ativa do sistema Windows ou Mac OS.<!-- END REF-->

Passe um valor no parâmetro opcional *tipo* indicando o tipo de pasta do sistema. 4D lhe oferece as seguintes constantes predefinidas, localizadas no tema “*Pasta Sistema*”:

| Constante                     | Tipo          | Valor | Comentário                                                    |
| ----------------------------- | ------------- | ----- | ------------------------------------------------------------- |
| Applications or program files | Inteiro longo | 16    |                                                               |
| Desktop                       | Inteiro longo | 15    |                                                               |
| Documents folder              | Inteiro longo | 17    | Pasta "Documentos" do usuário                                 |
| Favorites Win                 | Inteiro longo | 14    |                                                               |
| Fonts                         | Inteiro longo | 1     |                                                               |
| Home folder                   | Inteiro longo | 18    | Pasta home atual do usuário (geralmente "/Users/<username>/") |
| Start menu Win\_all           | Inteiro longo | 8     |                                                               |
| Start menu Win\_user          | Inteiro longo | 9     |                                                               |
| Startup Win\_all              | Inteiro longo | 4     |                                                               |
| Startup Win\_user             | Inteiro longo | 5     |                                                               |
| System                        | Inteiro longo | 0     |                                                               |
| System Win                    | Inteiro longo | 12    |                                                               |
| System32 Win                  | Inteiro longo | 13    |                                                               |
| User preferences\_all         | Inteiro longo | 2     |                                                               |
| User preferences\_user        | Inteiro longo | 3     |                                                               |

**Notas**

* As constantes com sufixo **Win**, podem utilizar-se sobre Windows unicamente. Quando se utilizam em Mac OS, **System folder** devolve uma pasta vazia.
* As rotas de acesso a algumas pastas sistema podem especificar o usuário atual. As constantes 2 a 9 lhe permitem eleger se queres obter a rota de acesso a uma pasta comum para todos os usuários ou a rota personalizada para o usuário atual.

Se omitido o parâmetro *tipo*, a função devolverá a rota à pasta sistema ativa (= constante System).

#### Ver também 

[Get 4D folder](get-4d-folder.md)  
[Temporary folder](temporary-folder.md)  