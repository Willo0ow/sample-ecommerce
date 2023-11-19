import type { ApiContactPageContactPage } from "~~/types/generated";

export const useContactPageContent = async () => {
  const story = useState("contact-page");

  const {
    data: content,
    pending,
    refresh,
  } = await useAsyncData<ApiContactPageContactPage>(
    "contact-page",
    async () => {
      const all = "populate=%2A";

      const response = await $fetch<ApiContactPageContactPage>(
        `http://localhost:1337/api/contact-page?${all}`
      );

      return response.data;
    }
  );

  if (!story.value) {
    refresh();
  }

  return { content, pending };
};
