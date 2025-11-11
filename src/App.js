import React, { useState } from 'react';
// Importations simulées pour l'environnement Canvas
// En réalité, ces icônes proviendraient de 'lucide-react'
const CheckCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const GraduationCap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.4 14.5c.2.1.2.3 0 .4l-8.5 4.5c-.9.5-2.2.5-3.1 0L2.6 14.9c-.2-.1-.2-.3 0-.4L10 10.1c.9-.5 2.2-.5 3.1 0l8.3 4.4Z"/><path d="M12 2v4"/><path d="M10 20.3L3.6 17"/><path d="M21.4 17l-6.4 3.3"/></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Mail = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.8 1.8 0 0 1-2.06 0L2 7"/></svg>;
const Phone = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const Languages = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h10"/><path d="M10 10l3 3 2-3"/><path d="M14 2c2 0 7 2 7 11s-5 11-7 11"/><path d="M16 4h4"/><path d="M16 20h4"/></svg>;

// --- Données du CV (traduites/adaptées pour le web) ---
const portfolioData = {
  name: "Alliou Thiam",
  title: "Chef de Projet SI & Transformation Digitale",
  // TODO: Remplacer cette URL par l'URL réelle de votre photo de profil en ligne (hébergée)
  photoUrl:"/photo-alliou-thiam.jpg", 
  profile: "J'aime les défis et les projets ambitieux avec des technologies innovantes. Ayant géré divers projets en start-up et multinationales, je suis curieux et toujours en veille sur les nouvelles technologies pour optimiser les processus métiers.",
  contact: {
    phone: "+33 6 80 47 24 00",
    email: "alliouthiam71@gmail.com",
    location: "Bezons 95870, France",
  },
  skills: {
    project: ["Gestion de Projet (Jira, Trello)", "Scrum Master", "PMP"],
    data: ["Data & BI (Power BI, SQL)", "Analyse de données (6000+ terminaux)"],
    tech: ["Microsoft Power Platform (Power Automate, Copilot Studio, Sharepoint)", "Migration SI (Windows 11)"],
    certifications: ["Crisis Management", "Team Lead", "Excel"],
  },
  experiences: [
    {
      period: "2023 - 2025",
      title: "Chef de Projet SI et Transformation Digitale",
      company: "Siemens, Paris",
      tasks: [
        "Pilotage du développement d'un agent Copilot Studio / IA pour automatiser la conformité SCM.",
        "Planification et exécution de la migration Windows 10 vers Windows 11.",
        "Conduite du changement et organisation de sessions de formation utilisateur.",
        "Conception et déploiement d'un tableau de bord Power BI pour l'analyse de l'utilisation de 6000+ terminaux mobiles.",
        "Support utilisateur N1 (Backup).",
      ],
    },
    {
      period: "2022 - 2023",
      title: "Assistant Chef de Projet Web",
      company: "Mosi consulting, Luxembourg",
      tasks: [
        "Planification et suivi des jalons de projet avec GanttProject.",
        "Mise en œuvre d'un service de formation en e-learning.",
        "Paramétrage et personnalisation d'un CRM SaaS.",
      ],
    },
    {
      period: "2020 - 2022",
      title: "Assistant Manager",
      company: "Goerge Lettre, Metz",
      tasks: [
        "Création et déploiement d'une campagne promotionnelle.",
        "Optimisation du référencement Google (SEO) et gestion de contenu web.",
        "Gestion des publications sur les réseaux sociaux de l'entreprise.",
      ],
    },
  ],
  education: [
    {
      period: "2023 - 2025",
      degree: "Master conseil et gestion de projet informatique",
      institution: "ISC Paris Business School",
    },
    {
      period: "2022 - 2023",
      degree: "Licence en gestion de projet",
      institution: "IUT de Metz",
    },
    {
      period: "2020 - 2022",
      degree: "BTS SAM (support à l'action managériale)",
      institution: "Lycée Robert Schuman, Metz",
    },
  ],
  languages: [
    { name: "Français", level: "Maternelle" },
    { name: "Anglais", level: "B2 (TOEIC)" },
    { name: "Espagnol", level: "A1" },
  ],
};

// --- Composant Principal App ---
const App = () => {
  const [activeSection, setActiveSection] = useState('accueil'); // État pour la navigation

  // Fonction utilitaire pour le scrolling
  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Composant pour les sections
  const Section = ({ id, title, icon: Icon, children, bgColor = "bg-white", textColor = "text-gray-900" }) => (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${textColor} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-12 flex items-center justify-center space-x-3">
          {Icon && <Icon className="w-8 h-8 text-indigo-600"/>}
          <span>{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );

  // Composant de Carte d'Expérience
  const ExperienceCard = ({ period, title, company, tasks }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-500 my-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{period}</span>
      </div>
      <p className="text-md font-semibold text-gray-600 mb-4">{company}</p>
      <ul className="space-y-2 list-none p-0">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1 mr-2"/>
            <span className="text-sm md:text-base">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Composant de Contact Form (Simulé)
  const ContactForm = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus('loading');
      // Simulation d'un envoi réussi
      setTimeout(() => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
    };

    return (
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Contactez-moi directement</h3>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-indigo-500 focus:ring-indigo-500"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50"
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
        {status === 'success' && (
          <p className="text-center text-green-600 font-medium mt-4">Message envoyé avec succès ! Je vous répondrai rapidement.</p>
        )}
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Barre de Navigation Fixe */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-extrabold text-indigo-600">A. Thiam Portfolio</h1>
            </div>
            <div className="flex items-center space-x-6">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'experiences', label: 'Expériences' },
                { id: 'competences', label: 'Compétences' },
                { id: 'formation', label: 'Formation' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hidden md:inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out 
                    ${activeSection === item.id 
                        ? 'border-b-2 border-indigo-500 text-indigo-600' 
                        : 'text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Section Accueil/Hero */}
        <Section id="accueil" title="Accueil" icon={Globe} bgColor="bg-indigo-700" textColor="text-white">
          <div className="pt-8 pb-16 text-center">
            {/* Ajout de la photo de profil ici */}
            <div className="mb-8">
                // La ligne à modifier dans le fichier src/App.js
            <img
              src={portfolioData.photoUrl}
              // MODIFICATION ICI : On enlève les mots "Portrait" et "Photo"
              alt={portfolioData.name + ", Chef de Projet SI"} 
              className="w-36 h-36 rounded-full mx-auto object-cover ring-4 ring-indigo-300 ring-offset-4 ring-offset-indigo-700 shadow-2xl transition duration-300 hover:scale-105"
              onError={(e) => {
                  // Fallback au cas où l'image n'est pas trouvée
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/150x150/ffffff/1f2937?text=Alliou+T";
              }}
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
              {portfolioData.name}
            </h1>
            <p className="text-2xl font-light text-indigo-200 mb-8">
              {portfolioData.title}
            </p>
            <div className="max-w-3xl mx-auto mb-10 p-6 bg-indigo-800/50 rounded-xl shadow-2xl">
              <p className="text-lg font-medium leading-relaxed">
                {portfolioData.profile}
              </p>
            </div>
            
            {/* Infos de Contact Rapides */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center space-x-2 text-white hover:text-indigo-200 transition duration-150">
                    <Phone className="w-5 h-5"/>
                    <span className="font-medium">{portfolioData.contact.phone}</span>
                </a>
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center space-x-2 text-white hover:text-indigo-200 transition duration-150">
                    <Mail className="w-5 h-5"/>
                    <span className="font-medium">{portfolioData.contact.email}</span>
                </a>
                <span className="flex items-center space-x-2 text-white">
                    <MapPin className="w-5 h-5"/>
                    <span className="font-medium">{portfolioData.contact.location}</span>
                </span>
            </div>

            <button
                onClick={() => scrollToSection('experiences')}
                className="mt-12 px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-xl text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
            >
                Voir mes Expériences Clés
            </button>
          </div>
        </Section>

        {/* Section Expériences */}
        <Section id="experiences" title="Expériences Professionnelles" icon={Briefcase} bgColor="bg-gray-100">
          <div className="grid grid-cols-1 gap-8">
            {portfolioData.experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Section>

        {/* Section Compétences */}
        <Section id="competences" title="Compétences & Expertise" icon={Zap} bgColor="bg-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillGroup title="Gestion de Projet & Méthodes" skills={portfolioData.skills.project} />
            <SkillGroup title="Data, BI & Analyse" skills={portfolioData.skills.data} />
            <SkillGroup title="Technologies Microsoft & SI" skills={portfolioData.skills.tech} />
            <SkillGroup title="Certifications Clés" skills={portfolioData.skills.certifications} />
            <SkillGroup title="Langues" skills={portfolioData.languages.map(l => `${l.name} (${l.level})`)} icon={Languages} />
          </div>
        </Section>

        {/* Section Formation */}
        <Section id="formation" title="Formation Académique" icon={GraduationCap} bgColor="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-indigo-500 hover:shadow-xl transition duration-300">
                <p className="text-sm font-semibold text-indigo-600 mb-1">{edu.period}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{edu.degree}</h3>
                <p className="text-md text-gray-600">{edu.institution}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section Contact */}
        <Section id="contact" title="Discutons de Votre Projet" icon={Mail} bgColor="bg-indigo-700" textColor="text-white">
          <div className="text-center mb-8">
            <p className="text-lg text-indigo-200">
              Intéressé par mon profil ou un projet de transformation digitale ? Envoyez-moi un message !
            </p>
          </div>
          <ContactForm />
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Alliou Thiam. Tous droits réservés. Développé en React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

// Composant de Groupe de Compétences
const SkillGroup = ({ title, skills, icon: Icon = Zap }) => (
  <div className="p-6 bg-gray-50 rounded-xl shadow-lg border-t-2 border-indigo-400">
    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
      <Icon className="w-5 h-5 text-indigo-600" />
      <span>{title}</span>
    </h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center text-gray-700 text-base">
          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default App;