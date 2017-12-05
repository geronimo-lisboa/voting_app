class Product extends React.Component{
    render(){
      return(
        <div>
          TO DO
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
