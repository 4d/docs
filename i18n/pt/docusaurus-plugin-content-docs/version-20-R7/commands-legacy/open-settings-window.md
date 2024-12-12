---
id: open-settings-window
title: OPEN SETTINGS WINDOW
slug: /commands/open-settings-window
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SETTINGS WINDOW.Syntax-->**OPEN SETTINGS WINDOW** ( *seletor* {; *acesso* {; *tipoConfiguração*}} )<!-- END REF-->
<!--REF #_command_.OPEN SETTINGS WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Text | &#8594;  | Chave que designa um tema ou página ou um grupo de parâmetros da caixa de diálogo Preferências |
| acesso | Boolean | &#8594;  | True=Bloquear as outras páginas da caixa de diálogo, False ou se omitir=Deixar ativas as outras páginas da caixa de diálogo |
| tipoConfiguração | Integer | &#8594;  | 0 ou omitido = configuração da estrutura; 1 = configuração de usuário, 2 = Configuração usuário para arquivo de dados |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

O comando OPEN SETTINGS WINDOW abre a caixa de diálogo Preferências de 4D ou as configurações do banco de dados do aplicativo atual 4D e exibe os parâmetros ou a página correspondente à chave *seletor* fornecida.  
  
O parâmetro *seletor* deve conter uma "chave" indicando a caixa de diálogo e a página a ser aberta. Essa chave é construída assim: */Diálogo{/Página{/Parâmetros}}*. Diálogo indica a caixa de diálogo a ser exibida: você pode passar "4D" (em Preferências) ou "banco de dados" (Configurações de Banco de Dados). Por exemplo, para indicar a página Compiler da Preferência do Banco de dados, o *seletor* deve conter "*/Bancodedados/Compilador*". A lista de chaves que podem ser utilizadas é fornecida abaixo. Se você passar uma barra ("/") no *seletor*, o comando exibe a primeira página da caixa de diálogo Configurações de Banco de Dados.  
  
O parâmetro de *acesso* lhe permite controlar as ações do usuário em Preferências ou na caixa de diálogo Configurações de banco de dados, bloqueando as outras páginas. Normalmente, você pode desejar que o usuário seja capaz de personalizar alguns parâmetros, impedindo os outros de serem modificados. Neste caso, passando True no parâmetro de *acesso* significa que apenas a página especificada pelo parâmetro *seletor* serão ativadas e modificáveis, enquanto o acesso a todas as outras páginas serão bloqueadas (clicar nos botões na barra de navegação não terá nenhum efeito). Se você passar False ou omitir o parâmetro de *acesso*, todas as páginas da caixa de diálogo serão acessíveis sem restrições.  
  
O parâmetro *tipoPropriedades* é tido em conta nos bancos configurados no modo "Propriedades usuário" somente (neste modo, as "Propriedades usuário" personalizadas são geradas num arquivo externo e são usadas em vez das propriedades padrão, veja o manual de Desenho). Neste contexto, este parâmetro lhe permite indicar se quer acessar à caixa de diálogo das "Propriedades de estrutura" ou das "Propriedades usuário". Pode passar uma das seguintes constantes, do tema "*Ambiente 4D*":  
  
| Constante              | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                     |
| ---------------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure settings     | Inteiro longo | 0     | Acesso ás "Propriedades de estrutura" (valor por padrão se o parâmetro for omitido). Neste modo, os valores do seletor utilizáveis são idênticos aos do modo padrão.                                                                                           |
| User settings          | Inteiro longo | 1     | Acesso ás "Propriedades usuário". Neste modo, somente algumas chaves são utilizáveis no parâmetro *seletor*.<br/>                                                                                                                                      |
| User settings for data | Inteiro longo | 2     | Acesso à "Configuração usuário para arquivo de dados, que é, configuração usuário armazenada no mesmo nivel que o arquivo de dados. Neste modo, só certas chaves podem ser utilizadas com o parâmetro *seletor* (mesmo subconjunto que a configuração usuário) |
  
  
Se você passar uma chave inválida, a primeira página da caixa de diálogo Configurações de Banco de Dados é exibida.

##### Chaves de rotas (modo padrão) 

A seguir você vê uma lista de chaves que podem ser usadas no parâmetro *seletor,* quer dizer, com as "Propriedades de estrutura":  
  
*/4D* 
*/4D/General*  
/4D/Structure   
/4D/Form editor  
/4D/Method editor  
/4D/Client-Server  
/4D/Shortcuts  
/Database  
/Database/General  
/Database/Mover  
/Database/Interface  
/Database/Interface/Developper   
/Database/Interface/User  
/Database/Interface/Shortcuts  
/Database/Compiler  
/Database/Database   
/Database/Database/Data storage   
/Database/Database/Memory and cpu   
/Database/Database/International  
/Database/Backup  
/Database/Backup/Scheduler  
/Database/Backup/Configuration  
/Database/Backup/Backup and restore   
/Database/Client-Server  
*/Database/Client-Server/Network* 
/Database/Client-Server/IP configuration  
*/4D* 
*/4D/General* 
*/4D/Structure* 
*/4D/Form editor* 
*/4D/Method editor* 
*/4D/Shortcuts* 
*/Database* 
*/Database/General* 
*/Database/Mover* 
*/Database/Interface* 
*/Database/Interface/Developper* 
*/Database/Interface/User* 
*/Database/Interface/Shortcuts* 
*/Database/Compiler* 
*/Database/Database* 
*/Database/Database/Data storage* 
*/Database/Database/Memory and cpu* 
*/Database/Database/International* 
*/Database/Backup* 
*/Database/Backup/Scheduler* 
*/Database/Backup/Configuration* 
*/Database/Backup/Backup and restore* 
*/Database/Client-Server* 
*/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web*  
/Database/Web/Config  
/Database/Web/Options 1  
/Database/Web/Options 2  
/Database/Web/Log format  
/Database/Web/Log scheduler  
/Database/Web/Webservices   
/Database/SQL   
/Database/php   
/Database/Compatibility   
/Database/Security

**Nota de compatibilidade:** O comando continua a funcionar com as chaves definidas para as versões 4D 11, a correspondência é estabelecida automaticamente por 4D. No entanto, é recomendável substituir as chamadas anteriores pelas chaves descritas acima

##### Chaves de rotas (modo Propriedades usuário) 

Estas são as chaves que podem ser usadas no parâmetro *seletor* no modo "Propriedades usuário":

*/Database* 
*/Database/Interface* 
*/Database/Database/Memory and cpu* 
*/Database/Client-Server* 
**/Database/Client-Server/Network* 
*/Database/Client-Server/IP configuration* 
*/Database/Web* 
*/Database/Web/Config* 
*/Database/Web/Options 1* 
*/Database/Web/Options 2* 
*/Database/Web/Log format* 
*/Database/Web/Log scheduler* 
*/Database/Web/Webservices* 
*/Database/SQL* 
*/Database/php* 

Chaves adicionais em modo "User settings for data":

*/Database/Backup* 
*/Database/Backup/Scheduler* */Database/Backup/Configuration* 
*/Database/Backup/Backup and restore*

#### Exemplo 1 

Abra a página "Método" das preferências 4D:  
  
```4d
 OPEN SETTINGS WINDOW("/4D/Method editor")
```

#### Exemplo 2 

Abra o parâmetro "Atalhos" nas configurações de banco de dados ao travar as outras configurações:   

```4d
 OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)
```

#### Exemplo 3 

Open Database Settings, na primeira página:  

```4d
 OPEN SETTINGS WINDOW("/")
```

#### Exemplo 4 

Acceso à interface das Propriedades do banco no modo "Propriedades usuário":

```4d
 OPEN SETTINGS WINDOW("/Database/Interface";False;1)
```

#### Variáveis e conjuntos do sistema 

Se a caixa de diálogo Preferências/Propriedades é validada, a variável sistema OK devolve 1; se for cancelada, OK devolve 0.
