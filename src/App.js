import { Button } from "../src/stories/Button.jsx";
import Header from '../src/stories/Header.jsx'
import {Input,Select} from '../src/stories/Components/Components.jsx'
function App() {
  const gender=[{name:'Male',value:'male'},{name:'Female',value:'female'},{name:'Other',value:"other"}]
  return (
    <div className="text-center text-[30px] bg-gray-200 h-screen">
      <Header />
      <div className="border-2 border-green-300 mx-auto w-fit shadow-xl z-10 mt-[3rem] p-3 rounded-lg bg-gray-100">
        <div className="py-1">
        <p class="text-red-600 text-[25px] mb-6">Practice Form </p>
        <div className="flex flex-col items-center justify-center">
        <Input size="medium" type="text" label="Name" name="name" placeholder="Enter the name"/>
        <Input size="medium" type="text" label="Email" name="email" placeholder="Enter the email"/>
        <Input size="medium" type="number" label="Phone" name="phone" placeholder="Enter the Phonenumber"/>
        <Select size="medium" label="Gender" options={gender}/>
        </div>
        <Button primary={true} label="Submit" size="small"/>
        </div>
      </div>
    </div>
  );
}

export default App;
