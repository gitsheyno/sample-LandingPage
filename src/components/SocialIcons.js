import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyleSocial } from './styles/StyledSocial'
const SocialIcons = () => {
    return (
        <StyleSocial>
            <a href="#">
                <FaTwitter />
            </a>
            <a href="#">
                <FaFacebook />
            </a>
            <a href="#">
                <FaLinkedin />
            </a>
        </StyleSocial>
    )
}

export default SocialIcons
