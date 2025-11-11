import { ServiceData } from "../data/services"
import { ServicesContent, ServicesWrapper, ServicesContainer, ServiceContentText, ServiceContentTextHeader } from "../styles/services.styles"

const Services = () => {
    
    return (
        <>
            <ServicesWrapper>
                <h1>My Qualities Services</h1>
                <p>
                </p>
                <ServicesContainer>
                    {ServiceData?.map((data) => {
                        const Icons = data?.icon
                        return (
                            <ServicesContent key={data?.id}>

                                <ServiceContentTextHeader >
                                    <span >{data?.id}</span>
                                    <h1>{data?.title}</h1>
                                </ServiceContentTextHeader>

                                <ServiceContentText style={{flex:"1"}}>
                                    <p >{data?.disc}</p>
                                    <div>                                        
                                        <Icons style={{ fontSize:"1.562rem"}}/>
                                    </div>
                                </ServiceContentText>
                            </ServicesContent>
                        )
                    })}

                </ServicesContainer>
            </ServicesWrapper>
        </>
    )
}

export default Services