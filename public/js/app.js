////Os produtos que serão listados
class Product extends React.Component{
    //Construtor do objeto. Uso ele pra fazer o bind da variavel THIS ao método
    //handleUpVote, pra que a this exista lá. Sem isso this estaria bindada a null
    constructor(props){
      super(props);
      this.handleUpVote=this.handleUpVote.bind(this);
    }
    //handler da função de votação. Não posso simplesmente passar a função que
    //me foi dada como prop pelo pai do componente pq aí eu não teria o id do
    //componente, que varia de filho pra filho.
    handleUpVote(){
      this.props.onVote(this.props.id);
    }
    //a função que renderiza
    render(){
      return(
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl} />
          </div>
          <div className='middle aligned content'>
            <div className='header'>
              <a onClick={this.handleUpVote}>
                <i className='large caret up icon' />
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
              </a>
              <p>
                {this.props.description}
              </p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
}
////A lista de produtos (pág 50)
class ProductList extends React.Component {
  //O construtor de ProductList inializa o estado do componente como vazio.
  constructor(props){
    super(props);
    this.state={
      products : [],
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }
  //Pelo que vi é invocado depois do componente ser renderizado.
  componentDidMount(){
    this.setState({products : Seed.products});//Mudança de estado TEM que passar
    //pelo setState pq esse método tem mecânicas internas importantes do ciclo de
    //vida de um componente. Quando esse método for invocado o estado do componente
    //vai mudar e o react vai renderizar.
  }
  //Handler da votação - registra os votos.
  handleProductUpVote(productId){
    //map gera uma nova array. isso é necesário pq a array em state deve ser
    //considerada imutável.
    const modifiedProducts = this.state.products.map((produto)=>{
        if(produto.id === productId){
          //object.assign copia objetos.
          return Object.assign({}, produto,{
            votes: produto.votes+1,
          });
        }else{
          return produto;
        }
    });
    //Agora eu seto o estado com a variável imutável.
    this.setState({
      products:modifiedProducts,
    });
  }
  //O método que renderiza o componente
  render() {
    //Sort retorna a array sortida. A função de sortimento recebe dos valores
    //e deve retornar a comparação entre eles. Se resultado < 0, A vem primeiro,
    //se igual a 0 A e B não tem suas posições trocadas, se > 0 B vem primeiro.
    //Para valores numericos B-A é uma forma fácil de fazer a comparação.
    const sortedProducts = this.state.products.sort((a,b)=>(b.votes - a.votes));
    //map mapeia uma array para outra. Para cada elemento da array A ele invoca
    //a função passada como parâmetro, pega o retorno dela e o poe em uma array B.
    const productComponents = sortedProducts.map((produto) => (
      <div className='ui unstackable items'>
        <Product
          id={produto.id}
          title={produto.title}
          description={produto.description}
          url={produto.url}
          votes={produto.votes}
          submitterAvatarUrl={produto.submitterAvatarUrl}
          productImageUrl={produto.productImageUrl}
          onVote={this.handleProductUpVote}
          />
      </div>
    ));
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    )
  }
}
//É a renderizaçaõ do DOM do react na página. O componte Foobar, definido pela
//classe Foobar será renderizado no componente de id = content.
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
