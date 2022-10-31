import {
  Popover,
  Text,
  TextInput,
  ActionIcon,
  Image,
  SimpleGrid,
  Portal,
} from "@mantine/core";
import { MdSearch } from "react-icons/md";
import { useForm } from "@mantine/form";
import { useState } from "react";

const getUnsplashImages = async (query: string) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: {
        Authorization: "Client-ID csxLWJiE_H_MH1Jy2GxC_9JDuO6l3zyZLvF3LRXSa9g",
      },
    }
  );
  const result = await response.json();

  const urlArray: string[] = result.results.map(
    ({ urls }: any) => urls.regular
  );
  return urlArray;
};

export default function UnsplashImagePicker({
  children,
  selectPhoto,
  close,
  opened,
}: {
  children: React.ReactNode;
  selectPhoto: (url: string) => void;
  close: () => void;
  opened: boolean;
}) {
  const form = useForm({ initialValues: { query: "" } });
  const [photos, setPhotos] = useState<string[]>([]);

  const handleSubmit = form.onSubmit(async ({ query }) => {
    const urls = await getUnsplashImages(query);
    console.log(urls);
    setPhotos(urls);
  });

  return (
    <Popover opened={opened}>
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown sx={{ minWidth: 250 }} p={12}>
        <Text size={14} weight={600}>
          Photo search
        </Text>
        <Text
          size={14}
          weight={400}
          sx={{ fontFamily: "'Noto Sanas', sans-serif" }}
        >
          Search unsplash for photos
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput
            mt={12}
            {...form.getInputProps("query")}
            placeholder="keywords..."
            styles={{
              root: {
                filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))",
              },
              input: { border: "none" },
            }}
            rightSection={
              <ActionIcon type="submit" color={"blue"} variant="filled">
                <MdSearch />
              </ActionIcon>
            }
          />
        </form>

        <SimpleGrid spacing={8} cols={4} mt={20}>
          {photos.map((url) => (
            <Image
              sx={{
                cursor: "pointer",
                "&:hover": { scale: "2", zIndex: 10 },
                transition: "scale 300ms ease",
              }}
              radius={8}
              width={50}
              height={50}
              onClick={() => {
                selectPhoto(url);
                close();
              }}
              src={url}
            />
          ))}
        </SimpleGrid>
      </Popover.Dropdown>
    </Popover>
  );
}
