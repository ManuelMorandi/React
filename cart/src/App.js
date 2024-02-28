import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {id: 0, name: "Shirt", price: 150},
    {id: 1, name: "Pants", price: 200},
  ]

  function add(name, amount){
    if(amount <= 0) { alert("Cantidad inválida"); }
    else {
      let index = cart.findIndex((product) => product.name == name);
      if(index == -1){
        let prodIndex = products.findIndex((product) => product.name == name);
        const item = products[prodIndex];
        const totalPrice = parseInt(products[prodIndex].price) * parseInt(amount);
        const discounted = amount > 3 ? totalPrice * 0.85 : totalPrice;
        const newProduct = {id: item.id, name: name, price: item.price, amount: amount, totalPrice: totalPrice, discounted: discounted};
        setCart([...cart, newProduct]);
      } else {
        let newProduct = cart[index];
        newProduct.amount += parseInt(amount);
        newProduct.totalPrice = parseInt(newProduct.price) * parseInt(newProduct.amount);
        const price = newProduct.totalPrice;
        newProduct.amount > 3 ? newProduct.discounted = price * 0.85 : newProduct.discounted = price;
        let newList = [];
        for(let i = 0; i < cart.length; i++)
          if(i != index)
            newList = [...newList, cart[i]];
        setCart([...newList, newProduct])
      }
    }
  }
  function remove(name, amount){
    if(amount <= 0) { alert("Cantidad inválida"); }
    else {
      let index = cart.findIndex((product) => product.name == name);
      if (index >= 0){
        let newProduct = cart[index];
        let newList = [];
        for(let i = 0; i < cart.length; i++)
          if(i != index)
            newList = [...newList, cart[i]];
        if(amount < newProduct.amount){
          newProduct.amount -= amount;
          newProduct.totalPrice = newProduct.price * newProduct.amount;
          newProduct.discounted = newProduct.totalPrice;
          if(newProduct.amount > 3)
            newProduct.discounted *= 0.85;
          newList = [...newList, newProduct];
        }
        setCart(newList);
      }
    }
  }

  const productCards = products.map((product) => 
    <ProductCard key={product.id} product={product} addFunction={add} removeFunction={remove} />
  )

  return (
    <>
      <ul>{ productCards }</ul>
      <Cart cart={cart} />
    </>
  )
}

function ProductCard({ product, addFunction, removeFunction }){
  const { name, price } = product;
  const [amount, setAmount] = useState(0);

  function add(){
    addFunction(name, parseInt(amount));
  }
  function remove(){
    removeFunction(name, parseInt(amount));
  }

  return(
    <div className='Card'>
      <h3>{ name }</h3>
      <h5>${ price }</h5>
      <input type="number" value={amount} min={0} onChange={e => setAmount(e.target.value)} />
      <button onClick={ add }>+</button>
      <button onClick={ remove }>-</button>
    </div>
  )
}

function Cart({ cart }){
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let result = 0;
    for(let i = 0; i < cart.length; i++)
      result += cart[i].discounted;
    setTotal(result);
  })

  const tableData = cart.map(product => 
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.amount}</td>
      <td>{product.price}</td>
      <td>{product.discounted}</td>
    </tr>  
  )

  function calculateTotal(){
    let result = 0;
    for(let i = 0; i < cart.length; i++)
      result += cart[i].discounted;
    return result;
  }
  
  return (
    <div className='Cart'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          { tableData }
        </tbody>
        <tfoot>
          <tr>
            <td>Total Price: </td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}