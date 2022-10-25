import { MantineThemeOverride } from "@mantine/core";
const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: `'Poppins', sans-serif`,
  headings: { fontFamily: "'Noto Sans', sans-serif" },
  defaultRadius: 8,
  components: {
    Button: { defaultProps: { sx: { fontWeight: 500 } } },
    Text: { defaultProps: { sx: { color: "#333333" } } },
  },
};
export default theme;
