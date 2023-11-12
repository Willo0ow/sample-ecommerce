export const useHomePageContent = async <T>(slug: string) => {
  const story = useState(slug);

  const {
    data: content,
    pending,
    refresh,
  } = await useAsyncData<T>(slug, async () => {
    const { findOne } = useStrapi();
    const response = await findOne(slug, {
      populate: {
        sections: { populate: "*" },
        route: { populate: "*" },
        heroImage: { populate: "*" },
      },
    });
    return response.data as T;
  });

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
