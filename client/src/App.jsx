import { Navbar, Welcome, Footer, Services, Transactions, Bitcoin } from "./components";

const App=()=>{
  return (
   
    
      <div className="content">
      

      <Bitcoin /> 
      
      
      <div className="spoon">
      <Bitcoin /> 
      <Navbar />
      <Welcome />
     
      <Services />
      <Transactions />
      
      <Footer />
      
      </div>
      
    
    
      </div>
    
  );
}

export default App;
