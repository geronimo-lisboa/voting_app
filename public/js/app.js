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
  handleProductUpVote(productId){
    console.log(productId + ' foi votado');
  }
  //O método que renderiza o componente
  render() {
    //Sort retorna a array sortida. A função de sortimento recebe dos valores
    //e deve retornar a comparação entre eles. Se resultado < 0, A vem primeiro,
    //se igual a 0 A e B não tem suas posições trocadas, se > 0 B vem primeiro.
    //Para valores numericos B-A é uma forma fácil de fazer a comparação.
    const sortedProducts = Seed.products.sort((a,b)=>(b.votes - a.votes));
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
