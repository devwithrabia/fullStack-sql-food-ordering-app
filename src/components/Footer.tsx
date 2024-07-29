import Link from "next/link";

const Footer = () =>{
    return(
      <div className="uppercase h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
        <Link href='/' className="font-bold text-xl" >Massimo</Link>
        <p>all rights reserved.</p>
      </div>
    )
  }
  
  export default Footer;