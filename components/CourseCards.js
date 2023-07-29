import Image from "next/image";
import ReactStars from 'react-stars'

function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

const CourseCard = ({image,title,description,stars,price})=>{

    async function showRazorpay() {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
    
        const data = await fetch("https://melodic-powerful-tailor.glitch.me/razorpay", {
          method: "POST",
        }).then((t) => t.json());
    
        console.log(data);
    
        const options = {
          key: "rzp_test_klearZLDHUg0tX",
          currency: data.currency,
          amount: data.amount.toString(),
          order_id: data.id,
          name: "Donation",
          description: "Thank you for nothing. Please give us some money",
          image: "",
          handler: function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
    
            alert("Transaction successful");
          },
          prefill: {
            name: "Rajat",
            email: "rajat@rajat.com",
            phone_number: "9899999999",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    
    return <div className="bg-white rounded p-2 mx-4">
        <div className={`${image} rounded`}></div>
        <h3 className="regular-font mt-4">{title}</h3>
        <p className="light-regular-font line-clamp-2 mt-2">{description}</p>
        <ReactStars count={5} value={stars} size={24} color2={'#ffd700'} />
        <div className="flex justify-between mt-2 align-center">
            <button  className="dark-green p-2 text-white rounded regular-font" onClick={showRazorpay}>Enroll now</button>
            <span className="regular-font inline-flex items-center">₹14999</span>
        </div>
    </div>
}

export default CourseCard;