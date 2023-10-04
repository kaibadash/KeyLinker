import { useParams } from 'react-router-dom';
import EncryptForm from "./EncryptForm";

function App() {
  const { target } = useParams<{target: string}>();
  return (
    <div className="container">
      <h1>KeyLinker</h1>

      <div className="container">
        <EncryptForm initialTarget={ target ?? "" } />
      </div>
    </div>
  );
}

export default App;
