# Conceitos

### Framework vs. Biblioteca

Em geral, o que diferencia uma biblioteca de um framework é a questão do controle - frameworks ditam como o seu projeto será estruturado, enquanto bibliotecas são como legos, blocos de código que podem ser usados em qualquer lugar. Se usarmos uma metáfora com a construção, bibliotecas são os tijolos, enquanto o framework é a estrutura.

### O que é um componente?

O conceito de componente é bastante simples de entender, basicamente se trata de um elemento visual de software, que tem seu próprio estado, recebe propriedades e implementa sua própria lógica de renderização. Componentes podem ser reutilizáveis dentro da sua aplicação.

O React permite a criação de diversos tipos de componentes. Dependendo da estrutura do seu projeto, você pode ter interesse em categorizá-los de várias formas. Por exemplo:

- de acordo com o comportamento, podemos classificar componentes como:
    Stateless,
    Statefull,
    PureComponents,
    High Order Components

- de acordo com a estrutura, podemos classificar componentes como:
    Componentes visuais
    Containers

Podemos também criar componentes de acordo com o paradigma de programação de sua preferência e com a arquitetura do seu projeto.

### Por que usar JSX?

JSX é uma extensão da sintaxe JavaScript. É recomendada para ser usada com React (embora não seja obrigatória) para descrever os elementos de UI. Parece muito com um template de linguagem, porém com todo o poder que o JavaScript oferece.

Sem o JSX, o React é muito mais complicado de utilizar e de difícil leitura. Por exemplo:

O seguinte componente, escrito com JSX:
```
    class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
    }

    ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
    );
```

Seria escrito da seguinte forma, sem JSX:

```
    class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
    }

    ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
    );
```

### Props vs. State
Props e State são objetos do React que contém os dados utilizados dentro dos componentes. Apesar de parecidos, os dois têm diferentes funções e utilização:
- Props são as Propriedades que um componente recebe, parecidas com os parâmetros de uma função. Ao receber uma propriedade de outro componente, um componente filho é atualizado e renderizado novamente;
- State é o Estado manipulado dentro do componente, parecido com as variáveis declaradas dentro de uma função. Ao alterar o estado, o componente atualiza a si mesmo e é renderizado novamente.

### setState()
O método setState() é a forma de manipular o State do componente. Conforme a documentação do React, esxistem 3 pontos muito importantes sobre este método:

1) NUNCA se deve alterar o State diretamente, apenas atribuindo o valor desejado. Alterando o State dessa forma, o componente não será renderizado novamente e a alteração não terá o efeito desejado.

2) O único método do ciclo de vida do React em que voce pode atribuir valores ao State é o `constructor()`.

3) As atualizações do State são assíncronas. Para melhorar a performance, o React pode "acumular" chamadas de `setState()` para serem atualizadas em conjunto.

Para lidar com este comportamento, é necessário saber como utilizar o método. Primeiro, podemos passar como parâmetro uma função, ao invés de um objeto. Essa função deverá receber o State anterior como primeiro parâmetro, e as Props atribuídas ao componente no momento como segundo parâmetro. Como por exemplo:

```
    this.setState(
        (state, props) => {
            counter: state.counter + props.increment
        }
    )
```

Segundo, caso você prefira utilizar um objeto para a atualização, podemos utilizar um callback. O método permite a seguinte sintaxe: `setState(updater[, callback])` sendo opcional a parte entre []. Exemplo:
```
    this.setState(
        {
            value: newValue
        }, this.myFunction()
    )
```
Terceiro, se você não depende da atualização do State para realizar nenhuma outra ação, pode tratar o método como uma Requeste, sem callback:
```
    this.setState(
        {
            value: newValue
        }
    )
```

Outro ponto relevante é que as atualizações de State são feitas como um "merge". Quando você atualiza uma variável dentro do State, os outros valores permanecem conservados dentro das outras variáveis, sem sobrescrever o objeto completo. 

Vale também comentar que o State está contido dentro de um componente. Componentes filhos não têm acesso a esses valores a menos que estes lhe sejam enviados.

### Refs
O React é uma biblioteca baseada em programação declarativa. Porém, em certas ocasiões, é necessário modificar um componente de forma imperativa. Para isso, podemos passar métodos imperativos através de Refs para componentes filhos, assim como as Props.

### Event handling
A manipulação de eventos no React tem três particularidades a serem observadas:
    1) O nome dos eventos são passados em camelCase e não em letras minúsculas. Por exemplo: `onclick` em HTML e `onClick` em JSX;
    2) O evento espera um valor do tipo objeto, em vez de string. Por exemplo: `onClick="myFunction()"` está errado, o correto seria `onClick={myFunction}`;
    3) Não se pode utilizar `return false` no parâmetro para evitar o comportamento padrão. É necessário incluir o método `preventDefault()` na manipulação do evento.

### Class vs functional components
Componentes criados como Classes permitem o uso de todos os métodos do ciclo de vida do react, assim como o objeto State. Estas ferramentas nos dão maior poder para definir o comportamento e a renderização do componente.

Componentes funcionais são basicamente funções em javascript, que aceitam Props e retornam elementos do React. Sendo assim, estes componentes são muito menores e mais fáceis de ler e testar. Outra vantagem é a facilidade de separar as responsabilidades de cada componente. Utilizando as boas práticas da programação funcional, seu código fica muito mais limpo e organizado, separando containers e componentes visuais com facilidade.

Além disso, os desenvolvedores do React já declararam a intenção de implementar melhoras de performance para componentes funcionais em futuras versões.



# Passo a Passo (exercício prático)

-Criação da APP com create-react-app
-Subtituir a página criada automáticamente por um "Hello, World!"
-Criar um arquivo 'pokemon.js' com os componentes Picture e Description

Criar componente simples stateless Message
Importar dentro de app.js
Passar a mensagem como props

Criar um componente com state
* aberto e fechado
* ativo e inativo