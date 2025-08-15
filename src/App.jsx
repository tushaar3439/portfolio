
import './App.css'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaHome, FaPhoneAlt, FaServer, FaGithub, FaLaptopCode} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Element, Link} from "react-scroll"
import { IoPersonSharp, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWorkOutline, MdDesignServices } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { PiFilmSlate } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrHostMaintenance } from "react-icons/gr";


import { useInView } from 'react-intersection-observer';





function App() {

  const {ref , inView} = useInView({
    root: document.getElementById('main-scroll'), // The scrollable container
    threshold: 0.2, // Adjust this value to control when the element is considered in view
    triggerOnce: true // Optional: to trigger the animation only once
  });



  return (
    

<div className="App">
 <div className="flex">
      {/* Left scrollable section */}
      <div className="w-3/12 overflow-y-scroll h-screen bg-[#040b14] p-2 flex flex-col items-center">
        <div className=" h-[130px] w-[130px] rounded-full bg-gray-900 flex items-center justify-center m-[30px]">
         <img src='/profile2.jpg' alt="Profile" className="rounded-full h-[100px] w-[100px]" />
        </div>
        <div className="text-center text-white m-5 text-[30px] font-bold font-sans">
          Tushar Gurjar
        </div>
        <div className="flex gap-5 mb-2.5">
          <div className="rounded-full h-[50px] bg-gray-900 w-[50px] mt-[15px] text-white text-[20px] flex items-center justify-center">
           <FaXTwitter/>
          </div>
          <div className="rounded-full h-[50px] bg-gray-900 w-[50px] mt-[15px] text-white text-[20px] flex items-center justify-center">
           <FaFacebookF/>
          </div>
          <div className="rounded-full h-[50px] bg-gray-900 w-[50px] mt-[15px] text-white text-[20px] flex items-center justify-center">
           <FaInstagram/>
          </div>
          <div className="rounded-full h-[50px] bg-gray-900 w-[50px] mt-[15px] text-white text-[20px] flex items-center justify-center">
           <FaLinkedinIn/>
          </div>
        </div>

        
        <div className="flex justify-start w-full px-4 gap-2 mb-8.5">
          <div className="mt-8.5 space-y-4 text-white/80 flex flex-col text-[20px] gap-y-8 mr-1.5">
          <FaHome className='text-[20px]'/>
          <IoPersonSharp/>
          <MdOutlineWorkOutline/>
          <IoDocumentTextOutline className='text-[20px]'/>
          <FaServer/>
          <FaPhoneAlt className='text-[18px]'/>

          </div>
        <nav className="flex flex-col  mt-8 space-y-9">
          <Link to='home' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] hover:text-white cursor-pointer'>HOME</Link>
          <Link to='about' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] hover:text-white cursor-pointer'>ABOUT</Link>
          <Link to='resume' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] hover:text-white cursor-pointer'>RESUME</Link>
          <Link to='works' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] hover:text-white cursor-pointer'>WORKS</Link>
          <Link to='services' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] cursor-pointer hover:text-blue-500 transition-colors'>SERVICES</Link>
          <Link to='contact' smooth={true} duration={500} containerId='main-scroll' className='text-white/80 flex items-center gap-2 text-[20px] hover:text-white cursor-pointer'>CONTACT</Link>
        </nav>
        </div>


        



      </div>

      {/* Right scrollable section */}
      <div id='main-scroll' className="w-9/12 overflow-y-scroll h-screen bg-white border-l-black border-white border-[1px]">
        
      <Element name="home" className="h-screen  text-3xl">
        <div className="bg-[url('/src/assets/home-bg.jpg')] bg-cover bg-center h-full w-full">
        <div className="bg-black/50 h-full w-full ">
        
        <div className=" h-[100vh] flex justify-center flex-col px-3">
        <div className="text-yellow-400 font-mono">
          HELLO WORLD!
        </div>
        <div className="text-white text-[65px] font-bold">
          Tushar Gurjar
        </div>
        
        

        </div>
        </div>
        </div>
      </Element>
      <Element name="about" className="h-[160vh] ">
        <div className="">
          <div className="text-[30px] mt-4 inline-block mx-2 font-serif pb-4 border-b-blue-400 border-[4px] border-white font-bold" >
            About
          </div>
          <div className="text-[20px] pb-[4rem] pt-[2rem] inline-block px-2 font-serif">
           Hi! I'm a passionate Front-End Developer based in Jaipur, India, currently pursuing my B.Tech. I specialize in creating responsive, user-friendly web interfaces and have worked on multiple frontend projects that reflect my commitment to clean design and efficient code.
          </div>
          <div className="flex">
          <div className="w-1/3 h-[50vh] ml-2 bg-[url('/src/assets/home-bg.jpg')] bg-cover bg-center mr-[1rem]">
          </div>
          <div className="w-2/3">
            <div className="font-bold text-[30px] ">Frontend Developer</div>
            <div className="">Front-End development is more than just code for me — it’s a creative process I truly enjoy. With hands-on project experience and a constant eagerness to learn, I’m always growing as a developer.

            </div>
            <div className=" flex">
            <div className="w-1/2 ">
              <ul className=" mt-4 list-inside text-[18px] space-y-4">
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Name:</b> <p>Tushar Gurjar</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Birthday:</b> <p>09 march 2006</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Age:</b> <p>19</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Phone:</b> <p>+91 8739824632</p>
                </li>
              </ul>
            </div>



            <div className="w-1/2 ">
              <ul className=" mt-4 list-inside text-[18px] space-y-4">
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Degree</b> <p>Btech CS (AI&DS)</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Country:</b> <p>India</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>City:</b> <p>Jaipur</p>
                </li>
                <li className='flex space-x-2'>
                  <img src='/Blue-Dot-PNG-File.png' className='h-6 pt-1'></img>
                  <b>Email:</b> <p>tuusshhar@gmail.com</p>
                </li>
              </ul>
            </div>

          </div>


          </div>
          </div>


        <div className="text-[30px] mt-4 inline-block mx-2 font-serif pb-4 border-b-blue-400 border-[4px] border-white">
            Skills
          </div>
          <div className="flex">
             <div className="w-1/2 ">
              <ul className=" mt-4 list-inside text-[24px] space-y-4 font-serif pl-1.5 ">
                <li className='flex space-x-2'>
                  <img src='/html.png' className='h-[35px] pt-1'></img>
                  HTML
                </li>
                <li className='flex space-x-2'>
                  <img src='/css.png' className='h-[35px] pt-1'></img>
                  CSS
                </li>
                <li className='flex space-x-2 relative right-1.5'>
                  <img src='/JavaScript.png' className='h-[25px] pt-1'></img>
                  JavaScript
                </li>
                <li className='flex space-x-2'>
                  <img src='/bootstrap.png' className='h-[25px] pt-1'></img>
                  Bootstrap
                </li>
              </ul>
            </div>

            <div className="w-1/2 ">
              <ul className=" mt-4 list-inside text-[24px] space-y-4 font-serif ">
                <li className='flex space-x-2'>
                  <img src='/tailwind.png' className='h-[30px] pt-1'></img>
                  Tailwind CSS
                </li>
                <li className='flex space-x-2'>
                  <img src='/React.png' className='h-[35px] pt-1'></img>
                  React
                </li>
                <li className='flex space-x-2'>
                  <img src='/list-bullet.png' className='h-6 pt-1'></img>
                  Social Adaptability
                </li>
                <li className='flex space-x-2'>
                  <img src='/list-bullet.png' className='h-6 pt-1'></img>
                  Communication Skills
                </li>
              </ul>
            </div>



          </div>

        </div>
      </Element>

      <Element name="resume" className="h-[150vh] px-1.5">
        <div ref={ref} className={`transition duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} border-b-blue-400 border-white text-[30px] inline-block border-4 pb-2.5 font-bold mb-[2rem]`}>Resume</div>
        <div  ref={ref}
      className={`transition duration-700 ease-in-out text-[18px] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <b>"Design is intelligence made visible."</b> As a Front-End Developer, I bridge the gap between creative design and functional code—crafting seamless, responsive, and intuitive interfaces using HTML, CSS, JavaScript, and React. I believe a great user experience isn’t just built — it’s engineered with purpose and precision.</div>
        <div className="text-[28px] font-bold mt-8 mb-6">Education</div>

        <div className="grid grid-cols-2 gap-4 mb-8">

        
        <div className="flex">
        <div className="">
        <div className="h-[15px] w-[15px] border-2 border-blue-400 rounded-full bg-white"></div>
        <div className="h-[280px] w-0.5 bg-blue-400 relative left-1.5"></div>
        <div className="h-[15px] w-[15px] border-2 border-blue-400 rounded-full bg-white"></div>
        <div className="h-[260px] w-0.5 bg-blue-400 relative left-1.5"></div>
        </div>
        <div className="">
        <div className="relative top-[-10px] text-[24px] text-black/50 left-1.5">10<sup>th</sup> Standard</div>
        <div className="text-[20px] font-bold px-1.5">kendriya vidyalaya no-2, Jaipur</div>
        <div className="font-bold py-2 px-3 " >2020-2021</div>
        
        <div className="px-1.5 mb-5">I successfully completed my Secondary School Education (Class 10) with a strong academic foundation, gaining essential knowledge in Mathematics, Science, Social Studies, and Languages. This stage helped me develop analytical thinking, discipline, and problem-solving skills, along with building a habit of consistent learning that I carry forward in my personal and professional growth.</div>
        
        <div className="relative top-[-10px] text-[24px] text-black/50 left-1.5">12<sup>th</sup> Standard</div>
        <div className="text-[20px] font-bold px-1.5">kendriya vidyalaya no-2, Jaipur</div>
        <div className="font-bold py-2 px-3 " >2022-2023</div>

        <div className="px-1.5">I completed my Higher Secondary Education (Class 12) in the Science stream with Physics, Chemistry, and Mathematics (PCM) as my core subjects, securing an overall score of 87%. This academic journey strengthened my logical thinking, problem-solving skills, and analytical mindset, while also building a strong foundation for my technical and programming interests.</div>
        
        </div>

        

        </div>

        <div className="flex">
        
        <div className="">
        <div className="h-[15px] w-[15px] border-2 border-blue-400 rounded-full bg-white"></div>
        <div className="h-[280px] w-0.5 bg-blue-400 relative left-1.5"></div>
        </div>

        <div className="">
        <div className="relative top-[-10px] text-[24px] text-black/50 left-1.5">B.Tech in Computer Science(AI&DS)</div>
        <div className="text-[20px] font-bold px-1.5">
          Poornima University, Jaipur
        </div>

        <div className="font-bold py-2 px-3 " >2023-Present</div>

        <div className="px-1.5 mb-5">I am currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Data Science at Poornima University, Jaipur. This program is equipping me with advanced knowledge in AI, machine learning, data analytics, and software development, preparing me for a dynamic career in technology.</div>


        </div>



        </div>





        </div>

        </Element>

      <Element name="works" className="h-[235vh] ">
        <div className="pl-1.5">
        <div className="border-b-blue-400 border-white text-[30px] inline-block border-4 pb-2.5 font-bold mb-9 text-black">
          WORKS
        </div>

<div className="text-[18px]">As a frontend developer, I craft intuitive, responsive, and visually appealing web interfaces that focus on user experience and performance. Below are some of the projects I've worked on — each one a step forward in mastering modern web technologies like React, Tailwind CSS, and JavaScript.</div>

        <div className="flex py-12">

        <div className="w-1/2 relative bg-black/60 h-[17rem]">
        <div className="bg-black/20 h-full w-full z-30 absolute top-3 left-3 hidden"></div>
        <a href='https://theme-change-gaming-website.vercel.app/'><img src='/poject1.png' className='relative top-3 left-3 h-[17rem] z-20'></img></a>
        
        </div>

        <div className="w-1/2 pl-5 flex flex-col justify-center">
        <div className="text-2xl font-bold mb-4">
        Theme change (Gaming website).
        </div>
        <div className="text-[16px]">
        This website allows users to seamlessly switch between multiple visual or color themes enhancing personalization and accessibility. It provides engaging and dynamic user experience by adapting interface to user preferences, making gameplay visually appealing
        </div>
        </div>

        </div>

        <div className="flex py-12 ">

        <div className="w-1/2 pr-5 flex flex-col justify-center">
        <div className="text-2xl font-bold mb-4">
          Dewi
        </div>
        <div className="text-[16px]">
          I created a visually appealing landing page using front-end technologies, focusing on clean design and user-friendly navigation. The page includes interactive elements and optimized layouts to enhance user engagement and provide a seamless browsing experience.
        </div>
        </div>

        <div className="w-1/2 bg-black/40 h-[17rem]">
        <a href='https://dewi-fawn.vercel.app/'><img src='/dewi.png' className='relative top-3 right-3 h-[17rem]'></img></a>
        </div>
          
        </div>

        <div className="flex py-12">

        <div className="w-1/2 bg-black/40 h-[17rem]">
        <a href='https://coming-soon-page-9xc80nq1q-tushars-projects-2794de62.vercel.app//'><img src='/coming-soon.png' className='relative top-3 left-3 h-[17rem]'></img></a>
        </div>

        <div className="w-1/2 pl-5 flex flex-col justify-center">
        <div className="text-2xl font-bold mb-4">
          Coming Soon Page
        </div>
        <div className="text-[16px]">
          This is a coming soon Landing Page for a website made using html, CSS and bootstap. This is a responsive website for all devices.
        </div>
        </div>

        </div>

      <div className="text-3xl font-bold flex items-center justify-center mt-10">
        More: <FaGithub/>
      </div>

        </div>
      </Element>
      <Element name="services" className="h-screen ">
   
        <div className="border-b-blue-400 border-white text-[30px] inline-block border-4 pb-2.5 font-bold mb-9 text-black mx-3">
          Services
        </div>

        <div className="text-[18px] mb-6 mx-3">
          <b>"Turning ideas into interactive, pixel-perfect experiences."</b>

As a frontend developer, I craft modern, responsive, and user-friendly interfaces that not only look stunning but also perform flawlessly. From design to deployment, I focus on creating digital experiences that are fast, accessible, and engaging.
        </div>

        <div className="justify-evenly grid grid-cols-3 gap-4 bg-blue-200 px-3 ">

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><HiMiniDevicePhoneMobile/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">Responsive Design </div>
              <div className="">Ensuring your site looks and works beautifully across all devices</div>
            </div>
          </div>

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><PiFilmSlate/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">Interactive Animations </div>
              <div className="">Adding smooth, engaging animations for that extra wow factor.</div>
            </div>
          </div>

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><HiOutlineDesktopComputer/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">UI/UX Implementation</div>
              <div className="">Translating designs into intuitive, interactive interfaces.
              </div>
            </div>
          </div>

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><FaLaptopCode/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">Custom Website Development</div>
              <div className="">Bringing your unique brand vision to life with clean, maintainable code.
              </div>
            </div>
          </div>

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><MdDesignServices/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">Website Redesign & Revamp</div>
              <div className="">Giving your existing site a fresh, modern look and improved functionality.
              </div>
            </div>
          </div>

          <div className="flex gap-3 my-6">
            <div className="mt-2">
              <div className="rounded-full h-[50px] w-[50px] text-white bg-blue-500 text-3xl flex justify-center items-center"><GrHostMaintenance/></div>
              </div>
            <div className="">
              <div className="text-[20px] font-bold mb-2">Maintenance & Support</div>
              <div className="">Keeping your website up-to-date, secure, and running smoothly with ongoing support.
              </div>
            </div>
          </div>
          
          
        </div>





        
</Element>

      <Element name="contact" className="h-screen">
        <div className="px-1.5">
        <div className="border-b-blue-400 border-white text-[30px] inline-block border-4 pb-2.5 font-bold mb-9 text-black">
          Contact
        </div>
        <div className="flex justify-evenly">
        <div className="w-4/12">
        <div class="shadow-md shadow-gray-500/50 p-6 bg-white rounded-md">

        <div className="flex items-center gap-5 mb-4">
        <div className="rounded-full h-[50px] w-[50px] text-[25px] text-blue-400 flex justify-center items-center bg-blue-100"><AiOutlineMail/></div>
        <div className="">
        <div className="text-2xl font-bold">Email Us</div>
        <div className="">tuusshhar@gmail.com</div>
        </div>
        </div>

        <div className="flex items-center gap-5 mb-4">
        <div className="rounded-full h-[50px] w-[50px] text-[25px] text-blue-400 flex justify-center items-center bg-blue-100"><FaInstagram/></div>
        <div className="">
        <div className="text-2xl font-bold">Instagram Id</div>
        <div className="">tushaar._</div>
        </div>
        </div>

        <div className="flex items-center gap-5 mb-4">
        <div className="rounded-full h-[50px] w-[50px] text-[25px] text-blue-400 flex justify-center items-center bg-blue-100"><FaLinkedinIn/></div>
        <div className="">
        <div className="text-2xl font-bold">Linked In</div>
        <div className="">tushaar._</div>
        </div>
        </div>

        </div>
        </div>
        
        <div className="w-7/12">
        <div class="shadow-md shadow-gray-500/50 p-6 bg-white rounded-md">
        <div className="flex">
        <div className="w-1/2">
        <div className="">Your Name</div>
        <input type="text" className=" p-2 border border-gray-300 rounded-md mb-4" placeholder="Enter your name" />
        </div>
        <div className="w-1/2">
        <div className="">Your Email</div>
        <input type="email" className=" p-2 border border-gray-300 rounded-md mb-4" placeholder="Enter your email" />
        </div>
        </div>
        <div className="">Subject</div>
        <input type="text" className=" p-2 border border-gray-300 rounded-md mb-4 w-full" placeholder="Enter subject" />
        <div className="">Message</div>
        <textarea className=" p-2 border border-gray-300 rounded-md mb-4 w-full h-[150px]" placeholder="Enter your message"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Send Message
        </button>
        </div>
        </div>
        



        </div>


        </div>
      </Element>
      
    <div className="bg-blue-200 py-2 border-t-[2px] border-black/30 ">
      <div className="text-center text-gray-700 mt-8">
        © 2024 Tushar Gurjar. All rights reserved.
      </div>
      <div className="text-center text-gray-700 mt-2 mb-4">
        Made using React & Tailwind CSS
        </div>
      
    </div>
        
           
        </div>
      </div>


    </div>
    
  )
}

export default App
