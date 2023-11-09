import { Button } from "../src/stories/Button.jsx";
import Header from "../src/stories/Header.jsx"
import { Input, Select } from "../src/stories/Components/Components.jsx"
import { SecondaryButton, Card, Tabs, TabList } from '@workday/canvas-kit-react';
import { Modal, useModalModel } from '@workday/canvas-kit-react/modal';
import { DeleteButton, PrimaryButton } from '@workday/canvas-kit-react/button';
import { Popup, useCloseOnOutsideClick, useCloseOnEscape, usePopupModel } from '@workday/canvas-kit-react/popup';
import { Flex } from '@workday/canvas-kit-react/layout';


function App() {

  const gender = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }, { name: 'Other', value: "other" }]
  return (
    <div className="text-center text-[30px] h-screen">
      <div className="h-[12%] bg-gray-200">
        <Header />   
      </div> 
        <div className="h-[88%] bg-[url('./stories/assets/photo3.png')] bg-cover">
          <div className="w-fit h-full m-auto flex">
            <Card padding="xs" className="m-auto" backgroundColor="#FDFD96">
              <Card.Heading><p class="text-red-600 text-[25px] flex items-center justify-center">Practice Form </p> </Card.Heading>
              <Card.Body>
                <div className="border-2 border-green-300 mx-auto w-fit shadow-xl z-10 p-3 rounded-lg bg-gray-100">
                  <div className="py-1">
                    {/* <p class="text-red-600 text-[25px] mb-6">Practice Form </p> */}
                    <div className="flex flex-col items-center justify-center mb-3">
                      <Input size="medium" type="text" label="Name" name="name" placeholder="Enter the name" />
                      <Input size="medium" type="text" label="Email" name="email" placeholder="Enter the email" />
                      <Input size="medium" type="number" label="Phone" name="phone" placeholder="Enter the Phonenumber" />
                      <Select size="medium" label="Gender" options={gender} />
                    </div>
                    {/* <Button primary={true} label="Submit" size="small"/> */}
                    <Modal>
                      <Modal.Target as={PrimaryButton} size="small" className="mb-0">Submit</Modal.Target>
                      <Modal.Overlay>
                        <Modal.Card>
                          <Modal.CloseIcon aria-label="Close" />
                          <Modal.Heading>Submit</Modal.Heading>
                          <Modal.Body>
                            <p className="mb-3">Are you sure you want to submit</p>
                            <Flex gap="s">
                              <Modal.CloseButton as={PrimaryButton}>Submit</Modal.CloseButton>
                              <Modal.CloseButton>Cancel</Modal.CloseButton>
                            </Flex>
                          </Modal.Body>
                        </Modal.Card>
                      </Modal.Overlay>
                    </Modal>
                  </div>
                </div>
              </Card.Body>
            </Card>

          </div>
      </div>
    </div>
  );
}

export default App;
