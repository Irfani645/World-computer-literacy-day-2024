document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin);

    const departments = [
        {
            name: "Emergency Department",
            info: "Utilizes computer systems for rapid patient triage, electronic health records, and real-time monitoring of vital signs.",
            image: "FB_IMG_1733053562433.jpg?height=80&width=80&text=ER"
        },
        {
            name: "Radiology",
            info: "Employs advanced imaging software, PACS (Picture Archiving and Communication System) for storing and accessing medical images.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M5-49y7uNJ26qgllOSiRdtOT_96-eA9hyA&s?height=80&width=80&text=RAD"
        },
        {
            name: "Laboratory",
            info: "Uses Laboratory Information Systems (LIS) for managing test orders, results, and integrating with other hospital systems.",
            image: "https://study.com/cimages/videopreview/qjwtc6kx8q.jpg?height=80&width=80&text=LAB"
        },
        {
            name: "Pharmacy",
            info: "Implements computerized physician order entry (CPOE) systems and automated dispensing cabinets for medication management.",
            image: "https://peshawar.abasyn.edu.pk/uploads/images/department/department-slider/pharmacy.jpg?height=80&width=80&text=PHARM"
        },
        {
            name: "Intensive Care Unit",
            info: "Utilizes advanced patient monitoring systems, electronic charting, and decision support tools for critical care.",
            image: "https://cdn.apollohospitals.com/health-library-prod/2019/06/Critical-Care-Unit.jpg?height=80&width=80&text=ICU"
        },
        {
            name: "Surgery",
            info: "Employs surgical planning software, robotic-assisted surgery systems, and electronic documentation for procedures.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDZcxhaDtbtAOhMnOyvXcbjRo8hvDRt3TaA&s?height=80&width=80&text=SURG"
        },
        {
            name: "Outpatient Clinics",
            info: "Uses electronic scheduling systems, telemedicine platforms, and patient portals for improved access to care.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B8hkGYLT05zVO7QRUMJ83XsvxKhoIcDG7Q&s?height=80&width=80&text=OPC"
        },
        {
            name: "Administration",
            info: "Implements hospital management systems, financial software, and data analytics tools for efficient operations.",
            image: "https://www.henryharvin.com/blog/wp-content/uploads/2021/06/Hospital-Management-1024x577.jpg?height=80&width=80&text=ADMIN"
        }
    ];

    const departmentGrid = document.querySelector('.department-grid');
    departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.innerHTML = `
            <img src="${dept.image}" alt="${dept.name}">
            <h3>${dept.name}</h3>
            <p>${dept.info}</p>
        `;
        departmentGrid.appendChild(card);
    });

    const animatedTextElement = document.getElementById('animatedText');
    const textContent = [
        "World Computer Literacy Day, December 2, 2024",
        "Empowering healthcare through digital knowledge",
        "Bridging the digital divide in medical practice",
        "Enhancing patient care with technological skills",
        "Promoting digital inclusion in healthcare",
        "Advancing medical research with computer literacy",
        "Streamlining healthcare operations through technology",
        "Improving global health outcomes with digital competence"
    ];

    let currentTextIndex = 0;

    function animateText() {
        gsap.to(animatedTextElement, {
            duration: 2,
            text: textContent[currentTextIndex],
            ease: "none",
            onComplete: () => {
                setTimeout(() => {
                    currentTextIndex = (currentTextIndex + 1) % textContent.length;
                    animateText();
                }, 3000);
            }
        });
    }

    animateText();

    const modal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const genderSelect = document.getElementById('genderSelect');
    const submitNameBtn = document.getElementById('submitName');
    const nameAlert = document.getElementById('nameAlert');
    const alertMessage = document.getElementById('alertMessage');

    modal.style.display = 'block';

    submitNameBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const gender = genderSelect.value;

        if (name) {
            modal.style.display = 'none';
            const message = `Welcome to World Computer Literacy Day, ${gender} ${name}! Explore how technology transforms healthcare.`;
            showAlert(message);
        } else {
            alert('Please enter your name.');
        }
    });

    function showAlert(message) {
        alertMessage.textContent = message;
        nameAlert.style.display = 'block';
        gsap.from(nameAlert, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        });
        setTimeout(() => {
            gsap.to(nameAlert, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => {
                    nameAlert.style.display = 'none';
                }
            });
        }, 5000);
    }

    const departmentCards = document.querySelectorAll('.department-card');
    departmentCards.forEach(card => {
        card.addEventListener('click', () => {
            const department = card.querySelector('h3').textContent;
            const info = card.querySelector('p').textContent;
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.in'
                    });
                }
            });
            showAlert(`${department}: ${info}`);
        });
    });

    // Animate the computer literacy section
    gsap.from('#computer-literacy', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '#computer-literacy',
            start: 'top 80%'
        }
    });

    // Animate department cards
    gsap.from('.department-card', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
            trigger: '#departments',
            start: 'top 80%'
        }
    });
});
