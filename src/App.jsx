import './App.css';
import AlertDialog from './components/shared/AlertDialog';
import ToastMessage from './components/shared/ToastMessage';
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
