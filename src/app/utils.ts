export function scrollToElementById(element: string): void {
	const el = document.getElementById(element);
	if (!el) return;

	const offsetPush = window.innerWidth <= 700 ? 78 : 110;		// substracted value from offset -> should be the height of the navbar

	const rect = el.getBoundingClientRect();
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const offset = rect.top + scrollTop - offsetPush;

	window.scrollTo({ top: offset, behavior: 'smooth' });
}


export const ABOUT_SECTION = 'about-section';
export const FOOTER_SECTION = 'footer-section';
export const CAROUSEL_SECTION = 'carousel-section';
export const CARDS_SECTION = 'cards-section';

export const FACEBOOK = 'https://www.facebook.com/p/Baking-Films-61561806923938/';
export const INSTAGRAM = 'https://www.instagram.com/baking.films/';

export const CARDS = [
  {
    image: 'assets/IrinaElenaProducer.jpg',
    title: 'Irina Elena, Producer',
    description: `Irina Enea este o producătoare creativă din România, cu un interes puternic pentru filmele dedicate copiilor și tinerilor, precum și pentru integrarea audience design-ului încă din primele etape de dezvoltare. Este, de asemenea, membră a European Children’s Film Association (ECFA), o rețea internațională importantă care reunește cineaști, producători, distribuitori și festivaluri din peste 40 de țări, contribuind activ la modelarea viitorului cinematografiei pentru publicul tânăr și susținând creșterea vizibilității, accesului și sprijinului pentru acest sector.
    Este producător executiv și manager al campaniei naționale de distribuție pentru filmul Anul Nou care n-a fost (r. Bogdan Mureșanu) — câștigător al premiului pentru Cel mai bun film în secțiunea Orizzonti la Festivalul Internațional de Film de la Veneția, cu peste patruzeci de premii internaționale, zece trofee Gopo și un succes de box office în România. Irina a fost, de asemenea, managerul campaniei naționale de distribuție și promovare, contribuind la dezvoltarea prezenței filmului în social media, precum și la organizarea proiecțiilor comunitare, inițiativelor de accesibilizare și testărilor de public, demonstrând că filmele românești independente pot ajunge la un public larg printr-o distribuție creativă și atent construită.
    Proiectul central din portofoliul său este Kid Hazard (Pericol) — un lungmetraj de aventuri live-action pentru copii și familii, aflat în dezvoltare. Proiectul a fost selectat la TIFF Transilvania Pitch Stop 2024, distins cu Vila Kult Development Award și COCOLAB East-West Emerging Producers Award și, recent, selectat la Cinekid Junior Co-Production Market și PLAY Lisbon Industry — poziționându-se ca unul dintre cele mai promițătoare viitoare filme pentru copii din regiune. Prin acest proiect, Irina își propune să revitalizeze un gen aproape inexistent în România: cinema-ul de calitate dedicat copiilor și familiilor.
    Este, de asemenea, producător executiv al documentarului creativ Lost and Found, aflat în post-producție, care explorează dimensiunile emoționale și politice ale adopțiilor internaționale din România. Proiectul a beneficiat de sprijin CNC și de vizibilitate internațională prin programe precum Documentary Campus și Ex Oriente.
    A produs sau co-produs 4 lungmetraje și 7 scurtmetraje, selectate în peste 35 de festivaluri internaționale. În 2022, Irina a fondat Baking Films, o companie independentă de producție activă în București și Prahova, dedicată lungmetrajelor, scurtmetrajelor și animației. Misiunea sa este dezvoltarea unor povești relevante și emoționante pentru publicul tânăr și pentru familii — un segment de public mult timp insuficient reprezentat în cinematografia românească.
    Background-ul său profesional include o diplomă în Economie, șapte ani de experiență în sectorul corporate farmaceutic elvețian (analiză de vânzări și management de proiect CRM) și peste cincisprezece ani de antreprenoriat în organizare de evenimente, PR/marketing și design. Această combinație îi definește stilul de lucru: structurat, dar imaginativ, disciplinat, dar intuitiv, mereu orientat spre soluții, atât în dinamica producției, cât și în strategia din spatele acesteia.
    Astăzi, activitatea sa este ghidată de trei direcții principale: dezvoltarea de filme de calitate pentru copii și tineri, aplicarea audience design-ului de la dezvoltare până la lansare și extinderea rețelei internaționale pentru a aduce Kid Hazard și proiectele viitoare către publicul european și global.
    Curioasă, determinată și profund orientată către public, Irina este pregătită să evolueze în continuare și să contribuie la un ecosistem cinematografic european mai incluziv și mai inovator.`
  },
  {
    image: 'assets/RazvanMarinescuDirector.jpeg',
    title: 'Razvan Marinescu, Director',
    description: `Răzvan Marinescu este regizor, scenarist, actor și producător din România, cu 20 de ani de experiență în film și televiziune. A scris și regizat mai multe scurtmetraje premiate și dezvoltă în prezent două scenarii de lungmetraj (Pericolși Părfect).
    Cunoștințele sale relevante atât în fața, cât și în spatele camerei – ca actor în celebra serie Cu un pas înainte (Un Paso Adelante) și ca director de casting în agenții de top – reprezintă un atu important în înțelegerea întregului proces de realizare a unui film. Pe lângă viziunea sa artistică ca regizor, abilitățile excelente de comunicare și management de echipă contribuie la transformarea fiecărui film al lui Răzvan într-o producție impecabilă.
    De asemenea, a regizat și produs numeroase videoclipuri muzicale, filme corporate și spoturi publicitare. Siel by Tohani a fost premiat cu Prix du meilleur film, secțiunea corporate, în 2018, la FIFDVV, Franța.`,
  },
  {
    image: 'assets/logo_square.png',
    title: 'Card Title 3',
    description: 'This is a description for card 3.',
  },
  {
    image: 'assets/logo_square.png',
    title: 'Card Title 4',
    description: 'This is a description for card 4.',
  },
];
export const MOVIES1 = [
  {
    image: 'assets/coperti/1.jpg',
    title: 'Anul Nou care n-a fost',
    description: 'This is a description for movie 1.',
  },
  {
    image: 'assets/coperti/2.jpg',
    title: 'Spre CASĂ',
    description: 'This is a description for movie 2.',
  },{
    image: 'assets/coperti/3.jpg',
    title: 'PÂRFECT',
    description: 'This is a description for movie 3.',
  },{
    image: 'assets/coperti/4.jpg',
    title: '',
    description: 'This is a description for movie 4.',
  },
  {
    image: 'assets/coperti/5.jpg',
    title: 'TURNUL DIN PISA',
    description: 'This is a description for movie 5.',
  },
  {
    image: 'assets/coperti/6.jpg',
    title: 'dear SANTA CLAUS',
    description: 'This is a description for movie 6.',
  },
  {
    image: 'assets/coperti/7.jpg',
    title: 'FEREASTRA',
    description: 'This is a description for movie 7.',
  },
  {
    image: 'assets/coperti/8.jpg',
    title: 'DRUG DEALER',
    description: 'This is a description for movie 8.',
  },
  {
    image: 'assets/coperti/9.jpg',
    title: 'PREMONITIA',
    description: 'This is a description for movie 9.',
  },
  {
    image: 'assets/coperti/10.jpg',
    title: 'ATLAS OF THE UNIVERSE',
    description: 'This is a description for movie 10.',
  },
  {
    image: 'assets/coperti/11.jpg',
    title: 'WARBOY',
    description: 'This is a description for movie 11.',
  },
];
export const MOVIES2 = [
  {
    image: 'assets/coperti/7.jpg',
    title: 'FEREASTRA',
    description: 'This is a description for movie 7.',
  },
  {
    image: 'assets/coperti/4.jpg',
    title: '',
    description: 'This is a description for movie 4.',
  },{
    image: 'assets/coperti/3.jpg',
    title: 'PÂRFECT',
    description: 'This is a description for movie 3.',
  },{
    image: 'assets/coperti/9.jpg',
    title: 'PREMONITIA',
    description: 'This is a description for movie 9.',
  },
  {
    image: 'assets/coperti/1.jpg',
    title: 'Anul Nou care n-a fost',
    description: 'This is a description for movie 1.',
  },
  {
    image: 'assets/coperti/10.jpg',
    title: 'ATLAS OF THE UNIVERSE',
    description: 'This is a description for movie 10.',
  },
  {
    image: 'assets/coperti/2.jpg',
    title: 'Spre CASĂ',
    description: 'This is a description for movie 2.',
  },
  {
    image: 'assets/coperti/8.jpg',
    title: 'DRUG DEALER',
    description: 'This is a description for movie 8.',
  },
  {
    image: 'assets/coperti/5.jpg',
    title: 'TURNUL DIN PISA',
    description: 'This is a description for movie 5.',
  },
  {
    image: 'assets/coperti/6.jpg',
    title: 'dear SANTA CLAUS',
    description: 'This is a description for movie 6.',
  },
  {
    image: 'assets/coperti/11.jpg',
    title: 'WARBOY',
    description: 'This is a description for movie 11.',
  },
];

