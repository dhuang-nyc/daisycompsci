import {
    FaTwitter,
    FaLinkedin,
    FaInstagram
  } from "react-icons/fa";
import "./icons.css"

export const SocialIcons = () => {
    return (
        <div className="social-icons">
            <ul>
                <li>
                    <a href="https://twitter.com/dayz_compsci"><FaTwitter /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daisy-huang-090a7b31/"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/daisy_compsci/"><FaInstagram /></a>
                </li>
            </ul>
            <p>Follow me</p>
        </div>
    )
}