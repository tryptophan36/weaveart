import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import { useToast } from '../ui/use-toast';
import { createTransaction } from 'arweavekit';
import { useRouter } from 'next/navigation';
const DialogDemo = ({name,address}) => {
    const router = useRouter()
   const {toast}=useToast()
   const [amount,setAmount]=useState(0)
   const handleDonate=async ()=>{
   try {
    const transaction = await createTransaction({
        type: 'wallet',
        quantity: amount,
        target: address,
        environment: 'mainnet',
        options: {
            tags: [{ 'weaveartDonations': 'Donation'}],
            signAndPost:"true"
        },
    },
    );
    toast({
        title: "Succcess",
        description: "Transaction Complete",
      });
    console.log("Donation Transaction",transaction)
   } catch (error) {
    toast({
        title: "Something went wrong!",
        description: error.message || "Unknown Error",
      });
     console.log(error)

   }
   }
  return(
    <>
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Donate</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Donate to {name}</Dialog.Title>
        
        <fieldset className="Fieldset" >
          <label className="Label" htmlFor="name">
            Address
          </label>
          <p style={{color:"black",fontSize:"14"}}>{address}</p>
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="Amount">
            Amount(in $AR)
          </label>
          <input className="Input" id="username"
          value={amount}
           onChange={(e)=>setAmount(e.target.value)}
          defaultValue="Enter Amount" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green"
             onClick={handleDonate}
            >Donate</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    </>
  )
}
    
  


export default DialogDemo;