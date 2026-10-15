import { useEffect } from "react";

function App(){
  useEffect(()=>{
    getData();
  })
  async function getData() {
    let data=await fetch("http://localhost:3200/")
    data=await data.json();
    console.log(data)
    
  }
  return (
    <>
    <h1>Hello I am pawan and Today Learned the is cors</h1>
    </>
  )
}
export default App;