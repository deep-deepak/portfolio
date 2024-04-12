import React from 'react';
import { Face2Outlined, Facebook, Instagram, InstallDesktop, LinkedIn } from "@mui/icons-material"
import '../style/about.css'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
    return (
        <div>
            <section class="about section" id="about">
                <div class="about__container container grid">
                    <h2 class="section__title-1">
                        <span>About Me.</span>
                    </h2>

                    <div class="about__perfil">
                        <div class="about__image">
                            <img src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3Njk4OTB8&ixlib=rb-4.0.3&q=85" alt="image" class="about__img"/>

                                <div class="about__shadow"></div>

                                <div class="geometric-box"></div>

                                <div class="about__box"></div>
                        </div>
                    </div>

                    <div class="about__info">
                        <p class="about__description">
                            Passionate about creating <b>Web Pages</b> with
                            <b>UI/UX User Interface</b>, I have years of
                            experience and many clients are happy with
                            the projects carried out.
                        </p>

                        <ul class="about__list">
                            <li class="about__item">
                                <b>My Skills Are:</b> HTML, CSS, JavaScript,
                                React, Git & GitHub, Bootstrap, Flutter &
                                Figma.
                            </li>
                        </ul>

                        <div class="about__buttons">
                            <a href="#contact" class="button">
                                <SendIcon/> Contact Me
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
                                <LinkedIn/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
                                <GitHubIcon/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
                                <Instagram/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" class="button__ghost">
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
