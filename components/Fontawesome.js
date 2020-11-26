import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faAt, faLink } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faGithub,
  faLinkedin,
  faWhatsapp,
  faAt,
  faLink
); // Adiciona os icones do Github e Linkedin do pacote marcas


/*                      Estrutura básica de funcionamento
 * Core: Iniciar os icones ou pacote de ícones -  @fortawesome/fontawesome-svg-core
 * React Fontawesome: Responsável por apresentar o icone no JSX - @fortawesome/react-fontawesome
 * Tipo de icone: Define o pacote de ícones utilizado ou o ícones individuais - @fortawesome/free-brands-svg-icons
 */