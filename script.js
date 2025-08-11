function savePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
  
    doc.html(document.querySelector("#resume-content"), {
      callback: function (pdf) {
        pdf.save("Abhimanyu_CV.pdf");
      },
      margin: [20, 20, 20, 20],
      autoPaging: 'text',
      x: 10,
      y: 10,
      html2canvas: { scale: 0.6 }
    });
  }
  

  // Scroll spy for active nav link
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section[id]");
    let scrollY = window.scrollY + 150; // offset for navbar height
  
    sections.forEach(section => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
      let sectionId = section.getAttribute("id");
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll(".nav-menu a").forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(sectionId)) {
            link.classList.add("active");
          }
        });
      }
    });
  });