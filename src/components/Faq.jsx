import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Divide } from "lucide-react"
export default function Faq() {
    return (
        <div>
            <h1 className=" text-4xl mb-4 text-black flex justify-center  "> Frequently Asked Question</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 p-2 gap-5 " >

                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger> What amenities are included in the room rate?
                            </AccordionTrigger>
                            <AccordionContent >

                                Our room rates typically include basic amenities such as Wi-Fi, air conditioning, and daily housekeeping. Specific amenities may vary depending on the room type. Please check the room details for more information.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Do you offer group bookings?</AccordionTrigger>
                            <AccordionContent >

                                Indicate if group bookings are possible and any special rates or conditions.
                            </AccordionContent>
                        </AccordionItem>



                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                What is your cancellation policy?

                            </AccordionTrigger>
                            <AccordionContent>
                                Clearly state the cancellation policy and any associated fees.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I request a specific room type or floor?
                            </AccordionTrigger>
                            <AccordionContent >

                                While we cannot guarantee specific room requests, we will do our best to accommodate your preferences. Please let us know your preferences during the booking process or by contacting our reservations team.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                What is the check-in and check-out time?

                            </AccordionTrigger>
                            <AccordionContent >

                                Our standard check-in time is [Check-in time] and check-out time is [Check-out time]. Early check-in or late check-out may be possible, subject to availability and additional fees.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>  Does the hotel offer parking?
                            </AccordionTrigger>
                            <AccordionContent >

                           
                             Yes, we offer [Type of parking, e.g., valet, self-parking] for our guests. Please inquire about parking fees and availability during your stay.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger> Is Wi-Fi available throughout the hotel?</AccordionTrigger>
                            <AccordionContent >

                           
                             Yes, high-speed Wi-Fi is available throughout the hotel, free of charge.
                            </AccordionContent>
                        </AccordionItem>



                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                            
                            What payment methods do you accept? 
                            </AccordionTrigger>
                            <AccordionContent>
                           
                           
                            List all accepted payment methods, such as credit cards, debit cards, and online payment systems.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger> Are there any local events or festivals happening during my stay?
                            </AccordionTrigger>
                            <AccordionContent >
                           
                             Please check our website or contact our front desk for information on local events and festivals.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                            Is there a minimum age requirement for check-in? 

                            </AccordionTrigger>
                            <AccordionContent >

                            Specify the minimum age required for check-in.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>




            </div>

        </div>
    )
}
