function initSidebar() {
  const sidebar = document.getElementById('sideBar');
  const hamburguerIcon = document.getElementById('hamburguerIcon');
  const closeBtn = document.getElementsByClassName('close-sidebar')[0];
  const navigationTag = document.getElementsByClassName('sidebarNavigation');

  const displaySidebar = () => {
    sidebar.style.display = 'block';
  };

  const closeSideBar = () => {
    sidebar.style.display = 'none';
  };

  hamburguerIcon.addEventListener('click', displaySidebar);
  closeBtn.addEventListener('click', closeSideBar);
  Array.from(navigationTag).forEach((value) => {
    value.addEventListener('click', closeSideBar);
  });

  window.onclick = function window(event) {
    if (event.target === sidebar) {
      sidebar.style.display = 'none';
    }
  };
}

export default initSidebar;