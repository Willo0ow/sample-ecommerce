export const useHomePageContent = async <T>() => {
  const story = useState("home-page");

  const {
    data: content,
    pending,
    refresh,
  } = await useAsyncData<T>("home-page", async () => {
    const heroImage = "populate[heroImage]=%2A";
    const gridOfCards =
      "populate[sections][on][common.grid-of-cards][populate]=%2A";
    const testimonials =
      "populate[sections][on][common.testimonials][populate]=%2A";
    const expandables =
      "populate[sections][on][common.expandable][populate][items][populate]=%2A";
    const partners =
      "populate[sections][on][common.partners-logos][populate]=%2A";
    const partnersLink =
      "populate[sections][on][common.partners-logos][populate][bottomLink][populate]=%2A";
    const partnersLogos =
      "populate[sections][on][common.partners-logos][populate][logos][populate]=%2A";
    const featuredItems =
      "populate[sections][on][common.featured-items][populate]=%2A";
    // TODO populate cta route
      const featuredItemsLink =
      "populate[sections][on][common.featured-items][populate][ctaLink][populate]=%2A";

    const response = await $fetch<T>(
      `http://localhost:1337/api/home-page?${heroImage}&${testimonials}&${gridOfCards}&${expandables}&${partnersLink}&${partners}&${partnersLogos}&${featuredItems}`
    );

    return response.data;
  });

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
