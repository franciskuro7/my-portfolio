import { IoBrush } from "react-icons/io5"
import { HeroContent, HeroWrapper, CardWrapper, Card, Image, Profile } from "../styles/hero.styles"
import { FaLaptopCode } from "react-icons/fa6"
import Button  from "../component/call-to-action/button"
import profile from "../assets/img/profile.jpeg"
import SocialIcons from "./socialIcons/socialIcons"



const Hero = () => {
    return (
        <>
            <HeroWrapper>
                <HeroContent>
                    <Profile>
                        <h1>
                            Helping business and Company Build Websites.
                        </h1>
                        <p>
                            Hey! I'm Fineface Kuroghoekigha Francis, a Full Stack Website Developer from
                            Nigeria who loves building websites that make businesses
                            stand out. I work with React.js, Next.js, Node.js,
                            and Express.js to create fast, user-friendly sites that
                            actually solve problems. I'm always
                            excited to take on new challenges. Got a project in mind?
                            Let's make it happen!
                        </p>
                    </Profile>
                </HeroContent>
                
                <CardWrapper>
                    <Card>
                        <div className="card">
                            <Image src={profile} alt="" />
                        </div>
                    </Card>

                    <div style={{display:"flex", gap:"2rem"}}>
                        {/* <Button title="My Cv"/> */}
                        <SocialIcons />
                    </div>
                </CardWrapper>
            </HeroWrapper>
        </>
    )
}

export default Hero 