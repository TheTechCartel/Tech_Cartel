import Input from "./components/shared/Input";


function App() {
  return (
   <main className="w-screen font-clashGrotesk">
    <Input 
      addedClasses="" 
      width="w-[200px]"
      placeholder="Enter Email Address"
      type="text"
    />
   </main>
  );
}

export default App;
