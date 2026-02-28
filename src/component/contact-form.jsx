import React from 'react';
import styled from 'styled-components';

import {
    ContactSection, Header, Grid, FormCard, FormGroup, SendButton, InfoSection,
    ContactTile, IconBox, TileText, SocialContainer, SocialIcon
} from "../styles/contact-form-styles"
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiEnvelope } from 'react-icons/hi2';


const ContactForm = () => {
    return (
        <ContactSection id="contact">
            <Header>
                <h2>Let's Work Together</h2>
                <p>Have a project in mind? Let's discuss how we can bring your ideas to life.</p>
            </Header>

            <Grid>
                <FormCard>
                    <FormGroup>
                        <label>Name</label>
                        <input type="text" placeholder="Your name" />
                    </FormGroup>
                    <FormGroup>
                        <label>Email</label>
                        <input type="email" placeholder="your.email@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <label>Message</label>
                        <textarea placeholder="Tell me about your project..." />
                    </FormGroup>
                    <SendButton type="submit">
                        Send Message <span>✈️</span>
                    </SendButton>
                </FormCard>

                <InfoSection>
                    <div>
                        <h3>Let's Connect</h3>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
                    </div>

                    <ContactTile>
                        <IconBox> <HiEnvelope size={20}/></IconBox>
                        <TileText>
                            <span>Email</span>
                            <strong>franciskuro7@gmail.com</strong>
                        </TileText>
                    </ContactTile>

                    <ContactTile>
                        <IconBox>< HiLocationMarker size={20}/> </IconBox>
                        <TileText>
                            <span>Location</span>
                            <strong>Bayelsa State, Nigeria</strong>
                        </TileText>
                    </ContactTile>

                    <div>
                        <p style={{ marginBottom: '10px' }}>Connect with me</p>
                        <SocialContainer>
                            <SocialIcon href="https://github.com/franciskuro7/"><AiFillGithub size={25}/></SocialIcon>
                            <SocialIcon href="#"><AiFillLinkedin size={25}/></SocialIcon> 
                            <SocialIcon href="#"><AiOutlineTwitter size={25}/></SocialIcon> 
                        </SocialContainer>
                    </div>
                </InfoSection>
            </Grid>
        </ContactSection>
    );
};

export default ContactForm;