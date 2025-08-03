function toggleProjects() {
      const proj = document.getElementById("projectList");
      proj.style.display = (proj.style.display === "none") ? "block" : "none";
    }

    window.onload = () => {
      document.getElementById("projectList").style.display = "block";
    };

    window.addEventListener('scroll', () => {
      document.getElementById("btnTop").style.display = window.scrollY > 150 ? 'block' : 'none';
    });
