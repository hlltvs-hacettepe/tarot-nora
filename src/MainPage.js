import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import CardDetail from "./CardDetail";
import { IconButton, Menu, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // arama yapmak için bir text değişken oluşturuldu
  const [searchText, setSearchText] = React.useState("");

  // arama yapmak için bir fonksiyon oluşturuldu
  const handleSearch = (value) => {
    const searchValue = value.target.value.toLowerCase(); // gelen değeri küçük harfe çevir
    setSearchText(searchValue);
  
    const filterItems = (item) => {
      if (item.title.toLowerCase().includes(searchValue)) {
        return true;
      }
  
      return false;
    };
  
    // Filtreleme işlemi
    const newFilteredNavigation = NAVIGATION.map((item) => {
      if (item.kind === "header" || item.kind === "divider") {
        return item; // Başlıklar ve ayırıcıları olduğu gibi bırak
      }
  
      if (filterItems(item)) {
        return item; // Eğer aranan terimi içeriyorsa geri döndür
      }
  
      return null; // Eğer filtreye uymuyorsa kaldır
    }).filter(Boolean); // null değerleri filtrelemek için
  
    setFilteredNavigation(newFilteredNavigation); // Filtrelenmiş sonuçları güncelle
    console.log("neww filteredNavigation", newFilteredNavigation); // Güncellenmiş veriyi konsola yazdır
  
  };

  function SidebarFooter({ mini }) {
    return (
      <Typography
        variant="caption"
        sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
      >
        {mini
          ? "© MUI"
          : `© ${new Date().getFullYear()} Made with love by MUI`}
      </Typography>
    );
  }

  const NAVIGATION = [
    {
      kind: "header",
      title: "Büyük Arkana",
    },
    {
      kind: "page",
      segment: "the_fool",
      title: "0 - Deli",
      icon: <DashboardIcon />, // Her bir kartı temsil eden bir simge kullanılabilir
    },
    {
      kind: "page",
      segment: "the_magician",
      title: "1 - Büyücü",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_high_priestess",
      title: "2 - Azize",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_empress",
      title: "3 - İmparatoriçe",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_emperor",
      title: "4 - İmparator",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_hierophant",
      title: "5 - Aziz",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_lovers",
      title: "6 - Aşıklar",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_chariot",
      title: "7 - Savaş Arabası",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "strength",
      title: "8 - Güç",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_hermit",
      title: "9 - Ermiş",
      icon: <DashboardIcon />,
    },
    {
      segment: "wheel_of_fortune",
      title: "10 - Kader Çarkı",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "justice",
      title: "11 - Adalet",
      icon: <DashboardIcon />,
    },
    {
      segment: "the_hanged_man",
      title: "12 - Asılan Adam",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "death",
      title: "13 - Ölüm",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "temperance",
      title: "14 - Denge",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_devil",
      title: "15 - Şeytan",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_tower",
      title: "16 - Yıkılan Kule",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_star",
      title: "17 - Yıldız",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_moon",
      title: "18 - Ay",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_sun",
      title: "19 - Güneş",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "judgement",
      title: "20 - Mahkeme",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "the_world",
      title: "21 - Dünya",
      icon: <DashboardIcon />,
    },
    { kind: "divider" },

    {
      kind: "header",
      segment: "wands",
      title: "Değnekler",
      icon: <DescriptionIcon />, // Değnek serisi için bir simge olabilir
    },
    {
      kind: "page",

      segment: "wand_ace",
      title: "Değnek Ası",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "wand_two",
      title: "Değnek İkilisi",
      icon: <DashboardIcon />,
    },
    {
      kind: "page",

      segment: "wand_three",
      title: "Değnek Üçlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_four",
      title: "Değnek Dörtlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_five",
      title: "Değnek Beşlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_six",
      title: "Değnek Altılısı",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_seven",
      title: "Değnek Yedilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_eight",
      title: "Değnek Sekizlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_nine",
      title: "Değnek Dokuzlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_ten",
      title: "Değnek Onlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_page",
      title: "Değnek Prensi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_knight",
      title: "Değnek Şövalyesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_queen",
      title: "Değnek Kraliçesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "wand_king",
      title: "Değnek Kralı",
      icon: <DashboardIcon />,
    },

    { kind: "divider", title: "" },
    {
      kind: "header",
      segment: "cups",
      title: "Kupalar",
      icon: <DescriptionIcon />, // Kupa serisi için bir simge olabilir
    },
    {
      segment: "cup_ace",
      title: "Kupa Ası",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_two",
      title: "Kupa İkilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_three",
      title: "Kupa Üçlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_four",
      title: "Kupa Dörtlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_five",
      title: "Kupa Beşlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_six",
      title: "Kupa Altılısı",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_seven",
      title: "Kupa Yedilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_eight",
      title: "Kupa Sekizlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_nine",
      title: "Kupa Dokuzlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_ten",
      title: "Kupa Onlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_page",
      title: "Kupa Prensi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_knight",
      title: "Kupa Şövalyesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_queen",
      title: "Kupa Kraliçesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "cup_king",
      title: "Kupa Kralı",
      icon: <DashboardIcon />,
    },

    { kind: "divider" },

    {
      kind: "header",
      segment: "swords",
      title: "Kılıçlar",
      icon: <DescriptionIcon />, // Kılıç serisi için bir simge olabilir
    },
    {
      segment: "sword_ace",
      title: "Kılıç Ası",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_two",
      title: "Kılıç İkilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_three",
      title: "Kılıç Üçlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_four",
      title: "Kılıç Dörtlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_five",
      title: "Kılıç Beşlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_six",
      title: "Kılıç Altılısı",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_seven",
      title: "Kılıç Yedilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_eight",
      title: "Kılıç Sekizlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_nine",
      title: "Kılıç Dokuzlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_ten",
      title: "Kılıç Onlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_page",
      title: "Kılıç Prensi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_knight",
      title: "Kılıç Şövalyesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_queen",
      title: "Kılıç Kraliçesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "sword_king",
      title: "Kılıç Kralı",
      icon: <DashboardIcon />,
    },

    { kind: "divider" },
    {
      segment: "pentacles",
      title: "Tılsımlar",
      icon: <DescriptionIcon />, // Tılsım serisi için bir simge olabilir
    },
    {
      segment: "pentacle_ace",
      title: "Tılsım Ası",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_two",
      title: "Tılsım İkilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_three",
      title: "Tılsım Üçlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_four",
      title: "Tılsım Dörtlüsü",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_five",
      title: "Tılsım Beşlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_six",
      title: "Tılsım Altılısı",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_seven",
      title: "Tılsım Yedilisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_eight",
      title: "Tılsım Sekizlisi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_nine",
      title: "Tılsım Dokuzlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_ten",
      title: "Tılsım Onlusu",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_page",
      title: "Tılsım Prensi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_knight",
      title: "Tılsım Şövalyesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_queen",
      title: "Tılsım Kraliçesi",
      icon: <DashboardIcon />,
    },
    {
      segment: "pentacle_king",
      title: "Tılsım Kralı",
      icon: <DashboardIcon />,
    },
  ];

  // filtrelenmiş navigation listesi
  const [filteredNavigation, setFilteredNavigation] =
    React.useState(NAVIGATION);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <>
      
      <AppProvider
        navigation={filteredNavigation}
        //navigation={NAVIGATION}
        router={router}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
          title: "Tarot Nora",
        }}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout
          slots={{ /*toolbarActions: Search, */ sidebarFooter: SidebarFooter }}
        >
          <TextField
        id="search"
        label="Search"
        type="search"
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
        sx={{ mt: 2 }}
      />
          <CardDetail pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </>
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
