import Router from './shared/Router';
import { Reset } from 'styled-reset';

function App() {
  return (
    <>
      {/* 리셋 css 추가 */}
      <Reset />
      <Router />
    </>
  );
}

export default App;
