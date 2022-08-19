
import Header from './components/Header';
import CardComp from './components/Card';

function App() {
  return (
    <div className="container">
      <Header title='Galeria de imagenes con React' />
      <CardComp imgSrc='default' title='Card title' description='text description' />
    </div>
  );
}

export default App;
