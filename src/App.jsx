import text from "./sass/base/text.module.scss";
import backgroud from './sass/themes/background.module.scss';

function App() {
  return (
    <section className={`${backgroud.background} ${backgroud.start}`} >
      <h1 className={text.title}>we're launching soon</h1>
    </section>
  );
}

export default App;
