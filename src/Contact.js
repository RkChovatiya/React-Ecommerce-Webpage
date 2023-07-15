import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 3rem;

      .personal-width {
        width : 60rem;
        border-radius: 5px;
      }

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
      .personal-width {
        max-width: 40rem;
      }
    }
  `;

  return (<Wrapper>
    <h2 className="common-heading">Feel Free To Contact Us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121018.82525427925!2d73.75487364906033!3d18.58132787613344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1685855879602!5m2!1sen!2sin" 
    width="100%" 
    height="350" 
    style={{ border:0 }} 
    allowFullscreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"> </iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mzbqlelr" 
          method="POST" 
          className="contact-inputs"> 
          <input className="personal-width"
            type="text"
            placeholder="username"
            name="username"
            value={isAuthenticated ? user.name: ""}
            required
            autoComplete="off"
          />

          <input className="personal-width"
            type="email"
              name="Email"
              placeholder="Email"
              value={isAuthenticated ? user.email: ""}
              required
              autoComplete="off"
          />

          <textarea className="personal-width"
            name="Message"
            placeholder="Enter Your Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
          />

          <input type="submit" value="send"/>
        </form>
      </div>
    </div>
    
  </Wrapper>
  )
};

export default Contact;
