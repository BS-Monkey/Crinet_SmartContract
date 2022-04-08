// import logo from './logo.svg';
import HomePage from './AllPages/HomePage/HomePage';
import './App.css';

import { SnackbarProvider } from 'notistack';
import Slide from '@material-ui/core/Slide';

function App() {
  return (
    <SnackbarProvider
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
    maxSnack={1}
    TransitionComponent={Slide}
    >
      <div className="App">
        <HomePage></HomePage>
      </div>
    </SnackbarProvider>
  );
}

export default App;
