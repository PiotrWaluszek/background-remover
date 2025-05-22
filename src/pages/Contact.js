import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-container contact">
      <div className="container">
        <h1>{t('contact.title')}</h1>
        
        <div className="contact-content">
          <div className="contact-intro">
            <h2>{t('contact.subtitle')}</h2>
            <p>{t('contact.description')}</p>
          </div>
          
          <div className="contact-persons">
            <div className="contact-person">
              <h3 className="person-name">Piotr Waluszek</h3>
              <div className="person-contact">
                <a href="mailto:waluszekp@student.agh.edu.pl" className="contact-link">
                  <svg className="contact-icon email-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#6366F1"/>
                  </svg>
                  waluszekp@student.agh.edu.pl
                </a>
              </div>
              <div className="person-contact">
                <a href="https://github.com/PiotrWaluszek" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg className="contact-icon github-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21C9.52 20.75 9.512 20.008 9.508 19.152C6.726 19.758 6.14 17.782 6.14 17.782C5.684 16.642 5.023 16.332 5.023 16.332C4.121 15.698 5.093 15.71 5.093 15.71C6.094 15.782 6.628 16.762 6.628 16.762C7.52 18.266 8.97 17.83 9.54 17.57C9.63 16.908 9.89 16.472 10.175 16.222C7.954 15.97 5.62 15.132 5.62 11.416C5.62 10.32 6.01 9.43 6.649 8.74C6.549 8.48 6.199 7.52 6.749 6.14C6.749 6.14 7.599 5.88 9.499 7.17C10.299 6.95 11.149 6.84 11.999 6.836C12.849 6.84 13.699 6.95 14.499 7.17C16.399 5.88 17.249 6.14 17.249 6.14C17.799 7.52 17.449 8.48 17.349 8.74C17.989 9.43 18.379 10.32 18.379 11.416C18.379 15.142 16.039 15.966 13.809 16.212C14.169 16.522 14.499 17.132 14.499 18.064C14.499 19.384 14.489 20.66 14.489 21C14.489 21.274 14.669 21.588 15.179 21.49C19.158 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="#6366F1"/>
                  </svg>
                  github.com/PiotrWaluszek
                </a>
              </div>
            </div>
            
            <div className="contact-person">
              <h3 className="person-name">Artur Sojka</h3>
              <div className="person-contact">
                <a href="mailto:asojka@student.agh.edu.pl" className="contact-link">
                  <svg className="contact-icon email-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#6366F1"/>
                  </svg>
                  asojka@student.agh.edu.pl
                </a>
              </div>
              <div className="person-contact">
                <a href="https://github.com/ArturSojka" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg className="contact-icon github-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.58 9.52 21.27 9.52 21C9.52 20.75 9.512 20.008 9.508 19.152C6.726 19.758 6.14 17.782 6.14 17.782C5.684 16.642 5.023 16.332 5.023 16.332C4.121 15.698 5.093 15.71 5.093 15.71C6.094 15.782 6.628 16.762 6.628 16.762C7.52 18.266 8.97 17.83 9.54 17.57C9.63 16.908 9.89 16.472 10.175 16.222C7.954 15.97 5.62 15.132 5.62 11.416C5.62 10.32 6.01 9.43 6.649 8.74C6.549 8.48 6.199 7.52 6.749 6.14C6.749 6.14 7.599 5.88 9.499 7.17C10.299 6.95 11.149 6.84 11.999 6.836C12.849 6.84 13.699 6.95 14.499 7.17C16.399 5.88 17.249 6.14 17.249 6.14C17.799 7.52 17.449 8.48 17.349 8.74C17.989 9.43 18.379 10.32 18.379 11.416C18.379 15.142 16.039 15.966 13.809 16.212C14.169 16.522 14.499 17.132 14.499 18.064C14.499 19.384 14.489 20.66 14.489 21C14.489 21.274 14.669 21.588 15.179 21.49C19.158 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="#6366F1"/>
                  </svg>
                  github.com/ArturSojka
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
