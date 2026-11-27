document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("services");

  try {
    const response = await fetch("/api/services");

    if (!response.ok) {
      throw new Error("Failed to load services");
    }

    const services = await response.json();

    container.replaceChildren();

    services.forEach((service) => {
      const column = document.createElement("div");
      column.className = "col s12 m6 l4";

      const card = document.createElement("div");
      card.className = "card hoverable";

      const imageWrapper = document.createElement("div");
      imageWrapper.className = "card-image";

      const image = document.createElement("img");
      image.src = service.image;
      image.alt = service.name;
      image.loading = "lazy";

      imageWrapper.appendChild(image);

      const content = document.createElement("div");
      content.className = "card-content";

      const title = document.createElement("span");
      title.className = "card-title";
      title.textContent = service.name;

      const description = document.createElement("p");
      description.textContent = service.description;

      const details = document.createElement("p");
      details.className = "service-details";
      details.textContent = `$${service.price} · ${service.duration} minutes`;

      content.append(title, description, details);
      card.append(imageWrapper, content);
      column.appendChild(card);
      container.appendChild(column);
    });
  } catch (error) {
    console.error("Error loading services:", error);
    container.textContent = "Unable to load services.";
  }
});
