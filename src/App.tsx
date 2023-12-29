import { Card } from "./components/Card";

function App() {
  return (
    <>
    <div>
    hello world
    <Card id={1}
    paragraph="typescript"
    details="TS pra front and back" />
    <Card id={2}
    paragraph="HTML"
    details="HTML para frontend"/>
    
    
     </div> 
    
    <div>
      footer 
    </div>
    </>
  );
}

export default App;
