////Os produtos que serão listados
class Product extends React.Component{
    render(){
      return(
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl} />
          </div>
          <div className='middle aligned content'>
            <div className='header'>
              <a>
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
  render() {
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
