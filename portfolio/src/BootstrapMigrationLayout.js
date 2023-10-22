import React from 'react';
import  { useRef ,useEffect,useState} from 'react';
import './App.css';

import { Fade } from 'react-reveal';





import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Menu,
  Segment,
  Progress,
  Button,
  Flag
} from 'semantic-ui-react';
import img from "./img.jpg";
import image from "./background.jpg";

function FixedMenuLayout () {
  const section1Ref = useRef(null);
  const main = useRef(null);
  const experience = useRef(null);
  const informations = useRef(null);
  const formations = useRef(null);


  const scrollToSection = (ref) => {

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

return (
  <div ref={main}
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  }}
  >
    
  <Segment>
    
    <Menu fixed='top' inverted>
      <Menu.Menu position='left'>
        <Menu.Item name='PAGE PERSONNEL' />
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item name='COMPÉTENCES' as='a'  onClick={() => scrollToSection(section1Ref)} />
        <Menu.Item name='EXPÉRIENCES' as='a' onClick={() => scrollToSection(experience)} />
        <Menu.Item name='FORMATIONS' as='a' onClick={() => scrollToSection(formations)} />
        <Menu.Item name='ABOUT' as='a' onClick={() => scrollToSection(informations)} />
      </Menu.Menu>
    </Menu>
  </Segment>
         

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

    <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginBottom: '10px' }}>
      <Image src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <h2 style={{ margin: '0' }}>BELLALA Aymen</h2>
    <h5 style={{ margin: '0' }}>SOFTWARE DEVELOPER</h5>
    <div style={{ marginTop: '1em' }}>
      <a href='https://www.linkedin.com/in/aymen-bellala-4977711b9/' target='_blank'>
        <Icon name='linkedin' size='big' link />
      </a>
      <a href='https://github.com/aymenbnl' target='_blank'>
        <Icon name='github' size='big' link />
      </a>
      <a href='https://www.instagram.com/aymen_bellala/' target='_blank'>
        <Icon name='instagram' size='big' link />
      </a>
      <a href='https://www.facebook.com/bellala.aymen/' target='_blank'>
        <Icon name='facebook' size='big' link />
      </a>
    </div>
  </div>

  <div ref={informations}></div>
  <Segment style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', padding: '1em' }}>
    <Fade left  >
    <Grid columns={2} divided>
      <Grid.Column>
        <Header color='red'>INFORMATIONS PERSONNELLES</Header>
        <List>
          <List.Item>
            <List.Icon name='user' />
            <List.Content>
              <strong>Nom:</strong> BELLALA Aymen
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='calendar' />
            <List.Content>
              <strong>Age:</strong> 23
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <strong>Email:</strong> aymen.bnl99@gmail.com
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='phone' />
            <List.Content>
              <strong>Tél:</strong> +33785139804
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='map marker' />
            <List.Content>
              <strong>Addresse:</strong> 18 RUE DE VANNES, 29200 BREST 
              <Flag name='france' style={{ marginLeft: '10px' }} />
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header color='red'>À PROPOS</Header>
        <p>
        Étudiant en 2ème année de master en informatique. Motivé, dynamique, et capable de travailler en équipe comme de manière autonome, je souhaite mettre en pratique mes compétences tout en poursuivant mes études.
        </p>
      </Grid.Column>
    </Grid>
    </Fade>
    
  </Segment>

  <Segment
  style={{ boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)', padding: '1em' }}
>
  <div ref={section1Ref}></div>
  <Fade left>
    <Grid textAlign='center' columns={1}>
      <Grid.Column>
        <h3>COMPÉTENCES TECHNIQUES</h3>
      </Grid.Column>
    </Grid>
    <Grid textAlign='center' columns={2} divided>
      <Grid.Column>
        <div>
          <Header as='h4' content="Java" />
          <Progress percent={85} size='small' color='red' />
          <Header as='h4' content="HTML5, CSS3, JavaScript" />
          <Progress percent={80} size='small' color='red' />
          <Header as='h4' content="PHP" />
          <Progress percent={65} size='small' color='red' />
          <Header as='h4' content="Python" />
          <Progress percent={70} size='small' color='red' />
          <Header as='h4' content="GO" />
          <Progress percent={60} size='small' color='red' />
          <Header as='h4' content="Angular, Spring Boot, Vue.Js" />
          <Progress percent={80} size='small' color='red' />
        </div>
      </Grid.Column>

      <Grid.Column>
        <div>
          <Header as='h4' content="NODE JS" />
          <Progress percent={70} size='small' color='red' />
          <Header as='h4' content="REACT JS" />
          <Progress percent={70} size='small' color='red' />
          <Header as='h4' content="LINUX" />
          <Progress percent={80} size='small' color='red' />
          <Header as='h4' content="MySQL, PL/SQL, PostgreSQL, MongoDB" />
          <Progress percent={80} size='small' color='red' />
          <Header as='h4' content="JUnit \ UML" />
          <Progress percent={70} size='small' color='red' />
          <Header as='h4' content="ANDROID" />
          <Progress percent={65} size='small' color='red' />
        </div>
      </Grid.Column>
    </Grid>
  </Fade>
</Segment>


  <Segment>
  <div ref={experience}></div>
  <Fade left>
   
    <Container>
      <Header as='h2' content='EXPÉRIENCES PROFESSIONNELLES' />

      <Segment>
      
      <Segment>
  <Header as='h4' content='Stagiaire R&D - Stage de Recherche M1 en Génération de code' subheader='Lab-STICC' />
  <List>
    <List.Item>
      <List.Icon name='calendar' />
      <List.Content>
        <strong>Date:</strong> Avril 2023 - Juin 2023
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='align left' />
      <List.Content>
        <strong>Description:</strong>
        <List.List as='ul'>
          <List.Item as='li'>Conception et mise en place d'un environnement de modélisation et de génération de code avec CARES pour un simulateur de drone.</List.Item>
          <List.Item as='li'>Développement et implémentation de scénarios programmables de simulation pour différents types de drones.</List.Item>
          <List.Item as='li'>Optimisation de l'étape d'initialisation du simulateur de drone pour garantir des performances optimales et une fiabilité accrue.</List.Item>
          <List.Item as='li'>Test, débogage et validation du simulateur de drone pour assurer son bon fonctionnement et sa conformité aux spécifications requises.</List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' />
      <List.Content>
        <strong>Technologies utilisées:</strong> Java, Acceleo.
      </List.Content>
    </List.Item>
  </List>
</Segment>
   
</Segment>


<Segment>
      
      <Segment>
  <Header as='h4' content="Développeur Full Stack - Stage de Projet de Fin d'Études" subheader='Axians Cybersecurity' />
  <List>
    <List.Item>
      <List.Icon name='calendar' />
      <List.Content>
        <strong>Date:</strong> Février 2021 - Juin 2021
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='align left' />
      <List.Content>
        <strong>Description:</strong>
        <List.List as='ul'>
          <List.Item as='li'>Intégration de l'outil de Cybersécurité "MISP" dans la partie backend de la plateforme de CERT AXIANS.</List.Item>
          <List.Item as='li'>Consommation des APIs de MISP en tant que services dans la partie frontend. </List.Item>
          <List.Item as='li'>Développement de la partie frontend en utilisant Angular.</List.Item>
          <List.Item as='li'>Méthodologie de travail : agile scrum.</List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' />
      <List.Content>
        <strong>Technologies utilisées:</strong> Ruby on Rails 5, Python,JSON, API, JWT, Angular 10, JavaScript, CSS3, HTML5, Bootstrap, MySQL, PostgreSQL, Git.
      </List.Content>
    </List.Item>
  </List>
</Segment>
   
</Segment>
    </Container>
    </Fade>
  </Segment>


  <Segment>
  <Fade left>
    <Container>
      <Header as='h2' content='PROJETS UNIVERSITAIRE' />

      <Segment className='in-progress'>
        <Segment>
    <Header as='h4' content='Application de Gestion de formation' subheader='Réalisations/Tâches' />
    <List>
    <List.Item>
      <List.Icon name='calendar' />
      <List.Content>
        <strong>Date:</strong> Mars 2022 - Mai 2022
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='align left' />
      <List.Content>
        <strong>Description:</strong>
        <List.List as='ul'>
          <List.Item as='li'>Conception et implémentation d'interfaces graphiques.</List.Item>
          <List.Item as='li'>Création d'une base de données pour enregistrer les informations des différentes interfaces de l'application.</List.Item>
          <List.Item as='li'>Intégration de la base de données avec l'application Java.</List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' />
      <List.Content>
        <strong>Technologies utilisées:</strong> Java2EE, Eclipse, JDBC, MySQL.
      </List.Content>
    </List.Item>
  </List>
  </Segment>
</Segment>


      <Segment className='seg'>
        <Segment>
    <Header as='h4' content="Application de gestion de concerts" subheader='Réalisations/Tâches' />
    <List>
    <List.Item>
      <List.Icon name='calendar' />
      <List.Content>
        <strong>Date:</strong> Janvier 2022 - Mars 2022
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='align left' />
      <List.Content>
        <strong>Description:</strong>
        <List.List as='ul'>
          <List.Item as='li'>Développement d'API REST pour la fourniture de multiples informations. </List.Item>
          <List.Item as='li'>Gestion de bases de données telles que SQL et MongoDB.</List.Item>
          <List.Item as='li'>Développement d'une interface client Web en utilisant le framework Vue.js.</List.Item>
          <List.Item as='li'>Utilisation de Git pour la gestion du code au sein d'un trinôme.</List.Item>
        </List.List>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code' />
      <List.Content>
        <strong>Technologies utilisées:</strong> Servlets, Spring Boot, SQL, MongoDB, JPA, Vue.js, Git.
      </List.Content>
    </List.Item>
  </List>
  </Segment>
</Segment>

    </Container>
    </Fade>
  </Segment>


  <Segment>
  <div ref={formations}></div>
  <Fade left>
   
    <Container>
      <Header as='h2' content='FORMATIONS' />

<Segment>
  <Segment>
    <Header as='h4' content='Master en Ingénierie du logiciel, applications aux données environnementales' subheader='UFR Sciences et Technique - Université De Bretagne Occidentale UBO' />
    <List>
      <List.Item>
        <List.Content>
          Septembre 2022 - Présent
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <strong>Brest,France</strong>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
</Segment>


<Segment>
  <Segment>
    <Header as='h4' content="Diplôme National d'Ingénieur en Sciences Appliquées et Technologiques" subheader="Institut Supérieur d'Informatique" />
    <List>
      <List.Item>
        <List.Content>
          Octobre 2021 - Juin 2022
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <strong>Tunis, Tunisie</strong>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
</Segment>

<Segment>
  <Segment>
    <Header as='h4' content="Licence Appliquée en Systèmes Informatiques et Logiciels" subheader="Institut Supérieur d'Informatique de Mahdia" />
    <List>
      <List.Item>
        <List.Content>
          Septembre 2018 - Juillet 2021
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <strong>Mahdia, Tunisie</strong>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
</Segment>


    </Container>
    </Fade>
  </Segment>



<div style={{ marginTop: '1em' }}>
  <a href='https://www.linkedin.com/in/aymen-bellala-4977711b9/' target='_blank'>
    <Icon name='linkedin' size='big' link />
  </a>
  <a href='https://github.com/aymenbnl' target='_blank'>
    <Icon name='github' size='big' link />
  </a>
  <a href='https://www.instagram.com/aymen_bellala/' target='_blank'>
    <Icon name='instagram' size='big' link />
  </a>
  <a href='https://www.facebook.com/bellala.aymen/' target='_blank'>
    <Icon name='facebook' size='big' link />
  </a>
</div>
<br></br>


  <Button icon='arrow alternate circle up outline'  onClick={() => scrollToSection(main)}></Button>


  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '2em 0em' }}>
    <Container textAlign='center'>
      <p>&copy; 2023 BELLALA Aymen. All rights reserved.</p>
    </Container>
  </Segment>

</div>
)
 
};

export default FixedMenuLayout;
