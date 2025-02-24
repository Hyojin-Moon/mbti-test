import './App.css';
import AlertDialog from './components/AlertDialog';
import ToastMessage from './components/ToastMessage';
import Router from './router/Router';

function App() {

  return (
    <>
      <Router />
      <AlertDialog />
      <ToastMessage />
    </>
  );
}

export default App;
