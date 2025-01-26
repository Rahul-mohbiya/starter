"use client"
import Image from "next/image";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="hero">
        <img
          className="png"
          src="Rectangle 560.png"
          alt=""
          width={150}
          height={458}
         
        />
        <div className="hero-left ">
        <ol >Home / Website development / Starter Website Development Package 
          <li className="hero1">Website development</li> </ol>

        <h1 className="heading">Starter Web Package</h1>
         <div className="text-lg">
  <span className="cutamt">₹9,999.00</span>
  <span className="font-bold text-green-600">₹7,999.00</span>
</div>

<p className="p1" >Embark on your online journey with simplicity and impact. Our <br/> 
Starter Web Package is perfect for personal portfolios and small <br/>
businesses venturing into the digital space. For just ₹7,999<br/>
 (discounted from ₹9,999), you get a 1-page website with responsive<br/>
  design, basic SEO optimization, contact form integration, and social<br/>
   media linkage. Take advantage of this limited-time offer and establish<br/>
    your captivating online presence today!</p>

    const about=
<div>
      <div className="button">
        <button className="btn">-</button>
        <button className="btn">1</button>
        <button className="btn">+</button>
        <button className="btn-left"> Add to basket </button>
        </div>
        
        
  </div>
</div>


        </div>

        
<h1 className="line"></h1>

        <h1 className="head">Description</h1>

        <p className="p">Embark on your online journey with simplicity and impact. Our Starter Web Package is perfect for personal portfolios and small businesses venturing into<br/> 
        the digital space. For just ₹7,999 (discounted from ₹9,999), you get a 1-page website with responsive design, basic SEO optimization, contact form <br/>integration, and social media linkage. Take advantage of this limited-time offer and establish your captivating online presence today!</p>
        
        <h1 className="head">Starter Website Development Package Key Features:</h1>
<div className="features">
1. Page Website:
<p className="text">Create a concise yet compelling online presence with a single-page website that delivers your message effectively.</p>

2. Responsive Design:
<p className="text">Ensure your website looks stunning and functions seamlessly across various devices, providing a great user experience for your visitors.</p>

3. Basic SEO Optimization:
<p className="text">Lay the foundation for online visibility with basic Search Engine Optimization (SEO) to help your website rank better on search engines.</p>

4. Contact Form Integration:
<p className="text">Enable easy communication with your audience by integrating a contact form, allowing visitors to reach out to you effortlessly.</p>

5. Social Media Integration:
<p className="text">Leverage the power of social media by seamlessly integrating your social profiles with your website, fostering engagement and expanding your online<br/> presence.</p>

Limited-Time Offer: ₹7,999 (Original Price: ₹9,999) – $99
<p className="text"> Don’t miss out on this incredible offer to establish your online presence at a discounted rate. Take the first step towards a captivating website with our<br/> Starter Web Package today!</p>
</div>
        <h1 className="head1"> Related products</h1>
        <div className="card">
          <div className="card-pannel"><img
          className="footer"
          src="Rectangle 560.png"
          alt=""
          width={150}
          height={458}
        />
          <h1>Business Web Package</h1>
      <ol>₹19,999.00</ol>
      <button className="endbtn">Read more</button>
          </div>

          <div className="card-pannel"><img
          className="footer"
          src="Rectangle 560.png"
          alt=""
          width={150}
          height={458}
       />
          <h1>Business Web Package</h1>
      <ol >₹19,999.00</ol>
      <button className="endbtn">Read more</button>
          </div>

          <div className="card-pannel"><img
          className="footer"
          src="Rectangle 560.png"
          alt=""
          width={150}
          height={458}
         />
          <h1>Business Web Package</h1>
      <ol>₹19,999.00</ol>
      <button className="endbtn">Read more</button>
          </div>
        </div>
        
        </main>
    </div>
  );
}
