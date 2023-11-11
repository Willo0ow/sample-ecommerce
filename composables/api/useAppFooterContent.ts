export const useAppFooterContent = async <T>(slug: string) => {
  const story = useState(slug);

  const {
    data: content,
    pending,
    refresh,
  } = await useAsyncData<T>(slug, async () => {
    const { findOne } = useStrapi();
    const response = await findOne(slug, {
      populate: {
        leftCta: { populate: "*" },
        rightCta: { populate: "*" },
        links: { populate: "*" },
      },
    });
    return response.data as T;
  });

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
