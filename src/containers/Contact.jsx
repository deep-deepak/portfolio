import React from 'react';
import '../style/contact.css'

export default function Contact() {
    return (
            <section class="contact section" id="contact">
                <div class="contact__container grid">
                    <div class="contact__data">
                        <h2 class="section__title-2">
                            <span>Contact Me.</span>
                        </h2>

                        <p class="contact__description-1">
                            I will read all emails. Send me any
                            message you want and I'll get back to you.
                        </p>

                        <p class="contact__description-2">
                            I need your <b>Name</b> and <b>Email Address</b>, but
                            you won't receive anything other than your reply.
                        </p>

                        <div class="geometric-box"></div>
                    </div>

                    <div class="contact__mail">
                        <h2 class="contact__title">
                            Send Me A Message
                        </h2>

                        <form action="" class="contact__form" id="contact-form">
                            <div class="contact__group">
                                <div class="contact__box">
                                    <input type="text" name="user_name" class="contact__input" id="name" required placeholder="First name"/>
                                        <label for="name" class="contact__label">First Name</label>
                                </div>

                                <div class="contact__box">
                                    <input type="email" name="user_email" class="contact__input" id="email" required placeholder="Email Address"/>
                                        <label for="email" class="contact__label">Email Address</label>
                                </div>
                            </div>

                            <div class="contact__box">
                                <input type="email" name="user_subject" class="contact__input" id="subject" required placeholder="Subject"/>
                                    <label for="subject" class="contact__label">Subject</label>
                            </div>

                            <div class="contact__box contact__area">
                                <textarea name="user_message" id="message" class="contact__input" required placeholder="Message"></textarea>
                                <label for="message" class="contact__label">Message</label>
                            </div>

                            <p class="contact__message" id="contact-message"></p>

                            <button type="submit" class="contact__button button">
                                <i class="ri-send-plane-line"></i> Send Message
                            </button>
                        </form>
                    </div>

                    <div class="contact__social">
                        <img src="assets/img/curved-arrow.svg" alt="" class="contact__social-arrow"/>

                            <div class="contact__social-data">
                                <div>
                                    <p class="contact__social-description-1">
                                        Does not send emails
                                    </p>

                                    <p class="contact__social-description-2">
                                        Write me on my social networks
                                    </p>
                                </div>

                                <div class="contact__social-links">
                                    <a href="https://www.facebook.com/" target="_blank" class="contact__social-link">
                                        <i class="ri-facebook-circle-line"></i>
                                    </a>

                                    <a href="https://www.instagram.com/" target="_blank" class="contact__social-link">
                                        <i class="ri-instagram-line"></i>
                                    </a>

                                    <a href="https://www.linkedin.com/" target="_blank" class="contact__social-link">
                                        <i class="ri-linkedin-box-line"></i>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
    )
}
