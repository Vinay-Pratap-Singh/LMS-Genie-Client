"use client";

import React from "react";
import Image from "next/image";
import mainImage from "@/assets/contactPage/main.png";
import { branches } from "@/sampledata";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { IBranch } from "@/types/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Breadcrumb from "@/components/contact/Breadcrumb";
import Icon from "@/components/icon/Icon";

const contactFormSchema = z.object({
  firstName: z.string().min(3, {
    message: "Please enter a valid first name",
  }),
  lastName: z.string().min(3, {
    message: "Please enter a valid last name",
  }),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Please enter a valid subject"),
  message: z.string().min(20, "Please enter a valid message"),
});

const page = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  // handling the form submit
  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
  };

  return (
    <div>
      {/* adding the breadcrumb */}
      <Breadcrumb title="Contact" />

      {/* main section */}
      <main className="flex flex-col-reverse items-center gap-3 border-b-[1px] border-gray-500 py-5 dark:border-gray-800 sm:flex-row sm:px-10 sm:py-0 sm:pt-2 xl:gap-20 xl:px-48 xl:pt-10">
        <div className="flex flex-col items-center space-y-3 p-2 sm:items-start lg:p-0">
          <h1 className="text-2xl font-semibold lg:text-3xl">
            Connect with us
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300 lg:text-base">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <Button>
            <Icon id="EnvelopeSimple" className="mr-2 w-5" />
            Copy Email
          </Button>
        </div>

        {/* for image */}
        <div>
          <Image src={mainImage} width={1500} alt="main image" />
        </div>
      </main>

      {/* branches section */}
      <section className="flex flex-col items-center gap-10 py-10 sm:px-10 xl:px-48">
        <div className="space-y-2 text-center md:w-[30rem]">
          <h1 className="text-xl font-semibold md:text-3xl">
            Our branches all over the world.
          </h1>
          <p className="px-5 text-sm text-gray-700 dark:text-gray-300 md:text-base">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.
          </p>
        </div>

        {/* branches details section */}
        <section className="grid grid-cols-1 gap-5 px-2 md:grid-cols-3 lg:grid-cols-4">
          {branches &&
            branches.map((branch: IBranch) => (
              <div
                key={branch?.id}
                className={`flex h-72 items-end bg-[url("../assets/contactPage/building.jpg")] bg-contain`}
              >
                <div className="m-5 bg-white p-2 text-center">
                  {branch?.branchType && (
                    <p className="text-xs font-medium text-primary-500">
                      {branch?.branchType}
                    </p>
                  )}
                  <h3 className="text-sm font-medium dark:text-gray-700">
                    {branch?.branchName}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {branch?.branchDescription}
                  </p>
                </div>
              </div>
            ))}
        </section>
      </section>

      {/* contact form */}
      <section className="flex flex-col items-center gap-2 bg-gray-50 py-5 dark:bg-gray-800 sm:px-10 md:gap-10 md:py-10 xl:px-48">
        <h1 className="text-xl font-semibold md:text-3xl">Contact Us</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[40%_auto] md:gap-5 lg:gap-10">
          {/* left one */}
          <div className="space-y-5 p-2">
            <p>
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>
            {/* for details */}
            <div className="grid grid-cols-[40%_auto] gap-5 text-sm">
              <p className="font-medium uppercase text-primary-500">address</p>
              <p>1702 Olympic Boulevard Santa Monica, CA 90404</p>
              <p className="font-medium uppercase text-primary-500">
                phone number
              </p>
              <p>(219) 555-0114</p>
              <p className="font-medium uppercase text-primary-500">
                email address
              </p>
              <p>test@gmail.com</p>
            </div>
          </div>

          {/* contact form */}
          <div className="space-y-5 bg-white p-2 sm:p-5 lg:p-10">
            {/* form header */}
            <div className="space-y-1">
              <h1 className="text-2xl font-medium">Get in touch</h1>
              <p className="text-sm text-gray-500">
                Feel free contact with us, we love to make new partners and
                friends
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex flex-col items-center gap-5 lg:flex-row">
                  {/* for first name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* for last name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name ..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* for email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="test@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* for subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="title ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* for message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here ..."
                          {...field}
                          className="h-32 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full lg:w-fit">
                  Send message
                  <Icon id="PaperPlaneRight" className="ml-2 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* google map */}
      <div>
        <iframe
          title="Google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.470884993!2d83.3215085045414!3d26.763844606559932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697737057968!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default page;
