import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'

export const links = [
    {id: 1, link: '#', title: 'Início'},
    {id: 2, link: '#about', title: 'Sobre'},
    {id: 3, link: '#services', title: 'Serviços'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contato'}
]


export const socials = [
    {id: 1, link: 'https://www.instagram.com/juassi.terapeuta/', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter/>},
    //{id: 3, link: 'https://dribbble.com', icon: <AiOutlineDribbble/>},
    //{id: 4, link: 'https://github.com', icon: <AiFillGithub/>}
    {id: 5, link: 'https://api.whatsapp.com/message/GLK63BL5IZRSL1?autoload=1&app_absent=0', icon: <FaWhatsapp/>}
]

