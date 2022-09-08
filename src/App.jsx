import SignIn from "./pages/SignIn";
import awsmobile from "./aws-exports";
import { Amplify } from "aws-amplify";


Amplify.configure(awsmobile)

function App() {

  return (
   <main className="font-clashGrotesk">
    <SignIn/>
   </main>
  );
}

export default App;
