import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Divide } from "lucide-react"
  
  export default  function faq() {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 p-2 " >

        
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
          What is your cancellation policy?
        
          </AccordionTrigger>
          <AccordionContent>
          Clearly state the cancellation policy and any associated fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What amenities does the hotel offer?
          </AccordionTrigger>
          <AccordionContent>
          List all amenities, such as Wi-Fi, swimming pool, gym, etc.
          </AccordionContent>
        </AccordionItem>
       
         <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>

          Indicate if group bookings are possible and any special rates or conditions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      </div>
    )
  }
  