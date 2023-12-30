import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>

    hello world
        <Card id={1}
        paragraph="typescript"
        details="TS pra front and back" />
        
        <Card id={2}
        paragraph="HTML"
        details="HTML para frontend " />
    
    
    
      </Layout>
  );
}

export default App;
