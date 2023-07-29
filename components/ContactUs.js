import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";


const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();
// console.log(form)
  let [sending, setSent] = useState(false);
  let [thanks, setThanks] = useState(false);



  const handleData = (data) => {
    // console.log(data);
    if (data) {
      setSent(true);
    }
    form.current.reset();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          
          if (result.text === "OK") {
            setThanks(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(errors);


  return (
    <div className="mx-8 sm:mx-20">
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight head-font text-gray-900 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed regular-font text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium regular-font text-gray-900">
                    +91 98800 43717
                  </p>
                  <p className="mt-1 text-lg font-medium regular-font text-gray-900">
                    +91 98800 43717
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-lg regular-font font-medium text-gray-900">
                    deepta.manu@gmail.com
                  </p>
                  <p className="mt-1 text-lg regular-font font-medium text-gray-900">
                    hr@deepta.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium regular-font leading-relaxed text-gray-900">
                    Moonjur Healthcare Pvt Ltd
                    <br />
                    Plot No -9 KH NO 160 1/2, Eco Option 21,
                    <br />
                    Aya Nagar, New Delhi – 110047
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl regular-font font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form  ref={form}
                onSubmit={handleSubmit(handleData)} className="mt-14">
{thanks === true ? (
                
                <div className="flex items-center justify-center ">
    <div>
      <div className="flex flex-col items-center space-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold regular-font">Thank You !</h1>
        <p className="text-center regular-font">Thank you for your interest! Check your email for a link to the guide.</p>
        <Link  href="/"
          className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600  rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm regular-font font-medium">
            Home
          </span>
        </Link>
      </div>
    </div>
  </div>
              ) :
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label for="" className="text-base regular-font font-medium text-gray-900">
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5  ">
                        <input
                          type="text"
                          name="user_name"
                        {...register("user_name", {
                          required: true,
                          maxLength: 180,
                        
                        })}
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 regular-font text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                         {errors.user_name?.type === 'required' && <p className="text-red-400 regular-font">Name is required</p>}
                      </div>
                    </div>

                    <div>
                      <label for="" className="text-base font-medium regular-font text-gray-900">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5  ">
                        <input
                          name="user_email"
                          type="email"
                          {...register("user_email", {
                            required: true,
                            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
                            
                          })}
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 regular-font text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                        {errors.user_email?.type === 'required' && <p className="text-red-400 regular-font">Email is required</p>}
                      {errors.user_email?.type === 'pattern' && <p className="text-red-400 regular-font">Valid email is required</p>}
                      </div>
                    </div>

                    <div>
                      <label for="" className="text-base regular-font font-medium text-gray-900">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5  ">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 regular-font text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" className="text-base regular-font font-medium text-gray-900">
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="mt-2.5  ">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full regular-font px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label for="" className="text-base regular-font font-medium text-gray-900">
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5  ">
                        <textarea
                           {...register("message", {
                            required: true,
                            minLength:4,
                            maxLength: 100,
                            
                          })}
                          name="message"
                          id=""
                          placeholder=""
                          className="block w-full px-4 regular-font py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                         {errors.message?.type === 'required' && <p className="text-red-400 regular-font">Message is required</p>}
                      {errors.message?.type === 'minLength' && <p className="text-red-400 regular-font">Write at least 4 character word</p>}
                      </div>
                    </div>
                   
                    <div className="sm:col-span-2">
                    {sending === false ? (
                      <input
                        type="submit"
                        value="Send"
                        className=" inline-flex items-center regular-font justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#5D9C59] border border-transparent rounded-md focus:outline-none hover:bg-black focus:bg-black"
                      />
                    ) : (
                      <input
                        type="submit"
                        value="Sending..."
                        className="inline-flex items-center regular-font justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      />
                    )}
                    </div>
                  </div>
              
              }

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
