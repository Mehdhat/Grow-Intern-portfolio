function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
sidebar.computedStyleMap.display='flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.computedStyleMap.display='none';
}