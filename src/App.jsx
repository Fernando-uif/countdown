import { Timer } from "./components/Timer";
import text from "./sass/base/text.module.scss";
import background from './sass/themes/background.module.scss';

function App() {
  return (
    <>
    <section className={`${background.background} ${background.start}`} >
      <h1 className={text.title}>we're launching soon</h1>

      <Timer/>
      {/* <footer className={`${background.mountains}`}></footer> */}
    </section>
    </>
  );
}

export default App;
