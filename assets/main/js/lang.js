const languages = {
   en_uk : {
     'flag' : 'assets/main/img/flags/uk.svg', 
     'home__title' : 'Hi, <br>I\'m <span class="home__title-color">Kevin</span><br>Software Engineer',
     'about__subtitle' : ' <i>"A good foundation and a solid architecture<br>is the heart of every project" </i>',
     'about__text' : 'With this as my vision, translating a problem into a <b class="highlight">practical solution</b> with a realistic approach becomes my motto. ' +
                     'I enjoy <b class="highlight">problem solving</b> and thinking outside of the box. Through my career I have had the ' +
                     'opportunity to work on a wide variety of different projects. This enabled me to develop a broad set of skills which ' +
                     'allows me to quickly <b class="highlight">adapt</b> to different IT environments. I believe that a programming language should not be a ' +
                     'limiting factor. So through my career I have become proficient at picking the <b class="highlight">right tool</b> for the job and ' + 
                     'utilizing it to the best of my ability.',
     'work__subtitle' : 'Commercial',
     'projects__subtitle' : 'Projects',
     'recommendation__subtitle' : 'Testimonial',
     'modal__text_livestock-robotics' :  "At <a href='https://www.livestockrobotics.nl/' target='_blank'>Livestock Robotics</a> I did my graduation internship. Here I was responsible for designing and developing an architecture for " +
                                         "the implementation of the pathplanning algorithm <a href='https://www.researchgate.net/publication/261291258_Path_planning_for_the_autonomous_collection_of_eggs_on_floors' target='_blank'>NURAC</a> that   " +
                                         "would integrate with <b class='highlight'>ROS</b>. The algorithm is used to find the most optimal path in a poultryhouse. "+
                                         "The software was capable of heuristicly improving its performance by using external input data, such as the collection of eggs. "+
                                         "After my graduation I continued working here for a couple of months to polish the end-product where I have used <b class='highlight'>Qt-Toolkit</b> to build the visualization " +
                                         "of the algorithms performance. ",
     'modal__text_track32' : "At <a href='https://track32.nl' target='_blank'>Track32</a> I have worked on several different projects in collaboration with other companies. " +
                             "One of these projects was a collaboration with Corvus Drones on <a href='https://track32.nl/portfolio/drone-for-greenhouse-monitoring/' target='_blank'>agriculture and greenhouse cultivation</a>. " +
                             "Here I built an optical detection system for plant trays using <b class='highlight'>OpenCV</b> as the main component. " +
                             "Another project was a collaboration with <a href='https://nioo.knaw.nl/en' target='_blank'> NIOO-KNAW </a> on their research on Oystercatchers. " + 
                             "Here I have built a <a href='https://track32.nl/portfolio/bird-phenotyping-2/' target='_blank'>toolkit</a> where their structured data, such as phenotypical data and unstructured data such as images are combined to logical objects. " +
                             "These objects can then easily be processed for more data. Subsequently with libraries such as <b class='highlight'>PyTorch</b> we were able to gain some valuable insights. " +
                             "For most of these projects <b class='highlight'>deep learning</b> and <b class='highlight'>computer vision</b> were essential elements.",
     'modal__text_corvus-drones':  "At <a href='https://www.corvusdrones.eu/' target='_blank'>Corvus Drones</a> I got my first internship. I was responsible for designing the <b class='highlight'>architecture</b> " +
                                   "between the low level software of the drone and the frontend for the end user. For the front-end I have used technologies such as <b class='highlight'>PugJS</b> and <b class='highlight'>JQuery</b>. " +
                                   "Here the users can control and monitor greenhouse drones. Within a few clicks the user is able to create flightplans for the drone making it capable for fully autonomous flight. " +
                                   "The back-end <b class='highlight'>API</b> was written in <b class='highlight'>Javascript</b> using < class='highlight'>Express</>, which handled the communication between the drones and the main server.  ",
     'modal__text_sentencegaming': "At <a href='https://sentencegaming.nl/' target='_blank'>SentenceGaming</a> I mainly play an advisory role. I am responsible for conceiving ideas and projects to help expand the brand. " +
                                   "For each one of these projects I research the viability and prioritize tasks to concoct a feasible plan of approach. Besides these activities I also manage the main website and develop " +
                                   "and maintain the technical products.",
      'contact__text' : "Did I pique your interest and you're interested in working together, or maybe you simply want to have a chat? <br>" +
                        "Got an idea for an application and you require some technical insights? I will help you turn your idea into a reality!<br>"+
                        "Do not hesitate to contact me and fill out the form below!",
      'recommendation__text_joris' : 'Kevin is a hard worker with a lot of passion for software development and high-tech ' +
                        'systems. Very pleasant to work with. Furthermore Kevin has an analytical ' +
                        'mindset and works very precisely. He is able to dissect problems to sub-problems ' +
                        'and composes fitting modular solutions. But also in the first instance to ' +
                        'determine what and how it should be done. Kevin likes working in a team  ' +
                        'but doesnt like to make himself dependant on others. </br>  ' +
                        'Kevin possesses good programming skills and is also strong on designing. He ' +
                        'is inclined to develop software with a more structured approach and for the long term then to ' +
                        'build ad hoc solutions. Although he certainly has a  ' +
                        'pragmatic attitude. <i class="recommendation__text_small"> (Translated from dutch) </i>',
      'recommendation__text_gerhold' : 'The result is an application developed from scratch that was immediatly usable for us. We are very content. ' +
                                       'Kevin works indepedently and possesses a lot of knowledge that was useful to develop for the development.' + 
                                       'He also got the hang of additional knowledge during his internship. <i class="recommendation__text_small"> (Translated from dutch) </i>',
      'recommendation__text_bastiaan' : 'Delivered good work with own input and insights, despite the complexity of the matter and algorithm. ' +
                                        'Also regarding the documentation.  <i class="recommendation__text_small"> (Translated from dutch) </i>'
   },
 
   nl_nl : {
     'flag' : 'assets/main/img/flags/nl.svg',
     'home__title' : 'Hoi, <br>Ik ben <span class="home__title-color">Kevin</span><br>Software Engineer',
     'about__subtitle' : ' <i>"Een goede basis en een robuuste architectuur <br>is de kern van elk project." </i>',
     'about__text' : 'Met dit als mijn visie worden probleemstellingen vertalen naar <b class="highlight">praktische oplossingen</b> met een realistische aanpak mijn motto. ' +
                     'Ik ben een echte <b class="highlight">probleem oplosser</b> en denk graag buiten de lijntjes. Tijdens mijn carriere kreeg ik de ' +
                     'mogelijkheid om aan een breed scala projecten te werken. Hierdoor ' +
                     'kan ik mij snel <b class="highlight">afstemmen</b> in verschillende IT omgevingen. Voor mij is het daarom belangrijk dat een programmeertaal niet de beperkende factor ' +
                     'mag zijn. In mijn loopbaan ben ik zorgvuldig in het uitkiezen van het <b class="highlight">juiste gereedschap</b> ' + 
                     'en doe ik mijn uiterste best om deze zo goed mogelijk te benutten.',
     'work__subtitle' : 'Commercieel',
     'projects__subtitle' : 'Projecten',
     'recommendation__subtitle' : 'Testimonial',
     'modal__text_livestock-robotics' :  "Bij <a href='https://www.livestockrobotics.nl/' target='_blank'>Livestock Robotics</a> heb ik mijn afstudeerstage gedaan. Hier was ik verantwoordelijk voor het ontwerpen en het ontwikkelen van de architectuur " +
                                         "voor de implementatie van het padplannings algoritme <a href='https://www.researchgate.net/publication/261291258_Path_planning_for_the_autonomous_collection_of_eggs_on_floors' target='_blank'>NURAC</a>. Daarnaast " +
                                         "is een eenvoudige integratie met <b class='highlight'>ROS</b> mogelijk gemaakt. Het algoritme wordt ingezet om de meest optimale pad te zoeken in een pluimveestal. "+
                                         "De software is in staat om heuristisch zijn prestaties te verbeteren door het gebruik van externe data, zoals het vinden van eieren. "+
                                         "Na mijn afstuderen bleef ik hier een aantaal maanden in dienst om het eindproduct naar een hoger niveau te tillen. Hier heb ik o.a. <b class='highlight'>Qt-Toolkit</b> gebruikt om de  " +
                                         "prestaties van het algoritme te visualiseren. ",
     'modal__text_track32' : "Bij <a href='https://track32.nl' target='_blank'>Track32</a> heb ik gewerkt aan verschillende projecten in samenwerking met andere bedrijven. " +
                             "Een van deze projecten is een samenwerking met corvus drones met betrekking op het <a href='https://track32.nl/portfolio/drone-for-greenhouse-monitoring/' target='_blank'>monitoring van gewassen in de glastuinbouw</a>. " +
                             "Hiervoor heb ik onder andere een optische tray detectie systeem ontwikkeld met <b class='highlight'>OpenCV</b>. " +
                             "Een ander project was een samenwerking met <a href='https://nioo.knaw.nl/en' target='_blank'> NIOO-KNAW </a> die toentertijd onderzoek deed naar Scholeksters. " + 
                             "Hier heb ik een <a href='https://track32.nl/portfolio/bird-phenotyping-2/' target='_blank'>toolkit</a> ontwikkeld waarbij, gestructureerde data zoals fenotype data en ongestructeerde data zoals afbeeldingen, samenkomen tot logische objecten. " +
                             "Deze objecten kunnen dan eenvoudig geprocessed worden voor meer data. Hierbij heb ik libraries ingezet als <b class='highlight'>PyTorch</b> om waardevollen inzichten te geven aan het onderzoek. " +
                             "Voor het merendeel van deze projecten zijn <b class='highlight'>deep learning</b> en <b class='highlight'>computer vision</b> belangrijke elementen geweest.",
     'modal__text_corvus-drones':  "Bij <a href='https://www.corvusdrones.eu/' target='_blank'>Corvus Drones</a> deed ik mijn stage. Hier was ik verantwoordelijk voor het ontwerpen en het ontwikkelen van de  <b class='highlight'>architectuur</b> " +
                                   "tussen de low level software van de drone en de frontend voor de eindgebruiker. Voor de frontend heb ik o.a. gebruik gemaakt van <b class='highlight'>PugJS</b> and <b class='highlight'>JQuery</b>. " +
                                   "Met deze app is de eindgebruiker in staat om meerdere drones te moniteren en te bedienen. In een paar klikken kan men vluchtplannen maken die volledig autonome vluchten mogelijk maakt. " +
                                   "De back-end <b class='highlight'>API</b> is geschreven in <b class='highlight'>Javascript</b> met <b class='highlight'>Express</b>, die de communicatie tussen de drones en de main server afhandeld. ",
     'modal__text_sentencegaming': "Bij <a href='https://sentencegaming.nl/' target='_blank'>SentenceGaming</a> neem ik voornamelijk een adviserende rol aan. Ik ben verantwoordelijk voor het aandragen van vernieuwingen en projecten om de uitstraling van het merk te versterken." +
                                   "Voor elk project onderzoek ik de haalbaarheid en rangschik ik taken om tot een realiseerbaar plan van aanpak te komen. Naast deze werkzaamheden ontwikkel en onderhoud ik ook de de website en " +
                                   "diverse technische zaken.",
     'contact__text' : "Heb ik je interesse gewekt en wil je graag met mij samenwerken of misschien wil je gewoon simpelweg even kletsen?<br>"+
                        "Heb je een idee voor een app en kan je wat technische hulp gebruiken? Ik help je graag om je idee uit te werken! <br>" + 
                        "Het kan allemaal! Aarzel daarom niet om contact met mij op te nemen via het onderstaande formulier!",
     'recommendation__text_joris' : 'Kevin is een harde werker, met veel passie voor software ontwikkeling en high-tech ' +
                                    'systemen. Uiterst prettig om mee te samen te werken. Verder bezit Kevin een analytische ' +
                                    'mindset en gaat hij zeer secuur te werk. Is goed in staat om een probleem te ontleden en tot ' +
                                    'in detail een passende modulaire oplossing uit te werken. Maar ook om in eerste instantie ' +
                                    'goed te bepalen wat er moet gebeuren en waarom. Kevin werkt graag in teamverband maar  ' +
                                    'stelt zich niet afhankelijk op van anderen. </br>  ' +
                                    'Kevin bezit zeer goede programmeervaardigheden. En is ook op ontwerp niveau sterk. Is  ' +
                                    'eerder geneigd om software ontwikkeling gestructureerd en voor de langere termijn aan te  ' +
                                    'pakken dan om vlug ad hoc oplossingen te bouwen. Hoewel hij wel degelijk een zeer  ' +
                                    'pragmatische houding heeft. ',
    'recommendation__text_gerhold' : 'Resultaat is een van scratch ontwikkelde applicatie die direct bruikbaar is voor het bedrijf. We zijn er zeer tevreden over. ' +
                                     'Kevin werkt zelfstandig en bezit veel kennis die bruikbaar is geweest voor het uitvoeren van de opdracht. ' + 
                                     'Ook heeft hij zich extra benodigde kennis eigen gemaakt gedurende de stageperiode.',
    'recommendation__text_bastiaan' : 'Goed werk geleverd met een mooie eigen inbreng en inzichten, zeker gezien de complexiteit van de materie en algoritme. ' +
                                      'Ook wat betreft de documentatie is er wat moois neergezet.'
   }
 }