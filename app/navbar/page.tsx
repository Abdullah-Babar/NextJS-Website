import Link from "next/link"

export default function Navbar (){
    return (
        <div>
            <ul id="ul">
                <li>
                    <Link style={{
                        color: "white",
                        textDecoration: "none"
                    }} href = "/">Home</Link>
                </li>
                <li>
                    <Link style={{
                        color: "white",
                        textDecoration: "none"
                    }} href = "/cars">Cars</Link>
                </li>
                <li>
                    <Link style={{
                        color: "white",
                        textDecoration: "none"
                    }} href = "/services">Services</Link>
                </li>
                <li>
                    <Link style={{
                        color: "white",
                        textDecoration: "none"   
                    }}
                     href = "/contact-us">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}