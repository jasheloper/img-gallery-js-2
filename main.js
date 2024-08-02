const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlts = [
    {altText: "Photo 1"},
    {altText: "Photo 2"},
    {altText: "Photo 3"},
    {altText: "Photo 4"},
    {altText: "Photo 5"}
  ];

/* Looping through images */

for (let i = 0; i < imgArr.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgArr[i]}`);
    newImage.setAttribute('alt', imgAlts[i].altText);
    thumbBar.appendChild(newImage);
    // newImage.addEventListener("click", () => {
    //     displayedImage.setAttribute('src', newImage.getAttribute('src'));
    //     displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    // });
}

// Alternatively, you can add one event listener to the thumb bar.
// event delegation vs event listener on every single image in a loop -> Reduced Memory Usage, Simplified Code

// In summary, event delegation allows for more efficient event handling by using a single listener on a parent element to manage events for its child elements, taking advantage of event bubbling in the DOM. 

thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});