import { createContext, useContext, useState, useEffect } from 'react';

const UsernameContext = createContext(null); 

export default function App(){
  const [active, setActive] = useState(useContext(UsernameContext));

  function updateContext(newContext){
    setActive(newContext);
  }

  return (
    <UsernameContext.Provider value={active}>
      <LogIn updateActiveUser={updateContext}></LogIn>
      <br></br><br></br>
      <ProductList></ProductList>
    </UsernameContext.Provider>
  )
}

function LogIn({updateActiveUser}){
  const user = useContext(UsernameContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const examples = [
    {username: "Guest", password: "Guest"},
    {username: "Manu", password: "Manu"}
  ]
  const [users, setUsers] = useState(examples);

  function signUp(e){
    e.preventDefault();
    let inUse = false;
    for(let i = 0; i < users.length; i++){
      let account = users[i];
      if (account.username == username) inUse = true;
    }
    if(inUse) {
      alert("Ese usuario ya existe");
    } else {
      const newUser = {username: username, password: password};
      setUsers([...users, newUser]);
      updateActiveUser(username);
      setUsername("");
      setPassword("");
    }
  }

  function logIn(e){
    e.preventDefault();
    let correctCredentials = false;
    for(let i = 0; i < users.length; i++){
      let account = users[i];
      if (account.username == username && account.password == password)
        correctCredentials = true;
    }
    if(correctCredentials){
      updateActiveUser(username);
      setUsername("");
      setPassword("");
    } else {
      alert("Datos incorrectos");
    }
  }

  function isLoggedIn(){
    return user != null;
  }

  function logOut(){
    updateActiveUser(null);
  }

  if(isLoggedIn()){
    return (
      <>
        <p>Bienvenido {user}</p>
        <button onClick={logOut}>Log Out</button>
      </>
    )
  } else{
    return(
        <form>
          <label>
            Username:
            <input value={username} name="username" onChange={e => setUsername(e.target.value)} />
          </label>
          <br></br>
          <label>
            Password:
            <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <br></br>
          <button onClick={logIn}>LogIn</button>
          <button onClick={signUp}>Sign Up</button>
        </form>
    )
  }
}

function AddProduct({add}){
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const user = useContext(UsernameContext);

  function addProduct(){
    if(user == null){
      alert("Debe iniciar sesión");
    } else {
      add(name, price, user);
      setName("");
      setPrice("");
    }
  }

  return (
    <>
      <label className="addMenu">
          Nombre:
          <input value={name} name="name" onChange={e => setName(e.target.value)} />
        </label>
        <br></br>
        <label>
          Price:
          <input type="number" value={price} name="price" onChange={e => setPrice(e.target.value)} />
        </label>
        <br></br>
        <button onClick={ addProduct }>Agregar Producto</button>
    </>
  )
}

function ProductList(){
  const list = [
    {id: 0, name: "Helao de 100", precio: 100, user: "Guest"},
    {id: 1, name: "Homelo chino", precio: 20, user: "Guest"},
  ]
  const [nextId, setNextId] = useState(3);
  const [products, setProducts] = useState(list);

  const listItems = products.map(data =>
    <Product product={data} key={data.id} user={data.user}></Product>
  )

  function addProduct(name, precio, user){
    const product = {id: nextId, name: name, precio: precio, user: user};
    setNextId(nextId + 1);
    setProducts([...products, product]);
  }

  return(
    <>
      <ul>{listItems}</ul>
      <br></br><br></br>
      <AddProduct add={addProduct}></AddProduct>
    </>
  )
}

function Product({product}){
  return (
    <>
      <h1>{product.name}</h1>
      <h3>${product.precio}</h3>
      <h3>{product.user}</h3>
    </>
  )
}