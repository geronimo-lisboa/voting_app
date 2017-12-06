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
////A lista de produtos
class ProductList extends React.Component {
  render() {
    const productComponents = Seed.products.map((produto) => (
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
