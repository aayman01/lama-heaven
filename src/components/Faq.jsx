import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from ".//ui/accordion";
import React from 'react';

const Faq = () => {
  return (
    <div className="px-4 mb-10">
      <div>
        <h1 className="text-2xl font-bold mb-2 text-center">FAQ</h1>
        <h2 className="text-3xl mb-16 text-center">Frequently Asking Question</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
          <AccordionContent>
            Clearly state the cancellation policy and any associated fees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What amenities does the hotel offer?
          </AccordionTrigger>
          <AccordionContent>
            List all amenities, such as Wi-Fi, swimming pool, gym, etc.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
          <AccordionContent>
            Indicate if group bookings are possible and any special rates or
            conditions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
