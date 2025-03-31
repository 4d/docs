---
id: develop-plug-ins
title: Plug-ins de desenvolvimento
---

## Porquê a necessidade de um plug-in?

Embora 4D ofereça centenas de métodos integrados, para manipular objetos, registros e implementar a interface do usuário, pode ser necessário algum uso ou recurso especial (às vezes dependente da plataforma): alguém pode precisar de ODBC no Windows, ou pode precisar de serviços da Apple no macOS, enquanto outro ainda pode querer implementar ferramentas estatísticas específicas, login em redes sociais, plataforma de pagamento, acesso a arquivos pela rede, uma interface de usuário especial ou uma estrutura de imagem privada.

É óbvio que cobrir todas as áreas dos sistemas operacionais macOS e Windows com comandos 4D certamente levaria a um produto com milhares de comandos e, em simultâneo, a maioria dos usuários não teria necessidade de um conjunto tão grande de recursos. Além disso, a criação de uma ferramenta tão abrangente tornaria o ambiente 4D incrivelmente complexo e levaria meses de estudo para a maioria dos usuários antes que resultados úteis pudesse ser esperados.

A natureza modular do ambiente 4D permite a criação de aplicativos básicos, mas não impede o desenvolvimento de sistemas altamente complexos. A arquitetura 4D Plug-in abre o ambiente 4D para qualquer tipo de aplicação ou usuário. Os 4D Plug-ins multiplicam o poder e a produtividade da aplicação ou do usuário.

## Por que a necessidade de um plug-in?

Um plug-in é um pedaço de código que 4D lança no início. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade.

Normalmente, um plug-in faz coisas que:
- 4D não pode fazer (ou seja, tecnologia de plataforma específica),
- será muito difícil de escrever usando apenas 4D,
- só estão disponíveis como Ponto de Entrada Plug-in

Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

- Uma rotina **plug in** é uma rotina escrita em língua nativa (geralmente C ou C++) que provoca uma ação.
- Uma **área externa** é uma parte de um formulário que pode mostrar quase tudo e interagir com o usuário quando necessário.
- Um **processo externo** é um processo que corre sozinho, geralmente em loop, fazendo quase tudo o que quer. Todos os códigos de processo pertencem ao plug-in, 4D está simplesmente presente para receber/enviar eventos para o processo.

### Nota importante

Um plug-in pode ser muito simples, com apenas uma rotina executando uma tarefa muito pequena, ou pode ser muito complexo, envolvendo centenas de rotinas e áreas. Não há praticamente nenhum limite para o que um plug-in pode fazer, no entanto cada desenvolvedor de plug-in deve lembrar-se que um plug-in é uma peça de código de "amostra". É o plug-in que funciona dentro do 4D, e não o contrário. Como peça de código, é o anfitrião do 4D; não é uma aplicação isolada. Partilha o tempo e a memória da CPU com 4D e outros plug-ins, portanto, deve ser um código bem educado, utilizando apenas o que é necessário para rodar. Por exemplo, nos loops longos, um plug-in deve chamar a `PA_Yield()` para dar tempo ao planificador 4D, a menos que sua tarefa seja crítica tanto para ele quanto para a aplicação.

## Como criar um plug-in?

4D fornece no GitHub um SDK plug-in de código aberto [****](https://github.com/4d/4D-Plugin-SDK), contendo o API de Plugin 4D e o Assistente de Plugin 4D:

- o [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), escrito em C, acrescenta mais de 400 funções que o ajudam a criar facilmente os seus próprios plug-ins para adicionar novas funcionalidades à sua aplicação 4D. As funções API Plug-in 4D gerem todas as interacções entre a aplicação 4D e o seu plug-in.
- O [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código.


## Partilhar plug-ins

Encorajamo-lo a apoiar a comunidade de programadores 4D partilhando os seus plug-ins, de preferência na plataforma [GitHub](https://github.com/topics/4d-plugin). Recomendamos que você use o **`4d-plugin`** para ser referenciado corretamente.  