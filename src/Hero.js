import './Hero.scss';
import { GoQuote } from 'react-icons/go';
import { FaChevronRight } from 'react-icons/fa';

function Hero() {
    return (
        <section className="hero">
            <div className="hero_content">
                <i className="hero_content_quote-left"><GoQuote /></i>
                <h3 className="hero_content_text"> Nuwe es la plataforma que convierte el desarrollo profesional, la búsqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</h3>
                <i className="hero_content_quote-right"><FaChevronRight /></i>
            </div>
        </section>
    );
}

export default Hero;