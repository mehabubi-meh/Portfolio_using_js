// OUTER CONTAINER
const outerdiv = document.getElementById("outerBox");
outerdiv.style.cssText = `
  padding: 20px;
  margin: 0;
  
  display: flex;
  gap: 20px;
  background-color: #111;
`;

// LEFT PROFILE DIV
const innerdiv = document.createElement("div");
innerdiv.style.cssText = `
  padding: 30px 20px;
  background-color: #1e1e1e;
  color: white;
  width: 400px;
  height: 700px;
  border-radius: 20px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  position: sticky;
  top: 0;
  height: 700px;
 
`;
outerdiv.appendChild(innerdiv);

const imgContainer = document.createElement("div");
imgContainer.style.cssText = `
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
  background-color: #2a2a2a;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const img = document.createElement("img");
img.src = "logom.jpg";
img.style.cssText = `
 width: 140px;
  height: 155px;
  margin: 0 auto 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;`;
imgContainer.appendChild(img);
innerdiv.appendChild(imgContainer);

const name = document.createElement("h2");
name.innerText = "Richard hanrick";
name.style.cssText = `
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`;
innerdiv.appendChild(name);

const role = document.createElement("div");
role.innerText = "Web developer";
role.style.cssText = `
  text-align: center;
  margin: 8px auto 20px;
  padding: 6px 12px;
  background-color: #333;
  border-radius: 10px;
  width: fit-content;
  font-size: 13px;
`;
innerdiv.appendChild(role);

const divider = document.createElement("hr");
divider.style.cssText = `
  border: none;
  height: 1px;
  background-color: #444;
  margin: 25px 0;
`;
innerdiv.appendChild(divider);

function createCard(icon, label, value) {
  const card = document.createElement("div");
  card.style.cssText = `
    background-color: #2c2c2c;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  `;
  const iconDiv = document.createElement("div");
  iconDiv.innerText = icon;
  iconDiv.style.cssText = `font-size: 18px;`;
  const textDiv = document.createElement("div");
  const labelEl = document.createElement("div");
  labelEl.innerText = label.toUpperCase();
  labelEl.style.cssText = `font-size: 10px; color: #aaa; margin-bottom: 5px;`;
  const valueEl = document.createElement("div");
  valueEl.innerText = value;
  valueEl.style.cssText = `font-size: 14px; color: #fff;`;
  textDiv.appendChild(labelEl);
  textDiv.appendChild(valueEl);
  card.appendChild(iconDiv);
  card.appendChild(textDiv);
  return card;
}

innerdiv.appendChild(createCard("📧", "Email", "xyz123@gmail..com"));
innerdiv.appendChild(createCard("📱", "Phone", "+91 9876543210"));
innerdiv.appendChild(createCard("🎂", "Birthday", "june 23 1982"));
innerdiv.appendChild(createCard("📍", "Location", "Sacramento, California, USA"));

// RIGHT PANEL
const innerdiv1 = document.createElement("div");
innerdiv1.id = "innerdiv1";
innerdiv1.style.cssText = `
  width: 100%;
  height: 1000px;
  background-color: #1e1e1e;
  border-radius: 20px;
  font-family: 'Segoe UI', sans-serif;
  padding: 40px;
  color: white;
  overflow: hidden; 
`;
outerdiv.appendChild(innerdiv1);

const navbar = React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "25px",
    fontSize: "14px",
    marginBottom: "30px"
  }
},
  React.createElement("a", { href: "#", style: { color: "white", textDecoration: "none" } }, "About"),
  React.createElement("a", { href: "#", style: { color: "white", textDecoration: "none" } }, "Resume"),
  React.createElement("a", { href: "#", style: { color: "white", textDecoration: "none" } }, "Profile"),
  React.createElement("a", { href: "#", style: { color: "white", textDecoration: "none" } }, "Contact")
);

function createServiceCard(icon, title, desc) {
  return React.createElement("div", {
    style: {
      flex: "1",
      background: "linear-gradient(to right, #1f1f1f, #2c2c2c)",
      padding: "20px",
      borderRadius: "15px",
      color: "white",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
      display: "flex",
      gap: "15px",
      alignItems: "flex-start"
    }
  },
    React.createElement("div", {
      style: {
        fontSize: "30px",
        color: "gold"
      }
    }, icon),
    React.createElement("div", {},
      React.createElement("h3", {
        style: {
          margin: "0 0 8px",
          fontSize: "16px",
          color: "white"
        }
      }, title),
      React.createElement("p", {
        style: {
          margin: "0",
          fontSize: "14px",
          color: "#ccc"
        }
      }, desc)
    )
  );
}

const whatDoingSection = React.createElement("div", {},
  React.createElement("h2", { style: { fontSize: "24px", fontWeight: "bold", margin: "40px 0 20px", color: "white" } }, "What I'm Doing"),
  React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  },
    React.createElement("div", { style: { display: "flex", gap: "20px" } },
      createServiceCard("✏️", "Web Design", "The most modern and high-quality design made at a professional level."),
      createServiceCard("💻", "Web Development", "High-quality development of sites at the professional level.")
    ),
    React.createElement("div", { style: { display: "flex", gap: "20px" } },
      createServiceCard("📱", "Mobile Apps", "Professional development of applications for iOS and Android."),
      createServiceCard("📷", "Photography", "I make high-quality photos of any category at a professional level.")
    )
  ), React.createElement("h2", { style: { fontSize: "24px", fontWeight: "bold", margin: "40px 0 20px" } }, "Testimonials"),
  React.createElement("div", { style: { display: "flex", gap: "20px" } },
    React.createElement("div", {
      style: {
        flex: "1",
        backgroundColor: "#2a2a2a",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column"
      }
    },
      React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png", style: { width: "50px", marginBottom: "10px" } }),
      React.createElement("strong", null, "Daniel Lewis"),
      React.createElement("p", null, "Richard was hired to create a corporate identity. We were very pleased with the work...")
    ),
    React.createElement("div", {
      style: {
        flex: "1",
        backgroundColor: "#2a2a2a",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column"
      }
    },
      React.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/4333/4333603.png", style: { width: "50px", marginBottom: "10px" } }),
      React.createElement("strong", null, "Jessica Miller"),
      React.createElement("p", null, "Richard was hired to create a corporate identity. We were very pleased with the work...")
    )
  ),
  React.createElement("h2", { style: { fontSize: "24px", fontWeight: "bold", margin: "40px 0 20px" } }, "Clients"),
  React.createElement("div", { style: { display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" } },
    React.createElement("img", { src: "logo1.png", style: { height: "100px" } }),
    React.createElement("img", { src: "logo.jpeg", style: { height: "100px" } }),
    React.createElement("img", { src: "logo3.webp", style: { height: "100px" } }),
    React.createElement("img", { src: "logo2.jpeg", style: { height: "100px" } })
  )
);

/*const root = ReactDOM.createRoot(document.getElementById("innerdiv1"));
root.render(aboutSection);
);*/

const aboutSection = React.createElement("div", {},
  navbar,
  React.createElement("h1", { style: { fontSize: "32px", fontWeight: "bold", marginBottom: "10px" } }, "About Me"),
  React.createElement("div", { style: { width: "40px", height: "4px", backgroundColor: "gold", marginBottom: "25px", borderRadius: "2px" } }),
  React.createElement("p", { style: { marginBottom: "20px" } },
    `I’m Creative Director and UI/UX Designer from Sydney, Australia...`
  ),
  whatDoingSection
);

const root = ReactDOM.createRoot(document.getElementById("innerdiv1"));
root.render(aboutSection);
