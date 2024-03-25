import data from "./data.js";
console.log(data);
const template = document.querySelector(".job__template");
const ul = document.querySelector(".job__list");

data.forEach((job) => {
  const {
    featured,
    company,
    location,
    contract,
    postedAt,
    logo,
    position,
    languages,
  } = job;
  const li = template.content.cloneNode(true);
  console.log(logo);

  const image = li.querySelector(".job__image");
  image.src = logo;

  const jobCompany = li.querySelector(".job__company");
  jobCompany.textContent = `${company} `;

  const jobPosition = li.querySelector(".job__title");
  jobPosition.textContent = `${position} `;

  const jobLanguages = li.querySelector(".job__languages");
  jobLanguages.textContent = `${languages} `;

  jobLanguages.innerHTML = `${languages
    .map(
      (lang) =>
        `<span style="background-color: #effafa; color: #5ca5a5; padding: 4px 9px; border-radius: 3px; margin-right:15px; font-size:16px; line-height:24px; font-weight:700;">${lang}</span>`
    )
    .join(" ")}`;

  const jobPlace = li.querySelector(".job__place");
  jobPlace.textContent = `${postedAt} | ${contract} | ${location}`;

  ul.appendChild(li);
});
