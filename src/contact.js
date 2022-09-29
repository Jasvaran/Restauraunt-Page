function homeTab() {
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');

    let phoneNum = document.createElement('div');
    phoneNum.classList.add('phone-number');
    phoneNum.textContent = "+1-209-463-4400"
    homeDiv.appendChild(phoneNum)

    let mapDiv = document.createElement('div');
    

    let googleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20235.828354300946!2d-121.3062152379493!3d37.93742015638483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80901298bdce82a7%3A0x28f68a836296483!2sAlfalfa&#39;s%20Pizza%20and%20Deli!5e0!3m2!1sen!2sus!4v1664416452534!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    mapDiv.innerHTML = googleMap
    homeDiv.appendChild(mapDiv);
    

    return homeDiv;
}



function renderContact() {
    let main = document.getElementById('main-content');
    main.textContent = "";

    main.appendChild(homeTab());
}

export default renderContact;