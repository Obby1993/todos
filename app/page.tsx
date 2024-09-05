
import  Todos  from "./components/allTodosNotDone/TodosNotDone";
import Banner from "./components/banner/Banner";


export default function Home() {


  return (
    <main className="">
      <Banner />
      <div className="bg-white">
        <h2> A faire:</h2>
        <Todos />
      </div>


    </main>
  );
}
