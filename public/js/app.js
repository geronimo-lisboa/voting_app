class Product extends React.Component{
    render(){
      return(
        <div className='item'>
          <div className='image'>
            <img src='images/products/image-aqua.png' />
          </div>
          <div className='middle aligned content'>
            <div className='description'>
              <a>Fort Knight</a>
              <p>Authentic renaissance actors, delivered in just two weeks.</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src='images/avatars/daniel.jpg'
              />
            </div>
          </div>
        </div>
      );
    }
}

class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello World
        <Product />
      </div>
    );
  }
}
//É a renderizaçaõ do DOM do react na página. O componte Foobar, definido pela
//classe Foobar será renderizado no componente de id = content.
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
