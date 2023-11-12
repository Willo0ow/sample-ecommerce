export const useHomePageContent = async <T>() => {
  const story = useState("home-page");

  const {
    data: content,
    pending,
    refresh,
  } = await useAsyncData<T>("home-page", async () => {
    const response = await $fetch<T>(
      "http://localhost:1337/api/home-page?populate[heroImage]=%2A&populate[sections][on][common.testimonials][populate]=%2A&populate[sections][on][common.grid-of-cards][populate]=%2A"
    );

    return response.data;
  });

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
