import ChooseTour from "./layouts/choose-tour/ChooseTour";
import Header from "./layouts/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ChooseTour />
      </main>
    </>
  );
}
