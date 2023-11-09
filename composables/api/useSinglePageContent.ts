export const useSinglePageContent = (slug: string) => {
  const { findOne } = useStrapi();

  const {
    data: content,
    pending,
    error,
    refresh,
  } = useAsyncData(slug, async () => {
    const homePage = await findOne(slug);
    return homePage.data.attributes;
  });

  return { content, pending, error, refresh };
};
