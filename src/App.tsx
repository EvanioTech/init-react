import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
    
    <div>
    <Header />
    hello world
    <Card id={1}
    paragraph="typescript"
    details="TS pra front and back" />
    <Card id={2}
    paragraph="HTML"
    details="HTML para frontend "
    />
    
    
     </div> 
    
    <Footer/>
    </>
  );
}

export default App;
