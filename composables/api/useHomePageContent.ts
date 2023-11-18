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
    const response = await $fetch<T>(
      `http://localhost:1337/api/home-page?${heroImage}&${testimonials}&${gridOfCards}&${expandables}`
    );

    return response.data;
  });

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
